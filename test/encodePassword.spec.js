"use strict";

const chai = require("chai");

const encodePassword = require("../lib/encodePassword");

describe('encodePassword', () => {
    it('should get password', (done) => {
        chai.expect(encodePassword('password')).to.equal('7f777bccedb2356c3ebab81ddf752e65664ee4248e356e25c3310919860eeb02');
        chai.expect(encodePassword('password', 'salt-me')).to.equal('0a81252d8584c7ed639fa1194e90786e12c1fbc1b964aafd0c3bec3a6995a37e');

        done();
    });
});
