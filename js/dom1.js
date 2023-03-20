const divs = document.getElementsByTagName("div");

console.log(divs[0]);

divs[0].innerHTML += `<button type="button">버튼</button>`;

console.log(divs[0].innerHTML)

// create~~ : 새로운 요소 추가하기
const newButton = document.createElement("button");
const newButtonText = document.createTextNode("버튼2");
const buttonTypeAttribute = document.createAttribute("type");

// setAttributeNode : 속성 노드 연결하기
newButton.setAttributeNode(buttonTypeAttribute);
newButton.setAttribute("type", "button");

// appendChild : 자식 노드 연결하기
newButton.appendChild(newButtonText);
divs[0].appendChild(newButton);

// innerHTML의 console 값
{/* <div>
<label for="">사용자 이름</label>
<input type="text">
</div>
<div>
<label for="">비밀번호</label>
<input type="password">
</div>
<div>
<label for="">이메일</label>
<input type="text">
</div>
<button>버튼</button> */}