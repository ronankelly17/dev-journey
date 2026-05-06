//v2.0 with refactoring if statements into functions
//main loop
//I___ addWorkout()
//I___ viewWorkouts()
//I___ showStats()

//Project Goal:
//- Asks user what they want to do.
//Lets them:
//- Add a workout
//- View workouts
//- See total

const userPrompt = require("prompt-sync")(); //plugging-in package

let workouts = [];
let answer = "";

//userPrompt -> gets input from the user
//.toLowerCase ->converts string to lower case
while (answer !== "exit") {  //Loop to check whether user is done using the program
   
    console.log("You can: add, view, stats or exit");
    answer = userPrompt("What would you like to do? ").toLowerCase();
    
    function addWorkout() {

         console.log("What would you like to name this workout? ");
        let name = userPrompt("Workout name: ");
        console.log("How many cals did you burn during it: ");
        let cals = userPrompt("Cals burned: ");
        cals = Number(cals); //converts string to number for array

            if (isNaN(cals)) {
                console.log("invalid data type. Cals can only be a number");
                return;
            }
       
        let workout = { //object that stores input workouts as their own variable
            name: name,
            cals: cals
        };

        workouts.push(workout); //pushes workouts to array
    }

    function viewWorkouts() {

//1. user types view.
//2. loop starts. 
//3. get workout at position i. 
//4. access name + calories. 
//5. print it. 
//6. repeat for next workout.

        if (workouts.length === 0) {
            console.log("There are no workouts logged yet.");
            return;
        }

        for (let i = 0; i < workouts.length; i++) {
            let currentWorkout = workouts[i]; //this gives the current workout in the array

            currentWorkout.name; //this accesses the array and calls the name and cals
            currentWorkout.cals;

            console.log((i + 1) + ". " + currentWorkout.name + " -> " + currentWorkout.cals + " calories");
        }               //i starts at 0. i + 1 makes it start from 1 in this case.
    }

    function showStats() {

        let hiBurnCounter = 0;
        let currentCals = 0;
        let totalCals = 0;
        
        for( let i = 0; i < workouts.length; i++) {
            currentWorkout = workouts[i];
            currentWorkout.cals;
            

            currentCals.cals;
            totalCals = totalCals + currentWorkout.cals;

            if (currentWorkout.cals > 300) {
                hiBurnCounter++;
            }
            
        }

        avg = totalCals / workouts.length;

        if (workouts.length === 0) {
            console.log("There are no logged workouts");
        } else {
            console.log("\n--- Workout Stats ---");
            console.log("Total calories: " + totalCals);
            console.log("Average calories: " + avg);
            console.log("High-burn workouts: " + hiBurnCounter);
            console.log("---------------------\n");
        }
    }

    if (answer === "add") {
       
        addWorkout();
    }

    if (answer === "view") {
        
        viewWorkouts();
    }

    if (answer === "stats") {

        showStats();
    }
} 