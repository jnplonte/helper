"use strict";

const chai = require("chai");

const toString = require("../lib/toString");

describe('toString', () => {
    it('should convert to string', (done) => {
        chai.expect(toString({test: 'test-data'})).to.equal('{"test":"test-data"}');

        done();
    });
});
