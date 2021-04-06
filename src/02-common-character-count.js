function getCommonCharacterCount(s1, s2) {
  const mas1 = s1.split('').sort();
  const mas2 = s2.split('').sort();
  let result = 0; let len;
  if (mas1.length > mas2.length) {
    len = mas2.length;
  } else {
    len = mas1.length;
  }
  for (let i = 0; i < len; i++) {
    if (mas1[i] === mas2[i]) {
      result++;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
