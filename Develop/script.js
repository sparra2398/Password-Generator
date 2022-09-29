// Assignment code here
function promptUser(){

  var passwordLength = parseInt (prompt('How long of a password would you like?'))
  if(passwordLength < 8 || passwordLength > 132 || isNaN(passwordLength) || passwordLength === ""){
    alert("Must select a valid length.");
    return;
  }

  var includeSpecialChars = confirm("Would you like to include special characters?");
  var includeUpperChars = confirm("Would you like to include uppercase characters?");
  var includeLowerChars = confirm("Would you like to include lowercase characters?");
  var includeNumberChars = confirm("Would you like to include numeric characters?");
  
  var options = {
    passwordLength: passwordLength,
    includeSpecialChars: includeSpecialChars,
    includeUpperChars: includeUpperChars,
    includeLowerChars: includeLowerChars ,
    includeNumberChars: includeNumberChars
  }
  return options;
}
function generatePassword(){
  var options = promptUser();
  if(options === undefined){
    return"Please select a valid length.";
  }

  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = lower.toUpperCase()
  var numbers = "0123456789"
  var special = "#$@%&*!"
  var totalString = ""

  var password = [];

  if(options.includeSpecialChars){
   totalString = totalString.concat(special)

  }if(options.includeUpperChars){
   totalString = totalString.concat(upper)

  }if(options.includeLowerChars){
    totalString = totalString.concat(lower)

  }if(options.includeNumberChars){
   totalString = totalString.concat(numbers)

  }
  var possiblePasswordChars = totalString.split("");
  if(possiblePasswordChars.length === 0){
    return"Password generation failed. Must select at least one character type."
  }

  for(var i = 0; i < options.passwordLength; i++){
    var index = Math.floor (Math.random() * possiblePasswordChars.length)
    var character = possiblePasswordChars[index]
    password.push(character)
  }
return password.join("")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);