function countOccurrences(nums, target) {
  // Your code here
  let len = nums.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 3)); // 3
