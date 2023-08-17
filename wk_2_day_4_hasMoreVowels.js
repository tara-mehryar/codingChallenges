// Write a function called hasMoreVowels that takes in one argument, word. 
// When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. 
// The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.
// If the phrase is over  half vowels, it should return true.

// TM's Solution:
function hasMoreVowels(word) {
    const vowels = 'aAeEiIoOuU';
    let vowelCount = 0;
    let nonVowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount++;
        } else {
            nonVowelCount++;
        }
    }

    return vowelCount > nonVowelCount;
}

console.log(hasMoreVowels("moose")); 

// Lukas' Solution:
const hasMore = str => {
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0

    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }
    return vowelCount > (str.length / 2)
}

console.log(hasMore('hello'))
console.log(hasMore('banana'))
console.log(hasMore('moose'))
console.log(hasMore('mouse'))