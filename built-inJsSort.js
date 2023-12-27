console.log(["Freshia", "Lucy", "Mary", "Grace"].sort()); //built-In js sorting methods - works well for alphabets because its according to string Unicode code points
console.log([12,10,5,3,8].sort()) //wrong result - because here every item is converted into a string and then unicode is sorted

//built-in sort method accepts optional comparator function to tell js how to sort items
    //comparator looks at elements pair(a and b)
        //if it returns a negative number, a should come before b
        //if it returns a positive number, a should come after b
        //if it returns 0, a and b are the same as far as sort is concerned
        function numberCompare(num1, num2){
            return num1 - num2; //ascending order
            // return num2 - num1; //descending order
        }
       console.log( [6,4,7,12,24].sort(numberCompare));

function compareByLength(str1, str2){
    return str1.length - str2.length;
}

console.log(["name", "hell there", "how old are you?"].sort(compareByLength));
