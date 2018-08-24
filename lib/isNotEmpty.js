"use strict";

module.exports = function(v = null) {
    v = (v) ? (typeof(v) === 'string') ? v.toLowerCase() : v : null;

    return v != null && v !== 'n/a' && v !== '' && v !== 'no' && v !== 0 && v !== 'undefined' && v !== 'nan' && v !== 'na' && v !== ' ' && v !== 'false' && v !== 'null';
}
