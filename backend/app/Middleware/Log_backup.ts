/* 
  Este é um middleware global, que é chamado em todos os requests
  Middlewares globais são registrados em Server.middleware.register
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Logger from '@ioc:Adonis/Core/Logger';

export default class Log {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    // Loga no console de onde veio e quais parâmetros o request tem.
    Logger.info(`${request.method()} ${request.url()}, ${request.ip()}`);
    const postData = Logger.child({ data: request.post() });
    postData.info('Request info');

    if (request.hasBody()) {
    }

    await next();
  }
}
