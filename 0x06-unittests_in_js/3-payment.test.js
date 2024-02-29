const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with correct arguments and log the result', function () {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));

        calculateNumberSpy.restore();
        consoleSpy.restore();
    });
});
