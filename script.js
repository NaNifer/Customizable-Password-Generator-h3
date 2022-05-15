// Added global varitables so that they can be accessed outside of dialogBoxes()




// Dialog box function

function generatePassword() {

  let passwordLength = prompt("Please enter how many characters you would like your password to be.\p Your number must be between 8 characters and 128 characters.", "Enter a number, IE. '8, 12, 111'");
  passwordLength = parseInt(passwordLength);
  if (Number.isInteger(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    const useLower = confirm("Would you like to include LOWERCASE characters?");
    const useUppercae = confirm("Would you like to include UPPERCASE characters?");
    const useNumbers = confirm("Would you like to include NUMERIC characters?  IE., 0-9 ");
    const useSpecialChars = confirm("Would you like to include SPECIAL characters?  IE., $ & @ !");

    //  Input validated so that at least one character type should be selected

    if (useLower || useUppercae || useNumbers || useSpecialChars) {
      // const alphaLower = "abcdefghijklmnopqrstuvwxyz";
      // const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // const numbers = "0123456789";
      let passwordOutput = "";

      const specialChars = getSpecialChars(useSpecialChars, getRandomNumber(3));
    } else {
      alert("Whoops! You need to choose 'OK' for at least one charater type. Let's start again...");
    }

  }
  else {
    alert("Whoops! Your number must be between 8 - 128.");

  }

}



// function writePassword() 
// if useLower is true, And passwordOutput is < passwordLength, pull 1 character randomly from string alphaLower, and put it into passwordOutput
// if useUppercae is true, And passwordOutput is < passwordLength, pull 1 character randomly from string alphaUpper, and put it into passwordOutput
// if useNumbers is true, And passwordOutput is < passwordLength, pull 1 character randomly from string numbers, and put it into passwordOutput
// if specialChars is useSpecialChars, And passwordOutput is < passwordLength, pull 1 character randomly from string specialChars, and put it into passwordOutput
// shuffle paswordOutput, and put it into password


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getSpecialChars(useSpecialChars, numberOfSpecialChars) {
  const allSpecialChars = "~!@#$%^&*()_+-={}|[];<>?,./";
  const spaecialChars = [];
  if (useSpecialChars) {
    // TO DO: 
    // return random X number of allSpecialChars, based on the numberOfSpecialChar


  }
  return spaecialChars;
}


// ================================DONT TOUCH!!========================================
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);