"use strict";

const cleanData =  require('./cleanData');

const toString =  require('./toString');
const toJson =  require('./toJson');

module.exports = function(data = '') {
    const clean = cleanData(data);

    if (!clean) {
        return null;   
    }

    const string = toString(clean).replace(/\"\"/g, null);
    return toJson(string);
}
