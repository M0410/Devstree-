const moment = require("moment")
let value = {
    interval: '00:30',
    startTime: '09:00',
    endTime: '12:00'
};
var inputDataFormat = "HH:mm";
var startIntervalTime = moment(value.startTime, inputDataFormat);
var endIntervalTime = moment(value.startTime, inputDataFormat).add(value.interval, inputDataFormat);
var finishTime = moment(value.endTime, inputDataFormat);
function prepareIntervals() {
    var intervals = [];
    while (startIntervalTime < finishTime) {
        var format = startIntervalTime.format('HH:mm') + " - " + endIntervalTime.format('HH:mm');
        intervals.push(format);
        startIntervalTime.add(value.interval, inputDataFormat);
        endIntervalTime.add(value.interval, inputDataFormat);
    }
    return intervals;
}
console.dir(prepareIntervals())