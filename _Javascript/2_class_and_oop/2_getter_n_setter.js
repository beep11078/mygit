/**
 * Getter and Setter
 */

class MyBias {
  name;
  birth;

  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndBirth() {
    return `${this.name}-${this.birth}`;
  }

  set setName(name) {
    // parameter 하나 필수
    this.name = name;
  }
}

const daeMan = new MyBias("정대만", 522);
console.log(daeMan);
console.log(daeMan.nameAndBirth);
// console.log(daeMan.nameAndBirth()); 이거 아님 함수처럼 저장했지만 키값처럼 사용

daeMan.setName = "밋치";
// setter는 프로퍼티처럼 불러올 수 있음
console.log(daeMan);

class MyBias2 {
  #name; // ES7에서만 가능
  birth;

  constructor(name, birth) {
    this.#name = name;
    this.birth = birth;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

console.log("-----------------------");
const daeMan2 = new MyBias2("정대만", 522);
console.log(daeMan2);
console.log(daeMan2.name);

daeMan2.name = "밋치";
console.log(daeMan2.name);
