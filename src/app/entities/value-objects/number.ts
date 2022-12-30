import { InvalidNumber } from '@app/errors/value-objects'

import { ValueObject } from './value-object'

export class Number extends ValueObject<number> {
  constructor(value: number) {
    super(value)
  }

  validate(): boolean {
    if (typeof this.value !== 'number') throw new InvalidNumber(this.value)

    return true
  }
}
