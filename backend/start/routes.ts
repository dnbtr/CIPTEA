/* 
Notas importantes - 

Fonte - https://preview.adonisjs.com/guides/http/controllers
The AdonisJS has a simple rule to treat the routes file as the source of truth.
One should be able to see all the registered routes, controllers and middleware attached to them at a single place
and then branch out from there to work on individual pieces.
*/

import Route from "@ioc:Adonis/Core/Route";
// import { schema } from "@ioc:Adonis/Core/Validator";

Route.get('/logger_example', async ({ logger }) => {
  logger.info('An info message')
  return 'handled (see console for logs)'
})

Route.post("/login", 'LoginController.createUser');

// Route.get("/files/:file", "FileController.show");
// Route.post("/register", "AuthController.register");

// Route.post('/authenticate', 'AuthController.authenticate')./validator('AuthValidator');

// Rotas terão este formato? Não há guia para criação de validators separados
// Pesquisar mais este ponto
// Route.post("/authenticate", async ({ request }) => {
//   const validated = await request.validate({
//     schema: schema.create({
//       marks: schema.number(),
//     }),
//   });
// });


// Rotas antigas - refatorar
/* Route.post("/forgot", "ForgotPasswordController.store").validator(
  "ForgotValidator"
);

Route.post("/reset", "ResetPasswordController.store").validator(
  "ResetValidator"
);
 */
// Route.get("/app", "AppController.index").middleware(["auth"]);

// Cadastro de carteira
// Excluir rotas update
// Route.group(() => {
//   Route.resource("carteiras", "CarteiraPteaController")
//     .apiOnly()
//     .except("update");
// }).middleware("auth");