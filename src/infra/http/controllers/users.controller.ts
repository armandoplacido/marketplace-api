import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { CreateUser, DeleteUser, GetUserById, GetUsers } from '@app/use-cases/users'
import { CreateUserBody } from '@dtos/user'
import { HttpResponse } from '@helpers'

import { UserViewModel } from '../view-models'

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly deleteUser: DeleteUser,
    private readonly getUserById: GetUserById,
    private readonly getUsers: GetUsers
  ) {}

  @Get()
  async findAll() {
    const rawUsers = await this.getUsers.execute()
    const users = rawUsers.map(UserViewModel.toFront)
    return HttpResponse.ok('Usuários encontrados com sucesso!', { users })
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    try {
      const rawUser = await this.getUserById.execute(id)
      const user = UserViewModel.toFront(rawUser)
      return HttpResponse.ok('Usuário encontrado com sucesso!', { user })
    } catch (error) {
      return HttpResponse.notFound(error.message)
    }
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, cpf, password } = body

    try {
      await this.createUser.execute({ name, email, cpf, password })
      return HttpResponse.created('Usuário criado com sucesso!')
    } catch (error) {
      return HttpResponse.badRequest(error.message)
    }
  }

  @Post('delete')
  async delete(@Param('id') id: string) {
    try {
      await this.deleteUser.execute(id)
      return HttpResponse.ok('Usuário deletado com sucesso!')
    } catch (error) {
      return HttpResponse.badRequest(error.message)
    }
  }
}
