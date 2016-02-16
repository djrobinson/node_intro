var path = require('path');
var fs = require('fs');

var filter = function(dirname, extname, callback) {
  fs.readdir(dirname, function(err, list){
    if (err)
      return callback(err);
    if (!err)
      var filtList = list.filter(function(file){
        if ( path.extname(file) === "." + extname ) return file;
      })
      callback(null, filtList);
  });
}

module.exports = filter;