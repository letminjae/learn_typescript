// function logMessage(value: string){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100); // number 타입이기에 에러

//하지만 | 연산자를 쓴다면?! => Union Type 이라고 부름

function logMessage(value: string | number){
    if (typeof value == 'number'){ // value의 타입을 점검, value가 number라고 조건문을 걸면, value는 자연스럽게 number가 됨
        value.toLocaleString(); // 그래서 value에 number 관련한 내장메서드가 나옴
    }
    if (typeof value == 'string'){ // string도 마찬가지
        value.toString();
    }
    throw new TypeError('value must be string or number'); // number와 string이 아닌 타입들은 TypeError를 뱉어내서 `타입 가드`를 할수 있다.
    // 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// interface끼리도 Union type 연산자가 적용 가능하다. But! `공통 속성`만 접근이 가능함!!
function askSomeone(someone: Developer | Person) {
    // someone.name
    // someone.age // error 가 뜸;;
    // someone.skill // 얘도 error가 뜸;;
    //Developer도 되야하고 Person도 되야하기 때문에 
    //타입스크립트 입장에서는 공통 속성이 아닌 타입은 safe 하지않다는 결론을 내리게 됨 => 함수내에서 에러발생
}

//-----------------------------------------------------------------

// 인터섹션 타입 => & 연산자를 이용
var boss2 : string & boolean & number ; // never라고 나온다. 왜? string 이면서 boolean이면서 number인 값이어야 하는데 그런건 없기 때문이다.
function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.age // 유니온 타입과 비교해서 에러가 뜨지않음
    someone.skill // 마찬가지로 에러가 뜨지않음
    //someone 이라는 것은 Developer와 Person이 가지고 있는 모든 속성과 타입을 모두 포함하는 하나의 타입이라고 인터섹션 타입이 지정해줌
}

// 유니온 타입과 인터섹션 타입의 차이점과 장단점 알아보기

//유니온 타입이기 때문에 Devloper의 데이터를 주거나 Person의 데이터를 주면 되니 함수 호출 시 두 개 다 에러가 뜨지않음
askSomeone({
    name: "디벨로퍼",
    skill: "웹 개발"
});
askSomeone({
    name: "참인죄",
    age: 100
});


askSomeone2({
    name: "디벨로퍼",
    skill: "웹 개발"
}); // 에러가 뜸. age도 필요하기 때문임. 모든 속성을 포함하는 하나의 타입으로 인터섹션 타입이 설정해놨기 때문이기에 에러 발생 
askSomeone2({
    name: "참인죄",
    age: 100
}); // 마찬가지로 skill이 없기에 에러 발생.

// 결론적으로 인터섹션 타입은 Developer + Person의 타입이 더해진 새로운 타입이 된다고 보면 되겠다.
askSomeone2({
    name: "참인죄",
    skill: "웹 개발",
    age: 100
}); // 정상 코드