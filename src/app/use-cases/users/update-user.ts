import { Cpf, Email, UserName } from '@app/entities/value-objects'
import { UserNotFound } from '@app/errors/user'
import { UsersRepository } from '@app/repositories'

interface UpdateUserRequest {
  id: string
  name: string
  email: string
  cpf: string
}

// interface UpdateUserResponse {}

export class UpdateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(request: UpdateUserRequest): Promise<void> {
    const { id, ...data } = request
    const user = await this.usersRepository.getUser(id)

    if (!user) throw new UserNotFound()

    user.update({
      name: new UserName(data.name),
      email: new Email(data.email),
      cpf: new Cpf(data.cpf)
    })

    await this.usersRepository.save(user)
  }
}
