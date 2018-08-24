"use strict";

const chai = require("chai");

const isEmail = require("../lib/isEmail");

describe('isEmail', () => {
    it('should check if valid email', (done) => {
        chai.expect(isEmail('jnpl.onte@gmail.com')).to.be.true;
        chai.expect(isEmail('jnpl.onte@abc.cc')).to.be.true;

        done();
    });

    it('should check if invalid email', (done) => {
        chai.expect(isEmail('jnpl.onte@gmail')).to.be.false;
        chai.expect(isEmail('jnpl.onte$gmail.com')).to.be.false;
        chai.expect(isEmail('jnpl.onte')).to.be.false;
        chai.expect(isEmail()).to.be.false;

        done();
    });
});
