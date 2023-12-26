//counting characters in a string
function charCount(str){
    var obj = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if ( /[a-z0-9]/.test(char) ) {
            if(obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    };
    return obj;
}
console.log(charCount("My name is Freshia Njoki"));

//implementation 2 - look back and refactor
function charCount2(str){
    let obj = {};
    for(let char of str){
        // char = char.toLowerCase();
        // if ( /[a-z0-9]/.test(char) ) 
        if ( isAlphaNumeric(char) ) //borrows from below function
        {
            char = char.toLowerCase(); //first check oif isAlphaNumeric then lowercase it
            obj[char] = ++obj[char] || 1; //if there's a value(letter) already add 1 if there's not set it to one
            // if(obj[char] > 0){
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // };
        }
    };
    return obj;
}
console.log(charCount2("Hello hi!"));

//Ascii code
console.log("hi".charCodeAt(0))//char code of char at index 0

//charCode - 1.37% faster
function isAlphaNumeric(char) {
    var code;
    for(var i =0, len = char.length; i < len; i++) {
        code = char.charCodeAt(i);
        if( !(code > 47 && code < 58) && //numeric (0-9)
            !(code > 64 && code < 91) && //upper alpha (A-Z)
            !(code > 96 && code < 123)) { //lower alpha (a-z)
        return false;
        }
    }
    return true;
}
console.log(isAlphaNumeric("hello"));
console.log(isAlphaNumeric("hello !"));

//regex - 55% slower
function isAlphaNumeric2(str){
    return /^[a-zA-Z0-9]+$/.test(str);
}
console.log(isAlphaNumeric2("hi !"));