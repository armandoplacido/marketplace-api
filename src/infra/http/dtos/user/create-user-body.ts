import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateUserBody {
  @IsNotEmpty()
  @Length(4, 150)
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  cpf: string

  @IsNotEmpty()
  password: string
}
