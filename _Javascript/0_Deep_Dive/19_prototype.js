// [예제 19-02] 프로퍼티와 메서드
const circle = {
  radius: 5, // 반지름
  // 프로퍼티 (상태)

  getDiameter() {
    return 2 * this.radius;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  getArea() {
    return Math.PI * this.radius ** 2;
  },
  // 메서드 (동작)
};

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

console.log("---------------");

// [예제 19-04] 상속
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());

console.log("---------------");

// [예제 19-06]
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로포타입을 교체
obj.__proto__ = parent;

console.log(obj.x);

console.log("---------------");

// [예제 19-07]
const person = { name: "Lee" };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty("__proto__"));

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__prototype__"));
// {get: f, set: f, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype);

console.log("---------------");

// [예제 19-08]
const parents = {};
const child = {};

// child의 프로토타입을 parents로 설정
child.__proto__ = parents;
// parents의 프로토타입을 child로 설정
// parents.__proto__ = child;
// 서로가 자신의 프로토타입이 되기 때문에 에러 발생

console.log("---------------");

// [예제 19-11] 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty("prototype"); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty("prototype"); // false

// [예제 19-12]
// 화살표 함수는 non-constructor다.
const Person = (name) => {
  this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty("prototype")); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const obj2 = {
  foo() {},
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj2.foo.hasOwnProperty("prototype")); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj2.foo.prototype); // undefined

console.log("---------------");

// [예제 19-13, 14]
function Person2(name) {
  this.name = name;
}

const me = new Person2("Kim");

console.log(Person2.prototype === me.__proto__);
// true
// 객체의 __proto__ 접근자 프로터피와 함수 객체의 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.

console.log(me.constructor === Person2);
// me에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person2.prototype에는 constructor가 있음
// 따라서 me 객체는 프로토타입인 Person.prototype의 constructor 프로퍼티를 상속받아 사용할 수 있다.

console.log("---------------");

// [예제 19-15]
// obj 객체를 생성한 생성자 함수는 Object다.
const obj3 = new Object();
console.log(obj3.constructor === Object);

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function("a", "b", "return a+b");
console.log(add.constructor === Function);

// 생성자 함수
function Person3(name) {
  this.name = name;
}

// me3 객체를 생성한 생성자 함수는 Person3이다.
const me3 = new Person3("Kim");
console.log(me3.constructor === Person3);

console.log("---------------");

// [예제 19-16]
// 객체 리터럴
const obj4 = {};

// 함수 리터럴
const add4 = function (a, b) {
  return a + b;
};

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/gi;

// 이렇게 리터럴 표기법에 의해 생성된 객체들의 경우 프로토타입의 cosntructor 프로퍼티가 가리키는
// 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수는 없다.

// [예제 19-17]
// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj5 = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj5.constructor === Object);

console.log("---------------");

// [예제 19-18]
// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj6 = new Object();
console.log(obj6); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo(); // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
obj6 = new Object(123);
console.log(obj6);

// String 객체 생성
obj6 = new Object("123");
console.log(obj6);

// 이해가 안되는 데 어디가 이해되지 않는지도 모르겟당
