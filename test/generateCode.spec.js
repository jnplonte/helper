"use strict";

const chai = require("chai");

const generateCode = require("../lib/generateCode");

describe('generateCode', () => {
    it('should generate random code', (done) => {
        chai.expect(generateCode('')).to.be.string;
        chai.expect(generateCode('John Paul')).to.be.lengthOf(10);
        chai.expect(generateCode('John Paul Test Test This Is A Test')).to.be.lengthOf(10);

        done();
    });
});
