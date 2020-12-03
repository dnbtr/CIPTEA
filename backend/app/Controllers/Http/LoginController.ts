import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class LoginController {
  public async index({}: HttpContextContract) {}

  public async createUser({ request }: HttpContextContract) {
    const data = request.only(['username', 'password']);
    console.log(data.username);
    console.log(data.password);

    return 'ok';
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
