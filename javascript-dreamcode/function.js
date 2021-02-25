function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// default parmeters ES6
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");

// Rest parameters
function printAll(...args) {
  //ex1
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //ex2
  for (const arg of args) {
    console.log(arg);
  }
  //ex3
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

console.log(
  "------------------------------------------------------------------------------------------------"
);
// Local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 3)}`);

// Early return , early exit

//bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgarde logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point >= 10) {
    return;
  }
  // long upgarde logic...
}

// Function expression

const print = function () {
  //함수이름없이 변수에 할당가능
  console.log("print");
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "loveyou") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("yes");
};
const printNo = function () {
  console.log("no");
};

randomQuiz("test", printYes, printNo);
randomQuiz("loveyou", printYes, printNo);

// Arrow function
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint2 = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE
(function hello() {
  console.log("IIFE");
})();
//함수 호출없이 바로 호출할수있는 코드

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unkonwn commnad");
  }
}
console.log(calculate("add", 2, 2));
