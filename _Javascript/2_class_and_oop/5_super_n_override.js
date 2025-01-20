/**
 * Super and Override
 */

class BasketTeam {
  name;
  number;

  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  myName() {
    return `난 ${this.name}. 포기를 모르는 남자지⋯.`;
  }
}

class Shohoku extends BasketTeam {
  position;

  constructor(name, number, position) {
    super(name, number); // 부모 클래스 (슈퍼 클래스) 상속 == BasketTeam()
    this.position = position;
  }

  myName() {
    // return `난 ${this.name}. 포기를 모르는 ${this.position}지⋯.`
    return `${super.myName()} ${this.position}이 다.`;
  }
}

const daeMan = new Shohoku("정대만", 14, "슈터");
console.log(daeMan);

const taeWoong = new Shohoku("서태웅", 11);
console.log(taeWoong);
console.log(taeWoong.myName());
console.log(daeMan.myName());
