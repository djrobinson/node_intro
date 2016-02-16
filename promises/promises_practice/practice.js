var evenPromise = function (num) {
  return new Promise(function (resolve, reject) {
    if ( num % 2 === 0 ) {
      resolve('even');
    } else {
      reject('odd');
    }
  }).then(function(value){
    console.log(value);
    return value;
  }, function(reason){
    console.log(reason);
    return value;
  });
};

console.log("retVal is ", evenPromise(14));
