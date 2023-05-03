const { expect } = require("chai");
const { add, multiply } = require("../utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Adds 2 of the same number", () => {
      const result = add(1, 1);
      expect(result).to.equal(2);
    });

    it("Adds 2 different numbers", () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    it("Adds a positive and a negative number", () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it("Adds 2 negative numbers", () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });
});

describe("Utils", () => {
  describe("Multiply", () => {
    it("Multiply 2 of the same number", () => {
      const result = multiply(2, 2);
      expect(result).to.equal(4);
    });

    it("Multiply of 2 different numbers", () => {
      const result = multiply(2, 5);
      expect(result).to.equal(10);
    });

    it("Multiply a positive and negative number", () => {
      const result = multiply(3, -1);
      expect(result).to.equal(-3);
    });

    it("Multiply 2 negative numbers", () => {
      const result = multiply(-2, -2);
      expect(result).to.equal(4);
    });
  });
});
