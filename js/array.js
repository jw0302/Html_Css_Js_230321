let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];
let numbers3 = new Array();

// concat : numbers1배열에 numbers2배열값을 합쳐 numbers4 새로 만들어짐
let numbers4 = numbers1.concat(numbers2);

console.log(numbers1);
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

// filter : 주어진 함수에 대한 true값으로 배열 새로 구성
function odd(num) {
  return num % 2 != 0;
}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

// function을 간소화 하면 이렇게 씀
let numbers6 = numbers4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i = 0; i < numbers1.length; i++) {
  console.log("i: " + numbers5[i]);
}

// forEach : 배열의 모든 요소에 대해 주어진 함수를 실행함
for(let num of numbers5) {
  console.log(`forEach: ${num}`)
}

// ===<< java >>===
// FileList<String> list = new ArrayList<String>();
// list.forEach(n -> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

// indexOf : 주어진 값과 일치하는 배열요소의 첫 인덱스를 찻는다.(lastIndexOf : 주어진 값이 없으면 -1 표시)
console.log(numbers5.indexOf(5));
console.log(numbers5.lastIndexOf(2));

// join : 배열 요소를 문자열로 합침
console.log(numbers5.join(";"));

// push : 배열 맨 끝에 새로운 요소 추가후 새로운 length 반환
console.log(numbers5.push(11));
console.log(numbers5);

// unshift : 배열 시작 부분에 새로운 요소 추가
console.log(numbers5.unshift(13));
console.log(numbers5);

// pop : 배열의 마지막 요소 제거
console.log(numbers5.pop());
console.log(numbers5);

// splice : 추가와 삭제 가능 삭제 = (인덱스 시작 위치, 제거 갯수), 추가 = (인덱스 시작 위치, 제거 갯수, 추가값~~)
numbers5.splice(2, 1, 15, 17);
console.log(numbers5);

// slice : 특정 부분만 잘라낸다. 
console.log(numbers5.slice(3, 6));
console.log(numbers5);

// sort : 지정한 조건에 따라 배열 정렬

function compare(n1, n2) {
  if(n1 > n2) return 1;
  if(n1 === n2) return 0;
  if(n1 < n2) return -1;
}
console.log(numbers5.sort(compare));

// reverse : 배열 배치 순서 역순으로 바꿈
console.log(numbers5.reverse());

// toString : 지정 부분을 문자열로 반환
console.log(numbers5.toString());

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
  history.back();
}


