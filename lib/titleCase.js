"use strict";

module.exports = function(str = '') {
    const splitStr = str.replace(/([A-Z1234567890]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1').toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return (splitStr.join(' ').trim()).replace(/\s+/g,' ');
}
