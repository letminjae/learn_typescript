// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식 (파라미터 + 반환값)
function sum2(a: number, b: number): number {
    return a + b;
}
sum(10, 20)

// 함수의 옵셔널 파라미터 => 무조건 파라미터에 인수를 채워야된다가 아닌 채워도 되고 안 채워도 된다임(물음표기호)
function log(a: string, b?: string){
}

log("hello TS") // 인수가 한개여도 에러가 나지않는다
log("hello TS", "hello optional") // 인수가 두개인 정상 실행 함수