const customChunk = (arr, size) => {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = customChunk(originalArray, 3);

console.log(chunkedArray); // Вывод: [[1, 2, 3], [4, 5, 6], [7, 8]]
