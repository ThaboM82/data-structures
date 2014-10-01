var makeStack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = stackMethods.push;

  someInstance.pop = stackMethods.pop;

  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {
  push: function(value){};
  pop: function(){};
  size: function(){};
};
