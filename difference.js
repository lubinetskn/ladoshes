function customDifference(arr1, ...arrays) {
  const excludeSet = new Set(arrays.reduce((acc, arr) => acc.concat(arr), []));
  return arr1.filter((item) => !excludeSet.has(item));
}

function customDifference2(arr1, ...arrays) {
  const excludeSet = new Set(arrays.flat());
  return arr1.filter((item) => !excludeSet.has(item));
}

// Пример использования
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6];
const array3 = [5, 6, 7, 8];

const result = customDifference(array1, array2, array3);

console.log(result);
// Вывод: [1, 2]
