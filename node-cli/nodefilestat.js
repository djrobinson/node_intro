const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');
const path = require('path');


rl.question('Enter a file location ', (answer) => {
  // TODO: Log the answer in a database
  var fd = fs.openSync(answer, 'r');
  console.log(fd);
  fs.fstat(fd, function(err, stat){
    if (err) console.error(err);

    console.log(stat.size, path.basename(answer), stat.mode, stat.atime);
  })

  rl.close();
});



