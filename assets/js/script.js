// Assignment Code
var generateBtn = document.querySelector("#generate");

// generator functions
function getRandomLower (){
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
 }
function getRandomSymbol (){
    const symbols = '!@#$%^&*()_+{}|;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
 }


   





// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //test password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

