const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');
const path = require('path');


rl.question('Enter a file location ', (answer) => {
  // TODO: Log the answer in a database
  fs.open(answer, 'r', (err, fd) => {
    fs.fstat(fd, (err, stat) => {
      if (err) console.error(err);

      var writeObj = {};
      writeObj.size = stat.size;
      writeObj.name = path.basename(answer);
      writeObj.mode = stat.mode;
      writeObj.modified = stat.atime;
      fs.writeFile('output.txt', JSON.stringify(writeObj), (err) => {
        if (err) throw err;
        console.log('file written to bro');
      })
    })
  });
  rl.close();
});



