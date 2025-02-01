// [예제 19-28]
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Kim");
const you = new Person("Lee");

me.sayHello();
you.sayHello();

// [예제 19-29]
// hasOwnProperty: Object.prototype의 메서드
console.log(me.hasOwnProperty("name")); // true
// Object.prototype도 상속받았다는 뜻

console.log("---------------");

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
