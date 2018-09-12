"use strict";

const get = require("lodash/get");

const isInArray = require('./isInArray');

const sumFunction = {
    'sumArray': function(data = []) {
        if (!data) {
            return 0;
        }

        return data.reduce((a, b) => a + b, 0);
    },
    'sumArrayInList': function(data = [], keys = '') {
        if (!data) {
            return 0;
        }

        return data.reduce((sum, datavalue) => {
            const data = get(datavalue, keys);
            return (isInArray(typeof(data), ['number', 'boolean', 'string'])) ? sum + Number(data) : sum;
        }, 0);
    }
}

module.exports = sumFunction
