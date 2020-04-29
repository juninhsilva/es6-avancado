class Math {
    sum(a = 0, b = 0) {
        return a + b;
    }

    multiply(a = 1, b = 1) {
        return a * b;
    }

    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}
module.exports = Math;