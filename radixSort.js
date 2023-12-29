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
//getDigit(num, place)- takes a number and a position and returns the digit at the given place value(position) eg getDigit(23543,2); //5