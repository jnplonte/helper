"use strict";

const Crypto = require("crypto-js");

module.exports = function(password = '', salt = '') {
    const hash = Crypto.HmacSHA256(password, salt);

    return hash.toString();
}
