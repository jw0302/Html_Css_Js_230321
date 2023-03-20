// window.alert(); : window 생략가능
// alert();

// href : 해당 페이지를 호출한 값으로 이동시켜줌  (이동후 뒤로가기 가능)
// console.log(location.href);
// location.href = "http://www.naver.com";

const naverButton = document.getElementsByTagName("button");
naverButton[0].onclick = () => {
  // location.href = "http://www.naver.com";
  location.replace("http://www.naver.com");     // replace는 이동후 뒤로가기 불가
}

naverButton[1].onclick = () => {
  location.href = "http://127.0.0.1:5500/javascript/array.html";
}