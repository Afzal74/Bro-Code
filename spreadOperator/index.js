//spread operator = ... allows an iterable such as an array or string to be expanded
//                  into seperate elemnents
//                  (unpacks the elements)

/*let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
let manimum = Math.min(...numbers);

console.log(maximum);
console.log(manimum);

*/


let userName = "Afzal Basheer";

let letters =  [...userName].join("-");//seperating and joinig

console.log(letters);

//one more example

let fruits = ["apple","banana","mango"];
let cars = ["bmw","audi","thar"];

let fruit = [...fruits,...cars].join("-");

console.log(fruit);
