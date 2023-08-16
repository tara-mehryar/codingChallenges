// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// Tara's Solution:
function reverseString(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    } return newString;
}
console.log(reverseString('noon'))


function palindrome(str){
    let reverseStr = str.split(',')
}

// Solution 1:
const isPalindrome = (str) => {
    let splitStr = str.split('')
    // console.log(splitStr)
    splitStr = splitStr.reverse()
    // console.log(splitStr)
    let reversed = splitStr.join('')
    return reversed === str
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('apple'))

// Solution 2:
const oneLiner = str => str.split('').reverse().join('') === str

console.log(oneLiner('racecar'))
console.log(oneLiner('Racecar'))
console.log(oneLiner('apple'))

// Solution 3:
const backAndFrontCheck = str => {
    let front = 0
    let back = str.length - 1
    while (front < back){
        if(str[front] !== str[back]){
            return false
        }
    front ++
    back -- 
    }
    return true
}

console.log(backAndFrontCheck('racecar'))
console.log(backAndFrontCheck('Racecar'))
console.log(backAndFrontCheck('apple'))