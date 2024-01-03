//use case browser history
//2 classes:Node with val, next, prev and DoublyLinkedList with head, tail, length
//has 2 pointers: prev and next i.e. is multidirectional
//BIG O: insertion - 0(1), Removal - 0(1), searching - 0(N) (can be 0(N/2) - divide the list then start from left or right), Accessing - 0(N)

//METHODS
//Push - adding a node to the end of the D.L.L
//Pseudocode
//create a new node with the value passed to the function
//if the head property is null set the head and tail to be the newly created node(i.e. if the list is empty)
//if not, set the next property on the tail to be that new node(.next property)
//set the previous property on the newly created node to be the old tail(.prev property)
//set the tail to be the newly created node
//increment the length
//return the Doubly Linked List

//Pop - removing a node from the end of the D.L.L
//Pseudocode
//If there is no head, return undefined
//store the current tail in a variable to return later
//If the length is 1, set the head and tail to be null
//update the tail to be the previous node
//set the newTail's next to null and the .prev current tail to be null too
//decrement the length
//return the value removed

//Shift - removes the node from the beginning of the D.L.L
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

//Unshift - adding a node at the beginning of the D.L.L
//Pseudocode
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
//Pseudocode
//if the index is less than 0 or greater or equal to the length, return null
//if the index is less than or equal to half the length of the list
    //loop through the list starting from the head and loop towards the middle
    //return the node once it is found
//if the index is greater than half the length of the list
    //loop through the list starting from the tail and loop towards the middle
    //return the node once it is found

//Set - update a node's value at a certain position in the list(D.L.L)
//Pseudocode
//create a variable which is the result of the get method at the index passed to the function
    //if the get method returns a valid node,set the value of that node to be the value passed to the function
    //return true
//otherwise, return false

//Insert - adding a node in the D.L.L by a certain position
//if the index is less than 0 0r >= length return false
//if the index is 0, unshift
//if the index is the same as the length, push
//use the get method to access the index - 1
// set the next and prev properties on the correct nodes to link everything together
//increment the length
//return true

//Remove - remove a node in a D.L.L at certain position
//Pseudocode
//if the index is less than 0 0r >= length return undefined
//if the index is 0, shift
//if the index = length-1, pop
//use get method to retrieve the item to be removed
//update the next and prev properties to remove the found node from the list
//set next and prev to null on the found node
//decrement the length
//return the removed node

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
    set(index, val){
        var replaceNode = this.get(index);
        if(replaceNode != null){
            replaceNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);//double bang (!!) - coerce to boolean
        if(index === this.length) return !!this.push(val);//double bang - coerce to boolean

        let newNode = new Node (val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
                //OR
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

list = new DoublyLinkedList()
list.push("99");
list.push("100");
list.push("110");
list.push("120");
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("150"));
// console.log(list.get(1));
// console.log(list.set(1,"140"));
// console.log(list.insert(3,"140"));
console.log(list.remove(3));
// console.log(list)