"use strict";

const chai = require("chai");

const encodeDecode = require("../lib/encodeDecode");

describe('encodeDecode', () => {
    it('should encode and decode', (done) => {
        chai.expect(encodeDecode.encode('hashkey', 'test')).to.be.string;

        chai.expect(encodeDecode.decode('hashkey', encodeDecode.encode('hashkey', 'test'))).to.equal('test');

        done();
    });
});
