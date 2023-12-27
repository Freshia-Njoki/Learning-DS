//builds up the sort by gradually creating a larger left half which is always sorted
    //assumes that the first element is the sorted portion
// [5,3,4,1,2]     [3,5,4,1,2]     [3,4,5,1,2]     [1,3,4,5,2]     [1,2,3,4,5]

//INSERTION SORT PSEUDOCODE
//start by picking the second element in the array
//now compare the second element with the one before it and swap if necessary
//continue to the next element and it it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place
//repeat until the array is sorted

function insertionSort(arr){ //O(n^2) - as arr length grows we have to make n-squared number of comparisons
    for(let i = 1; i < arr.length; i++){//start comparing from index[1] to prevent extra iteration, though there's no harm to start from index[0]
        let currentVal = arr[i]; //variable to keep track at the value we're looking at
        //assumes that we're at the end or middle of the array rather than beginning
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { //loop to go backward(compares current to previous element) - when j is >= 0 and arr[j] > currentVal as we swap and search where to place the currentVal - searching for a spot
            arr[j+1] = arr[j]; //moving a value forward
            // console.log(arr);
        }
        arr[j+1] = currentVal; //after finding the spot insert the currentVal to its correct position
        console.log(arr)
        
    }
    return arr;
}
console.log(insertionSort([2,1,9,76,4]))
//if data is almost sorted, it's not the worst case scenario
//insertion sort is best candidate for online algorithm - alg that can work as data in coming in (receives new data); we place element where it should be as it comes in