"use strict";
var arrayMap = function (arr, callback) {
    var i = -1;
    var len = arr.length;
    var resArr = [];
    while (++i < len) {
        resArr.push(callback(arr[i], i, arr));
    }
    return resArr;
};
module.exports = arrayMap;
