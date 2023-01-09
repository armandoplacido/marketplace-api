import { User } from '@app/entities/user'

import { UsersRepository } from '../users-repository'

export class InMemoUsersRepository implements UsersRepository {
  public users: User[] = []

  async findAll(): Promise<User[]> {
    return this.users
  }

  async getUser(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)

    if (!user) return null

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

    this.users[index] = user
  }
}
