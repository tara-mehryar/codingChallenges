// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. 

function perfectSquare(n) {
    // Check if the input number is a perfect square
    const sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) {
      // If it's a perfect square, find the next perfect square
      const nextInteger = Math.floor(sqrt) + 1;
      return nextInteger * nextInteger;
    } else {
      // If it's not a perfect square, return -1
      return -1;
    }
  }
  
  const inputNumber = 9; 
  const nextPerfectSquare = perfectSquare(inputNumber);
  console.log(nextPerfectSquare);

//   Solution in class:
const perfectSquare = (n) => {
    let root = Math.sqrt(n)
    if (!Number.isInteger(root)){
        return -1
    }
    root +=1
    return root ** 2
}
  