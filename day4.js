let age = 15; 

if (age >= 18) {            //If the age variable is greater or equal to 18 then the console
    console.log("Adult");   //returns "Adult" otherwise it returns "Minor"
} else {
    console.log("Minor");
}

let cals = 1800;
let target = 2000;

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