// callback = a function that passed as an arguement
//              to another function
//              used to handle asynchronous operations :
//              1.Reading a file
//              2.Network requests
//              3.Interacting with database
//              "Hey,When you're done , call this next "


/*hello(wait);
function hello(callback){
    console.log("hello");
    callback();
}

function wait(){
    console.log("wait");
}
    */

sum(displayPage,1,2)

function sum (callback , x , y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result ;
    console.log(result);
}