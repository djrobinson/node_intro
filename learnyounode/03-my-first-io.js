var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();
var strArray = str.split('\n').length;

console.log(strArray -1);