//non-recursive solution
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}
console.log(factorial (3));

//recursive solution
function factorial2(num){
    if(num === 1) return 1 //base case
    return num * factorial(num -1 );
}
console.log(factorial2(4));