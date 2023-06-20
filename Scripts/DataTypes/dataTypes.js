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

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/


var markWeight = 78; // Weight in KG //
var markHeight = 1.69; // Height in M //

var johnWeight = 92; // Weigth in KG //
var johnHeight = 1.95; // Height in M //

var markBMI = markWeight / markHeight ** 2;
console.log("markBMI", markBMI);

var johnBMI = johnWeight / markHeight ** 2;
console.log("johnBMI", johnBMI);

var markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

function calculateBMI({ weight, height }) {
  var BMI = weight / height ** 2;
  return BMI;
}

function calculateBMIsimple({ weight, height }) {
  var simpleBMI = calculateBMI({ weight, height }).toFixed(2);
  return simpleBMI;
}

var zacWeight = 39; //  Weight in KG //
var zacHeight = 1.6; // Height in M //

var zacBMI = calculateBMI({ weight: zacWeight, height: zacHeight });
console.log(zacBMI);
var zacBMIsimple = calculateBMIsimple({ weight: zacWeight, height: zacHeight });
console.log(zacBMIsimple);

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


