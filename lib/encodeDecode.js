"use strict";

const Crypto = require("crypto-js");

const encodeDecode = {
    'encode': function(secretHash = '', secretWord = '') {
        try {
            const hash = Crypto.AES.encrypt(secretWord, secretHash);
            return hash.toString();
        } catch (error) {
            return '';
        }
    },
    'decode': function(secretHash = '', secretKey = '') {
        try {
            const key = Crypto.AES.decrypt(secretKey, secretHash);
            const keyName = key.toString(Crypto.enc.Utf8);
            
            return keyName;
        } catch (error) {
            return '';
        }
    }
}

module.exports = encodeDecode