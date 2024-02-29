const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
    it(`should return the sum of two rounded numbers`, function() {
        assert.strictEqual(calculateNumber("SUM", 1, 2), 3);
    });

    it(`should return the result of subtracting b from a`, function() {
        assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 2.2), -1);
    });

    it(`should return the result of subtracting b from a`, function() {
        assert.strictEqual(calculateNumber("SUBTRACT", 4.9, 2.7), 2);
    });

    it(`should return the result of dividing a by b when b is not rounded to 0`, function() {
        assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
    });

    it(`should return "Error" when b is rounded to 0`, function() {
        assert.strictEqual(calculateNumber("DIVIDE", 1.7, 0), "Error");
    });

    it(`should return the result of dividing a by b when b is not rounded to 0`, function() {
        assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.6), 0.2);
    });
});
