const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');
let value = 0;
describe('Math Class test', function () {
    //hooks
    beforeEach(function () {
        value = 5;
    });

    it('Sum two numbers', function () {
        const math = new Math();
        expect(math.sum(5, 5)).to.equal(10);
        value = 0;
    });

    it('Multiply two numbers', function () {
        const math = new Math();
        assert.equal(math.multiply(5, 5), 25);
        value = 2;
    });

    it('Print Sum', function () {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        //já está em spy
        //sinon.stub(res, 'load');
        const math = new Math();
        math.printSum(req, res, 5, 5);
        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });

});