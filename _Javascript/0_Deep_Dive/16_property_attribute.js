// [예제 16-01]
const o ={};

// o.[[Prototype]] 내부 슬롯, 직접 접근 불가
o.__proto__



// [예제 16-03]
const person = {
  name: 'Lee'
};

person.age = 30;

console.log(Object.getOwnPropertyDescriptors(person));
/**
 * {
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 30, writable: true, enumerable: true, configurable: true }
}
 */


console.log('---------------');

// [예제 16-06]
const person2 = {
  // 데이터 프로퍼티
  firstName: "Daeman",
  lastName: "Jeong",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다. 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    // 배열 디스트럭처링 할당 (31장)
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.firstName + ' ' + person2.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수 호출됨
person2.fullName = 'Hisashi Mitsui';
console.log(person2);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수 호출됨
console.log(person2.fullName);
console.log('---------------');

// firstName은 데이터 프로퍼티
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);
/**
* {
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
  }
 */