/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (!this.length) {
    return -1;
  }
  return this.at(-1);
};

const arr = [];
arr.last(); // 3

console.log(arr.last());
