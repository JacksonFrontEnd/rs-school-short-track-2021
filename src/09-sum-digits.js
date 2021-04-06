function getSumOfDigits(n) {
  let res = 0;
  const arr = Array.from(String(n), Number);
  // eslint-disable-next-line no-return-assign
  arr.forEach((elem) => res += elem);
  if (res > 9) {
    res -= 9;
  }
  return res;
}

module.exports = getSumOfDigits;
