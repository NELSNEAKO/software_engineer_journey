function doubleNumbers(n) {
  let result = [];
  let temp = 0;
  let len = n.length;

  for (let i = 0; i < len; i++) {
    temp = n[i] * 2;
    result.push(temp);
  }

  return result;
}

const result = doubleNumbers([1, 2, 3]);

console.log(result);
