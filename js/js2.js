window.onload = () => {
  console.log("온로드 테스트");
  let calc = new Calc("장진원", 30);

  calc.showInfo();
  Calc.staticPrint();
  console.log(Calc.testNumber2);
  TestService.getInstance.showTestPrint();
}
// 전역 함수 =(function)

function add(a, b) {
  return a + b;
}

// ===<< python >>===
// def add(a, b) :
//   return a + b

// ===<< java >>===
// int add(int a, int b) {
//   return a + b;
// }

console.log(add(10, 20));

/**
 *    javascript에서의 Class
 * 
 *    # -> private (javascript에서 #의 의미)
 *    자료형은 선언하지 않는다.
 *    멤버변수 또는 멤버메소드를 참조할 때는 항상 this를 붙인다.
 *    멤버메소드를 정의할 떄는 function 키워드를 사용하지 않는다.
 *    생성자는 constructor로 정의한다.
 */

class Calc {
  #PI = null;
  testNumber = 10;
  static testNumber2 = 20;

  name = null;
  age = null;

  constructor(name, age) {
    if(typeof name == "string" && typeof age == "number") {
      this.name = name;
      this.age = age;

    } else if(typeof name == "string") {
      this.name = name;
      this.age = null;
    } else if(typeof name == "number") {
      this.name = null;
      this.age = name;
    } else {
      this.name = null;
      this.age = null;
    }
  }

  showInfo() {
    console.log(this.#PI);
    console.log(this.testNumber);
    console.log(this.testNumber2);
    console.log(this.name);
    console.log(this.age);
  }

  static staticPrint() {
    console.log("스태틱 테스트");
  }
}

let calc2 = {
  name : "장진원",
  age : 25,
  showInfo : function() {
    console.log(calc2.name);
    console.log(calc2.age);
  }
}

// javascript의 싱글톤
class TestService {
  static #instance = null;

  static getInstance() {
    if(this.#instance == null) {
      this.#instance = new TestService();
    }
    return this.#instance;
  }

  showTestPrint() {
    console.log("싱글톤 테스트 출력"); 
  }
}
