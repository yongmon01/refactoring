// import invoces from "./invoces.js";
// import plays from "./plays.js";

const invoces = [
  {
    customer: "BigCo",
    performances: [
      { playID: "hamlet", audience: 55 },
      { playID: "asLike", audience: 35 },
      { playID: "othello", audience: 40 },
    ],
  },
];
const plays = {
  hamlet: { name: "hamlet", type: "tragedy" },
  asLike: { name: "as you like it", type: "comedy" },
  othello: { name: "othello", type: "tragedy" },
};

function amountFor(aPerformance, play) {
  let result = 0;
  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 20) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;

    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;

    default:
      throw new Error("알수 없는 장르");
  }
  return result;
}

function statement(invoce, plays) {
  let totalAmount = 0;
  let volumeCredit = 0;
  let result = `청구 내역 (고객명: ${invoce[0].customer})\n`;

  for (let perf of invoce[0].performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    volumeCredit += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredit += Math.floor(perf.audience / 5);
    result += `${play.name}: ${thisAmount / 100} (${perf.audience})석 \n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${totalAmount / 100}\n`;
  result += `적립 포인트 : ${volumeCredit}점\n`;
  return result;
}

console.log(statement(invoces, plays));
