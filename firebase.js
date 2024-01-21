async function firebase(app) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    // let chatid = chat_id
try{

  const payload = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com'
  };
//     if(Input[i]!=undefined)
//       if(Input[i].from!=undefined)
//   if(!Input[i].from.includes("All1App")){
    console.log('entered into all1app web Firebase Seperate')
  // var raw = JSON.stringify({
  // var raw = JSON.parse({
  var raw ={
    "photo": "https://m.media-amazon.com/images/I/61URvoFTTEL._SY355_.jpg"
    // photo: "/"+Input[i].photo,
    // photo: 'F:/Study/Affiliate/selenium/Selenium Example/'+Input[i].photo,
    // photo: "F:\\Study\\Affiliate\\selenium\\Selenium Example\\photos\\photo_26290@29-10-2022_00-06-21.jpg",
    // chat_id: "@all1app",
    // text:text,
    // photo:photo,
    // date:date
    
}
// );

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: payload,
  // body: app,
};
console.log('all1app firebase post data')
console.log('request Body is ',app)
    // let chatid = "@all1appweb"
  await fetch(
    'https://avi1deals-default-rtdb.firebaseio.com/amazon.json',
    // 'https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json',
    requestOptions
)
// .then((response) => response.text())
.then((response) => response.json())
.then((result) => {console.log("success in Firebase Post",result)
//   console.log('hai'+JSON.stringify(result).includes("false"));
console.log('re api 2nd');
output = JSON.parse(result).includes("false");
// output = JSON.stringify(result).includes("false");
})
.catch((error) => console.log("error", error));

if(output){
  await fetch(
    // 'https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json',
    'https://avi1deals-default-rtdb.firebaseio.com/amazon.json',
requestOptions
)
.then((response) => response.json())
.then((result) => {
  console.log("success",result)
  console.log("Length Inside Firebase is ",result.length)

//   console.log('hai'+JSON.stringify(result).includes("false"));
output = JSON.stringify(result).includes("false");
  })
.catch((error) => console.log("error", error));
}
// }
}
catch(e){
console.log(e);
}
}
exports.firebase = firebase;