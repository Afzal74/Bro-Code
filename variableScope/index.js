//Variable Scope = where a variable is recognised
//                  and accessible (local vs Global)


//we cant use two declarations of same variable in global
/* x=1;
    x=2;
*/


//Also we can declare in a function which having a different scope

function function1(){
    let x=1;
    console.log(x);
}
function function2(){
    let x=2;
    console.log(x);
}

function2();