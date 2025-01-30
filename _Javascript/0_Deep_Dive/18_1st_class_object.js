// [예제 18-01]
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 3. 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

// 3. 함수는 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

// [예제 18-02] 프로퍼티 확인
function square(number) {
  return number * number;
}

console.dir(square);

// [예제 18-03] 프로퍼티 어트리뷰트 Object.get~ 메서드로 확인
console.log(Object.getOwnPropertyDescriptors(square));

// __proto__는 square 함수의 프로퍼티가 아니다. 
console.log(Object.getOwnPropertyDescriptor(square,'__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
// __proto__ 접근자 프로퍼티느 모든 객체가 사용할 수 있다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

console.log('---------------')

// [예제 18-11]
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문 (Function declaration)
function bar() {}
console.log(bar.name); // bar

// 함수 이름과 함수 객체를 가리키는 식별자는 의미가 다르다*
// 함수를 호출할 때는 함수 객체를 가리키는 식별자로 호출한다.

