//design patterns
function collectOddValues(arr) {
    let result = [];
    //helps compile the array to prevent resetting array to empty(collect values);

    function helper(helperInput) {
        if(helperInput.length === 0){ //if manipulation array is empty stop execution
            return;
        }
        if(helperInput[0] % 2 !== 0){ //if first element in the array is not divisible by 2
            result.push(helperInput[0]) //return that element
        }
        helper(helperInput.slice(1)) //return the resulting arr excluding the first element - shrink the array
    }
    helper(arr) //pass the array to the helper fxn
    return result; //return arr with odd values
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

//pure recursion (function to collectOddValues) without helper method
function collectOddValues2(arr){ //accepts an array
    let newArr = []; //define newArr to be empty
    if(arr.length === 0) { //base case - check if arr input is empty
        return newArr;
    }
    if(arr[0] % 2 !== 0){ //check is the first number in our arr is odd
        newArr.push(arr[0]); //push that odd number in newArr
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1))); //ignore the first arr element concatenate and call the function with other arr elements
                                                                //if the resulting arr first element is even its newArr = empty(to  be concat..i.efor [2,3,4,5] =  [].concat(collectOddValues(3,4,5)) ) with collectOddValues of other element
    return newArr;
}
console.log(collectOddValues2([1,2,3,4,5]));