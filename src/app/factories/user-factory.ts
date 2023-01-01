import { IUser, User } from '@app/entities/user'
import { Cpf, Password, UserName } from '@app/entities/value-objects'
import { Email } from '@app/entities/value-objects/email'

type Overrides = Partial<IUser>

export function makeUser(overrides: Overrides = {}) {
  return new User({
    name: new UserName('Cindy Welch'),
    email: new Email('cindywelch@mail.com'),
    password: new Password('123456'),
    cpf: new Cpf('31737964546'),
    ...overrides
  })
}
