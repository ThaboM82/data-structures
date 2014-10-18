var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newLink = makeNode(value);
    if (list.head === null) list.head = newLink;
    if (list.tail !== null) list.tail.next = newLink;
    list.tail = newLink;
  };

  list.removeHead = function(){
    if ( list.head !== null ){
      var headValue = list.head.value;
      if (list.head === list.tail){
        list.tail = null;
        list.head = null;
      } else {
        list.head = list.head.next;
      }
      return headValue;
    }
  };

  list.contains = function(target){
    if (list.head === null) return;
    var currentNode = list.head;
    if (currentNode.value === target) return true;
    while (currentNode.next !== null ){
      currentNode = currentNode.next;
      if (currentNode.value === target) return true;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
