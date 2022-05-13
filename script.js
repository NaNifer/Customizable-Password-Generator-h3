// Added global varitables so that they can be accessed outside of dialogBoxes()
var chosenNums = ""
var lowerCaseAsk = ""
var upperCaseAsk = ""
var numericAsk = ""
var specialAsk = ""

// Assignment Code -- generateBtn = "generate password" button
var generateBtn = document.querySelector("#generate");



// Event listener for dialogBoxes
generateBtn.addEventListener("click", dialogBoxes);

// Dialog box function
function dialogBoxes() {
  let askNums1 = prompt("Please enter how many characters you would like your password to be.\p Your number must be between 8 characters and 128 characters.", "Enter a number, IE. '8, 12, 111'");

  if (Number.isInteger(parseInt(askNums1)) == true && parseInt(askNums1) >= 8 && parseInt(askNums1) <= 128) {
    chosenNums = parseInt(askNums1)
  }
  else {
    let askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");

    while (Number.isInteger(parseInt(askNums2)) == false || parseInt(askNums2) < 8 || parseInt(askNums2) > 128) {
      askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");
    }
    chosenNums = parseInt(askNums2);
  }

  lowerCaseAsk = confirm("Would you like to include LOWERCASE characters?");

  upperCaseAsk = confirm("Would you like to include UPPERCASE characters?");

  numericAsk = confirm("Would you like to include NUMERIC characters?  IE., 0-9 ");

  specialAsk = confirm("Would you like to include SPECIAL characters?  IE., $ & @ !");


  //  ********** THEN my input should be validated and at least one character type should be selected
  // The following loop validation is not working:

  while ((lowerCaseAsk || upperCaseAsk || numericAsk || specialAsk) !== true) {
    var validateInput = alert("You MUST choose at least one type of charaters to use. Let's try that again...");
    lowerCaseAsk = confirm("Would you like to include lowercase characters?");
    upperCaseAsk = confirm("Would you like to include uppercase characters?");
    numericAsk = confirm("Would you like to include numeric characters?  IE., 0-9 ");
    specialAsk = confirm("Would you like to include special characters?  IE., $ & @ !");
  }
}





// Global varitables for the characters in the password
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";



// // Event listener for generate button
// generateBtn.addEventListener("click", writePassword);




// function writePassword() {
// }


//   var password = generatePassword();


//   // Finds the element, need to append
//   var passwordText = document.querySelector("#password");



//   passwordText.value = password;



//  NOT DEFINED:
// generatePassword()
// dialogBoxes()
// 




// Write password to the #password input




// Extra dialog box if I have time:
// let parameterSummary = confirm("The criteria that you chose for your password are as follows: \nThe password will be " + chosenNums + " charaters long.\n" + "It will utilize these characters" + specialAsk )

