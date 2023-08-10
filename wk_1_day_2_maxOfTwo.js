let x = 1
let y = 2

// Write your code below this line. 
console.log(x*y);
//expected output: 2
console.log(x*y*y);
//expected output: 4

//CORRECT SOLUTION:
if (x > y) {
    console.log(x)
  } else {
    console.log(y)
  }
  
  //OR SOLUTION:
  
  if (x > y) {
    console.log(x)
  } else if (y > x) {
    console.log(y)
  } else [
    console.log('The values are identical.')
  ]