// energyCalculator(food, football, time)
//
// On a work day you start with 100 points of energy.
// You work from 9 to 21, every hour you lose 10 points of energy.
// Example: at 9 you have 100 points, at 8 you have 90, and so on.
//
// at 11 you take a coffee that gives you 20 extra points.
// at 13 you go boxing in the park and that takes you -30 points.
// at 15 you go to eat lunch.
//    If you pick 'salad' you win 20 points.
//    If you pick 'mcDonalds' you loose -20 points.
// at 20 there is the world's cup football match
//    If your team 'win' you win 40 points
//    If your team 'loose' you loose 40 points
//
// make a function energyCalculator(food, football, time) that returns a
// number with the energy you will have at a given hour of the day.
//
//  food <string> = can be either 'salad' or 'mcDonalds'
//  football <string> = can be either 'win' or 'loose'
//  time <number> = the hour of the day. It can be between 9 and 21.

module.exports = energyCalculator = (food, football, time) => {
  const hours = [];
  let energy = 100;

  for (let i = 9; i < 22; i++) {
    i === 11 ? energy += 20 : null;
    i === 13 ? energy -= 30 : null;
    i === 15 && food === 'salad' ? energy += 20 : null;
    i === 15 && food === 'mcDonalds' ? energy -= 20 : null;
    i === 20 && football === 'win' ? energy += 40 : null;
    i === 20 && football === 'loose' ? energy -= 40 : null;

    hours.push(energy)
    energy -= 10
  }
  return hours[time - 9]
}
