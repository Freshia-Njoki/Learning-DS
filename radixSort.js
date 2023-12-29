//BIG 0: Runtime(best,average,worst) - 0(nk), space complexity - 0(n + k)
    //n - length of the array (number of numbers we're sorting)
    //k - number of digits - impacts the iterations;number of bucketing the nums
            //k = log n; 0(n + k) = 0(n log n)
//is special sorting alg(integer sorting alg) that works on lists of numbers- we don't make comparisons btwn elements
//it exploits the fact that information(can be string, images, numbers) about the size of a number is encoded in the number of digits(base 10-integers)
//more digits means a bigger number

//create 10 diff buckets(0-9) - rep all possible numbers in base 10
//go through the entire list numbers (in the arr) and first look at the rightmost digit(if num has greater than one digit "352", otherwise group that only num "5"), then group them in buckets based on that rightmost number without sorting them
//form them back into a list maintaining the order that they are in
//repeat the process looking at the second digit from the right([n-1])
//one digit numbers(don't have second digit from the right eg 7) are placed in the 0 bucket - we assume they are preceded with 0(eg 07)
//then group them in the buckets base on that number
//reform into list
//repeat with the 3rd digit from the right-smaller numbers missing the 3rd digit are placed in the 0 bucket
//reform into list
//repeat the process depending on the number of digits in the largest number eg 34525 - 5 times

//NB: for base 7 we'll have 7 buckets for base 10 = 10 buckets

//RADIX SORT HELPERS
//Helper 1-getDigit(num, place)- takes a number and a position and returns the digit at the given place value(position) eg getDigit(23543,2); //5
function getDigit(num, i){
    //abs-assumes negative nums, pow converts the ith digit to its place value ("hundreds" for 3 in 2344-300 ) %10 (modulo-remainder after 10 goes in several times),Floor-round down
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log(getDigit(2344,0));


//Helper 2-How many digits are in a number-ordering times into buckets depends on the largest(number of digits) number
//digitCount(num)-returns the number of digits in num
    //first one returns how many digits are in a single number
    //second one will use the digitCount to figure out the largest number in the entire list

function digitCount(num){ // If num is zero, it assumes it has one digit. For all other non-zero integers, it calculates the count by taking the logarithm base 10 of the absolute value of the number, rounding it down, and adding 1 to get the final digit count.
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;//as log base 2, log 10 returns the exponent to which 10 must be raised to produce the given number in log10 x = n - 10^n = x, then 1 is added to account for zero indexing
}
console.log(digitCount([5356523])); //7

//Helper 3-returns the number of digits in the largest numbers in the list(uses digitCount())
    //mostDigits([2344,253,1,35]); //4      mostDigits([12,23,61,35]); //2

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));//checks for the maximum digit btn the current maxDigits value and i-th digitCount in nums
    }
    return maxDigits;//returns the number of digits in the max number
}
console.log(mostDigits([423,54,142345,4])); //6


//RADIX SORT PSEUDOCODE
//define a function that accepts list of numbers
//figure out how many digits the largest number has :call helper mostDigits()
//loop from k = 0 up to this largest number of digits
//for each iteration of the loop:
    //create buckets(empty array) for each digit(0-9)
    //place each number in the corresponding bucket(array of arrays) based on its kth digit
//replace our existing array with values in our buckets, starting with 0 and going up to 9
//return list at the end!

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){ //passed in getDigit(loops thr' each digit) helper
        let digitBuckets =  Array.from({length : 10}, () => []); //create buckets; define an array of length 10 with each subarray being empty
        for (let i = 0; i < nums.length; i++){ //loop through each number
            //getDigit(nums[i], k);  //get the value of each number at position k
            //after getting the i-th val, push that number at that index in the bucket
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]); 
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets); //reassign num - after pushing to bucket recollect into a new array and repeat-loop to the second,third,... rightmost digit
                        //spread places items all in one array rather than in separate arrays
        console.log("radixSort", nums);
    }
    return nums;

}
console.log(radixSort([234,3,436,23,36,346,2,1,37]));
