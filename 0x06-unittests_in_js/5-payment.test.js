const { describe, it, beforeEach, afterEach } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, "log");
    });

    afterEach(function () {
        consoleSpy.restore();
    });

    it("should log 'The total is: 120' when called with 100 and 20", function () {
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledOnceWithExactly("The total is: 120"));
    });

    it("should log 'The total is: 20' when called with 10 and 10", function () {
        sendPaymentRequestToApi(10, 10);
        assert(consoleSpy.calledOnceWithExactly("The total is: 20"));
    });
});
