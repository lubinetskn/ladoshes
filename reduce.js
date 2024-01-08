// reduce
function reduce(arr, cb, init) {
  let result = init ?? arr[0];
  let i = arguments.length < 3 ? 1 : 0;

  for (; i < arr.length; i++) {
    const elem = arr[i];
    result = cb(result, elem);
  }
  return result;
}

function reduce2(arr, cb, init) {
  let [result, startIndex] =
    typeof init === "undefined" ? [arr[0], 1] : [init, 0];

  for (let i = startIndex; i < arr.length; i++) {
    const elem = arr[i];
    result = cb(result, elem, i, arr);
  }
  return result;
}

console.log([1, 2, 3].reduce((acc, c) => acc + c, 0));
console.log(reduce2([1, 2, 3], (acc, c) => acc + c, 0));
console.log(reduce2([1, 2, 3], (acc, c) => acc + c));
