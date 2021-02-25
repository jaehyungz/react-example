// promise를 깔끔하게 사용하는것
// async & await

//1. async

async function fetchUser() {
  return "ellie";
}
const user = fetchUser();
user.then(console.log);
console.log(user);

//2.await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  //병렬적으로 처리

  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//3. promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyone() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyone().then(console.log);
