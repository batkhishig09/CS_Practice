// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Psuedo Code
   // Initialize Starting and EndPointer to comparison
   // while loop to compare to pointer
   // if starting point with string is not equal to ending point with string it will return false
   // move pointers towards the center
   // if loop completes, the string is  a palindrome return true;
function palindrome(str) {
   return str.split('').every((char, i) => {
     return char === str[str.length - i - 1];
   })
}

// function palindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return reversedStr === str
//  }
// function palindrome(str) {
//     let startingPoint = 0;
//     let endingPoint = str.length -1;
 
//     while(startingPoint < endingPoint) {
//        if ( str[startingPoint] !== str[endingPoint]) {
//          return false;
//        }
//        startingPoint = startingPoint + 1;
//        endingPoint = endingPoint -1;
//     }
//     return true;
//  }

palindrome('hello')
module.exports = palindrome;
