"use strict";

const isInteger =  require('./isInteger');

module.exports = function(number = 0) {
    if (!isInteger(number)) {
        return number;
    }

    return (number < 10) ? '0' + number : number.toString();
}
