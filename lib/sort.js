"use strict";

const sortFunction = {
    'sortObject': function(data = {}) {
        const ordered = {};

        Object.keys(data).sort().forEach(function (key) {
            ordered[key] = data[key];
        });

        return ordered;
    },
    'sortObjectInList': function(data = {}, arrayList = []) {
        const obj = {};

        arrayList.forEach((dataList) => {
            obj[dataList] = data[dataList] || '';
        });

        return obj;
    },
    'sortArrayInList': function(data = [], arrayList = []) {
        return data.reduce((finalData, dataVal) => {
            const obj = {};

            arrayList.forEach((dataList) => {
                obj[dataList] = dataVal[dataList] || '';
            });

            finalData.push(obj);

            return finalData;
        }, []);
    }
}

module.exports = sortFunction
