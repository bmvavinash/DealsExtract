async function firebaseget(env, jsonFileName="deals",url="https://dealshubglobal-default-rtdb.firebaseio.com",extract="Telegram",extractData="productlinks") {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let len=0

    if(env=="prod"){
      //   url = "https://dealshubglobal-default-rtdb.firebaseio.com"
      // } 
      if(extract=="Excel" && (extractData == "productlinks" || extractData == "genericlinks")){
        filename = "dealshubloots-firebase-adminsdk-o8i6x-ce14a7cfb9"
        console.log("getAccessToken Prod Excel Products(dealshubglobal)")
        url = "https://dealshubloots-default-rtdb.firebaseio.com"
      }
      // else if(extract=="Excel" && extractData == "categorylinks"){
      else if(extractData == "categorylinks"){
        filename = "dealshublinks-firebase-adminsdk-2q397-1d74ec028d"
        console.log("getAccessToken Prod Excel Categories(dealshubglobal)")
        url = "https://dealshublinks-default-rtdb.firebaseio.com"
      }
      else{
        url = "https://dealshubglobal-default-rtdb.firebaseio.com"
        filename = "dealshubglobal-firebase-adminsdk-7527s-a09ba4201e"
        console.log("getAccessToken Prod Telegram(dealshubglobal)")
      }
    } else if(env=="stage") {
      url = "https://avideals1-default-rtdb.firebaseio.com"
      // jsonFileName = "dailydeals"
    }

try{

  console.log('entered into  Firebase GET Seperate')
  const apiUrl = `${url}/${jsonFileName}.json`
 
    var requestOptions = {
      method: "GET",
//   headers: myHeaders,
//   body: app,
};
console.log('all1app web data')
console.log('api url is ',apiUrl)

// let chatid = "@all1appweb"
// await fetch(
  //   'https://dealshubglobal-default-rtdb.firebaseio.com/deals.json',
  // 'https://dealshubglobal-default-rtdb.firebaseio.com/deals.json',
  // `https://dealshubglobal-default-rtdb.firebaseio.com/deals.json?access_token=${access_token}`,
  // 'https://avideals1-default-rtdb.firebaseio.com/dailydeals.json',
  // 'https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json',
  await fetch(apiUrl,
  requestOptions
  )

  .then(response => response.json())
  .then(data => {
    const objectCount = Object.keys(data).length;
    console.log(`Success in Firebase Get. Response contains ${objectCount} objects.`);
    len = objectCount
  })
  .catch((error) => console.log("error", error));

    // len = result
  console.log("Length Inside Firebase GET is ",Object.keys(data).length)
//   console.log('hai'+JSON.stringify(result).includes("false"));
console.log('re api 2nd');
output = JSON.parse(result).includes("false");
// output = JSON.stringify(result).includes("false");


// 'https://avi1deals-default-rtdb.firebaseio.com/amazon.json',
// if(output){
//   console.log("Into output")
//   await fetch(
//     'https://dealshubglobal-default-rtdb.firebaseio.com/deals.json',
//   requestOptions
// )
// .then((response) => response.text())
// .then((result) => {
//   console.log("success",result)
//   // len = result
//   // len = Object.keys(result).length
//   console.log("Length Inside Firebase GET is ",result.length)

// //   console.log('hai'+JSON.stringify(result).includes("false"));
// output = JSON.stringify(result).includes("false");
//   })
// .catch((error) => console.log("error", error));
// }
// }
}
catch(e){
console.log(e);
}
// const keys = Object.keys(len);
// console.log('len ',len);
// console.log('Keys ',keys);
// console.log('Keys.length ',keys.length);

// Initialize a variable to store the total length
// let totalLength = 0;

// // Loop through the keys and add up the length of each object
// for (let i = 0; i < keys.length; i++) {
//   // totalLength += Object.keys(len[keys[i]]).length;
// }
console.log("totalLength ",len)
return len
}
exports.firebaseget = firebaseget;