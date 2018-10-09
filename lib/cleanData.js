"use strict";

const cleanDataFunction = function(data = '') {
    if (!data) {
        return data;
    }
 
    const regex = /[^A-Za-z0-9 @._,{}'"#$%^&*()-:;\[|\]]/g;
    if (typeof(data) === 'object') {
        if (typeof(data.forEach) !== 'undefined') {
            data.forEach((value, key) => {
                if (typeof(value) === 'object') {
                    cleanDataFunction(value);
                } else {
                    if (typeof(value.replace) !== 'undefined') {
                        data[key] = value.replace(regex, '').trim();
                    }
                }
            });
        } else {
            Object.keys(data).forEach((value, key) => {
                if (typeof(data[value]) === 'object') {
                    cleanDataFunction(data[value]);
                } else {
                    if (typeof(data[value].replace) !== 'undefined') {
                        data[value] = data[value].replace(regex, '').trim();
                    }
                }
            });
        }
        return data;
    } else {
        if (typeof (data.replace) !== 'undefined') {
            return data.replace(regex, '').trim();
        } else {
            return data;
        }
    }
}

module.exports = cleanDataFunction
