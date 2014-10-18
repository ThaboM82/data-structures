var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) this._storage[i] = [];
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]){
    var bucket = this._storage[i];
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k) return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]){
    var bucket = this._storage[i];
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k) var value = bucket[j][1];
      this._storage[i] = this._storage[i].splice(0,j) + this._storage[i].splice(j+1);
      return value;
    }
  }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//Each hash location is an array. This array is a 2D array with key-value pairs in each array
// i.e. Bucket 0: [["Jon","Gallagher"],["Jon","Sadka"]]
// Can optimize for space if we convert these buckets to pointers
// Can optimize for speed if we use a binary search tree