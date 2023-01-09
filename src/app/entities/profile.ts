import { Replace } from '@helpers'

import { Entity } from './entity'
import { Name, Text } from './value-objects'

export interface IProfile {
  name: Name
  description: Text
  createdAt: Date
  updatedAt: Date | null
}

export class Profile extends Entity {
  private props: IProfile

  constructor(props: Replace<IProfile, { createdAt?: Date }>, id?: string) {
    super(id)
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  get name(): Name {
    return this.props.name
  }

  set name(name: Name) {
    this.props.name = name
  }

  get description(): Text {
    return this.props.description
  }

  set description(name: Text) {
    this.props.description = name
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt ?? null
  }

  public update(data: Partial<IProfile>) {
    this.props = {
      ...this.props,
      ...data,
      updatedAt: new Date()
    }
  }
}
