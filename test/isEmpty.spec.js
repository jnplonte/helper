"use strict";

const chai = require("chai");

const isEmpty = require("../lib/isEmpty");

describe('isEmpty', () => {
    it('should check if value is empty', (done) => {
        chai.expect(isEmpty('')).to.be.true;
        chai.expect(isEmpty()).to.be.true;
        chai.expect(isEmpty(0)).to.be.true;
        chai.expect(isEmpty('false')).to.be.true;
        chai.expect(isEmpty('N/A')).to.be.true;
        chai.expect(isEmpty('no')).to.be.true;
        chai.expect(isEmpty(undefined)).to.be.true;

        done();
    });

    it('should check if value is not empty', (done) => {
        chai.expect(isEmpty('jnpl.onte@gmail')).to.be.false;
        chai.expect(isEmpty('-')).to.be.false;

        done();
    });
});
