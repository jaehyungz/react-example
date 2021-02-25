"use strict";
const qs = "banana=10&apple=20&orange=30";

function parse(qs) {
  var queryString = qs.substr(); //앞부터 잘라버림
  var chunks = qs.split("&"); // & 기준으로 잘라서 배열로 변환
  console.log(chunks);
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    console.log(parts);
    var key = parts[0];
    console.log(key);
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); //실제로 string이기 떄문에 false값 반환
    console.log(value);
    result[key] = value;
    console.log(result);
  }
  return result;
}
parse(qs);

console.clear();

//forEach 예제
function parse(qs) {
  var queryString = qs.substr();
  var chunks = queryString.split("&");
  let result = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split("=");
    console.log(parts);
    var key = parts[0];
    console.log(key);
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); //실제로 string이기 떄문에 false값 반환
    console.log(value);
    result[key] = value;
    console.log(result);
  });
}
parse(qs);

console.clear();

//키와 키값을 구조 분해 할당 방식으로 변환
function parse(qs) {
  var queryString = qs.substr();
  var chunks = queryString.split("&");
  let result = {};

  chunks.forEach((chunk) => {
    const [key, value] = chunk.split("=");
    result[key] = value;
    console.log(result);
  });
}
parse(qs);

console.clear();

//map함수 사용
function parse(qs) {
  const queryString = qs.substr();
  const chunks = queryString.split("&");
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split("=");
    return { key: key, value: value };
  });
  console.log(result);
  return result;
}
parse(qs);

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);

console.clear();

// ES6의 예제
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업1 완료!"), 100);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업2 완료!"), 200);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업3 완료!"), 300);
  });
function urgentWork() {
  console.log("긴급 작업");
}

const nextWorkOnDone = (msg1) => {
  console.log("done after 100ms:" + msg1);
  return work2();
};

const work1and2 = () =>
  work1().then((msg1) => {
    console.log(`done after 100ms ${msg1}`);
    return work2;
  });

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log(`done after 600ms:${msg3}`);
  });
urgentWork();
