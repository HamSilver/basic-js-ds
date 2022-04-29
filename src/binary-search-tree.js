const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null
  }

  root() {
    return this.tree
  }

  add(data, node = this.tree) {
    if (!node) {
      this.tree = new Node(data)
    } else {
      if (data == node.data) return
      const mode = data < node.data ? 'left' : 'right'
      !node[mode] ? node[mode] = new Node(data) : this.add(data, node[mode])
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data, node = this.tree) {
    if (!node) return null
    if (data === node.data) return node
    return data < node.data ? this.find(data, node.left) : this.find(data, node.right)
  }

  seek(node, mode='left') {
    while (node[mode]) {
      node = node[mode]
    }
    return node.data
  }

  remove(data, node = this.tree) {
    if (!node) return
    if (data === node.data) {
      if (!node.left && !node.right) return null
      if (!node.left) return node.right
      if (!node.right) return node.left
      node.data = this.seek(node.right)
      node.right = this.remove(node.data, node.right)
    } else {
      const mode = data < node.data ? 'left' : 'right'
      node[mode] = this.remove(data, node[mode])
    }
    return node
  }

  min() {
    if (!this.tree) return
    return this.seek(this.tree)
  }

  max() {
    if (!this.tree) return
    return this.seek(this.tree, 'right')
  }
}

module.exports = {
  BinarySearchTree
}