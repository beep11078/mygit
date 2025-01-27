// 함수 정의 (=함수 선언문)
function add(x, y) {
  return x + y;
}

add(2, 5); // -> 함수 호출

/**
 * 자바 스크립트에서 함수는 객체 타입의 값이기 때문에,
 * 함수 리터럴로 생성할 수 있다.
 * 변수에 함수 리터럴 할당 (식별자 f에?)
 * 리터럴은 값을 생성하기 위한 표기법.
 * 함수 리터럴도 평가되어 값을 생성
 * 이 값은 객체이다.
 * ==> 함수는 객체다.
 * 함수 표현식
 */

var add1 = function add(x, y) {
  return x + y;
};

// Function 생성자 함수
var add2 = new Function("x", "y", "return x+y");

// 화살표 함수 (ES6)
var add3 = (x, y) => x + y;

// function (x, y) {
//   return x + y;
// } 
// 함수 식별자(식별자에 할당) 필요

// var add = function add(x,y)
//    식별자          함수이름