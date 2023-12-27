//compares item to the next one and swaps them - hence we order from the largest
//ES5
function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES2015
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//BUBBLE SORT PSEUDOCODE
    //define a function takes an array
    //start looping from the end of the array towards the beginning with a variable called i
    //start an inner loop with a variable called j from the beginning until i-1
    //if arr[j] is greater than arr[j+1], swap those two values!
    //return the sorted array

function bubbleSort(arr) {
    // for (let i = 0; i < arr.length; i++)
    for (var i = arr.length; i > 0; i--) //starting from the arr far end
    //as i goes down so does j - running the loop fewer times
    {
        // for (let j = 0; j < arr.length; j++) //bug- goes ahead and compares last arr item and the next which is undefined
        //we need to shrink our array to reduce comparisons from arr.length, arr.length-1,arr.length-2, ..., 1

        for (var j = 0; j < i - 1; j++) // j-1 removes undefined bug since comparisons were initially made till the last items all through the loop yet they're already sorted 
        {
            console.log(arr, arr[j], arr[j+1]) //print the arr, and items we're comparing as it loops
            if(arr[j] > arr[j+1]){
                //swap!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("ONE PASS COMPLETE!");
    }
    return arr;
}
console.log(bubbleSort([37, 45, 29,8,12,88,-3]));


//ES 6(2015) VERSION IMPLEMENTATION
function bubbleSort2(arr) {
    const swap3 = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = arr.length; i > 0; i--) { 
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]) 
            if(arr[j] > arr[j+1]){
                swap3(arr, j, j+1);
            }
            
        }
    }

    return arr;
}
console.log(bubbleSort([37, 45, 29,8,12,88,-3]));

//OPTIMIZATION - Short circuit our code
//even when all items are sorted and comparisons aren't reduced to one the code continues to run until the last comparison is made
    //make a variable noSwaps if its true break out of the loop

    //optimized with no swaps
    function bubbleSortOpt(arr) {
        let noSwaps;
        for (let i = arr.length; i > 0; i--) { 
            noSwaps = true; //assumption that initially there're no swaps
            for (let j = 0; j < i - 1; j++) {
                console.log(arr, arr[j], arr[j+1]) 
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false; //already swap is made
                }
                
            }
            if(noSwaps) break;
        }
    
        return arr;
    }
    console.log(bubbleSortOpt([8,1,2,3,4,5,6,7]));//almost sorted array to optimize the code-such that if all items are sorted we just terminate the loop, no need to make all comparisons