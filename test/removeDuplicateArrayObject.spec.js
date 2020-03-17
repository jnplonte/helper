"use strict";

const chai = require("chai");

const removeDuplicateArrayObject = require("../lib/removeDuplicateArrayObject");

const testData1 = [{ 'id': 1, 'name': 'a' }, { 'id': 1, 'name': 'b' }, { 'id': 2, 'name': 'c' }];
const testData2 = [{ 'id': 1, 'name': 'a' }, { 'id': 2, 'name': 'a' }, { 'id': 3, 'name': 'b' }];
const testData3 = [{ 'id': 1, 'name': 'a' }, { 'id': 1, 'name': 'a' }, { 'id': 2, 'name': 'a' }];

describe('removeDuplicateArrayObject', () => {
    it('should remove duplicate array object', (done) => {
        chai.expect(removeDuplicateArrayObject(testData1, 'id')).to.eql([ { 'id': 1, 'name': 'a' }, { 'id': 2, 'name': 'c' } ] );
        chai.expect(removeDuplicateArrayObject(testData2, 'name')).to.eql([ { 'id': 1, 'name': 'a' }, { 'id': 3, 'name': 'b' } ]);

        chai.expect(removeDuplicateArrayObject(testData3)).to.eql([ { 'id': 1, 'name': 'a' }, { 'id': 2, 'name': 'a' } ]);

        done();
    });
});
