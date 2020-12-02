/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

/* 
/* @type {typeof import('@adonisjs/framework/src/Route/Manager')} 
const Route = use('Route');

Route.get('/files/:file', 'FileController.show');
Route.post('/register', 'AuthController.register');

Route.post('/authenticate', 'AuthController.authenticate').validator('Auth');
Route.post('/forgot', 'ForgotPasswordController.store').validator('Forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('Reset');

Route.get('/app', 'AppController.index').middleware(['auth']);

// Cadastro de carteira
Route.group(() => {
  Route.resource('carteiras', 'CarteiraPteaController')
    .apiOnly()
    .except('update');
}).middleware('auth');
 */