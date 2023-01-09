import { Body, Controller, Post } from '@nestjs/common'

import { AuthenticateProvider } from '@app/use-cases/auth'
import { AuthUser } from '@dtos/auth'
import { HttpResponse } from '@helpers'

import { UserViewModel } from '../view-models'

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticateProvider: AuthenticateProvider) {}

  @Post('/login/dashboard')
  async authProvider(@Body() body: AuthUser) {
    const { email, password } = body

    try {
      const { user: rawUser, token } = await this.authenticateProvider.execute({ email, password })
      const user = UserViewModel.toFront(rawUser)
      return HttpResponse.ok('Usuário autenticado com sucesso!', { user, token })
    } catch (err) {
      throw HttpResponse.unauthorized(err.message)
    }
  }
}
