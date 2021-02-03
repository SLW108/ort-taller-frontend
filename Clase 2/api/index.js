// https://jsonplaceholder.typicode.com/
const req = fetch("https://jsonplaceholder.typicode.com/albums");

req
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(e => console.log(e));
