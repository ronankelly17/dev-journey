//Project Goal:
//- Asks user what they want to do.
//Lets them:
//- Add a workout
//- View workouts
//- See total

const userPrompt = require("prompt-sync")(); //plugging-in package

let workouts = [];
let answer = userPrompt;
let hiBurnCounter = 0;
let totalCals = 0;
//userPrompt -> gets input from the user
//.toLowerCase ->converts string to lower case
while (answer !== "exit") {  //Loop to check whether user is done using the program
   
    console.log("You can: add, view, stats or exit");
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

    if (answer === "view") {

//1. user types view.
//2. loop starts. 
//3. get workout at position i. 
//4. access name + calories. 
//5. print it. 
//6. repeat for next workout.

        for (let i = 0; i < workouts.length; i++) {
            let currentWorkout = workouts[i]; //this gives the current workout in the array

            currentWorkout.name; //this accesses the array and calls the name and cals
            currentWorkout.cals;

            console.log(currentWorkout.name + " - " + currentWorkout.cals + " calories");
        }
    }

    if (answer === "stats") {

        for( let i = 0; i < workouts.length; i++) {
            let currentCals = workouts[i];

            currentCals.cals;
            totalCals = totalCals + currentCals;

            if (cals > 300) {
                hiBurnCounter++;
            }
            console.log(currentCals.cals);
        }
    }
} 
