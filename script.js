// Added global varitables so that they can be accessed outside of dialogBoxes()
var chosenNums;
var lowerCaseAsk;
var upperCaseAsk;
var numericAsk;
var specialAsk;

// Assignment Code -- generateBtn = "generate password" button
var generateBtn = document.querySelector("#generate");

// dialog buttons parameters
// - 8 characters and no more than 128 characters
// - character types to include in the password
// - whether or not to include lowercase, uppercase, 
// numeric, and/or special characters

generateBtn.addEventListener("click", dialogBoxes);

function dialogBoxes() {
  let askNums1 = prompt("Please enter how many characters you would like your password to be. It can be between 8 characters and no more than 128 characters.", "Enter a number, IE. '8, 12, 111'");

  if (Number(askNums1) !== NaN && Number(askNums1) >= 8 && Number(askNums1) <= 128) {
    chosenNums = Number(askNums1)
  }
  else {
    let askNums2 = prompt("Please enter a number between 8 - 128.", "Enter a number.");
    while (Number(askNums2) === NaN || Number(askNums2) < 8 || Number(askNums2) > 128) {
      askNums2 = prompt("Please enter a number between 8 - 128.", "Enter a number.");
    }
    chosenNums = Number(askNums2);
  }
let lowerCaseAsk = confirm("Would you like to include lowercase characters?");

let upperCaseAsk = confirm("Would you like to include uppercase characters?");

let numericAsk = confirm("Would you like to include numeric characters?  IE., 0-9 ");

let specialAsk = confirm("Would you like to include special characters?  IE., $ & @ !");
}

function writePassword() {

}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



//  NOT DEFINED:
// generatePassword()
// dialogBoxes()
// 




// Write password to the #password input





// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// Extra dialog box if I have time:
// let parameterSummary = confirm("The criteria that you chose for your password are as follows: \nThe password will be " + chosenNums + " charaters long.\n" + "It will utilize these characters" + specialAsk )

