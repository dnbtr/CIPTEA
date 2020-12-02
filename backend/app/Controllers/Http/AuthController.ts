// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const User = use('App/Models/User');

export default class AuthController {

  async register({ request }) {
    const data = request.only([
      'username',
      'email',
      'password',
      'nomeCompleto',
      'matricula',
    ]);
// Passar para lower case o email do login
    const user = await User.create(data);

    return user;
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
}
