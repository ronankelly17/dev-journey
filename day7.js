//challenge one

let numbers = [5, 10, 15];

let total = 0;

for(let i = 0; i < numbers.length; i++) {   //this loop repeats the code till the conditions are met
    total = total + numbers[i];
}

console.log(total); //prints the accumulation of data which in this case is 30

//challenge two

let numbers2 = [3, 12, 7, 20, 5, 42];   //the goal with this is to find the largest num in the array

let largest = numbers2[0];  //this variable is here for the largest number to get assigned to

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {    //if any of the nums are largest, it replaces the largest variable with that num
        largest = numbers2[i];
    
    }
}

console.log(largest);

//challenge three

let nos = [3, 4, 8, 13, 16];

let count = 0;

for (let i = 0; i < nos.length; i++) {
    if(nos[i] % 2 === 0) {
        count++;
    }
}

console.log("There are " + count + " even numbers in the array");
 
