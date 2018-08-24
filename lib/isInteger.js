"use strict";

module.exports = function(value = 0) {
    return /^-?[0-9]+$/.test(value);
}