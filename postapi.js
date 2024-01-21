async function firebasepost(app, access_token, env="prod", jsonFileName="deals", url="https://dealshubglobal-default-rtdb.firebaseio.com",extract="Telegram",extractData="productlinks") {
  const fetch = require('node-fetch');

  // console.log("Access token in firebase post is ", access_token);

  let authorized=false

  if(env=="prod"){
  //   url = "https://dealshubglobal-default-rtdb.firebaseio.com"
  // } 
  if(extract=="Excel"&& (extractData == "productlinks" || extractData == "genericlinks")){
    filename = "dealshubloots-firebase-adminsdk-o8i6x-ce14a7cfb9"
    console.log("getAccessToken Prod Excel(dealshubglobal)")
  }
  else if(extract=="Excel" && extractData == "categorylinks"){
    filename = "dealshublinks-firebase-adminsdk-2q397-1d74ec028d"
    console.log("getAccessToken Prod Excel Categories(dealshubglobal)")
    url = "https://dealshublinks-default-rtdb.firebaseio.com"
  }
  else{
    filename = "dealshubglobal-firebase-adminsdk-7527s-a09ba4201e"
    console.log("getAccessToken Prod Telegram(dealshubglobal)")
  }
}
  else if(env=="stage") {
    url = "https://avideals1-default-rtdb.firebaseio.com"
  }

  // Define the JSON payload
  const payload = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

 

  // Construct the URL with the provided parameters
  const apiUrl = `${url}/${jsonFileName}.json?access_token=${access_token}`;
  console.log("api url is ",apiUrl)

  // Make the POST request
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(app),
  })
    .then(async (response) => {
      const responseData = await response.json();
      console.log('Response:', responseData);
      
      // Check if the response contains "unauthorized" (case-insensitive)
      if (response.status === 401 || responseData.name.toLowerCase().includes('unauthorized')) {
        // Return true if unauthorized is found in the response
        authorized = false
        // return false;
      } else {
        authorized = true
        // Return false if unauthorized is not found in the response
        // return true;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Return false in case of an error
      authorized = false
      // return false;
    });
    return authorized
}

exports.firebasepost = firebasepost;
