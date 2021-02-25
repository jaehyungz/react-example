"use strict";
//1
const fruits = ["apple", "banana", "orange"];
const fruitsString = fruits.toString();
console.log(fruitsString);

//2
const fruits2 = "🍏,🥬,🍌,🍑";
const fruitsArray = fruits2.split(",");
console.log(fruitsArray);

//3
const array1 = [1, 2, 3, 4, 5];
const array1Reverse = array1.reverse();
console.log(array1Reverse);

//4 x
const arry2 = [1, 2, 3, 4, 5];

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
