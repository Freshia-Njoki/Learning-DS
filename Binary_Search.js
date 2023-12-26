    //BINARY SEARCH
//works on sorted array
//divide and conquer mechanism
//eliminates one half - middle points to the answer

//BINARY SEARCH PSEUDOCODE
    //function accepts a sorted array and a value
    //create a left pointer at the start of the array, and right pointer at the end of the array
    //while the left pointer comes before the right pointer
        //create a pointer in the middle
        //if you find the value you want, return the index
        //if the value is too small, move the left pointer up
        //if the value is too large, move the right pointer down
    //if you never find the value, return -1

function binarySearch(arr, elem) { 
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2); //rounds a number down
    console.log(start, middle, end)
    while (arr[middle] !== elem)
    {
        if(elem < arr[middle]){
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    console.log(start, middle, end);
    return middle;
}
console.log(binarySearch([2,5,6,9,13,15,28,30], 28))
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E
// [2, 5, 6, 9, 13, 15, 28, 30]
//              S   M        E
// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM   E