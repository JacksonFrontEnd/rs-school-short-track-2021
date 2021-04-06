function getSumOfDigits(n) {
  let res = 0;
  let num = n;
  const arr = [];
  while (n > 0) { arr.unshift(n % 10); num = num / 10 || 0; }
  // eslint-disable-next-line no-return-assign
  arr.forEach((elem) => res += elem);
  if (res > 9) {
    res -= 9;
  }
  return res;
}

module.exports = getSumOfDigits;
