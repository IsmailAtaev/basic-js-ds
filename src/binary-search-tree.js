const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root != null ? this.root.data : null;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    if (this.root == null) {
      this.root = new Node(data);
    } else if (data < this.root.data) {
      this.root.left = this.addBST(this.root.left, data);
    } else {
      this.root.right = this.addBST(this.root.right, data);
    }
  }

  addBST(node, value) {
    if (node == null) {
      node = new Node(value);
    } else if (value < node.value) {
      node.left = this.addBST(node.left, value);
    } else {
      node.right = this.addBST(node.right, value);
    }
    return node;
  }

  has(/* data */) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
