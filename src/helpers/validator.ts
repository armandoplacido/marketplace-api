export class Validator {
  static cpf(cpf: string): boolean {
    let Sum = 0
    let mod: number

    cpf = cpf.replace(/\./g, '').replace(/\-/g, '')

    if (cpf == '00000000000') {
      return false
    }

    for (let i = 1; i <= 9; i++) Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)

    mod = (Sum * 10) % 11

    if (mod == 10 || mod == 11) mod = 0

    if (mod != parseInt(cpf.substring(9, 10))) {
      return false
    }

    Sum = 0

    for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)

    mod = (Sum * 10) % 11

    if (mod == 10 || mod == 11) mod = 0

    if (mod != parseInt(cpf.substring(10, 11))) {
      return false
    }

    return true
  }

  // static base64(file: string): void {
  //   if (!file.includes(';base64,')) throw HttpResponse.badRequest('Imagem inválida')
  // }

  // static isBase64(file: string): boolean {
  //   return file.includes(';base64,')
  // }
}
