var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeE = 0;
  var sizeD = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[sizeE] = value;
    sizeE++;
  };

  someInstance.dequeue = function(){
    if ( sizeE !== sizeD){
      var result = storage[sizeE-sizeD];
      delete storage[sizeE-sizeD];
      sizeD++;
      return result;
    }

  };

  someInstance.size = function(){
    return sizeE-sizeD;
  };

  return someInstance;
};

// []      sizeE 0  sizeD 0
// [a]     sizeE 1  sizeD 0
// [a,b]   sizeE 2  sizeD 0
// [a,b,c] sizeE 3  sizeD 0
//   [b,c] sizeE 3  sizeD 1
//     [c] sizeE 3  sizeD 2
//      [] sizeE 3  sizeD 3

// []  fin sizeE 0  sizeD 0
// [a] fin sizeE 1  sizeD 0
//  [] fin sizeE 1  sizeD 1
// [a] fin sizeE 2  sizeD 1