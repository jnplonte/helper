"use strict";

const chai = require("chai");

const generateRandomString = require("../lib/generateRandomString");

describe('generateRandomString', () => {
    it('should generate random string', (done) => {
        chai.expect(generateRandomString()).to.be.string;
        chai.expect(generateRandomString()).to.be.lengthOf(10);

        chai.expect(generateRandomString(15)).to.be.lengthOf(15);

        done();
    });
});
