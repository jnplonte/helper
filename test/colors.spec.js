"use strict";

const chai = require("chai");

const colors = require("../lib/colors");

describe('colors', () => {
    it('should get random color', (done) => {
        chai.expect(colors.randomColor()).to.be.string;

        done();
    });

    it('should increment the color', (done) => {
        chai.expect(colors.incrementColor('#2A3D92', 20)).to.be.string;
        chai.expect(colors.incrementColor('#2A3D92', 20)).to.equal('#2A3D92');

        done();
    });
});
