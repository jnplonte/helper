"use strict";

module.exports = function(jsonData = '') {
    let response = '';
    if (typeof (jsonData) === 'object') {
        try {
            response = JSON.stringify(jsonData);
        }
        catch (e) {
            response = jsonData;
        }
    }
    else {
        response = jsonData;
    }
    return response;
}
