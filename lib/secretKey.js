"use strict";

const Crypto = require("crypto-js");

const secretKeyFunction = {
    'createSecretKey': function(secretHash = '', userId = '', companyId = '') {
        const hash = Crypto.AES.encrypt(userId + '|' + companyId + '|' + new Date().getTime(), secretHash);
        return hash.toString();
    },
    'readSecretKey': function(secretHash = '', secretKey = '', test) {
        try {
            const key = Crypto.AES.decrypt(secretKey, secretHash);
            const keyName = key.toString(Crypto.enc.Utf8).split('|');
            
            if (keyName.length <= 1) {
                return {};
            }

            const valid = (test) ? true : secretKeyFunction.checkExpiredTime(new Date(Number(keyName[2])));
            return {
                'userId': keyName[0],
                'companyId': keyName[1],
                'valid': valid
            };
        } catch (error) {
            return {};
        }
    },
    'checkExpiredTime': function(date = null, length = 5) {
        if (date === null) {
            return false;
        }

        const dateNow = new Date().getTime();
        date.setDate(date.getDate() + length);

        return (date.getTime() >= dateNow);
    }
}

module.exports = secretKeyFunction