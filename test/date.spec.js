"use strict";

const chai = require("chai");

const date = require("../lib/date");

const testDate = new Date('2018-02-05 12:00:00');

describe('date', () => {
    it('should get static date today', (done) => {
        chai.expect(date.dateNow()).to.be.string;
        chai.expect(date.dateNow()).to.be.lengthOf(10);

        chai.expect(date.dateTimeNow()).to.be.string;
        chai.expect(date.dateTimeNow()).to.be.lengthOf(16);

        chai.expect(date.dateTimeNowEnd()).to.be.string;
        chai.expect(date.dateTimeNowEnd()).to.be.lengthOf(19);

        chai.expect(date.dateTimeNowStart()).to.be.string;
        chai.expect(date.dateTimeNowStart()).to.be.lengthOf(19);

        done();
    });

    it('should get date', (done) => {
        chai.expect(date.getDateAdd(1, false)).to.be.string;
        chai.expect(date.getDateAdd(1, false)).to.be.lengthOf(19);
        chai.expect(date.getDateAdd(1).slice(-8)).to.equal('23:59:00');

        chai.expect(date.getDateSubract(1, false)).to.be.string;
        chai.expect(date.getDateSubract(1, false)).to.be.lengthOf(19);
        chai.expect(date.getDateSubract(1).slice(-8)).to.equal('00:00:00');

        chai.expect(date.getWeekDate(testDate)).to.equal('2018-06');

        done();
    });

    it('should parse date', (done) => {
        chai.expect(date.parseDateTime(testDate)).to.equal('2018-02-05 04:00');
        chai.expect(date.parseDateTime(testDate, false)).to.equal('2018-02-05 12:00');

        chai.expect(date.parseDate(testDate)).to.equal('2018-02-05');

        done();
    });
});
