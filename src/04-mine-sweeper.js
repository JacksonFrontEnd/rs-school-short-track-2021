/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const len1 = matrix.length;
  const len2 = matrix[0].length;
  const result = new Array(len1);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(len2);
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[0][0] === true) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (i === 0 && i !== matrix.length - 1) {
        if (matrix[i][j - 1] === true || matrix[i][j + 1] === true || matrix[i + 1][j] === true) {
          result[i][j] += 1;
        }
      } else if (j === 0 && i !== matrix.length - 1) {
        if (matrix[i - 1][j] === true || matrix[i + 1][j] === true || matrix[i][j + 1] === true) {
          result[i][j] += 1;
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;
