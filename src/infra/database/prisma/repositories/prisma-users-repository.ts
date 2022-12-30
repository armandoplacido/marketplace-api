import { Injectable } from '@nestjs/common'

import { User } from '@app/entities/user'
import { UsersRepository } from '@app/repositories'

import { PrismaUserMapper } from '../mappers/prisma-user-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: string): Promise<User | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        id
      }
    })

    if (!user) return null

    return PrismaUserMapper.toFront(user)
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
        deletedAt: null
      }
    })

    if (!user) return null
    return PrismaUserMapper.toFront(user)
  }

  async getUserByCpf(cpf: string): Promise<User | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        cpf,
        deletedAt: null
      }
    })

    if (!user) return null

    return PrismaUserMapper.toFront(user)
  }

  async create(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user)

    await this.prisma.users.create({
      data: rawUser
    })
  }

  async save(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user)

    await this.prisma.users.update({
      where: {
        id: rawUser.id
      },
      data: rawUser
    })
  }
}
