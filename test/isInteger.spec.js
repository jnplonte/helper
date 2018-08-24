"use strict";

const chai = require("chai");

const isInteger = require("../lib/isInteger");

describe('isInteger', () => {
    it('should check if string is integer', (done) => {
        chai.expect(isInteger('1')).to.be.true;
        chai.expect(isInteger(1)).to.be.true;
        chai.expect(isInteger()).to.be.true;
        
        done();
    });

    it('should check if string is not integer', (done) => {
        chai.expect(isInteger('1x')).to.be.false;
        chai.expect(isInteger('xx')).to.be.false;
        chai.expect(isInteger('')).to.be.false;

        done();
    });
});
