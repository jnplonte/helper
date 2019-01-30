"use strict";

const chai = require("chai");

const addHttps = require("../lib/addHttps");

describe('addHttps', () => {
    it('should get the a https version of url string', (done) => {
        chai.expect(addHttps('google.com')).to.equal('https://google.com');
        chai.expect(addHttps('https://google.com')).to.equal('https://google.com');
        chai.expect(addHttps('http://google.com')).to.equal('http://google.com');
        
        done();
    });
});