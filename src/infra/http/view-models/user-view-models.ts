import { User } from '@entities/user'

export class UserViewModel {
  static toFront(notification: User) {
    return {
      id: notification.id,
      name: notification.name.value,
      email: notification.email.value,
      cpf: notification.cpf.value
    }
  }
}
