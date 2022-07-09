# Hoisting(호이스팅)

코드가 실행되기전에 변수나 함수를 미리 메모리에 할당하는 것을 의미

### 호이스팅 대상

- 변수: `var`, `let`, `const`
- 함수: `function`

---

### 변수 호이스팅

```js
var variable = "hello";
```

```js
var variable;

variable = "hello";
```

호이스팅이 된다면 이렇게 변수 메모리 할당을 먼저 진행 한 후에,
변수 초기화가 진행 될 것이다.

```js
function fn() {
  var variable = "hello";
}
```

함수 안에 변수를 선언했을 경우 어떻게 변환 될까?

이것도 변수 호이스팅과 동일하게 `variable` 변수가 메모리에 할당되고,
그 다음에 `'hello'` 값을 가지도록 초기화 시킬 것이다.

그렇다면 여기서 변수 호이스팅과 함수 호이스팅의 차이는 무엇일까?

호이스팅은 스코프(블록) 안에서 이뤄지므로,
파일 최상단이 아닌 스코프의 최상단에서 호이스팅 될 것이다

```js
function fn() {
  var variable;
  variable = "hello";
}
```

예제를 하나 더 살펴보자

```js
console.log(variable);

var variable = "hello";
```

출력 결과: undefined

내가 호이스팅이라는 개념을 처음 접했을때 헷갈렸던 부분이였다
호이스팅이 되면서 변수가 상단으로 올려진다면 왜 undefined가 나오는걸까?

```js
var variable;

console.log(variable);
variable = "hello";
```

호이스팅은 변수를 메모리에 할당시키는것만 최상단으로 올린것이지
초기화까지 상단으로 올리지 않았기떄문이다.

`undefined`라는 단어로 인하여 더 헷갈렸는데
만약 호이스팅이 되지 않았다면,
`undefined`가 아닌 `variable이 정의되지 않음`이라는 오류가 출력되었을것이다.

---

### 함수의 호이스팅

```js
printName("yujin");

function printName(name) {
  console.log(`My name is ${name}!`);
}
```

이렇게 작성된 코드가 있다.

함수를 선언하기도 전에 함수를 실행했는데 에러가 발생하지 않는 이유는 무엇일까?

그 이유는 함수도 호이스팅이 되기 때문이다.

실제 코드가 실행 될 때, `printName(name)` 함수가 먼저 선언이 되고 이후에 `printName('yujin')` 함수가 실행 되었을것이다

그렇다면,
함수를 선언함과 동시에 변수에 할당하는 함수 표현식은 과연 호이스팅이 될까?
정답은 아니다.

```js
printName("yujin");

var printName = function (name) {
  console.log(`My name is ${name}!`);
};
```

이렇게 작성된 코드를 실행해보자.
실행해보면, printName은 함수가 아니라는 결과를 확인할 수 있다.

위에 작성된 코드는 호이스팅이 되면 이렇게 동작할 것이다.

```js
var printName;

printName("yujin");

printName = function (name) {
  console.log(`My name is ${name}!`);
};
```

`printName`은 함수로 초기화 되기도 전에 printName('yujin')이라는 함수를 실행했기 때문에 함수가 아니라는 결과를 받아볼 수 있다
