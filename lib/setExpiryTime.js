"use strict";

module.exports = function(date = null, length = 5) {
    const dateExpiry = (date) ? date : new Date();

    dateExpiry.setDate(dateExpiry.getDate() + length);

    return dateExpiry.getTime();
}
