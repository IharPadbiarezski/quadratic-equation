module.exports = function solveEquation(equation) {
  // your implementation
  let coef = equation.replace(/ /g, '').match(/[^\^]\d+/g);
  let D = Math.pow(coef[1], 2) - 4 * coef[0] * coef[2];

  return [
    (-coef[1] - Math.round(Math.sqrt(D))) / (2 * coef[0]),
    (-coef[1] + Math.round(Math.sqrt(D))) / (2 * coef[0])
  ].sort((a, b) => a - b);
}
