// 우테코 입출력 라이브러리
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력값 읽음
    const input = await MissionUtils.Console.readLineAsync();

    /* 
      만약에 입력값 시작이 //로 시작하면 커스텀 구분자를 사용한다는 뜻임!
      if 문을 이용하여 커스텀 구분자를 쓸 때와 아닐 때를 구분해서 구현할꺼임
    */

    // 입력값이 비어 있으면 결과 : 0 출력
    if(input == ""){
      MissionUtils.Console.print("결과 : 0");
      return;
    }

    // 공통 숫자 담을 배열
    let nums = [];

    // test 1 : 입력값 = ["//;\\n1"]
    if(input.startsWith("//")){// "//"로 시작한다면
      const [delimitFull, calculation] = input.split("\\n"); // "\\n"기준으로 구분자와 계산식으로 나눔
      const CustomDelimit = delimitFull[2]; // "//"제외하고 커스텀 구분자만 빼옴
      nums = calculation.split(CustomDelimit).map(Number); // 계산식도 커스텀 구분자를 기준으로 split! 
    }else{ 
      // test 2 : 입력값 = ["-1,2,3"];
      nums = input.split(/[, :]/).map(Number); // 기본 구분자 , : 을 기준으로 split해 숫자 nums에 담음
      for(const num of nums){
        if(num < 0){ // 만약에 숫자들 중에 음수가 있다면
          MissionUtils.Console.print("[ERROR]"); // 로그에 [ERROR]을 띄우고
          throw new Error("[ERROR]"); // 테스트 케이스에서 [ERROR]를 기대하고 있으므로 던짐?
        }
      }
    }

    const sum = nums.reduce((a,b)=>a+b,0); // reduce 함수를 활용하여 계산식에서 빼온 숫자들의 합계를 구함
    MissionUtils.Console.print(`결과 : ${sum}`); // 합산 결과값!
  }
}

export default App;
