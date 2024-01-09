function customSet(obj, path, value) {
  const keys = path.split(".");
  let currentObj = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (!currentObj[key] || typeof currentObj[key] !== "object") {
      currentObj[key] = {};
    }

    currentObj = currentObj[key];
  }

  currentObj[keys[keys.length - 1]] = value;

  return obj;
}

// Пример использования
const originalObject = { a: { b: { c: 42 } } };
const modifiedObject = customSet(originalObject, "a.b.c", 100);

console.log(modifiedObject);
// Вывод: { a: { b: { c: 100 } } }
