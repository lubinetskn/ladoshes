function customDebounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

// Пример использования
function handleInput(value) {
  console.log(`Input value: ${value}`);
}

const debouncedHandleInput = customDebounce(handleInput, 500);

// Симулируем вызов функции handleInput при вводе текста
debouncedHandleInput("A");
debouncedHandleInput("AB");
debouncedHandleInput("ABC");

// Через 500 миллисекунд после последнего вызова, handleInput будет вызвана с последним переданным значением
