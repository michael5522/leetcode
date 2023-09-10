/*
Example 1:

Input: strs = ["flower", "flow", "flight"]
Output: "fl"
Example 2:

Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
let gg = "ola";
console.log(gg);

strs = ["flower", "flow", "flight"]
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  // Loop through the letters of the first string
  for (let i = 0; i <= strs[0].length; i++) {
    // Loop through the other strings
    console.log('0 1st loop---',strs[0], i)
    for (let j = 1; j < strs.length; j++) {
      console.log('1 inner loop---',strs[j])
      console.log('xxx', strs[0][i], strs[j][i])
      console.log('-------loop copmlete')
      // Check if this character is also present in the same position of each string
      if (strs[0][i] !== strs[j][i]) {
        console.log('2', strs[0][i])
        console.log('2.5', strs[j][i])
        // If not, return the string up to and including the previous character
        console.log('answer', strs[0].slice(0, i))
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(strs));
