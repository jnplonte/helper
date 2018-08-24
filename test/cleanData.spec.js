"use strict";

const chai = require("chai");

const cleanData = require("../lib/cleanData");

const testData1 = {'test': '<script>', 'xxx': 'one', 'zzz': 'two'};
const testData2 = [{'test': '<script>', 'xxx': 'one'}, {'test': '<script>', 'zzz': 'two'}];
const testData3 = '<script>alert("test-me")</script>';

describe('cleanData', () => {
    it('should clean the data', (done) => {
        chai.expect(cleanData(testData1)).to.eql({'test': 'script', 'xxx': 'one', 'zzz': 'two'});

        chai.expect(cleanData(testData2)).to.eql([{'test': 'script', 'xxx': 'one'}, {'test': 'script', 'zzz': 'two'}]);

        chai.expect(cleanData(testData3)).to.equal('scriptalert("test-me")/script');

        done();
    });
});
