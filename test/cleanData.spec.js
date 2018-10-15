"use strict";

const chai = require("chai");

const cleanData = require("../lib/cleanData");

const testData1 = {'test': '<script>', 'xxx': 'one', 'zzz': 'two'};
const testData2 = [{'test': '<script>', 'xxx': 'one'}, {'test': '<script>', 'zzz': 'two'}];
const testData3 = '<script>alert("test-me")</script>';

describe('cleanData', () => {
    it('should clean the data', (done) => {
        chai.expect(cleanData.cleanData(testData1)).to.eql({'test': 'script', 'xxx': 'one', 'zzz': 'two'});

        chai.expect(cleanData.cleanData(testData2)).to.eql([{'test': 'script', 'xxx': 'one'}, {'test': 'script', 'zzz': 'two'}]);

        chai.expect(cleanData.cleanData(testData3)).to.equal('scriptalert("test-me")/script');

        done();
    });
});


const testData4 = {'test': '', 'xxx': 'one', 'zzz': 'two'};
const testData5 = [{'test': '', 'xxx': 'one'}, {'test': '', 'zzz': 'two'}];
const testData6 = '';

describe('cleanDataWithNull', () => {
    it('should clean the data with null', (done) => {
        chai.expect(cleanData.cleanDataWithNull(testData4)).to.eql({'test': null, 'xxx': 'one', 'zzz': 'two'});

        chai.expect(cleanData.cleanDataWithNull(testData5)).to.eql([{'test': null, 'xxx': 'one'}, {'test': null, 'zzz': 'two'}]);

        chai.expect(cleanData.cleanDataWithNull(testData6)).to.equal(null);

        done();
    });
});

const testData7 = {'test': null, 'xxx': 'one', 'zzz': 'two'};
const testData8 = [{'test': null, 'xxx': 'one'}, {'test': null, 'zzz': 'two'}];
const testData9 = 'xx';

describe('cleanDataRemoveNull', () => {
    it('should clean the data remove null', (done) => {
        chai.expect(cleanData.cleanDataRemoveNull(testData7)).to.eql({'xxx': 'one', 'zzz': 'two'});

        chai.expect(cleanData.cleanDataRemoveNull(testData8)).to.eql([{'xxx': 'one'}, {'zzz': 'two'}]);

        chai.expect(cleanData.cleanDataRemoveNull(testData9)).to.equal('xx');

        done();
    });
});
