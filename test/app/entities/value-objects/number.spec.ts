import { Number } from '@app/entities/value-objects/number'

describe('Number', () => {
  it('Should be able to create a number', () => {
    const content = new Number(1)

    expect(content).toBeTruthy()
  })
})
