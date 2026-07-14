const my_array = [7, 12, 9, 4, 11];
let min_val = my_array[0];

for (let currentValue of my_array) {
  if (currentValue <= min_val) {
    min_val = currentValue;
  }

  console.log('current min value: ', currentValue);
}

console.log('Lowest value: ', min_val);
