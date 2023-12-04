// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter =0;
    const eachVowels = 'aeoiu'
    for(char of str.toLowerCase()) {
        if(eachVowels.includes(char)){
            counter ++
        }
    }
    return counter;
 }

//  function vowels(str) {
//     const matches = str.match(/[aeoiu]/gi);
//     return matches ? matches.length : 0;
//  }
//  console.log(vowels('hello'))

module.exports = vowels;
