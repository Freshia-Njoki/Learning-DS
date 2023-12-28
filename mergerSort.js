//combination of splitting up, sorting and merging
//exploits 
//decomposes an array into smaller arrays of 0 and 1 elements, then builds up a newly sorted array

//MERGER ARRAYS
//first implement a function responsible for merging two sorted arrays
//Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
    //what if they are not the same size?
//This function should run in O(n + m) time and O(n + m) space and SHOULD NOT modify the parameters passed to it; where n is the size of the first array, m - the second array

// MERGE SORT PSEUDOCODE
//create an empty array(takes 2 inputs[arrays]), take a look at the smallest values in each input array
//while there are still values we haven't looked at...
    //if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    //if the value in the fist array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    //once we exhaust one array, push in all remaining values from the other array


function mergeSort(arr1, arr2){
    let results = [];
    //make two pointers[at index 0] one for each arrays
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){ //looping through both arrays at the same time
        if(arr2[j] > arr1[i]){//compare the greatest item
            results.push(arr1[i]);//push the smaller item first
            i++; //move to the next arr item
        } else {
            results.push(arr2[j]);
            j++; //move up by 1 in arr2
        }
    }
    //when one array is exhausted - take all remaining elements of the other array and add them to the resulting arr
    while( i < arr1.length){ //if arr1 isn't exhausted push its elements
        results.push(arr1[i]);
        i++;
    }
    while( j < arr2.length){ //if arr2 isn't exhausted push its elements
        results.push(arr2[j]);
        j++;
    }

    return results;
}
console.log(mergeSort([1,20,50], [2,14,99,109]));