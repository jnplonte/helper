"use strict";

const chai = require("chai");

const removeNullFromObject = require("../lib/removeNullFromObject");

const testData = {
    'aaa': 'aaa',
    'bbb': 'bbb',
    'ccc': null,
};

describe('removeNullFromObject', () => {
    it('should reove null from object', (done) => {
        chai.expect(removeNullFromObject(testData)).to.eql({ aaa: 'aaa', bbb: 'bbb' });

        done();
    });
});
