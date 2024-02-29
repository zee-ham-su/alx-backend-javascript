const expect = require("chai").expect;
const request = require("request");
const { describe, it } = require("mocha");

describe("Index page", function () {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    it("check correct content", function (done) {
        request(options, function (err, res, body) {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });

    it("check correct status code", function (done) {
        request(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe("Cart page", function () {
    it("check correct status code for correct URL", function (done) {
        request.get("http://localhost:7865/cart/12", function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("check correct status code for incorrect URL", function (done) {
        request.get("http://localhost:7865/cart/hamza", function (err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it("check correct content for correct URL", function (done) {
        request.get("http://localhost:7865/cart/12", function (err, res, body) {
            expect(body).to.contain("Payment methods for cart 12");
            done();
        });
    });
});

describe("Login endpoint", function () {
    const options = {
        url: "http://localhost:7865/login",
        method: "POST",
        json: {
            userName: "JohnDoe" // Change the username as needed
        }
    };

    it("responds with welcome message", function (done) {
        request(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal("Welcome JohnDoe");
            done();
        });
    });
});

describe("Available Payments endpoint", function () {
    it("returns correct payment methods", function (done) {
        request.get("http://localhost:7865/available_payments", function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            const responseBody = JSON.parse(body);
            expect(responseBody).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});
