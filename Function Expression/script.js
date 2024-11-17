// function declaration  =  define a reusable block of code that performs specific tasks
/*
function hello() {
    console.log("hello");
}
*/

// function expressions = a way to define functions as values or variables


//1. Callbacks is asynchronous operaations
//2. Higher order function
//3. closures
//4. Event listeners



/*const hello =  function(){
    console.log("hello");
}

hello();
*/


/*function hello(){
    console.log("hello");
}


setTimeout(hello, 3000);

*/

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function (element){
    return Math.pow(element,2);
}
 );
console.log(squares)


const cubes = numbers.map(function(element){
    return  Math.pow(element,3);
})

console.log(cubes);