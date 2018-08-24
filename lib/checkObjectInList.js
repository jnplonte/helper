"use strict";

module.exports = function(obj = {}, list = []) {
    if (list.length === 0) {
        return false;
    }
    return list.reduce((isValid, value) => {
        if (isValid === true) {
            return obj.hasOwnProperty(value);
        }
        else {
            return isValid;
        }
    }, true);
}
