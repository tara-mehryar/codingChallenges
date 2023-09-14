// Write a function that takes a string of directions, separate by commas, and returns an array of numbered direction strings, with proper casing.
// Ex "crack eggs, fry in pan, flip once solid"
// ['1.crack eggs', '2.fry in pan', '3.flip once solid']

const directions = () => {
    let exampleInt = [];
    let exampleString = '1,2,3,4';
    exampleString.split(',').forEach(function(item) {
        exampleInt.push(parseInt(item))
    })
}

function parseDirections(inputString){
    const directionsArray = inputString.split('');
    const numberedDirections = [];

    for(let i = 0; i < directionsArray.length; i++){

    }
}

// Solution in class:
let str = "crack egg, beat, fry, eat";

const directionSplitter = (str) => {
    let arr = str.split(', ');
    let numArr = [];
    
    for (let i = 0; i < arr.length; i++){
        let newAction = arr[i][0].toUpperCase() + arr[i].slice(1);
        numArr.push([i + 1] + '.' + newAction)
    }
    return(numArr)

}

console.log(directionSplitter("crack egg, beat, fry, eat, leave"))