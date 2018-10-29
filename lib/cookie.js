"use strict";

const toString =  require('./toString');


const cookieFunction = {
    'setCookie': function(cname = '', cvalue = '', domain = '', exdays = 5) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();

        if (typeof(document) !== 'undefined') {    
            document.cookie = cname + "=" + toString(cvalue) + ";" + expires + ";domain=" + domain + ";path=/";
            return true;
        } else {
            return false;
        }
    },
    'getCookie': function(cname = '') {
        var name = cname + "=";
        if (typeof(document) !== 'undefined') { 
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
        }

        return null;
    },
    'deleteCookie': function(cname = '', domain = '') {
        if (typeof(document) !== 'undefined') {
            document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + domain + ';path=/';
            return true;
        }else{
            return false;
        }
    }
}

module.exports = cookieFunction
