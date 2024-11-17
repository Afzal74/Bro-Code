//Object  = A collection of related properties and / or  methods 
//          can represent real world objects (people, products, places)
//          property = what they have
//          methods = what they do
//          use . to access properties / methods
//          objects ={key:value,
//                  function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log("Hi I am Spongebob!");
    },
    eat: function(){
        console.log("I am eating a Krabby Patty!");
    }
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log(`Hi I am Patrick!`),
    eat: () => console.log("I am eating a sandwich!")
}

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();
