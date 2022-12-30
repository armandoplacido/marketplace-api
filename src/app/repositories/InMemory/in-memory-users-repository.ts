import { User } from '@app/entities/user'
import { UserNotFound } from '@app/errors/users'

import { UsersRepository } from '../users-repositories'

export class InMemoUsersRepository implements UsersRepository {
  public users: User[] = []

  async getUser(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)

    if (!user) throw new UserNotFound()

    return user
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email.value === email && user.deletedAt === null)

    if (!user) return null

    return user
  }

  async getUserByCpf(cpf: string): Promise<User | null> {
    const user = this.users.find((user) => user.cpf.value === cpf && user.deletedAt === null)

    if (!user) return null

    return user
  }

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async save(user: User): Promise<void> {
    const index = this.users.findIndex((u) => u.id === user.id)

    if (index < 0) throw new UserNotFound()

    this.users[index] = user
  }
}
