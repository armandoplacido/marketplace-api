import { InvalidText } from '@app/errors/value-objects'

import { ValueObject } from './value-object'

export class Text extends ValueObject<string> {
  constructor(value: string) {
    super(value)
  }

  validate(): boolean {
    if (typeof this.value !== 'string') throw new InvalidText(this.value)
    if (this.value.length <= 3) throw new InvalidText(this.value)

    return true
  }
}
