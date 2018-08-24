"use strict";

const chai = require("chai");

const urlEncodeObject = require("../lib/urlEncodeObject");

describe('urlEncodeObject', () => {
    it('should convert object to url string', (done) => {
        chai.expect(urlEncodeObject({'test': 'test-data'})).to.equal('test=test-data');

        done();
    });
});
