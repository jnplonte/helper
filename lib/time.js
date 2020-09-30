'use strict';

const pad =  require('./pad');

const timeFunction = {
    'timeNow': function() {
        const dateObj = new Date();
        return pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':00';
    },
    'timeDiffirence': function(startTime = null, endTime = null) {
        if (startTime) {
            const sTimeArray = startTime.split(':');
            switch (sTimeArray.length) {
                case 1:
                    startTime = pad(startTime) + ':00:00';
                break;

                case 2:
                    startTime = startTime + ':00';
                break;
            }
        } else {
            startTime = '00:00:00';
        }

        if (endTime) {
            const eTimeArray = endTime.split(':');
            switch (eTimeArray.length) {
                case 1:
                    endTime = pad(endTime) + ':00:00';
                break;

                case 2:
                    endTime = endTime + ':00';
                break;
            }
        } else {
            endTime = '23:59:59';
        }

        return parseInt((new Date('1970-1-1 ' + endTime) - new Date('1970-1-1 ' + startTime) ) / 1000);
    }
}

module.exports = timeFunction
