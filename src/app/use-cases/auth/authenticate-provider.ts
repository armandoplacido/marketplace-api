import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { User } from '@app/entities/user'
import { AuthUser } from '@app/errors/auth'
import { UsersRepository } from '@app/repositories'
import { BCryptEncrypter, TokenPayload } from '@helpers'

interface AuthProviderRequest {
  email: string
  password: string
}

interface AuthProviderResponse {
  user: User
  token: string
}

@Injectable()
export class AuthenticateProvider {
  constructor(private readonly jwtService: JwtService, private readonly userRepository: UsersRepository) {}

  async execute(data: AuthProviderRequest): Promise<AuthProviderResponse> {
    const user = await this.userRepository.getUserByEmail(data.email)

    if (!user) throw new AuthUser()

    const passwordMatch = BCryptEncrypter.compare(data.password, user.password.value)

    if (!passwordMatch) throw new AuthUser()

    const tokenPayload = new TokenPayload({
      id: user.id
    })

    const token = this.jwtService.sign(tokenPayload)

    return {
      user,
      token
    }
  }
}
