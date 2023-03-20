const box = document.getElementsByClassName("box");
box[0].style.backgroundColor = "black";

addEvent();

// addEvent() 메소드 생성
function addEvent() {
  const redButton = document.getElementsByClassName("red-button");
  const blueButton = document.getElementsByClassName("blue-button");

  // 클릭시 box 색깔 바꺼주는 for문
  for(let i = 0; i < box.length; i++) {
    // 0번째 빨간색 버튼을 클릭하면 => 0번째 박스의 색깔을 빨강색으로 바꺼라 
    redButton[i].onclick = () => {
      box[i].style.backgroundColor = "red";
    }
    // 0번째 파랑색 버튼을 클릭하면 => 0번째 박스의 색깔을 파랑색으로 바꺼라
    blueButton[i].onclick = () => {
      box[i].style.backgroundColor = "blue";
    }
  }
}

const addButton = document.getElementsByClassName("add-button");
// addButton 클릭 시 'container' 추가 생성(container구성요소 : box,red-button,blue-button)
addButton[0].onclick = () => {
  const container = document.getElementsByClassName("container");
  // innerHTML을 사용하면 기존의 값에 객체를 대입하는거라 기존껀 사라진다.
  container[0].innerHTML += `
    <div class="box"></div>
    <button class="red-button">빨강색</button>
    <button class="blue-button">파랑색</button>
  `;
  // box가 추가될때마다 box[box.length - 1] 생성되는 box의 위치 색상 검정으로 설정
  box[box.length - 1].style.backgroundColor = "black";

  addEvent();
}