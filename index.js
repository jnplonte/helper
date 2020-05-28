"use strict";

const camelize = require('./lib/camelize');
const checkObjectInList = require('./lib/checkObjectInList');
const cleanData = require('./lib/cleanData');
const date = require('./lib/date');
const encodePassword = require('./lib/encodePassword');
const filterData = require('./lib/filterData');
const flatObject = require('./lib/flatObject');
const removeDuplicateArrayObject = require('./lib/removeDuplicateArrayObject');
const generateRandomString = require('./lib/generateRandomString');
const isEmail = require('./lib/isEmail');
const isEmpty = require('./lib/isEmpty');
const isEmptyObject = require('./lib/isEmptyObject');
const isInArray = require('./lib/isInArray');
const isInteger = require('./lib/isInteger');
const isNotEmpty = require('./lib/isNotEmpty');
const isStringExist = require('./lib/isStringExist');
const jwtToken = require('./lib/jwtToken');
const pad = require('./lib/pad');
const removeData = require('./lib/removeData');
const replaceHtml = require('./lib/replaceHtml');
const secretKey = require('./lib/secretKey');
const setExpiryTime = require('./lib/setExpiryTime');
const sort = require('./lib/sort');
const titleCase = require('./lib/titleCase');
const toJson = require('./lib/toJson');
const toString = require('./lib/toString');
const urlEncodeObject = require('./lib/urlEncodeObject');

const sum = require('./lib/sum');
const generateCode = require('./lib/generateCode');
const cookie = require('./lib/cookie');

const encodeDecode = require('./lib/encodeDecode');

const addHttps = require('./lib/addHttps');

const colors = require('./lib/colors');

const removeNullFromObject = require('./lib/removeNullFromObject');

module.exports = {
    'camelize': camelize,
    'checkObjectInList': checkObjectInList,
    'cleanData': cleanData.cleanData,
    'dateNow': date.dateNow(),
    'dateTimeNow': date.dateTimeNow(),
    'dateTimeNowEnd': date.dateTimeNowEnd(),
    'dateTimeNowStart': date.dateTimeNowStart(),
    'getDateAdd': date.getDateAdd,
    'getDateSubract': date.getDateSubract,
    'parseDateTime': date.parseDateTime,
    'parseDate': date.parseDate,
    'getWeekDate': date.getWeekDate,
    'encodePassword': encodePassword,
    'filterData': filterData,
    'flatObject': flatObject,
    'removeDuplicateArrayObject': removeDuplicateArrayObject,
    'generateRandomString': generateRandomString,
    'isEmail': isEmail,
    'isEmpty': isEmpty,
    'isEmptyObject': isEmptyObject,
    'isInArray': isInArray,
    'isInteger': isInteger,
    'isNotEmpty': isNotEmpty,
    'isStringExist': isStringExist,
    'createJwtToken': jwtToken.createJwtToken,
    'readJwtToken': jwtToken.readJwtToken,
    'pad': pad,
    'removeData': removeData,
    'replaceHtml': replaceHtml,
    'createSecretKey': secretKey.createSecretKey,
    'readSecretKey': secretKey.readSecretKey,
    'checkExpiredTime': secretKey.checkExpiredTime,
    'setExpiryTime': setExpiryTime,
    'sortObject': sort.sortObject,
    'sortObjectInList': sort.sortObjectInList,
    'sortArrayInList': sort.sortArrayInList,
    'titleCase': titleCase,
    'toJson': toJson,
    'toString': toString,
    'urlEncodeObject': urlEncodeObject,

    'sumArray': sum.sumArray,
    'sumArrayInList': sum.sumArrayInList,

    'generateCode': generateCode,
    'cleanDataWithNull': cleanData.cleanDataWithNull,
    'cleanDataRemoveNull': cleanData.cleanDataRemoveNull,

    'setCookie': cookie.setCookie,
    'getCookie': cookie.getCookie,
    'deleteCookie': cookie.deleteCookie,

    'encode': encodeDecode.encode,
    'decode': encodeDecode.decode,

    'addHttps': addHttps,

    'incrementColor': colors.incrementColor,
    'randomColor': colors.randomColor(),

    'removeNullFromObject': removeNullFromObject,

    'name': 'jnpl-helper'
};
