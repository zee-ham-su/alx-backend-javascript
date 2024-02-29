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

        assert(spy.withArgs("The total is: 10").calledOnce);
        assert(stub.withArgs("SUM", 100, 20).calledOnce);
    });
});
