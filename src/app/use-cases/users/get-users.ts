import { Injectable } from '@nestjs/common'

import { UsersRepository } from '@app/repositories'

@Injectable()
export class GetUsers {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute() {
    const users = await this.usersRepository.findAll()

    return users
  }
}
