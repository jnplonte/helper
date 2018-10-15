"use strict";

const toString =  require('./toString');
const toJson =  require('./toJson');

const cleanDataFunction = {
    'cleanData': function(data = '') {
        if (!data) {
            return data;
        }
    
        const regex = /[^A-Za-z0-9 @._,{}'"#$%^&*()-:;\[|\]]/g;
        if (typeof(data) === 'object') {
            if (typeof(data.forEach) !== 'undefined') {
                data.forEach((value, key) => {
                    if (typeof(value) === 'object') {
                        cleanDataFunction.cleanData(value);
                    } else {
                        if (typeof(value.replace) !== 'undefined') {
                            data[key] = value.replace(regex, '').trim();
                        }
                    }
                });
            } else {
                Object.keys(data).forEach((value, key) => {
                    if (typeof(data[value]) === 'object') {
                        cleanDataFunction.cleanData(data[value]);
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
    },
    'cleanDataWithNull': function(data = '') {
        const clean = cleanDataFunction.cleanData(data);
    
        if (!clean) {
            return null;   
        }
    
        const string = toString(clean).replace(/\"\"/g, null);
        return toJson(string);
    },
    'cleanDataRemoveNull': function(data) {
        if (!data) {
              return data;
        }
        
        if (typeof(data) === 'object') {
              if (typeof(data.forEach) !== 'undefined') {
                  data.forEach((value, key) => {
                    if (typeof(value) === 'undefined' || value === null) {
                            data.splice(key, 1);
                    } else {
                        if (typeof(value) === 'object') {
                            cleanDataFunction.cleanDataRemoveNull(value);
                        } else {
                            if (typeof(value) === 'undefined' || value === null) {
                                delete data[key];
                            }
                        }
                    }
                  });
            } else {
                Object.keys(data).forEach((value, key) => {
                    if (typeof(data[value]) === 'undefined' || data[value] === null) {
                        delete data[value];
                    } else {
                        if (typeof(data[value]) === 'object') {
                            cleanDataFunction.cleanDataRemoveNull(data[value]);
                        } else {
                            if (typeof(data[value]) === 'undefined' || data[value] === null) {
                                delete data[value];
                            }
                        }
                    }
                });
            }

            return data;
          } else {
                return (data) ? data : null;
          } 
    }
}

module.exports = cleanDataFunction
