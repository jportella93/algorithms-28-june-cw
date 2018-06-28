const energyCalculator = require('./energyCalculator');

describe('energyCalculator', () => {
  it('calculates energy at a given hour', () => {
    expect(energyCalculator('salad', 'win', 9)).toBe(100)
    expect(energyCalculator('salad', 'win', 21)).toBe(30)
    expect(energyCalculator('mcDonalds', 'win', 21)).toBe(-10)
    expect(energyCalculator('mcDonalds', 'loose', 21)).toBe(-90)
  })
})
