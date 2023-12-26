//WHERE THINGS GO WRONG
// 1. no base case
// 2. forgetting to return pr returning wrong things
// 3. stack overflow! too many functions being called..recusion not stoping
        function sumRange (num) {
            if (num === 1) console.log(1) ; //cause stack overflow - not returning(stop execution)
            return num + sumRange(num-1); //recursive call
        }
        console.log(sumRange(2))

//with recursion
function countDown(num){ 
    if(num <= 0){ //check of num <= 0, base case - stops execution
        console.log("All done!");
        return; //pop from the call stack, stop it 
    }
   console.log(num); //return the number
   num --; //subtract 1 from the number
   countDown(num); //call the fxn with num after subtraction
}
countDown(5)

// //without recursion
// function countDown2(num) { 
//     for(let i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }
// countDown2(6)

//recursive function 2
function sumRange (num) {
    if (num === 1) return 1; //base case
    return num + sumRange(num-1); //recursive call
}
console.log(sumRange(3))