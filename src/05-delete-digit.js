function deleteDigit(n) {
  let res = 0;
  const arr = Array.from(String(n), Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      res = Number.parseInt(arr.join(''), 10);
    }
  }
  if (res === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        arr.splice(i, 1);
        res = Number.parseInt(arr.join(''), 10);
      }
    }
  }
  return res;
}

module.exports = deleteDigit;
