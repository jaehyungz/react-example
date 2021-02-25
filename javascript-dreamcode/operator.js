// 1. String concatenation

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators

let counter = 2;
const preIncrement = counter++;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// x = x +,=,*,/ y

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators  : || (or) , && (and) , !(not)

const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("콘솔");
  }
  return true;
}

console.log(`and: ${value1 && value2 && check()}`);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log("--------------------");

const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators : if
// if, else if , else

const name = "ellie";
if (name === "ellie") {
  console.log("welcome");
} else if (name === "coder") {
  console.log("else if");
} else {
  console.log("else");
}

console.log(name === "ellie" ? "yes" : "no");

//  Switch
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("ie");
    break;
  case "Chrome":
    console.log("Chrome");
    break;
  case "Firefox":
    console.log("Chrome");
    break;
  default:
    console.log("default");
    break;
}

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
  console.log(`for ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for : ${i}`);
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i},j:${j}`);
  }
}

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
