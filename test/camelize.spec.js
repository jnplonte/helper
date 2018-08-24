"use strict";

const chai = require("chai");

const camelize = require("../lib/camelize");

describe('camelize', () => {
    it('should get the a camelized version of string', (done) => {
        chai.expect(camelize('camel case me')).to.equal('camelCaseMe');
        
        done();
    });
});