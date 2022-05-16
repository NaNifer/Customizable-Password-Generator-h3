// Starter Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// My Code

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

function createChosenCharString(useLower, useUppercase, useNumbers, useSpecialChars) {
  let chosenCharString = "";
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const allSpecialChars = "~!@#$%^&*()_+-={}|[];<>?,./";
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

function createPassword(length, chosenCharString) {
  let password = '';
  const charactersLength = chosenCharString.length;
  for (let i = 0; i < length; i++) {
    password += chosenCharString.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}