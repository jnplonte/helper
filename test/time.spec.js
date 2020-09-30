"use strict";

const chai = require("chai");

const time = require("../lib/time");

const testStartTime1 = '02:00:00';
const testStartTime2 = '02:00';
const testStartTime3 = '2';

const testEndTime1 = '10:00:00';
const testEndTime2 = '10:00';
const testEndTime3 = '10';

describe('time', () => {
    it('should get static time today', (done) => {
        chai.expect(time.timeNow()).to.be.string;
        chai.expect(time.timeNow()).to.be.lengthOf(8);

        done();
    });

    it('should parse time', (done) => {
        chai.expect(time.timeDiffirence(testStartTime1, testEndTime1)).to.equal(28800);
        chai.expect(time.timeDiffirence(testStartTime2, testEndTime2)).to.equal(28800);
        chai.expect(time.timeDiffirence(testStartTime3, testEndTime3)).to.equal(28800);
        chai.expect(time.timeDiffirence()).to.equal(86399);

        done();
    });
});
