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

//shift - removes the node from the beginning of the D.L.L
//Pseudocode
//if the length is 0, return undefined
//store the current head property in a variable - oldHead
//if the length is 1:
    //set the head to be null
    //set the tail to be null
//update the head to be the next of the old head
//set the head's prev property to null
//set the old head's next to null
//decrement the length
//return old head

//unshift - adding a node at the beginning of the D.L.L
//create a new node with the value passed to the function
//if the length is 0
    //set the head to be the new node
    //set the tail to be the new node
//otherwise
    //set the prev property on the head of the list to be the new node
    //set the next property on the new node to be the head property
//update the head to be the new node
//increment the length
//return the list

//Get - accessing a node by its position
//if the index is less than 0 or greater or equal to the length, return null
//if the index is less than or equal to half the length of the list
    //loop through the list starting from the head and loop towards the middle
    //return the node once it is found
//if the index is greater than half the length of the list
    //loop through the list starting from the tail and loop towards the middle
    //return the node once it is found


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
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){ //edge case
            this.head = null;
            this.tail = null;
        } else { 
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;//check for upper and lower bound(on either sides)
        let current;
        if(index <= this.length/2 ){ //when the index is below the middle we start from the head
            let count = 0;
            current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        } else { //when the index is above the middle we start from the tail
            let count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev; //stepping backwards
                count--;
            }   
        }
        return current;
            
    }
}

list = new DoublyLinkedList()
list.push("99");
list.push("100");
list.push("120");
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("150"));
console.log(list.get(1));
// console.log(list)