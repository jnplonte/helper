"use strict";

const chai = require("chai");

const flatObject = require("../lib/flatObject");

const testData1 = {'test': 'super', 'xxx': 'one', 'zzz': 'two'};
const testData2 = {'test': 'super', 'xxx': {'xxxInside1': 'script', 'xxxInseide2': 'two'}};

describe('flatObject', () => {
    it('should flat object', (done) => {
        chai.expect(flatObject(testData1)).to.eql({'test': 'super', 'xxx': 'one', 'zzz': 'two'});
        chai.expect(flatObject(testData2)).to.eql({'test': 'super', 'xxxInside1': 'script', 'xxxInseide2': 'two'});

        done();
    });
});
