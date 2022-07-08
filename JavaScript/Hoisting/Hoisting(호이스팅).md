# Hoisting(호이스팅)

코드가 실행되기전에 변수나 함수를 미리 메모리에 할당하는 것을 의미

---

### 호이스팅 대상

- 변수: `var`, `let`, `const`
- 함수: `function`

---

### 변수 호이스팅

```js
// before hoisting
var variable = "hello";
```

```js
// after hoisting
var variable;

variable = "hello";
```

호이스팅이 된다면 이렇게 변수 메모리 할당을 먼저 진행 한 후에,
변수 초기화가 진행 될 것이다

---

### 함수의 호이스팅

```js
// before hoisting
function fn() {
  var variable = "hello";
}
```

함수 안에 변수를 선언했을 경우 결과는 어떻게 변환 될까?

이것도 변수 호이스팅과 동일하게 `variable` 변수가 메모리에 할당되고,
그 다음에 `'hello'` 값을 가지도록 초기화 시킬 것이다.

그렇다면 여기서 변수 호이스팅과 함수 호이스팅의 차이는 무엇일까?

호이스팅은 스코프(블록) 안에서 이뤄지므로,
파일 최상단이 아닌 스코프의 최상단에서 호이스팅 될 것이다

```js
// after hoisting
function fn() {
  var variable;
  variable = "hello";
}
```
