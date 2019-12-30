//Max -Heap
function BinaryHeap() {
  this.heap = [];
}

//Insertion into the heap
BinaryHeap.prototype.Insert = function(val) {
  //insert at the end of array
  this.heap.push(val);
  // re-arrrange to maintain the heap properties
  this.reArrangeHeap();
};

BinaryHeap.prototype.reArrangeHeap = function() {
  let index = this.heap.length - 1;
  const ele = this.heap[index];
  while (index > 0) {
    const pIndex = Math.floor((index - 1) / 2);
    const pEle = this.heap[pIndex];
    if (ele > pEle) {
      //swap
      this.heap[index] = pEle;
      this.heap[pIndex] = ele;
    }
    index = pIndex;
  }
};

BinaryHeap.prototype.Delete = function() {
  //In heap deletion  will always happen at the top so
  this.heap[0] = this.heap.pop();
  // Now re arrange the Heap
  let index = 0;
  while (this.heap[2 * index + 1] || this.heap[2 * index + 2]) {
    let parent = this.heap[index];
    let leftChild = this.heap[2 * index + 1];
    let rightChild = this.heap[2 * index + 2];
    let max = Math.max(
      parent,
      leftChild ? leftChild : 0,
      rightChild ? rightChild : 0
    );
    if (max === leftChild) {
      //swap
      this.heap[index] = leftChild;
      this.heap[2 * index + 1] = parent;
    } else if (max === rightChild) {
      //swap
      this.heap[index] = rightChild;
      this.heap[2 * index + 2] = parent;
    } else {
      break;
    }
  }
};

let bh = new BinaryHeap();
