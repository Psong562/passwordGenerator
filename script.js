
let generateBtn = document.querySelector(`#generate`);

// Setting Constants in arrays
const lower = "abcdefghijklmopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "!@#$%^&*()-_=+[]{};:',./<>?";

let confirmChoices = "";

// determine password length and choices 
const generatePassword = () => {
  console.log(`button was clicked`)
  let passwordLength = prompt("Choose the lenght of your password(must be 8-128 characters).");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert(`Password must be between 8-128 Characters`);
  } else {
    let confirmLower = confirm(`Would you like to use lower case characters?`);
    if (confirmLower) {
      confirmChoices += lower
    };
    let confirmUpper = confirm(`Would you like to use UPPER case characters?`);
    if (confirmUpper) {
      confirmChoices += upper
    };
    let confirmSymbol = confirm(`Would you like to use Symbols?`);
    if (confirmSymbol) {
      confirmChoices += symbol
    };
    let confirmNumber = confirm(`Would you like to use Numbers?`);
    if (confirmNumber) {
      confirmChoices += number
    };


    // if false has to have at least one choice to generate password
    if (
      confirmLower === false &&
      confirmUpper === false &&
      confirmSymbol === false &&
      confirmNumber === false
    ) {
      alert(`Please choose at least one choice!`);
      generatePassword();
    }
  }
  // Depending on choices creates password
  let pwd = ""
  for (let i = 0; i < passwordLength; i++) {
    pwd += confirmChoices.charAt(Math.floor(Math.random() * confirmChoices.length))
  }
  return pwd

}
// function to write password and enter in text box
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector(`#password`);
  passwordText.value = password;
}

// On click generates password
generateBtn.addEventListener(`click`, writePassword);
