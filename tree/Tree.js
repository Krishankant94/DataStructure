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

let tree1 = new Tree();
