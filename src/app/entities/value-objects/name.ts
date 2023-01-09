import { InvalidNameFormat } from '@app/errors/value-objects/name'

import { Text } from './text'

export class Name extends Text {
  constructor(value: string) {
    super(value)
    this.validate()
  }

  validate(): boolean {
    const value = this.value

    super.validate()

    if (!this.value.match(/[a-zA-Z\u00C0-\u00FF ]+/i)) throw new InvalidNameFormat(value)

    return true
  }
}
