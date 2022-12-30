import { UserCpfAlreadyExists, UserEmailAlreadyExists } from '@app/errors/users'
import { InMemoUsersRepository } from '@app/repositories/InMemory'
import { CreateUser } from '@app/use-cases/users'

let userRepository: InMemoUsersRepository
let createUser: CreateUser

describe('Create User', () => {
  beforeEach(() => {
    userRepository = new InMemoUsersRepository()
    createUser = new CreateUser(userRepository)
  })

  it('Should be able to create a user', async () => {
    await createUser.execute({
      name: 'Cindy Welch',
      email: 'cindywelch@mail.com',
      cpf: '43086365749',
      password: '123456'
    })

    expect(userRepository.users.length).toBe(1)
    expect(userRepository.users[0].name.value).toBe('Cindy Welch')
    expect(userRepository.users[0].email.value).toBe('cindywelch@mail.com')
    expect(userRepository.users[0].cpf.value).toBe('43086365749')
    expect(userRepository.users[0].createdAt).toEqual(expect.any(Date))
  })

  it('Should not be able to create a user with an email already in use', async () => {
    expect(async () => {
      await createUser.execute({
        name: 'Cindy Welch',
        email: 'cindywelch@mail.com',
        cpf: '43086365749',
        password: '123456'
      })

      await createUser.execute({
        name: 'Kirk Sauer',
        email: 'cindywelch@mail.com',
        cpf: '59731264710',
        password: '1234'
      })
    }).rejects.toThrowError(UserEmailAlreadyExists)
  })

  it('Should not be able to create a user with an cpf already in use', async () => {
    expect(async () => {
      await createUser.execute({
        name: 'Cindy Welch',
        email: 'cindywelch@mail.com',
        cpf: '43086365749',
        password: '123456'
      })

      await createUser.execute({
        name: 'Kirk Sauer',
        email: 'kirksauer@mail.com',
        cpf: '43086365749',
        password: '1234'
      })
    }).rejects.toBeInstanceOf(UserCpfAlreadyExists)
  })
})
