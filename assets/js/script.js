// STARTER CODE
// var generateBtn will call on writePassword on click
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// writePassword is invoked, calls on generatePassword, and var passwordText links to html element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// MY CODE
// 
function generatePassword() {
  let password = "";
  let passwordLength = prompt("Please enter how many characters you would like your password to be.\p Your number must be between 8 characters and 128 characters.", "Enter a number, IE. '8, 12, 111'");
  passwordLength = parseInt(passwordLength);
  if (Number.isInteger(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    const useLower = confirm("Would you like to include LOWERCASE characters?");
    const useUppercase = confirm("Would you like to include UPPERCASE characters?");
    const useNumbers = confirm("Would you like to include NUMERIC characters?  IE., 0-9 ");
    const useSpecialChars = confirm("Would you like to include SPECIAL characters?  IE., $ & @ !");

    //  Input validated so that at least one character type should be selected
    if (useLower || useUppercase || useNumbers || useSpecialChars) {
      const chosenCharString = createChosenCharString(useLower, useUppercase, useNumbers, useSpecialChars);
      password = createPassword(passwordLength, chosenCharString);
    } else {
      alert("Whoops! You need to choose 'OK' for at least one charater type. Let's start again...");
    }
  }
  else {
    alert("Whoops! Your number must be between 8 - 128.");
  }
  return password;
}

// Function calls on arguments in generatePassword to create a custom string to use for writing the password
function createChosenCharString(useLower, useUppercase, useNumbers, useSpecialChars) {
  // Creates empty string, which will be later recieve input from the character variables below
  let chosenCharString = "";
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const allSpecialChars = "~!@#$%^&*()_+-={}|[];<>?,./";
  // Goes through each charater type chosen by the user, and puts it into chosenCharString
  if (useLower) {
    chosenCharString = alphaLower.concat(chosenCharString);
  }
  if (useUppercase) {
    chosenCharString = alphaUpper.concat(chosenCharString);
  }
  if (useNumbers) {
    chosenCharString = numbers.concat(chosenCharString);
  }
  if (useSpecialChars) {
    chosenCharString = allSpecialChars.concat(chosenCharString);
  }
  return chosenCharString;
}

// Function actually creates the password using input from other functions
function createPassword(length, chosenCharString) {
  let password = '';
  const charactersLength = chosenCharString.length;
  // Goes through loop until all slots are filled
  for (let i = 0; i < length; i++) {
    // Adds a random character from chosenCharString to password
    password += chosenCharString.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}