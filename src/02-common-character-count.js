/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mas1=s1.split('').sort();
  let mas2=s2.split('').sort();
  let result=0,len;
  if(mas1.length>mas2.length){
    len=mas2.length;
  }
  else{
    len=mas1.length;
  }
  for(let i=0;i<len;i++){
      if(mas1[i]===mas2[i]){
        result++
      }
  }
  return result;
}

module.exports = getCommonCharacterCount;
