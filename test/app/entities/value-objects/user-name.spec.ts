import { UserName } from '@app/entities/value-objects'
import { InvalidUserNameLenth } from '@app/errors/value-objects'

describe('User name', () => {
  it('Should be able to create a user name ', () => {
    const content = new UserName('Cindy Welch')

    expect(content).toBeTruthy()
  })

  it('Should not be able to create a user name with more than 150 caracters', () => {
    expect(() => new UserName('a'.repeat(151))).toThrowError(InvalidUserNameLenth)
  })
})
