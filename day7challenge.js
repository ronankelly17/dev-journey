let calsBurned = [200, 350, 150, 400, 180];
let hiBurnCounter = 0;

function analyseWorkouts(calsBurned) {
    for (let i = 0; i < calsBurned.length; i++) {
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
console.log(hiBurnCounter + " total high-cal burning workouts.")

//Above I created an array, function, loop and if/else statement to determine if
//the array values are either high-calorie burning, or low-calorie burning.