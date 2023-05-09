
var removeElement = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--;
    }
  }
  console.log(nums)
};

removeElement([1,2,2,2,2,2,2,4,6], 6)
