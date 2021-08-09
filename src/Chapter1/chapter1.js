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

function statement(invoce, plays) {
  let totalAmount = 0;
  let volumeCredit = 0;
  let result = `청구 내역 (고객명: ${invoce.customer})\n`;

  //
  console.log("plays: ", plays);
  for (let perf of invoce[0].performances) {
    const play = plays[perf.playID];
    console.log(play);
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 20) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;

      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;

      default:
        throw new Error("알수 없는 장르");
    }

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
