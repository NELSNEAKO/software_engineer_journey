function findFirstNegative(nums) {
  // Your code here
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) {
      return nums[i];
    }
  }

  return null;
}

console.log(findFirstNegative([5, 8, 3, 7])); // -3
