//Naive String Search - count the number of times a smaller string appears in a longer String
    //involves checking pairs of characters individually
    //long string: wowomgzomg short string: omg


console.log("Freshia" [0]) // linearly for one
//NAIVE STRING SEARCH PSEUDOCODE
//Define a function that takes 2 strings(larger string and the pattern we're looking for)
//loop over the longer string
//loop over the shorter string
//if the characters don't match, break out of the inner loop
//if the characters do match, keep going
//if you complete the inner loop and find a match, increment the count of matches
//return the count

//IMPLEMENTATION
function naiveSearch(long, short) {
    var count = 0;
    for( let i = 0; i < long.length; i++){ 
        for(let j = 0 ; j < short.length; j++){ //j increases 3 times(lol) then resets as i increases once
            // console.log(i,j)//index
            // console.log(long[i], short[j])// real values - compares long[0] =l 3 times (lol pattern in short)
            console.log(short[j], long[i+j]);
            if(short[j] !== long[i+j]){ //if j = [2], make i [0+2]
                console.log("BREAK!") // see where breaks happens
                break; //anytime there is no a match break the loop - j resets (ie. starts from [0]=l again)
            }
            if(j === short.length - 1){//we know we've finished if j is 2(in lol) Ie. its last index 
                console.log("FOUND ONE!");
                count ++;
        }
    }
}
return count;

}
console.log(naiveSearch("lorie loled", "lol"))
