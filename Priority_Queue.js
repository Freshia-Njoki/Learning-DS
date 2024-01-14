//Priority queue-Is a DS where each element has a priority associated with it.
//Big O - Insertion O(log N), Removal O(log N), Search O(N)-BST if prefer red in search
//It's implemented as MinBinaryHeap since lower number means higher priority

//pseudocode
//write a Min Binary Heap - changing < to >
//each node has a val and a priority. Use the priority to build the heap
//Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off its priority
//Dequeue method removes the root element, returns it, and rearranges heap using priority


class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){//each node has a value and priority
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length - 1; //last item
        const element = this.values[index];//track the val at the index
        while(index > 0 ){
            let parentIndex = Math.floor((index - 1) /2); //finding the parent index ( (n - 1 )/2)-parent, 2n + 2-getting the RChild, 2n + 1 LChild)
            let parent = this.values[parentIndex]; //getting the parentVal
            if(element.priority >= parent.priority) break; //compare, and terminate if its in correct spot(prevents infinite loop)
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; //updating the Vals-index to bubble it to correct position
       }
    }
    dequeue(){
        const min = this.values[0];//first element in maxBinaryHeap(root)
        const end = this.values.pop();//removes the last tree element
        if(this.values.length > 0){
            this.values[0] = end; //make the last element root
            this.sinkDown();
        }
        
        return min;//return the extracted root
    }
    sinkDown(){
        let idx = 0;//first element
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){//ensure it's not out of bound
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx; //tracks the position to swap with
                }
            }
            if(rightChildIdx < length){ //checking if it's a valid index
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){//if no swaps we're made(leftChild was smaller) ,check if LeftChild was set to be swapped and the rightChild is largest swap with right instead
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap]; //swap now after keep track where to swap to
            this.values[swap] = element;
            idx = swap;//update the parent idx to keep bubblingDown to correct spot
        }
    }   
    
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
        // this.insertTime = Date.now(); //to cater for elements with the same priority-should be served in fifo manner, also change the conditional logic in line 60: if priority is same which arrived first?
    }
} 
let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("higher fever", 2);
ER.enqueue("broken arm", 2);
console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());