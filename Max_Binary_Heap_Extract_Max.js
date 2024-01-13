class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element); //adding at the end
    }
     extractMax(){
        const max = this.values[0];//first element in maxBinaryHeap(root)
        const end = this.values.pop();//removes the last tree element
        this.values[0] = end; //make the last element root
        this.sinkDown();
        return max;//return the extracted root
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
                    if(leftChild > element){
                        swap = leftChildIdx; //tracks the position to swap with
                    }
                }
                if(rightChildIdx < length){ //checking if it's a valid index
                    rightChild = this.values[rightChildIdx];
                    if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){//if no swaps we're made(leftChild was smaller) ,check if LeftChild was set to be swapped and the rightChild is largest swap with right instead
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// console.log(heap);
// console.log(heap.extractMax())
console.log(heap.values)

//but 55 is not deleted from the heap, results should be 41, 39, 33, 18,27, 12 instead of 41, 39, 33, 18, 27, 12, 55