//TIMING OUR CODE
function addUpTo(n) { //O(n)
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
// console.log(addUpTo(8)) 
let t1 = performance.now() 
addUpTo(1000000);
let t2 = performance.now();
console.log(`Elapsed time: ${t2 - t1} / 1000 seconds.`)

function addUpTo1(n){ //o(1)
    return n * (n + 1)/2;
}
// console.log(addUpTo1(8))
let t3 = performance.now() 
addUpTo(1000000);
let t4 = performance.now();
console.log(`Elapsed time: ${t4 - t3} / 1000 seconds.`);


function printAllNumbers(n){ //O(n*n) - nested loops
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}printAllNumbers(3);

//SPACE COMPLEXITY

function Sum(arr) { //0(1) space!
    let total = 0;
    for(let i = 0; i <= arr.length; i++) {
        total += arr[i];
    }
    return total;
} console.log(Sum([2,3,4]));

function double(arr) { // O(n) space!
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr; // n numbers
}
console.log(double([2,3,4]));


//OBJECTS - Methods
let instructor = {
    firstName : "Kelly",
    isInstructor : true,
    favouriteNumbers : [1,2,3,4]
}
console.log(Object.keys(instructor)) //O(N)
console.log(Object.values(instructor)) //O(N)
console.log(Object.entries(instructor)) //O(N) - conmbines into key-val pair
console.log(instructor.hasOwnProperty("firstName")) //O(1)