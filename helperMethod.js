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