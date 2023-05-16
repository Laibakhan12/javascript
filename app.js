function checkCharacterType(char) {
    if (char >= '0' && char <= '9') {
      return "Number";
    } else if (char >= 'A' && char <= 'Z') {
      return "Uppercase letter";
    } else if (char >= 'a' && char <= 'z') {
      return "Lowercase letter";
    } else {
      return "Invalid input";
    }
  }
  
  // Take input from the user
  var character = prompt("Enter a character:");
  
  // Call the function to check the character type
  var characterType = checkCharacterType(character);
  
  // Print the result
  document.write("The character '" + character + "' is a " + characterType + ".")




// Take input from the user
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// Check if the numbers are equal
if (num1 === num2) {
    document.write("The two integers are equal.");
} else {
  // Find the larger number
  var largerNumber = num1 > num2 ? num1 : num2;
  
  // Print the larger number
  
  document.write("The larger number is: " + largerNumber);
}

// Take input from the user
var number = parseFloat(prompt("Enter a number:"));

// Check the number's sign
if (number > 0) {
  document.write("The number is positive.");
} else if (number < 0) {
  document.write("The number is negative.");
} else {
  document.write("The number is zero.");
}


function isVowel(character) {
    // Convert the character to lowercase for easier comparison
    var lowerChar = character.toLowerCase();
  
    // Check if the character is a vowel
    if (
      lowerChar === 'a' ||
      lowerChar === 'e' ||
      lowerChar === 'i' ||
      lowerChar === 'o' ||
      lowerChar === 'u'
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Take input from the user
  var inputChar = prompt("Enter a character:");
  
  // Check if the character is a vowel
  var result = isVowel(inputChar);
  
  // Print the result
  document.write("Is the character a vowel? " + result);

// Store the correct password
var correctPassword = "MyPassword123";

// Ask the user to enter their password
var userPassword = prompt("Enter your password:");

// Validate the passwords
if (!userPassword) {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}



// Take input from the user
var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Initialize variables for the converted time and AM/PM indication
var convertedTime;
var ampm;

// Perform the conversion
if (time >= 0 && time <= 2359) {
  if (time >= 0 && time < 100) {
    convertedTime = time;
    ampm = "AM";
  } else if (time >= 100 && time < 1200) {
    convertedTime = time;
    ampm = "AM";
  } else if (time >= 1200 && time < 1300) {
    convertedTime = time;
    ampm = "PM";
  } else if (time >= 1300 && time <= 2359) {
    convertedTime = time - 1200;
    ampm = "PM";
  }
} else {
  convertedTime = NaN; // Invalid input
}

// Check if the input was valid
if (isNaN(convertedTime)) {
  document.write("Invalid input. Please enter a time in the 24-hour format.");
} else {
  // Print the converted time with AM/PM indication
  document.write("The time in 12-hour format is: " + convertedTime + ampm);
}