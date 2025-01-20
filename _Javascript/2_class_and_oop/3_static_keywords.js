/**
 * Static Keyword
 * 객체를 클래스에 귀속
 */

// class MyBias {
//   name;
//   number;
//   static groupName = "북산";

//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }

//   static returnGroupName() {
//     return "북산";
//   }
// }

// const mitchi = new MyBias("정대만", 14);
// console.log(mitchi);

// console.log(MyBias.groupName);
// console.log(MyBias.returnGroupName());

/**
 * factory constructor
 */

class MyBias {
  name;
  number;

  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  static fromObject(object) {
    return new MyBias(object.name, object.number);
  }

  static fromList(list) {
    return new MyBias(list[0], list[1]);
  }
}

const mitchi = MyBias.fromObject({
  name: "정대만",
  number: 14,
});
console.log(mitchi);

const mitsui = MyBias.fromList(["정대만", 3]);

console.log(mitsui);
