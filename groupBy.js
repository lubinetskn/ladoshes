const groupBy = (arr, cb) =>
  arr.reduce((acc, c) => {
    const key = cb(c);
    acc[key] = acc[key] || [];
    acc[key].push(c);
    return acc;
  }, []);
