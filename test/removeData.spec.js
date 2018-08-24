"use strict";

const chai = require("chai");

const removeData = require("../lib/removeData");

const testData1 = {'test': 'super', 'xxx': 'one', 'zzz': 'two'};
const testData2 = {'test': 'super', 'xxx': 'one', 'zzz': 'two'};
const testData3 = [{'test': 'super', 'xxx': 'one'}, {'test': 'script', 'zzz': 'two'}];
const testData4 = 'super';

describe('removeData', () => {
    it('should remove data', (done) => {
        chai.expect(removeData(testData1, ['test', 'zzz'])).to.eql({'xxx': 'one'});
        chai.expect(removeData(testData2, ['test'])).to.eql({'xxx': 'one', 'zzz': 'two'});

        chai.expect(removeData(testData3, ['test'])).to.eql([{'xxx': 'one'}, {'zzz': 'two'}]);

        chai.expect(removeData(testData4, ['test'])).to.equal('super');

        done();
    });
});
