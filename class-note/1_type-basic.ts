// 기본적인 타입에 대해 알아보자

//JS 타입이 없이 변수 선언방식
// var str = "hello"; 

//TS 문자열 선언방식
const strPrac: string = "hello"; 

//TS 넘버 선언방식
const numPrac: number = 10;

//TS 배열 선언방식 => 대문자 Array에 배열안에 들어가는 타입 <>로 설정
const arrPrac: Array<number> = [1, 2, 3];
const arrPrac2: Array<string> = ["hi", "hello", "bye"];

//TS 배열 선언방식 쉬운버전 => 타입에다가 배열 리터럴인 [] 씌워주면 됨
const itemsPrac: number[] = [1,2,3];

//TS 튜플 => 배열의 index에다 타입의 특정 위치를 지정
const tuplePrac: [string, number] = ["강남", 3];

//TS 객체
const objPrac: object = {};
const personPrac: object = {
    name: "Cha",
    age: 29
};

// 위 처럼  object로 타입을 처리할 수 있지만 객체 안의 key 타입에 따라서 타입을 적용할 수 있다.
const personPrac2: { name: string, age: number } = {
    name: "Cha",
    age: 29
};

//TS 불린
const isLoginPrac: boolean = false;
