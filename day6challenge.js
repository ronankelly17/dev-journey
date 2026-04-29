let numbers = [3, 5, 6, 8, 12, 13, 17, 20];

console.log(numbers + " are the numbers being tested to check for Odd or Even");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is Even");
    } else {
        console.log(numbers[i] + " is Odd");
    }
}