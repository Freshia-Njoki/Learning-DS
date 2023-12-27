//SELECTION SORT - unlike bubble sort,selection sort places the smallest values into sorted position one at a time
                  //[9,3,7,1,2]     [1,3,7,9,2]     [1,2,7,9,3]     [1,2,3,9,7]     [1,2,3,7,9]

//SELECTION SORT PSEUDOCODE
//make a variable to store the minimum value
//compare it to the next item
//if the next item is smaller update the value of the minimum variable to be the next item and save its index[]; if it's not smaller keep going
//if the "minimum" is not the value (index) you initially began with, swap the two values
//repeat this with the next element until the array is sorted
    //shrink the window of comparison as we loop through- start comparing from next item [sorted elem index+1]
 

function selectionSort(arr){ 
    for(let i = 0; i < arr.length; i++){
        let minVal = i;
        for(j = i + 1; j < arr.length; j++){ // j=i+1 means - compare the first element with the second not the first again
            // console.log(i,j) //see the comparison indices
            if(arr[j] < arr[minVal]){ //if the next item is smaller than the current min value
                minVal = j; //update the minVal
            }
        }
        if (i !== minVal){ // to prevent making unnecessary comparisons, don't compare if the items are already sorted
            console.log(i, minVal) ;
            let temp = arr[i];
            arr[i] = arr[minVal];
            arr[minVal] = temp;

        }
    }
    return arr;
}
console.log(selectionSort([0,2,34,22,10,19,17]))

//ES2015 SELECTION SORT IMPLEMENTATION
function selectionSort2(arr) {
    const swap = (arr, idx1, idx2) => 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

        for(let i = 0; i < arr.length; i++) {
            let lowest = i;
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[lowest] > arr[j]) {
                    lowest = j;
                }
            }
            if (i !== lowest) swap(arr, i, lowest);
        }
    return arr;
}

console.log(selectionSort2([10,24,35,2,17,12]));