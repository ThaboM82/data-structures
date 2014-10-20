function makeHeap(){
  var heap = [];
  heap.add = function(value){
    this.push(value);
    if (heap.length > 1) bubbleUp(this.length - 1);
  };

  heap.remove = function(){
    if (heap.length){
      var shiftedValue = this.shift();
      if (heap.length > 1) this.unshift(this.pop());
      bubbleDown(0);
      return shiftedValue;
    }
  };

  var bubbleUp = function(childPosition){
    var parentPosition = Math.floor((childPosition-1)/2);
    var parentValue = heap[parentPosition];
    var childValue = heap[childPosition];
    if (parentValue > childValue){
      heap[parentPosition] = childValue;
      heap[childPosition] = parentValue;
      bubbleUp(parentPosition);
    }
  };

  var bubbleDown = function(parentPosition){
    var leftChildPosition = 2 * parentPosition + 1;
    var rightChildPosition = 2 * parentPosition + 2;
    var parentValue = heap[parentPosition];
    var leftChildValue = heap[leftChildPosition];
    var rightChildValue = heap[rightChildPosition];

    if (parentValue > leftChildValue && parentValue > rightChildValue){
      if ( leftChildValue < rightChildValue ){
        // swap with left
        heap[parentPosition] = leftChildValue;
        heap[leftChildPosition] = parentValue;
        bubbleDown(leftChildPosition);
      } else {
        // swap with right
        heap[parentPosition] = rightChildValue;
        heap[rightChildPosition] = parentValue;
        bubbleDown(rightChildPosition);
      }
    } else if ( parentValue > leftChildValue ){
      heap[parentPosition] = leftChildValue;
      heap[leftChildPosition] = parentValue;
      bubbleDown(leftChildPosition);
    } else if ( parentValue > rightChildValue ){
      heap[parentPosition] = rightChildValue;
      heap[rightChildPosition] = parentValue;
      bubbleDown(rightChildPosition);
    }
  };

  return heap;
};

