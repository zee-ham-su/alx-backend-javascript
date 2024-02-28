function sum(a, b) {
    return Math.round(a) + Math.round(b);
}

function subtract(a, b) {
    return Math.round(a) - Math.round(b);
}

function divide(a, b) {
    if (Math.round(b) === 0) {
        return "Error";
    } else {
        return Math.round(a) / Math.round(b);
    }
}

function calculateNumber(type, a, b) {
    switch (type) {
        case 'SUM':
            return sum(a, b);
        case 'SUBTRACT':
            return subtract(a, b);
        case 'DIVIDE':
            return divide(a, b);
        default:
            throw new Error(`Unsupported operation: ${type}`);
    }
}

module.exports = calculateNumber;
