import { InvalidUserNameFormat, InvalidUserNameLenth } from '@app/errors/value-objects'

import { Text } from './text'

export class UserName extends Text {
  constructor(value: string) {
    super(value)
    this.validate()
  }

  validate(): boolean {
    const value = this.value

    super.validate()

    if (!this.value.match(/[a-zA-Z\u00C0-\u00FF ]+/i)) throw new InvalidUserNameFormat(value)
    if (this.value.length > 150) throw new InvalidUserNameLenth(value)

    return true
  }
}
