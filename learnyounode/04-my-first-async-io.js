var fs = require('fs');

var str = fs.readFile(process.argv[2], function(err, response){
  var numOfNewLines = response.toString().split('\n').length;
  console.log(numOfNewLines - 1);
});

