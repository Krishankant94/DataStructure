//To create a Node for LinkedList
function llNode(val) {
  this.data = val;
  this.next = null;
}

//Implement LinkedList
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.InsertAtBegining = function(val) {
  let node = new llNode(val);
  if (this.head) {
    node.next = this.head;
  }
  this.head = node;
};

LinkedList.prototype.InsertAtEnd = function(val) {
  let node = new llNode(val);
  let temp = this.head;
  if (!this.head) {
    this.head = node;
  } else {
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }
};

LinkedList.prototype.DeleteFromStart = function() {
  let temp = this.head;
  if (temp) {
    let temp1 = temp;
    temp = temp.next;
    delete temp1;
    this.head = temp;
  } else {
    console.log("List is Empty!");
  }
};

LinkedList.prototype.DeleteFromEnd = function() {
  let temp = this.head;
  let prev;
  if (temp && temp.next) {
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    delete temp;
  } else if (temp) {
    delete temp;
    this.head = null;
  } else {
    console.log("List is empty!");
  }
};

// Use Case

let list1 = new LinkedList();
// list1.InsertAtBegining(5);
// list1.InsertAtBegining(15);
// list1.InsertAtBegining(25);

list1.InsertAtEnd(5);
list1.InsertAtEnd(10);
list1.InsertAtEnd(15);
