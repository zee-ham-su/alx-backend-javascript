const Utils = require("./utils");
const assert = require("assert");
const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment.js");

describe("sendPaymentRequestToApi", function () {
    it("should stub Utils.calculateNumber and log the correct message", function () {
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

        const consoleSpy = sinon.spy(console, "log");

        sendPaymentRequestToApi(100, 20);

        assert(calculateNumberStub.calledOnceWithExactly("SUM", 100, 20));

        assert(consoleSpy.calledOnceWithExactly("The total is: 10"));

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});