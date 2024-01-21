
//@needed
const { By, Key, Builder, Button, until } = require("selenium-webdriver");
require("url").URLSearchParams;
const { urlIs } = require("selenium-webdriver/lib/until");
//@chrome
require("chromedriver");
const { Options } = require("selenium-webdriver/chrome");
const fetch = require("node-fetch");
global.fetch = fetch;
global.Headers = fetch.Headers;
const fs = require("fs");
const FormData = require("form-data");
var chrome = require("selenium-webdriver/chrome");
const { get } = require("selenium-webdriver/http");
const { WebElement } = require("selenium-webdriver");
const { telegram } = require("./telegram");
const { whatsapp } = require("./whatsapp");
const { facebook } = require("./facebook");
const { driverLocation } = require("selenium-webdriver/common/seleniumManager");
const { firebase } = require("./firebase");
const { firebaseget } = require("./firebaseget");
const { type } = require("os");
const { firebasepost } = require("./postapi");
global.XMLHttpRequest = require("xhr2");
var xhr = new global.XMLHttpRequest();
const axios = require("axios").default;
let pricelinks = "", photolinks = "",
  urlvalue1 = "";
let chat_id = "@all1app";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E"; //alldeals
function calculatePrice(price){
  if (price.includes(",")) {
    console.log(", Symbol found");
    price = price.replaceAll(",","")
  }
  if (price.includes("₹")) {
    console.log("Rupee Symbol found");
    price = price.substring(price.indexOf("₹")+1, price.length);
  }
  if (price.includes(".")) {
    if (price.indexOf(".")) {
      console.log("Dot Symbol found");
      price = price.substring(0, price.indexOf("."));
    }
  }
  console.log("Price in fun is ",price)
  return Number(price)
}
function appendCategory(price=0,discount=0,photo="",mainCategory="",c1="",c2="",c3="",c4="",c5=""){
  let cat = photo + " \n" + mainCategory + c1+" \n"+c2+" \n"+c3 +" \n"+c4+" \n"+c5 + " \n"+ "pryce"+price+" \ndicos"+discount;
  return cat
}
function calculateDiscount(discount){
  console.log("Entered into Calculate Discount")
  if (discount != "") {
    if (discount.charAt(0) == "-") {
      discount = discount.substring(1, discount.length);
    }
    if (discount.includes("off")) {
      discount = discount.substring(0, discount.indexOf("off"));
      console.log("new discount is " + discount);
    }
    if (discount.includes("%")) {
      discount = discount.substring(0, discount.indexOf("%"));
      console.log("new discount is " + discount);
    }
    disco = Number(discount);
    return disco
  }
}
async function example() {
  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  driver = await chrome.Driver.createSession(options);
  //@Firefox
  const Input =
[
   {
    "id": 114617,
    "type": "message",
    "date": "2023-10-06T23:01:27",
    "date_unixtime": "1696613487",
    "from": "TR9 Deals",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1166,
    "height": 461,
    "text": [
     "JBL Tune 760NC,Over Ear Active Noise Cancellation Headphones with Mic ",
     {
      "type": "mention",
      "text": "@4499"
     },
     "\n\n🔗",
     {
      "type": "link",
      "text": "https://amzn.to/45kZvFl"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "JBL Tune 760NC,Over Ear Active Noise Cancellation Headphones with Mic "
     },
     {
      "type": "mention",
      "text": "@4499"
     },
     {
      "type": "plain",
      "text": "\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45kZvFl"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
    ];
  //Amazon Login
  let linkvalue;
  let isDeal = false;
  let isOffer = false;
  let avinashbmv = "";
  let bmvavinash = "";
  let offers = "";
  let avideals = "";
  let avideals5 = "";
  let avideals6 = "";
  let avideals7 = "";
  let avideals8 = "";
  let avideals9 = "";
  let avideals10 = "";
  let avideals11 = "";
  let avideals12 = "";
  let avideals13 = "";
  let avideals14 = "";
  let avideals15 = "";
  let avideals16 = "";
  let avideals17 = "";
  let avideals18 = "";
  let avideals19 = "";
  let avideals20 = "";
  let mainCategory = "";
  let c1 = "";
  let c2 = "";
  let c3 = "";
  let c4 = "";
  let c5 = "";
  let i = 0,
    j = 0;
let flipkart = false
let meesho = false
let myntra = false
let oneplus = false
let ajio = false
let plumgoodness = false
let beardo = false
let tatacliq = false
let clovia = false
let itemType = ""
let itemText = ""
  let Links;
  let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
  let chatId = "@all1app";
  let watscode = "FfH1v13f7dVA5ZHVvzEW3E";
  let text = "";
  let urltext = "";
  let ta = "";
  let btext = "";
  let disable_web_page_preview = 1;
  let photo = "";
  let getcount = 0;
  let disco = 0;
  let skipped = 0;
  let overallskipped = 0;
  let usedget = 0;
  let discount = "";
  let otherurl = "";
  let newurl = "";
  let disc = false;
  let telegramVisit = true;
  let itemcategory = "";
  let price = "",
   earnlink = "",
    pricenum = 0;
  let id = 1489;
  let len = 0;
    let idlen = "https://avi1deals-default-rtdb.firebaseio.com/amazon.json";
  let access_token =
    "EAAKw6ZAutPZBoBAMi8kHibuNJ0LedkfqkBQfjEsDHn4ISofSEHHx9FCbCptO7bRziRwdFhVnewrAttIZCSOicbZBQQmPbpCds5RTzm1W42UuekgcnJ4uoBFPtXTKJHAYEvjnAN4goYeDr6NovB93LcExo6BLlQJLwBJR5j9LFMGrIwAs0piXYAVmBapyLZAO3mUmDC22xn2vhJLn6Jo7l";
  let mention = "";
  let otherUrls = "";
  len = await firebaseget();
  id = len
  console.log("Await length is ",len)
  for (i = 0; i < Input.length; i++) {
    discount = "";
    photo = "";
    watscode = "";
    price = "";
    disco = 0;
    pricenum = 0;
    caption = "";
    disc = false;
    telegramVisit = true;
    itemcategory = "";
    avinashbmv = "";
    bmvavinash = "";
    offers = "";
    avideals = "";
    avideals5 = "";
    avideals6 = "";
    avideals7 = "";
    avideals8 = "";
    avideals9 = "";
    avideals10 = "";
    avideals11 = "";
    avideals12 = "";
    avideals13 = "";
    avideals14 = "";
    avideals15 = "";
    avideals16 = "";
    avideals17 = "";
    avideals18 = "";
    avideals19 = "";
    avideals20 = "";
    mainCategory = "";
    itemType = "";
    itemText = "";
    c1 = "";
    c2 = "";
    c3 = "";
    c4 = "";
    c5 = "";
    text = "";
    btext = "";
    photo = "";
    caption = "";
    discount = "";
    price = "";
    pricenum = 0;
    disco = 0;
    disc = false;
    itemcategory = "";
    if (Input[i] != undefined)
      if (Input[i].text_entities != undefined)
        try {
          console.log("New item")
          for (j = 0; j < Input[i].text_entities.length; j++) {
            try {
              if (!Input[i].text_entities[j].type.includes("link")) {
                if (Input[i].text_entities[j].type == "mention") {
                  mention = Number(Input[i].text_entities[j].text.substring(1));
                  console.log("skipping in mention")
                  continue;
                }
                if (Input[i].from.includes("All1App")) {
                  if (Input[i].text_entities[j].text.includes("#")) {
                    console.log("skipping in #")
                    //changed on 1-12-22
                    continue;
                  }
                }
                if (Input[i].text_entities[j].text.includes("\n")) {
                  Input[i].text_entities[j].text = Input[i].text_entities[
                    j
                  ].text.replaceAll("\n", "");
                }
                if (Input[i].text_entities[j].text.includes("Loot")) {
                  Input[i].text_entities[j].text = Input[i].text_entities[
                    j
                  ].text.replaceAll("Loot", "");
                }
                if (Input[i].text_entities[j].text.includes("Looot")) {
                  Input[i].text_entities[j].text = Input[i].text_entities[j].text.replaceAll("Looot", "");
                }
                try{
                if (Input[i].text_entities[j].text.includes("off")) {
                  Input[i].text_entities[j].text = Input[i].text_entities[j].text.substring(Input[i].text_entities[j].text.indexOf("off"),Input[i].text_entities[j].text.length);
                }
              }
              catch(e){
                console.log("% off error")
              }
                text = text + Input[i].text_entities[j].text + "\n";
                if (Input[i].text_entities[j].type == "mention") {
                  text = text + " \n";
                  if (text.includes("Deal Price")) {
                  }
                  if (Input[i] != undefined)
                    if (Input[i].text_entities.length > j) j++; //changes on 1-12-2022
                }
                continue;
              }
              else if ((Input[i].text_entities[j].type.includes("link")) && (!(Input[i].text_entities[j].text.includes("amzn")))) {
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type.includes("link"));
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type);
                console.log("Amazon value Amzn Links ",(Input[i].text_entities[j].text));
                console.log("Amazon value Amzn Links ",!(Input[i].text_entities[j].text.includes("amzn")));
                  console.log("Entered into Other than Amzn Links");
                await driver.get(Input[i].text_entities[j].text);
                let strUrl = await driver.getCurrentUrl();
                console.log('Other than Amazon Url is ',strUrl);
                if(strUrl.includes("linkredirect")){
                  await driver.get(strUrl);
                  strUrl = await driver.getCurrentUrl();
                  console.log('After redirect Url is ',strUrl);
                }
                if(strUrl.includes("flipkart")){
                  itemType = "Flipkart"
                  flipkart = true;
                  try{
                    try{
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[1]/h1/span[2]')).getAttribute("innerHTML");
                    console.log("Flipkart Text is 1st is ",itemText)
                    }
                    catch(e){
                      console.log("1st Flipkart Text error")
                    }
                    try{
                      if(itemText == ""){
                        itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[1]/h1/span[2]')).getAttribute("innerHTML");
                        console.log("Flipkart Text is 2nd is ",itemText)
                      }
                    }
                    catch(e){
                      console.log("2nd Flipkart Text error")
                    }
                    try{
                      if(itemText == ""){
                        itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/h1/span')).getAttribute("innerHTML");
                        console.log("Flipkart Text is 3rd is ",itemText)  
                      }
                    }
                    catch(e){
                      console.log("2nd Flipkart Text error")
                    }
                    try{
                    price = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/div[1]')).getAttribute("innerHTML");
                    console.log("Flipkart price 1st is ",price)
                    }
                    catch(e){
                      console.log("1st Flipkart Price error")
                    }
                    if(price=="" || price == NaN){
                      try{
                      price = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1]')).getAttribute("innerHTML");
                      console.log("Flipkart price 2nd is ",price)
                      }
                      catch(e){
                        console.log("2nd Flipkart Price error")
                      }
                    }
                    if(price==""|| price == NaN){
                      try{
                      price = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[2]/div[1]/div/div[1]')).getAttribute("innerHTML");
                      console.log("Flipkart price 3rd is ",price)
                      }
                      catch(e){
                        console.log("3rd Flipkart Price error")
                      }
                    }
                    if(price==""|| price == NaN){
                      try{
                      price = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[3]/div[1]/div/div[1]')).getAttribute("innerHTML");
                      console.log("Flipkart price 4th is ",price)
                      }
                      catch(e){
                        console.log("4th Flipkart Price error")
                      }
                    }
                    if(price==""|| price == NaN){
                      try{
                      price = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[1]')).getAttribute("innerHTML");
                      console.log("Flipkart price 5th is ",price)
                      }
                      catch(e){
                        console.log("5th Flipkart Price error")
                      }
                    }
                  console.log("Flipkart price is ",price)
                  pricenum = calculatePrice(price)
                  console.log("Flipkart price int is ",pricenum)
                  }
                  catch(e){console.log("error in Flipkart price")}
                  try{
                    try{
                  discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Flipkart discount 1st")
                  }
                  if(discount == "" || discount == NaN || discount == undefined || discount.length >8){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 2nd")
                    }
                  }
                  if(discount == "" || discount == NaN || discount == undefined || discount.length >8){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[2]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 3rd")
                    }
                  }
                  if(discount == ""|| discount == NaN || discount == undefined || discount.length >8){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[3]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 4th")
                    }
                  }
                  if(discount == ""|| discount == NaN || discount == undefined || discount.length >8){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 4th")
                    }
                  }
                  console.log("Flipkart discount is ",discount)
                  disco = calculateDiscount(discount)
                  console.log("Flipkart discount int is ",disco)
                }
                catch(e){console.log("error in Flipkart discount")}
                try{
                  if(c1 == "" || c1 == NaN){
                    try{
                    c1 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[2]/a')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("c1")
                    }
                  }
                  if(c1 == "" || c1 == NaN){
                    try{
                    c1 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("c1")
                    }
                  }
                  console.log("Flipkart c1 is ",c1)
                }
                catch(e){console.log("error in Flipkart c1")}
                try{
                  if(c2 == "" || c2 == NaN){
                    try{
                    c2 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[3]/a')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("c2")
                    }
                  }
                  if(c2 == ""|| c2 == NaN){
                    try{
                    c2 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("c2")
                    }
                  }
                  console.log("Flipkart c2 is ",c2)
                }
                catch(e){console.log("error in Flipkart c2")}
                try{
                  if(c3 == "" || c3 == NaN){
                    try{
                  c3 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[4]/a')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("c3")
                  }
                  }
                  if(c3 == "" || c3 == NaN){
                    try{
                  c3 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("c3")
                  }
                  }
                  console.log("Flipkart c3 is ",c3)
                  }
                  catch(e){console.log("error in Flipkart c3")}
                  try{
                    try{
                      photo = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[2]/div/img')).getAttribute("src");
                    }
                    catch(e){
                      console.log("Flipkart pic 1")
                    }
                    console.log("Flipkart photo is ",photo)
                    if(photo == "" || photo.length >100 ){
                      console.log("Flipkart photo 2nd is ",photo)
                      try{
                        photo = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[2]/img')).getAttribute("src");
                    }
                    catch(e){
                      console.log("Photo error")
                    }
                    console.log("2nd Photo")
                  }
                  console.log("Flipkart photo is ",photo)
                  itemcategory = appendCategory(pricenum,disco,photo,"",c1,c2,c3)
                  }
                  catch(e){console.log("error in Flipkart photo",e)}
                  try{
                    if(itemText == ""){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[5]/a')).getAttribute("innerHTML");
                      console.log("Item Text 2st")
                    }
                  }
                  catch(e){
                    console.log("Item Text end Error 1st ")
                  }
                  try{
                    if(itemText == ""){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[4]/a')).getAttribute("innerHTML");
                      console.log("Item Text 3st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 2nd")
                }
                  try{
                    if(itemText == ""){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[3]/a')).getAttribute("innerHTML");
                      console.log("Item Text 2st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 3st ")
                }
                try{
                    if(itemText == ""){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[2]/a')).getAttribute("innerHTML");
                      console.log("Item Text 3st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 4nd")
                }
                try{
                  if(itemText == ""){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[6]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText == ""){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[5]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText == ""){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[4]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText == ""){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[3]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText == ""){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[2]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
              }
                if(strUrl.includes("meesho")){
                  meesho = true;
                  price = await driver.findElement(By.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[1]/div[1]/h4')).getAttribute("innerHTML");
                  console.log("Meesho price is ",price)
                }
                if(strUrl.includes("myntra")){
                  myntra = true;
                  itemType = Myntra
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[2]/div[2]/div[1]/div/p[1]/span[1]/strong')).getAttribute("innerHTML");
                  console.log("Myntra price is ",price)
                  pricenum = calculatePrice(price)
                  console.log("Myntra price is ",pricenum)
                  }
                  catch(e){
                    console.log("Myntra price error")
                  }
                  try{
                  discount = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[2]/div[2]/div[1]/div/p[1]/span[3]')).getAttribute("innerHTML");
                  console.log("Myntra discount is ",discount)
                  disco = calculateDiscount(discount)
                  console.log("Myntra discount int is ",disco)
                  }
                  catch(e){
                    console.log("Myntra discount error")
                  }
                  try{
                  c1 = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[1]/a[3]')).getAttribute("innerHTML");
                  console.log("Myntra c1 is ",c1)
                  }
                  catch(e){
                    console.log("Myntra c1 error")
                  }
                  try{
                  c2 = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[1]/a[4]')).getAttribute("innerHTML");
                  console.log("Myntra c2 is ",c2)
                  }
                  catch(e){
                    console.log("Myntra c2 error")
                  }
                  try{
                  c3 = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[1]/a[5]')).getAttribute("innerHTML");
                  console.log("Myntra c3 is ",c3)
                  }
                  catch(e){
                    console.log("Myntra c3 error")
                  }
                  try{
                  c4 = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[1]/a[6]')).getAttribute("innerHTML");
                  console.log("Myntra c4 is ",c4)
                  }
                  catch(e){
                    console.log("Myntra c4 error")
                  }
                  try{
                  photo = await driver.findElement(By.xpath('//*[@id="mountRoot"]/div/div[1]/main/div[2]/div[2]/div[2]/div[1]/div/a[1]/img')).getAttribute("innerHTML");
                  console.log("Myntra photo is ",photo)
                  itemcategory = appendCategory(price,discount,photo,"",c1,c2,c3,c4)
                  }
                  catch(e){
                    console.log("Myntra photo error")
                  }
                }
                if(strUrl.includes("oneplus")){
                  oneplus = true;
                  //dummy data
                  price = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]')).getAttribute("innerHTML");
                  discount = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/span[3]')).getAttribute("innerHTML");
                  c1 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[5]/a')).getAttribute("innerHTML");
                  c2 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[4]/a')).getAttribute("innerHTML");
                  c3 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[3]/a')).getAttribute("innerHTML");
                  photo = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[2]/div/div[2]/div[2]/div/div/div/div[6]/div/img')).getAttribute("src");
                }
                if(strUrl.includes("ajio")){
                  ajio = true;
                  try{
                    if(price=="" || price == NaN){
                      price = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]')).getAttribute("innerHTML");
                    }
                  console.log("Ajio price",price)
                  }
                  catch(e){
                    console.log("Error Ajio price")
                  }
                  try{
                    if(discount=="" || discount == NaN){
                      discount = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/span[3]')).getAttribute("innerHTML");
                    }
                  console.log("Ajio discount")
                  }
                  catch(e){
                    console.log("Error Ajio discount",discount)
                  }
                  try{
                    if(c1=="" || c1 == NaN){
                      c1 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[5]/a')).getAttribute("innerHTML");
                    }
                  console.log("Ajio c1",c1)
                  }
                  catch(e){
                    console.log("Ajio c1")
                  }
                  try{
                    if(c2=="" || c2 == NaN){
                      c2 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[4]/a')).getAttribute("innerHTML");
                    }
                  console.log("Ajio c2",c2)
                  }
                  catch(e){
                    console.log("Error Ajio c2")
                  }
                  try{
                    if(c3=="" || c3 == NaN){
                      c3 = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[1]/ul/li[3]/a')).getAttribute("innerHTML");
                    }
                  console.log("Ajio c3",c3)
                  }
                  catch(e){
                    console.log("Error Ajio c3")
                  }
                  try{
                    if(photo=="" || photo == NaN){
                      photo = await driver.findElement(By.xpath('//*[@id="appContainer"]/div[2]/div/div/div[2]/div/div[2]/div/div[2]/div[2]/div/div/div/div[6]/div/img')).getAttribute("src");
                    }
                    console.log("Ajio photo",photo)
                  }
                  catch(e){
                    console.log("Error Ajio photo")
                  }
                }
                if(strUrl.includes("plumgoodness")){
                  plumgoodness = true;
                }
                if(strUrl.includes("beardo")){
                  beardo = true;
                }
                if(strUrl.includes("tatacliq")){
                  tatacliq = true;
                }
                if(strUrl.includes("clovia")){
                  clovia = true;
                }
                if(!Input[i].from.includes("All1App")){
                otherUrls = otherUrls + strUrl + "\n"
                earnlink = "https://inrdeals.com/bmvavinash/"+strUrl
                //earnlink not working
              }
              try{
                if(pricenum>0){
                  itemText = itemText + " price is " + pricenum 
                } 
              }
              catch(e){
                console.log("Price Error")
              }
              try{
                if(disco>0){
                  itemText = disco + "% off on " + itemText
                }
              }
              catch(e){
                console.log("Discount Error")
              }
              itemText = itemText +" "+ earnlink;
              if(itemText.includes("&amp;")){
                itemText = itemText.replaceAll("&amp;","&")
              }
              if(itemcategory.includes("&amp;")){
                itemcategory = itemcategory.replaceAll("&amp;","&")
              }
              if((Input[i].from.includes("All1App")) && telegramVisit){
                  telegramVisit = false
                  console.log("Only All1app")
                  itemText = "#" + Input[i].tipe +" : \n" + itemText +" \n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
                  try{
                  if(photo == "" || photo.length >300){
                    try{
                    if ((Input[i].text_entities[j+1].type.includes("link")) && (!(Input[i].text_entities[j+1].text.includes("image")))){
                      photo = Input[i].text_entities[j+1].text
                    }
                  }
                  catch(e){
                    console.log('Photo Data err1')
                  }
                    try{
                    if ((Input[i].text_entities[j+2].type.includes("link")) && (!(Input[i].text_entities[j+2].text.includes("image")))){
                      photo = Input[i].text_entities[j+2].text
                    }
                  }
                  catch(e){
                    console.log('Photo Data err2')
                  }
                    try{
                    if ((Input[i].text_entities[j+3].type.includes("link")) && (!(Input[i].text_entities[j+3].text.includes("image")))){
                      photo = Input[i].text_entities[j+3].text
                    }
                  }
                  catch(e){
                    console.log('Photo Data err2')
                  }
                  }
                }
                catch(e){
                  console.log("Image Data take error")
                }
                  telegram(photo,"@all1app",itemText);//to be reverted
                  let link = `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
                  if(disco >= 75){
                    isDeal = true;
                    telegram(photo,"@all1appdeals",itemText);//to be reverted
                    if(itemText.includes("&nbsp;")){
                      itemText = itemText.replaceAll("&nbsp;","")
                    }
                    if(itemText.includes("#")){
                      itemText = itemText.replaceAll("#","")
                    }
                    fbdata = facebook(photo, link, itemText);
                    console.log("FbData other than Amazon" + fbdata)
                  }
                  break;//check not to repeat to amazon telegram
                }
                if(!Input[i].from.includes("All1App")){
                telegram(photo,"@all1appweb",itemText);
                try {
                  id+=1
                    var app = {
                    "id": id,
                    "date": String(Input[i].date.split("T")[0]),
                    "photo": String(photo),
                    "urltext": String(urltext),
                    "price": String(pricenum),
                    "discount": String(disco),
                    "category": {
                      "mainCategory": mainCategory,
                      "c1": String(c1),
                      "c2": String(c2),
                      "c3": String(c3),
                      "c4": String(c4),
                      "c5": String(c5),
                    },
                    "links": {
                      "avinashbmv": String(strUrl)
                    },
                  }
                    var product = {
                    [`product${id}`]:{  
                      "id": id,
                      "date": String(Input[i].date.split("T")[0]),
                      "photo": String(photo),
                      "urltext": String(urltext),
                      "price": String(pricenum),
                      "discount": String(disco),
                      "category": {
                        "mainCategory": mainCategory,
                        "c1": String(c1),
                        "c2": String(c2),
                        "c3": String(c3),
                        "c4": String(c4),
                        "c5": String(c5),
                      },
                      "links": {
                        "avinashbmv": String(strUrl)
                      },
                  },
                  }
                  console.log("calling firebase");
                  if(photo != "" && photo.length <300 && pricenum>0 && disco>0){
                    telegram(photo,"@all1appdaily",text + "\n"+ earnlink +"\n" + itemcategory +"\n"+"itemTipe" + itemType);
                    path = "amazon.json"
                    path = "deals.json"
                    firebasepost(app);
                  }
                  else if(photo != "" && photo.length <300){
                    console.log("Price or discount not found")
                    pricelinks += earnlink + "\n"
                  }
                  else if(pricenum>0 ){
                    console.log("Photo not found")
                    photolinks += earnlink + "\n"
                  }
                } 
                catch (e) {
                  console.log("firebase error", e);
                }
                console.log('Called telegram for other than amazon')
                text = "";
                btext = "";
                photo = "";
                itemText = "";
                console.log('Clearing all the values')
                break;
              }
              }
              Links = Input[i].text_entities[j].text;
              if (Input[i].from.includes("Telugu Tech World")) {
                Links = Input[i].text_entities[j].href;
              }
              //commenting for Facebook
              await driver.get(Links);
              try {
                let asin = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="productDetails_detailBullets_sections1"]/tbody/tr[1]/td'
                    )
                  )
                  .getAttribute("innerHTML");
                console.log("Asin Data ", asin);
              } catch (e) {
                console.log("Asin error");
              }
              await driver
              .findElement(By.id("landingImage"))
              .getAttribute("src")
              .then(
                function (webElement) {
                    photo = webElement;
                    console.log(photo);
                    itemcategory = itemcategory + " \n " + photo + " \n\n";
                  },
                  function (err) {
                    if (err.state && err.state === "no such element") {
                      console.log("Image not found so cleared all details");
                      //without image
                      text = "";
                      btext = "";
                      photo = "";
                    }
                    }
                    );
                    console.log('Image Take')
                    if(photo=="" || photo.length >200){
              await driver.wait(until.elementLocated(By.id("landingImage")),3000).getAttribute("src").then(function (webElement){
                    console.log('WebElement is '+webElement);
                    photo = webElement;
                    console.log("Photo is ",photo);
                    itemcategory = itemcategory + " \n " + photo + " \n\n";
                  },
                  function (err) {
                    console.log("Image not found so cleared all details",err);
                    if (err.state && err.state === "no such element") {
                      console.log("Image else loop real clearing");
                      //without image
                      text = "";
                      btext = "";
                      photo = "";
                    }
                    }
                    );
                  }
              console.log('image: '+photo)
              try{
                if(photo=="" || photo.length >200){
                  photo = await driver.findElement(By.xpath('//*[@id="main-image-container"]/ul/li[5]/span/span/div/img')).getAttribute("src");
                  console.log("Photo in other is ",photo)
                }
              }
              catch(e){
                console.log("2nd Log")
              }
              try{
                if(photo=="" || photo.length >200){
                  photo = await driver.findElement(By.id("imgTagWrapperId")).getAttribute("src");
                  console.log("Photo in other is ",photo)
                }
              }
              catch(e){
                console.log("2nd Log")
              }
              try{
                if(photo=="" || photo.length >200){
                  photo = await driver.findElement(By.id("landingImage")).getAttribute("src");
                  console.log("Photo in other is ",photo)
                }
              }
              catch(e){
                console.log("2nd Log")
              }
              try{
              if(photo=="" || photo.length >200){
                photo = await driver.findElement(By.id('imgTagWrapperId')).getAttribute("src");
                console.log("Photo in other is ",photo)
              }
            }
            catch(e){
              console.log("2nd Log")
            }
            try{
            if(photo == ""){
              if(Input[i].text_entities[j].type == "link" && (Input[i].text_entities[j].text.includes("media"))){
                photo = Input[i].text_entities[j].text
              }
            }
          }
          catch(e){
            console.log("Error in Json Photo")
          }
            try {
              let asin = await driver
                .findElement(
                  By.xpath(
                    '//*[@id="productDetails_detailBullets_sections1"]/tbody/tr[1]/td'
                  )
                )
                .getAttribute("innerHTML");
              console.log("Asin Data ", asin);
            } catch (e) {
              console.log("Asin error");
            }
              try {
                try{
                discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("innerHTML");
                }
                catch(e){
                  console.log("Discount error")
                }
                try{
                  console.log("Discount if Loop",discount)
                  if(discount == NaN || discount == "" || discount.length >8){
                    console.log("Correct Discount")
                    discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]')).getAttribute("innerHTML");
                    console.log("Correct Discount Output",discount)
                  }
                }
                catch(e){
                  console.log("Discount error")
                }
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]
                if (discount == "" || discount == undefined || discount == NaN || discount.length >8) {
                  await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]")).getAttribute("innerHTML").then(function (webElement) {
                        discount = webElement;
                      },
                      function (err) {
                        if (err.state && err.state === "no such element") {
                          console.log("Discount not found");
                        }
                      }
                    );
                } else {
                  console.log("Discount Found Out is " + discount);
                }
              } catch (e) {
                console.log(e);
              }
              try {
                if (discount != "") {
                  if (discount.charAt(0) == "-") {
                    discount = discount.substring(1, discount.length);
                  }
                  if (discount.charAt(discount.length - 1) == "%") {
                    discount = discount.substring(0, discount.length - 1);
                    console.log("new discount is " + discount);
                  }
                  disco = Number(discount);
                  disc = Number(discount) >= 75;
                }
              } catch (e) {
                console.log(e);
              }
              //price data
              try {
                try {
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]')).getAttribute("innerHTML");
                } catch (e) {
                  console.log("Price New Error");
                }
                try {
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[3]/span[2]/span[2]')).getAttribute("innerHTML");
                } catch (e) {
                  console.log("Price New Error");
                }
                try{
                if (price.length > 10) {
                  let pricecheck = "";
                  pricecheck = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]')).getAttribute("innerHTML");
                  if (pricecheck != "") {
                    price = pricecheck;
                  }
                }
               }
                catch(e){
                  console.log("Price > 10 error")
                }
                try{
                  if (price.includes("₹")) {
                    console.log("Rupee Symbol found");
                    price = price.substring(1, price.length);
                  }
                  if (price.includes(".")) {
                    if (price.indexOf(".")) {
                      console.log("Dot Symbol found");
                      price = price.substring(0, price.indexOf("."));
                    }
                  }
                }
              catch(e){
                console.log("Price Data Changes error")
              }
                if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                }
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[1]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]")).getAttribute("innerHTML");
                  }
                    catch(e){
                      console.log("Price Error")
                    }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                  }
                    catch(e){
                      console.log("Price Error")
                    }
                  //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error")
                  }
                } else if (price == "") {
                  try{
                  price = await driver.findElement(By.className("a-price-whole")).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error")
                  }
                } else if (price == "") {
                  try{
                  await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML")
                    .then(
                      function (webElement) {
                        console.log("Price exists");
                        price = webElement;
                      },
                      function (err) {
                        if (err.state && err.state === "no such element") {
                          console.log("Element not found for price");
                        }
                      }
                    );
                  }
                  catch(e){
                    console.log("Price Error")
                  }
                }
                else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error without discount")
                  }
                }
              } catch (e) {
                console.log(e);
              }
              try {
                console.log("Price Error 1",price);
                if (price.includes(",")) {
                  price = price.replaceAll(",", "");
                  console.log("Price Error 2",price);
                }
                if (price.includes("₹")) {
                  price = price.replaceAll("₹", "");
                  console.log("Price Error 3",price);
                }
                for (let k = 0; k < price.length; k++) {
                  if (Number.isInteger(Number(price[k]))) {
                    console.log("Price Error 3",price);
                    a = a + price[k];
                  }
                }
                price = a;
                pricenum = Number(price);
                if (pricenum == 0) {
                  break;
                }
              } catch (e) {
                console.log("Price Error");
              }
              try {
                let newitems = await driver
                  .findElement(By.id("nav-search-label-id"))
                  .getAttribute("innerHTML");
                mainCategory = newitems;
                itemcategory = itemcategory + "\n#" + newitems + "\n";
                console.log("item category is " + newitems);
                c1 = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[1]/span/a'
                    )
                  )
                  .getAttribute("innerHTML");
                if (c1.includes(" ")) {
                  c1.replaceAll(" ", "");
                }
                if (c1.includes("\n")) {
                  c1.replaceAll("\n", "");
                }
                if (c1.includes("&amp;")) {
                  c1 = c1.replaceAll("&amp;", "&");
                }
                itemcategory = itemcategory + c1;
                itemcategory = itemcategory.trim() + " ";
                c2 = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[3]/span/a'
                    )
                  )
                  .getAttribute("innerHTML");
                if (c2.includes(" ")) {
                  c2.replaceAll(" ", "");
                }
                if (c2.includes("\n")) {
                  c2.replaceAll("\n", "");
                }
                if (c2.includes("&amp;")) {
                  c2 = c2.replaceAll("&amp;", "&");
                }
                itemcategory = itemcategory + c2;
                itemcategory = itemcategory.trim() + " ";
                c3 = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[5]/span/a'
                    )
                  )
                  .getAttribute("innerHTML");
                if (c3.includes(" ")) {
                  c3.replaceAll(" ", "");
                }
                if (c3.includes("\n")) {
                  c3.replaceAll("\n", "");
                }
                if (c3.includes("&amp;")) {
                  c3 = c3.replaceAll("&amp;", "&");
                }
                itemcategory = itemcategory + c3;
                itemcategory = itemcategory.trim() + " ";
                c4 = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[7]/span/a'
                    )
                  )
                  .getAttribute("innerHTML");
                if (c4.includes(" ")) {
                  c4.replaceAll(" ", "");
                }
                if (c4.includes("\n")) {
                  c4.replaceAll("\n", "");
                }
                if (c4.includes("&amp;")) {
                  c4 = c4.replaceAll("&amp;", "&");
                }
                itemcategory = itemcategory + c4;
                itemcategory = itemcategory.trim() + " ";
                c5 = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[7]/span/a'
                    )
                  )
                  .getAttribute("innerHTML");
                if (c5.includes(" ")) {
                  c5.replaceAll(" ", "");
                }
                if (c5.includes("\n")) {
                  c5.replaceAll("\n", "");
                }
                if (c5.includes("&amp;")) {
                  c5 = c5.replaceAll("&amp;", "&");
                }
                itemcategory = itemcategory + c5;
                itemcategory = itemcategory.trim() + " ";
                itemcategory = itemcategory + asin;
                itemcategory = itemcategory.trim() + " ";
                itemcategory = itemcategory + "\n";
              } catch (e) {
                console.log("title tag error");
              }
              try {
                if (Input[i].from.includes("All1 deals")) {
                  itemcategory = itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[1]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory + "#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[2]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[3]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[4]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[5]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[6]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[7]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[8]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[9]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                }
              } catch (e) {
                console.log(" Category exceed Error");
              }
              try {
                if (price != "NaN") {
                  if (pricenum <= 0) {
                    pricenum = Number(price);
                  }
                  if (pricenum != 0) {
                    itemcategory = itemcategory + "\n";
                    itemcategory += "Pryce" + price + " ";
                  } else {
                    break;
                  }
                }
                if (disco != 0) {
                  itemcategory = itemcategory + "\n";
                  itemcategory += "Dicos" + disco + " ";
                }
                itemcategory = itemcategory + "\n";
                itemcategory = itemcategory + "itemtipeAmazon";
                console.log("Price is " + pricenum);
                console.log("Discount is " + disco);
              } catch (e) {
                console.log(e);
              }
              try {
                if (itemcategory.includes("&amp;")) {
                  itemcategory = itemcategory.replaceAll("&amp;", "&");
                }
                if (itemcategory.includes("&")) {
                  itemcategory.replaceAll("&", "");
                }
              } catch (e) {
                console.log("amp error");
              }
              //*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[3]/span/a
              //*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[7]/span/a
              let slink;
              //@Before Blocking Code
              //@Before Blocking Code
              //bmvavinash link take
              if (text.includes("Deal Price")) {
                text.indexOf("Deal Price");
                text = text.substring(0, text.indexOf("Deal Price"));
                text = text + "\n";
              }
              //Need to Change Compulsory !
              let l,
                count = 0;
              if (text.includes("offer")) {
                text = text.replaceAll("offer", "");
              }
              if (text.includes("Offer")) {
                text = text.replaceAll("Offer", "");
              }
              if (text.includes("🔥")) {
                text = text.replaceAll("🔥", "");
              }
              if (text.includes("🚀")) {
                text = text.replaceAll("🚀", "");
              }
              urltext = text;
              if(urltext.includes("\n")){
                urltext = urltext.replaceAll("\n","")
              }
              if(urltext.includes("+")){
                urltext = urltext.replaceAll("+","")
              }
              console.log("hello")
              for (l = 0; l < 1; l++) {
                if (!Input[i].from.includes("All1App")) {
                  //Only All1App Start
                  await driver.findElement(By.id("amzn-ss-text-link")).click();
                  await driver.findElement(By.id("amzn-ss-text-link")).click();
                  await driver.sleep(100);
                  try {
                    await driver
                      .findElement(By.id("a-autoid-1-announce"))
                      .click();
                    console.log("Direct Try Announce");
                  } catch (e) {
                    console.log("Calling Text Link Catch");
                    await driver
                      .findElement(By.id("amzn-ss-text-link"))
                      .click();
                    await driver.sleep(1200);
                    try {
                      console.log("Calling Text Link try inside catch");
                      await driver
                        .findElement(By.id("a-autoid-1-announce"))
                        .click();
                      await driver.sleep(1200);
                    } catch (e) {
                      console.log("Calling Text Link Catch inside catch");
                      await driver
                        .findElement(By.id("amzn-ss-text-link"))
                        .click();
                      await driver.sleep(1200);
                      try {
                        await driver
                          .findElement(By.id("a-autoid-1-announce"))
                          .click();
                      } catch (e) {
                        console.log("inside catch");
                        await driver
                          .actions()
                          .keyDown(Key.CONTROL)
                          .keyDown(Key.F4)
                          .keyUp(Key.F4)
                          .keyUp(Key.CONTROL)
                          .perform();
                      }
                      await driver.sleep(1200);
                    }
                  }
                  count = l;
                  while (count-- != 0) {
                    await driver
                      .actions()
                      .sendKeys(Key.UP) //bmvavinash
                      .sendKeys(Key.RETURN)
                      .perform();
                  } //while loop
                  await driver.sleep(1200);
                  await driver
                    .findElement(By.id("amzn-ss-get-link-btn-text-announce"))
                    .click();
                  await driver.sleep(1200);
                  await driver.sleep(1200);
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .getAttribute("innerHTML")
                    .then(
                      function (webElement) {
                        urlvalue1 = webElement;
                        console.log("Link Success " + urlvalue1);
                        if (urlvalue1 == "") {
                          console.log("empty url so Calling again");
                          l -= 1;
                        }
                      },
                      function (err) {
                        console.log("Link Err" + err);
                      }
                    );
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                  //@Duckduckgo
                  //To Change
                } //Only All1App Take
                try {
                  if (!Input[i].from.includes("All1App")) {
                    try {
                      switch (l + 1) {
                        case 1:
                          avinashbmv = urlvalue1;
                          break;
                        case 2:
                          bmvavinash = urlvalue1;
                          break;
                        case 3:
                          offers = urlvalue1;
                          break;
                        case 4:
                          avideals = urlvalue1;
                          break;
                        case 5:
                          avideals5 = urlvalue1;
                          break;
                        case 6:
                          avideals6 = urlvalue1;
                          break;
                        case 7:
                          avideals7 = urlvalue1;
                          break;
                        case 8:
                          avideals8 = urlvalue1;
                          break;
                        case 9:
                          avideals9 = urlvalue1;
                          break;
                        case 10:
                          avideals10 = urlvalue1;
                          break;
                        case 11:
                          avideals11 = urlvalue1;
                          break;
                        case 12:
                          avideals12 = urlvalue1;
                          break;
                        case 13:
                          avideals13 = urlvalue1;
                          break;
                        case 14:
                          avideals14 = urlvalue1;
                          break;
                        case 15:
                          avideals15 = urlvalue1;
                          break;
                        case 16:
                          avideals16 = urlvalue1;
                          break;
                        case 17:
                          avideals17 = urlvalue1;
                          break;
                        case 18:
                          avideals18 = urlvalue1;
                          break;
                        case 19:
                          avideals19 = urlvalue1;
                          break;
                        case 20:
                          avideals20 = urlvalue1;
                          break;
                        default:
                          break;
                      }
                    } catch (e) {
                      console.log("switch error");
                    }
                    text = text + urlvalue1 + "\n";
                    urlvalue1 = "";
                  } else {
                    console.log("Telegram Public Link else");
                    shortext = "";
                    let t1 = text;
                    switch (l + 1) {
                      case 1:
                        if (t1.includes(",")) {
                          shortext = t1.substring(0, t1.indexOf(","));
                        }
                        if (t1.includes("offer")) {
                          t1 = t1.replaceAll("offer", "");
                        }
                        if (t1.includes("🔥")) {
                          t1 = t1.replaceAll("🔥", "");
                        }
                        if (t1.includes("🚀")) {
                          t1 = t1.replaceAll("🚀", "");
                        }
                        if (t1.includes("@")) {
                          t1 = t1.substring(0, t1.indexOf("@"))
                        }
                        t1 =  Input[i].tipe + " : " +"\n" +
                          disco +
                          "% off on " +
                          t1 +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
                          if(t1.includes("&nbsp;")){
                            t1 = t1.replaceAll("&nbsp;","")
                          }
                        telegram(photo, "@all1app", t1);
                        //whatsapp
                        console.log("inside whatsapp11")
                        watscode = "FfH1v13f7dVA5ZHVvzEW3E";
                        await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                        try {
                          await driver
                            .wait(
                              until.elementLocated(
                                By.xpath(
                                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                                )
                              ),
                              30000
                            )
                            .click();
                          let s = t1.split("\n");
                          for (let q = 0; q < s.length; q++) {
                            await driver
                              .actions()
                              .sendKeys(s[q])
                              .keyDown(Key.SHIFT)
                              .keyDown(Key.RETURN)
                              .keyUp(Key.RETURN)
                              .keyUp(Key.SHIFT)
                              .perform();
                          }
                          await driver.sleep(3500);
                          await driver.actions().sendKeys(Key.RETURN).perform();
                          await driver.sleep(2500);
                          await driver
                            .wait(
                              until.elementLocated(
                                By.xpath(
                                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                                )
                              ),
                              30000
                            )
                            .click();
                          await driver.sleep(3500);
                          await driver
                            .actions()
                            .keyDown(Key.TAB)
                            .keyUp(Key.TAB)
                            .sendKeys(Key.RETURN)
                            .perform();
                        } catch (error) {
                          console.log("Whatsapp Error");
                        }
                        let link = `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
                        if (disco >= 75) {
                          isDeal = true;
                          telegram(photo, "@all1appdeals", t1);
                          if (t1.includes("affiliiate")) {
                            if(t1.includes("&nbsp;")){
                              t1 = t1.replaceAll("&nbsp;","")
                            }
                            if(t1.includes("#")){
                              t1 = t1.replaceAll("#","")
                            }
                            fbdata = facebook(photo, link, t1);
                            console.log("inside whatsapp11")
                            watscode = "DSyvXzBJuax5uJ6MFylXJk";
                            await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                            try {
                              await driver
                                .wait(
                                  until.elementLocated(
                                    By.xpath(
                                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                                    )
                                  ),
                                  30000
                                )
                                .click();
                              let s = t1.split("\n");
                              for (let q = 0; q < s.length; q++) {
                                await driver
                                  .actions()
                                  .sendKeys(s[q])
                                  .keyDown(Key.SHIFT)
                                  .keyDown(Key.RETURN)
                                  .keyUp(Key.RETURN)
                                  .keyUp(Key.SHIFT)
                                  .perform();
                              }
                              await driver.sleep(3500);
                              await driver.actions().sendKeys(Key.RETURN).perform();
                              await driver.sleep(2500);
                              await driver
                                .wait(
                                  until.elementLocated(
                                    By.xpath(
                                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                                    )
                                  ),
                                  3000
                                )
                                .click();
                              await driver.sleep(3500);
                              await driver
                                .actions()
                                .keyDown(Key.TAB)
                                .keyUp(Key.TAB)
                                .sendKeys(Key.RETURN)
                                .perform();
                            } catch (error) {
                              console.log("Whatsapp Error");
                            }
                          }
                          //api is working
                          //api is working
                          //*[@id="js_8d1"]/div/div/div/div
                          ta = t1;
                          t1 = "";
                        }
                        break;
                      case 2:
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/deals/product/${Input[i].id}`;
                        telegram(photo, "@avideals2", t1);
                        t1 = "";
                        break;
                      case 3:
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/offers/product/${Input[i].id}`;
                        telegram(photo, "@avideals3", t1);
                        t1 = "";
                        break;
                      case 4:
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/avideals/product/${Input[i].id}`;
                        telegram(photo, "@avideals4", t1);
                        t1 = "";
                        break;
                      default:
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/avideals${l}/product/${Input[i].id}`;
                          console.log("Avideals telegram")
                        telegram(photo, `@avideals${l}`, t1);
                        t1 = "";
                    }
                  }
                } catch (e) {
                  console.log(e);
                }
              } //for loop of Link
              if (!Input[i].from.includes("All1App")) {
                text = text + "\n @" + pricenum + "\n" + itemcategory + "\n";
              } else {
                if (text.includes("Deal Price")) {
                  text.indexOf("Deal Price");
                  text = text.substring(0, text.indexOf("Deal Price"));
                }
                //calling inside loop
                break; //@for now
              }
              console.log("checking whatsapp all1app in from ",Input[i].from)
              if (Input[i].from.includes("All1App")) {
                console.log("inside whatsapp11")
                watscode = "FfH1v13f7dVA5ZHVvzEW3E";
                await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                try {
                  await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                        )
                      ),
                      3000
                    )
                    .click();
                  let s = text.split("\n");
                  for (let q = 0; q < s.length; q++) {
                    await driver
                      .actions()
                      .sendKeys(s[q])
                      .keyDown(Key.SHIFT)
                      .keyDown(Key.RETURN)
                      .keyUp(Key.RETURN)
                      .keyUp(Key.SHIFT)
                      .perform();
                  }
                  await driver.sleep(3500);
                  await driver.actions().sendKeys(Key.RETURN).perform();
                  await driver.sleep(2500);
                  await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                        )
                      ),
                      3000
                    )
                    .click();
                  await driver.sleep(3500);
                  await driver
                    .actions()
                    .keyDown(Key.TAB)
                    .keyUp(Key.TAB)
                    .sendKeys(Key.RETURN)
                    .perform();
                } catch (error) {
                  console.log("Whatsapp Error");
                }
              }
              //avinash08 data take
              //@duckduckgo
              let urlString;
              //@ChatBot Telegram
            } catch (error) {
              overallskipped++;
              console.log(error);
              continue;
            }
          } //j loop ends
        } catch (e) {}
    //@Whatsapp test code
    //test code ends
    ////@Before Blocking Code To check final text Output
    //To be Checked - Removed for non affiliiate apps
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (Input[i].from.includes("All1App")) {
            if (!text.includes("affiliiate")) {
              console.log("non Affiliate product");
              text = "";
              btext = "";
              photo = "";
              continue;
            }
          }
    } catch (e) {
      console.log(e);
    }
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            if (!text.includes("amzn")) {
              console.log("non Amazon product");
              text = "";
              btext = "";
              photo = "";
              continue;
            }
          }
    } catch (e) {
      console.log(e);
    }
    if (disc) {
      console.log("deals");
      chatId = "@all1appdeals";
      watscode = "DSyvXzBJuax5uJ6MFylXJk";
    } else {
      console.log("all");
      chatId = "@all1app";
      watscode = "FfH1v13f7dVA5ZHVvzEW3E";
    }
    if (text.includes("Offer")) {
      text.replace("Offer", "");
    }
    //Need to check
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      console.log("Len of Firebase is", len);
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            chatId = "@all1appdaily";
            console.log("calling all1appdaily disco is ",disco);
            if(disco>0 && photo != "" && photo.length <300 && pricenum>0){
              telegram(photo, chatId, text);
            }
            else if(Input[i].from == "All Deals")
            {
              telegram(photo, chatId, text);
            }
            else if(photo != "" && photo.length <300){
              console.log("Price or discount not found")
              pricelinks += urlvalue1 + "\n"
            }
            else if(pricenum>0 ){
              console.log("Photo not found")
              photolinks += urlvalue1 + "\n"
            }
            try {
                var app = {
                "id": id++,
                "idlen": 10,
                "idlength": 10,
                "date": String(Input[i].date.split("T")[0]),
                "photo": String(photo),
                "urltext": String(urltext),
                "price": String(pricenum),
                "discount": String(disco),
                "category": {
                  "mainCategory": mainCategory,
                  "c1": String(c1),
                  "c2": String(c2),
                  "c3": String(c3),
                  "c4": String(c4),
                  "c5": String(c5),
                },
                "links": {
                  "avinashbmv": String(avinashbmv),
                },
                "isDeal":isDeal,
                "isOffer":isOffer,
              }
              console.log("calling firebase");
              console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              console.log("Parsed Json is ",app)
              if(photo != "" && pricenum > 0 && disco > 0){
                firebasepost(app);
              }
              //Need to be changed
            } catch (e) {
              console.log("firebase error", e);
            }
          }
      //changed for All1App
    } catch (e) {
      console.log("Telegram Error",e);
    }
    let output = false;
    console.log("Whatsapp photo check",photo)
    if (photo != "") {
      console.log("with photo",photo);
      //@whatsapp
      if (Input[i].from.includes("All1App")) {
        console.log("inside whatsapp1")
        watscode = "FfH1v13f7dVA5ZHVvzEW3E";
        await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
        try {
          await driver
            .wait(
              until.elementLocated(
                By.xpath(
                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                )
              ),
              3000
            )
            .click();
          let s = text.split("\n");
          for (let q = 0; q < s.length; q++) {
            await driver
              .actions()
              .sendKeys(s[q])
              .keyDown(Key.SHIFT)
              .keyDown(Key.RETURN)
              .keyUp(Key.RETURN)
              .keyUp(Key.SHIFT)
              .perform();
          }
          await driver.sleep(3500);
          await driver.actions().sendKeys(Key.RETURN).perform();
          await driver.sleep(2500);
          await driver
            .wait(
              until.elementLocated(
                By.xpath(
                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                )
              ),
              3000
            )
            .click();
          await driver.sleep(3500);
          await driver
            .actions()
            .keyDown(Key.TAB)
            .keyUp(Key.TAB)
            .sendKeys(Key.RETURN)
            .perform();
        } catch (error) {
          console.log("Whatsapp Error");
        }
      }
    } else {
      console.log("without photo",photo);
      //@Whatsapp
      try {
        if (Input[i] != undefined)
          if (Input[i].from != undefined)
            if (Input[i].from.includes("All1App")) {
              watscode = "FfH1v13f7dVA5ZHVvzEW3E";
              console.log("removed \n");
              await driver.get(
                `https://web.whatsapp.com/accept?code=${watscode}`
              );
              watstext = text;
              if (watstext.includes("\n")) {
                watstext.replaceAll("\n", "");
              }
              try {
                await driver
                  .wait(
                    until.elementLocated(
                      By.xpath(
                        '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                      )
                    ),
              3000
                  )
                  .click(); //,Key.RETURN
                let s = text.split("\n");
                for (let q = 0; q < s.length; q++) {
                  await driver
                    .actions()
                    .sendKeys(s[q])
                    .keyDown(Key.SHIFT)
                    .keyDown(Key.RETURN)
                    .keyUp(Key.RETURN)
                    .keyUp(Key.SHIFT)
                    .perform();
                }
                await driver.sleep(3000);
                await driver.actions().sendKeys(Key.RETURN).perform();
                await driver.sleep(3000);
                await driver
                  .wait(
                    until.elementLocated(
                      By.xpath(
                        '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                      )
                    ),
              3000
                  )
                  .click();
                await driver.sleep(3500);
                await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
                sendKeys(Key.RETURN).perform();
              } catch (error) {
                console.log("Whatsapp Error");
              }
            }
      } catch (e) {
        console.log(e);
      }
    }
    try {
      if (disc && Input[i].from.includes("All1App")) {
        if (photo != "") {
          chatId = "@all1app";
          watscode = "FfH1v13f7dVA5ZHVvzEW3E";
          console.log("with photo");
          //Need to check
          //@Whatsapp
          if (Input[i].from.includes("All1App")) {
            await driver.get(
              `https://web.whatsapp.com/accept?code=${watscode}`
            );
            try {
              await driver
                .wait(
                  until.elementLocated(
                    By.xpath(
                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                    )
                  ),
              3000
                )
                .click();
              let s = text.split("\n");
              for (let q = 0; q < s.length; q++) {
                await driver
                  .actions()
                  .sendKeys(s[q])
                  .keyDown(Key.SHIFT)
                  .keyDown(Key.RETURN)
                  .keyUp(Key.RETURN)
                  .keyUp(Key.SHIFT)
                  .perform();
              }
              await driver.sleep(3000);
              await driver.actions().sendKeys(Key.RETURN).perform();
              await driver.sleep(3000);
              await driver
                .wait(
                  until.elementLocated(
                    By.xpath(
                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                    )
                  ),
              3000
                )
                .click();
              await driver.sleep(3500);
              await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
              sendKeys(Key.RETURN).perform();
            } catch (error) {
              console.log("Whatsapp Error");
            }
          }
        } else {
          console.log("without photo");
          if (Input[i].from.includes("All1App")) {
            await driver.get(
              `https://web.whatsapp.com/accept?code=${watscode}`
            );
            try {
              await driver
                .wait(
                  until.elementLocated(
                    By.xpath(
                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                    )
                  ),
              3000
                )
                .click();
              let s = text.split("\n");
              for (let q = 0; q < s.length; q++) {
                await driver
                  .actions()
                  .sendKeys(s[q])
                  .keyDown(Key.SHIFT)
                  .keyDown(Key.RETURN)
                  .keyUp(Key.RETURN)
                  .keyUp(Key.SHIFT)
                  .perform();
              }
              await driver.sleep(4000);
              await driver.actions().sendKeys(Key.RETURN).perform();
              await driver.sleep(4000);
              await driver
                .wait(
                  until.elementLocated(
                    By.xpath(
                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                    )
                  ),
              3000
                )
                .click();
              await driver.sleep(5000);
              await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
              sendKeys(Key.RETURN).perform();
            } catch (error) {
              console.log("Whatsapp Error");
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            if(disco>0)
            telegram(photo, "@all1appweb", text);
            console.log("entered into all1app web");
          }
    } catch (e) {
      console.log(e);
    }
  }

  //Needed
  await driver.get(
    "https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp"
  );
  try {
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
          )
        ),
              3000
      )
      .click();
    await driver
      .actions()
      .sendKeys("completed ")
      .sendKeys(Input[0].from)
      .sendKeys(otherUrls)
      .sendKeys(Key.RETURN)
      .perform();
  } catch (error) {
    console.log(error);
  } finally {
    await driver
      .actions()
      .keyDown(Key.CONTROL)
      .keyDown("v")
      .keyUp(Key.CONTROL)
      .sendKeys(Key.RETURN)
      .perform();
    await driver.sleep(5000);
    await driver.actions().sendKeys("hai").sendKeys(Key.RETURN).perform();
    await driver.get("https://api.whatsapp.com/send?phone=9866017750");
  }
}
example();