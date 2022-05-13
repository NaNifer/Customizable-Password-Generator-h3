// Added global varitables so that they can be accessed outside of dialogBoxes()
// var passwordLength = ""
// var lowerCaseAsk = ""
// var upperCaseAsk = ""
// var numericAsk = ""
// var specialAsk = ""


// // DIALOG BOXES

// // Assignment Code -- generateBtn = "generate password" button
// var generateBtn = document.querySelector("#generate");

// // Event listener for dialogBoxes
// generateBtn.addEventListener("click", dialogBoxes);

// Dialog box function
// function dialogBoxes() {
//   let askNums1 = prompt("Please enter how many characters you would like your password to be.\p Your number must be between 8 characters and 128 characters.", "Enter a number, IE. '8, 12, 111'");

//   if (Number.isInteger(parseInt(askNums1)) == true && parseInt(askNums1) >= 8 && parseInt(askNums1) <= 128) {
//     passwordLength = parseInt(askNums1)
//   }
//   else {
//     let askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");

//     while (Number.isInteger(parseInt(askNums2)) == false || parseInt(askNums2) < 8 || parseInt(askNums2) > 128) {
//       askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");
//     }
//     passwordLength = parseInt(askNums2);
//   }

//   lowerCaseAsk = confirm("Would you like to include LOWERCASE characters?");

//   upperCaseAsk = confirm("Would you like to include UPPERCASE characters?");

//   numericAsk = confirm("Would you like to include NUMERIC characters?  IE., 0-9 ");

//   specialAsk = confirm("Would you like to include SPECIAL characters?  IE., $ & @ !");

//   //  Input validated so that at least one character type should be selected

//   while ((lowerCaseAsk || upperCaseAsk || numericAsk || specialAsk) !== true) {
//     var validateInput = alert("You MUST choose at least one type of charaters to use. Let's try that again...");
//     lowerCaseAsk = confirm("Would you like to include lowercase characters?");
//     upperCaseAsk = confirm("Would you like to include uppercase characters?");
//     numericAsk = confirm("Would you like to include numeric characters?  IE., 0-9 ");
//     specialAsk = confirm("Would you like to include special characters?  IE., $ & @ !");
//     if(specialAsk){
//       console.log('specialAsk', specialAsk)
//     }
//   }
// }

// WRITING THE PASSWORD

// Global varitables for the characters in the password
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+-={}|[];<>?,./";
var passwordLength = ""
let choosenCharac = []

let password = document.getElementById("password");

password.innerHTML = '' //final password created

let finalPassword = writePassword();


// // Event listener for generate button
generateBtn.addEventListener("click", finalPassword);


// Grabs 2 characters from symbol string, if true
function writePassword() {

  let askNums1 = prompt("Please enter how many characters you would like your password to be.\p Your number must be between 8 characters and 128 characters.", "Enter a number, IE. '8, 12, 111'");

  if (Number.isInteger(parseInt(askNums1)) == true && parseInt(askNums1) >= 8 && parseInt(askNums1) <= 128) {
    passwordLength = parseInt(askNums1)
  }
  else {
    let askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");

    while (Number.isInteger(parseInt(askNums2)) == false || parseInt(askNums2) < 8 || parseInt(askNums2) > 128) {
      askNums2 = prompt("Whoops! Your number must be between 8 - 128.", "Number");
    }
    passwordLength = parseInt(askNums2);
  }

  let lowerCaseAsk = confirm("Would you like to include LOWERCASE characters?");
  if (lowerCaseAsk) {
    choosenCharac.push(alphaLower)
  }
  console.log(choosenCharac)

  let upperCaseAsk = confirm("Would you like to include UPPERCASE characters?");
  if(upperCaseAsk){
    choosenCharac.push(alphaUpper)
  }

  let numericAsk = confirm("Would you like to include NUMERIC characters?  IE., 0-9 ");

  let specialAsk = confirm("Would you like to include SPECIAL characters?  IE., $ & @ !");

  if (choosenCharac.length < 1){
    // do something
  }

  // if (specialAsk) {
  //   for (var i = 0; i <= 1; i++) {
  //     let randomNumber = Math.floor(Math.random() * symbols.length);
  //     choosenCharac += symbols.substring(randomNumber, randomNumber + 1);

  //   }
  // }
  // // Grabs 2 characters from symbol string, if true
  // if (numericAsk) {
  //   for (var i = 0; i <= 1; i++) {
  //     let randomNumber = Math.floor(Math.random() * numbers.length);
  //     choosenCharac += numbers.substring(randomNumber, randomNumber + 1);

  //   }
  // }
  // // Grabs 2 characters from symbol string, if true
  // if (upperCaseAsk) {
  //   for (var i = 0; i <= 1; i++) {
  //     let randomNumber = Math.floor(Math.random() * alphaUpper.length);
  //     choosenCharac += alphaUpper.substring(randomNumber, randomNumber + 1);

  //   }
  // }
  // // TO DO: Needs to grab remaining characters from lowercase string, if true
  // if (lowerCaseAsk) {
  //   for (var i = 0; i <= 1; i++) {
  //     let randomNumber = Math.floor(Math.random() * alphaLower.length);
  //     choosenCharac += alphaLower.substring(randomNumber, randomNumber + 1);


  //   }

  // }
  // return
}



//   


//   // Finds the element, need to append
//   var passwordText = document.querySelector("#password");



//   passwordText.value = password;



//  NOT DEFINED:
// generatePassword()
// 




// Write password to the #password input




// Extra dialog box if I have time:
// let parameterSummary = confirm("The criteria that you chose for your password are as follows: \nThe password will be " + passwordLength + " charaters long.\n" + "It will utilize these characters" + specialAsk )

