function greet(name) {          //I am creating a function which creates more repeatable code.
    return "Hello " + name + ", welcome!";     
}                               //Instead of asking the console to output "Hello Ronan", I am
console.log(greet("Ronan"));    //getting it to write the logic once, then reuse it
console.log(greet("Laura"));   

//function --> "I'm creating a function"
//greet --> name of the function
//(name) --> input (parameter)
// ^Think: "I'm creating a machine called greet that takes a name"

//return (IMPORTANT): This means "send this value back",
//without the return the function gives nothing. 

function add(a, b) { //this function receives numbers and adds them, returning them to the console.
    return a + b;
}

console.log(add(5, 3)); //this sends the numbers to the function and prints the results

function checkCals (cals, target) { //this function checks if calories > target, then returns bool result to console
    if (cals > target) {
        return cals - target + " Over target";
    } else {
        return target - cals + " Under target";
    }
}

console.log(checkCals(2000, 2200));

function runKms (done, kmTarget) {
    if (kmTarget > done) {
        return kmTarget - done + " km remaining on your run"
    } else if (kmTarget === done) {
        return "You have completed your run!"
    } else if (kmTarget < done) {
        return done - kmTarget + " km over target for your run";
    }
}

console.log(runKms(3,5));
console.log(runKms(5,5));
console.log(runKms(7,5));
