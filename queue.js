//FIFo data structure - with 2 operations adding and removing
//enqueue- adding from the end
//dequeue- removing from the beginning(to prevent pop entire list traversal issue)
//Programming use cases
//background tasks
//uploading resources
//print/task processing(1 at a time)
//1.with array implementation: pop combined with unshift or push together with shift - but shifts brings about re-indexing
//2. class implementation - custom and efficient

//Enqueue Pseudocode
//this function accepts some value
//create a new node using that value passed to the function
//if there are no nodes in the queue, set this node to be the first and last property of the queue
//otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
//increment the size of the q by 1

//Dequeue Pseudocode
//define a function takes no arguments
//if there is no first property, just return null
//store the first property in a variable
//check if there is only 1 node. If so, set the first and last to be null
//if there is more than 1 node, set the first property to be the next property of first
//decrement the size by 1
//return the value of the node dequeued

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }
    enqueue(val){ //adds at the end
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;          
        }
        return ++this.size; //increments and returns the size

    }
    dequeue(){ //removes from the beginning - resembles pop in stack
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
console.log(q.enqueue("First"));
console.log(q.enqueue("Second"));
console.log(q.dequeue());