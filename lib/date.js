"use strict";

const pad =  require('./pad');

const dateFunction = {
    'dateNow': function() {
        const dateObj = new Date();
        return pad(dateObj.getDate()) + '/' + pad(dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
    },
    'dateTimeNow': function() {
        const dateObj = new Date();
        return pad(dateObj.getDate()) + '/' + pad(dateObj.getMonth() + 1) + '/' + dateObj.getFullYear() + ' ' + pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes());
    },
    'dateTimeNowEnd': function() {
        const dateObj = new Date();
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate()) + ' 23:59:00';
    },
    'dateTimeNowStart': function() {
        const dateObj = new Date();
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate()) + ' 00:00:00';
    },
    'getDateAdd': function(days = 1, endTime = true) {
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() + days);
        const time = (endTime) ? '23:59:00' : pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':00';
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate()) + ' ' + time;
    },
    'getDateSubract': function(days = 1, endTime = true) {
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() - days);
        const time = (endTime) ? '00:00:00' : pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':00';
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate()) + ' ' + time;
    },
    'parseDateTime': function(date = null, toSetTime = true) {
        date = (date) ? date : new Date();

        if (date.toString() === 'Invalid Date' || date === 'NaN-NaN-NaN NaN:NaN' || date === '0000-00-00 00:00:00') {
            return 'Invalid Date';
        }
        const dateObj = new Date(date);
        if (toSetTime) {
            dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
        }
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate()) + ' ' + pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes());
    },
    'parseDate': function(date = null, toSetTime = true) {
        date = (date) ? date : new Date();

        if (date.toString() === 'Invalid Date' || date.toString() === 'NaN-NaN-NaN NaN:NaN' || date.toString() === '0000-00-00 00:00:00') {
            return 'Invalid Date';
        }
        const dateObj = new Date(date);
        if (toSetTime) {
            dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
        }
        return dateObj.getFullYear() + '-' + pad(dateObj.getMonth() + 1) + '-' + pad(dateObj.getDate());
    },
    'getWeekDate': function(date = null) {
        date = (date) ? date : new Date();

        const dateString = dateFunction.parseDate(date, false);

        const onejan = new Date(date.getFullYear(), 0, 1);
        const week = Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        return dateString.substring(0, dateString.length - 5) + pad(week);
    }
}

module.exports = dateFunction
