/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let box = []
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    box.push(nums[i] * nums[i])
  }
  console.log('box--', box)
  function compareNumbers(a, b) {
    return a - b;
  }
  box.sort(compareNumbers)
  console.log(box);
  return box;
};
