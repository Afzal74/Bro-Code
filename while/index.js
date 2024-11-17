//While loop = Repeat some code while some condition is True 

/*let userName = "";

while(userName === ""){
    userName = window.prompt("Enter your userName");
}
console.log(userName);

*/
//do-while loop



let loggedIn = false; // Initially set to false so the loop executes
let userName;
let password;

while (!loggedIn) {
    userName = window.prompt("Enter your user name");
    password = window.prompt("Enter your password");

    if (userName === "myusername" && password === "myPassword") {
        console.log("You are logged in");
        loggedIn = true;
    } else {
        console.log("Invalid credentials");
    }
}
