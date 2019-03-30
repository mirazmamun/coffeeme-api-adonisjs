'use strict'

const User = use('App/Models/User')

class AuthenticationController {
  async register ({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password'])

    try {
      const user = await User.create(userData)

      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        status: 'error',
        message: `There was a problem creating the user. Details are ${error.message}, please try again later.`
      })
    }
  }

  async login ({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const token = await auth.withRefreshToken().attempt(email, password)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      response.status(400).json({
        status: 'error',
        message: 'Invalid email/password.'
      })
    }
  }

  async me ({ auth, response }) {
    return response.json({
      status: 'success',
      data: auth.user
    })
  }
  ping ({ response }) {
    return response.json({
      status: 'success',
      data: 'PONG'
    })
  }
}

module.exports = AuthenticationController
