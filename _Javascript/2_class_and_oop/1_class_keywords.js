/**
 * class : 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(객체 안의 함수)를 정의하는 일종의 틀이다. => 정보를 일반화해서 정리하는 틀
 */

class MyBias {
  // name = '정대만';
  // birth = 522;
  // 프로퍼티 정의 생략 가능

  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
    // this : 현재 인스턴스
  }

  sayName() {
    return `그래, 내 이름은 ${this.name}...`;
  }
}

const daeMan = new MyBias("정대만", 522);
console.log(daeMan);
const haJin = new MyBias("서하진", 612);
console.log(haJin);

console.log(daeMan.name);
console.log(daeMan.birth);

console.log(daeMan.sayName());
console.log(haJin.sayName());

console.log(typeof MyBias); // class는 함수의 일종
console.log(typeof daeMan); // class로 생성한 instance는 객체object이다.
