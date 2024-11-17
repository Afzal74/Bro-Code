// rest parameters = (...rest) allow a function work with a variable number of 
//                      arguments by bundling them into an array
//                  spread = expands an array into sperate elements 
//                  rest = bundles seperate elements into an array


/*function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}


const food1 = "pizza1";
const food2 = "pizza2";
const food3 = "pizza3";
const food4 = "pizza4";

openFridge(food1,food2,food3,food4);\

*/

function sum (...Numbers){
    let result =0;
    for(let number of Numbers){
         result += number;
    }
    return result;
}


const total = sum(1,2,3,4);
console.log(total);
