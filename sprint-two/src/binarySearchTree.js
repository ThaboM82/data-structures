var makeBinarySearchTree = function(val){
  var tree = makeNode(val);
  function makeNode(value){
    return {
      value:value,
      left:null,
      right:null,
      insert: function(val){
        if ( val <= this.value ){
          this.left ? this.left.insert(val) : this.left = makeNode(val);
        } else {
          this.right ? this.right.insert(val) : this.right = makeNode(val);
        }
      },
      contains: function(target){
        if (this.value === target) return true;
        if (target <= this.value && this.left) return this.left.contains(target);
        if (target > this.value && this.right) return this.right.contains(target);
        return false;
      },
      depthFirstLog: function(callback){
        this.value = callback(this.value);
        if (this.left) this.left.depthFirstLog(callback);
        if (this.right) this.right.depthFirstLog(callback);
      }
    };
  }
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
