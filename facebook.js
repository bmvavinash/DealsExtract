async function facebook(photo,link,text) {

  if(text.includes("&nbsp;")){
    text = text.replaceAll("&nbsp;","")
  }
  if(text.includes("#")){
    text = text.replaceAll("#","")
  }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


   
    access_token = "EAAKw6ZAutPZBoBOZCr6ktOX6PKk40mm4B4T09K3k9DGFV5U4vwPiRK1LtVfdeLeIoZAg1es2OCWANV7XTRW4m2TNNxcD4krqE2e6Fntt8sH33zMnmrkN7gzFE0CwUqq7Db6lDNhPyEJYZC2lS9T4gSaXLm7YU5uUn5bqb3bO1NNAryw0YJe4ZCeiGWFvZCtGyqkk5v9sHydByeQIlXPeZCp7TM8ZD"
try{

  var raw = JSON.stringify({
    
    photo:photo,
    // message:"Welcome to Avi All Deals",
    text:text,
    link:link,
    // caption: text


    // access_token:"EAAKw6ZAutPZBoBAEmUs7l6bf29fzMDCSJ6X5BRNearSgLLO9tJVEdyiZAwEgZCZBKV7ktZBUAxkRZB3BpTsi7vpooOeNiu6WDdPBzeTBBHMrSFaPBoxz9Ti1teLNennLLiTKKnU3Hde6pQmAZBeMXmkieeSjq4kNvp54UdmZAZBAnSLZBTEZBqJ0ZC7TojdB8WutHcWAecin50f7czAVJUZANSrKcH",
});

//working url for image and caption
// https://graph.facebook.com/109973278731533/photos?url=https://i.postimg.cc/gk6KnpXp/Avi-Deals.png&caption=Amazon Deals on https://affiliiate-app.firebaseapp.com&EAADQM9ltnuYBAEcukShIVEsTQPHNqOmeSZBkoXqH2S3NCACs3pr1F5ikbA8yGlWKdqqYDxqHhgwKvzHc6AdKZAjUZCcPQpmz57OGKBzyNuDA2nudYux6F53MY8vhoHnKDhEI62i1d711qjQyrWZADXBWZBt4sr1n6nTFGOomP2srSAmU2m3ZBjWC9TQ1nKlXcZCmxP9kcGTZBBYQeyAgDI5BLmnavkpM4tblKKZBtIZCwQzth2Ld85ZAAmV

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
};
let fblink = `https://graph.facebook.com/me/photos?url=${photo}&caption=${text}&access_token=${access_token}`
console.log('all1app facebook data')
console.log("Facebook Link is "+fblink)
    // let chatid = "@all1appweb"
  await fetch(
    `https://graph.facebook.com/me/photos?url=${photo}&caption=${text}&access_token=${access_token}`,
    
    requestOptions
    // `https://graph.facebook.com/me/feeds/photos?url=${photo}&caption=${text}&${access_token}`,

    
    //without image and with link
    // `https://graph.facebook.com/109973278731533/feed?message=${text}&link=${link}&access_token=EAAKw6ZAutPZBoBACFnTTOYlNiHqV4gHVW8oN0vsQ22tsiBPvDswVZCMWwrCQ3KGL6yh2LBsCmD5voVH7PoHKMAZBgGgK8e0G47Njo5oaODjOjADrDwaDs3h7HduSBQ2j8LmPCUNRYPcfnq5QdmrgVp9AtmWwjdBvTJMyCtJZC2FySOKbKjgKJs7kzYI4SSCnfHDCrgaj8vjDDJjr6UK1f`,
    // `https://graph.facebook.com/109973278731533/photos?url=${photo}&caption=${text}&${access_token}`,
    // access_token=
    // &link=${link}
    // "https://graph.facebook.com/v16.0/me/",
    // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
    
    )
    .then((response) => response.text())
    .then((result) => {console.log("success for Facebook",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
    console.log('re api 2nd');
    output = JSON.stringify(result).includes("false");
  })
  .catch((error) => console.log("error", error));
  
  if(output){
    await fetch(
      `https://graph.facebook.com/me/photos?url=${photo}&caption=${text}&access_token=${access_token}`,
      requestOptions
        //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
        // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
        //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
//   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
)
.then((response) => response.text())
.then((result) => {console.log("success",result)
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
return `https://graph.facebook.com/me/photos?url=${photo}&caption=${text}&access_token=${access_token}`;
// return `https://graph.facebook.com/me/feeds/photos?url=${photo}&caption=${text}&${access_token}`;
}
exports.facebook = facebook;