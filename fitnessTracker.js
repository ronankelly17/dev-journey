//Project Goal:
//- Asks user what they want to do.
//Lets them:
//- Add a workout
//- View workouts
//- See total

const userPrompt = require("prompt-sync")(); //this brings in the prompt-sync command i installed on the command line.

let answer = userPrompt("Say something: ");
console.log(answer);