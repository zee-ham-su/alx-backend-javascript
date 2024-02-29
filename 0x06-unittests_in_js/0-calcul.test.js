const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking if a and b have a rounded sum', () => {
        assert.strictEqual(calculateNumber(2, 4), 6);
        assert.strictEqual(calculateNumber(1, 5.8), 7);
        assert.strictEqual(calculateNumber(2.3, 5.8), 8);
        assert.strictEqual(calculateNumber(2.5, 5.8), 9);
    });

    it('checking if a is rounded and b is not rounded', () => {
        assert.strictEqual(calculateNumber(1.3, 5), 6);
        assert.strictEqual(calculateNumber(1.6, 5), 7);
        assert.strictEqual(calculateNumber(1.6, 5.8), 8);
    });

    it('checking if a is not rounded and b is rounded', () => {
        assert.strictEqual(calculateNumber(1, 5.8), 7);
        assert.strictEqual(calculateNumber(1, 5.5), 7);
        assert.strictEqual(calculateNumber(1.3, 5.8), 7);
    });
});