async function firebasepost(app,access_token) {
const fetch = require('node-fetch');

console.log("Access token in firebase post is ",access_token)

// Define the JSON payload
const payload = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com'
};

// console.log("Path is ",path)
// console.log(`https://avi1deals-default-rtdb.firebaseio.com/${path}`)

// Make the POST request
// await fetch(`https://avi1deals-default-rtdb.firebaseio.com/${path}`, {
// await fetch("https://avi1deals-default-rtdb.firebaseio.com/amazon.json", {
// await fetch("https://avideals1-default-rtdb.firebaseio.com/dailydeals.json", {
await fetch(`https://dealshubglobal-default-rtdb.firebaseio.com/deals.json?access_token=${access_token}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
//   body: JSON.stringify(payload)
  body: JSON.stringify(app)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
exports.firebasepost = firebasepost;
