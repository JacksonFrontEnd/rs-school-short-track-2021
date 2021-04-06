function deleteDigit(n) {
  const arr = [];
  let num = n;
  while (n > 0) { arr.unshift(n % 10); num = num / 10 || 0; }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      return Number.parseInt(arr.join(''), 10);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr.splice(i, 1);
      return Number.parseInt(arr.join(''), 10);
    }
  }
  return arr;
}

module.exports = deleteDigit;
