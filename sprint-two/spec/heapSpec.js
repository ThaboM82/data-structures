describe('heap', function() {
  var heap;

  beforeEach(function() {
    heap = new makeHeap();
  });

  it('should have methods named "add" and "remove"', function() {
    expect(heap.add).to.be.a("function");
    expect(heap.remove).to.be.a("function");
  });

  it('should add values at the correct location in the heap', function(){
    heap.add(10);
    heap.add(3);
    heap.add(4);
    heap.add(8);
    heap.add(9);
    heap.add(7);
    heap.add(2);
    heap.add(6);
    heap.add(5);
    var result = [2, 5, 3, 6, 9, 7, 4, 10, 8];
    heap.forEach(function(item,idx){
      expect(item).to.equal(result[idx]);
    });
  });

  it('should have a working "remove" method', function(){
    heap.add(10);
    heap.add(3);
    heap.add(4);
    heap.add(8);
    heap.add(9);
    heap.add(7);
    heap.add(2);
    heap.add(6);
    heap.add(5);
    
    var result = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0, count = heap.length; i < count; i++){
      expect(heap.remove()).to.equal(result[i]);
    }
  });

});
