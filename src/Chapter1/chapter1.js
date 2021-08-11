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

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${perf.amount / 100} (${perf.audience})석 \n`;
  }
  result += `총액: ${data.totalAmount / 100}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredit}점\n`;
  return result;
}

function statement(invoce, plays) {
  return renderPlainText(createStatementData(invoce, plays));
}

class PerformaceCalculator {
  constructor(aPerformace, aPlay) {
    this.performance = aPerformace;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;
    switch (this.play.type) {
      case "tragedy":
        result = 40000;
        if (this.performance.audience > 20) {
          result += 1000 * (this.performance.audience - 30);
        }
        break;

      case "comedy":
        result = 30000;
        if (this.performance.audience > 20) {
          result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        break;

      default:
        throw new Error("알수 없는 장르");
    }
    return result;
  }

  get volumeCredit() {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    if ("comedy" === this.play.type)
      result += Math.floor(this.performance.audience / 5);
    return result;
  }
}

class TragedyCalculator extends PerformaceCalculator {}

class ComedyCalculator extends PerformaceCalculator {}

function createPerformaceCalculator(aPerformace, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformace, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformace, aPlay);
    default:
      throw new Error(`알수없는 장르: ${aPlay.type}`);
  }
}

function createStatementData(invoce, plays) {
  const statementData = {};
  statementData.customer = invoce[0].customer;
  statementData.performances = invoce[0].performances.map(enrichPerformace);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredit = totalVolumeCredit(statementData);

  function enrichPerformace(aPerformace) {
    const calculator = createPerformaceCalculator(
      aPerformace,
      playFor(aPerformace)
    );
    const result = Object.assign({}, aPerformace);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredit = calculator.volumeCredit;
    return result;
  }

  function playFor(aPerformace) {
    return plays[aPerformace.playID];
  }

  // function amountFor(aPerformance) {
  //   return new PerformaceCalculator(aPerformance, playFor(aPerformance)).amount; 여기는 왜 이래야 되지
  // }

  // function volumeCreditFor(aPerformace) {}

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredit(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredit, 0);
  }

  return statementData;
}

console.log(statement(invoces, plays));
