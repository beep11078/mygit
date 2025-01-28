// [예제 17-04]
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// new 연산자 없 -> 일반 함수로 호출
const circle3 = Circle(15);
console.log(circle3); // undefined
console.log(radius); // 일반 함수의 this = 전역 객체 