"use strict";

const chai = require("chai");

const isNotEmpty = require("../lib/isNotEmpty");

describe('isNotEmpty', () => {
    it('should check if value is not empty', (done) => {
        chai.expect(isNotEmpty('')).to.be.false;
        chai.expect(isNotEmpty()).to.be.false;
        chai.expect(isNotEmpty(0)).to.be.false;
        chai.expect(isNotEmpty('false')).to.be.false;
        chai.expect(isNotEmpty('N/A')).to.be.false;
        chai.expect(isNotEmpty('no')).to.be.false;
        chai.expect(isNotEmpty(undefined)).to.be.false;

        done();
    });

    it('should check if value is empty', (done) => {
        chai.expect(isNotEmpty('jnpl.onte@gmail')).to.be.true;
        chai.expect(isNotEmpty('-')).to.be.true;

        done();
    });
});
