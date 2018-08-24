"use strict";

const chai = require("chai");

const isStringExist = require("../lib/isStringExist");

describe('isStringExist', () => {
    it('should check if character exists in string', (done) => {
        chai.expect(isStringExist('superString', 'rS')).to.be.true;
        chai.expect(isStringExist('superString', 'super')).to.be.true;
        chai.expect(isStringExist('superString')).to.be.true;
        chai.expect(isStringExist('', '')).to.be.true;
        chai.expect(isStringExist()).to.be.true;
        
        done();
    });

    it('should check if character does not exists in string', (done) => {
        chai.expect(isStringExist('superString', 'superman')).to.be.false;

        done();
    });
});
