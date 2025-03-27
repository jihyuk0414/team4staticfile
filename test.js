const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 질문을 출력하고 입력을 기다립니다
rl.question('점수를 입력하세요: ', (score) => {
  // 입력된 점수를 숫자로 변환
  score = parseFloat(score);
  
  if (isNaN(score)) {
    console.log("유효한 숫자를 입력해주세요.");
    rl.close();
    return;
  }
  
  switch(Math.round(score / 10 )) {
    case 10:
    case 9:
      console.log("A학점");
      break;
    case 8:
      console.log("B학점");
      break;
    case 7:
      console.log("C학점");
      break;
    case 6:
      console.log("D학점");
      break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("F학점");
      break;
    default:
      console.log("0에서 100 사이의 점수를 입력해주세요.");
      break;
  }
  
  rl.close();
});
