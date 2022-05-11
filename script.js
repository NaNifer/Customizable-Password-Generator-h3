// Assignment Code -- generateBtn = "generate password" button
var generateBtn = document.querySelector("#generate");



// dialog buttons parameters
// - 8 characters and no more than 128 characters
// - character types to include in the password
// - whether or not to include lowercase, uppercase, 
// numeric, and/or special characters

generateBtn.addEventListener("click", dialogBoxes);

function dialogBoxes() {
  let askNums1 = prompt ("Please enter how many characters you would like your password to be. It can be between 8 characters and no more than 128 characters.", "Enter a number, IE. '8, 12, 111'");

  if (Number(askNums1) === NaN ) {
    let askNums2 = prompt ("Please enter a number between 8 - 128.", "Enter a number.");
      if (Number(askNums2) === NaN ) { 
        // Set up loop
      }
      else {
        let chosenNums = Number(askNums2);
      }
  }
  else {
    let chosenNums = Number(askNums1);
  }
}

let lowerCaseAsk = confirm("Would you like to include lowercase characters?");

let upperCaseAsk = confirm("Would you like to include uppercase characters?");

let numericAsk = confirm("Would you like to include numeric characters?  IE., 0-9 ");

let specialAsk = confirm("Would you like to include special characters?  IE., $ & @ !");



console.log(askNums1)
console.log(askNums2 + "two")
console.log(lowerCaseAsk)





//  NOT DEFINED:
// generatePassword()
// dialogBoxes()
// 




// Write password to the #password input



// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


