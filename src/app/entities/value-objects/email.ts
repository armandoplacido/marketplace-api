import { InvalidEmailFormat } from '@app/errors/value-objects'

import { Text } from './text'

export class Email extends Text {
  constructor(value: string) {
    super(value)
    this.validate()
  }

  validate(): boolean {
    const email = this.value

    super.validate()

    if (!/\S+@\S+\.\S+/.test(this.value)) throw new InvalidEmailFormat(email)

    return true
  }
}
