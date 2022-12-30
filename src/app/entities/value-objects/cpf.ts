import { InvalidCpfFormat } from '@app/errors/value-objects'
import { Validator } from '@helpers'

import { Text } from './text'

export class Cpf extends Text {
  constructor(value: string) {
    super(value)
    this.validate()
  }

  validate(): boolean {
    const cpf = this.value

    super.validate()

    if (this.value.length !== 11) throw new InvalidCpfFormat(cpf)
    if (!Validator.cpf(this.value)) throw new InvalidCpfFormat(cpf)

    return true
  }
}
