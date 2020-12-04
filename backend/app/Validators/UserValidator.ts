import { rules, schema } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
	 Regras de min e maxLength devem ser iguais às descritas nas migrations
	*/
  public schema = schema.create({
    //trim = true corta espaços em branco
    username: schema.string({}, [
			rules.required(),
			rules.maxLength(80)
		]),
    password: schema.string({}, [
      rules.required(),
      rules.minLength(8),
      rules.maxLength(60),
    ]),
  });

  public messages = {
    'username.required': 'username é um parâmetro obrigatório',
		'username.maxLength': 'username não pode conter mais que 80 caracteres',
		
    'password.required': 'password é um parâmetro obrigatório',
    'password.minLength': 'password deve conter no mínimo 8 caracteres',
    'password.maxLength': 'password não pode conter mais que 60 caracteres',
  };
}
