function findIndex(array, value) {
  let i = -1;
  array.forEach((item, index) => {
    if (item === value) {
      i = index;
    }
  });
  return i;
}

module.exports = findIndex;
