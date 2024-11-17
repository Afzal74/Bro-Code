//String slicing = creating a substring from a portion of another string
//                  string.slice(start,end);

const fullName = 'Afzal Basheer';

/*let  firstName = fullName.slice(0,5);
let lastName = fullName.slice(6,13);
console.log(firstName);//Afzal
console.log(lastName);

*/

/*let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice (fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);
*/

//Excersice

const email ="appuafzal777@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);