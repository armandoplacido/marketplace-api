import { Email } from '@app/entities/value-objects'
import { InvalidEmailFormat } from '@app/errors/value-objects'

describe('Email', () => {
  it('Should be able to create a email ', () => {
    const content = new Email('cindywelc2h@mail.com')

    expect(content).toBeTruthy()
  })

  it('Should not be able to create a email with invalid format', () => {
    expect(() => new Email('cindywelc2hmail.com')).toThrowError(InvalidEmailFormat)
  })
})
