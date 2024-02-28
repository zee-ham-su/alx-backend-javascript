const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking if a and b have a rounded sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('checking if a is rounded and b is not rounded', () => {
        assert.strictEqual(calculateNumber(2.3, 5), 7);
        assert.strictEqual(calculateNumber(2.6, 5), 8);
        assert.strictEqual(calculateNumber(1.6, 5.8), 8);
        assert.strictEqual(calculateNumber(1.5, 4.8), 7);
    });

    it('checking if a is not rounded and b is rounded', () => {
        assert.strictEqual(calculateNumber(1, 4.7), 6);
        assert.strictEqual(calculateNumber(1, 6.5), 8);
        assert.strictEqual(calculateNumber(1.1, 3.5), 5);
        assert.strictEqual(calculateNumber(1.2, 3.5), 5);
    });
});
