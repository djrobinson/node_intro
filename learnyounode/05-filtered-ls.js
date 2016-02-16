var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
  console.log("list", list);
  list.map(function(file){
    console.log(path.extname(file));
    if (path.extname(file) === "." + process.argv[3]) console.log(file);
  })
})

