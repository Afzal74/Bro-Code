// arrow Functions = a consise way to write functon expressions good for simple
//                  functions that you use only once 
//                  (parameters) => some code

/*const hello =()=>console.log("hello");

hello();

*/

/*const hello = (name ,age)=> {console.log(`name : ${name}`)
                            console.log(`age : ${age}`)};

hello("Afzal",20);

*/

//so thats a basics of arrow functions 

//NOw lets go for another example

/*setTimeout( ()=>{
    console.log("hello");
},3000);

*/

const numbers = [1,2,3,4 ,5,6];

const squares = numbers.map((element) => 
     Math.pow(element,2));

console.log (squares);
