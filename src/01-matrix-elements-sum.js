/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0, fl = 0;
  for (let i = 0; i < matrix.length; i++) {
   
    for(let index=0;index<matrix[i].length;index++) {
      sum+=matrix[i][index];
      if (matrix[i][matrix[i].length-1] == 0) {
        fl = 1
      }  
    }
    if (fl == 1) {
      return sum;
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
