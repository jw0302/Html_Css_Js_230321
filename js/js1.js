// alert("알림창을 확인해주세요.");
// alert("두번째 알림창");
// alert(10 + 20);
// console.log("println");
// let flag = confirm("선택해주세요.");
// console.log(flag);
// let name2 = prompt("이름을 입력해주세요.");
// console.log(name2);
// let 자료형 undefined 가 뜨면 잘못된 형식
let test;
console.log(test);

// 두 숫자를 더하기 위해선 prompt앞에 형변환 해야 하는데 가능한 거 두개->parseInt,Number
let number1 = parseInt(prompt("첫번째 숫자를 입력하세요."));
let number2 = Number(prompt("두번째 숫자를 입력하세요."));
// 두개의 숫자를 입력받아 더한값을 console창에 띄우고 싶지만 자료형이 따로 있어서  이렇게 입력하면 안더해짐
console.log(number1 + number2)