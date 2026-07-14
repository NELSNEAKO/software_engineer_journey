let prev2 = 0;
let prev1 = 1;
let count = 2;

// const fiboArray = [];

// console.log('prev1: ', prev1);
// console.log('prev2: ', prev2);

// for (let i = 0; i < 10; i++) {
//   let newFibo = prev1 + prev2;
//   console.log('newFibo: ', newFibo);
//   prev2 = prev1;
//   prev1 = newFibo;

//   fiboArray.push(newFibo);

//   //   my_array = add;
// }

// console.log(fiboArray);

function fibonacci(prev1, prev2, counter) {
  if (count <= counter) {
    let newFibo = prev1 + prev2;
    prev2 = prev1;
    prev1 = newFibo;

    console.log('newFibo: ', newFibo);

    count += 1;
    fibonacci(prev1, prev2, counter);
  } else {
    return;
  }
}

let my_array = [64, 34, 25, 12, 22, 11, 90, 5];

let len = my_array.length;


