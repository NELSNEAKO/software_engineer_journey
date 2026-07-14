/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const counter = {
    currentCount: init,
    increment() {
      return console.log((this.currentCount += 1));
    },
    decrement() {
      //   let decrementCount = this.currentCount;
      return console.log((this.currentCount -= 1));
    },
    reset() {
      return console.log((this.currentCount = init));
    },
  };

  return counter;
};

const counter = createCounter(5);
counter.increment(); // 6
counter.increment(); // 6

counter.reset(); // 5
counter.decrement(); // 4
