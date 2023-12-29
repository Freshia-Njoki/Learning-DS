//like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted

//PIVOT(partition) HELPER
//1. picking a pivot(runtime depends on how one selects the pivot - it's roughly assumed to be the median value in the data)
//Given an array select one element(doesn't matter its position can be in the middle/end) move all numbers that are lower than that number to the left and all numbers that are greater than that number to the right, without sorting
//now we know that, only that number(pivot) is in correct spot(index[]) but other numbers we don't know the exact position
//repeat the process for the left side and for the right side
//NB helper should do this IN PLACE- it shouldn't create a new array
//when complete, the helper should return the index of the pivot

//PIVOT PSEUDOCODE - helper
//write a function that accepts 3 args: an arr, a start index(default=0) and an end index(arr.length-1)
//pick the pivot from the start(for simplicity)/anywhere of the array
//store the current pivot index in a variable(to keep track of where the pivot should end up)
//loop through the array from the start until the end
    //if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//swap the starting element(ie. the pivot) with the pivot index
    //NB:'swap elements don't push elements to squeeze- since we aren't creating new array
//return the pivot index


function pivot(arr, start = 0, end = arr.length-1){ //start = index not the value
    const swap = (arr, idx1, idx2) => { //ES2015 V
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // function swap(array, i,j) { //takes the arr and 2 indices and swaps the values in that array
    //     let temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    // }

    let pivot = arr[start];//setting the pivot to be the first element
    let swapIdx = start;//keeps track of where we gonna swap the pivot to - our return val

    for (let i = start + 1; i <= end; i++){ //loop over every item after start in the arr
        if(pivot > arr[i]){ //check for smaller elements to be brought to the left
            swapIdx++; //increase the track swap index
            swap(arr, swapIdx, i); //takes 3 elements-now swap- swapIdx[] with arr[i], bring the smaller element before the pivot and increase the track index
            // console.log(arr); //confirm shifting less to Left and greater to Right
        }
    }
    //swap the pivot to its correct spot after shifting smaller to left and greater to right
    swap(arr, start, swapIdx); //swapping indices - in the array swap the track index(swapIdx) with the start[] 'pivot'
    // console.log(arr); // confirm pivot position
    return swapIdx; //returns the index where the selected pivot should be
}

// console.log(pivot([4,6,9,1,2,5,3]))


//QUICKSORT PSEUDOCODE - happens in place- we're not making new arrays: base case checks if the SUBARRAYS has one item in it, not the arr(entire) itself
//call the pivot helper on the array
//when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left and right of that index
//base case occurs when you consider a subarray with less than 2 elements

//recursive function
function quickSort(arr, left = 0, right = arr.length - 1){ //start,end point changes from default(in the pivot-helper fxn) since we're having subarrays
    if(left < right){//base case - keep running if L < R pointers don't point to one element in subArrays (no converge)
        let pivotIndex = pivot(arr, left, right)//call pivot helper fxn(returns the pivot index) with the arr
        //repeat on the left subarray
        quickSort(arr,left,pivotIndex-1); //until index just before the pivot don't include the pivot index(change the end)
        //right 
        quickSort(arr,pivotIndex+1,right);//changing the start
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1



