//AKA Hash Maps- used to store key value pair. They are like arrays but keys aren't ordered.
//Big O (average,best case):TC. Insert 0(1), Deletion 0(1), Access 0(1) - HashTables are fast(constant time - '0(1)') and evenly distributes items
    //worst case O(n) 'linear time'-distributes unevenly eg items nested in 1 index - making it a list
//They're fast for finding, removing and adding new values unlike arrays
//NB: every programming lang has some sort of hash table DS, because of their speed(python has dictionaries, JS has objects and Map*, 'Java Go and Scala' have maps, Ruby has hashes)
//hash function-takes data of arbitrary size and spits out data of a fixed sizes
//good hash is: fast(constant time), doesn't cluster outputs at specific indices, but distributes uniformly, deterministic(same input yields same output)
//separate chaining(tutorial focus) and linear probing are 2 strategies(handles collision) used to deal with 2 keys that hash to the same index
//prime numbered arrays are used since there are minimum collisions compare to even.
//NB: keys are unique unlike values
// Set/Get methods in Hash Tables
        //set
//Accepts a key and a value
//hashes the key - figuring out where to store them
//store the key-val pair in the hash table array via separate chaining
        //get
//accepts a key
//hashes the key - to get the value back
//retrieves the key-val pair in the hash table
//if the key isn't found, returns undefined

// Keys/Values Methods
        //keys
//loops through the hash table array and returns an array of keys in the table
        //values
//loop through the hash table array and returns an array of values in the table

//Hash function
// function hash(key, arrayLen){
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for ( let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }

// console.log(hash("hello", 13));

class HashTable{
    constructor(size=53){//define the length of the hash table to be a prime number 53
        this.keyMap = new Array(size);//creates an array of that size and stores it in keyMap
    }
    _hash(key){//hash function
        let total = 0;
        let WEIRD_PRIME = 31;
        for ( let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key);//hashing the key
        if(!this.keyMap[index]){ //if there's nothing at that particular index
            this.keyMap[index] = []; //create an empty arr to hold items
        }
        this.keyMap[index].push([key, value]); //then push in the val
    }
    get(key){
        let index = this._hash(key);//hashes the key to index
        if(this.keyMap[index]){ //check to see if the keyMap has anything at that index
            for(let i = 0; i < this.keyMap[index].length; i++){ //loop through the subarray(nested in the array) and find the specific item
                if(this.keyMap[index][i][0] === key){ //compare the key (at index[0] in key-val) of i with the get-key(item 2 b retrieved)
                    return this.keyMap[index][i]; //returns the entire subarray
                    // return this.keyMap[index][i][1]; //returns the value
                }
            }
        }
        return undefined; //if there's no item
    }
    keys(){
        let keysArr = []; //array to collect all keys
        for (let i = 0; i < this.keyMap.length; i++){ //loop through every item in the keyMap
            if(this.keyMap[i]){ //if index has something...(skips empty indices)
                for (let j = 0; j < this.keyMap[i].length; j++){ //loop thr each subarray at that index
                    if(!keysArr.includes(this.keyMap[i][j][0])){ //push if there isn't similar keys-prevents pushing duplicates
                        keysArr.push(this.keyMap[i][j][0]); //push keyMap keys in the collection Arr
                    }
            }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = []; //array to collect all values
        for (let i = 0; i < this.keyMap.length; i++){ //loop through every item in the keyMap
            if(this.keyMap[i]){ //if index has something...(skips empty indices)
                for (let j = 0; j < this.keyMap[i].length; j++){ //loop thr each subarray at that index
                    if(!valuesArr.includes(this.keyMap[i][j][1])){ //push if there isn't similar value-prevents pushing duplicates
                    valuesArr.push(this.keyMap[i][j][1]); //push keyMap values in the collection Arr
                    }
            }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
// console.log(ht.set("hello world", "goodbye"));
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("plum", "#DDA0DD");
console.log(ht.get("yellow"));
console.log(ht.values());
console.log(ht.keys());

ht.keys().forEach(function(key){
    console.log(ht.get(key)); //returns key-val
});