// JSON (Java Script Object Notation)
// JSON : 데이터 형식(단순히 데이터를 표시하는 표현 방법)
// Java에서는 Json을 Map이라고 함.
var information = {
    // key : value
    "name" : "Lee jeong bae",
    "age" : 30,
    "address" : "대전 충정로 136",
    "isMarri" : false
}; // json은 key와 value로 구성.
// 주의점!
// 1. key는 중복 불가능 value는 중복 가능
// 2. value에 정수형(int, double), 문자형(string), 
//    boolean형, 배열형(array), null 온다.
// 3. 중괄호로 감싼다.

console.log(information);
console.log(information.age);

var age = information.age;
if(age >= 30){
    console.log('계란 한판')
}else{
    console.log('20대')
}

// 상수
const PI = 3.14;
var array = [1,3,4,5,10];
console.log(array[0]); //배열 0번째 값 호출
var len = array.length;
for(var i=0; i<len; i++){
    var value = array[i];
    if((value%2) == 0){
        console.log(value)
    }
}
// 최대값 구하기
var max = 0;
for(var i=0; i<len; i++){
    if(max < array[i]){
        max = array[i];        
    }
}
console.log(max)

