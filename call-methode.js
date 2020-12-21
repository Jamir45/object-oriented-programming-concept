// Call Method

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

let result2 = callObj.anotherObj.fun.call(callObj,'You are selected');
console.log(result2);
 

let Obj1 = {
    name:'Shima Akhter',
    email:'shimaakhter@gmail.com',
    fun:function (arg) {
        console.log(this.name, this.email, arg)
    }
}

let Obj2 = {
    name:'Jamir Hossain',
    roll:456,
    email:'jamirhossain008@gmail.com',
}

let result3 = Obj1.fun.call(Obj2, 'You are selected');
console.log(result3);
