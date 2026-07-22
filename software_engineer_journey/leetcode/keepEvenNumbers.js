function keepEvenNumbers(nums) {
  // Your code here
  let result = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(keepEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
