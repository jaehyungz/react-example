"use strict";

//Array

//1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

//2. Index Postion
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits[0]);

//3. Looping over an array
//a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

//c. for each

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🥝", "🍓");
console.log(fruits);

//remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift("🥦", "🍆");
console.log(fruits); // 🥦 🥑 🍎 🍌

//shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits); // 🥑 🍎 🍌

// note!! shift,unshift are slower than pop, push
console.clear();

//remove an item by index position
fruits.push("🍓", "🥑", "⭐️");
console.log(fruits); //🍎 🍌 🍓 🥑 ⭐️
fruits.splice(1, 2); // (index, 지우고싶은갯수)
console.log(fruits); //🍎 🥑 ⭐️
fruits.splice(1, 1, "🍒", "🍇"); //(index, 지우고싶은갯수 , 추가할 데이터)
console.log(fruits); // ["🍎", "🍒", "🍇", "⭐️"]

// combine two arrays
const fruits2 = ["🍏", "🫑"];
const newFurits = fruits.concat(fruits2);
console.log(newFurits); //["🍎", "🍒", "🍇", "⭐️", "🍏", "🫑"]

// 5. Search
// find the index
console.clear();

// index of
console.log(fruits); //["🍎", "🍒", "🍇", "⭐️"]
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.indexOf("🧅")); // -1

// includes
console.log(fruits.includes("🍇")); // true
console.log(fruits.includes("🥕")); // false

//lastIndexof
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.lastIndexOf("🍎")); // 4

const test = 123;
console.log(test.toString());
