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

// Coding Challenge #2

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

function fixValueTo({decimal, value}) {
    return (value).toFixed(decimal);
}

const randomNumber = 6.789105
console.log (randomNumber);

const numberAfterFormatting = fixValueTo({decimal: 4, value: randomNumber})
console.log (numberAfterFormatting);

function whoWonIWannaKnow({ dolphinsAverageScore, koalasAverageScore }) {
  if (dolphinsAverageScore > koalasAverageScore) {
    console.log(
      `The Dolphins Win by ${fixValueTo({decimal: 2, value: dolphinsAverageScore - koalasAverageScore})}`
    );
  } else if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`It's a draw`);
  } else {
    console.log(
      `The Koalas Win by ${fixValueTo({decimal: 2, value: koalasAverageScore - dolphinsAverageScore})}`
    );
  }
}

function calculateAverageScore(score1, score2, score3) {
    return fixValueTo({decimal: 2, value: ((score1 + score2 + score3) / 3)});
}

const dolphinsScore = calculateAverageScore(96, 108, 89);
console.log("dolphinsScore", dolphinsScore);

const koalasScore = calculateAverageScore(88, 91, 110);
console.log("koalasScore", koalasScore);

whoWonIWannaKnow({
  dolphinsAverageScore: dolphinsScore,
  koalasAverageScore: koalasScore,
});

const dolphinsScore2 = calculateAverageScore(97, 112, 101);
console.log("dolphinsScore2", dolphinsScore2);

const koalasScore2 = calculateAverageScore(109, 95, 123);
console.log("koalasScore2", koalasScore2);

whoWonIWannaKnow({
  dolphinsAverageScore: dolphinsScore2,
  koalasAverageScore: koalasScore2,
});

// End of coding Challenge 3 //