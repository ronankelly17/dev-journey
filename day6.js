//Arrays & Loops, cmon ronan smash this!

let numbers = [3, 7, 12, 23, 4]; // "[]" declares an array.

console.log(numbers);   //an array is a list of values

//Accessing certain values

console.log(numbers[0]);    //will pick '5'
console.log(numbers[1]);    //will pick '10'

for (let i = 1; i < numbers.length; i++) {  //'for' - loop (repeat this code)
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }                   //'let i = 0' (start at index 0)
}                    //'i < numbers.length'(keep going while i is less than array size)
//'i++' (increase i by 1 each time)

//Array is the data
//Loop goes through the data
//If decides what to do with the data