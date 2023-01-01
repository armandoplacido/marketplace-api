import { Injectable } from '@nestjs/common'

import { UserNotFound } from '@app/errors/user'
import { UsersRepository } from '@app/repositories'

@Injectable()
export class GetUserById {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.getUser(id)

    if (!user) throw new UserNotFound()

    return user
  }
}
