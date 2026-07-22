function findLargestNumber(nums) {
  let largest = nums[0];
  let len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
    console.log(largest);
  }

  // Your code here

  return largest;
}

console.log(findLargestNumber([-5, -2, -9, -1])); // 9
