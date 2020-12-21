// Apply Method

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

let result2 = callObj.anotherObj.fun.apply(callObj,['You are selected']);
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

let result3 = Obj1.fun.apply(Obj2, ['You are selected', 'on Our Party at', 23]);
console.log(result3);
