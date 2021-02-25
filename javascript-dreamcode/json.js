// JSON
// JavaScript Object Notation

// 1. Object to JSON
// Stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
console.log(
  "------------------------------------------------------------------------------------"
);

const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});

console.log(
  "------------------------------------------------------------------------------------"
);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate()); //오늘날짜
console.log(obj.birthDate.getDate());
