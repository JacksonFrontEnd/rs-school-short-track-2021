/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var arr = [];
  while (n > 0) { arr.unshift(n % 10); n = n / 10 | 0; }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
      return Number.parseInt(arr.join(''));
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      arr.splice(i, 1);
      return Number.parseInt(arr.join(''));
    }
  }
}

module.exports = deleteDigit;
