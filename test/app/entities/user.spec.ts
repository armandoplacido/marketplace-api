import { makeUser } from '@app/factories'

describe('User', () => {
  it('should be able to create a user entity', () => {
    const user = makeUser()
    expect(user).toBeTruthy()
  })
})
