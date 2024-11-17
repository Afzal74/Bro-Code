//Fucntion = A section of reusable code 
//          declare code once , use it whenever you want 
//          call the function to execute the code;

/*function happyBirthday(username,age){
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log(`Happy birthday to you${username}`)
    console.log("Happy birthday to you")
    console.log(`Happy birthday to you${age}`)
}

happyBirthday("Afzal BAsheer",25);
happyBirthday("sponge bob",30); */


//return Keyword

function add (x,y){
    let result = x + y;
    return result;
}
let answer = add(2,3);
console.log(answer);


function isEven(x){
    return x%2===0 ? true:false;
}

console.log(isEven(4));

//lets check our email contains '@' or not


function isValidEmail(email){
    if(email.includes("@")){
        return true ;
    }
    else{
        return false ;
    }
}

console.log(isValidEmail("Brocode@fake.com"))


