function getCommonCharacterCount(s1, s2) {
  const mas1 = s1.split('').sort();
  const mas2 = s2.split('').sort();
  let result = 0;
  const len2 = mas2.length;
  const len1 = mas1.length;
  let minLen;
  let maxLen;
  if (len1 > len2) {
    minLen = len2;
    maxLen = len1;
  } else {
    minLen = len1;
    maxLen = len2;
  }
  for (let i = 0; i < minLen; i++) {
    for (let j = i; j < maxLen; j++) {
      if (mas1[j] === mas2[i]) {
        result++;
        break;
      }
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
