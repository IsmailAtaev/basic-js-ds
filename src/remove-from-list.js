const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}

 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let b = l;
  let arr = [];
  
  while (b) {
    if (b.value !== k) {
      arr.push(b.value);
    }
    b = b.next;
  }

  let current = new ListNode(arr[0]);
  let elem = current;

  for (let i = 1; i < arr.length; i++) {
    elem.next = new ListNode(arr[i]);
    elem = elem.next;
  }
  return current;
}

module.exports = {
  removeKFromList,
};
