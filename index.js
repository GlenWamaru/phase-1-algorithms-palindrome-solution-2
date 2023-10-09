function isPalindrome(word) {
  // Write your algorithm here
  let startIndex = 0;
  let endIndex = word.length - 1;

  while (startIndex < endIndex) {
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;

}

/* 
  Add your pseudocode here
   1. Initialize startIndex to 0
   2. Initialize endIndex to the last index of the word
   3. While startIndex is less than endIndex:
      a. If word[startIndex] is not equal to word[endIndex], return false
      b. Increment startIndex
      c. Decrement endIndex
   4. If the loop completes without returning false, return true

*/

/*
  Add written explanation of your solution here
   - We start by initializing two pointers, startIndex at the beginning of the word and endIndex at the end of the word.
   - We use a while loop that continues as long as startIndex is less than endIndex.
   - Inside the loop, we check if the characters at the current startIndex and endIndex positions are equal. If they are not, we immediately return false because the word cannot be a palindrome.
   - If the characters are equal, we increment startIndex and decrement endIndex to check the next pair of characters.
   - If the loop completes without returning false, it means all pairs of characters matched, and we return true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("world"));

}

module.exports = isPalindrome;
