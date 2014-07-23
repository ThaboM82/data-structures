var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    count && count--
    var poppedVal = storage[count];
    delete storage[count];
    return poppedVal;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};