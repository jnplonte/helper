"use strict";

const chai = require("chai");

const isEmptyObject = require("../lib/isEmptyObject");


describe('isEmptyObject', () => {
    it('should check if object is empty', (done) => {
        chai.expect(isEmptyObject({})).to.be.true;
        chai.expect(isEmptyObject()).to.be.true;
        

        done();
    });

    it('should check if object is not empty', (done) => {
        chai.expect(isEmptyObject({'xxx': 'zzz', 'x': 'z'})).to.be.false;
        chai.expect(isEmptyObject('{}')).to.be.false;

        done();
    });
});
