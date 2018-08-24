"use strict";

const chai = require("chai");

const toJson = require("../lib/toJson");

describe('toJson', () => {
    it('should convert to json', (done) => {
        chai.expect(toJson('{"test": "test-data"}')).to.eql({test: 'test-data'});

        done();
    });
});
