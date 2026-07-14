// const fetchMessage = async () => {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const message = 'Hello, Asynchronous World!';
//       console.log('message: ', message);
//       resolve(message);
//     }, 1000);
//   });
//   return myPromise;
// };

// fetchMessage();

// //error first callback
// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 2);
//   if (rand === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => console.log('success'))
//   .catch(() => console.log('error someting went wrong'));

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

function parseJSON(jsonString) {
  // Implement this function

  const obj = JSON.parse(jsonString);

  // if theres a birth then convert into a date
  if (obj.birth) {
    obj.birth = new Date(obj.birth);

    console.log(obj.birth);
  }

  console.log(obj);

  return obj;
}

const obj = { name: 'John', age: 30, city: 'New York' };

const myJson = JSON.stringify(obj);

console.log(myJson);

function stringifyObject(jsObject) {
  // Implement this function

  return JSON.stringify(jsObject);
}
