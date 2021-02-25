function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
const run = debounce((val) => console.log(val), 300);

run("a");
run("b");

function test() {
  let testBy;

  if (testBy) {
    console.log("true");
  } else {
    console.log("false");
  }
}

test();
