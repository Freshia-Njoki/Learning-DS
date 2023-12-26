//JS searches - indexOf, includes, find, findIndex

usernames= ["Freshia", "Grace", "Mary", "Lucy"];
console.log(usernames.indexOf("Lucy"))
console.log(usernames.includes("Luccy"))

//LINEAR SEARCH- 1 item at a time either from front or behind
// pseudocode
    //function accepts an array and a value
    //loop through the array and check if the current arr element is equal to the value
    //if it is, return the index at which the element is found
    //if the value is never found, return -1
function search (arr, num) {
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i])
        {
            return i;
        }
    }  
    return -1;
}

console.log(search([2,3,4,5,64,35,53], 35))