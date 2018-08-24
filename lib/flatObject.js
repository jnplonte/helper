"use strict";

const isNotEmpty =  require('./isNotEmpty');

const flatObjectFunction = function(obj = {}, result = {}) {
    Object.keys(obj).forEach((key) => {
        if (typeof (obj[key]) === 'object' && isNotEmpty(obj[key])) {
            flatObjectFunction(obj[key], result);
            return;
        }
        result[key] = obj[key] || '';
    });
    return result;
}

module.exports = flatObjectFunction
