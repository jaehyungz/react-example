"use strict";

//함수선언

function doSomething(add) {
  console.log(add);
  result = add(1, 2);
  console.log(result);
}
function add(a, b) {
  const sum = a + b;
  return sum;
}

//함수호출
//doSomething(add(1, 2));

const addFun = add;
console.log(add);
addFun(1, 2);
console.log(addFun);
