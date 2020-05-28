"use strict";

module.exports = function(obj = {}) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }

    return obj || {};
}
