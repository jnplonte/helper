"use strict";

const Jwt = require("jwt-simple");

const jwtTokenFunction = {
    'createJwtToken': function(secretHash = '', userInformation = {}, hasExpiration = true, passwordLength = 5) {
        if (hasExpiration) {
            const date = new Date();
            date.setDate(date.getDate() + passwordLength);
            userInformation['exp'] = Math.floor(date.getTime() / 1000);
        }

        const jwtToken = Jwt.encode(userInformation, secretHash);

        return jwtToken;
    },
    'readJwtToken': function(secretHash = '', jwtToken = '') {
        const userInformation = Jwt.decode(jwtToken, secretHash);

        return userInformation;
    }
}

module.exports = jwtTokenFunction