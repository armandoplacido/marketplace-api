import { Users as PrismaUser } from '@prisma/client'

import { User } from '@app/entities/user'
import { Cpf, Email, Password, UserName } from '@app/entities/value-objects'

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name.value,
      email: user.email.value,
      cpf: user.cpf.value,
      password: user.password.value,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt
    }
  }

  static toFront(raw: PrismaUser): User {
    return new User(
      {
        name: new UserName(raw.name),
        email: new Email(raw.email),
        cpf: new Cpf(raw.cpf),
        password: new Password(raw.password)
      },
      raw.id.toString()
    )
  }
}
