// Given an array of numbers, write some code to loop through the array, print out the smallest and largest numbers in the array.
// For example, if given the array [1,4,11,2,37,-4], your code should print out [-4,37]
let numbers = [1,4,11,2,37,-4];
let min = numbers[0]
let max = numbers[0];
for (let i = 0; i < numbers.length; ++i){
    if (numbers[i] > max){
        max = numbers[i];
    } else if (numbers[i] < min){
        min = numbers[i];
    }
}
console.log(max)
console.log(min)

// A DIFFERENT SOLUTION - DONE WITHOUT LOOPS AND USING MAX/MIN METHODS:
// const numbers = [1,4,11,2,37,-4];
// const largest = Math.max(...numbers);
// const smallest = Math.min(...numbers);
// console.log(`Largest Number: ` + largest);
// console.log('Smallest Number: ' + smallest);
