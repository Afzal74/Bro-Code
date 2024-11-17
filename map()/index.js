//map() =  accepts a callback  and applies that function to each element of an 
//          array , then return a new array 

/*const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
console.log(squares);

function square (element){
    return Math.pow(element,2);
}

*/


//lets format date using map method

const dates = ["22-2024-7" ,"30-2004-7","31-2000-4"];

const date = dates.map(format);

function format (element){
    const parts = element.split("-");
    console.log(`${parts[0]}/ ${parts[2]} / ${parts[1]}`);
}
