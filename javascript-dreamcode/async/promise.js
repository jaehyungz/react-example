"use strict";

//Promise
//state : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//프로미스가 생성이 되면, executor라는 콜백함수가 바로 실행됨.

const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network,readfiles)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then,catch,finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //마지막으로 호출하는 값
    console.log("finally");
  });

// 3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch(console.log)
  .then((egg) => cook(egg));
