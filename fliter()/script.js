// .filter() = Creates a new array by filtering out elements


/*let numbers = [1,2,3,4,5,6,7];

let evenNums = numbers.filter(isEven);
console.log(evenNums);


function isEven(element){
    return element % 2  === 0 ;
}

*/

//one more example

/*const ages = [16,20,30,44,20];

const adultAge=ages.filter(isAdult);
console.log(adultAge);

function isAdult(element){
    return element>=20;
}
    */

// Last Examples

const words = ["apple","orange","banana","kiwi","pomagranite"];

const word = words.filter(getShortWords);
console.log(word)

function getShortWords(element){
    return element.length<=6;
}