module.exports = addOrDouble = (target, start = 1, moves = 1) => {
  target = target % 2 === 0 ? target /= 2 : target -= 1;
  return target === start ? moves : addOrDouble(target, start, moves+1);
}
  
