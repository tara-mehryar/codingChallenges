// Given two lists, find the smallest differece (subtraction) between any two nums
// For example, given the arrays:
// [10,20,14,16,18]
// [20,23,54,33,96]
// The result would be 3, since 23-20 = 3 is the smallest difference of any pair of numbers in those lists.
// Write a function that determines the smallest difference.

// Solution 1:
const smallestDifference = (arr1, arr2) => {
    if(arr1.length === 0 || arr2.length === 0){
        return -1
    }

    let result = Number.MAX_VALUE;

    for(let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (Math.abs(arr1[i] - arr2[j]) < result){
                result = Math.abs(arr1[i] - arr2[j])
            }
        }
    }
    return result;
}

console.log(smallestDifference([10,20,14,16,18], [30,23,54,33,96]))


// Solution 2:
function smallestDifference(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let a = 0;
    let b = 0;
    let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1
    while(a < arr1.length && b < arr2.length){
      if(Math.abs(arr1[a] - arr2[b]) < result){
      
        result = Math.abs(arr1[a] - arr2[b]);
      }
      if (arr1[a] < arr2[b]) {
        a++;
      } else{
        b++;
      }
    } return result;
  }

  console.log(smallestDifference([10,20,14,16,18], [30,23,54,33,96]))



// Solution 3:
const findSmallestDifference = (arr1, arr2) => {
    let minDiff = Infinity;
    for(let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            let diff = Math.abs(arr1[i] - arr2[j]);
            if (diff < minDiff) {
                minDiff = diff;
            }
        }
    }
    return minDiff;
}

const arr1 = [10,20,14,16,18];
const arr2 = [30,23,54,33,96];
console.log(findSmallestDifference(arr1, arr2))