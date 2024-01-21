//  chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\ChromeProfile"


//@needed
// const { Builder, By, Key, util, Browser, it, WebDriver} = require("selenium-webdriver")
const { By, Key, Builder, Button, until } = require("selenium-webdriver");
require("url").URLSearchParams;

// import Input from './ChatExport_2022-10-13 (3)/result.json';

const { urlIs } = require("selenium-webdriver/lib/until");

//@chrome
require("chromedriver");
const { Options } = require("selenium-webdriver/chrome");

const fetch = require("node-fetch");
global.fetch = fetch;
global.Headers = fetch.Headers;
// const Headers = require("headers");
const fs = require("fs");
const FormData = require("form-data");

// const { Options } = require('../chrome')
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
const { getAccessToken } = require("./getAccessToken");
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.XMLHttpRequest = require("xhr2");
// var XMLHttpRequest = require('xhr2');
var xhr = new global.XMLHttpRequest();
// import axios from 'axios';
const axios = require("axios").default;
let pricelinks = "", photolinks = "",
  urlvalue = "",
  urlvalue1 = "";
let chat_id = "@dealshubglobal";
let watscode = "Kzl4DB4yCXzJaaCP0Lrf1G"; //alldeals

async function earnkaroLogin(){
  await driver.get("https://earnkaro.com/login");
  await driver.findElement(By.id("uname")).click();
  await driver.findElement(By.id("uname")).sendKeys("bmv1avi@gmail.com");
  await driver.findElement(By.id("btnLayoutContinue")).click();
  await driver.sleep(1000);
  
  await driver.actions()
  .sendKeys("AviAff@123")
  .sendKeys(Key.TAB)
  .sendKeys(Key.RETURN)
  .perform()
  await driver.sleep(1000);
  await driver.get("https://earnkaro.com/create-earn-link");
  await driver.sleep(1000);
}

function getPidFromUrl(url) {
  const pidRegex = /pid=([^&]+)/;
  const match = url.match(pidRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // pid not found in the URL
  }
}


function calculatePrice(price){
  if (price.includes(",")) {
    console.log(", Symbol found");
    // price = price.substring(1, price.length);
    price = price.replaceAll(",","")
  }
  if (price.includes("₹")) {
    console.log("Rupee Symbol found");
    // price = price.substring(1, price.length);
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
      // console.log('new discount is '+discount);
    }
    if (discount.includes("off")) {
      discount = discount.substring(0, discount.indexOf("off"));
      console.log("new discount is " + discount);
    }
    if (discount.includes("%")) {
      discount = discount.substring(0, discount.indexOf("%"));
      console.log("new discount is " + discount);
    }
    // if (discount.charAt(discount.length - 1) == "%") {
    //   discount = discount.substring(0, discount.length - 1);
    //   console.log("new discount is " + discount);
    // }
    disco = Number(discount);
    return disco
    // disc = Number(discount) >= 75;
  }
}

function extractUrlsFromFile() {
  try {
      filePath = './url.txt';
      const data = fs.readFileSync(filePath, 'utf8');
      const urls = data.match(/https?:\/\/[^\s]+/g) || [];
      return urls;
  } catch (err) {
      console.error('Error reading file:', err.message);
      return [];
  }
}

async function example() {

  let jsonFileName=""
  // let env="stage"
  let env="prod"

  let isapi=false
  let urlArray = []

  let extractData="Telegram"
  
  // let extractData="File"


  if(env=="prod"){
    jsonFileName = "deals"
  } else if(env=="stage") {
    jsonFileName = "dailydeals"
  }

  if(extractData == "File"){
    urlArray = extractUrlsFromFile()
  }
  let enableFirebaseGet = true;
  // let enableFirebaseGet = false;

  let enableFirebasePost = true;
  // let enableFirebasePost = false;

  let enableTelegramLink = true;
  // let enableTelegramLink = false;

  let enableTelegramDeal = true;
  // let enableTelegramDeal = false;

  let enableFacebook = true;
  // let enableFacebook = false;

  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  // options.add_argument("--headless")  //#todo
  //CHROME
  driver = await chrome.Driver.createSession(options);
  // driver = await chrome.Driver.createSession();

  //@Firefox
  // version change error change 108the lib dir of chromedriver(not bin) with new chromedriver exe
  // driver = await new Builder().forBrowser("firefox").build();
  const Input =
[




  {
    "id": 119,
    "type": "message",
    "date": "2024-01-21T14:14:04",
    "date_unixtime": "1705826644",
    "from": "All deals",
    "from_id": "channel1698389849",
    "text": [
     "Finish 24 Tablets, Powerball All in 1 Max Dishwasher Tablets | World's #1 Recommended Dishwashing Brand ",
     {
      "type": "link",
      "text": "https://amzn.eu/d/5wNj6nx"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Finish 24 Tablets, Powerball All in 1 Max Dishwasher Tablets | World's #1 Recommended Dishwashing Brand "
     },
     {
      "type": "link",
      "text": "https://amzn.eu/d/5wNj6nx"
     }
    ]
   },
   {
    "id": 119,
    "type": "message",
    "date": "2024-01-21T14:14:04",
    "date_unixtime": "1705826644",
    "from": "All1App All deals",
    "from_id": "channel1698389849",
    "text": [
     "Finish 24 Tablets, Powerball All in 1 Max Dishwasher Tablets | World's #1 Recommended Dishwashing Brand ",
     {
      "type": "link",
      "text": "https://amzn.eu/d/5wNj6nx"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Finish 24 Tablets, Powerball All in 1 Max Dishwasher Tablets | World's #1 Recommended Dishwashing Brand "
     },
     {
      "type": "link",
      "text": "https://amzn.eu/d/5wNj6nx"
     }
    ]
   },
   

    ];


  //Amazon Login
  // await driver.get("https://amazon.in");
  // await driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
  // await driver.findElement(By.id("ap_email")).sendKeys("Avinash1Affiliate@gmail.com");
  // await driver.findElement(By.id("continue")).click();
  // await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
  // await driver.findElement(By.id("signInSubmit")).click();
  // await driver.sleep(1000);
  
  // earnkaro login
  
  // earnkaro login
  // await driver.get("https://earnkaro.com/login");
  // await driver.findElement(By.id("uname")).click();
  // await driver.findElement(By.id("uname")).sendKeys("bmv1avi@gmail.com");
  // await driver.findElement(By.id("btnLayoutContinue")).click();
  // await driver.sleep(1000);
  
  // await driver.actions()
  // .sendKeys("AviAff@123")
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.RETURN)
  // .perform()
  // await driver.sleep(1000);
  // await driver.get("https://earnkaro.com/create-earn-link");
  // await driver.sleep(1000);



  
  // await driver.actions()
  //     .keyDown(Key.CONTROL)
  //     // .keyDown(Key.TAB)
  //     .sendKeys('t')
  //     .keyUp(Key.CONTROL)
  //     // .keyUp(Key.TAB)
  //     // .sendKeys('b')
  //     .perform()



  // // await driver.get("https://earnkaro.com/login");
  // // await driver.findElement(By.id("uname")).click();
  // // await driver.findElement(By.id("uname")).sendKeys("bmv1avi@gmail.com");
  // // await driver.findElement(By.id("btnLayoutContinue")).click();

  // // await driver.actions()
  // // .sendKeys("AviAff@123")
  // // // .sendKeys(Key.TAB)
  // // .sendKeys(Key.RETURN)
  // // .perform()

  // // await driver.findElement(By.id("pwd")).click();
  // // await driver.findElement(By.id("pwd")).sendKeys("AviAff@123");
  // // await driver.findElement(By.id("btnLayoutSignInPass")).click();
  // await driver.sleep(1000);

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
let asin = ""
let pidValue=""
let itemType = "Deal"
let itemText = ""
  
let Links;
  // let todaysDate;
  
