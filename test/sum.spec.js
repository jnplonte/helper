"use strict";

const chai = require("chai");

const sum = require("../lib/sum");

const testData = [{ 'z': 3, 'x': '' }, { 'z': 3, 'x': true }, { 'z': 3, 'x': false }, { 'z': { 'x': 3 } }];

describe('sum', () => {
    it('should sum array object', (done) => {
        chai.expect(sum.sumArrayInList(testData, 'z')).to.equal(9);
        chai.expect(sum.sumArrayInList(testData, 'x')).to.equal(1);
        chai.expect(sum.sumArrayInList(testData, 'z.x')).to.equal(3);

        chai.expect(sum.sumArray([1,2,3])).to.equal(6);
        chai.expect(sum.sumArray([6, 10.712345])).to.equal(16.712345);
        chai.expect(sum.sumArray([10])).to.equal(10);

        done();
    });

    it('should not sum array object', (done) => {
        chai.expect(sum.sumArrayInList(testData, 'zx')).to.equal(0);
        chai.expect(sum.sumArrayInList()).to.equal(0);
        chai.expect(sum.sumArrayInList([], 'z')).to.equal(0);
        chai.expect(sum.sumArrayInList(testData)).to.equal(0);
        chai.expect(sum.sumArrayInList(testData, '')).to.equal(0);

        chai.expect(sum.sumArray()).to.equal(0);
        chai.expect(sum.sumArray([])).to.equal(0);
        chai.expect(sum.sumArray(null)).to.equal(0);

        done();
    });
});
