const assert = require("assert");
const Province = require("../Chapter4/classProvince");

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

describe("Province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
