class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //is it best practice to handle empty trees?
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    //how to insert a node at the right spot
    var current = this.root;
    while (true) { //what is true in this instance?
      if (val < current.val) {//first conditional
        if (current.left === null) {//second
          current.left = new Node(val);//create node with the inputed value
          return this; //return the value
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right 
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    //like before, make a new node if empty
    if (this.root === null) {
      this.root = new Node(val);
      return this; //new value creates a new node
    }
    //this will start a "branch" from the root node
    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      // use the recursion method here. we have value but we need to set where the value goes, left or right. to set a "blank" branch we must not indicate left or right as a second argument. Instead we will use this.root which will unassign the branch. 
      return this.insertRecursively(val, current.left); //where this value is assigned to, the left
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;//why .root and not just "this"?
    let found = false; //why set a booleon here?

    if (val === currentNode.val) return currentNode;


    while (currentNode && !found) { //while node has value and is found?
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) { //to do it recursively, we need to assign the root like before.
    if (this.root === null) return undefined;//if not found

    if (val > current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }

    if (val > current.val){
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
//what does it mean by "pre-order"?**
//dfs again
  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val); //logs the visit
      node.left && traverse(node.left); //going left if there is a left
      node.right && traverse(node.right); //go right.
    }

    traverse(current);
    return data;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val); //visit
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  //need to see what BFS stands for.

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();//shift removes from the end?
      data.push(node.val);//inserts the value into data.
      if (node.left) {
        //is left and right already values? or do they need to be defined. 
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
