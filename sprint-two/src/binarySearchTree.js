var makeBinarySearchTree = function(val){
  var tree = Object.create(makeBinarySearchTree.methods);
  tree.value = val;
  tree.left = null;
  tree.right = null;
  return tree;
};

makeBinarySearchTree.methods = {};

makeBinarySearchTree.methods.insert = function(val){
  if ( val <= this.value ){
    this.left ? this.left.insert(val) : this.left = makeBinarySearchTree(val);
  } else {
    this.right ? this.right.insert(val) : this.right = makeBinarySearchTree(val);
  }
};

makeBinarySearchTree.methods.contains = function(target){
  if (this.value === target) return true;
  if (target <= this.value && this.left) return this.left.contains(target);
  if (target > this.value && this.right) return this.right.contains(target);
  return false;
};

makeBinarySearchTree.methods.depthFirstLog = function(callback){
  this.value = callback(this.value);
  if (this.left) this.left.depthFirstLog(callback);
  if (this.right) this.right.depthFirstLog(callback);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
