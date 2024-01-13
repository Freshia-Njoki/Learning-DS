//tree structure with different rules. each parent have at-most 2 child nodes
//it is compact as possible where all children in each node are as full as they can be and left children are filled first
//MaxBinaryHeap - parent nodes are always greater than child nodes.but there's no guarantee relationship between sibling nodes
//MinBinaryHeap - parent nodes are always smaller than child nodes
//BH- are commonly used to: implement priority queues and are used with g raph traversal algorithms

//insert(in max BH) pseudocode
//push the value into the values property on the heap
//bubble up: (swapping with its root if the value is > the root)
    //create a variable called index which is the length of the values property - 1
    //create a variable called parentIndex  which is the floor of (index-1)/2
    //keep looping as long as the values element at the parentIndex is less than the values element at the child index
        //swap the values of the values element at the parentIndex with the value of the element property at the child index
        //set the index to be the parentIndex, and start over!

//ExtractMax pseudocode - removing the root
//swap the first value in the values property with the last one
//pop from the values property, so you can return the value at the end
//have the new root "sink down" to the correct spot...
    //Your parent index starts at 0(the root)
    //Find the index of the left child: 2*index + 1(make sure its not out of bounds)
    //Find the index of the right child: 2*index + 2(make sure its not out of bounds)
    //If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    //The child index you swapped to now become the new parent index
    //Keep looping and swapping until neither child is larger than the element
    //Return the old root
    
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element); //adding at the end
        this.bubbleUp();//calls the bubbleUp method
    }
    bubbleUp(){
        let index = this.values.length - 1; //last item
        const element = this.values[index];//track the val at the index

       while(index > 0 ){
        let parentIndex = Math.floor((index - 1) /2); //finding the parent index ( (n - 1 )/2)-parent, 2n + 2-getting the RChild, 2n + 1 LChild)
        let parent = this.values[parentIndex]; //getting the parentVal
        if(element <= parent) break; //compare, and terminate if its in correct spot(prevents infinite loop)
            //swap the values
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; //updating the Vals-index to bubble it to correct position
       }
    }
    // extractMax(){
    //     const max = this.values[0];//first element in maxBinaryHeap(root)
    //     const end = this.values.pop();//removes the last tree element
    //     if(this.values.length > 0){
    //         this.values[0] = end; //make the last element root
    //         this.sinkDown();
    //     }
        
    //     return max;//return the extracted root
    // }
    // sinkDown(){
    //     let idx = 0;//first element
    //     const length = this.values.length;
    //     const element = this.values[0];
    //     while(true){
    //         let leftChildIdx = 2 * idx + 1;
    //         let rightChildIdx = 2 * idx + 2;
    //         let leftChild, rightChild;
    //         let swap = null;

    //         if(leftChildIdx < length){//ensure it's not out of bound
    //             leftChild = this.values[leftChildIdx];
    //             if(leftChild > element){
    //                 swap = leftChildIdx; //tracks the position to swap with
    //             }
    //         }
    //         if(rightChildIdx < length){ //checking if it's a valid index
    //             rightChild = this.values[rightChildIdx];
    //             if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){//if no swaps we're made(leftChild was smaller) ,check if LeftChild was set to be swapped and the rightChild is largest swap with right instead
    //                 swap = rightChildIdx;
    //             }
    //         }
    //         if(swap === null) break;
    //         this.values[idx] = this.values[swap]; //swap now after keep track where to swap to
    //         this.values[swap] = element;
    //         idx = swap;//update the parent idx to keep bubblingDown to correct spot
    //     }
    // }   
    
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
// console.log(heap.extractMax())
// console.log(heap.values);