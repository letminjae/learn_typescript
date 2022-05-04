// 디폴트 enum = 숫자형 이넘
enum Shoes {
    Nike,
    Adidas,
    Newbalance
}

var myShoes = Shoes.Nike;
var myShoes2 = Shoes.Adidas;
console.log(myShoes); // 0 => 별도의 enum 값을 지정하지않으면 숫자형 이넘, 0 으로 찍힌다.
console.log(myShoes2); // 1

// 문자형 enum
enum Shoes2 {
    Nike = 'nike',
    Adidas = 'adidas',
    Newbalance = 'newbalance'
}

var yourshoes = Shoes2.Nike
var yourshoes2 = Shoes2.Adidas
console.log(yourshoes); // nike
console.log(yourshoes2); // adiadas

// enum의 활용
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log("정답입니다")
    }
    if(answer === Answer.No){
        console.log("오답입니다")
    }
}
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes'); 만약 askQuestion 함수의 파라미터인 answer가 string 값이었으면 모두 타입 통과. 하지만 모두 정답이라고 뜰거임

askQuestion(Answer.Yes); // 정상코드 => 이넘에서 제공되는 값만 넘길 수 있다. 드롭다운 등 목록이 필요한 경우 이넘을 쓰는 경우가 많다.