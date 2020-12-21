// Bind Method

let callObj = {
    name:'Jamir Hossain',
    roll:456,
    email:'jamirhossain008@gmail.com',
    anotherObj : {
        name:'Shima Akhter',
        email:'shimaakhter@gmail.com',
        fun:function (arg) {
            return console.log(`Name : ${this.name} and Email : ${this.email} ${arg}`)
        }
    }
} 
let result = callObj.anotherObj.fun();
console.log(result);

let newFunction = callObj.anotherObj.fun.bind(callObj);
let result2 = newFunction("Hi Yuo are selected")
console.log(result2);
 

let Obj1 = {
    name:'Shima Akhter',
    email:'shimaakhter@gmail.com',
    fun:function (arg1, arg2, arg3) {
        console.log(`Name : ${this.name} and Email : ${this.email} ${arg1} ${arg2} ${arg3}`)
    }
}

let Obj2 = {
    name:'Jamir Hossain',
    roll:456,
    email:'jamirhossain008@gmail.com',
}

let newFunction2 = Obj1.fun.bind(Obj2);
let result3 = newFunction2('You are selected', 'in Our Party at april on', 23)
console.log(result3);
