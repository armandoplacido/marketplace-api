import { IsEmail, IsNotEmpty } from 'class-validator'

export class AuthUser {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email inválido' })
  email: string

  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password: string
}
