function countEachNumber(nums) {
  // Your code here
  const counts = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // counts[nums[i]] = counts[i] + 1;

    if (counts[nums[i]] === undefined) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]]++;
    }
  }

  // console.log(counts);

  return counts;
}

console.log(countEachNumber([7, 7, 7]));
