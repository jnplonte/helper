"use strict";

const Crypto = require("crypto-js");
const Jwt = require("jwt-simple");

class jnplHelper {
    constructor(config) {
        this.config = config;
    }
    // get secret key
    get secretKey() {
        return this.config.secretKey || '';
    }
    // get config secret hash
    get secretHash() {
        return this.config.secretKeyHash || '';
    }
    // get date now with formatted format (01/12/2018)
    get dateNow() {
        const dateObj = new Date();
        return this.pad(dateObj.getDate()) + '/' + this.pad(dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
    }
    // get date now with formatted format (01/12/2018 12:30)
    get dateTimeNow() {
        const dateObj = new Date();
        return this.pad(dateObj.getDate()) + '/' + this.pad(dateObj.getMonth() + 1) + '/' + dateObj.getFullYear() + ' ' + this.pad(dateObj.getHours()) + ':' + this.pad(dateObj.getMinutes());
    }
    // get date query with formatted format (2018-12-01 23:59:00)
    get dateTimeNowEnd() {
        const dateObj = new Date();
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate()) + ' 23:59:00';
    }
    // get date query now with formatted format (2018-12-01 00:00:00)
    get dateTimeNowStart() {
        const dateObj = new Date();
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate()) + ' 00:00:00';
    }
    // get password expiry
    get passwordExpiry() {
        const dateExpiry = new Date();
        dateExpiry.setDate(dateExpiry.getDate() + this.config.passwordExpiryLength || 30);

        return dateExpiry;
    }
    // replace html by object
    replaceHtml(html = '', data = {}) {
        Object.keys(data).forEach((key) => {
            html = html.replace(new RegExp('{{' + key + '}}', 'g'), data[key]);
        });

        return html;
    }
    // convert to json
    toJson(jsonData = '') {
        let response = '';
        try {
            response = JSON.parse(jsonData);
        }
        catch (e) {
            response = jsonData;
        }
        return response;
    }
    // convert to string
    toString(jsonData = '') {
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
    // clean data to avoid sql injection and invalid string
    cleanData(data = '') {
        const regex = /[^A-Za-z0-9 @._,{}'"#$%^&*()-:;\[|\]]/g;
        if (typeof (data) === 'object') {
            if (typeof (data.forEach) !== 'undefined') {
                data.forEach((value, key) => {
                    if (typeof (value) === 'object') {
                        this.cleanData(value);
                    }
                    else {
                        if (typeof (value.replace) !== 'undefined') {
                            data[key] = value.replace(regex, '').trim();
                        }
                    }
                });
            }
            else {
                Object.keys(data).forEach((value, key) => {
                    if (typeof (value) === 'object') {
                        this.cleanData(data[value]);
                    }
                    else {
                        if (typeof (data[value].replace) !== 'undefined') {
                            data[value] = data[value].replace(regex, '').trim();
                        }
                    }
                });
            }
            return data;
        }
        else {
            if (typeof (data.replace) !== 'undefined') {
                return data.replace(regex, '').trim();
            }
            else {
                return data;
            }
        }
    }
    // change string to camel case
    camelize(string = '') {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }
    // change string to title case
    titleCase(str = '') {
        const splitStr = str.replace(/([A-Z1234567890]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1').toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
    // generate random string
    generateRandomString(length = 10) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    // check if object is empty
    isEmptyObject(obj = {}) {
        return (Object.keys(obj).length === 0 && obj.constructor === Object);
    }
    // check if a character exists on string
    stringExist(string = '', character = '') {
        return (string.indexOf(character) > -1);
    }
    // check if a character exists on string
    isNotEmpty(v = null) {
        return v != null && v !== 'N/A' && v !== '' && v !== 'No' && v !== 0 && v !== 'undefined' && v !== 'NaN' && v !== 'NA' && v !== ' ' && v !== 'n/a' && v !== 'false' && v !== 'FALSE' && v !== 'False' && v !== 'NULL' && v !== 'null';
    }
    // check if variable is empty
    isEmpty(v = null) {
        return v == null || v === 'N/A' || v === '' || v === 'No' || v === 0 || v === 'undefined' || v === 'NaN' || v === 'NA' || v === ' ' || v === 'n/a' || v === 'false' || v === 'FALSE' || v === 'False' || v === 'NULL' || v === 'null';
    }
    // check if variable is a valid email
    isEmail(email = '') {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    // check if array list extst on object
    validateData(obj = {}, list = []) {
        if (list.length === 0) {
            return false;
        }
        return list.reduce((isValid, value) => {
            if (isValid === true) {
                return obj.hasOwnProperty(value);
            }
            else {
                return isValid;
            }
        }, true);
    }
    // craete secret key based on secrethash
    createSecretKey(secretHash = '', id = '', companyId = '') {
        const hash = Crypto.AES.encrypt(id + '|' + companyId + '|' + new Date().getTime(), secretHash);
        return hash.toString();
    }
    // read secret key
    readSecretKey(secretKey = '', test) {
        try {
            const key = Crypto.AES.decrypt(secretKey, this.config.secretKeyHash || '');
            const keyName = key.toString(Crypto.enc.Utf8).split('|');
            const valid = (test) ? true : this.checkExpiredTime(Number(keyName[2]));
            return {
                'userId': keyName[0],
                'companyId': keyName[1],
                'valid': valid
            };
        }
        catch (error) {
            return {};
        }
    }
    // check if time has expired based on config secret key length
    checkExpiredTime(time = 0) {
        if (time === 0) {
            return false;
        }
        const date = new Date(time), dateNow = new Date().getTime();
        date.setDate(date.getDate() + this.config.secretKeyLength || 5);
        return (date.getTime() >= dateNow);
    }
    // add zero on the start of one digit numbers
    pad(number) {
        return (number < 10) ? '0' + number : number.toString();
    }
    // maintain all data that is on show array
    filterData(data, show = []) {
        if (data.constructor === Object) {
            data = this.cleanSequelizeData(data);
            Object.keys(data).forEach((key) => {
                if (show.indexOf(key) === -1) {
                    delete data[key];
                }
            });
            return data;
        }
        else if (data.constructor === Array) {
            data = this.cleanSequelizeDataArray(data);
            return data.map((row) => {
                Object.keys(row).forEach((key) => {
                    if (show.indexOf(key) === -1) {
                        delete row[key];
                    }
                });
                return row;
            });
        }
        else {
            return data;
        }
    }
    // remove all data that is on remove array
    removeData(data, remove = []) {
        if (data.constructor === Object) {
            data = this.cleanSequelizeData(data);
            Object.keys(data).forEach((key) => {
                if (remove.indexOf(key) >= 0) {
                    delete data[key];
                }
            });
            return data;
        }
        else if (data.constructor === Array) {
            data = this.cleanSequelizeDataArray(data);
            return data.map((row) => {
                Object.keys(row).forEach((key) => {
                    if (remove.indexOf(key) >= 0) {
                        delete row[key];
                    }
                });
                return row;
            });
        }
        else {
            return data;
        }
    }
    // check is value is integer
    isInteger(value) {
        return /^-?[0-9]+$/.test(value);
    }
    getDateAdd(days, endTime = true) {
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() + days);
        const time = (endTime) ? '23:59:00' : this.pad(dateObj.getHours()) + ':' + this.pad(dateObj.getMinutes()) + ':00';
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate()) + ' ' + time;
    }
    getDateSubract(days, endTime = true) {
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() - days);
        const time = (endTime) ? '00:00:00' : this.pad(dateObj.getHours()) + ':' + this.pad(dateObj.getMinutes()) + ':00';
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate()) + ' ' + time;
    }
    // get parse date with formatted format (2018-12-01 12:30)
    parseDate(date, toSetTime = true) {
        if (date.toString() === 'Invalid Date' || date.toString() === 'NaN-NaN-NaN NaN:NaN' || date.toString() === '0000-00-00 00:00:00') {
            return '-';
        }
        const dateObj = new Date(date);
        if (toSetTime) {
            dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
        }
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate()) + ' ' + this.pad(dateObj.getHours()) + ':' + this.pad(dateObj.getMinutes());
    }
    // get parse date with formatted format (2018-12-01)
    parseDateOnly(date, toSetTime = true) {
        if (date.toString() === 'Invalid Date' || date.toString() === 'NaN-NaN-NaN NaN:NaN' || date.toString() === '0000-00-00 00:00:00') {
            return '-';
        }
        const dateObj = new Date(date);
        if (toSetTime) {
            dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
        }
        return dateObj.getFullYear() + '-' + this.pad(dateObj.getMonth() + 1) + '-' + this.pad(dateObj.getDate());
    }
    // check if value string exists in array
    isInArray(value = '', array = []) {
        return array.indexOf(value) > -1;
    }
    // clean sequelize data object
    cleanSequelizeData(data) {
        return (typeof (data.get) !== 'undefined') ? data.get({ plain: true }) : data;
    }
    // clean sequelize data array
    cleanSequelizeDataArray(data) {
        return data.map(this.cleanSequelizeData);
    }
    // sort array based on key
    sort(data = [{}], key = '', val = '') {
        return data.sort((x, y) => x[key] === val ? -1 : y[key] === val ? 1 : 0);
    }
    // sort object based on key
    sortObject(data = {}) {
        const ordered = {};
        Object.keys(data).sort().forEach(function (key) {
            ordered[key] = data[key];
        });
        return ordered;
    }
    // sort object data based on array
    sortData(data = [], arrayList = []) {
        return data.reduce((finalData, dataVal) => {
            const obj = {};
            arrayList.forEach((dataList) => {
                obj[dataList] = dataVal[dataList] || '';
            });
            finalData.push(obj);
            return finalData;
        }, []);
    }
    // url encode object or array
    urlEncode(element, key, list) {
        list = list || [];
        if (typeof (element) === 'object') {
            for (const idx in element) {
                if (element.hasOwnProperty(idx)) {
                    this.urlEncode(element[idx], key ? key + '[' + idx + ']' : idx, list);
                }
            }
        }
        else {
            list.push(key + '=' + encodeURIComponent(element));
        }
        return list.join('&');
    }
    // get week of the day
    getWeekDate(date) {
        const now = new Date(date);
        const onejan = new Date(now.getFullYear(), 0, 1);
        const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        return date.substring(0, date.length - 5) + this.pad(week);
    }
    // create jwt token 
    createJwtToken(userInformation = {}, hasExpiration = true) {
        if (hasExpiration) {
            const date = new Date();
            date.setDate(date.getDate() + this.config.secretKeyLength);
            userInformation['exp'] = Math.floor(date.getTime() / 1000);
        }
        const jwtToken = Jwt.encode(userInformation, this.config.secretKeyHash);
        return jwtToken;
    }
    // reat jwt token
    readJwtToken(jwtToken = '') {
        const userInformation = Jwt.decode(jwtToken, this.config.secretKeyHash);
        return userInformation;
    }
    // flat object
    flatObject(obj = {}, result = {}) {
        Object.keys(this.cleanSequelizeData(obj)).forEach((key) => {
            if (typeof (obj[key]) === 'object' && this.isNotEmpty(obj[key])) {
                this.flatObject(obj[key], result);
                return;
            }
            result[key] = obj[key] || '';
        });
        return result;
    }
}

module.exports = jnplHelper;