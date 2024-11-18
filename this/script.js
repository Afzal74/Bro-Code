//this = referance to the object wher THIS IS used
//         (the object depends on the immediate context)
//          person.name = this.name


const person1 ={
    name : "sponge-bob",
    favFood : "handburgers",
    sayHello : function(){console.log(`hi i am ${this.name}`)},
    eat : function(){console.log(`IAM  EAtiING ${this.favFood}`)}
}
const person2 ={
    name : "AFzal",
    favFood : "handburgers",
    sayHello : function(){console.log(`hi i am ${this.name}`)},
    eat : function(){console.log(`${this.name} EAtiING ${this.favFood}`)}
}
person2.sayHello();
person2.eat();