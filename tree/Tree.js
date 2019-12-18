//Create A Node for Tree
function TreeNode(val) {
  this.left = null;
  this.data = val;
  this.right = null;
}

//Implementation Of Binary search Tree
function Tree() {
  this.root = null;
}

// Insertion into Binary Search Tree
Tree.prototype.BSTInsert = function(val) {
  const tempNode = new TreeNode(val);
  this.root = this.Insert(tempNode, this.root);
};
Tree.prototype.Insert = function(node, cRoot) {
  if (!cRoot) {
    cRoot = node;
  } else if (node.data <= cRoot.data) {
    cRoot.left = this.Insert(node, cRoot.left);
  } else {
    cRoot.right = this.Insert(node, cRoot.right);
  }
  return cRoot;
};

// Deletion from the BST
/*
   find the node which you want to delete by value of the node  suppose Node is K
     there are 3 scenarios 
      (1). when K is having both the child
      (2). K has only One Child
      (3). K has No chils at All
      
     for
        (3). Delete the node K from the tree
        (2). if it is only child assign it to the grand father in place of K  
        (1). 
             find the max Node (M) of left side of K
             assing M's data to K'data section
             Delete M from the left side in Recursive Manner 
 */

Tree.prototype.deleteNode = function(val, cRoot = this.root) {
  if (!cRoot) {
    return null;
  } else if (val < cRoot.data) {
  } else if (val > cRoot.data) {
  } else {
    //Here we'll find the node K
    if (cRoot.left && cRoot.right) {
      // scenario (3)
    } else if (cRoot.left) {
      // scenario (2)
    } else if (cRoot.right) {
      // scenario (2)
    } else {
      // scenario (1)
    }
  }
};

let tree1 = new Tree();
