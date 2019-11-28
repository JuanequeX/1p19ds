class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeClass {
  constructor(node) {
    this.node = node;
  }

  insert(n, node = this.node) {
    if (!node.left) {
      node.left = n;
      return node;
    } else if (!node.right) {
      node.right = n;
      return node;
    } else if (node.right && !node.left.right) {
      return this.insert(n, node.left);
    } else if (node.left && !node.right.left) {
      return this.insert(n, node.right);
    } else if (node.right && !node.right.right) {
      return this.insert(n, node.right);
    } else {
      return this.insert(n, node.left);
    }
  }

  remove(key, node = this.node) {
    if (node == null) {
      return null;
    }
    if (node.left.data === key) {
      node.left = null;
      return node;
    } else if (node.right.data === key) {
      node.right = null;
      return node;
    } else if (node.right && !node.left.right) {
      return this.remove(key, node.left);
    } else if (node.left && !node.right.left) {
      return this.remove(key, node.right);
    } else if (node.right && !node.right.right) {
      return this.remove(key, node.right);
    } else {
      return this.remove(key, node.left);
    }
  }

  bft(node = this.node) {
    let queue = [];
    let print = [];

    queue.push(node);

    while (queue.length) {
      let nodeTemp = queue.shift();

      print.push(nodeTemp.data);

      if (nodeTemp.left) {
        queue.push(nodeTemp.left);
      }

      if (nodeTemp.right) {
        queue.push(nodeTemp.right);
      }
    }

    return print;
  }

  inOrder(node = this.node) {
    if(node.left) this.inOrder(node.left);  
    console.log(node.data);
    if(node.right) this.inOrder(node.right);
  }
}

const padre = new Node(1);
const nodo2 = new Node(2);
const nodo3 = new Node(3);
const nodo4 = new Node(4);
const nodo5 = new Node(5);
const nodo6 = new Node(6);
const nodo7 = new Node(7);
const nodo8 = new Node(8);
const nodo9 = new Node(9);
const nodo10 = new Node(10);

const tree1 = new TreeClass(padre);

tree1.insert(nodo2);
tree1.insert(nodo3);
tree1.insert(nodo4);
tree1.insert(nodo5);
tree1.insert(nodo6);
tree1.insert(nodo7);
tree1.insert(nodo8);
tree1.insert(nodo9);
tree1.insert(nodo10);

console.log('BTF');
console.log(tree1.bft());

console.log('In Order:');
tree1.inOrder();

tree1.remove(2);

console.log('In Order(remove):');
tree1.inOrder();

tree1;