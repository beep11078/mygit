function test() {
  var x = 1; // 함수 스코프 내부의 x
  if (true) {
    var x = 10; // 같은 함수 스코프의 x를 덮어씀
  }
  console.log(x); // 10
}

test();

console.log(x); 
console.log('--------------------------'); 


// [예제 13-09]
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();