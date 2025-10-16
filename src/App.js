// 우테코 입출력 라이브러리
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력값 읽음
    const input = await MissionUtils.Console.readLineAsync();

    /* 
      만약에 입력값 시작이 //로 시작하면 커스텀 구분자를 사용한다는 뜻임!
      if 문을 이용하여 커스텀 구분자를 쓸 때와 아닐 때를 구분해서 구현할꺼임

      입력값 = ["//;\\n1"]
    */

    if(input.startsWith("//")){// "//"로 시작한다면
      const [delimitFull, calculation] = input.split("\\n"); // "\\n"기준으로 구분자와 계산식으로 나눔
      const CustomDelimit = delimitFull[2]; // "//"제외하고 커스텀 구분자만 빼옴
      const num = calculation.split(CustomDelimit); // 계산식도 커스텀 구분자를 기준으로 split!
      const sum = num.reduce((a,b)=>a+b,0); // reduce 함수를 활용하여 계산식에서 빼온 숫자들의 합계를 구함 

      MissionUtils.Console.print(`결과 : ${num}`);
    }
  }
}

export default App;
