"use strict";

const chai = require("chai");

const sort = require("../lib/sort");

const testData = { 'z': 3, 'y': 2, 'x': 1 };

describe('sort', () => {
    it('should sort object', (done) => {
        chai.expect(sort.sortObject(testData)).to.eql({ x: 1, y: 2, z: 3 });

        done();
    });

    it('should sort object', (done) => {
        chai.expect(sort.sortObjectInList(testData, ['y', 'x', 'z'])).to.eql({ y: 2, x: 1, z: 3 });

        done();
    });

    it('should sort array object', (done) => {
        chai.expect(sort.sortArrayInList([testData], ['y', 'x', 'z'])).to.eql([{ y: 2, x: 1, z: 3 }]);

        done();
    });
});
