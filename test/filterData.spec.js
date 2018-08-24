"use strict";

const chai = require("chai");

const filterData = require("../lib/filterData");

const testData1 = {'test': 'super', 'xxx': 'one', 'zzz': 'two'};
const testData2 = [{'test': 'super', 'xxx': 'one'}, {'test': 'script', 'zzz': 'two'}];
const testData3 = 'super';

describe('filterData', () => {
    it('should filter data', (done) => {
        chai.expect(filterData(testData1, ['test', 'zzz'])).to.eql({'test': 'super', 'zzz': 'two'});
        chai.expect(filterData(testData1, ['test'])).to.eql({'test': 'super'});

        chai.expect(filterData(testData2, ['test'])).to.eql([{'test': 'super'}, {'test': 'script'}]);

        chai.expect(filterData(testData3, ['test'])).to.equal('super');

        done();
    });
});
