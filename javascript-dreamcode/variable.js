"use strict";

// 2. Variable
// let ( added in ES6 )

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}

//3. Contants

const daysInweek = 7;
const maxNumber = 5;

//4. Variable types
const count = 17;
const size = 17.1;
console.log(`value: ${count} , type: ${typeof count}`);
console.log(`value: ${size} , type: ${typeof count}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 999999099999999999999999999999999999999999999999999999999999999999999999999999999999999999999n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi${brendan}!`;
console.log(`value: ${helloBob}, type:${typeof helloBob}`);

//boolean
const canRead = true;
const test = 3 < 1; //false

console.log(`value : ${canRead} , type : ${typeof canRead}`);
console.log(`value : ${test} , type : ${typeof test}`);

let nothing = null;
console.log(`value : ${nothing}, type:${typeof nothing}`);

let x = undefined;
console.log(`value : ${x}, type:${typeof x}`);

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 == symbol2);
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 == gsymbol2);

// 5. dynamic typing
let text = "hello";
console.log(`value : ${text}, type:${typeof text}`);
text = 1;
console.log(`value : ${text}, type:${typeof text}`);
text = "5" + 7;
console.log(`value : ${text}, type:${typeof text}`);

const kid = { name: "kid", age: 20 };
console.log(typeof kid.age);
