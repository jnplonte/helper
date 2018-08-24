"use strict";

module.exports = function(html = '', data = {}) {
    Object.keys(data).forEach((key) => {
        html = html.replace(new RegExp('{{' + key + '}}', 'g'), data[key]);
    });

    return html;
}
