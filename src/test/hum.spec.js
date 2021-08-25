const assert = require("assert");
const sayHello = require("../Chapter4/hum").sayHello;

describe("app test", function () {
  it("should return hello", function () {
    assert.equal(sayHello(), "hello");
  });
});
