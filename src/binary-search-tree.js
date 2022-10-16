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

  /*constructor() {
    this.myRoot = null;
  }

  root() {
    if (!this.myRoot) {
      return null;
    } else {
      return this.myRoot;
    }
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
    
    }
  }

  has(data) {
    return treeHas(this.myRoot, data);

    function treeHas(node, value) {

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
      } else if (node.value < value) {
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

  /*let node = this.myRoot;
    if (node.left === null) return node.value;
    else return this.findMinNode(node.left);
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
    let node = this.myRoot;
    if (node.right === null) return node.value;
    else return this.findMinNode(node.right);

    /*if (!this.myRoot) {
      return;
    }
    let node = this.myRoot;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }*/
}


module.exports = {
  BinarySearchTree,
};

/*
root 
    //return this.root != null ? this.root.data : null;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
*/
