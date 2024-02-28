const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe, it } = require('node:test');

describe('calculateNumber', function() {
    it('sum of two round numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('subtract two round numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('divide two round numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('divide by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});

