var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(thimBms._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  // check if there is a bucket
  var bucket = this._storage.get(idx);
  // if not create it
  if( !bucket ){
    bucket = [];
    this._storage.set(idx, bucket);
  }

  var found = false;

  // iterate over the bucket
  for( var i = 0; i < bucket.length; i++ ){
    var tuple = bucket[i];
    // if key exists?
    if( tuple[0] === k ){
      // update
      tuple[1] = v;
      found = true;
      break;
    }
  }

  // if not found
  if( !found ){
    // insert k,v
    bucket.push([k,v]);
    this._count++;
    if( this._count > 0.75 * this._limit ){
      this._resize( this._limit*2 );
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);
  if( !bucket ){
    return null;
  }

  for( var i = 0; i < bucket.length; i++ ){
    var tuple = bucket[i];
    if( tuple[0] === k ){
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);
  if( !bucket ){
    return null;
  }

  for( var i = 0; i < bucket.length; i++ ){
    var tuple = bucket[i];
    if( tuple[0] === k ){
      bucket.splice(i);
      this._count--;
      if( this._count < 0.25 * this._limit ){
        this._resize( this._limit/2 );
      }
      return tuple[1];
    }
  }

  return null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

HashTable.prototype._resize = function(newSize){

  var oldStorage = this._storage;

  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._count = 0;

  var context = this;

  oldStorage.each(function(bucket){
    if( bucket === undefined ){ return; }
    for( var i = 0; i < bucket.length; i++ ){
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  });
};