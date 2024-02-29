const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const orderTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${orderTotal}`);
}

module.exports = sendPaymentRequestToApi;