import { Cpf } from '@app/entities/value-objects'
import { InvalidCpfFormat } from '@app/errors/value-objects'

describe('Cpf', () => {
  it('Should be able to create a cpf', () => {
    const content = new Cpf('43086365749')

    expect(content).toBeTruthy()
  })

  it('Should not be able to create a cpf with more than 11 caracters', () => {
    expect(() => new Cpf('43086365748')).toThrowError(InvalidCpfFormat)
  })

  it('Should not be able to create a cpf with invalid format', () => {
    expect(() => new Cpf('43086365748')).toThrowError(InvalidCpfFormat)
  })
})
