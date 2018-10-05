"use strict";

module.exports = function(string = '') {
    let code = '';
    const time = new Date().getTime().toString();
    const strArr = string.split(" ");

    strArr.forEach( (dataval) => {
        code = code + dataval.charAt(0);
    });
    
    if (code.length >= 5) {
        code = code.slice(0, 5) + time.slice(-5);
    } else {
        var codeLen = 5 - code.length;
        code = code + time.slice((-5 - codeLen));
    }
    
    return code.toUpperCase();
}
