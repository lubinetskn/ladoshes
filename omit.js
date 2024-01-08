// ==============
// cpu - O(N*K)
// mem - O(N)
// 1 получить массив ключей
// 2 отфильтровать не нужное
// 3 добавить оставшиеся в результирующий объект
function omit(obj, filterKeys) {
  const result = {};
  for (let key in obj) {
    if (!filterKeys.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

// cpu - O(N + K)
// mem - O(N + K)
function omit2(obj, filterKeys) {
  const result = {};
  const filterKeysMap = new Set(filterKeys);

  for (let key in obj) {
    if (!filterKeysMap.has(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

const obj = {
  a: 5,
  b: false,
  c: "adsf",
};

console.log(omit2(obj, ["a"])); // {b: false, c: 'asdf'}
console.log(omit2(obj, ["b"])); // {a: 5, c: 'asdf'}
console.log(omit2(obj, ["b", "c"])); // {a: 5}
