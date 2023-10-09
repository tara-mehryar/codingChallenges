// Write a function that receives a string and sets it to Title case.
// i.e. "this is a string" -> "This Is A String"

function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Example usage:
  const inputString = "this is a string";
  const titleCaseString = toTitleCase(inputString);
  console.log(titleCaseString); // Output: "This Is A String"
  

//   This toTitleCase function 
//   first converts the entire input string to lowercase with .toLowerCase(), 
//   then splits it into an array of words using .split(' '). 
//   Next, it uses .map() to iterate over each word, capitalizes the first letter of each word using .charAt(0).toUpperCase() and concatenates the rest of the word with .slice(1). 
//   Finally, it joins the modified words back together into a single string with .join(' '), resulting in the title case string.