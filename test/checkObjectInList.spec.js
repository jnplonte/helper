"use strict";

const chai = require("chai");

const checkObjectInList = require('../lib/checkObjectInList');

const testData = {'test': 1, 'xxx': 'one', 'zzz': 'two'};

describe('checkObjectInList', () => {
    it('should check if object is in the list', (done) => {        
        chai.expect(checkObjectInList(testData, ['test'])).to.be.true;
        chai.expect(checkObjectInList(testData, ['test', 'zzz'])).to.be.true;

        done();
    });

    it('should check if object is not in the list', (done) => {        
        chai.expect(checkObjectInList(testData, [])).to.be.false;
        chai.expect(checkObjectInList(testData)).to.be.false;

        chai.expect(checkObjectInList(testData, ['test', 'super'])).to.be.false;

        done();
    });
});
