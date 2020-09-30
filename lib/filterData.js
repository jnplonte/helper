"use strict";

const has = require("lodash/has");

const filterData = function(data, show = []) {
    if (!show || show.length === 0) {
        return data;
    }

    if (data.constructor === Object) {
        const finalDataObject = {};
        show.forEach( (showdata) => {
            if (has(data, showdata)) {
                if (showdata.indexOf('.') >= 1) {
                    showdata = showdata.split('.');
                    finalDataObject[showdata[0]] = Object.assign(finalDataObject[showdata[0]], filterData(data[showdata[0]], [showdata.slice(1).join('.')]));
                } else {
                    finalDataObject[showdata] = data[showdata];
                }
            } else {
                if (showdata.indexOf('.') >= 1) {
                    showdata = showdata.split('.');
                    if (data[showdata[0]] && data[showdata[0]].constructor === Array) {
                        if (!finalDataObject[showdata[0]]) {
                            finalDataObject[showdata[0]] = [];
                        }

                        data[showdata[0]].forEach( (dataval, key) => {
                            finalDataObject[showdata[0]][key] = Object.assign(finalDataObject[showdata[0]][key], filterData(dataval, [showdata.slice(1).join('.')]));
                        });
                    }
                }
            }
        });
        return finalDataObject;
    } else if (data.constructor === Array) {
        return data.map( (row) => {
            const finalDataArray = {};
            show.forEach( (showdata) => {
                if (has(row, showdata)) {
                    if (showdata.indexOf('.') >= 1 && finalDataArray[showdata[0]]) {
                        showdata = showdata.split('.');
                        finalDataArray[showdata[0]] = Object.assign(finalDataArray[showdata[0]], filterData(row[showdata[0]], [showdata.slice(1).join('.')]));
                    } else {
                        finalDataArray[showdata] = row[showdata];
                    }
                } else {
                    if (showdata.indexOf('.') >= 1) {
                        showdata = showdata.split('.');
                        if (row[showdata[0]] && row[showdata[0]].constructor === Array) {
                            if (!finalDataArray[showdata[0]]) {
                                finalDataArray[showdata[0]] = [];
                            }

                            row[showdata[0]].forEach( (dataval, key) => {
                                finalDataArray[showdata[0]][key] = Object.assign(finalDataArray[showdata[0]][key], filterData(dataval, [showdata.slice(1).join('.')]));
                            });
                        }
                    }
                }
            });
            return finalDataArray;
        });
    } else {
        return data;
    }
}

module.exports = filterData;