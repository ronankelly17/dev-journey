let calsBurned = [200, 350, 150, 400, 180];
let hiBurnCounter = 0;
let totalCals = 0;

function analyseWorkouts(calsBurned) {
    for (let i = 0; i < calsBurned.length; i++) {
        totalCals = totalCals + calsBurned[i];
        let current = calsBurned[i];
        if (current > 300) {
            hiBurnCounter++;
            console.log(current + " is a high-cal burning workout.");
        } else {
            console.log(current + " is a low-cal burning workout.");
        }
    
    }
}

analyseWorkouts(calsBurned);
console.log(totalCals + " total calories burned on the workouts.")
console.log(hiBurnCounter + " total high-cal burning workouts.")


//Above I created an array, function, loop and if/else statement to determine if
//the array values are either high-calorie burning, or low-calorie burning.
//This program also counts the number of workouts that were high-calorie burning &
//the total number of calories burned, and returns them in the console.