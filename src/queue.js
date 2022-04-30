const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.root = {
      next:null
    }
    this.tail = this.root
  }

  getUnderlyingList() {
    return this.root.next
  }

  enqueue(value) {
    let node = new ListNode(value)
    node.next = null
    this.tail.next = node
    this.tail = node
  }

  dequeue() {
    if (this.root.next) {
      let res = this.root.next
      this.root.next = this.root.next.next
      return res.value
    } else {
      return null
    }
  }
}

module.exports = {
  Queue
};
