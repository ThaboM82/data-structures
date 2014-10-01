var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqLoc = 0;
  var deqLoc = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[enqLoc] = value;
    enqLoc++;
  };

  someInstance.dequeue = function(){
    if ( enqLoc - deqLoc ) {
      var result = storage[deqLoc];
      delete storage[deqLoc];
      deqLoc++;
      return result; 
    }
  };

  someInstance.size = function(){
    return enqLoc - deqLoc;
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
