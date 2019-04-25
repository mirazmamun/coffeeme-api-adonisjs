'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'AuthenticationController.login')
  Route.post('register', 'AuthenticationController.register')
  Route.get('me', 'AuthenticationController.me').middleware(['auth'])
  Route.get('ping', 'AuthenticationController.ping')
}).prefix('api').namespace('Auth')

Route.group(() => {
  Route.get('/', 'IndexController.index')
})
