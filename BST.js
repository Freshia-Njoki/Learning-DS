//Trees - classic DS that consists of nodes in a parent-child relationship
//Bog O: insertion - 0(log n), search 0(log n) in best and average case. Although not guaranteed!-in the case of a one-sided BST "making a linked list resulting to 0(n)"
    //as the number of nodes in tree doubles we increase the steps by 1 hence log(base 2) i.e. 2x no. of nodes: 1 extra step, 4X - 2 extra steps, 8x 3 extra steps
//Terms - edge, root, leaf, parent, child, siblings
//Use cases- HTML DOM, folders in OS, comp file sys, network routing(broadcasting), AI, Abstract Syntax Tree, JSON
//kinds of Trees: Trees, BT, BST-works with sorted data(any node > the root is located to the right, while less is on the lift side)
//NB BT, BST can have atMost 2 children

//Inserting a node - steps iteratively or recursively
//Pseudocode
//create a new node
//starting at the root
//check if there is a root, if not - the root now becomes that new node!
//if there is a root,check if the value of the new node is greater than or less than the value of the root
//if it is greater
//check to see if there is a node to the right
//if there is, move to that node and repeat these steps
//if there is not, add that node as the right property
//if it is less
//check to see if there is a node to the left
//if there is, move to that node and repeat these steps
//if there is not, add that node as the left property
//return the entire tree

//Find a node in BST - steps iteratively or recursively
//Pseudocode
//starting at the root
    //check if there is a root, if not - we're done searching!
    //if there is a root,check if the value of the new node is the value we are looking for.
    //if we found it, we're done!
    //if not, check to see if the value is greater than or less than the value of the root
    //if it is greater
        //check to see if there is a node to the right
            //if there is, move to that node and repeat these steps
            //if there is not, we're done searching!
    //if it is less
        //check to see if there is a node to the left
            //if there is, move to that node and repeat these steps
            //if there is not, we're done searching!
//return the foundNode

//Tree Traversal(BFS, DFS "preorder <,postorder >,inorder ^") - unsorted data
//BFS
//pseudocode - Iteratively
//node -> left -> right traversal on the same level
//create a queue(this can be an array) and a variable to store the values of nodes visited
//place the root in the queue
//loop as long as there is anything in the queue
    //dequeue a node from the q and push the value if the node into the variable that stores the nodes
    //if there is a left property on the node dequeue - add it to the queue
    //if there is a right property on the node dequeue - add it to the queue 
    //NB: push one BFS level to the q(holds temporarily) then start shifting & recording the order
//return the variable that stores the values

//DFS
//Preorder Pseudocode
//create a variable to store the values of nodes visited
//store the root of the BST in a variable called current
//write a helper function which accepts a node
  //push the value of the node to the variable that stores the values
  //if the node has a left property, call the helper function with the left property on the node
  //if the node has a right property, call the helper function with the right property on the node
//invoke the helper function with the current variable
//return the array of values
  
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left; //else {part}
      } else {
        //if(value > current.value)
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right; //else {part} - updates current so that we traverse further
      }
    } 
  }

  find(value){
    if(this.root === null) return false;
    let current = this.root,
        found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            found = true;
        }
    }
    if(!found) return undefined;
    return current;
  }
  BFS(){
    let node = this.root,
    data  =[],
    queue =[];
    queue.push(node);//add at the end
    while(queue.length){ //non-empty queue
      node = queue.shift();//remove from the beginning
      data.push(node.value);//list to be returned
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder(){
    let data =[];
    let current = this.root;
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
  traverse(current);
  return data;
  }
}

let tree = new BinarySearchTree();

//handled by insert() method now
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right= new Node(9);

// console.log(tree.root);

// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(2));
// console.log(tree.insert(13));
// console.log(tree.insert(11));
// console.log(tree.insert(16));
// console.log(tree.insert(7));
// console.log(tree.find(10));

//BFS - go horizontal'breadth' b4 vertical'depth'
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//          10
//        6   15
//      3  8    20
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
