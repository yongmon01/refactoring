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

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${perf.amount / 100} (${perf.audience})석 \n`;
  }
  result += `총액: ${data.totalAmount / 100}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredit}점\n`;
  return result;
}

function statement(invoce, plays) {
  const statementData = {};
  statementData.customer = invoce[0].customer;
  statementData.performances = invoce[0].performances.map(enrichPerformace);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredit = totalVolumeCredit(statementData);
  return renderPlainText(statementData, plays);

  function enrichPerformace(aPerformace) {
    const result = Object.assign({}, aPerformace);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredit = volumeCreditFor(result);
    return result;
  }

  function playFor(aPerformace) {
    return plays[aPerformace.playID];
  }

  function amountFor(aPerformance) {
    let result = 0;
    switch (aPerformance.play.type) {
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

  function volumeCreditFor(aPerformace) {
    let result = 0;
    result += Math.max(aPerformace.audience - 30, 0);
    if ("comedy" === aPerformace.play.type)
      result += Math.floor(aPerformace.audience / 5);
    return result;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredit(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredit, 0);
  }
}

console.log(statement(invoces, plays));
