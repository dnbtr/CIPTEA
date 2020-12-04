/* 
  Este é um middleware global, que é chamado em todos os requests
  Middlewares globais são registrados em Server.middleware.register
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class Log {
  public async handle(
    { request, logger }: HttpContextContract,
    next: () => Promise<void>
  ) {

    // Todas as requisições que forem recebidas terão esse log mínimo
    logger.info(`${request.method()} ${request.url()}, ${request.ip()}`);

    await next();
  }
}
