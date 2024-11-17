// Method  Chaining = Calling one method after another in one continous line 
//                      line of a code


//No Method Chaining 

/*let userName = window.prompt("Enter your username");
userName = userName.trim();
let letter = userName.charAt(0);
letter =letter.toUpperCase();
let extraLetters = userName.slice(1);

extraLetters =extraLetters.toLowerCase();

userName = letter +extraLetters;
console.log(userName);
*/

//Mehtod Chaining

let userName = window.prompt("Enter your username");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName)
