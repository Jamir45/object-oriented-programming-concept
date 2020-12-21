function Person (name, roll, email) {
    this.name = name,
    this.roll = roll,
    this.email = email
}
let person1 = new Person ('Jamir Hossain', 56, 'jamirhossain008@gmail.com');
let person2 = new Person ('Shima Akhter', 57, 'shimaakhter@gmail.com');
let person3 = new Person ('Sadik Mia', 66, 'jamirhossain008@gmail.com');
let person4 = new Person ('Jamir Hossain', 56, 'jamirhossain008@gmail.com');
console.log(person1, person2, person3, person4);


// Inheritance 
function Person2 (name, roll, email) {
    this.name = name,
    this.roll = roll,
    this.email = email
}
function Teacher (name, roll, email, subject) {
    Person2.call(this, name, roll, email);
    this.subject = subject;
}

let result1 = new Teacher ('Taizul Islam', 56, 'taizulislam@gmail.com', 'Electronics');
console.log(result1);



// Constructor Function and Inheritance in ES6

class Person3 {
    constructor (name, roll, email) {
    this.name = name,
    this.roll = roll,
    this.email = email
    }
}

class Teacher2 extends Person3 {
    constructor (name, roll, email, subject) {
        super(name, roll, email);
        this.subject = subject;
    }
}

let result = new Teacher2('Taizul Islam', 57, 'taizulislam@gmail.com', 'Electronics');
console.log(result);
