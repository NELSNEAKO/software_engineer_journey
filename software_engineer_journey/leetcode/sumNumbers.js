function sumNumbers(nums) {
  // Your code here
  let result = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    result += nums[i];
  }
  return result;
}

console.log(sumNumbers([1, 2, 3, 4])); // 10
