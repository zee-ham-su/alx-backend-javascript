import chai from "chai";
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function () {
    it(`should return the sum of two rounded numbers`, function () {
        expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });

    it(`should return the result of subtracting b from a`, function () {
        expect(calculateNumber("SUBTRACT", 1.4, 2.2)).to.equal(-1);
    });

    it(`should return the result of subtracting b from a`, function () {
        expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
    });

    it(`should return the result of dividing a by b when b is not rounded to 0`, function () {
        expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });

    it(`should return "Error" when b is rounded to 0`, function () {
        expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal("Error");
    });

    it(`should return the result of dividing a by b when b is not rounded to 0`, function () {
        expect(calculateNumber("DIVIDE", 1.4, 4.6)).to.equal(0.2);
    });
});
