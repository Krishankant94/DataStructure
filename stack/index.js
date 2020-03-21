function Stack() {
  this.top = -1;
  this.arr = [];
}

Stack.prototype.push = function(item) {
  this.top += 1;
  this.arr[this.top] = item;
};

Stack.prototype.pop = function() {
  if (this.top !== -1) {
    let item = this.arr[this.top];
    this.arr[this.top] = undefined;
    this.top -= 1;
    return item;
  } else {
    console.log("Stack is Empty!");
  }
};

Stack.prototype.isEmpty = function() {
  return this.top === -1;
};

let stack1 = new Stack();
