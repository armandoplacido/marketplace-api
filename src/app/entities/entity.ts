import { randomUUID } from 'crypto'

export class Entity {
  private _id: string

  constructor(id?: string) {
    this._id = id ?? randomUUID()
  }

  get id(): string {
    return this._id
  }
}
