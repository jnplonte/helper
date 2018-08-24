"use strict";

const chai = require("chai");

const replaceHtml = require("../lib/replaceHtml");

const testData = '<div>Name: {{name}}, some stuff {{x}} here!</div>';

describe('replaceHtml', () => {
    it('should replace html', (done) => {
        chai.expect(replaceHtml(testData)).to.equal('<div>Name: {{name}}, some stuff {{x}} here!</div>');
        chai.expect(replaceHtml(testData, {'name': 'jnpl', 'x': 'super'})).to.equal('<div>Name: jnpl, some stuff super here!</div>');

        chai.expect(replaceHtml('', {'name': 'jnpl', 'x': 'super'})).to.equal('');

        done();
    });
});
