const { get } = require("mongoose");

let arr = [2,35,123,45,5,5,62];
console.log(Math.floor(arr.length /2))
console.log(arr.slice(0,3))
console.log(arr.slice(3))//from the third element to the end

//string are index from the left side
console.log(Math.abs(-345));//absolute value-assumes the negative
console.log(Math.pow(10,2)%10);//10^2 modulo 10(how many times 10 goes in, return the remainder)

//getting the digit of a num in certain place value
function getDigit(num, i){
    //abs-assumes negative nums, pow converts the ith digit to its place value ("hundreds" for 3 in 2344-300 ) %10 (modulo-remainder after 10 goes in several times),Floor-round down
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log(getDigit(2344,0));

console.log(Math.max(34,2));// returns the largest number