let today = new Date();
today.setDate(today.getDate());
// yesterday.setDate(yesterday.getDate() - 1);
let todayDate = today.toISOString().split("T")[0];
console.log("today date is ",todayDate); 
  let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
  let chatId = "@dealshubglobal";
  let watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
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
  let earnlink1 = "";
  let id = 1489;
  let len = 0;
  // let idlen =  "https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json";
    let idlen = "https://avi1deals-default-rtdb.firebaseio.com/amazon.json";
  let access_token = await getAccessToken(env);

  console.log("access token in avideals is ",access_token)
  let mention = "";
  let otherUrls = "";
  let deployUrl = "";
  // Links = Input[0].text_entities[1].text;
  // Links = Input.messages[0].text_entities[1].text;
  len = await firebaseget(env);
  // if(len==0){
    id = len+1;
  // }
  // else{
  //   id = len;
  // }
  console.log("Await length is ",len)
  // for (i = 0; i < Input.length; i+=2) {
  for (i = 0; i < Input.length; i++) {
    // for (i=1;i<Input.messages.length;i++){
    discount = "";
    photo = "";
    watscode = "";
    urltext = "";
    price = "";
    deployUrl = "";
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
    asin = "";
    pidValue="";
    itemType = "Deal"; // for now
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
    urlvalue1 = "";
    urlvalue = "";
    pricenum = 0;
    disco = 0;
    disc = false;
    itemcategory = "";
    if (Input[i] != undefined)
      if (Input[i].text_entities != undefined)
        try {
          // if(!Input[i].from.includes("All1App"))
          // {
          //   id+=1
          // }
          console.log("New item")
          for (j = 0; j < Input[i].text_entities.length; j++) {
            // console.log("\n\n")
            // console.log("\n\n")
            try {
              // console.log(" j is ",j)
              // if (Input[i].text_entities[j].type!="link"){
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
                    // break;
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
                // btext = btext + Input[i].text_entities[j].text + "\n";
                if (Input[i].text_entities[j].type == "mention") {
                  text = text + " \n";
                  // btext = btext + " \n";

                  if (text.includes("Deal Price")) {
                    // console.log('Deal Price found')
                    // for(i=0;i<text.length;i++){
                    // }
                  }
                  if (Input[i] != undefined)
                    if (Input[i].text_entities.length > j) j++; //changes on 1-12-2022
                }
                continue;
              }
              
              else if ((Input[i].text_entities[j].type.includes("link")) && (!(Input[i].text_entities[j].text.includes("amzn")) && !(Input[i].text_entities[j].text.includes("amazon")))) {
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type.includes("link"));
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type);
                console.log("Amazon value Amzn Links ",(Input[i].text_entities[j].text));
                console.log("Amazon value Amzn Links ",!(Input[i].text_entities[j].text.includes("amzn")));
                
                // if(!Input[i].from.includes("All1App")){
                  console.log("Entered into Other than Amzn Links");
                // console.log('All including  Amzn Links');
                await driver.get(Input[i].text_entities[j].text);
                // otherurl = await driver.get();
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
                  pidValue = getPidFromUrl(strUrl);
                  console.log("Pid Value is ",pidValue);
                  }
                  catch(e){
                  console.log("Pid error ",e);
                  }
                  try{
                    asin=pidValue;
                  }
                  catch(e){
                    console.log("Error in assigning pid value to asin")
                  }
                    
                  try{
                    try{
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[1]/h1/span[2]')).getAttribute("innerHTML");
                    
                    console.log("Flipkart Text is 1st is ",itemText)
                    }
                    catch(e){
                      console.log("1st Flipkart Text error")
                    }
                    try{
                      if(itemText.length<10){
                        itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[1]/h1/span[2]')).getAttribute("innerHTML");
                        console.log("Flipkart Text is 2nd is ",itemText)
                      }
                    }
                    catch(e){
                      console.log("2nd Flipkart Text error")
                    }
                    try{
                      if(itemText.length<10){
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
                    // text += c1 + "\n"
                    }
                    catch(e){
                      console.log("c1")
                    }
                  }
                  if(c1 == "" || c1 == NaN){
                    try{
                    c1 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                    // text += c1 + "\n"
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
                    // text += c2 + "\n"
                    }
                    catch(e){
                      console.log("c2")
                    }
                  }
                  if(c2 == ""|| c2 == NaN){
                    try{
                    c2 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                    // text += c2 + "\n"
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
                  // text += c3 + "\n"
                  }
                  catch(e){
                    console.log("c3")
                  }
                  }
                  if(c3 == "" || c3 == NaN){
                    try{
                  c3 = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div[7]/div/div/p')).getAttribute("innerHTML");
                  // text += c3 + "\n"
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
                      // text += photo +"\n"
                    }
                    catch(e){
                      console.log("Flipkart pic 1")
                    }
                    console.log("Flipkart photo is ",photo)
                    if(photo == "" || photo.length >100 ){
                      console.log("Flipkart photo 2nd is ",photo)
                      try{
                        photo = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[2]/img')).getAttribute("src");
                        // text += photo +"\n"
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
                    if(itemText.length<10){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[5]/a')).getAttribute("innerHTML");
                      console.log("Item Text 2st")
                    }
                  }
                  catch(e){
                    console.log("Item Text end Error 1st ")
                  }
                  try{
                    if(itemText.length<10){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[4]/a')).getAttribute("innerHTML");
                      console.log("Item Text 3st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 2nd")
                }
                  try{
                    if(itemText.length<10){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[3]/a')).getAttribute("innerHTML");
                      console.log("Item Text 2st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 3st ")
                }
                try{
                    if(itemText.length<10){
                      itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div[2]/a')).getAttribute("innerHTML");
                      console.log("Item Text 3st")
                    }
                  }
                catch(e){
                  console.log("Item Text end Error 4nd")
                }
                
                try{
                  if(itemText.length<10){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[6]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText.length<10){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[5]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText.length<10){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[4]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText.length<10){
                    itemText = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div/div[2]/div[1]/div/div/div[1]/div[3]/a')).getAttribute("innerHTML");
                    console.log("Item Text 2st")
                  }
                }
                catch(e){
                  console.log("Item Text end Error 1st ")
                }
                try{
                  if(itemText.length<10){
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
                  itemType = "Myntra"

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

                earnlink = "inrdeals.com/avi646476329/"+strUrl
                
                //earnlink not working
                await driver.get("https://earnkaro.com/");
                // await driver.get("https://earnkaro.com/create-earn-link");
                await driver.sleep(500);

                try {
                  await driver.findElement(By.xpath('//*[@id="link_makeprofit"]/span')).click();
                } catch (e) {
                  console.log("Earnkaro Earn Link Error");
                  await earnkaroLogin();
                }
                await driver.sleep(500);
                try {
                  await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                } catch (e) {
                  console.log("Deallink New Error");
                }
                await driver.sleep(500);
                // await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                try{
                  await driver
                  .findElement(By.id("Btn_Make_Profit_Button"))
                  .click();
                }
                catch(e){
                  console.log("Profit Button Issue",e);
                }
                await driver.sleep(500);
                await driver.sleep(500);
                await driver.sleep(500);
                // await driver.findElement(By.id("deallink")).click();
                await driver.findElement(By.id("deallinkshorturl")).getAttribute("value").then(function(webElement) {
                  console.log('deal exists');
                  earnlink1 = webElement;
                  console.log('earnlink1 is '+earnlink1);
                }, function(err) {
                  if (err.state && err.state === 'no such element') {
                    console.log('Deal not found');
                  }
                });
                await driver.sleep(500);
                console.log('earn link 1 is '+earnlink1);
                // await driver.findElement(By.id("Copy_Link_make")).click(); //Copy Button not required as taking from the textbox
                // text = discount + "% off on " + text + "price is " + price
              }
              try{
                if(earnlink1 == ""){
                  earnlink1 = await driver.findElement(By.id("deallinkshorturl")).getAttribute("value");
                  console.log("Earn Link Found in 2nd is ",earnlink1)
                }
              }
              catch(e){
                console.log("Issue in 2nd Earnlink")
              }
                
                
              try{
                if(pricenum>0){
                  // text = text + "Pryce"+pricenum
                  itemText = itemText + " price is " + pricenum 
                } 
              }
              catch(e){
                console.log("Price Error")
              }
              try{
                if(disco>0){
                  // text = text + "Dicos"+disco
                  itemText = disco + "% off on " + itemText

                }
              }
              catch(e){
                console.log("Discount Error")
              }
              try{
                if(!Input[i].from.includes("All1App")){
                itemText = itemText +" "+ earnlink + "\n" + earnlink1;
              }
              if(itemText.includes("&amp;")){
                itemText = itemText.replaceAll("&amp;","&")
              }
              if(itemcategory.includes("&amp;")){
                itemcategory = itemcategory.replaceAll("&amp;","&")
              }
            }
            catch(e){
              console.log("Discount Error")
            }
              // photo="https://m.media-amazon.com/images/I/91pIt7I-aVL._SY450_.jpg"
              if((Input[i].from.includes("All1App")) && telegramVisit){
                  telegramVisit = false
                  console.log("Only All1app")
                  if(asin!="" && isapi==true){
                  itemText = "#" + itemType +" : \n" + itemText +" \n"+ `https://dealshubglobal.com/product/${asin}`;
                  }else{
                  itemText = "#" + itemType +" : \n" + itemText +" \n"+ `https://dealshubglobal.com/product/${id-1}`;
                  }
                  // itemText = "#" + Input[i].tipe +" : \n" + itemText +" \n"+ `https://dealshubglobal.com/product/${Input[i].id}`;
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
                console.log("hallo telegram",env)
                if(env=="prod"){
                  console.log("haii telegram")
                  telegram(photo,"@dealshubglobal",itemText);//to be reverted
                } else if(env=="stage") {
                  telegram(photo,"@all1apptest",itemText);//to be reverted
                  
                }
                  let link = `https://dealshubglobal.com/productproduct.productCode1}`
                  // let link = `https://dealshubglobal.com/product/${id-1}`
                  // let link = `https://dealshubglobal.com/product/${Input[i].id}`
                  if(disco >= 75){
                    isDeal = true;
                    if(env=="prod"){
                      telegram(photo,"@dealshubglobal2",itemText);//to be reverted
                    } else if(env=="stage") {
                      telegram(photo,"@all1appdealstest",itemText);//to be reverted
                    }
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
                  // id+=1
                  // var app = JSON.stringify({
                  // var app = JSON.parse({
                    var app = {
                      // "name":"firebase check",
                      // "id":"11"
                    "id": id,
                    "date": String(todayDate),
                    "datetime": Date.now(),
                    // "date": String(Input[i].date.split("T")[0]),
                    "photo": String(photo),
                    "urltext": String(urltext),
                    "productType": "Affiliate",
                    "storeType": String(itemType),
                    "productCode": String(asin),
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
                      "avinashbmvINR": String(earnlink),
                      "avinashbmv": String(earnlink1)
                      // "avinashbmv": String(avinashbmv)
                    },
                    "isDeal":isDeal,
                    "isOffer":isOffer,
                  }
                    var product = {
                      // "name":"firebase check",
                    [`product${id}`]:{  // "id":"11"
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
                      "isDeal":isDeal,
                      "isOffer":isOffer,
                  },
                  }
                 
                  console.log("calling firebase");
                  
                  // if(photo != "" && photo.length <300 && pricenum>0 && disco>0 && urlvalue1.length != 0 && urlvalue1!=""){
                  // if(photo != "" && photo.length <300 && pricenum>0 && disco>0 && earnlink1.length != 0 && earnlink1!=""){
                  if(photo != "" && photo.length <300 && pricenum>0 && earnlink1.length != 0 && earnlink1!=""){
                    telegram(photo,"@all1appdaily",text + "\n"+ earnlink1 +"\n" + itemcategory +"\n"+"itemTipe" + itemType);
                    path = "amazon.json"
                    path = "deals.json"
                    
                    if(enableFirebasePost){
                      postflag = await firebasepost(app,access_token,env,jsonFileName);
                      console.log("Post Flag is ",postflag)
                      if(postflag){
                        id+=1;
                        // i--;
                      } else {
                        access_token = await getAccessToken(env);
                        console.log("Regenerating access token")
                        postflag = await firebasepost(app,access_token,env,jsonFileName);
                        if(postflag){
                          id+=1;
                          
                        } else {
                          console.log("Need to skip channel deals")
                            i++;
                        }
                      }
                    }
                  }
                  else if(photo != "" && photo.length >300){
                    i++;
                    console.log("Price or discount not found")
                    pricelinks += earnlink + "\n"
                  }
                  else if(pricenum>0 ){
                    i++;
                    console.log("Photo not found")
                    photolinks += earnlink + "\n"
                  }
                  else{
                    i++;
                  }
                } 
                catch (e) {
                  console.log("firebase error", e);
                }
                console.log('Called telegram for other than amazon')
                // text = "";
                // btext = "";
                // photo = "";
                // itemText = "";
                console.log('Clearing all the values')
                // continue;//new change 14th Nov
                break;
              // }

              // if(Input[i].from.includes("All1App")){
              //   console.log("Only All1app")
              //   itemText = itemText +" \n"+ `https://dealshubglobal.com/product/${Input[i].id}`;
              //   telegram(photo,"@all1app",itemText);//to be reverted
              //   if(disco >= 75){
              //     telegram(photo,"@all1appdeals",itemText);//to be reverted

              //   }
              // }
              }
              else{
                if(env=="prod"){
                  
                  telegram(photo,"@dealshubglobal",itemText);//to be reverted
                } else if(env=="stage") {
                  telegram(photo,"@all1apptest",itemText);//to be reverted
                  
                }
              }

              }
              if(extractData == "Telegram"){
                Links = Input[i].text_entities[j].text;
              }
              // if(extractData == "File"){
              //   Links = urlArray[i];
              // }
              if(Links.includes("amzn") || Links.includes("amazon")){
                itemType = "Amazon"
              }
              if (Input[i].from.includes("Telugu Tech World")) {
                Links = Input[i].text_entities[j].href;
              }

              
              // Links = Input.messages[i].text_entities[j].text;

              //commenting for Facebook
              await driver.get(Links);
              // let exists = await driver.findElements(By.name('q')).then(found =&gt; !!found.length);
              // if(await driver.getCurrentUrl().includes("amazon")){
              // Actions actions = new Actions(driver);
              // WebElement btnElement = driver.findElement(By.id("landingImage"));
              // await driver.findElement(By.id("landingImage")).click();
              // await driver.findElement(By.id("ivLargeImage")).contextClick();
              // await driver.moveToElement(await driver.findElement(By.id("ivLargeImage")).contextClick());
              // await driver.findElement(By.id("ivLargeImage")).click(Button.RIGHT);
              // await driver.actions()
              // .keyDown(Key.ARROW_DOWN)
              // .keyUp(Key.ARROW_DOWN)
              // .keyDown(Key.ARROW_DOWN)
              // .keyUp(Key.ARROW_DOWN)
              // .keyDown(Key.ARROW_DOWN)
              // .keyUp(Key.ARROW_DOWN)
              // .sendKeys(Key.ARROW_DOWN)
              // .sendKeys(Key.ARROW_DOWN)
              // .sendKeys(Key.ARROW_DOWN)
              // .sendKeys(Key.RETURN)
              // .keyDown(Key.CONTROL)
              // // .sendKeys('c')
              // .keyUp(Key.CONTROL)
              // .perform()

              try {
                asin = await driver
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

              // await driver.findElement(By.id("landingImage")).click();
              // await driver.findElement(By.id("ivLargeImage")).click(Button.RIGHT);
              // await driver.actions()
              // .right_action.ContextClick("ivLargeImage").SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ENTER).Build().Perform();

              await driver
              .findElement(By.id("landingImage"))
              .getAttribute("src")
              .then(
                function (webElement) {
                    // console.log('Image exists');
                    // console.log('WebElement is '+webElement);
                    photo = webElement;
                    // webElement.click();
                    // photo = webElement.findElement(By.id("landingImage")).getAttribute("src");

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
                    // else {
                      //     webdriver.promise.rejected(err);
                      // }
                    }
                    );
                    
                    console.log('Image Take')
                    if(photo=="" || photo.length >200){
              await driver.wait(until.elementLocated(By.id("landingImage")),3000).getAttribute("src").then(function (webElement){
              // await driver.findElement(By.id("landingImage")).getAttribute("src").then(function (webElement) {
                    // console.log('Image exists');
                    console.log('WebElement is '+webElement);
                    photo = webElement;
                    // webElement.click();
                    // photo = webElement.findElement(By.id("landingImage")).getAttribute("src");
                    
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
                    // else {
                      //     webdriver.promise.rejected(err);
                      // }
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
              asin = await driver
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
            try{
              if(asin.length != 10){
                let asinurl = await driver.getCurrentUrl();
                console.log("Asin url is ",asinurl)
                let start = asinurl.indexOf("/dp/")+4
                console.log("new asin is ",asinurl.substr(start,10));
                asin = asinurl.substr(start,10)

              }
            }
            catch(e){

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
                  console.log("Discount error",e)
                }
                // discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("src");
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]
                // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                if (discount == "" || discount == undefined || discount == NaN || discount.length >8) {
                  await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]")).getAttribute("innerHTML").then(function (webElement) {
                        // console.log('Discount  exists');
                        discount = webElement;
                        // console.log('discount is '+discount);
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

              // discount = await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]"));
              // console.log(typeof(discount));
              try {
                // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
                // for(l=0;l<discount.length;l++){
                if (discount != "") {
                  if (discount.charAt(0) == "-") {
                    discount = discount.substring(1, discount.length);
                    // console.log('new discount is '+discount);
                  }
                  if (discount.charAt(discount.length - 1) == "%") {
                    discount = discount.substring(0, discount.length - 1);
                    console.log("new discount is " + discount);
                  }
                  disco = Number(discount);
                  disc = Number(discount) >= 75;
                  // console.log(disc);
                }
              } catch (e) {
                console.log(e);
              }
              // }
              //price data

              try {
                try {
                  if(price<=0){
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]')).getAttribute("innerHTML");
                }
                } catch (e) {
                  console.log("Price New Error");
                }
                try {
                  if(price<=0){
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[3]/span[2]/span[2]')).getAttribute("innerHTML");
                }
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
              // }
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
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("price error")
                  }
                } if (price == "") {
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
                if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]")).getAttribute("innerHTML");
                  }
                    catch(e){
                      console.log("Price Error")
                    }
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                  }
                    catch(e){
                      console.log("Price Error")
                    }

                  // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                  //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error")
                  }
                } if (price == "") {
                  try{
                  price = await driver.findElement(By.className("a-price-whole")).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error")
                  }
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
                } if (price == "") {
                  try{
                  await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML")
                    .then(
                      function (webElement) {
                       
                        console.log("Price exists");
                        price = webElement;
                        // console.log('price is '+price);
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
                if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error without discount")
                  }
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
                }
                if (price == "") {
                  try{
                  price = await driver.findElement(By.id('price')).getAttribute("innerHTML");
                  }
                  catch(e){
                    console.log("Price Error without discount")
                  }
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
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
              // }
              // break;
              //     }
              //     // break;
              // }
              // let slink="https://www.facebook.com";
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
                // check undefined and later assign
                if (Input[i].from.includes("All1 deals")) {
                  itemcategory = itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[1]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory + "#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[2]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[3]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[4]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[5]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[6]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[7]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[8]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =itemcategory +"#" +(await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[9]/span')).getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
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
                // console.log('Price String is '+price);
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

              // @Login to Amazon
              // await driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
              // await driver.findElement(By.id("ap_email")).sendKeys("Avinash1Affiliate@gmail.com");
              // await driver.findElement(By.id("continue")).click();
              // await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
              // await driver.findElement(By.id("signInSubmit")).click();

              // await driver.findElement(By.id("amzn-ss-image-link")).click();

              //@Before Blocking Code

              // await driver.wait(()=> false)
              // await driver.Key.chord(driver.Key.CONTROL, 'c')
              // await driver.findElement(By.id("amzn-ss-text-link")).sendKeys(Key.chord(Key.CONTROL, "c"));
              // slink = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute();
              // slink = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).sendKeys(Key.chord(Key.CONTROL, 'c'));
              // await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).contextClick().build().perform();
              // await driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']")).sendKeys(Key.chord(Key.CONTROL, "c"));

              //@Before Blocking Code

              //bmvavinash link take
              // await driver.get(Links);

              // if(!Input[i].from.includes("All1App")){
              if (text.includes("Deal Price")) {
                text.indexOf("Deal Price");
                text = text.substring(0, text.indexOf("Deal Price"));
                text = text + "\n";
              }
              if (text.includes("off")) {
                // text.indexOf("Deal Price");
                text = text.substring(0, text.indexOf("off"));
                text = text + "\n";
              }

              //Need to Change Compulsory !
              let l,
                count = 0;
              // if(!Input[i].from.includes('All1App')){ //Only All1App Start
              //   await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("innerHTML").then(function(webElement) {
              //     urlvalue1 = webElement;
              //     console.log('Link Success '+urlvalue1);
              //   }, function(err) {
              //     console.log('Link Err'+err);
              //   });
              //   text = text + urlvalue1 + "\n";
              // }
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
                  // let popupIsVisible = await driver.wait(until.elementIsVisible("a-popover-content-2"));
                  // console.log("popupIsVisible is "+popupIsVisible);
                  // if(!popupIsVisible){
                  //   await driver.findElement(By.id("amzn-ss-text-link")).click();
                  //   await driver.findElement(By.id("amzn-ss-text-link")).click();
                  // }
                  await driver.findElement(By.id("amzn-ss-text-link")).click();
                  // await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
                  await driver.sleep(100);
                  try {
                    await driver
                      .findElement(By.id("a-autoid-1-announce"))
                      .click();
                    //   await driver.sleep(1500);
                    //   await driver.sleep(1500);
                    console.log("Direct Try Announce");
                  } catch (e) {
                    console.log("Calling Text Link Catch");
                    await driver
                      .findElement(By.id("amzn-ss-text-link"))
                      .click();
                    await driver.sleep(1200);
                    // await driver.findElement(By.id("a-autoid-1-announce")).click();
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
                          // .keyDown(Key.SHIFT)
                          .keyDown(Key.CONTROL)
                          .keyDown(Key.F4)
                          .keyUp(Key.F4)
                          .keyUp(Key.CONTROL)
                          // .keyDown(Key.TAB)
                          .perform();
                        // console.log('Tab Removed');
                      }
                      await driver.sleep(1200);
                      // await driver.sleep(1000);
                    }
                  }
                  count = l;
                  while (count-- != 0) {
                    // if(l==0){
                    //     await driver.actions()
                    //     .sendKeys(Key.UP)
                    //     .sendKeys(Key.RETURN)
                    //     .perform();
                    // }
                    // else if(l>0){
                    //   console.log("count is "+count);
                    //   console.log("l value is "+l);
                    await driver
                      .actions()
                      // .sendKeys(Key.UP) //bmvavinash
                      .sendKeys(Key.UP) //bmvavinash
                      // .sendKeys(Key.UP) //bmvavinash
                      // .keyDown(Key.UP)pricenum
                      // .keyUp(Key.UP)
                      .sendKeys(Key.RETURN)
                      // .sendKeys(Key.TAB)

                      // Associate Extra Tab Remove
                      // .keyDown(Key.TAB)
                      // .keyUp(Key.TAB)
                      // .sendKeys(Key.RETURN)
                      .perform();
                    // }
                    // else{
                    //     await driver.actions()
                    //     .sendKeys(Key.RETURN)
                    //     .perform();
                    // }
                  } //while loop

                  await driver.sleep(1200);
                  // await driver.sleep(200);
                  await driver
                    .findElement(By.id("amzn-ss-get-link-btn-text-announce"))
                    .click();
                  await driver.sleep(1200);
                  // await driver.sleep(200);

                  // let datas = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
                  // if (datas == "") {
                  //     console.log('empty text box')
                  //     await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
                  //     try {
                  //         await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
                  //         console.log('empty text box 2nd')
                  //     }
                  //     catch (e) {
                  //         console.log(e);
                  //     }

                  //     // await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
                  //     //   await driver.sleep(200);
                  // }
                  // let datasnew = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
                  await driver.sleep(1200);
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .getAttribute("innerHTML")
                    .then(
                      function (webElement) {
                        urlvalue1 = webElement;
                        console.log("Link Success " + urlvalue1);
                        if (urlvalue1 == "") {
                          // await driver.sleep(1000);
                          console.log("empty url so Calling again");
                          l -= 1;
                        }
                      },
                      function (err) {
                        console.log("Link Err" + err);
                      }
                    );
                  // if(datasnew == null){
                  //   await driver.wait(until.elementLocated(By.id("amzn-ss-text-shortlink-textarea")),5000).getAttribute("src");
                  // }
                        try{
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                        }
                        catch(e){

                        }
                      try{
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                      }
                      catch(e){

                      }
                  // console.log('Instead of Copy ' +datasnew)

                  // linkdata = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
                  // console.log('Link Value is '+linkdata)

                  // await driver.actions()
                  // .keyDown(Key.CONTROL)
                  // .sendKeys('a')
                  // .keyUp(Key.CONTROL)
                  // .perform()
                  // await driver.actions()
                  // .keyDown(Key.CONTROL)
                  // .sendKeys('c')
                  // .keyUp(Key.CONTROL)
                  // .perform()

                  // await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).getAttribute("src");
                  // await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).click();
                      try{
                        
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                      }
                      catch(e){}
                  // linkvalue = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea"));
                  // var inputval = await driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']")).sendKeys(Key.chord(Key.CONTROL, "c"));
                  // var inputval = await driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']"));
                  // driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']")).getAttribute("value");
                  // var inputval = driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("value");
                  // WebElement inputval = driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("value");
                  // console.log(linkvalue)
                  // console.log(inputval)
                  // let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
                  // let chatId = "@all1app";
                  // let text = "https://amzn.to/3sEsW4r";
                  // await driver.get("https://amzn.to/3sEsW4r")
                  // await driver.findElement(By.id("amzn-ss-text-link")).sendKeys(Key.F6,"Selenium Search",Key.RETURN);

                  //@Duckduckgo
                  // await driver.get("https://www.duckduckgo.com");
                  // await driver.actions()
                  // .keyDown(Key.CONTROL)
                  // .sendKeys('v')
                  // .keyUp(Key.CONTROL)
                  // .sendKeys(Key.RETURN)
                  // .perform()
                  // urlvalue1 = await driver.findElement(By.name("q")).getAttribute("value");
                  // console.log(urlvalue1);

                  //To Change
                } //Only All1App Take
                try {
                  if (!Input[i].from.includes("All1App")) {
                    //     if(urlvalue1 == ""){
                    //     console.log("urlvalue1 intake empty");
                    //     break;
                    // }
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
                          // `avideals${l}`=urlvalue1
                          break;
                      }
                    } catch (e) {
                      console.log("switch error");
                    }
                    // console.log("urlvalue1 intake");
                    text = text + urlvalue1 + "\n";
                    // urlvalue1 = "";
                    // console.log("Link Appended");
                    // btext = btext + urlvalue1+"\n" + "\n" + itemcategory + "\n";

                    // if(btext.length>99)
                    //   btext = text.substring(0,99);
                  } else {
                    console.log("Telegram Public Link else");
                    shortext = "";
                    let t1 = text;
                    switch (l + 1) {
                      case 1:
                        if (t1.includes(",")) {
                          shortext = t1.substring(0, t1.indexOf(","));
                        }
                        //   if(t1.includes('✅')){
                        //       t1=t1.replaceAll("✅","");
                        //   }
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
                        if(asin!="" && isapi==true){
                          deployUrl = `https://dealshubglobal.com/product/${asin}`;
                        }else{
                          deployUrl = `https://dealshubglobal.com/product/${id-1}`;
                        }
                        t1 =  itemType + " : " +"\n" +
                          disco +
                          "% off on " +
                          t1 +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          deployUrl
                          if(t1.includes("&nbsp;")){
                            t1 = t1.replaceAll("&nbsp;","")
                          }



                          
                        // t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://dealshubglobal.com/product/${Input[i].id}`
                        if(env=="prod"){
                          telegram(photo, "@dealshubglobal", t1);
                          
                        } else if(env=="stage") {
                          telegram(photo, "@all1apptest", t1);
                          
                        }

                        //whatsapp

                        console.log("inside whatsapp11")
                        watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
                        await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                        try {
                          await driver
                            .wait(
                              until.elementLocated(
                                By.xpath(
                                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                                )
                              ),
                              // 30000
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
                          await driver.sleep(6500);
                          await driver.actions().sendKeys(Key.RETURN).perform();
                          await driver.sleep(2500);
                          await driver
                            .wait(
                              until.elementLocated(
                                By.xpath(
                                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                                )
                              ),
                              // 30000
                              30000
                            )
                            .click();
                          await driver.sleep(6500);
                          await driver
                            .actions()
                            .keyDown(Key.TAB)
                            .keyUp(Key.TAB)
                            .sendKeys(Key.RETURN)
                            .perform();
                        } catch (error) {
                          console.log("Whatsapp Error");
                        }


                        if(asin!="" && isapi==true) {
                        let link = `https://dealshubglobal.com/product/${asin}`;
                        }else{
                        let link = `https://dealshubglobal.com/product/${id-1}`;
                        }
                        if (disco >= 75) {
                          isDeal = true;
                          if(env=="prod"){
                            telegram(photo, "@dealshubglobal2", t1);
                            url = "https://dealshubglobal-default-rtdb.firebaseio.com"
                          } else if(env=="stage") {
                            telegram(photo, "@all1appdealstest", t1);
                            url = "https://avideals1-default-rtdb.firebaseio.com"
                          }
                          if (t1.includes("dealshubglobal")) {
                            if(t1.includes("&nbsp;")){
                              t1 = t1.replaceAll("&nbsp;","")
                            }
                            if(t1.includes("#")){
                              t1 = t1.replaceAll("#","")
                            }
                            fbdata = facebook(photo, link, t1);



                            console.log("inside whatsapp11")
                            watscode = "CRJM1kOVpOy4jqfabIhlYc";
                            await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                            try {
                              await driver
                                .wait(
                                  until.elementLocated(
                                    By.xpath(
                                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                                    )
                                  ),
                                  // 30000
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
                              await driver.sleep(6500);
                              await driver.actions().sendKeys(Key.RETURN).perform();
                              await driver.sleep(2500);
                              await driver
                                .wait(
                                  until.elementLocated(
                                    By.xpath(
                                      '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                                    )
                                  ),
                                  // 30000
                                  3000
                                )
                                .click();
                              await driver.sleep(6500);
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
                          // fbdata = `https://graph.facebook.com/me/feeds/photos?url=${photo}&caption=${text}&${access_token}`
                          // fbdata = `109973278731533/photos?url=${photo}&caption=${text}&${access_token}`
                          // fbdata = `109973278731533/photos?url=https://i.postimg.cc/gk6KnpXp/Avi-Deals.png&access_token=EAAKw6ZAutPZBoBACEgZCDKuuW1xIj99UuHcoRiJVwMzNDDAGT0etjy5eudESVgj2H6AnWnREqWuzyJZAIgSvjnYzvYJVNAYV1nEutV799bucTdpE1aNm6ZByvUbg8iDdC67G0LD1FZBk7G1tTED9islTwEeZB5k79hSQLLOXf6gRb8IpFfL1NG7S6MP4e9dqMNFZCSBSsJLYnLKDNnElqgKu`

                          //api is working
                          // fbdata = `109973278731533/photos?url=${photo}&caption=${t1}${link}&EAADQM9ltnuYBAEcukShIVEsTQPHNqOmeSZBkoXqH2S3NCACs3pr1F5ikbA8yGlWKdqqYDxqHhgwKvzHc6AdKZAjUZCcPQpmz57OGKBzyNuDA2nudYux6F53MY8vhoHnKDhEI62i1d711qjQyrWZADXBWZBt4sr1n6nTFGOomP2srSAmU2m3ZBjWC9TQ1nKlXcZCmxP9kcGTZBBYQeyAgDI5BLmnavkpM4tblKKZBtIZCwQzth2Ld85ZAAmV`
                          // console.log(fbdata);
                          // await driver.get('https://developers.facebook.com/tools/explorer');

                          // await driver.get('https://developers.facebook.com/tools/explorer/?method=POST');

                          // try{
                          // await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[2]/div/div[5]/div[4]/div/div/div[2]/div[1]/div')).click();
                          // }
                          // catch(e){
                          //     console.log('middle req error')
                          // }

                          //api is working
                          //     await driver.actions()
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.RETURN)
                          //     .sendKeys(Key.DOWN)
                          //     .sendKeys(Key.RETURN)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.TAB)
                          //     .sendKeys(Key.BACK_SPACE)
                          //     .perform()

                          //     await driver.sleep(2000);
                          //     await driver.actions()
                          //     .sendKeys(fbdata)
                          //     .perform()

                          //     await driver.sleep(5000);
                          //     try{
                          //     await driver.scrollToTop(0);
                          //     }
                          //     catch(e){
                          //         console.log('Scroll Error')
                          //     }
                          //     await driver.sleep(2000);
                          //     try{

                          //         await driver.sleep(2000);
                          //     await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[2]/div/div[5]/div[5]/div/div/div/div/div/div[7]/div[2]/button/div/div/div/div')).click();
                          //     console.log('User Token Click Success')
                          // }
                          // catch(e){
                          //     console.log(e);
                          // }
                          // await driver.actions()
                          // .sendKeys(Key.UP)
                          // .sendKeys(Key.RETURN)
                          // .perform()
                          // console.log('User Token changed Success')
                          //     await driver.sleep(2000);
                          //     console.log('changed to Avideals')

                          //     try{

                          //         await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[1]/span/button/div/div')).click();
                          //         console.log('Button CLick Success')

                          //     }
                          //     catch(e){
                          //         console.log(e);
                          //     }
                          // try{

                          // await driver.findElement(By.xpath('//*[@id="js_q"]/input')).click();
                          // }
                          // catch(e){
                          //     console.log(e);
                          // }

                          // await driver.sleep(5000);
                          // console.log('Fb Data entered successully')
                          // console.log('Fb Data Submit start reach successully')

                          // await driver.findElement(By.xpath('//*[@id="js_8d1"]/div/div/div/div')).sendKeys("POST");
                          // await driver.findElement(By.xpath('//*[@id="js_5j"]/div/div/div/div')).click();
                          // await driver.sleep(500);
                          // await driver.actions()
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.RETURN)
                          // .perform()

                          // // await driver.findElement(By.xpath('//*[@id="js_5q"]/button/div/div/div/div')).click();
                          // await driver.actions()
                          // .sendKeys(Key.UP)
                          // .sendKeys(Key.RETURN)
                          // .perform()
                          // await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[1]/span/button/div/div')).click();
                          // await driver.actions()
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.RETURN)
                          // .sendKeys(Key.UP)
                          // .sendKeys(Key.RETURN)
                          // .perform()
                          // console.log('Fb Avi Deals Clicked Successfully')

                          // await driver.sleep(2000);

                          // await driver.actions()
                          // .keyDown(Key.SHIFT)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .sendKeys(Key.TAB)
                          // .keyUp(Key.SHIFT)
                          // .sendKeys(Key.RETURN)
                          // .perform()

                          // console.log('FB Called successfully')
                          // await driver.sleep(5000);

                          // await driver.findElement(By.xpath('//*[@id="js_8d1"]/div/div/div/div')).sendKeys("POST");
                          // await driver.findElement(By.xpath('//*[@id="js_8d1"]/div/div/div/div')).click();
                          // await driver.actions()
                          // .sendKeys(Key.DOWN)
                          // .perform()
                          //*[@id="js_8d1"]/div/div/div/div

                          // await driver.findElement(By.xpath('//*[@id="js_q"]/input')).sendKeys(fbdata);
                          // await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[1]/span/button/div/div')).click();
                          // await driver.sleep(2000);
                          ta = t1;
                          t1 = "";
                        }
                        break;
                      case 2:

                      if(asin!="" && isapi==true){
                        deployUrl = `https://dealshubglobal.com/deals/product/${asin}`;
                      }else{
                        deployUrl = `https://dealshubglobal.com/deals/product/${id-1}`;
                      }
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          deployUrl
                        telegram(photo, "@avideals2", t1);
                        t1 = "";
                        break;
                      case 3:
                        if(asin!="" && isapi==true){
                          deployUrl = `https://dealshubglobal.com/offers/product/${asin}`;
                        }else{
                          deployUrl = `https://dealshubglobal.com/offers/product/${id-1}`;
                        }
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          deployUrl;
                        telegram(photo, "@avideals3", t1);
                        t1 = "";
                        break;
                      case 4:
                        if(asin!="" && isapi==true){
                          deployUrl = `https://dealshubglobal.com/avideals/product/${asin}`;
                        }else{
                          deployUrl = `https://dealshubglobal.com/avideals/product/${id-1}`;
                        }
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          deployUrl;
                        telegram(photo, "@avideals4", t1);
                        t1 = "";
                        break;
                      default:
                        if(asin!="" && isapi==true){
                          deployUrl = `https://dealshubglobal.com/avideals${i}/product/${asin}`;
                        }else{
                          deployUrl = `https://dealshubglobal.com/avideals${i}/product/${id-1}`;
                        }
                        t1 =
                          disco +
                          "% off on " +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://dealshubglobal.com/avideals${l}/product/${id}`;
                          console.log("Avideals telegram")
                        telegram(photo, `@avideals${l}`, t1);
                        t1 = "";
                    }
                  }
                  // text = ta;
                } catch (e) {
                  console.log("Link Generation ",e);
                }
              } //for loop of Link
              if (!Input[i].from.includes("All1App")) {
                text = text + "\n @" + pricenum + "\n" + itemcategory + "\n";
                // console.log("text telegram")
                // telegram(photo,"@all1appdaily",text);
              } else {
                if (text.includes("Deal Price")) {
                  text.indexOf("Deal Price");
                  text = text.substring(0, text.indexOf("Deal Price"));
                }
                //calling inside loop
                // text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://dealshubglobal.com/product/${Input[i].id}`
                break; //@for now
                // text = text + `+"\n";
              }
              console.log("checking whatsapp all1app in from ",Input[i].from)
              if (Input[i].from.includes("All1App")) {
                console.log("inside whatsapp11")
                watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
                await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                try {
                  await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                        )
                      ),
                      // 30000
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
                  await driver.sleep(6500);
                  await driver.actions().sendKeys(Key.RETURN).perform();
                  await driver.sleep(2500);
                  await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                        )
                      ),
                      // 30000
                      3000
                    )
                    .click();
                  await driver.sleep(6500);
                  await driver
                    .actions()
                    .keyDown(Key.TAB)
                    .keyUp(Key.TAB)
                    .sendKeys(Key.RETURN)
                    .perform();
                } catch (error) {
                  console.log("Whatsapp Error");
                }
                // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
              }
              //avinash08 data take
              // await driver.get(Links);
              // if(!Input[i].from.includes('All1App')){ //Only All1App Start
              // await driver.findElement(By.id("amzn-ss-text-link")).click();
              // await driver.findElement(By.id("amzn-ss-text-link")).click();

              // // popupIsVisible = await driver.wait(until.elementIsVisible("a-popover-content-2"));
              // // console.log("popupIsVisible is "+popupIsVisible);
              // // if(!popupIsVisible){
              //     //   await driver.findElement(By.id("amzn-ss-text-link")).click();
              // //   await driver.findElement(By.id("amzn-ss-text-link")).click();
              // // }
              // await driver.findElement(By.id("amzn-ss-text-link")).click();
              // // await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
              // await driver.sleep(2500);
              // try{
              //     await driver.findElement(By.id("a-autoid-1-announce")).click();
              // }
              // catch(e){
              //     await driver.findElement(By.id("amzn-ss-text-link")).click();
              //     await driver.findElement(By.id("a-autoid-1-announce")).click();

              // }
              // // await driver.findElement(By.id("a-autoid-1-announce")).click();

              // // await driver.findElement(By.id("a-autoid-1-announce")).click();
              // await driver.actions()
              // .sendKeys(Key.DOWN) //avinash08 id
              // .sendKeys(Key.DOWN) //avinash08 id
              // // .ARROW_DOWN
              // .keyDown(Key.ARROW_DOWN)
              // .keyUp(Key.ARROW_DOWN)
              // .sendKeys(Key.RETURN)
              // // .sendKeys(Key.TAB)

              // // Associate Extra Tab Remove
              // // .keyDown(Key.TAB)
              // // .keyUp(Key.TAB)
              // // .sendKeys(Key.RETURN)
              // .perform();
              // await driver.sleep(1500);
              // await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
              // await driver.sleep(3000);
              // let data = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
              // if(data == "")
              // {
              //   console.log('empty text box')
              //   await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
              //   try{
              //       await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
              //     console.log('empty text box 2nd')
              //   }
              //   catch(e){
              //       console.log(e);
              //   }
              //   await driver.sleep(1500);
              // }

              // await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("innerHTML").then(function(webElement) {
              //   console.log('Link Success '+webElement);
              //   urlvalue = webElement;
              // }, function(err) {
              //   console.log('Link Err'+err);
              // });

              // await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
              // await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
              // let linkvalue = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
              // console.log('Link Value is '+linkvalue)

              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .sendKeys('a')
              // .keyUp(Key.CONTROL)
              // .perform()
              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .sendKeys('c')
              // .keyUp(Key.CONTROL)
              // .perform()

              // await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).getAttribute("src");
              // await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).click();

              // await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();

              // linkvalue = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea"));
              // var inputval = await driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']")).sendKeys(Key.chord(Key.CONTROL, "c"));
              // var inputval = await driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']"));
              // driver.findElement(By.xpath("//*[@id='amzn-ss-text-shortlink-textarea']")).getAttribute("value");
              // var inputval = driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("value");
              // WebElement inputval = driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("value");
              // console.log(linkvalue)
              // console.log(inputval)
              // let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
              // let chatId = "@all1app";
              // let text = "https://amzn.to/3sEsW4r";
              // await driver.get("https://amzn.to/3sEsW4r")
              // await driver.findElement(By.id("amzn-ss-text-link")).sendKeys(Key.F6,"Selenium Search",Key.RETURN);

              //@duckduckgo
              // await driver.get("https://www.duckduckgo.com");
              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .sendKeys('v')
              // .keyUp(Key.CONTROL)
              // .sendKeys(Key.RETURN)
              // .perform()
              // urlvalue = await driver.findElement(By.name("q")).getAttribute("value");
              // console.log(urlvalue);
              // } // Only All1App End

              // try{
              //     if(!Input[i].from.includes("All1App")){
              //     if(urlvalue == "")
              //         break;
              //         // text = text + urlvalue+"\n" + itemcategory + "\n";
              //         if(pricenum>0){
              //             text = text + "\n @" + pricenum + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";
              //         }
              //         else if(mention>0){
              //             text = text + "\n";
              //       text = text +"@"+mention + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";

              //     }
              //     else{
              //         console.log('No Price');
              //       break;
              //     }
              //     // text = text.substring(0,99);
              //     // if(text.length>99)
              // }
              // else{
              //     if(text.includes("Deal Price")){
              //         text.indexOf("Deal Price");
              //         text=text.substring(0,text.indexOf("Deal Price"));
              //     }
              //     text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://dealshubglobal.com/product/${Input[i].id}`
              //     break; //@for now
              //     // text = text + `+"\n";
              //   }
              //   }
              //   catch(e){
              //     console.log(e);
              //   }

              // await driver.get(Links);
              // await driver.findElement(By.id("landingImage")).click();
              // try {
              //   await driver
              //     .actions()
              //     .right_action.ContextClick("landingImage")
              //     .SendKeys(Key.ARROW_DOWN)
              //     .SendKeys(Key.ARROW_DOWN)
              //     .SendKeys(Key.ARROW_DOWN)
              //     .SendKeys(Key.ENTER)
              //     .Build()
              //     .Perform();
              // } catch (e) {
              //   console.log("Context Click error");
              // }

              // console.log('Context Click Continuing');

              let urlString;
              // if(Input[i].photo) {
              // photo = `F:\Study\Affiliate\selenium\Selenium Example`

              // }
              // else {
              // urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
              // }
              // xhr.open("GET", urlString);
              // xhr.send();

              // let response = xhr.response;
              // console.log(response)

              // await driver.findElement(By.name("q")).click();
              // await driver.findElement(By.name("q")).sendKeys(Key.F6);
              // driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("value");

              // await driver.findElement(By.name("q")).sendKeys(Key.F6,"hai");
              // await driver.findElement(By.name("q")).sendKeys(Key.BACK_SPACE,urlString);
              // await driver.window.location("https://www.example.com");

              // await driver.actions()
              // .sendKeys(urlString)
              // .keyDown(Key.CONTROL)
              // .sendKeys('a')
              // .keyUp(Key.CONTROL)
              // .perform()
              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .sendKeys('c')
              // .keyUp(Key.CONTROL)
              // .perform()
              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .sendKeys('v')
              // .keyUp(Key.CONTROL)
              // .sendKeys(Key.RETURN)
              // .perform()

              // await driver.actions()
              // .keyDown(Key.CONTROL)
              // .keyDown(Key.TAB)
              // .keyUp(Key.TAB)
              // .keyUp(Key.TAB)
              // .sendKeys('v')
              // .keyUp(Key.CONTROL)
              // .perform()
              // inputval = String(inputval);
              // await driver.get(inputval);
              // await driver.findElement(By.name("q")).click();
              // console.log(linkvalue)
              // await driver.findElement(By.name("q")).sendKeys(Key.RETURN);

              //@ChatBot Telegram

              // let urlString = 'https://www.youtube.com';

              // let request = new XMLHttpRequest();

              // let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
              // xhr.open("GET", urlString);
              // xhr.send();

              // let response = xhr.response;
              // console.log(response)

              // Make a request for a user with a given ID
              // axios.get('/user?ID=12345').then(function (response) {
              // axios.get(`https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`).then(function (response) {
              // const res = await axios.get('https://www.google.com').then(function (response) {
              //     console.log(response);
              // }).catch(function (error) {
              //     console.log(error);
              // });

              // const main = async () => {
              //     await axios.get(`https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`)
              //   }
              //   main()

              // await driver.findElement(By.name("q")).sendKeys(linkvalue);
              // await driver.get("https://web.telegram.org/?legacy=1#/im?p=@All1App");
              // await driver.findElement(By.xpath("/html/body/div[5]/div[2]/div/div/div[2]/button[2]")).click();
              // await driver.findElement(By.className("composer_rich_textarea")).sendKeys("hai");

              // await driver.actions()
              //         // .keyDown(Key.CONTROL)
              //         .keyDown(Key.TAB)
              //         .keyUp(Key.TAB)
              //         // .keyUp(Key.TAB)
              //         .sendKeys('v')
              //         // .keyUp(Key.CONTROL)
              //         .perform()
              // driver.wait(0<1?1000:2000);
              // break;
            } catch (error) {
              overallskipped++;
              console.log("Checking error",error);
              continue;
            }
          } //j loop ends
        } catch (e) {
          console.log("Recheck error")
        }

    //@Whatsapp test code
    // if(!Input[i].from.includes("All1App")){
    //   watscode = "J1JAPHSgHgE3bBVYkv0KPp"; // A Doc
    //   console.log('removed ');
    //   await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
    // watstext = text;
    // let newwatstext="";
    // if(watstext.includes("\n")){
    //   watstext.replace("\n","");
    //   console.log('Watstext is '+watstext);
    // }
    // for(let p=0;p<watstext.length-2;p++){
    //   if(watstext.charAt(p)=="\\" && watstext.charAt(p+1)=="n")
    //   {
    //     p=p+1;
    //   }
    //   else{
    //     newwatstext=newwatstext+watstext.charAt(p);
    //   }
    // }
    // // newwatstext="hello@123"
    // console.log("New Wats Text is "+newwatstext);
    // // Input[i].text_entities[j].text+text+
    //   try{

    //     // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),50000).sendKeys(text);//,Key.RETURN
    //     await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),50000).click();//,Key.RETURN
    //     // for(String s in text.split("\n")){

    //       await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/div')),50000).click();//,Key.RETURN
    //       // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/span/div/div/ul/li[4]/button/span')),50000).click();//,Key.RETURN
    //       // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/span/div/div/ul/li[4]/button/span')),50000).click();//,Key.RETURN
    //       await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/span/div/div/ul/li[1]/button/span')),50000).click();//,Key.RETURN

    //       // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/span/div/div/ul/li[4]/button/span')).click();//,Key.RETURN
    //     //image upload
    //     let filepath = `F:/Study/Affiliate/Projects/Affiliate/Affiliate/src/images/${Input[i].photo}`;
    //     await driver.actions()
    //     // .sendKeys(Key.TAB)
    //     // .sendKeys(Key.TAB)
    //     // .sendKeys(Key.TAB)
    //     // .sendKeys(Key.TAB)
    //     // .sendKeys(Key.TAB)
    //     // .sendKeys(Key.TAB)
    //     .sendKeys(Input[i].photo)
    //     .sendKeys(Key.RETURN)
    //     .perform()
    //     // await driver.findElement(By.cssSelector("span[data-icon='clip']")).click();
    //     //add file to send by file path
    //     //*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/span/div/div/ul/li[4]/button/span
    //     // await driver.findElement(By.cssSelector("input[type='file']")).sendKeys(filepath);
    //     //click to send
    //     // await driver.findElement(By.cssSelector("span[data-icon='send-light']")).click();
    //       let s=text.split("\n");
    //       for(let q=0;q<s.length;q++){
    //         await driver.actions()
    //         .sendKeys(s[q])
    //         .keyDown(Key.SHIFT)
    //         .keyDown(Key.RETURN)
    //         .keyUp(Key.RETURN)
    //         .keyUp(Key.SHIFT)
    //         .perform()
    //     }
    //     await driver.sleep(4000);
    //     await driver.actions()
    //     .sendKeys(Key.RETURN)
    //     .perform()
    //     await driver.sleep(4000);
    //     await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),50000).click();
    //     await driver.sleep(5000);
    //     await driver.actions()
    //     .keyDown(Key.TAB)
    //     .keyUp(Key.TAB);
    //     sendKeys(Key.RETURN)
    //     .perform()
    //     // await driver.wait(until.elementTextContains(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),50000).click();
    //     }
    //     catch(error){
    //       console.log('Whatsapp Error'+error);
    //     }
    //   }
    //test code ends

    // if(Input[i].photo) {
    // if(Input.messages[i].photo) {
    // photo = `F:\Study\Affiliate\selenium\Selenium Example\ChatExport_2022-10-29 (1)/${Input[i].photo}`;
    // photo = `F:\Study\Affiliate\selenium\Selenium Example\ChatExport_2022-10-29 (1)/${Input.messages[i].photo}`;
    // urlString = `https://api.telegram.org/bot${apiToken}/sendPhoto?/sendMessage?chat_id=${chatId}&text=${text}`;
    // }
    // else {

    ////@Before Blocking Code To check final text Output
    // if(!text.includes("ekaro"))
    // if( (!text.includes("amzn")) && (!text.includes("ekaro")))
    // {
    //     skipped++;
    //     continue;
    // }

    // if(Input[i].from!= "all1appdaily"){}

    // urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}&disable_web_page_preview=${disable_web_page_preview}&sendPhoto=${photo}`;
    // urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}&disable_web_page_preview=${disable_web_page_preview}&parse_mode=markdown&text='+"[​​​​​​​​​​​]("+${photo}+")"+${text})`;
    // urlString = `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app&parse_mode=html&caption=${text}`;
    // urlString = `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app&text=${text}`
    // }
    // xhr.open("GET", urlString?photo=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg);
    // photo = "https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg";
    // xhr.open("GET", `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app/sendMessage?chat_id=@all1app?photo=?`+photo+"?chat_id="+chatId+"?caption="+text, true);
    // var res = encodeURIComponent(urlString);
    // var resres = decodeURIComponent(res);
    // resres.send();

    //     fetch('https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app' + new URLSearchParams({
    //         "photo": "https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg",
    //         "chat_id": "@all1app",
    //         "caption": "https://amzn.to/3h23vHh"
    // }))

    // if((text.includes("amzn")) && (!text.includes("ekaro")))
    //         {
    //             skipped++;
    //             continue;
    //         }
    //To be Checked - Removed for non affiliiate apps
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (Input[i].from.includes("All1App")) {
            // if(Input[i].text_entities!=undefined)
            // if (!text.includes("dealshubglobal")) {
            //   console.log("non Affiliate product");
            //   text = "";
            //   btext = "";
            //   photo = "";
            //   continue;
            // }
          }
    } catch (e) {
      console.log(e);
    }
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            // if (!text.includes("amzn")) {
            //   console.log("non Amazon product");
            //   text = "";
            //   btext = "";
            //   photo = "";
            //   continue;
            // }
          }
    } catch (e) {
      console.log("Removed empty",e);
    }
    if (disc) {
      console.log("deals");
      chatId = "@dealshubglobal2";
      watscode = "CRJM1kOVpOy4jqfabIhlYc";
    } else {
      console.log("all");
      chatId = "@dealshubglobal";
      watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
    }
    if (text.includes("Offer")) {
      text.replace("Offer", "");
    }
    // if(discount>=60){
    //   text = "💥"+text
    //   btext = "💥"+btext
    // }
    // if(discount>=75){
    //   text = "💥💥"+text

    //Need to check
    // telegram(photo,chatId,text);
    //   btext = "💥💥"+btext

    // }

    // telegram(photo,"@adddeals",text);
    // whatsapp("FfH1v13f7dVA5ZHVvzEW3E",text);

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
            else{
              console.log("details other error")
            }
            try {
              // id+=1
              // var app = JSON.stringify({
              // var app = JSON.parse({
                var app = {
                  // "name":"firebase check",
                  // "id":"11"
                "id": id,
                "idlen": 10,
                "idlength": 10,
                // "//" date: new date(),
                "date": String(todayDate),
                // "date": String(Input[i].date.split("T")[0]),
                "photo": String(photo),
                // "//" text: text,
                "urltext": String(urltext),
                "productType": "Affiliate",
                "storeType": String(itemType),
                "productCode": String(asin),
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
                  "avinashbmv": String(urlvalue1),
                  // "bmvavinash": String(bmvavinash),
                  // "offers": String(offers),
                  // "avideals": String(avideals),
                  // "avideals5": String(avideals5),
                  // "avideals6": String(avideals6),
                  // "avideals7": String(avideals7),
                  // "avideals8": String(avideals8),
                  // "avideals9": String(avideals9),
                  // "avideals10": String(avideals10),
                  // "avideals11": String(avideals11),
                  // "avideals12": String(avideals12),
                  // "avideals13": String(avideals13),
                  // "avideals14": String(avideals14),
                  // "avideals15": String(avideals15),
                },
                "isDeal":isDeal,
                "isOffer":isOffer,
              }
              // )
              // ;
              console.log("calling firebase");
              // console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              // app = JSON.parse(app)
              console.log("Parsed Json is ",app)
              // if(photo != "" && pricenum > 0 && disco > 0 && urlvalue1.length != 0 && urlvalue1!=""){
              if(photo != "" && pricenum > 0  && urlvalue1.length != 0 && urlvalue1!=""){
                if(enableFirebasePost){
                  postflag = await firebasepost(app,access_token,env,jsonFileName);
                  console.log("Post Flag is ",postflag)
                  if(postflag){
                    id+=1;
                    // i--;
                  } else {
                    access_token = await getAccessToken(env);
                    console.log("Access Token Regenerated")
                    postflag = await firebasepost(app,access_token,env,jsonFileName);
                    console.log("Regenerated Post Flag is ",postflag)
                    if(postflag){
                      id+=1;
                      // i--;
                    } else {
                      console.log("Access Token is failed")
                      i++;
                    }
                  }
                }
              }
              else{
                i++;
                console.log("Details missing price is",pricenum,"dicos is",disco,"photo is ",photo)
              }
              // firebase(app);
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
      if (Input[i]?.from.includes("All1App")) {
        console.log("inside whatsapp1")
        watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
        await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
        try {
          await driver
            .wait(
              until.elementLocated(
                By.xpath(
                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'
                )
              ),
              // 30000
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
          await driver.sleep(6500);
          await driver.actions().sendKeys(Key.RETURN).perform();
          await driver.sleep(2500);
          await driver
            .wait(
              until.elementLocated(
                By.xpath(
                  '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
                )
              ),
              // 30000
              3000
            )
            .click();
          await driver.sleep(6500);
          await driver
            .actions()
            .keyDown(Key.TAB)
            .keyUp(Key.TAB)
            .sendKeys(Key.RETURN)
            .perform();
        } catch (error) {
          console.log("Whatsapp Error");
        }
        // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
      }
    } else {
      console.log("without photo",photo);
      
      //@Whatsapp
      try {
        if (Input[i] != undefined)
          if (Input[i].from != undefined)
            if (Input[i].from.includes("All1App")) {
              watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
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
                    // 30000
              3000
                  )
                  .click(); //,Key.RETURN
                // for(String s in text.split("\n")){
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
                    // 30000
              3000
                  )
                  .click();
                await driver.sleep(6500);
                await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
                sendKeys(Key.RETURN).perform();
              } catch (error) {
                console.log("Whatsapp Error");
              }
              // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'));
            }
      } catch (e) {
        console.log(e);
      }
    }

    try {
      if (disc && Input[i].from.includes("All1App")) {
        if (photo != "") {
          chatId = "@dealshubglobal";
          watscode = "Kzl4DB4yCXzJaaCP0Lrf1G";
          console.log("with photo");
          //Need to check
          // telegram(photo,chatId,text);
          
          
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
                  // 30000
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
                  // 30000
              3000
                )
                .click();
              await driver.sleep(6500);
              await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
              sendKeys(Key.RETURN).perform();
            } catch (error) {
              console.log("Whatsapp Error");
            }
            // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'));
          }
        } else {
          console.log("without photo");
          // telegram(photo,chatId,text);
          
          // @Whatsapp
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
                  // 30000
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
                  // 30000
              3000
                )
                .click();
              await driver.sleep(5000);
              await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
              sendKeys(Key.RETURN).perform();
            } catch (error) {
              console.log("Whatsapp Error");
            }
            // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
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
            // telegram(photo, "@all1appdaily", text);
            if(disco>0)
            telegram(photo, "@all1appweb", text);
            console.log("entered into all1app web");
            
          }
    } catch (e) {
      console.log(e);
    }

   

    
  }
  console.log("getcount");
  console.log(getcount);
  getcount = 0;
  console.log("\nskipped");
  console.log(skipped);
  skipped = 0;
  console.log("\noverallskipped");
  console.log(overallskipped);
  overallskipped = 0;
  console.log("\nusedget");
  console.log(usedget);
  usedget = 0;
  console.log("\nOtherUrls");
  console.log(otherUrls);
  console.log("\nPhotolinks are ");
  console.log(photolinks);
  console.log("\n");
  console.log("\npricelinks are");
  console.log(pricelinks);
  console.log("\n");
  // usedget = 0

  // await driver.get("https://amzn.to/3Ok5KCE");
  // await driver.findElement(By.id("landingImage")).click();

  // Actions right_action = new Actions(chromeDriver);
  // await driver.actions()
  // .right_action.ContextClick("ivLargeImage").SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ENTER).Build().Perform();
  // .SendKeys
  // right_action.ContextClick(element_name).SendKeys(Keys.ArrowDown).SendKeys(Keys.Enter).Build().Perform();
  // await driver.moveToElement(await driver.findElement(By.id("ivLargeImage")).contextClick());

  // await driver.

  //Needed

  // await driver.actions()
  // .sendKeys(Key.ARROW_DOWN)
  // .sendKeys(Key.ARROW_DOWN)
  // .sendKeys(Key.ARROW_DOWN)
  // .sendKeys(Key.RETURN)
  // .perform()
  // await driver.get("https://chat.whatsapp.com/J1JAPHSgHgE3bBVYkv0KPp");
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
        // 30000
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
    // await driver.actions()
    // .sendKeys(Key.ESCAPE)
    // await driver.findElement(By.xpath('//*[@id="top-of-page"]/div[1]/div[1]/div[1]/header/div/div[2]/span[1]/a[1]')).click();
    // await driver.findElement(By.id("action-button")).click();
    // await driver.sleep(10000);
    await driver
      .actions()
      .keyDown(Key.CONTROL)
      .keyDown("v")
      .keyUp(Key.CONTROL)
      .sendKeys(Key.RETURN)
      .perform();

    await driver.sleep(5000);
    await driver.actions().sendKeys("hai").sendKeys(Key.RETURN).perform();

    // await driver.get("https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp");
    await driver.get("https://api.whatsapp.com/send?phone=9866017750");
  }
}

example();
