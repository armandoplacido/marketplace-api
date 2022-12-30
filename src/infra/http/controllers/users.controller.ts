import { Body, Controller, Post } from '@nestjs/common'

import { CreateUser } from '@app/use-cases/users'
import { CreateUserBody } from '@dtos/user'
import { HttpResponse } from '@helpers'

@Controller('users')
export class UsersController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, cpf, password } = body

    try {
      await this.createUser.execute({ name, email, cpf, password })
    } catch (error) {
      return HttpResponse.badRequest(error.message)
    }

    return HttpResponse.created('Usuário criado com sucesso!')
  }
}
