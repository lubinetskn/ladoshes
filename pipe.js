function customPipe(...funcs) {
  return function (value) {
    return funcs.reduce(function (acc, func) {
      return func(acc);
    }, value);
  };
}

function add2(x) {
  return x + 2;
}

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

const pipedFunction = customPipe(add2, square, double);

const result = pipedFunction(3);

console.log(result); // Вывод: ((3 + 2)^2) * 2 = 50
