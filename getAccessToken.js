// var {google} = require("googleapis");

// async function getAccessToken() {
// console.log("into getAccessToken")
// // Load the service account key JSON file.
// var serviceAccount = require("F:/Study/Affiliate/Projects/Affiliate/New Clone Affiliate/Firebase/Firebase key/dealshubglobal-firebase-adminsdk-7527s-a9413e6ffd.json");
// // var serviceAccount = require("F:/Study/Affiliate/Projects/Affiliate/New Clone Affiliate/Firebase/Firebase key/dealshubglobal-firebase-adminsdk-7527s-a09ba4201e.json");
// // var serviceAccount = require("F:/Study/Affiliate/Projects/Affiliate/New Clone Affiliate/Firebase/Firebase key/avideals1-firebase-adminsdk-6uwg0-f38dc84259.json");
// var accessToken;
// // Define the required scopes.
// var scopes = [
//   "https://www.googleapis.com/auth/userinfo.email",
//   "https://www.googleapis.com/auth/firebase.database"
// ];

// // Authenticate a JWT client with the service account.
// var jwtClient = new google.auth.JWT(
//   serviceAccount.client_email,
//   null,
//   serviceAccount.private_key,
//   scopes
// );

// // Use the JWT client to generate an access token.
// jwtClient.authorize(function(error, tokens) {
//   if (error) {
//     console.log("Error making request to generate access token:", error);
//   } else if (tokens.access_token === null) {
//     console.log("Provided service account does not have permission to generate access tokens");
//   } else {
//     accessToken = tokens.access_token;
//     console.log("accessToken is ",accessToken)

//     // See the "Using the access token" section below for information
//     // on how to use the access token to send authenticated requests to
//     // the Realtime Database REST API.
//   }
// });
// console.log("Outside access token is ",accessToken)
// return accessToken
// }
// exports.getAccessToken = getAccessToken;




var { google } = require("googleapis");

function getAccessToken(env="prod",extract="Telegram",extractData="Telegram") {
  if(env=="prod"){
    
    if(extract=="Excel" && (extractData == "productlinks" || extractData == "genericlinks")){
      filename = "dealshubloots-firebase-adminsdk-o8i6x-ce14a7cfb9"
      console.log("getAccessToken Prod Excel(dealshubglobal)")
    }
    // else if(extract=="Excel" && extractData == "categorylinks"){
    else if(extractData == "categorylinks"){
      filename = "dealshublinks-firebase-adminsdk-2q397-1d74ec028d"
      console.log("getAccessToken Prod Excel(dealshubglobal)")
    }
    else{
      filename = "dealshubglobal-firebase-adminsdk-7527s-a09ba4201e"
      console.log("getAccessToken Prod Telegram(dealshubglobal)")
    }
  } else if(env=="stage") {
    filename = "avideals1-firebase-adminsdk-6uwg0-f38dc84259"
    console.log("getAccessToken stage Telegram(avideals1)")
  }
  return new Promise((resolve, reject) => {
    // Load the service account key JSON file.
    var serviceAccount = require(`F:/Study/Affiliate/Projects/Affiliate/New Clone Affiliate/Firebase/Firebase key/${filename}.json`);
    // var serviceAccount = require("F:/Study/Affiliate/Projects/Affiliate/New Clone Affiliate/Firebase/Firebase key/dealshubglobal-firebase-adminsdk-7527s-a09ba4201e.json");

    // Define the required scopes.
    var scopes = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/firebase.database"
    ];

    // Authenticate a JWT client with the service account.
    var jwtClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      scopes
    );

    // Use the JWT client to generate an access token.
    jwtClient.authorize(function (error, tokens) {
      if (error) {
        console.log("Error making request to generate access token:", error);
        reject(error);
      } else if (tokens.access_token === null) {
        console.log("Provided service account does not have permission to generate access tokens");
        reject(new Error("Service account does not have permission"));
      } else {
        const accessToken = tokens.access_token;
        console.log("accessToken is", accessToken);
        resolve(accessToken);
      }
    });
  });
}

exports.getAccessToken = getAccessToken;
