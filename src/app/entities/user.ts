import { Replace } from '@helpers'

import { Entity } from './entity'
import { Cpf, Email, UserName } from './value-objects'

export interface IUser {
  name: UserName
  email: Email
  password: string
  cpf: Cpf
  createdAt: Date
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export class User extends Entity {
  private props: IUser

  constructor(props: Replace<IUser, { createdAt?: Date }>, id?: string) {
    super(id)
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  get name(): UserName {
    return this.props.name
  }

  set name(name: UserName) {
    this.props.name = name
  }

  get email(): Email {
    return this.props.email
  }

  set email(email: Email) {
    this.props.email = email
  }

  get password(): string {
    return this.props.password
  }

  set password(password: string) {
    this.props.password = password
  }

  get cpf(): Cpf {
    return this.props.cpf
  }

  set cpf(cpf: Cpf) {
    this.props.cpf = cpf
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt ?? null
  }

  public update() {
    this.props.updatedAt = new Date()
  }

  get deletedAt(): Date | null {
    return this.props.deletedAt ?? null
  }

  public delete() {
    this.props.deletedAt = new Date()
  }
}
