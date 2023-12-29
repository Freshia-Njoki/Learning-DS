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
    fullName() {//instance method
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {//instance method
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOUR ARE EXPELLED!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score,score2){//instance method
        this.scores.push(score,score2);
        return this.scores; 
    }
    calculateAverage() {//instance method
        let sum =this.scores.reduce(function(a,b){return a+b;}); //reduce takes each item and adds together and create a total
        return sum/this.scores.length;
    }
    static enrollStudents(...students){ //class method - utility function: not related to single instance-we pass many students
        return "You're enrolled!"
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
console.log(secondStudent.enrollStudents); //won't work since its a utility function-cannot be used in instances of a class
console.log(Student.enrollStudents());

//instance methods-provide specific functionality to instance

//array instance called data
data = new Array(1,2,4);
data.push(3);//array instance(data) with push method
console.log(data);


//class methods - we use static keyword which defines a static method for a class, used to create utility functions(not related to single individual instance) for an app
//static methods are called without instantiating their class and CANNOT be called through a class instance
//are called on class itself not individual instance