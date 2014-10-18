var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if ( !this.children ) this.children = [];
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) return true;
  if (this.children){
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)) return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

function _each(collection, iterator) {
  if( Array.isArray(collection) ){
    for(var i = 0; i < collection.length; i++){
      iterator(collection[i], i, collection);
    }
  } else {
    for(var key in collection){
      iterator(collection[key], key, collection);
    }
  }
};
function _extend(obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  _each(args, function(arg){
    _each(arg, function(value, key){
      obj[key] = value;
    });
  });
  return obj;
};