// setting letiables in for selection of password
let loweCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numericNumber = "1234567890".split("");
let specialCharacter = "@%+/!#$?~-_".split("");

function passwordchoices() {
  let length = parseInt(
    prompt(
      "Password MUST be between 8 to 128 characters long, how long would you like your password?"
    )
  );

  if (isNaN(length) === true) {
    alert("Must be more than 8 letters");
    return;
  }

  if (length < 8) {
    alert("Must be more than 8 letters");
    return;
  }
  if (length > 128) {
    alert("Must be less than 128 letters");
    return;
  }

  let gotLower = confirm("Would you like lower case letters in your password?");
  let gotUpper = confirm("Would you like upper case letters in your password?");
  let gotSpecial = confirm("Would you like special letters in your password?");
  let gotNumber = confirm("Would you like numbers in your password?");

  if (
    gotLower === false &&
    gotUpper === false &&
    gotSpecial === false &&
    gotNumber === false
  ) {
    alert("Must select atleast one type of character");
    return;
  }
  let UserAnswers = {
    length: length,
    gotLower: gotLower,
    gotSpecial: gotSpecial,
    gotNumber: gotNumber,
  };
  return UserAnswers;
}

function random(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  let pwChoices = passwordchoices();

  let result = [];
  let myArray1 = [];
  let myArray2 = [];

  if (pwChoices.gotLower) {
    myArray1 = myArray1.concat(loweCase);
    myArray2.push(random(loweCase));
  }
  if (pwChoices.gotUpper) {
    myArray1 = myArray1.concat(upperCase);
    myArray2.push(random(upperCase));
  }
  if (pwChoices.gotSpecial) {
    myArray1 = myArray1.concat(specialCharacter);
    myArray2.push(random(specialCharacter));
  }
  if (pwChoices.gotNumber) {
    myArray1 = myArray1.concat(numericNumber);
    myArray2.push(random(numericNumber));
  }

  if (pwChoices.gotLower) {
    myArray1 = myArray1.concat(loweCase);
    myArray2.push(random(loweCase));
  }

  for (let i = 0; i - pwChoices.length; i++) {
    myArray1 = random(myArray1);
    result.push(myArray1);
  }

  for (let i = 0; i - myArray2.length; i++) {
    result[i] = myArray2;
  }

  return result.join('');
}

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
