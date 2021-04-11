function renameFiles(names) {
  let temp;
  let index = 0;
  const mas = names;
  for (let i = 0; i < mas.length; i++) {
    temp = mas[i];
    for (let j = i + 1; j < mas.length; j++) {
      if (temp === mas[j]) {
        index++;
        mas[j] = `${mas[j]}(${index})`;
      }
    }
    index = 0;
  }
  return mas;
}
module.exports = renameFiles;
