// Write a function that capitalizes the first letter of a string.
function capFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capFirst('tara'));

// Write a function that creates an object out of 4 parameters: name, age, state, lovesCode
function student(name, age, state, lovesCode){
    const person = {
        name,
        age,
        state,
        lovesCode
    };
    return person;
}
const person1 = student('tara', 26, "TX", true);
console.log(person1);

// Write a function that generates an array of 10 random numbers between 1-100.
function generateRandomNumbers() {
    const randomNumbers = [];

    for (let i =0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
};

const randomArray = generateRandomNumbers();
console.log(randomArray);

// write a function that takes in and returns a number reversed. Only use math.
function reverseNumber(num){
    let reversed = 0;
    while (num !== 0){
        const lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return reversed;
};

const originalNumber = 1234;
const reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber)