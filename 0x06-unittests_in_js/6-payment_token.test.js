const { describe, it } = require("mocha");
const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
    it("Provide a resolved promise containing correct data when success is true.", function (done) {
        getPaymentTokenFromAPI(true)
            .then((data) => {
                expect(data).to.have.property('data');
                done();
            });
    });
});