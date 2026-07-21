function countEvenNumbers(s) {
  let result = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] % 2 === 0) {
      result++;
    }
  }

  return result;
}

const result = countEvenNumbers([1, 2, 3, 4, 5, 6]);

console.log(result);
