window.onload = () => {

}


// 익명 함수

let a = function() {
  console.log("a 함수 호출");
}

a();

console.log(typeof a);

// let b = function(f) {
//   console.log("테스트가 프린트 되기 전에 무조건 실행");
//   f();
// }

// 화살표 함수 (위의 코드와 동일한데 function을 => 으로 바꾼 차이)
let b2 = (f) => {
  console.log("테스트가 프린트 되기 전에 무조건 실행");
  f();
}

b(a);

b(function(){console.log("test")});

// 즉시 실행 함수 (전체 문장에 ()를 꼭 해줘야 한다.)
(function(){console.log("test2")}());