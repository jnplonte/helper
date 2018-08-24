"use strict";

module.exports = function(jsonData = '') {
    let response = '';
    try {
        response = JSON.parse(jsonData);
    }
    catch (e) {
        response = jsonData;
    }
    return response;
}
