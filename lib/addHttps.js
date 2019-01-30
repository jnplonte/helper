"use strict";

module.exports = function(url){
    if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
        url = "https://" + url;
    }
    return url;
}
