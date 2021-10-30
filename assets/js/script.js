// Dom elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const generateBtn = document.querySelector("#generate");

const passCharacter = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function passwordTypes (){
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    

    resultEl.innerText = writePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
}

// Add event listener to generate button
generateEl.addEventListener("click", passwordTypes);




// generator functions, use browser character code to get letters and numbers
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
function writePassword(lower, upper, number, symbol, length) {
    // 1. initialize password variable
    // 2. filter out not checked password attributes
    // 3. loop length then call generator function for each type
    // 4. add final password to the password variable and return

    let generatedPassword = "";

    const typesCount = lower + upper + number + symbol;

    //console.log("typesCount: ", typesCount);

    // create array of objects then use filter method to remove false values
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
    );

    //console.log("typesArr: ", typesArr);

    // if no types are selected return empty string
    if(typesCount === 0 ) {
        return " ";
    }

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
        // loop through array with forEach
        // will give you key for each password type (lower, upper, number, symbol)
        typesArr.forEach(type => {
            const passwordName = Object.keys(type)[0];

            //console.log("passwordName: ", passwordName);

            // to append to string use +=
            generatedPassword += passCharacter[passwordName]();
        });
    }

    const finalPassword = (generatedPassword.slice(0, length));

    return finalPassword;

}
  


