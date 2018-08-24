"use strict";

const chai = require("chai");

const isInArray = require("../lib/isInArray");

const testData = ['xx', 'zz', 'yy'];

describe('isInArray', () => {
    it('should check if string is in array', (done) => {
        chai.expect(isInArray('zz', testData)).to.be.true;
        
        done();
    });

    it('should check if string is not in array', (done) => {
        chai.expect(isInArray('sup', testData)).to.be.false;
        chai.expect(isInArray('', testData)).to.be.false;
        chai.expect(isInArray('sup')).to.be.false;

        done();
    });
});
