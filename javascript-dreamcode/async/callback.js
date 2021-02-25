"use strict";

//자바스크립트 동기적임.
// 호이스팅에 맞춰서 하나하나씩 실행하게됨.
// 호이스팅 : 선언들이 자동적으로 실행이되는것
console.log(1);
setTimeout(() => console.log("settimeout"), 1000);
console.log(3);

// 바로 실행되는 콜백 Synchronous callback (동기)
function printImmediately(print) {
  //동기
  print();
}
printImmediately(() => console.log("sync callback")); //동기

// 나중에 실행되는 콜백 Asynchronous callback (비동기)

function printWithDelay(print, timeout) {
  //비동기
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); //비동기

// 콜백지옥 체험
class UserStorage {
  loginUser(id, password, onSucces, onError) {
    //로그인할때에
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSucces(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSucces, onError) {
    //로그인후 받아오기
    setTimeout(() => {
      if (user === "ellie") {
        onSucces({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your pw");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
