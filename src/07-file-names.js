function renameFiles(names) {
  let temp;
  const mas = names;
  for (let i = 0; i < mas.length; i++) {
    temp = mas[i];
    for (let j = i + 1; j < mas.length; j++) {
      if (temp === mas[j]) {
        mas[j] = `${mas[j]}(${i + 1})`;
      }
    }
  }
  return mas;
}
module.exports = renameFiles;
function renameFiles1(names) {
  let temp;
  const mas = names;
  for (let i = 0; i < mas.length; i++) {
    temp = mas[i];
    for (let j = i + 1; j < mas.length; j++) {
      if (temp === mas[j]) {
        mas[j] = `${mas[j]}(${i + 1})`;
      }
    }
  }
  return mas;
}
console.log(renameFiles1('doc', 'doc', 'image', 'doc(1)', 'doc'));
