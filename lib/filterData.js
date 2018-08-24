"use strict";

module.exports = function(data, show = []) {
    if (data.constructor === Object) {
        Object.keys(data).forEach((key) => {
            if (show.indexOf(key) === -1) {
                delete data[key];
            }
        });
        return data;
    } else if (data.constructor === Array) {
        return data.map((row) => {
            Object.keys(row).forEach((key) => {
                if (show.indexOf(key) === -1) {
                    delete row[key];
                }
            });
            return row;
        });
    } else {
        return data;
    }
}
