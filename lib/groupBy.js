"use strict";

module.exports = function(array = [], string) {
    return array.reduce((r, a) => {
        r[a[string]] = [...r[a[string]] || [], a];
        return r;
    }, {});
}
