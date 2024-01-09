const compose =
  (fns) =>
  (...args) => {
    return fns.reduceRight((value, fn) => {
      return [fn(...value)];
    }, args)[0];
  };
