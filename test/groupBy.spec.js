"use strict";

const chai = require("chai");

const groupBy = require("../lib/groupBy");

const arrayObject = [
    {
      make: "audi",
      model: "r8",
      year: "2012"
    },
    {
      make: "audi",
      model: "rs5",
      year: "2013"
    },
    {
      make: "ford",
      model: "mustang",
      year: "2012"
    },
    {
      make: "ford",
      model: "fusion",
      year: "2015"
    },
    {
      make: "kia",
      model: "optima",
      year: "2012"
    }
];

describe('groupBy', () => {
    it('should check if group by', (done) => {
        chai.expect(groupBy(arrayObject, 'make')).to.eql({'audi':[{'make':'audi','model':'r8','year':'2012'},{'make':'audi','model':'rs5','year':'2013'}],'ford':[{'make':'ford','model':'mustang','year':'2012'},{'make':'ford','model':'fusion','year':'2015'}],'kia':[{'make':'kia','model':'optima','year':'2012'}]});
        chai.expect(groupBy(arrayObject, 'year')).to.eql({'2012':[{'make':'audi','model':'r8','year':'2012'},{'make':'ford','model':'mustang','year':'2012'},{'make':'kia','model':'optima','year':'2012'}],'2013':[{'make':'audi','model':'rs5','year':'2013'}],'2015':[{'make':'ford','model':'fusion','year':'2015'}]});

        done();
    });
});
