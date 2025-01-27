const { JSDOM } = require('jsdom');
const dom = new JSDOM('<html><body><button id="myButton">Click me</button></body></html>');
const document = dom.window.document;

document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked!');
});

// // 함수 참조
// console.dir(add); // [Function: add]
// console.dir(sub); // undefined

// // 함수 호출
// console.log(add(2, 5)); // 7
// console.log(sub(2, 5)); // TypeError: sub is not a function

// // 함수 선언문 -> 함수 호이스팅 발생
// // 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 당연한 규칙 무시 -> 사용 비권장
// function add (x, y) {
//   return x + y;
// }

// // 함수 표현식 -> 변수 호이스팅 발생!!!! var sub 먼저 만들어지기 때문에 console.dir -> undefined
// // 따라서 함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출
// var sub = function (x, y) {
//   return x - y;
// };

// 콜백 함수
// function repeat(n) {
//   for (var i = 0; i < n; i++) console.log(i);
// }

// repeat(5);

// console.log("---------------");

// function repeat1(n) {
//   for (var i = 0; i < n; i++) console.log(i);
// }

// repeat1(5);

// console.log("---------------");

// function repeat2(n) {
//   for (var i = 0; i < n; i++) {
//     if (i % 2) console.log(i);
//   }
// }

// repeat2(5);
// // 이런식으로 매번 함수를 새롭게 정의하지 않고 함수 합성을 통해 해결하기

// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

// 콜백 함수
var logAll = function (i) {
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);

console.log("---------------");

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds);

// [예제 12-54]
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼 클릭하면 콜백 함수 실행
document.getElementById('myButton').addEventListener('click', function (){
  console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지 출력
setTimeout(function(){
  console.log('1초 경과');
}, 1000);


// [예제 12-55]
// 콜백 함수를 사용하는 고차 함수 map 
var res = [1, 2, 3].map(function(item) {
  return item * 2 ;
})

console.log(res);

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function(item){
  return item % 2;
})

console.log(res);
console.log('---------------');

// 콜백 함수를 사용하는 고차 함수 reduce
res3 = [1, 2, 3].reduce(function(acc, cur){
  return acc + cur;
}, 0);

console.log(res3);


const arr = ['a', 'b', 'c'];
const obj = arr.reduce((acc, val, index) => {
  acc[index] = val;
  return acc;
}, {});
// 배열을 객체로 "줄이는" 것


console.log(obj);