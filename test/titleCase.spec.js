"use strict";

const chai = require("chai");

const titleCase = require("../lib/titleCase");

describe('titleCase', () => {
    it('should get the a title case of string', (done) => {
        chai.expect(titleCase('title case me')).to.equal('Title Case Me');
        chai.expect(titleCase('TitleCaseMe')).to.equal('Title Case Me');
        chai.expect(titleCase('titlecaseme')).to.equal('Titlecaseme');
        
        done();
    });
});