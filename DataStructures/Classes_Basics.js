//JS doesn't support OOP - so we gonna use ES2015 classes to implement data structures
//constructor - method to create new objects(will be used to instantiate new class instances)
//Class - blueprint for creating objects with predefined properties and methods


class Student { //Blueprint - 'defines object properties 'how it should be
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0; //late in class is false at first
        this.scores = [];
    }
    //instance method
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOUR ARE EXPELLED!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score,score2){
        this.scores.push(score,score2);
        return this.scores; 
    }
    calculateAverage() {
        let sum =this.scores.reduce(function(a,b){return a+b;}); //reduce takes each item and adds together and create a total
        return sum/this.scores.length;
    }
}

//creating objects from classes - instantiating using a new keyword  
let firstStudent = new Student("Colt", "Steele", 3);
console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate()); //late 1 time
// console.log(firstStudent.markLate()); //late 2 times
// console.log(firstStudent.markLate()); //late 3 times, hence expelled

// console.log(firstStudent.firstName);
let secondStudent = new Student("Blue", "Steele");
secondStudent.grade = 4;
console.log(secondStudent);
console.log(secondStudent.addScore(92,43));
console.log(secondStudent.calculateAverage());

//instance methods-provide specific functionality to instance

//array instance called data
data = new Array(1,2,4);
data.push(3);//array instance(data) with push method
console.log(data);