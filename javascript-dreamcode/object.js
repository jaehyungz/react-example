//4,5 Literals and properties
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jaehyung = { name: "jaehyung", age: 4 };
print(jaehyung);

jaehyung.hasjob = true;
console.log(jaehyung.hasjob);

delete jaehyung.hasjob;
console.log(jaehyung.hasjob);

// Computed properties
console.log(jaehyung.name);
console.log(jaehyung["name"]); //key는 string값으로 불러와야함
jaehyung["hasjob"] = true; // 배열안의 key 넣기
console.log(jaehyung.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(jaehyung, "name");
printValue(jaehyung, "age");

// Property value shorthand

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 5 };
const person3 = { name: "davae", age: 19 };
const person4 = new Person("eliel", 30);

// Consturctor function
console.log(person4);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// in operator : property existence check (key in obj)
console.log("name" in jaehyung); //재형 오브젝트 안의 네임이라는 키가있는지 불리언타입으로 확인
console.log("no_result" in jaehyung);

console.clear();
// for..in vs for..of
// for (key in obj)
for (key in jaehyung) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// Fun cloning
// Object.assign(dest, [obj1, obj2, ob3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

//old way
const user3 = {};

for (key in user) {
  user3[key] = user[key];
}
console.log(user3);
console.log("new way");

const user4 = Object.assign({}, user);
console.log(user4);

// another exanople
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
