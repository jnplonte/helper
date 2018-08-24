"use strict";

const chai = require("chai");

const jwtToken = require("../lib/jwtToken");

const token1 = jwtToken.createJwtToken('hash', {'name': 'jnpl'}, false, 5);
const token2 = jwtToken.createJwtToken('hash', {'name': 'jnpl'}, true, 5);

describe('jwtToken', () => {
    it('should create jwt token', (done) => {
        chai.expect(token1).to.be.string;
        chai.expect(token1).to.equal('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiam5wbCJ9.ofO7oZ1N7O_VmY-Y7UeZU6x_qq9SDtRArPe5ogwnoB8');

        chai.expect(token2).to.be.string;
        
        done();
    });

    it('should read jwt token', (done) => {
        chai.expect(jwtToken.readJwtToken('hash', token1)).to.eql({'name': 'jnpl'});
        chai.expect(jwtToken.readJwtToken('hash', token2)).to.have.all.keys('name', 'exp');
        
        done();
    });
});
