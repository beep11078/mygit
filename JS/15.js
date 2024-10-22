const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        // 변수 앞에 +를 붙이면, 그 변수를 숫자로 변환
        // 목표값
        const c = +counter.innerText
        // 현재 카운터의 값

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // Math.ceil() 함수는 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환 =쉽게 올림처리 한다고 생각
            // '${}' 템플릿 리터럴에서 사용되는 구문으로, 문자열 안에 변수를 쉽게 삽입할 수 있게 해줍니다. 일반적으로 백틱(`)으로 감싼 문자열 안에서 사용됩니다.
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})



/*
getAttribute: 특정 속성의 값을 가져옵니다.
const value = element.getAttribute('attributeName');

setAttribute: 특정 속성의 값을 설정할 때 사용합니다.
element.setAttribute('attributeName', 'value');


removeAttribute: 특정 속성을 제거할 때 사용합니다.
element.removeAttribute('attributeName');


hasAttribute: 특정 속성이 존재하는지 확인할 때 사용합니다.
const exists = element.hasAttribute('attributeName');


getElementsByClassName: 특정 클래스 이름을 가진 요소들을 모두 가져옵니다.
const elements = document.getElementsByClassName('className');


querySelector: CSS 선택자를 사용하여 특정 요소를 선택할 수 있습니다.
const element = document.querySelector('.className');
*/




/*
템플릿 리터럴(Template Literal)은 JavaScript에서 문자열을 다루는 새로운 방식으로, 백틱(``` ` ```)으로 감싸서 사용합니다. 템플릿 리터럴을 사용하면 다음과 같은 장점이 있습니다:

### 1. **변수 삽입**:
   `${}` 구문을 사용하여 문자열 내에 변수를 쉽게 삽입할 수 있습니다.

   const name = 'Alice';
   const greeting = `Hello, ${name}!`; // "Hello, Alice!"

### 2. **표현식 사용**:
   문자열 내에서 직접 계산하거나 함수 호출을 할 수 있습니다.

   const a = 5;
   const b = 10;
   const result = `The sum is ${a + b}.`; // "The sum is 15."

### 3. **다중 줄 문자열**:
   템플릿 리터럴을 사용하면 여러 줄에 걸쳐 문자열을 쉽게 작성할 수 있습니다.
   ```javascript
   const message = `This is a string
   that spans multiple lines.`;

### 4. **어떤 형태의 문자열도 사용 가능**:
   템플릿 리터럴 안에서는 다양한 데이터 타입을 문자열로 변환하여 사용할 수 있습니다.

템플릿 리터럴은 가독성을 높이고, 복잡한 문자열 조작을 간단하게 만들어줍니다.*/



/*
*/