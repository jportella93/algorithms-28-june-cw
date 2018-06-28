const addOrDouble = require('./addOrDouble');

describe('addOrDouble', () => {
  it('calculates the minimum amount of moves from 1 to target', () => {
    expect(addOrDouble(2)).toBe(1)
    expect(addOrDouble(15)).toBe(6)
    expect(addOrDouble(100)).toBe(8)
    expect(addOrDouble(200)).toBe(9)
    expect(addOrDouble(16384)).toBe(14)
    expect(addOrDouble(123415)).toBe(24)
    expect(addOrDouble(87263)).toBe(26)
  })
})