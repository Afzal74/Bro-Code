// Constructor = Special method for defining the properties and methods of objects
// Use Pascal Notation: OneTwoThree


function Car(make, moder, year, color){
    this.make = make;
    this.moder= moder;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.moder}`);}
}

const car1 = new Car("ford","mustang",2024,"red");
const car2 = new Car("maruti","suzuki",2024,"white");

console.log(car1.make);
console.log(car1.moder);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.moder);
console.log(car2.year);
console.log(car2.color);



car1.drive();
car2.drive();

