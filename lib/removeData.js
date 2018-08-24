"use strict";

module.exports = function(data, remove = []) {
    if (data.constructor === Object) {
        Object.keys(data).forEach((key) => {
            if (remove.indexOf(key) >= 0) {
                delete data[key];
            }
        });
        return data;
    } else if (data.constructor === Array) {
        return data.map((row) => {
            Object.keys(row).forEach((key) => {
                if (remove.indexOf(key) >= 0) {
                    delete row[key];
                }
            });
            return row;
        });
    } else {
        return data;
    }
}