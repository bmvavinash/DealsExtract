async function firebasepost(app,path) {
const fetch = require('node-fetch');

// Define the JSON payload
const payload = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com'
};

console.log("Path is ",path)
console.log(`https://avi1deals-default-rtdb.firebaseio.com/${path}`)

// Make the POST request
await fetch(`https://avi1deals-default-rtdb.firebaseio.com/${path}`, {
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
