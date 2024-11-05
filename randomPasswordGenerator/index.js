//RAndoom Password Generator

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars ="!@#$%^&*()_+-";
    
    let allowedChars = "";
    let Password = "";



    return ''
}


const PasswordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const Password = generatePassword(PasswordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated Password : ${Password}`);