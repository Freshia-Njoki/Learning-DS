//Linked list: (one-directional ordered DS to store any type of data. collection of nodes with value and pointer to another node or null(no indexing)
//contains head(beginning of the linked list), tail(end of the linked list) and length
//random access is not allowed

//node pseudo
//piece of data in node-val
//reference to next node - next

//pushing: Adding a new node to the end of the linked list
//Pushing Pseudocode
//push function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail to be the newly created node
//otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
//increment the length be one
//return the linked list

//pop: removes a node from the end of the LinkedList - we'll have to traverse from the head until tail-1
//NB: we can't go reverse: no backwards pointer
//Pop Pseudocode
//define a function called pop, shouldn't take in any value
//If there are no nodes in the list, return undefined
//loop through the list until you reach the tail
//set the next property of the 2nd to last node to be null
//set the tail to be the 2nd to last node
//decrement the length of the list by 1
//return the value of the node removed

//Shifting Pseudocode-deleting the head
//define shift func, it takes no argument
//if there are no nodes, return undefined
//store the current head property in a variable
//set the head property to be the current head's next property
//decrement the length by 1
//return the value of the node removed

//Unshifting - Adding a new node to the beginning of the L.list (position 4 returns the 5th item)
//Unshift Pseudocode
//this function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail to be the newly created node
//otherwise set the newly created node's next property to be the current head property on the list
//set the head property on the list to be that newly created node
//increment the length of the list by 1
//return the Linked list

//Get - retrieving a node by it's position in the linked list
//Pseudocode
//this function should accept an index
//if the index is less than 0 or greater than or equal to the length of the list, return null
//loop through the list until you reach the index and return the node at that specific index

//Set - changing the value of a node based on it's position in the Linked list. It accepts 2 things: a position(index) and a value( to be inserted)
//pseudocode
//this function should accept an index and a value
//use get function to find the specific node
//if the node is not found, return false
//if the node is found, set the value of that node to be the value passed to the function and return true

//Insert -  adding a node to the Linked list at a specific position
//pseudocode
//this function should accept an index and a value
//if the index is less than 0 or greater than the length, return false
//if the index is the same as the length, push a new node to the end of the list
//if the index is 0, unshift a new node to the start of the list
//otherwise, using the get method, access the node at index -1
//create a new node to be inserted in the list
//set the next property on that node to be the new node
//set the next property on the new node to be the previous next
//increment the length
//return true

//Remove - removing a node from L.list at a specific position
//if the index is less than 0 of greater than the length, return undefined
//if the index is the same as the length -1, pop
//if the index is 0, shift
//otherwise, using the get method, access the node at the index -1
//set the next property on that node to be the next of the next node
//decrement the length
//return the value of the node removed
 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){ //edge case-if is empty
            this.head =  newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; //returns the whole list
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current; //goes til n-1 position
            current = current.next; //goes till end
        }        
        console.log(current.val);
        console.log(newTail.val);

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){ //if there's no node reset the head and tail to be null 
            this.head = null;
            this.tail = null;
        }
        return current;  
    }
    shift (){
        if(!this.head) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next;
        this.length--;
        if(this.length === 0){ 
            this.tail = null;
        }
        return removedHead;
    }  
    unshift (val) {
        let newNode = new Node(val);
        if(!this.head){ //this code runs when its L.list is empty
            this.head = newNode;
            this.tail = newNode;
        } else { //runs when there's atLeast one item
            newNode.next = this.head;
            this.head = newNode;
        }       
        this.length++;//runs in either scenario
        return this; //returns the whole list
    }
    get (index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head; //tracks current position as we traverse
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // !!-doubly negate(boolean operator NOT). It converts(coerce) to a boolean
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if ( index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are you?");
// console.log(first);

let list = new SinglyLinkedList();
list.push("HI");
list.push("there");
list.push("!");
list.push(":)");
// console.log(list.pop());
console.log(list.shift());
console.log(list);//checks the head of the list after shifting
// console.log(list.head.next);
console.log(list.unshift("First"));
console.log(list.get(3));
console.log(list.set(2, "!!!")); //returns true though val at index 2 = !!!
console.log(list.get(2))
console.log(list.insert(4, "345"));//returns true
console.log(list.remove(3))