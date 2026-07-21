function reverseString(s) {
  // your code here
  let arr = '';
  let len = s.length;

  // arr = s[s.length - 1];
  // console.log('char: ', arr);

  for (let i = 1; i < len + 1; i++) {
    arr += s[len - i];
  }

  return arr;
}

const result = reverseString('hello');

console.log(result);
