import { Text } from './text'

export class Password extends Text {
  constructor(value: string) {
    super(value)
  }

  validate(): boolean {
    return true
  }
}
