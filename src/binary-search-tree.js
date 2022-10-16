const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.my_root = null;
  }

  root() {
    return this.my_root;
    /*
    if (!this.root) {
      return this.root.data;
    } else {
      return null;
    }*/
  }

  add(value) {
    this.my_root = addWithin(this.my_root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.my_root, data);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }
      return value < node.data
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  remove(data) {
    this.root = removeNode(this.my_root, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
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
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.my_root) {
      return;
    }
    let node = this.my_root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.my_root) {
      return;
    }
    let node = this.my_root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  find(data) {
    let arr = [];
    function comparator(node, elem) {
      return node.data === elem ? true : false;
    }
    if (data > this.my_root.data) {
      rightTraverse(this.my_root, data, comparator);
    } else {
      leftTraverse(this.my_root, data, comparator);
    }
    if (arr.length > 0) {
      return null;
    }
    function leftTraverse(node, value, comparator) {
      if (node) {
        leftTraverse(node.left, value, comparator);
        if (comparator(node, value)) {
          return node.data;
        } else {
          arr.push(node.data);
        }
      }
    }
    function rightTraverse(node, value, comparator) {
      if (node) {
        rightTraverse(node.right, value, comparator);
        if (comparator(node, value)) {
          return node;
        } else {
          arr.push(node.data);
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
