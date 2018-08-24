"use strict";

const chai = require("chai");

const secretKey = require("../lib/secretKey");

const token = secretKey.createSecretKey('hash', 1, 2);

describe('secretKey', () => {
    it('should create secret key', (done) => {
        chai.expect(token).to.be.string;
        chai.expect(token).to.be.length(64);

        done();
    });

    it('should read secret key', (done) => {
        chai.expect(secretKey.readSecretKey('hash', token, false)).to.be.an('object');
        chai.expect(secretKey.readSecretKey('hash', token, false)).to.eql({'userId': '1', 'companyId': '2', 'valid': true});
        chai.expect(secretKey.readSecretKey('hash', token, true)).to.eql({'userId': '1', 'companyId': '2', 'valid': true});

        chai.expect(secretKey.readSecretKey('hash', 'xxxxxx', false)).to.eql({});

        done();
    });

    it('should check expiry time', (done) => {
        chai.expect(secretKey.checkExpiredTime(new Date())).to.be.true;
        chai.expect(secretKey.checkExpiredTime(new Date(), 10)).to.be.true;

        chai.expect(secretKey.checkExpiredTime(new Date('2018-02-05'))).to.be.false;
        chai.expect(secretKey.checkExpiredTime(new Date('2018-02-05'), 10)).to.be.false;

        done();
    });
});
