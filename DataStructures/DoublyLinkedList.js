//2 classes:Node with val, next, prev and DoublyLinkedList with head, tail, length
//has 2 pointers: prev and next i.e. is multidirectional

//METHODS
//push - adding a node to the end of the D.L.L
//Pseudocode
//create a new node with the value passed to the function
//if the head property is null set the head and tail to be the newly created node(i.e. if the list is empty)
//if not, set the next property on the tail to be that new node(.next property)
//set the previous property on the newly created node to be the old tail(.prev property)
//set the tail to be the newly created node
//increment the length
//return the Doubly Linked List

//pop - removing a node from the end of the D.L.L
//Pseudocode
//If there is no head, return undefined
//store the current tail in a variable to return later
//If the length is 1, set the head and tail to be null
//update the tail to be the previous node
//set the newTail's next to null and the .prev current tail to be null too
//decrement the length
//return the value removed

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){ //or if(this.head === null)/if(this.tail === null) 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; //creating the next pointer of the newNode
            newNode.prev = this.tail; //creating the prev pointer
            this.tail = newNode;
        }
        this.length++;
        return this; //return the entire list
    }
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

list = new DoublyLinkedList()
list.push("99");
list.push("100");
console.log(list.pop())