/* eslint-disable linebreak-style */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let fl = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let index = 0; index < matrix[i].length; index++) {
      sum += matrix[i][index];
      if (matrix[i][matrix[i].length - 1] === 0) {
        fl = 1;
      }
    }
    if (fl === 1) {
      return sum;
    }
  }
  return sum;
}
module.exports = getMatrixElementsSum;
