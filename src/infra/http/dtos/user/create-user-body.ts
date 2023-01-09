import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateUserBody {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(4, 150, { message: 'O nome deve ter entre 4 e 150 caracteres' })
  name: string

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email inválido' })
  email: string

  @IsNotEmpty({ message: 'O CPF não pode ser vazio' })
  cpf: string

  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password: string
}
