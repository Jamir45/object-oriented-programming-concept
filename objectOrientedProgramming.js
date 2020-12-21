// Object Literal and access object property among the object method.
const object = {
   width: 300,
   height: 434,

   action: function () {
      console.log('I am Width: ' + this.width)
      console.log('I am Width: ' + this.height)
   }
}
object.action()


// "This" keyword explain.
const object2 = {
   width: 687,
   height: 543,
   action2: object.action
}
object2.action2()


// Factory Pattern in Object Oriented Programming in JavaScript
const factory = (width, height) => {
   return {
      width: width,
      height: height,
   
      action: function () {
         console.log('I am Width: ' + this.width)
         console.log('I am Width: ' + this.height)
         this.action2()
      },
      action2: function () {
         console.log('Multiply: ' + this.width * this.height)
      }
   }
}
factory(104,40).action()
factory(154,49).action()


// Constructor Pattern in Object Oriented Programming in JavaScript
const constructorPattern = function (width, height) {
   this.width = width
   this.height = height

   this.action = function () {
      console.log('I am Width: ' + this.width)
      console.log('I am Width: ' + this.height)
      this.action2()
   }
   this.action2 = function () {
      console.log('Multiply: ' + this.width * this.height)
   }
}
const constants1 = new constructorPattern(104,40).action()
constants1
const constants2 = new constructorPattern(364,04).action()
constants2


// Object oriented programmign with ES6 class

class Student {
   constructor(name, age) {
      this.name = name
      this.age = age
   }

   action() {
      return `My name is ${this.name} and I am ${this.age} years old.`
   }
}

const student = new Student('Jamir Hossain', 20)
console.log(student.action())
const student2 = new Student('Sadik Mia', 20)
console.log(student2.action())