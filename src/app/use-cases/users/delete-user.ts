import { UserNotFound } from '@app/errors/user'
import { UsersRepository } from '@app/repositories'

export class DeleteUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userId: string): Promise<void> {
    const user = await this.usersRepository.getUser(userId)

    if (!user) throw new UserNotFound()

    user.delete()

    await this.usersRepository.save(user)
  }
}
