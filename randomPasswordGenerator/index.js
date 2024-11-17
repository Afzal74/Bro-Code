//RAndoom Password Generator

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars ="!@#$%^&*()_+-";
    
    let allowedChars = "";
    let Password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";



    if(length<=0){
        return`(password length atlesat 1) `;
    }
    if(allowedChars.length=== 0){
        return `(at least one set of character must be selected)`;
    }

    for(let i =0 ; i<length ; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        Password += allowedChars[randomIndex]; 
    }
    return Password;
}


const PasswordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const Password = generatePassword(PasswordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated Password : ${Password}`);