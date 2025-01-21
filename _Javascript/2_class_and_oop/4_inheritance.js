/**
 * Inheritance 상속: 객체들 간의 관계를 구축하는 방법, 수퍼클래스 또는 부모 클래스 등 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 * D.R.Y = Don't Repeat Yourself!
 */

// 부모/슈퍼 클래스 (parent/super class)
class BasketTeam {
  name;
  number;

  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

// 자식 클래스 (child class) extends 부모 클래스  
class Shohoku extends BasketTeam {
  goal() {
    return "정대만의 3점 슛!";
  }
}

class Ryonan extends BasketTeam {
  do() {
    return "윤대협이 한다.";
  }
}

const daeMan = new Shohoku("정대만", 14);
console.log(daeMan);

const daeHyup = new Ryonan("윤대협", 7);
console.log(daeHyup);

console.log(daeMan.goal());
console.log(daeMan.name);

console.log(daeHyup.do());
console.log(daeHyup.number);

// console.log(daeMan.do());

console.log(daeMan instanceof BasketTeam);
console.log(daeMan instanceof Shohoku);
console.log(daeMan instanceof Ryonan);
