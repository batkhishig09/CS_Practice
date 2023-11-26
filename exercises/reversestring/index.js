// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character += reversed;
    },'')
   }
//    The callback function (reversed, character) => {...} takes two parameters: reversed (the accumulated result) and character (the current element in the array).




// function reverse(str) {
//  let reversed = '';
//  for (let character of str) {
//     reversed = character + reversed
//  }
//  return reversed
// }

module.exports = reverse;
