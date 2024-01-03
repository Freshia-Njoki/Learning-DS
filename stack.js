//LIFO data structure collection -  we can add or remove from the start or end but not both
//use cases: managing function invocation, routing history, undo/redo
//in array implementation we focus with push and pop since we don't have to re-index items
//BIG O: insertion - 0(1), Removal - 0(1), searching - 0(N), Accessing - 0(N)

//Push Pseudocode
//the function should accept a value
//create a new node with that value
//if there are no nodes in the stack, set tht first and last property to be the newly created node
//if there is at least one node, create a variable that stores the current first property on the stack
//reset the first property to be the newly created node
//set the next property on the node to be the previously created variable
//increment the size of the stack by 1
//return the size

//Pop Pseudocode
//if there are no nodes in the stack, return null
//create a temporary variable to store the first property on the stack
//if there is only 1 node,set the first and last property to be null
//if there is more than one node, set the first property to be the next property on the current first
//decrement the size by 1
//return the value of the node removed 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){//adding from the beginning but with push name since its a stack
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size; //increment and returns the size
    }
    pop(){ //removing from the beginning but with pop name - stack
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }
}

let stack = new Stack();

console.log(stack.push(23));//return the size - 1
console.log(stack.push(20)); 
console.log(stack.pop());
