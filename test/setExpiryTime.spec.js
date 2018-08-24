"use strict";

const chai = require("chai");

const setExpiryTime = require("../lib/setExpiryTime");

describe('setExpiryTime', () => {
    it('should set expity time', (done) => {
        chai.expect(setExpiryTime(new Date('2018-02-05'))).to.equal(1518220800000);
        chai.expect(setExpiryTime(new Date('2018-02-05'), 10)).to.equal(1518652800000);

        done();
    });
});
