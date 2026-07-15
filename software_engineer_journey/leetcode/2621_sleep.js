/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((res) => {
    setTimeout(() => {
      res('success');
    }, millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
// sleep(3000).then((value) => {
//   console.log(value);
// });
