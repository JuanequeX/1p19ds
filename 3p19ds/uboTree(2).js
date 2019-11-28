class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeClasss {
    constructor(node) {
      this.node = node;
    }  
    insert(n, node = this.node) {
      if (n.data < node.data && node.left === null) {
        node.left = n;
        return node;
      } else if (n.data > node.data && node.right === null) {
        node.right = n;
        return node;
      } else if (n.data < node.data && node.left) {
        return this.insert(n, node.left);
      } else if (n.data > node.data && node.right) {
        return this.insert(n, node.right);
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
        } else if (key < node.data && node.left) {
          return this.remove(n, node.left);
        } else if (key > node.data && node.right) {
          return this.remove(n, node.right);
        }
      }
  
    BFT(node = this.node) {
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
  
    inOrder(node=this.node){
        if(!(node == null)){
            this.inOrder(node.left)   
            console.log(node.data)
            this.inOrder(node.right)             
        }            
    }
  }
  let padre = new Node(4)  
  let nodo2 = new Node(2) 
  let nodo3 = new Node(3) 
  let nodo4 = new Node(8)   
  let tree = new TreeClasss(padre) 
  
  tree.insert(nodo2)   
  tree.insert(nodo3)   
  tree.insert(nodo4) 
  
  console.log('BFT') 
  console.log(tree.BFT()) 

   
  console.log('In Order') 
  tree.inOrder() 

  tree.remove(2) 
  
  console.log('In Order') 
  tree.inOrder() 