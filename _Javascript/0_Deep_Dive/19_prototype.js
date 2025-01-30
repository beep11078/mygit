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
