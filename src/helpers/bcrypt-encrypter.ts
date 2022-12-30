import { compareSync, hashSync } from 'bcrypt'

import { environment } from '@environments'

export class BCryptEncrypter {
  static compare(password: string, hashedPassword: string): boolean {
    return compareSync(password, hashedPassword)
  }

  static generate(password: string): string {
    const saltRounds = environment.salt_rounds
    return hashSync(password, +saltRounds)
  }
}
