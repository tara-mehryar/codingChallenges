// Given an array of integers and a target value find if any of the integers add up to equal the target value.
// arr = [7, 10, -4, 3, 1, 14]
// targetValue = 11
// Should return true

// function hasSumEqualToTarget(arr, targetValue) {
//     // Create an object to store the seen numbers
//     const seen = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       // Calculate the difference between the target value and the current number
//       const difference = targetValue - arr[i];
  
//       // If the difference is already in the 'seen' object, return true
//       if (seen[difference]) {
//         return true;
//       }
  
//       // Otherwise, mark the current number as seen
//       seen[arr[i]] = true;
//     }
  
//     // If no pair of numbers add up to the target value, return false
//     return false;
//   }
  
//   // Example usage:
//   const arr = [7, 10, -4, 3, 1, 14];
//   const targetValue = 11;
//   const result = hasSumEqualToTarget(arr, targetValue);
//   console.log(result); // Should return true
  
// SOLUTION 2:

  function possibleNums(array, targetValue) {
    const numbersArray = [];
    // nested loops to find the sum as target value
    for (let i = 0; i < array.length; i++) {
       for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === targetValue) {
             numbersArray.push([array[i], array[j]]);
          }
       }
    }
    return true;
 }
 const array = [7, 10, -4, 3, 1, 14];
 const targetValue = 11;
 const numbersArray = possibleNums(array, targetValue);
 console.log(numbersArray);

// WhiteBoarding:
// Step 1 − define a function which will find out the possible numbers of array to get the required sum as target value.

// Step 2 − define a blank array which will store the numbers of resultant subarrays.

// Step 3 − use a for loop to iterate through all the elements of the array till the length of the array.push

// Step 4 − use another for loop or nested for loop to get the required two elements. These two elements's sum should be equal to the target value.

// Step 5 − If the total of those two elements equals the target value, we will add it to the array we have defined in step two.

// Step 6 − In the next step, pass the array and target value in the function to execute and produce the result.

// Step 7 − At the last step, get the output to the console after passing the numbers array and target value to the function.