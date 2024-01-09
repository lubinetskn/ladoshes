const customFlat = (arr, depth = 1) => {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? customFlat(val, depth - 1) : val),
        []
      )
    : arr.slice();
};

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = customFlat(nestedArray, 2);

console.log(flattenedArray); // Вывод: [1, 2, 3, 4, 5, 6]
