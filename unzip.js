function customUnzip(arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
}

// Пример использования
const zippedArray = [
  [1, "a", true],
  [2, "b", false],
  [3, "c", true],
];

const unzippedArrays = customUnzip(zippedArray);

console.log(unzippedArrays);
// Вывод: [[1, 2, 3], ['a', 'b', 'c'], [true, false, true]]
