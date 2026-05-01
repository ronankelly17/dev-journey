//Project Goal:
//- Asks user what they want to do.
//Lets them:
//- Add a workout
//- View workouts
//- See total

const userPrompt = require("prompt-sync")(); //plugging-in package

let workouts = [];
let answer = userPrompt;
//userPrompt -> gets input from the user
//.toLowerCase ->converts string to lower case
while (answer !== "exit") {  //Loop to check whether user is done using the program
   
    console.log("You can: add, view or exit");
    answer = userPrompt("What would you like to do? ").toLowerCase();
    
    if (answer === "add") {
       
        console.log("What would you like to name this workout? ");
        let name = userPrompt("Workout name: ");
        console.log("How many cals did you burn during it: ");
        let cals = userPrompt("Cals burned: ");
        cals = Number(cals); //converts string to number for array

       
        let workout = { //object that stores input workouts as their own variable
            name: name,
            cals: cals
        };

        workouts.push(workout); //pushes workouts to array
        console.log(workouts);
    }
} 
