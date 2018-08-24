"use strict";

const chai = require("chai");

const pad = require("../lib/pad");

describe('pad', () => {
    it('should add zero on one digit numbers', (done) => {
        chai.expect(pad(1)).to.equal('01');
        chai.expect(pad(11)).to.equal('11');
        chai.expect(pad()).to.equal('00');

        chai.expect(pad('xxxx')).to.equal('xxxx');

        done();
    });
});
