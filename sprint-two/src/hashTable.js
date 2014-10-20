var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._entries = 0;
};

HashTable.prototype.insert = function(k, v){
console.log("Entered",this._entries, this._limit)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) this._storage[i] = [];
  this._storage[i].push([k,v]);
  this._entries++;
  if ( this._entries > 0.75 * this._limit ){
    this._limit *= 2;
    this._storage = changeHash(this._limit, this._storage);
  }
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
console.log("Removed",this._entries, this._limit, i, this._storage)
  if (this._storage[i]){
    var bucket = this._storage[i];
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k){
        var value = bucket[j][1];
        this._storage[i] = this._storage[i].splice(0,j) + this._storage[i].splice(j+1);
        this._entries--;
        if ( this._entries <= 0.5 * this._limit ){
          this._limit /= 2;
          this._storage = changeHash(this._limit, this._storage);
        }
        return value;
      }
    }
  }  
};

function changeHash(newLimit, oldStorage){
  newStorage = makeLimitedArray(newLimit);
  var bucketHashes = Object.keys(oldStorage);
  bucketHashes.forEach(function(bucketHash){
    var bucket = oldStorage[bucketHash];
    if ( Array.isArray(bucket) ){
      bucket.forEach(function(keyvalue){
        var key = keyvalue[0];
        var value = keyvalue[1];
        var i = getIndexBelowMaxForKey(key, newLimit);
        if ( !newStorage[i] ) newStorage[i] = [];
        newStorage[i].push([key,value]);
      });
    }
  })  
  return newStorage;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

//Each hash location is an array. This array is a 2D array with key-value pairs in each array
// i.e. Bucket 0: [["Jon","Gallagher"],["Jon","Sadka"]]
// Can optimize for space if we convert these buckets to pointers
// Can optimize for speed if we use a binary search tree