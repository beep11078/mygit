// [예제 14-02]
var x = 'global';

function foo() {
  console.log(x);
  var x = 'local';
}

foo();
console.log(x);

// [예제 14-04] 즉시 실행 함수
(function(){
  var foo1 = 100;
}());

// console.log(foo1); // Error

// [예제 14-05] 네임 스페이스 객체
var MYAPP = {} // 전역 네임 스페이스 객체

MYAPP.name = 'Lee';

console.log(MYAPP.name);