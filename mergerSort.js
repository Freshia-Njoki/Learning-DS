//combination of splitting up, sorting and merging
//exploits 
//decomposes an array into smaller arrays of 0 and 1 elements, then builds up a newly sorted array

//Big 0 of mergeSort
//TIME COMPLEXITY(Best, Average, Worst):  0(n log n) -' log for base 2 Ie. involves diving into halves
//SPACE COMPLEXITY: 0(n)
 
//MERGER ARRAYS
//first implement a function responsible for merging two sorted arrays
//Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
    //what if they are not the same size?
//This function should run in O(n + m) time and O(n + m) space and SHOULD NOT modify the parameters passed to it; where n is the size of the first array, m - the second array

// MERGE SORT PSEUDOCODE -with 2 sorted arrays
//create an empty array(takes 2 inputs[arrays]), take a look at the smallest values in each input array
//while there are still values we haven't looked at...
    //if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    //if the value in the fist array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    //once we exhaust one array, push in all remaining values from the other array

//MERGER SORT PSEUDOCODE- with unsorted array (implements recursion)
//break up the array into halves util you have arrays that are empty or have one element - slice method(start from 0 until middle of the array then middle till end)
    //keep going recursively until the arrays.length is <= 1 ie 1/0 (base case)
//once you have smaller sorted arrays, merger them back using merge function(we've already written) until you are back at the full length of the array
//once the array has been merged back together, return the merged(and sorted!) array

//'merging(combining) sorted arr functionality
function merge(arr1, arr2){ //merger(helper) function
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

// console.log(merge([1,20,50], [2,14,99,109]));

//'splitting function then call the merge function
function mergeSort(arr){
    //keep splitting the arr into smaller arrays, and calling mergeSort on those smaller arrays until arr.length is 1/ 0
    if(arr.length <= 1) return arr; //base case
    let mid = Math.floor(arr.length / 2); //split the array into to and round down(incase there floating point numbers)
    //left arr is first splitted util arr.length is 1 then moves to split the right arr"doesn't matter if its the right side of the left splits"(line 61 doesn't run until there's single-element arr on the left)
    //must satisfy the condition first
    let left = mergeSort(arr.slice(0,mid)); //recursion - keep splitting (into halves) if arr.length > 1
    let right = mergeSort(arr.slice(mid)); //right arr - from mid until the end
    return merge(left, right); //merge them back - using helper function
}

console.log(mergeSort([10,35,2,63,4,12,1]))

