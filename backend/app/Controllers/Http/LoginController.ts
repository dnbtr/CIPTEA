import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import UserValidator from 'App/Validators/UserValidator';

export default class LoginController {
  
  // Rota para teste
  public async RotaTeste({ request, response}: HttpContextContract) {

    const data = request.only(['username', 'password']);

    const validUser = await request.validate(UserValidator);

    try {
      const found = await User.findByOrFail('username', data.username);
      return response.status(518).json(found);

    } catch (error) {
      console.log(error);
    }
  }

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

  public async CreateUser({ request, response }: HttpContextContract) {
    
    await request.validate(UserValidator);

    const data = request.only(['username', 'password']);

    const userCredentials = {
      username: data.username,
      password: data.password,
    };

    // Procurar usuário no banco
    // Método correto seria o FindOneOrFail?
    const userExists = await User.find(userCredentials.username);
    console.log(`userExists = ${userExists}`);

    /* 
    Sobre o código HTTP adequado para o retorno
    Ver https://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists
     */
    if (userExists) {
      return response.status(409).json({
        message: 'Usuário já existe em nosso sistema!',
      });
    }

    const createdUser = await User.create(userCredentials);
    console.log(createdUser.$isPersisted);
  }

  public async UserLogin({ request, response }: HttpContextContract) {
    // Valida o username e password enviados
    // Exception é auto-gerenciada pelo Adonis (ver https://preview.adonisjs.com/guides/validator/usage#handling-errors)
    await request.validate(UserValidator);

    // Desconsidera qualquer outro parâmetro que vier no JSON
    const data = request.only(['username', 'password']);

    const userCredentials = {
      username: data.username,
      password: data.password,
    };

    // const userExists = await User.findByOrFail(User, username, username)

    if (!userExists) {
      return response.status(404).json({
        message: 'Usuário e/ou senha incorretos',
      });
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
