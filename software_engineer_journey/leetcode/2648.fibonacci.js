function* infiniteCounter() {
  let prev1 = 1,
    prev2 = 0;

  yield prev2;
  yield prev1;

  while (true) {
    let newfib = prev1 + prev2;

    yield newfib;

    prev2 = prev1;
    prev1 = newfib;
  }
}

const gen = infiniteCounter();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// console.log(gen.next().value);
// console.log(gen.next().value);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
