import { Text } from '@app/entities/value-objects/text'
import { InvalidText } from '@app/errors/value-objects'

describe('Text', () => {
  it('Should be able to create a text', () => {
    const content = new Text('Hello World')

    expect(content).toBeTruthy()
  })

  it('Should not be able to create a text with invalid format', () => {
    const text = new Text('aaa')

    expect(() => text.validate()).toThrowError(InvalidText)
  })
})
