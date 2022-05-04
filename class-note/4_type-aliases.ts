// interface Person {
//     name: string;
//     age: number;
// }

type Person1 = {
    name: string;
    age: number;
}

var minjae: Person1 = {
    name: '민재',
    age: 29 
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
    id: string;
    title: string;
    done: boolean;
};
function getTodo(todo: Todo){

}

//type VS interface
//타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부이다.
//인터페이스는 extends로 확장이 가능한 반면, 타입 별칭은 확장이 불가능하다.
//따라서 공식문서상에는 type 보다는 interface로 선언해서 사용하는 것을 추천한다.