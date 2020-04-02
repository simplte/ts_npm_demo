import arrMaps = require('../dist/test-array-map') 
let arrList = arrMaps([1,2,2],item => item + 2);
arrList.forEach(x => {console.log(x.toFixed())})