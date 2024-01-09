function customZip(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
}

// Пример использования
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

const zippedArray = customZip(array1, array2, array3);

console.log(zippedArray);
// Вывод: [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
