//Problem: Given a number, n, return an array containing n unique numbers between 1-10, inclusive. (Do not repeat any numbers in the list). You can trust function will never be called at n > 0 or n < 0.
//  function listUniqueRandomNumbers(n) {
//     const uniqueNumbers = new Set();
//     while (uniqueNumbers.size < n){
//         uniqueNumbers.add(Math.floor(Math.random() * 10) + 1);
//     } return Array.from(uniqueNumbers);
// }

//second try:
// function UniqueRandomNumbers(n) {
// const uniqueNumbers = [];
// for (let i = 0; i < n.length; i++){
//     if (uniqueNumbers.indexOf(n[i]));
// }
// return uniqueNumbers;
// }

//SOLUTION GIVEN IN CLASS using the .includes method:
const luckyNums = (n) => {
    // this function will create an array and return it
let arr = []
//  this function should continue to run, while our array length is less than our number
while (arr.length < n){
    // generate random numbers between 1-10
    console.log('in while')
    let randInt = Math.ceil(Math.random() * 10)
    // write some code that will allow us to check if the array already contains the generated number
    if(!arr.includes(randInt)){
    arr.push(randInt)
}
}


return arr
}

console.log(luckyNums(3))
console.log(luckyNums(7))
console.log(luckyNums(10))


