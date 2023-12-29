const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());//reverses the sort

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

let digitBuckets =  Array.from({length : 10}, () => []); //creating an array of length 10
console.log(digitBuckets) //array of 10 empty subArrays

let Arr = [3,53,35,2,6]
console.log(arr.concat(...Arr,["fre","shia"]));

//power of spread operator
console.log([].concat([[1],[2],[3]])); //items in separate array
console.log([].concat(...[[1],[2],[3]])); //spread returns items all in one array

//reduce(requires a callback as an argument) takes each item and adds together and create a total
let reduceArr = [32, 35, 2, 5, 63, 46];
let sum = reduceArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

function distance(a,b){ //distance formula between 2 points
    let x = 5;
    let y = 10;
    let dx = a.x - b.x;
    let dy = a.y - b.y;

    return Math.hypot(dx, dy);
} 
console.log(distance(10,5))