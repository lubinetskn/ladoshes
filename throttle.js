function customThrottle(func, wait) {
  let isThrottled = false;
  let lastArgs, lastContext;

  return function (...args) {
    if (!isThrottled) {
      func.apply(this, args);
      isThrottled = true;
      lastArgs = lastContext = null;

      setTimeout(function () {
        isThrottled = false;
        if (lastArgs !== null) {
          func.apply(lastContext, lastArgs);
          lastArgs = lastContext = null;
        }
      }, wait);
    } else {
      lastArgs = args;
      lastContext = this;
    }
  };
}

// Пример использования
function handleScroll() {
  console.log("Scrolled!");
}

const throttledHandleScroll = customThrottle(handleScroll, 1000);

// Симулируем вызов функции handleScroll при прокрутке
window.addEventListener("scroll", throttledHandleScroll);
