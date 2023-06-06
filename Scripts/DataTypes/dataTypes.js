// Consts define stuff that don't change //

// Zac Info + Summer Info + Mom Info //

// string + int = string //

// string + string = string //

// int + int = int //

// var = anything and can change

const myName = "Zac";
const myAge = 12;
const myBirthday = "November 7 2010";
const ageInFiveYears = 5;
const sisterName = "Summer Jo";
const sisterAge = 4;
const sisterBirthday = "October 5 2018";
const sisterAgeInFiveYears = 5;
const momAge = 41;
const momName = "Christy";
const momAgeInFiveYears = 5;
const momBirthday = "March 9 1982";
const currentYear = 2023;
const fullName = true;

// Console Logs print messages to the console //

console.log(myAge + ageInFiveYears);
console.log(myName + " " + myBirthday);
console.log(sisterAge + sisterAgeInFiveYears);
console.log(sisterName + " " + myName + " " + sisterBirthday);
console.log(sisterName + " " + myName + " " + sisterBirthday);
console.log(momName + " " + myName + " " + momBirthday);
console.log(currentYear + momAgeInFiveYears);
console.log(momAge + momAgeInFiveYears);

function calculateYear() {
  // Retrieve the textbox element by ID
  var ageTextbox = document.getElementById("age");

  // Get the value from the textbox
  var ageValue = ageTextbox.value;

  // Parse the value as an integer
  var age = parseInt(ageValue, 10);

  // Check if the parsed value is a valid integer
  if (isNaN(age)) {
    // Invalid input, handle the error
    console.log("Invalid age input");
  } else {
    // Valid integer value
    console.log("Year:", 2010 + age);
  }
}
  
    


 // Console Logs print messages to the console //

console.log(myAge + ageInFiveYears)
console.log(myName+' '+myBirthday)
console.log(sisterAge + sisterAgeInFiveYears)
console.log(sisterName+' '+myName+' '+sisterBirthday)
console.log(sisterName+' '+myName+' '+sisterBirthday)
console.log(momName+' '+myName+' '+momBirthday)
console.log(currentYear + momAgeInFiveYears)
console.log(momAge + momAgeInFiveYears)

function calculateYear(){

// Retrieve the textbox element by ID
var ageTextbox = document.getElementById('age');

// Get the value from the textbox
var ageValue = ageTextbox.value;

// Parse the value as an integer
var age = parseInt(ageValue, 10);

// Check if the parsed value is a valid integer
if (isNaN(age)) {
    // Invalid input, handle the error
    console.log('Invalid age input');
  } else {
    // Valid integer value
    console.log('Year:', 2010+age);

  }
}



function areYouMySister({ Name }) {
  var randomName = Name;
  if (sisterName === randomName) {
    console.log("I found you");
  } else {
    console.log(`I'm Sad`);
  }
}

areYouMySister({ Name: "Summer Jo" });

function canILegallyDrive(age) {
  const ageToLegallyDrive = 18;
  if (age >= ageToLegallyDrive) {
    console.log(`Don't commit a hit and run`);
  } else {
    console.log(`Wait ${ageToLegallyDrive - age} more years`);
  }
}
canILegallyDrive(29);

function areYouMySisterComplicated({ name, age, favouriteColour }) {
  var sisterFavouriteColour = "pink";
  if (sisterFavouriteColour === favouriteColour) {
    console.log("1 step closer to finding my sister");

    if (sisterName === name) {
      console.log(`Another step closer. My sister's name is ${sisterName}`);
      if (sisterAge === age) {
        console.log(`Last step and.... Yay, I've found my sister`);
      }
    }
  } else {
    console.log(`I'm sad 😢 it wasn't her`);
  }
}

areYouMySisterComplicated({
  favouriteColour: "pink",
  name: "Summer Jo",
  age: 4,
}); 


