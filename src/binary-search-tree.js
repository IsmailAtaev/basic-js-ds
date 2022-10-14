const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.myRoot = null;
  }

  root() {
    if (!this.myRoot) {
      return null;
    } else {
      return this.myRoot;
    }

    //return this.root != null ? this.root.data : null;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.myRoot = addBT(this.myRoot, data);

    function addBT(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addBT(node.left, value);
      } else {
        node.right = addBT(node.right, value);
      }
      return node;
      /*
      return value < node.value
        ? (node.left = addBT(node.left, value))
        : (node.right = addBT(node.right, value));
    */
    }
  }

  has(data) {
    return treeHas(this.myRoot, data);

    function treeHas(node, value) {
      if (!node) {
        return false;
      }
      if (value === node.value) {
        return true;
      }
      return value < node.value
        ? treeHas(node.left, value)
        : treeHas(node.right, value);
    }
  }

  find(data) {
    return findNode(this.myRoot, data);

    function findNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return value;
      }

      if (value < node.value) {
        node.left = findNode(node.left, value);
      } else {
        node.right = findNode(node.right, value);
      }
      return null;
    }
  }

  remove(data) {
    return removeNode(this.myRoot, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.value = minRight.value;
        node.right = removeNode(node.right, minRight.value);
        return node;
      }
    }
  }

  min() {
    if (!this.myRoot) {
      return;
    }

    let node = this.myRoot;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.myRoot) {
      return;
    }
    let node = this.myRoot;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree,
};
