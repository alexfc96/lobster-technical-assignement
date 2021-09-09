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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return await view.render('welcome')
})

Route.get('/job-description', async ({ view }) => {
  return await view.render('job_description')
})

Route.get('/orders', async ({ view }) => {
  return await view.render('orders/index')
})
Route.get('/orders/:id', async ({ view }) => {
  return await view.render('orders/index')
})
