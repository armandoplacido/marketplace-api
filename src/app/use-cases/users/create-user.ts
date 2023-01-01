import { Injectable } from '@nestjs/common'

import { User } from '@app/entities/user'
import { Cpf, Email, Password, UserName } from '@app/entities/value-objects'
import { CreateUserError, UserCpfAlreadyExists, UserEmailAlreadyExists } from '@app/errors/user'
import { UsersRepository } from '@app/repositories'
import { BCryptEncrypter } from '@helpers'

interface CreateUserRequest {
  name: string
  email: string
  password: string
  cpf: string
}

// interface CreateUserResponse {}

@Injectable()
export class CreateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<void> {
    const findUserByEmail = await this.usersRepository.getUserByEmail(request.email)

    if (findUserByEmail) throw new UserEmailAlreadyExists()

    const findUserByCpf = await this.usersRepository.getUserByCpf(request.cpf)

    if (findUserByCpf) throw new UserCpfAlreadyExists()

    const password = BCryptEncrypter.generate(request.password)

    const user = new User({
      name: new UserName(request.name),
      email: new Email(request.email),
      cpf: new Cpf(request.cpf),
      password: new Password(password)
    })

    try {
      await this.usersRepository.create(user)
    } catch (error) {
      throw new CreateUserError(error.message)
    }
  }
}
