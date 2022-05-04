interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var minjae: User = {
    age: 29,
    name: '민재'
};

// 함수에 인터페이스 활용 => 타입스크립트에서 가장 많이 활용하는 구간
function getUser(user: User) {
    console.log(user)
};

const boss = {
    name: "민재",
    age: 100
};

getUser(boss);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number) : number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인터페이스의 인덱싱
interface StringArray {
    [index: number]: string; // 배열안에서 index 값은 number, 요소들은 string
}
var arr: StringArray = ['a','b','c'];
// arr[0]; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; // object의 key값, 즉 왼쪽은 속성, value, 즉 오른쪽은 정규식
}

var obj: StringRegexDictionary = {
    something: /abc/,
    cssFile: /\.css$/,
}
obj['cssFile'] = 'a' // error : string 값으로 value 값을 바꿨기 때문에 에러

Object.keys(obj).forEach(function(value){}) //object의 key들만 모아서 배열을 만든다음, forEach를 돌림

// 인터페이스 확장 => Person과 Developer에 중복되는 코드가 있다. 확장시켜서 중복되는 코드를 없애자
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person { // extends 구문을 통해 Person을 상속 받음
    language: string;
}

var boss2: Developer = {
    language: "Typescript",
    age: 100,
    name: "minjae"
}