// [예제 19-02]
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
    return Math.PI  * this.radius ** 2;
  },
  // 메서드 (동작)
};

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

console.log('---------------')

// [예제 19-04] 상속
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
}

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());