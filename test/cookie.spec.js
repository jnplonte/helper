"use strict";

const chai = require("chai");

const cookie = require("../lib/cookie");


describe('cookie', () => {
    it('should set cookie', (done) => {
        chai.expect(cookie.setCookie('test', 'test', 1, '.test.com')).to.be.false;

        done();
    });

    it('should get cookie', (done) => {
        chai.expect(cookie.getCookie('test')).to.be.null;

        done();
    });

    it('should delete cookie', (done) => {
        chai.expect(cookie.deleteCookie('test')).to.be.false;

        done();
    });
});

