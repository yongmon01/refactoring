const assert = require("assert");

describe("Province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    assert.equal(asia.shortfall, 5);
  });
  it("profit", function () {
    assert.equal(asia.profit, 230);
  });
  it("change production", function () {
    // console.log(asia._producers);
    asia._producers[0].production = 20;
    assert.equal(asia.shortfall, -6);
    assert.equal(asia.profit, 292);
  });
});

class Producer {
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }
  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
  set cost(arg) {
    this._cost = parseInt(arg);
  }
  get production() {
    return this._production;
  }
  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province._totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}

class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d))); // this, d?
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get shortfall() {
    return this._demand - this._totalProduction;
  }

  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this._price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this._totalProduction);
  }

  get demandCost() {
    let remainingDemand = this._demand;
    let result = 0;
    this._producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byz", cost: 10, production: 9 },
      { name: "Att", cost: 12, production: 10 },
      { name: "Sin", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}
