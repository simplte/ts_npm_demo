"use strict";
exports.__esModule = true;
var arrMaps = require("../dist/test-array-map");
console.log(arrMaps([1, 2, 2], function (item) { return item + 2; }));
