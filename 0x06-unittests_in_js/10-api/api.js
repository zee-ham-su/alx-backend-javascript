const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.status(404).send();
    }
});

app.listen(7865, () => {
    console.log(`API available on localhost port 7865`);
});

module.exports = app;
