let age = 15; 

if (age >= 18) {            //If the age variable is greater or equal to 18 then the console
    console.log("Adult");   //returns "Adult" otherwise it returns "Minor"
} else {
    console.log("Minor");
}

let cals = 1800;            //if the cals variable is greater than the target variable then
let target = 2000;          //the console returns 'over' otherwise it returns 'under'

if (cals > target) {
    console.log ("over target by " + (cals - target) + " calories");
} else {
    console.log ("under target by " + (target - cals) + " calories");
}

let score = 50;

if (score > 70) {
    console.log("High");
} else if (score > 40) {
    console.log ("Medium");
} else {
    console.log ("low");
}

let team = 11;

if (team === 11) {
    console.log("The team qualifies");
} else if (team === 10) {
    console.log("You need one more player to qualify");
} else {
    console.log("You fail to meet the requirements needed");
}