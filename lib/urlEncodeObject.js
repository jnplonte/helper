"use strict";

module.exports = function(obj = {}) {
    return Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');
}
