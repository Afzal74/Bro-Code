// reduce() =  reduce the elements of an array to a single value

/*const prices = [ 5,20,33,12,31];

const total = prices.reduce(sum);
console.log(total.toFixed(2));


function sum (accumulator, element){  //previous ==> accumulator , next element=element
    return accumulator + element;
}

*/

//Lets find grades

const  grades = [75 , 50, 100, 65,95];

const maximum  = grades.reduce(maximumGrade);
console.log(maximum)

function maximumGrade(accumulator,element){
    //return accumulator > element ? accumulator:element;

    return Math.max(accumulator,element);
}