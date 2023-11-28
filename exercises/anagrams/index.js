// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cleanedStr1 = stringA.replace(/[^\w]/g, '').toLowerCase();
    const cleanedStr2 = stringB.replace(/[^\w]/g, '').toLowerCase();

    if(cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }
    // characterCounts is created to store the count of each character in cleanedStr1
    // The for...of loop iterates over each character in cleanedStr1, incrementing its count in the charCount object.

    let characterCounts = {};
    for (let char of cleanedStr1) {
        characterCounts[char] = (characterCounts[char] || 0) + 1; 
    }
    //This loop iterates over each character in cleanStr2. For each character, it checks if it exists in the charCount object. If it doesn't or its count is already zero, the function returns false. Otherwise, it decreases the count in the charCount object.

    for (let char of cleanedStr2) {
        if(!characterCounts[char]) {
            return false;
        }
        characterCounts[char] -= 1;
    }
    return true
}


// function anagrams(stringA, stringB) {
//     const cleanedStr1 = stringA.replace(/[^\w]/g, '').toLowerCase();
//     const cleanedStr2 = stringB.replace(/[^\w]/g, '').toLowerCase();

//     const newString1 = cleanedStr1.split('').sort().join('');
//     const newString2 = cleanedStr2.split('').sort().join('');
//     return newString1 === newString2;
// }

module.exports = anagrams;
