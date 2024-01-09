const pickBy = (obj, predicate) => {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key], key, obj)) {
      result[key] = obj[key];
    }
  }

  return result;
};
