import { Injectable } from '@nestjs/common'

import { User } from '@app/entities/user'
import { Cpf, Email, UserName } from '@app/entities/value-objects'
import { UsersRepository } from '@app/repositories'
import { BCryptEncrypter, HttpResponse } from '@helpers'

type CreateUserRequest = {
  name: string
  email: string
  password: string
  cpf: string
}

type CreateUserResponse = void

@Injectable()
export class CreateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const findUserByEmail = await this.usersRepository.getUserByEmail(request.email)

    if (findUserByEmail) throw HttpResponse.badRequest('O email já está em uso')

    const findUserByCpf = await this.usersRepository.getUserByCpf(request.cpf)

    if (findUserByCpf) throw HttpResponse.badRequest('O cpf já está em uso')

    const password = BCryptEncrypter.generate(request.password)

    const user = new User({
      name: new UserName(request.name),
      email: new Email(request.email),
      cpf: new Cpf(request.cpf),
      password: password
    })

    await this.usersRepository.create(user)
  }
}
