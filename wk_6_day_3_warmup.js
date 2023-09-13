// Write a function that returns one of 3 different madLibs. The madLib string should contain placeholders for a noun,
// adjective, verb, and color. Format these placeholders like this: #noun#
// Madlib example: "The #color# #noun# likes to #verb# over the #adjective# lawn."

function generateMadLib(){
    const nouns = [];
    const adjectives = [];
    const verbs = [];
    const colors = [];

    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const madLibs = [`The #color# #noun# likes to #verb# over the #adjective# lawn.`]

    const randomMadLib = madLibs[Math.floor(Math.random() * madLibs.length)];

    return randomMadLib;
}

const randomMadLib = generateMadLib();
console.log(randomMadLib);

// Solution in class:
const generateLib = () => {
    const madlibs = [
        "The #color# #noun# likes to #verb# over the #adjective# lawn."
    ]

    const randIndex = Math.floor(Math.random() * madlibs.length)
    return madlibs[randIndex]
}

const createMadLib = (madlib,{ noun,color,adjective,verb }) => {
    // let {noun,color,adjective,verb} = libObj

    madlib = madlib.replace('#noun#', noun)
    madlib = madlib.replace('#adjective#', adjective)
    madlib = madlib.replace('#verb#', verb)
    madlib = madlib.replace('#color#', color)

    return madlib
}

console.log(createMadLib(generateLib(),{ noun:'cat', color:'orange', adjective:'fluffy', verb:'jump' }))

// Write a function that receives a madLib, and a madLib object, containing the required key: value pairs.
// Use the object values to replace the madLib placeholders, then return the completed madLib.



