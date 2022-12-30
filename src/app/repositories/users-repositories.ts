import { User } from '@app/entities/user'

export abstract class UsersRepository {
  abstract getUser(id: string): Promise<User | null>
  abstract getUserByEmail(email: string): Promise<User | null>
  abstract getUserByCpf(cpf: string): Promise<User | null>
  abstract create(user: User): Promise<void>
  abstract save(user: User): Promise<void>
}
