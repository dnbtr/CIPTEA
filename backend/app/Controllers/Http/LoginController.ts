import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class LoginController {
  // Usar essa função apenas para debug
  public async UserReturnAll({ response }: HttpContextContract) {
    const allUsers = await User.all();

    return response.status(200).json({
      message: 'All users',
      users: {
        allUsers,
      },
    });
  }

  public async UserCreate({ request, response }: HttpContextContract) {

    const data = request.only(['username', 'password']);

    const userCredentials = {
      username: data.username,
      password: data.password,
    };
    console.log(userCredentials);

    // Procurar usuário no banco
    // Método correto seria o FindOneOrFail?
    const userFound = await User.find(userCredentials.username);

    /* 
    Sobre o código HTTP adequado para o retorno
    Ver https://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists
     */
    if (userFound) {
      return response.status(409).json({
        message: 'Usuário já existe em nosso sistema!',
      });
    }

    await User.create(userCredentials);
  }

  public async UserLogin({ request, response }: HttpContextContract) {
    
    const data = request.only(['username', 'password']);

    const userCredentials = {
      username: data.username,
      password: data.password,
    };

    const userFound = await User.first(userCredentials.username);

    if (!userFound) {
      return response.status(404).json({
        message: 'Usuário e/ou senha incorretos',
      });
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
