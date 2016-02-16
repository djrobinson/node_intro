var fs = require('fs');
var path = require('path');
var filter = require('./06-filter');

function mainFunc(dir, fileType){
  filter(dir, fileType, function(err, list){
    if (err)
      return console.error("there was an error: ", err);

    list.forEach(function(el){
      console.log(el);
    })
  });

}

mainFunc(process.argv[2], process.argv[3]);