function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  return (word === reversedWord)
}

function reverse(word){
  return word.split('').reverse().join('')
}
/* 
  Add your pseudocode here
  word.reverse()
  if(word === reversedword){
    return true
  } else {
    return false
  }
*/

/*
  Add written explanation of your solution here
  a function that takes a word and returns true if the word reads the
  same forwards as it does backwards, and returns false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
