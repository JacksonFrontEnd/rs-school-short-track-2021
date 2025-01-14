/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  const result = [];
  let buf = [];
  buf = buf.concat(arr);
  let index = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === -1) {
      buf.splice(i, 1);
      i--;
    }
  }
  buf.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      result.push(buf[index]);
      index++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = sortByHeight;
