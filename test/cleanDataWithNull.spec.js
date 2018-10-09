"use strict";

const chai = require("chai");

const cleanDataWithNull = require("../lib/cleanDataWithNull");

const testData1 = {'test': '', 'xxx': 'one', 'zzz': 'two'};
const testData2 = [{'test': '', 'xxx': 'one'}, {'test': '', 'zzz': 'two'}];
const testData3 = '';

describe('cleanDataWithNull', () => {
    it('should clean the data with null', (done) => {
        chai.expect(cleanDataWithNull(testData1)).to.eql({'test': null, 'xxx': 'one', 'zzz': 'two'});

        chai.expect(cleanDataWithNull(testData2)).to.eql([{'test': null, 'xxx': 'one'}, {'test': null, 'zzz': 'two'}]);

        chai.expect(cleanDataWithNull(testData3)).to.equal(null);

        done();
    });
});
