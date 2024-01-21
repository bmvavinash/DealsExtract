//  chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\ChromeProfile"

//chrome with images, product description(not link description), Link working perfect except emoji

// <!DOCTYPE html>
// <html>
// <body>

// <h1 id="demo">The Document Object</h1>
// <h2>The getElementById() Method</h2>

// <script>
// const myElement = document.getElementById("demo");
// myElement.style.color = "red";
// </script>

// </body>
// </html>

// import React , {useEffect, useState, useRef} from 'react';

// Google Code for Selenium JavaScript
// var webdriver = require('selenium-webdriver');

// var browser_name = new webdriver.Builder();

// withCapabilities(webdriver.Capabilities.firefox()).build();

// browser.get('http://www.google.com');

// var promise = browser_name.getTitle();

// promise.then(function(title)

// {

// console.log(title);

// });

// browser.quit();

// const inputfun=() => {
//     var name = readLine("Enter the Url");

// const example=async() => {

//@needed
// const { Builder, By, Key, util, Browser, it, WebDriver} = require("selenium-webdriver")
const { By, Key, Builder, Button, until } = require("selenium-webdriver");
require("url").URLSearchParams;

// import Input from './ChatExport_2022-10-13 (3)/result.json';

const { urlIs } = require("selenium-webdriver/lib/until");

//@chrome
require("chromedriver");
const { Options } = require("./node_modules/selenium-webdriver/chrome");

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
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.XMLHttpRequest = require("xhr2");
// var XMLHttpRequest = require('xhr2');
var xhr = new global.XMLHttpRequest();
// import axios from 'axios';
const axios = require("axios").default;
let urlvalue,
  urlvalue1 = "";
let chat_id = "@all1app";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E"; //alldeals
// var webdriver = require("selenium-webdriver"),
// By = webdriver.By,
// until = webdriver.until;

// var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.wait(0<1?1000:2000);

// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');


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



async function example() {
  //     driver = await new Builder()
  //   .forBrowser('chrome')
  //   .setChromeOptions(new Options().chrome())
  //   .build()

  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  // driver = await chrome.Driver.createSession(options);

  //@Firefox
  driver = await new Builder().forBrowser("firefox").build();

  // options.excludeSwitches("disable-popup-blocking", "enable-automation");
  // options.addArguments("--disable-dev-shm-usage");
  // options.addArguments('--ignore-certificate-errors');
  // options.addArguments('--ignore-ssl-errors');

  // const builder = new webdriver.Builder().forBrowser('chrome');

  // const chromeOptions = new chrome.Options();
  // chromeOptions.setChromeBinaryPath("F:\\Study\\Softwares\\chromedriver.exe");
  // builder.setChromeOptions(chromeOptions);
  // const driver = builder.build();

  // let driver = await new Builder().forBrowser("chrome").setChromeOptions(new Options().setExperimentalOption("debuggerAddress", "107.0.5304.63")).build();
  // let driver = await new Builder().forBrowser("chrome").usingServer('http://localhost:9222').build();
  // let driver = await new Builder().forBrowser("chrome").build();

  // let drivers = await new Builder().forBrowser("chrome").setChromeOptions(new Options().setExperimentalOption("debuggerAddress", "127.0.0.1:9222")).build();
  // const inputRef = useRef(null);
  // JavascriptExecutor JavascriptExecutor =
  // var webdriver = require('selenium-webdriver');

  // var browser_name = new webdriver.Builder();

  // withCapabilities(webdriver.Capabilities.firefox()).build();
  // let driver = new Builder().forBrowser("firefox").build();

  // let driver = await new Builder()
  // .forBrowser('chrome')
  // .build();

  // let driver = await new Builder().forBrowser('chrome').withDriverPath('F:\\Study\\Softwares\\chromedriver.exe').build();

  // const focusInput = () => {
  //     const element = document.getElementById("myInput");
  //     // const element =
  // }
  // var a = driver.findElement(By.id('ASIN')).value;

  // var Link = "https://amzn.eu/d/fvjhOPh"
  // var Link =
  // driver.get("https://affiliiate-app.web.app/flag");
  // await driver.get("https://www.google.com");

  //json
  const Input =
    // const Input =
    [










      {
        "id": 93716,
        "type": "message",
        "date": "2023-07-06T00:08:20",
        "date_unixtime": "1688582300",
        "edited": "2023-07-06T08:58:08",
        "edited_unixtime": "1688614088",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 473,
        "text": [
         "💥boAt Airdopes 131 \n\nDeal @ 899🔥.    ❌Reg @ 1199\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/LI29nl"
         },
         "\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/HveoWO"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥boAt Airdopes 131 \n\nDeal @ 899🔥.    ❌Reg @ 1199\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/LI29nl"
         },
         {
          "type": "plain",
          "text": "\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/HveoWO"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93717,
        "type": "message",
        "date": "2023-07-06T00:08:50",
        "date_unixtime": "1688582330",
        "edited": "2023-07-06T06:28:21",
        "edited_unixtime": "1688605101",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 921,
        "height": 337,
        "text": [
         {
          "type": "bold",
          "text": "[ New Stock ]"
         },
         " Min. 60% Off On Wow Beauty Products.\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/44yz5Ae"
         },
         "\n\n398 :  ",
         {
          "type": "link",
          "text": "https://amzn.to/46DofdI"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "[ New Stock ]"
         },
         {
          "type": "plain",
          "text": " Min. 60% Off On Wow Beauty Products.\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44yz5Ae"
         },
         {
          "type": "plain",
          "text": "\n\n398 :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46DofdI"
         }
        ]
       },
       {
        "id": 93718,
        "type": "message",
        "date": "2023-07-06T00:13:49",
        "date_unixtime": "1688582629",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1017,
        "height": 337,
        "text": [
         "Double Bedsheet at 199.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0f9R1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Double Bedsheet at 199.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0f9R1"
         }
        ]
       },
       {
        "id": 93719,
        "type": "message",
        "date": "2023-07-06T00:49:11",
        "date_unixtime": "1688584751",
        "edited": "2023-07-06T15:40:58",
        "edited_unixtime": "1688638258",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 908,
        "height": 362,
        "text": [
         "Miss Olive Women Blouse Starting Rs.128\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44bNNxb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Miss Olive Women Blouse Starting Rs.128\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bNNxb"
         }
        ]
       },
       {
        "id": 93720,
        "type": "message",
        "date": "2023-07-06T00:49:29",
        "date_unixtime": "1688584769",
        "edited": "2023-07-06T01:56:26",
        "edited_unixtime": "1688588786",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Mamaearth Refer & Earn : Signup & Get 150₹ MamaCash\n\nLink : ",
         {
          "type": "link",
          "text": "https://extp.in/WYCoBu"
         },
         "\n\nRefer Code : MPAQZDBQA \n\nNow Order Here : ",
         {
          "type": "link",
          "text": "https://extp.in/6RZcfb"
         },
         "\n\n*Baby Care : ",
         {
          "type": "link",
          "text": "https://extp.in/OkRm8S"
         },
         "\n*Face Care : ",
         {
          "type": "link",
          "text": "https://extp.in/5IBWQA"
         },
         "\n*Hair Care : ",
         {
          "type": "link",
          "text": "https://extp.in/FLeoyI"
         },
         "\n*Body Care : ",
         {
          "type": "link",
          "text": "https://extp.in/CtRRlq"
         },
         "\n\nUse Code : SLASH25 (For 25% Off + 5% Extra Off On Online Payment)\n\nYou Can Use 70% Of 150₹ (After Applying 150₹ Cash + SLASH25 Code You Can Get 499₹ Order at ₹236)\n\n--------\nUse this Trick : \n\nCreate a Mamaearth account & Create your unique referral link. Use the referral link to create a new account.\n\nPlace an order from the new account.\n\nBoth the Primary and new Account (Secondary) will receive 150 credits as per the terms and conditions."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mamaearth Refer & Earn : Signup & Get 150₹ MamaCash\n\nLink : "
         },
         {
          "type": "link",
          "text": "https://extp.in/WYCoBu"
         },
         {
          "type": "plain",
          "text": "\n\nRefer Code : MPAQZDBQA \n\nNow Order Here : "
         },
         {
          "type": "link",
          "text": "https://extp.in/6RZcfb"
         },
         {
          "type": "plain",
          "text": "\n\n*Baby Care : "
         },
         {
          "type": "link",
          "text": "https://extp.in/OkRm8S"
         },
         {
          "type": "plain",
          "text": "\n*Face Care : "
         },
         {
          "type": "link",
          "text": "https://extp.in/5IBWQA"
         },
         {
          "type": "plain",
          "text": "\n*Hair Care : "
         },
         {
          "type": "link",
          "text": "https://extp.in/FLeoyI"
         },
         {
          "type": "plain",
          "text": "\n*Body Care : "
         },
         {
          "type": "link",
          "text": "https://extp.in/CtRRlq"
         },
         {
          "type": "plain",
          "text": "\n\nUse Code : SLASH25 (For 25% Off + 5% Extra Off On Online Payment)\n\nYou Can Use 70% Of 150₹ (After Applying 150₹ Cash + SLASH25 Code You Can Get 499₹ Order at ₹236)\n\n--------\nUse this Trick : \n\nCreate a Mamaearth account & Create your unique referral link. Use the referral link to create a new account.\n\nPlace an order from the new account.\n\nBoth the Primary and new Account (Secondary) will receive 150 credits as per the terms and conditions."
         }
        ]
       },
       {
        "id": 93721,
        "type": "message",
        "date": "2023-07-06T00:49:50",
        "date_unixtime": "1688584790",
        "edited": "2023-07-06T02:07:43",
        "edited_unixtime": "1688589463",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 548,
        "text": [
         "boAt Wave Prime47 Smart Watch @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NGwddp"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "Apply 10% Off Coupon (Selected Account)"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Wave Prime47 Smart Watch @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NGwddp"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "Apply 10% Off Coupon (Selected Account)"
         }
        ]
       },
       {
        "id": 93722,
        "type": "message",
        "date": "2023-07-06T09:13:09",
        "date_unixtime": "1688614989",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 700,
        "height": 393,
        "text": [
         "✅ pure Metal credit card, no joining fees,no annual fees .\n\n🚨My Referrel code:  ",
         {
          "type": "bold",
          "text": "ANK9DI2IW"
         },
         " \n\n",
         {
          "type": "bold",
          "text": "✅use"
         },
         " my code and get 2500   joining bonus\n\n✅ Apply. Join Now-  ",
         {
          "type": "link",
          "text": "https://1cardapp.page.link/zcdc"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "✅ pure Metal credit card, no joining fees,no annual fees .\n\n🚨My Referrel code:  "
         },
         {
          "type": "bold",
          "text": "ANK9DI2IW"
         },
         {
          "type": "plain",
          "text": " \n\n"
         },
         {
          "type": "bold",
          "text": "✅use"
         },
         {
          "type": "plain",
          "text": " my code and get 2500   joining bonus\n\n✅ Apply. Join Now-  "
         },
         {
          "type": "link",
          "text": "https://1cardapp.page.link/zcdc"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93723,
        "type": "message",
        "date": "2023-07-06T09:52:22",
        "date_unixtime": "1688617342",
        "edited": "2023-07-06T10:10:33",
        "edited_unixtime": "1688618433",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Amazon Prime Day Sale starts from 15th-16th July 😍😍\n\n✅ Bank Offer: Get 10% Instant Discount On SBI & ICICI Credit Cards\n\nEnsure You Have SBI / ICICI Credit cards to get discounts on \"Amazon Prime Day Sales\"\n\n❇️ Apply SBI Card:  ",
         {
          "type": "link",
          "text": "https://extp.in/QBWIZ5"
         },
         "\n➡️ Benefits of SBI Card ↓↓↓↓\n✓ ₹500 Amazon Gift Voucher.\n✓ Earn 10 Rewards On Every ₹100 Spent On Dining, Movies, Departmental Stores & Grocery Spends.\n✓ 4 Reward Points = 1₹.\n\n❇️ Apply ICICI Card: ",
         {
          "type": "link",
          "text": "https://extp.in/Ec3eeK"
         },
         "\n➡️ Benefits of ICICI Card ↓↓↓↓\n✓Joining Fee – NIL\n✓Supplementary Card Fee – NIL\n✓ICICI Bank Reward, redeemable for exciting Gifts and Vouchers\n✓Fuel Surcharge Waiver\n✓Security of a chip card to protect you against the risk of fraud"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Prime Day Sale starts from 15th-16th July 😍😍\n\n✅ Bank Offer: Get 10% Instant Discount On SBI & ICICI Credit Cards\n\nEnsure You Have SBI / ICICI Credit cards to get discounts on \"Amazon Prime Day Sales\"\n\n❇️ Apply SBI Card:  "
         },
         {
          "type": "link",
          "text": "https://extp.in/QBWIZ5"
         },
         {
          "type": "plain",
          "text": "\n➡️ Benefits of SBI Card ↓↓↓↓\n✓ ₹500 Amazon Gift Voucher.\n✓ Earn 10 Rewards On Every ₹100 Spent On Dining, Movies, Departmental Stores & Grocery Spends.\n✓ 4 Reward Points = 1₹.\n\n❇️ Apply ICICI Card: "
         },
         {
          "type": "link",
          "text": "https://extp.in/Ec3eeK"
         },
         {
          "type": "plain",
          "text": "\n➡️ Benefits of ICICI Card ↓↓↓↓\n✓Joining Fee – NIL\n✓Supplementary Card Fee – NIL\n✓ICICI Bank Reward, redeemable for exciting Gifts and Vouchers\n✓Fuel Surcharge Waiver\n✓Security of a chip card to protect you against the risk of fraud"
         }
        ]
       },
       {
        "id": 93724,
        "type": "message",
        "date": "2023-07-06T09:53:06",
        "date_unixtime": "1688617386",
        "edited": "2023-07-06T09:59:58",
        "edited_unixtime": "1688617798",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1271,
        "height": 568,
        "text": [
         "Safari 24 Cms Travel Bag@ 499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44vk2Hb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Safari 24 Cms Travel Bag@ 499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44vk2Hb"
         }
        ]
       },
       {
        "id": 93725,
        "type": "message",
        "date": "2023-07-06T09:54:13",
        "date_unixtime": "1688617453",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1003,
        "height": 381,
        "text": [
         "Campus Men Running Shoes Starts@ 517.\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/43fppcP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Campus Men Running Shoes Starts@ 517.\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43fppcP"
         }
        ]
       },
       {
        "id": 93726,
        "type": "message",
        "date": "2023-07-06T09:54:46",
        "date_unixtime": "1688617486",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 396,
        "text": [
         "[ Back ] Protoner Spare Weight Lifting Plates, 2.5 kg x 4@ 279\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44fUXAs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "[ Back ] Protoner Spare Weight Lifting Plates, 2.5 kg x 4@ 279\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44fUXAs"
         }
        ]
       },
       {
        "id": 93727,
        "type": "message",
        "date": "2023-07-06T10:00:39",
        "date_unixtime": "1688617839",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1216,
        "height": 498,
        "text": [
         "Samsung Memory Card (64GB) @450\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44s7fWJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung Memory Card (64GB) @450\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44s7fWJ"
         }
        ]
       },
       {
        "id": 93728,
        "type": "message",
        "date": "2023-07-06T10:06:17",
        "date_unixtime": "1688618177",
        "edited": "2023-07-06T16:56:02",
        "edited_unixtime": "1688642762",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1257,
        "height": 581,
        "text": [
         "💥ASTROAI Tyre Inflator, Tire Inflator for Car, 12V DC Air Pump for Car Tires,\n\n💰Deal @ 1279🔥.    ❌Reg @ 1500+\n\n✅ apply 50% off coupon\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3PKwPBr"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥ASTROAI Tyre Inflator, Tire Inflator for Car, 12V DC Air Pump for Car Tires,\n\n💰Deal @ 1279🔥.    ❌Reg @ 1500+\n\n✅ apply 50% off coupon\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKwPBr"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93729,
        "type": "message",
        "date": "2023-07-06T10:11:04",
        "date_unixtime": "1688618464",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 468,
        "text": [
         "💥 OnePlus Nord Buds 2R Earbuds \n\n💰Deal @ 2099🔥 effective \n\n✅100 off using 40 super coins \n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/qiwGCi"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥 OnePlus Nord Buds 2R Earbuds \n\n💰Deal @ 2099🔥 effective \n\n✅100 off using 40 super coins \n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/qiwGCi"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93730,
        "type": "message",
        "date": "2023-07-06T10:12:01",
        "date_unixtime": "1688618521",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1248,
        "height": 497,
        "text": [
         "Signoraware Aqua Glow Borosilicate Glass Water Bottle @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43jz1D3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Signoraware Aqua Glow Borosilicate Glass Water Bottle @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43jz1D3"
         }
        ]
       },
       {
        "id": 93731,
        "type": "message",
        "date": "2023-07-06T10:12:26",
        "date_unixtime": "1688618546",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "Bajaj Ivora Plus Linear LED Lamp 18W Cool Day Light B22D (Pack of 2,  @637\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43icyX8"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bajaj Ivora Plus Linear LED Lamp 18W Cool Day Light B22D (Pack of 2,  @637\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43icyX8"
         }
        ]
       },
       {
        "id": 93732,
        "type": "message",
        "date": "2023-07-06T10:14:29",
        "date_unixtime": "1688618669",
        "edited": "2023-07-06T19:53:23",
        "edited_unixtime": "1688653403",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1212,
        "height": 468,
        "text": [
         "Lifelong Exercise Gym Gloves  @159\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XELeBe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Exercise Gym Gloves  @159\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XELeBe"
         }
        ]
       },
       {
        "id": 93733,
        "type": "message",
        "date": "2023-07-06T10:15:22",
        "date_unixtime": "1688618722",
        "edited": "2023-07-06T10:15:42",
        "edited_unixtime": "1688618742",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 497,
        "text": [
         "Zebronics ZEB-JUKE BAR 9700 PRO DOLBY ATMOS Bluetooth Home Theater Soundbar ",
         {
          "type": "mention",
          "text": "@11499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43agN73"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics ZEB-JUKE BAR 9700 PRO DOLBY ATMOS Bluetooth Home Theater Soundbar "
         },
         {
          "type": "mention",
          "text": "@11499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43agN73"
         }
        ]
       },
       {
        "id": 93734,
        "type": "message",
        "date": "2023-07-06T10:15:54",
        "date_unixtime": "1688618754",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 906,
        "height": 482,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " Freesoul Men T-shirt From ₹179\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/Fboegc"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         {
          "type": "plain",
          "text": " Freesoul Men T-shirt From ₹179\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/Fboegc"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93735,
        "type": "message",
        "date": "2023-07-06T10:16:20",
        "date_unixtime": "1688618780",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1097,
        "height": 401,
        "text": [
         "JBL Tune 500BT by Harman Powerful Bass Wireless On-Ear Headphones with Mic @ ₹2,444\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3XLDQUQ"
         },
         "\n\n❌ Regular price @ ₹3,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "JBL Tune 500BT by Harman Powerful Bass Wireless On-Ear Headphones with Mic @ ₹2,444\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XLDQUQ"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3,100"
         }
        ]
       },
       {
        "id": 93736,
        "type": "message",
        "date": "2023-07-06T10:16:42",
        "date_unixtime": "1688618802",
        "edited": "2023-07-06T13:23:38",
        "edited_unixtime": "1688630018",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1112,
        "height": 591,
        "text": [
         "Men's Trousers From ₹399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/7MzZNq"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men's Trousers From ₹399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/7MzZNq"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93737,
        "type": "message",
        "date": "2023-07-06T10:16:58",
        "date_unixtime": "1688618818",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 478,
        "text": [
         "Fastrack Revoltt FR1|1.39Inch Super UltraVU Display BT Calling Smartwatch @ ₹1,599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/kfRtEl"
         },
         "\n\n❌ Regular price @ ₹2,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fastrack Revoltt FR1|1.39Inch Super UltraVU Display BT Calling Smartwatch @ ₹1,599\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/kfRtEl"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,299"
         }
        ]
       },
       {
        "id": 93738,
        "type": "message",
        "date": "2023-07-06T10:17:18",
        "date_unixtime": "1688618838",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1123,
        "height": 601,
        "text": [
         "Van Heusen Women's Dresses From ₹599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/4L7OLp"
         },
         "\n\n❌ Regular price @ ₹1,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Van Heusen Women's Dresses From ₹599\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/4L7OLp"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,100"
         }
        ]
       },
       {
        "id": 93739,
        "type": "message",
        "date": "2023-07-06T10:17:39",
        "date_unixtime": "1688618859",
        "edited": "2023-07-06T10:46:36",
        "edited_unixtime": "1688620596",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1160,
        "height": 567,
        "text": [
         "Butterflies Clutches & Wallets From ₹324\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ELsVQl"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Butterflies Clutches & Wallets From ₹324\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ELsVQl"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93740,
        "type": "message",
        "date": "2023-07-06T10:17:59",
        "date_unixtime": "1688618879",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1215,
        "height": 551,
        "text": [
         "boAt Immortal IM1000D Dual Channel Gaming Wired Over Ear Headphones with mic, 7.1 Channel Surround Audio @ ₹1,529\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44zjLD8"
         },
         "\n\n❌ Regular price @ ₹2,599"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Immortal IM1000D Dual Channel Gaming Wired Over Ear Headphones with mic, 7.1 Channel Surround Audio @ ₹1,529\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44zjLD8"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,599"
         }
        ]
       },
       {
        "id": 93741,
        "type": "message",
        "date": "2023-07-06T10:18:26",
        "date_unixtime": "1688618906",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1132,
        "height": 442,
        "text": [
         "Foxsky 50 inches 4K Ultra HD Smart LED TV @ ₹21,999\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3PIqTsM"
         },
         "\n\n❌ Regular price @ ₹26,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Foxsky 50 inches 4K Ultra HD Smart LED TV @ ₹21,999\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PIqTsM"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹26,999"
         }
        ]
       },
       {
        "id": 93742,
        "type": "message",
        "date": "2023-07-06T10:18:48",
        "date_unixtime": "1688618928",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1271,
        "height": 557,
        "text": [
         "Hershey's Bar Valentine Greeting Pack Creamy Milk & Cookies N Creme Chocolate, 2 X 100 g @174\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PIQlOM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hershey's Bar Valentine Greeting Pack Creamy Milk & Cookies N Creme Chocolate, 2 X 100 g @174\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PIQlOM"
         }
        ]
       },
       {
        "id": 93743,
        "type": "message",
        "date": "2023-07-06T10:20:13",
        "date_unixtime": "1688619013",
        "edited": "2023-07-06T10:23:02",
        "edited_unixtime": "1688619182",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 526,
        "text": [
         "Loot 🚀 🚀 DIZO Trimmer Kit Pro Trimmer 280 min Runtime 40 Length Settings @ ₹999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/DCEhe0"
         },
         "\n\n❌ Regular price @ ₹1,799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 DIZO Trimmer Kit Pro Trimmer 280 min Runtime 40 Length Settings @ ₹999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/DCEhe0"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,799"
         }
        ]
       },
       {
        "id": 93744,
        "type": "message",
        "date": "2023-07-06T10:24:22",
        "date_unixtime": "1688619262",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 396,
        "text": [
         "💥Lenovo Essential Wired Combo - Wired Keyboard and Mouse Set - USB - Black\n\n💰Deal @ 1299🔥.    ❌Reg @ 2k\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44veNYi"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Lenovo Essential Wired Combo - Wired Keyboard and Mouse Set - USB - Black\n\n💰Deal @ 1299🔥.    ❌Reg @ 2k\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44veNYi"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93745,
        "type": "message",
        "date": "2023-07-06T10:25:07",
        "date_unixtime": "1688619307",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 535,
        "text": [
         "Tosaa Aluminium 12 Cavity Appam Patra @308\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46CLhBv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tosaa Aluminium 12 Cavity Appam Patra @308\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46CLhBv"
         }
        ]
       },
       {
        "id": 93746,
        "type": "message",
        "date": "2023-07-06T10:26:27",
        "date_unixtime": "1688619387",
        "edited": "2023-07-06T11:01:51",
        "edited_unixtime": "1688621511",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1245,
        "height": 495,
        "text": [
         "Pigeon Stainless Steel Idly Maker 6 Plates  @789\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NzNNQq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Stainless Steel Idly Maker 6 Plates  @789\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NzNNQq"
         }
        ]
       },
       {
        "id": 93747,
        "type": "message",
        "date": "2023-07-06T10:27:08",
        "date_unixtime": "1688619428",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1181,
        "height": 453,
        "text": [
         "Cello Style Knit Small Basket Without Lid, Set of 3, Pink,Plastic @294\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PGxyUr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Style Knit Small Basket Without Lid, Set of 3, Pink,Plastic @294\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PGxyUr"
         }
        ]
       },
       {
        "id": 93748,
        "type": "message",
        "date": "2023-07-06T10:27:28",
        "date_unixtime": "1688619448",
        "edited": "2023-07-06T15:53:00",
        "edited_unixtime": "1688638980",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Syska SRL-9W Base B22 9 Wattage LED Bulb (Pack of 5 @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PGxNPl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Syska SRL-9W Base B22 9 Wattage LED Bulb (Pack of 5 @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PGxNPl"
         }
        ]
       },
       {
        "id": 93749,
        "type": "message",
        "date": "2023-07-06T10:27:54",
        "date_unixtime": "1688619474",
        "edited": "2023-07-06T15:51:18",
        "edited_unixtime": "1688638878",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1267,
        "height": 567,
        "text": [
         "Hammer Ace 3.0 Bluetooth Calling Smart Watch ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pB2niI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hammer Ace 3.0 Bluetooth Calling Smart Watch "
         },
         {
          "type": "mention",
          "text": "@1299"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pB2niI"
         }
        ]
       },
       {
        "id": 93750,
        "type": "message",
        "date": "2023-07-06T10:29:02",
        "date_unixtime": "1688619542",
        "edited": "2023-07-06T20:15:13",
        "edited_unixtime": "1688654713",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1127,
        "height": 453,
        "text": [
         "AXN 950 ml Chopper with 5 Stainless Steel Blade @165\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44cTVFq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AXN 950 ml Chopper with 5 Stainless Steel Blade @165\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44cTVFq"
         }
        ]
       },
       {
        "id": 93751,
        "type": "message",
        "date": "2023-07-06T10:29:23",
        "date_unixtime": "1688619563",
        "edited": "2023-07-06T12:44:59",
        "edited_unixtime": "1688627699",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 544,
        "text": [
         "Story@home Foldable Mosquito Net @631\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rnAfjm"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Story@home Foldable Mosquito Net @631\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rnAfjm"
         }
        ]
       },
       {
        "id": 93752,
        "type": "message",
        "date": "2023-07-06T10:29:59",
        "date_unixtime": "1688619599",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1260,
        "height": 567,
        "text": [
         "Infinity (JBL) Swing 320 by Harman ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44aZ7JH"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Infinity (JBL) Swing 320 by Harman "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44aZ7JH"
         }
        ]
       },
       {
        "id": 93753,
        "type": "message",
        "date": "2023-07-06T10:30:19",
        "date_unixtime": "1688619619",
        "edited": "2023-07-06T17:45:10",
        "edited_unixtime": "1688645710",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "Callas Computer Desk Home/Office Desk  ",
         {
          "type": "mention",
          "text": "@1998"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46zJcGF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Callas Computer Desk Home/Office Desk  "
         },
         {
          "type": "mention",
          "text": "@1998"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46zJcGF"
         }
        ]
       },
       {
        "id": 93754,
        "type": "message",
        "date": "2023-07-06T10:31:10",
        "date_unixtime": "1688619670",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1201,
        "height": 418,
        "text": [
         "SYSKA 9W B22 LED Cool Day Light Bulb, Pack of 3 @249\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rhppvu"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SYSKA 9W B22 LED Cool Day Light Bulb, Pack of 3 @249\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rhppvu"
         }
        ]
       },
       {
        "id": 93755,
        "type": "message",
        "date": "2023-07-06T10:53:03",
        "date_unixtime": "1688620983",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Larah by BOROSIL Opalware Full Plate @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44wEDLr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Larah by BOROSIL Opalware Full Plate @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44wEDLr"
         }
        ]
       },
       {
        "id": 93756,
        "type": "message",
        "date": "2023-07-06T11:00:56",
        "date_unixtime": "1688621456",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1048,
        "height": 480,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/8KF0rN"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/8KF0rN"
         }
        ]
       },
       {
        "id": 93757,
        "type": "message",
        "date": "2023-07-06T11:13:12",
        "date_unixtime": "1688622192",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 616,
        "text": [
         "FTX Men's Dri-Fit Round Neck T-Shirt @219\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43gtpcV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "FTX Men's Dri-Fit Round Neck T-Shirt @219\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gtpcV"
         }
        ]
       },
       {
        "id": 93758,
        "type": "message",
        "date": "2023-07-06T11:13:37",
        "date_unixtime": "1688622217",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 582,
        "text": [
         "Polycab Aereo plus 1200 mm High Speed 1 Star Rated 52 Watt Ceiling Fan  ",
         {
          "type": "mention",
          "text": "@2428"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3ri7chr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Polycab Aereo plus 1200 mm High Speed 1 Star Rated 52 Watt Ceiling Fan  "
         },
         {
          "type": "mention",
          "text": "@2428"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ri7chr"
         }
        ]
       },
       {
        "id": 93759,
        "type": "message",
        "date": "2023-07-06T11:14:07",
        "date_unixtime": "1688622247",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Q2apft"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Q2apft"
         }
        ]
       },
       {
        "id": 93760,
        "type": "message",
        "date": "2023-07-06T11:14:40",
        "date_unixtime": "1688622280",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "Beurer FC 41 Power deep Pore Cleanser Vacuum  @578\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46EY2f9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beurer FC 41 Power deep Pore Cleanser Vacuum  @578\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46EY2f9"
         }
        ]
       },
       {
        "id": 93761,
        "type": "message",
        "date": "2023-07-06T11:15:06",
        "date_unixtime": "1688622306",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 573,
        "text": [
         "Orient Electric Adena Prime 1200mm Decorative BEE Star Rated Ceiling Fan ",
         {
          "type": "mention",
          "text": "@2000"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKdwEG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Orient Electric Adena Prime 1200mm Decorative BEE Star Rated Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@2000"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKdwEG"
         }
        ]
       },
       {
        "id": 93762,
        "type": "message",
        "date": "2023-07-06T11:15:38",
        "date_unixtime": "1688622338",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 579,
        "text": [
         "Havells Aqua-S Double Wall Hot/Cold Water Bottle @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44d2P5A"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells Aqua-S Double Wall Hot/Cold Water Bottle @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44d2P5A"
         }
        ]
       },
       {
        "id": 93763,
        "type": "message",
        "date": "2023-07-06T11:16:27",
        "date_unixtime": "1688622387",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 609,
        "text": [
         "Teddy Roosevelt Flavoured Instant Coffee Powder @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44bOnLr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Teddy Roosevelt Flavoured Instant Coffee Powder @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bOnLr"
         }
        ]
       },
       {
        "id": 93764,
        "type": "message",
        "date": "2023-07-06T11:17:00",
        "date_unixtime": "1688622420",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 627,
        "text": [
         "Skybags Brat Black 46 Cms Casual Backpack @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pysuXB"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Skybags Brat Black 46 Cms Casual Backpack @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pysuXB"
         }
        ]
       },
       {
        "id": 93765,
        "type": "message",
        "date": "2023-07-06T11:17:32",
        "date_unixtime": "1688622452",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1187,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/GTXjF8"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/GTXjF8"
         }
        ]
       },
       {
        "id": 93766,
        "type": "message",
        "date": "2023-07-06T11:17:56",
        "date_unixtime": "1688622476",
        "edited": "2023-07-06T12:26:51",
        "edited_unixtime": "1688626611",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1259,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/hZ1Ze4"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/hZ1Ze4"
         }
        ]
       },
       {
        "id": 93767,
        "type": "message",
        "date": "2023-07-06T11:24:04",
        "date_unixtime": "1688622844",
        "edited": "2023-07-06T21:28:07",
        "edited_unixtime": "1688659087",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1000,
        "height": 1000,
        "text": [
         {
          "type": "underline",
          "text": "Loot 🚀 🚀 Fogg Scent 100ml Each (Pack of 2)\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Make My Day @ ₹473\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3JKdUmC"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "▶️ Intensio @ ₹550\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3pFdpDq"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "▶️ Xpressio @ ₹524\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3XDePLk"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "underline",
          "text": "Loot 🚀 🚀 Fogg Scent 100ml Each (Pack of 2)\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Make My Day @ ₹473\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKdUmC"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Intensio @ ₹550\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pFdpDq"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Xpressio @ ₹524\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XDePLk"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93768,
        "type": "message",
        "date": "2023-07-06T11:24:04",
        "date_unixtime": "1688622844",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1000,
        "height": 1000,
        "text": "",
        "text_entities": []
       },
       {
        "id": 93769,
        "type": "message",
        "date": "2023-07-06T11:24:30",
        "date_unixtime": "1688622870",
        "edited": "2023-07-06T12:50:32",
        "edited_unixtime": "1688628032",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 614,
        "text": [
         "Polycab Aery 400 mm Table Fan ",
         {
          "type": "mention",
          "text": "@1468"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rkL5He"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Polycab Aery 400 mm Table Fan "
         },
         {
          "type": "mention",
          "text": "@1468"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rkL5He"
         }
        ]
       },
       {
        "id": 93770,
        "type": "message",
        "date": "2023-07-06T12:29:16",
        "date_unixtime": "1688626756",
        "edited": "2023-07-06T16:53:53",
        "edited_unixtime": "1688642633",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1014,
        "height": 465,
        "text": [
         "Ajio | Flat 70% Off on Everything\n\n➡️ Use Code: SALE70\n\nMen: ",
         {
          "type": "link",
          "text": "https://extp.in/GrYc2d"
         },
         "\n\nWomen: ",
         {
          "type": "link",
          "text": "https://extp.in/gISUK4"
         },
         "\n\nBoys: ",
         {
          "type": "link",
          "text": "https://extp.in/d5Srgp"
         },
         "\n\nGirls: ",
         {
          "type": "link",
          "text": "https://extp.in/vdB13g"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio | Flat 70% Off on Everything\n\n➡️ Use Code: SALE70\n\nMen: "
         },
         {
          "type": "link",
          "text": "https://extp.in/GrYc2d"
         },
         {
          "type": "plain",
          "text": "\n\nWomen: "
         },
         {
          "type": "link",
          "text": "https://extp.in/gISUK4"
         },
         {
          "type": "plain",
          "text": "\n\nBoys: "
         },
         {
          "type": "link",
          "text": "https://extp.in/d5Srgp"
         },
         {
          "type": "plain",
          "text": "\n\nGirls: "
         },
         {
          "type": "link",
          "text": "https://extp.in/vdB13g"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93771,
        "type": "message",
        "date": "2023-07-06T12:29:39",
        "date_unixtime": "1688626779",
        "edited": "2023-07-06T17:53:28",
        "edited_unixtime": "1688646208",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 865,
        "height": 663,
        "text": [
         "Mens Clogs From ₹199\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/QDaxdX"
         },
         "\n\n❌ Regular price @ ₹699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mens Clogs From ₹199\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/QDaxdX"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹699"
         }
        ]
       },
       {
        "id": 93772,
        "type": "message",
        "date": "2023-07-06T12:30:10",
        "date_unixtime": "1688626810",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 977,
        "height": 471,
        "text": [
         {
          "type": "hashtag",
          "text": "#Ajio"
         },
         " Pack Of 3 Mens T-Shirts From ₹399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/w4aCWq"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Ajio"
         },
         {
          "type": "plain",
          "text": " Pack Of 3 Mens T-Shirts From ₹399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/w4aCWq"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93773,
        "type": "message",
        "date": "2023-07-06T12:30:41",
        "date_unixtime": "1688626841",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "Crompton 5 Meter Strip Light Pink 300 LEDs (Pack of 12) ",
         {
          "type": "mention",
          "text": "@3090"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PGDAEz"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton 5 Meter Strip Light Pink 300 LEDs (Pack of 12) "
         },
         {
          "type": "mention",
          "text": "@3090"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PGDAEz"
         }
        ]
       },
       {
        "id": 93774,
        "type": "message",
        "date": "2023-07-06T12:31:05",
        "date_unixtime": "1688626865",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         "OnePlus Nord Buds 2r True Wireless in Ear Earbuds ",
         {
          "type": "mention",
          "text": "@2199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PF65T3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Nord Buds 2r True Wireless in Ear Earbuds "
         },
         {
          "type": "mention",
          "text": "@2199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PF65T3"
         }
        ]
       },
       {
        "id": 93775,
        "type": "message",
        "date": "2023-07-06T12:32:08",
        "date_unixtime": "1688626928",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 562,
        "text": [
         "PHILIPS 915006000000 Round Mirror Light ",
         {
          "type": "mention",
          "text": "@19310"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44bS57P"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "PHILIPS 915006000000 Round Mirror Light "
         },
         {
          "type": "mention",
          "text": "@19310"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bS57P"
         }
        ]
       },
       {
        "id": 93776,
        "type": "message",
        "date": "2023-07-06T12:32:45",
        "date_unixtime": "1688626965",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1051,
        "height": 341,
        "text": [
         "MAKE UP FOR LIFE Satin Luxe Liquid Lipstick @108\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44owIQi"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MAKE UP FOR LIFE Satin Luxe Liquid Lipstick @108\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44owIQi"
         }
        ]
       },
       {
        "id": 93777,
        "type": "message",
        "date": "2023-07-06T12:37:57",
        "date_unixtime": "1688627277",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "WeCool 4 Ports USB Hub @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/437ZraY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "WeCool 4 Ports USB Hub @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/437ZraY"
         }
        ]
       },
       {
        "id": 93778,
        "type": "message",
        "date": "2023-07-06T12:38:20",
        "date_unixtime": "1688627300",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "Ambrane 16W Portable Soundbar ",
         {
          "type": "mention",
          "text": "@1599"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ejuGb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ambrane 16W Portable Soundbar "
         },
         {
          "type": "mention",
          "text": "@1599"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ejuGb"
         }
        ]
       },
       {
        "id": 93779,
        "type": "message",
        "date": "2023-07-06T12:38:43",
        "date_unixtime": "1688627323",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "Real Masala Pomegranate Fruit Juice - 1L  @70\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r7WU3a"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Real Masala Pomegranate Fruit Juice - 1L  @70\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r7WU3a"
         }
        ]
       },
       {
        "id": 93780,
        "type": "message",
        "date": "2023-07-06T12:39:46",
        "date_unixtime": "1688627386",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 585,
        "text": [
         "GaxQuly Mosquito Killer Lamp Rechargeable Electric Fly Swatter @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CXyufD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GaxQuly Mosquito Killer Lamp Rechargeable Electric Fly Swatter @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CXyufD"
         }
        ]
       },
       {
        "id": 93781,
        "type": "message",
        "date": "2023-07-06T12:40:13",
        "date_unixtime": "1688627413",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Amazon Brand - Solimo Room Darkening Blackout Door @589\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O1v41H"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Room Darkening Blackout Door @589\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O1v41H"
         }
        ]
       },
       {
        "id": 93782,
        "type": "message",
        "date": "2023-07-06T12:40:36",
        "date_unixtime": "1688627436",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV ",
         {
          "type": "mention",
          "text": "@9999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2ymvg"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV "
         },
         {
          "type": "mention",
          "text": "@9999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2ymvg"
         }
        ]
       },
       {
        "id": 93783,
        "type": "message",
        "date": "2023-07-06T12:40:59",
        "date_unixtime": "1688627459",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "beatXP NeoChef Multipurpose Digital Weight Machine  @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PNALl1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP NeoChef Multipurpose Digital Weight Machine  @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PNALl1"
         }
        ]
       },
       {
        "id": 93784,
        "type": "message",
        "date": "2023-07-06T12:41:19",
        "date_unixtime": "1688627479",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "Chromozome Men's Regular Shorts @324\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NIEP3t"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Chromozome Men's Regular Shorts @324\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NIEP3t"
         }
        ]
       },
       {
        "id": 93785,
        "type": "message",
        "date": "2023-07-06T12:41:42",
        "date_unixtime": "1688627502",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 609,
        "text": [
         "Style Quotient Men Blue Washed Denim Jacket @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2eisX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Style Quotient Men Blue Washed Denim Jacket @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2eisX"
         }
        ]
       },
       {
        "id": 93786,
        "type": "message",
        "date": "2023-07-06T12:42:06",
        "date_unixtime": "1688627526",
        "edited": "2023-07-06T14:07:01",
        "edited_unixtime": "1688632621",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "OnePlus Nord CE 2 Lite 5G ",
         {
          "type": "mention",
          "text": "@17999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44etq2e"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Nord CE 2 Lite 5G "
         },
         {
          "type": "mention",
          "text": "@17999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44etq2e"
         }
        ]
       },
       {
        "id": 93787,
        "type": "message",
        "date": "2023-07-06T12:42:41",
        "date_unixtime": "1688627561",
        "edited": "2023-07-06T19:41:18",
        "edited_unixtime": "1688652678",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1200,
        "height": 551,
        "text": [
         "Red Tape Men's Sports Walking Shoes ",
         {
          "type": "mention",
          "text": "@1359"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D16RlL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Red Tape Men's Sports Walking Shoes "
         },
         {
          "type": "mention",
          "text": "@1359"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D16RlL"
         }
        ]
       },
       {
        "id": 93788,
        "type": "message",
        "date": "2023-07-06T12:43:03",
        "date_unixtime": "1688627583",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1261,
        "height": 655,
        "text": [
         {
          "type": "link",
          "text": "https://amzn.to/44zr6CG"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://amzn.to/44zr6CG"
         }
        ]
       },
       {
        "id": 93789,
        "type": "message",
        "date": "2023-07-06T12:43:25",
        "date_unixtime": "1688627605",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1199,
        "height": 422,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/zZvgaO"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/zZvgaO"
         }
        ]
       },
       {
        "id": 93790,
        "type": "message",
        "date": "2023-07-06T12:43:55",
        "date_unixtime": "1688627635",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 597,
        "text": [
         "Wahl Mini T-Pro Grooming Kit  @789\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NZKgfM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wahl Mini T-Pro Grooming Kit  @789\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NZKgfM"
         }
        ]
       },
       {
        "id": 93791,
        "type": "message",
        "date": "2023-07-06T12:48:04",
        "date_unixtime": "1688627884",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1213,
        "height": 565,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ymPRph"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ymPRph"
         }
        ]
       },
       {
        "id": 93792,
        "type": "message",
        "date": "2023-07-06T12:48:27",
        "date_unixtime": "1688627907",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 548,
        "text": [
         "HP USB Wireless Spill Resistance Keyboard and Mouse Set ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3reWQyT"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP USB Wireless Spill Resistance Keyboard and Mouse Set "
         },
         {
          "type": "mention",
          "text": "@1099"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3reWQyT"
         }
        ]
       },
       {
        "id": 93793,
        "type": "message",
        "date": "2023-07-06T12:48:51",
        "date_unixtime": "1688627931",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 638,
        "text": [
         "Lavie Sport Lino M Duffle Wheeler Bag @749\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGjign"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lavie Sport Lino M Duffle Wheeler Bag @749\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XGjign"
         }
        ]
       },
       {
        "id": 93794,
        "type": "message",
        "date": "2023-07-06T12:49:12",
        "date_unixtime": "1688627952",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1193,
        "height": 439,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/mCr5J6"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/mCr5J6"
         }
        ]
       },
       {
        "id": 93795,
        "type": "message",
        "date": "2023-07-06T12:49:36",
        "date_unixtime": "1688627976",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "ZEBRONICS Zeb-Bro in Ear Wired Earphones @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D4jQTP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Bro in Ear Wired Earphones @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D4jQTP"
         }
        ]
       },
       {
        "id": 93796,
        "type": "message",
        "date": "2023-07-06T12:49:58",
        "date_unixtime": "1688627998",
        "edited": "2023-07-06T12:51:08",
        "edited_unixtime": "1688628068",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         "boAt Airdopes Atom 81 True Wireless Earbuds @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JGUDST"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Airdopes Atom 81 True Wireless Earbuds @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JGUDST"
         }
        ]
       },
       {
        "id": 93797,
        "type": "message",
        "date": "2023-07-06T12:50:18",
        "date_unixtime": "1688628018",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1245,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/QkLc0m"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/QkLc0m"
         }
        ]
       },
       {
        "id": 93798,
        "type": "message",
        "date": "2023-07-06T12:50:41",
        "date_unixtime": "1688628041",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 449,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Z9h3_m"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Z9h3_m"
         }
        ]
       },
       {
        "id": 93799,
        "type": "message",
        "date": "2023-07-06T12:51:03",
        "date_unixtime": "1688628063",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Haier 190L 4 Star Direct Cool Single Door Refrigerator ",
         {
          "type": "mention",
          "text": "@14790"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44b5jRX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Haier 190L 4 Star Direct Cool Single Door Refrigerator "
         },
         {
          "type": "mention",
          "text": "@14790"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44b5jRX"
         }
        ]
       },
       {
        "id": 93800,
        "type": "message",
        "date": "2023-07-06T12:51:27",
        "date_unixtime": "1688628087",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1243,
        "height": 443,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/FZlfvz"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/FZlfvz"
         }
        ]
       },
       {
        "id": 93801,
        "type": "message",
        "date": "2023-07-06T12:51:49",
        "date_unixtime": "1688628109",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1236,
        "height": 454,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/utnpUR"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/utnpUR"
         }
        ]
       },
       {
        "id": 93802,
        "type": "message",
        "date": "2023-07-06T12:52:19",
        "date_unixtime": "1688628139",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 550,
        "text": [
         "Jaipan Sandwich Toaster 750watts ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XEMdRQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Jaipan Sandwich Toaster 750watts "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XEMdRQ"
         }
        ]
       },
       {
        "id": 93803,
        "type": "message",
        "date": "2023-07-06T12:52:37",
        "date_unixtime": "1688628157",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1181,
        "height": 442,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/RzTGgW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/RzTGgW"
         }
        ]
       },
       {
        "id": 93804,
        "type": "message",
        "date": "2023-07-06T12:53:11",
        "date_unixtime": "1688628191",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 625,
        "text": [
         "Havells Hd3276 Hair Dryer 2000 Watts ",
         {
          "type": "mention",
          "text": "@1670"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44dsj30"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells Hd3276 Hair Dryer 2000 Watts "
         },
         {
          "type": "mention",
          "text": "@1670"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44dsj30"
         }
        ]
       },
       {
        "id": 93805,
        "type": "message",
        "date": "2023-07-06T12:53:32",
        "date_unixtime": "1688628212",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1240,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ip2tEV"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ip2tEV"
         }
        ]
       },
       {
        "id": 93806,
        "type": "message",
        "date": "2023-07-06T12:53:56",
        "date_unixtime": "1688628236",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 603,
        "text": [
         "Nitho ATLAS STEREO GAMING HEADSET @549\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pD1VjY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nitho ATLAS STEREO GAMING HEADSET @549\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pD1VjY"
         }
        ]
       },
       {
        "id": 93807,
        "type": "message",
        "date": "2023-07-06T12:54:18",
        "date_unixtime": "1688628258",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 568,
        "text": [
         "Wipro 16A Wi-Fi Smart Plug @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NEueGO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wipro 16A Wi-Fi Smart Plug @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEueGO"
         }
        ]
       },
       {
        "id": 93808,
        "type": "message",
        "date": "2023-07-06T12:54:47",
        "date_unixtime": "1688628287",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 549,
        "text": [
         "LONGWAY Creta P1 1200 mm/48 inch Remote Controlled 3 Blade Anti-Dust Decorative Star Rated Ceiling Fan ",
         {
          "type": "mention",
          "text": "@1769"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NE887a"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LONGWAY Creta P1 1200 mm/48 inch Remote Controlled 3 Blade Anti-Dust Decorative Star Rated Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@1769"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NE887a"
         }
        ]
       },
       {
        "id": 93809,
        "type": "message",
        "date": "2023-07-06T12:55:19",
        "date_unixtime": "1688628319",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "AGARO Classic Portable Yogurt Maker @539\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46zx3S1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AGARO Classic Portable Yogurt Maker @539\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46zx3S1"
         }
        ]
       },
       {
        "id": 93810,
        "type": "message",
        "date": "2023-07-06T12:55:41",
        "date_unixtime": "1688628341",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 597,
        "text": [
         "Oshotto FK-L90 electromagnetic 12V Disc Horn Compatible with Mahindra Thar @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46FBPxh"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Oshotto FK-L90 electromagnetic 12V Disc Horn Compatible with Mahindra Thar @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46FBPxh"
         }
        ]
       },
       {
        "id": 93811,
        "type": "message",
        "date": "2023-07-06T12:56:20",
        "date_unixtime": "1688628380",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 632,
        "text": [
         "INVENTO 5 Color 25mtr (5 mtr Each Color) SMD 2835 White Blue Red Purple Amber 12V DC 36W LED Strip ",
         {
          "type": "mention",
          "text": "@5499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NZhHiv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "INVENTO 5 Color 25mtr (5 mtr Each Color) SMD 2835 White Blue Red Purple Amber 12V DC 36W LED Strip "
         },
         {
          "type": "mention",
          "text": "@5499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NZhHiv"
         }
        ]
       },
       {
        "id": 93812,
        "type": "message",
        "date": "2023-07-06T12:56:48",
        "date_unixtime": "1688628408",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Pen Multicolour Meter Sewing Thread 24 Pcs  @129\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKzKdl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pen Multicolour Meter Sewing Thread 24 Pcs  @129\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKzKdl"
         }
        ]
       },
       {
        "id": 93813,
        "type": "message",
        "date": "2023-07-06T12:57:13",
        "date_unixtime": "1688628433",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Faber FT 900W BK 900-Watt 2-Slice Pop-up Toaster ",
         {
          "type": "mention",
          "text": "@1735"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PIXKxy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Faber FT 900W BK 900-Watt 2-Slice Pop-up Toaster "
         },
         {
          "type": "mention",
          "text": "@1735"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PIXKxy"
         }
        ]
       },
       {
        "id": 93814,
        "type": "message",
        "date": "2023-07-06T12:57:33",
        "date_unixtime": "1688628453",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "Sanwara Men's Regular Kurta @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43lQ8o8"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sanwara Men's Regular Kurta @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43lQ8o8"
         }
        ]
       },
       {
        "id": 93815,
        "type": "message",
        "date": "2023-07-06T12:57:52",
        "date_unixtime": "1688628472",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 551,
        "text": [
         "Crompton PREMION AURA PRIME ANTIDUST 1200 mm (48 inch) Ceiling Fan ",
         {
          "type": "mention",
          "text": "@2640"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46wkFCt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton PREMION AURA PRIME ANTIDUST 1200 mm (48 inch) Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@2640"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46wkFCt"
         }
        ]
       },
       {
        "id": 93816,
        "type": "message",
        "date": "2023-07-06T12:58:12",
        "date_unixtime": "1688628492",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Noise Newly Launched Two Wireless On-Ear Headphones ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKpJgw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Noise Newly Launched Two Wireless On-Ear Headphones "
         },
         {
          "type": "mention",
          "text": "@1499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKpJgw"
         }
        ]
       },
       {
        "id": 93817,
        "type": "message",
        "date": "2023-07-06T12:58:35",
        "date_unixtime": "1688628515",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1231,
        "height": 382,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/X2XJQW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/X2XJQW"
         }
        ]
       },
       {
        "id": 93818,
        "type": "message",
        "date": "2023-07-06T12:58:52",
        "date_unixtime": "1688628532",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1189,
        "height": 473,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Cab82k"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Cab82k"
         }
        ]
       },
       {
        "id": 93819,
        "type": "message",
        "date": "2023-07-06T12:59:11",
        "date_unixtime": "1688628551",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1216,
        "height": 421,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/g7YJGa"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/g7YJGa"
         }
        ]
       },
       {
        "id": 93820,
        "type": "message",
        "date": "2023-07-06T12:59:32",
        "date_unixtime": "1688628572",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1269,
        "height": 441,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/kGPx3X"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/kGPx3X"
         }
        ]
       },
       {
        "id": 93821,
        "type": "message",
        "date": "2023-07-06T12:59:51",
        "date_unixtime": "1688628591",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1213,
        "height": 447,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/tqkH5f"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/tqkH5f"
         }
        ]
       },
       {
        "id": 93822,
        "type": "message",
        "date": "2023-07-06T13:00:12",
        "date_unixtime": "1688628612",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "Nuts About You Premium ALMONDS, 500 g  @409\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44vlARM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nuts About You Premium ALMONDS, 500 g  @409\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44vlARM"
         }
        ]
       },
       {
        "id": 93823,
        "type": "message",
        "date": "2023-07-06T13:00:44",
        "date_unixtime": "1688628644",
        "edited": "2023-07-06T17:01:54",
        "edited_unixtime": "1688643114",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 880,
        "height": 534,
        "text": [
         "Myntra: Men's Jeans Starting From Rs 390\n\n👉 Shop: ",
         {
          "type": "link",
          "text": "https://extp.in/Kn9VJT"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Men's Jeans Starting From Rs 390\n\n👉 Shop: "
         },
         {
          "type": "link",
          "text": "https://extp.in/Kn9VJT"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93824,
        "type": "message",
        "date": "2023-07-06T13:01:09",
        "date_unixtime": "1688628669",
        "edited": "2023-07-06T16:54:31",
        "edited_unixtime": "1688642671",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1065,
        "height": 330,
        "text": [
         "Duracell USB A to Micro Cables @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O05jh9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Duracell USB A to Micro Cables @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O05jh9"
         }
        ]
       },
       {
        "id": 93825,
        "type": "message",
        "date": "2023-07-06T13:01:29",
        "date_unixtime": "1688628689",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1197,
        "height": 432,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/37zHFu"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/37zHFu"
         }
        ]
       },
       {
        "id": 93826,
        "type": "message",
        "date": "2023-07-06T13:01:55",
        "date_unixtime": "1688628715",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1020,
        "height": 476,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/p3GoQc"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/p3GoQc"
         }
        ]
       },
       {
        "id": 93827,
        "type": "message",
        "date": "2023-07-06T13:02:14",
        "date_unixtime": "1688628734",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1186,
        "height": 420,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CB5bvt"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CB5bvt"
         }
        ]
       },
       {
        "id": 93828,
        "type": "message",
        "date": "2023-07-06T13:02:34",
        "date_unixtime": "1688628754",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1214,
        "height": 432,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2Lk2bX"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2Lk2bX"
         }
        ]
       },
       {
        "id": 93829,
        "type": "message",
        "date": "2023-07-06T13:03:29",
        "date_unixtime": "1688628809",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 960,
        "height": 1280,
        "text": [
         "Men’s Printed Casual Shirt (All Size) @349.\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/44zrTUa"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3O0VoZB"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men’s Printed Casual Shirt (All Size) @349.\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44zrTUa"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0VoZB"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93830,
        "type": "message",
        "date": "2023-07-06T13:03:29",
        "date_unixtime": "1688628809",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 960,
        "height": 1280,
        "text": "",
        "text_entities": []
       },
       {
        "id": 93831,
        "type": "message",
        "date": "2023-07-06T13:03:50",
        "date_unixtime": "1688628830",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch ",
         {
          "type": "mention",
          "text": "@29900"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44BLkfj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch "
         },
         {
          "type": "mention",
          "text": "@29900"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44BLkfj"
         }
        ]
       },
       {
        "id": 93832,
        "type": "message",
        "date": "2023-07-06T13:17:57",
        "date_unixtime": "1688629677",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1074,
        "height": 366,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " People Men Tshirts (Pack Of 2) From ₹206\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/462Jwn"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         {
          "type": "plain",
          "text": " People Men Tshirts (Pack Of 2) From ₹206\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/462Jwn"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93833,
        "type": "message",
        "date": "2023-07-06T13:18:18",
        "date_unixtime": "1688629698",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 445,
        "text": [
         "LIVON Hair Serum for Dry and Rough Hair with Hair Brush @ ₹399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/4oYKdy"
         },
         "\n\n❌ Regular price @ ₹699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LIVON Hair Serum for Dry and Rough Hair with Hair Brush @ ₹399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/4oYKdy"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹699"
         }
        ]
       },
       {
        "id": 93834,
        "type": "message",
        "date": "2023-07-06T13:18:39",
        "date_unixtime": "1688629719",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Redgear A-17 Gaming Mouse @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XCvhvq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redgear A-17 Gaming Mouse @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XCvhvq"
         }
        ]
       },
       {
        "id": 93835,
        "type": "message",
        "date": "2023-07-06T13:19:15",
        "date_unixtime": "1688629755",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1203,
        "height": 436,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/E4swcW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/E4swcW"
         }
        ]
       },
       {
        "id": 93836,
        "type": "message",
        "date": "2023-07-06T13:19:40",
        "date_unixtime": "1688629780",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 565,
        "text": [
         "Cello Venice Plastic Bottle Set @379\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46wlfA9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Venice Plastic Bottle Set @379\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46wlfA9"
         }
        ]
       },
       {
        "id": 93837,
        "type": "message",
        "date": "2023-07-06T13:20:02",
        "date_unixtime": "1688629802",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 407,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/f3d8op"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/f3d8op"
         }
        ]
       },
       {
        "id": 93838,
        "type": "message",
        "date": "2023-07-06T13:20:30",
        "date_unixtime": "1688629830",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 619,
        "text": [
         "GLUN Pre-Calibrated Pen Type Digital LCD TDS Meter @175\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pBrv8Z"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GLUN Pre-Calibrated Pen Type Digital LCD TDS Meter @175\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pBrv8Z"
         }
        ]
       },
       {
        "id": 93839,
        "type": "message",
        "date": "2023-07-06T13:20:53",
        "date_unixtime": "1688629853",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 568,
        "text": [
         "Wipro Garnet 10W B22 LED Bulb @840\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rfYct7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wipro Garnet 10W B22 LED Bulb @840\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rfYct7"
         }
        ]
       },
       {
        "id": 93840,
        "type": "message",
        "date": "2023-07-06T14:05:59",
        "date_unixtime": "1688632559",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1207,
        "height": 547,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/9uxPsH"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/9uxPsH"
         }
        ]
       },
       {
        "id": 93841,
        "type": "message",
        "date": "2023-07-06T14:06:22",
        "date_unixtime": "1688632582",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 585,
        "text": [
         "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM ",
         {
          "type": "mention",
          "text": "@16999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O3rWCy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM "
         },
         {
          "type": "mention",
          "text": "@16999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O3rWCy"
         }
        ]
       },
       {
        "id": 93842,
        "type": "message",
        "date": "2023-07-06T14:06:42",
        "date_unixtime": "1688632602",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1064,
        "height": 388,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/DFMAI1"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/DFMAI1"
         }
        ]
       },
       {
        "id": 93843,
        "type": "message",
        "date": "2023-07-06T14:07:26",
        "date_unixtime": "1688632646",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 618,
        "text": [
         "Jack & Jones Men's Cotton Blend Hooded Neck Sweatshirt ",
         {
          "type": "mention",
          "text": "@1575"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rgwWe2"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Jack & Jones Men's Cotton Blend Hooded Neck Sweatshirt "
         },
         {
          "type": "mention",
          "text": "@1575"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rgwWe2"
         }
        ]
       },
       {
        "id": 93844,
        "type": "message",
        "date": "2023-07-06T14:07:56",
        "date_unixtime": "1688632676",
        "edited": "2023-07-06T22:29:11",
        "edited_unixtime": "1688662751",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 618,
        "text": [
         "Campus Ignite @157\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ex6B4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Campus Ignite @157\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ex6B4"
         }
        ]
       },
       {
        "id": 93845,
        "type": "message",
        "date": "2023-07-06T14:08:15",
        "date_unixtime": "1688632695",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1206,
        "height": 408,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/utQd4P"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/utQd4P"
         }
        ]
       },
       {
        "id": 93846,
        "type": "message",
        "date": "2023-07-06T14:08:44",
        "date_unixtime": "1688632724",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 642,
        "text": [
         "BLACKPOOL® Bluetooth Adapter  @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rhz7xW"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BLACKPOOL® Bluetooth Adapter  @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rhz7xW"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93847,
        "type": "message",
        "date": "2023-07-06T14:09:18",
        "date_unixtime": "1688632758",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 629,
        "text": [
         "Solimo XXL Faux Leather Bean Bag Filled With Beans @ ₹1,399\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/46zdk50"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Solimo XXL Faux Leather Bean Bag Filled With Beans @ ₹1,399\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46zdk50"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93848,
        "type": "message",
        "date": "2023-07-06T14:09:39",
        "date_unixtime": "1688632779",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1182,
        "height": 431,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Xe10d0"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Xe10d0"
         }
        ]
       },
       {
        "id": 93849,
        "type": "message",
        "date": "2023-07-06T14:10:05",
        "date_unixtime": "1688632805",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "French Connection Analog Women's Watch ",
         {
          "type": "mention",
          "text": "@1460"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O2Klzm"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "French Connection Analog Women's Watch "
         },
         {
          "type": "mention",
          "text": "@1460"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O2Klzm"
         }
        ]
       },
       {
        "id": 93850,
        "type": "message",
        "date": "2023-07-06T14:13:17",
        "date_unixtime": "1688632997",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Combo Super Saver Offer Sheffield Classic Electric Kettle ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43d2s9R"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Combo Super Saver Offer Sheffield Classic Electric Kettle "
         },
         {
          "type": "mention",
          "text": "@1099"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43d2s9R"
         }
        ]
       },
       {
        "id": 93851,
        "type": "message",
        "date": "2023-07-06T14:13:47",
        "date_unixtime": "1688633027",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "Sure from Aquaguard Delight NXT 6L Storage UV+UF Water Purifier ",
         {
          "type": "mention",
          "text": "@7499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NEqrZZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sure from Aquaguard Delight NXT 6L Storage UV+UF Water Purifier "
         },
         {
          "type": "mention",
          "text": "@7499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEqrZZ"
         }
        ]
       },
       {
        "id": 93852,
        "type": "message",
        "date": "2023-07-06T14:14:16",
        "date_unixtime": "1688633056",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Hercules DJControl Inpulse 200 – DJ controller with USB  ",
         {
          "type": "mention",
          "text": "@8301"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XHmqIE"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hercules DJControl Inpulse 200 – DJ controller with USB  "
         },
         {
          "type": "mention",
          "text": "@8301"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XHmqIE"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93853,
        "type": "message",
        "date": "2023-07-06T14:14:38",
        "date_unixtime": "1688633078",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1237,
        "height": 432,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CnU1b7"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CnU1b7"
         }
        ]
       },
       {
        "id": 93854,
        "type": "message",
        "date": "2023-07-06T14:15:00",
        "date_unixtime": "1688633100",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "TFH Artificial 21 Kali Flower Bunches @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2w9jy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "TFH Artificial 21 Kali Flower Bunches @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2w9jy"
         }
        ]
       },
       {
        "id": 93855,
        "type": "message",
        "date": "2023-07-06T14:15:33",
        "date_unixtime": "1688633133",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 628,
        "text": [
         "GLV Charging Cable for BoAt Storm  @115\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CZpfvt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GLV Charging Cable for BoAt Storm  @115\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CZpfvt"
         }
        ]
       },
       {
        "id": 93856,
        "type": "message",
        "date": "2023-07-06T14:16:11",
        "date_unixtime": "1688633171",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "Bewakoof Men's Printed 100% Cotton T-Shirt - Regular Fit @333\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NXLEiR"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bewakoof Men's Printed 100% Cotton T-Shirt - Regular Fit @333\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NXLEiR"
         }
        ]
       },
       {
        "id": 93857,
        "type": "message",
        "date": "2023-07-06T14:16:34",
        "date_unixtime": "1688633194",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NHeJO5"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NHeJO5"
         }
        ]
       },
       {
        "id": 93858,
        "type": "message",
        "date": "2023-07-06T14:16:57",
        "date_unixtime": "1688633217",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "boAt Aavante Bar Mystiq Soundbar  ",
         {
          "type": "mention",
          "text": "@6299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Q2hOeL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Aavante Bar Mystiq Soundbar  "
         },
         {
          "type": "mention",
          "text": "@6299"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Q2hOeL"
         }
        ]
       },
       {
        "id": 93859,
        "type": "message",
        "date": "2023-07-06T14:17:16",
        "date_unixtime": "1688633236",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 428,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/3pEHef"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/3pEHef"
         }
        ]
       },
       {
        "id": 93860,
        "type": "message",
        "date": "2023-07-06T14:17:34",
        "date_unixtime": "1688633254",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1205,
        "height": 437,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/rWYgLQ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/rWYgLQ"
         }
        ]
       },
       {
        "id": 93861,
        "type": "message",
        "date": "2023-07-06T14:17:56",
        "date_unixtime": "1688633276",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         "USHA Maxx Air Ultra 400MM Table Fan ",
         {
          "type": "mention",
          "text": "@1899"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2pHsM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "USHA Maxx Air Ultra 400MM Table Fan "
         },
         {
          "type": "mention",
          "text": "@1899"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2pHsM"
         }
        ]
       },
       {
        "id": 93862,
        "type": "message",
        "date": "2023-07-06T14:18:17",
        "date_unixtime": "1688633297",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "Automatic Cut Off Timer Socket Plug @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XHmwA0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Automatic Cut Off Timer Socket Plug @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XHmwA0"
         }
        ]
       },
       {
        "id": 93863,
        "type": "message",
        "date": "2023-07-06T14:18:36",
        "date_unixtime": "1688633316",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1260,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/evaiWQ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/evaiWQ"
         }
        ]
       },
       {
        "id": 93864,
        "type": "message",
        "date": "2023-07-06T14:19:00",
        "date_unixtime": "1688633340",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "NIVIA Basic Duffle Polyester Bag @352\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rkSOVK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "NIVIA Basic Duffle Polyester Bag @352\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rkSOVK"
         }
        ]
       },
       {
        "id": 93865,
        "type": "message",
        "date": "2023-07-06T14:19:44",
        "date_unixtime": "1688633384",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 648,
        "text": [
         "Butterfly EKN 1.5-Litre Water Kettle ",
         {
          "type": "mention",
          "text": "@2698"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rfOsir"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Butterfly EKN 1.5-Litre Water Kettle "
         },
         {
          "type": "mention",
          "text": "@2698"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rfOsir"
         }
        ]
       },
       {
        "id": 93866,
        "type": "message",
        "date": "2023-07-06T14:20:08",
        "date_unixtime": "1688633408",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 631,
        "text": [
         "Pigeon Amaze Plus Electric Kettle 1.5 L @888\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PE6WU2"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Amaze Plus Electric Kettle 1.5 L @888\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PE6WU2"
         }
        ]
       },
       {
        "id": 93867,
        "type": "message",
        "date": "2023-07-06T14:20:28",
        "date_unixtime": "1688633428",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1187,
        "height": 430,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CeCYyI"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CeCYyI"
         }
        ]
       },
       {
        "id": 93868,
        "type": "message",
        "date": "2023-07-06T14:20:56",
        "date_unixtime": "1688633456",
        "edited": "2023-07-06T15:18:13",
        "edited_unixtime": "1688636893",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 578,
        "text": [
         "Pigeon 1.5 litre Hot Kettle and Stainless Steel Water Bottle Combo @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKsoqw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon 1.5 litre Hot Kettle and Stainless Steel Water Bottle Combo @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKsoqw"
         }
        ]
       },
       {
        "id": 93869,
        "type": "message",
        "date": "2023-07-06T14:21:21",
        "date_unixtime": "1688633481",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 439,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/bDv5s5"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/bDv5s5"
         }
        ]
       },
       {
        "id": 93870,
        "type": "message",
        "date": "2023-07-06T15:19:06",
        "date_unixtime": "1688636946",
        "edited": "2023-07-06T20:25:43",
        "edited_unixtime": "1688655343",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 520,
        "text": [
         "OPPO Best Phone Deals 🔥🔥\n\n1️⃣ Buy OPPO A17 (4 + 64GB) @ Rs 12499/- [MRP 14999]\n✅ Extra 10% instant discount on Federal Card\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/G1zI3t"
         },
         "\n\n2️⃣ Buy OPPO Reno8 T 5G (8 + 128GB) @ Rs 29999/- [MRP 38999]\n✅ Rs 1000 Off coupon + Extra 10% instant discount on Federal Card\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/JG44ZL"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OPPO Best Phone Deals 🔥🔥\n\n1️⃣ Buy OPPO A17 (4 + 64GB) @ Rs 12499/- [MRP 14999]\n✅ Extra 10% instant discount on Federal Card\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/G1zI3t"
         },
         {
          "type": "plain",
          "text": "\n\n2️⃣ Buy OPPO Reno8 T 5G (8 + 128GB) @ Rs 29999/- [MRP 38999]\n✅ Rs 1000 Off coupon + Extra 10% instant discount on Federal Card\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/JG44ZL"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93871,
        "type": "message",
        "date": "2023-07-06T15:20:05",
        "date_unixtime": "1688637005",
        "edited": "2023-07-06T15:20:27",
        "edited_unixtime": "1688637027",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 572,
        "text": [
         "💥AmazonBasics D Cell Everyday Alkaline Batteries (12-Pack) \n\n💰Deal @  ₹439🔥.     ❌Reg @ 600+\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3JJ0Q0E"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥AmazonBasics D Cell Everyday Alkaline Batteries (12-Pack) \n\n💰Deal @  ₹439🔥.     ❌Reg @ 600+\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JJ0Q0E"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93872,
        "type": "message",
        "date": "2023-07-06T15:20:27",
        "date_unixtime": "1688637027",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 636,
        "text": [
         "Crompton Gale Plus High Speed 400 mm Pedestal Fan  ",
         {
          "type": "mention",
          "text": "@3549"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGObB7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton Gale Plus High Speed 400 mm Pedestal Fan  "
         },
         {
          "type": "mention",
          "text": "@3549"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XGObB7"
         }
        ]
       },
       {
        "id": 93873,
        "type": "message",
        "date": "2023-07-06T15:20:46",
        "date_unixtime": "1688637046",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1169,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/SAiVSN"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/SAiVSN"
         }
        ]
       },
       {
        "id": 93874,
        "type": "message",
        "date": "2023-07-06T15:21:13",
        "date_unixtime": "1688637073",
        "edited": "2023-07-06T18:53:41",
        "edited_unixtime": "1688649821",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 573,
        "text": [
         "Portronics Ruffpad 8.5E Re-Writable LCD Writing Pad with Screen 21.5cm @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NFYXmT"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Ruffpad 8.5E Re-Writable LCD Writing Pad with Screen 21.5cm @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NFYXmT"
         }
        ]
       },
       {
        "id": 93875,
        "type": "message",
        "date": "2023-07-06T15:21:53",
        "date_unixtime": "1688637113",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 504,
        "text": [
         "SOLETHREADS RECLINER | Yoga Flip Flops @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D3xFBK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SOLETHREADS RECLINER | Yoga Flip Flops @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D3xFBK"
         }
        ]
       },
       {
        "id": 93876,
        "type": "message",
        "date": "2023-07-06T15:22:20",
        "date_unixtime": "1688637140",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 978,
        "height": 563,
        "text": [
         "Myntra: 80-90% Off on Women's Kurta & Kurta Sets\n\n➡️ Kurta From Rs 239: ",
         {
          "type": "link",
          "text": "https://extp.in/P5Yywu"
         },
         "\n\n➡️ Kurta Sets From Rs 359: ",
         {
          "type": "link",
          "text": "https://extp.in/6zwzTC"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: 80-90% Off on Women's Kurta & Kurta Sets\n\n➡️ Kurta From Rs 239: "
         },
         {
          "type": "link",
          "text": "https://extp.in/P5Yywu"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Kurta Sets From Rs 359: "
         },
         {
          "type": "link",
          "text": "https://extp.in/6zwzTC"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93877,
        "type": "message",
        "date": "2023-07-06T15:23:37",
        "date_unixtime": "1688637217",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "Fogg Scent Intensio 100ml Each (Pack of 2) @650\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O1ryEr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fogg Scent Intensio 100ml Each (Pack of 2) @650\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O1ryEr"
         }
        ]
       },
       {
        "id": 93878,
        "type": "message",
        "date": "2023-07-06T15:23:57",
        "date_unixtime": "1688637237",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1194,
        "height": 447,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/AgsCZk"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/AgsCZk"
         }
        ]
       },
       {
        "id": 93879,
        "type": "message",
        "date": "2023-07-06T15:24:28",
        "date_unixtime": "1688637268",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "boAt Immortal 121 TWS Wireless Gaming in Ear Earbuds  ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rmtwWX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Immortal 121 TWS Wireless Gaming in Ear Earbuds  "
         },
         {
          "type": "mention",
          "text": "@1499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rmtwWX"
         }
        ]
       },
       {
        "id": 93880,
        "type": "message",
        "date": "2023-07-06T15:25:15",
        "date_unixtime": "1688637315",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "DIZO Watch D2 Power  ",
         {
          "type": "mention",
          "text": "@1799"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JPX8m3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "DIZO Watch D2 Power  "
         },
         {
          "type": "mention",
          "text": "@1799"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JPX8m3"
         }
        ]
       },
       {
        "id": 93881,
        "type": "message",
        "date": "2023-07-06T15:25:38",
        "date_unixtime": "1688637338",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 550,
        "text": [
         "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds ",
         {
          "type": "mention",
          "text": "@4790"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0Z8KF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds "
         },
         {
          "type": "mention",
          "text": "@4790"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0Z8KF"
         }
        ]
       },
       {
        "id": 93882,
        "type": "message",
        "date": "2023-07-06T15:26:03",
        "date_unixtime": "1688637363",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1021,
        "height": 481,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/l4S2sJ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/l4S2sJ"
         }
        ]
       },
       {
        "id": 93883,
        "type": "message",
        "date": "2023-07-06T15:26:27",
        "date_unixtime": "1688637387",
        "edited": "2023-07-06T18:45:12",
        "edited_unixtime": "1688649312",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "boAt Airdopes 121 PRO True Wireless Earbuds ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PEb1HQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Airdopes 121 PRO True Wireless Earbuds "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PEb1HQ"
         }
        ]
       },
       {
        "id": 93884,
        "type": "message",
        "date": "2023-07-06T15:26:49",
        "date_unixtime": "1688637409",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "Escort Analog Silver Dial Men's Watch @811\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pvaugP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Escort Analog Silver Dial Men's Watch @811\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pvaugP"
         }
        ]
       },
       {
        "id": 93885,
        "type": "message",
        "date": "2023-07-06T15:27:15",
        "date_unixtime": "1688637435",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "Trunkit Adventure Series Water Resistance Trekking Hiking Travel Bag @657\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46E22wo"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Trunkit Adventure Series Water Resistance Trekking Hiking Travel Bag @657\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46E22wo"
         }
        ]
       },
       {
        "id": 93886,
        "type": "message",
        "date": "2023-07-06T15:27:41",
        "date_unixtime": "1688637461",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 614,
        "text": [
         "GLUN® 6 in 1 Colour Furry Pen for Kids @89\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NIAw8k"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GLUN® 6 in 1 Colour Furry Pen for Kids @89\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NIAw8k"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93887,
        "type": "message",
        "date": "2023-07-06T15:28:04",
        "date_unixtime": "1688637484",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 570,
        "text": [
         "Havells Leganza 4B 1200mm 1 Star Energy Saving Ceiling Fan ",
         {
          "type": "mention",
          "text": "@3499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44yggNn"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells Leganza 4B 1200mm 1 Star Energy Saving Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@3499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44yggNn"
         }
        ]
       },
       {
        "id": 93888,
        "type": "message",
        "date": "2023-07-06T15:28:27",
        "date_unixtime": "1688637507",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 554,
        "text": [
         "Polycab Hohm Zuerst 25 Litres Smart Storage Water Heater ",
         {
          "type": "mention",
          "text": "@7504"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43fEVW7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Polycab Hohm Zuerst 25 Litres Smart Storage Water Heater "
         },
         {
          "type": "mention",
          "text": "@7504"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43fEVW7"
         }
        ]
       },
       {
        "id": 93889,
        "type": "message",
        "date": "2023-07-06T15:29:10",
        "date_unixtime": "1688637550",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 552,
        "text": [
         "Texet LMA4-EX,A4 Lamination Machine ",
         {
          "type": "mention",
          "text": "@1399"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44zCXk7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Texet LMA4-EX,A4 Lamination Machine "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44zCXk7"
         }
        ]
       },
       {
        "id": 93890,
        "type": "message",
        "date": "2023-07-06T15:29:36",
        "date_unixtime": "1688637576",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 534,
        "text": [
         "Portronics Toad 23 Wireless Optical Mouse @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r6ItML"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Toad 23 Wireless Optical Mouse @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r6ItML"
         }
        ]
       },
       {
        "id": 93891,
        "type": "message",
        "date": "2023-07-06T15:30:08",
        "date_unixtime": "1688637608",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 619,
        "text": [
         "Derwent USB Rechargeable Eraser  ",
         {
          "type": "mention",
          "text": "@1399"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44zDaUr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Derwent USB Rechargeable Eraser  "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44zDaUr"
         }
        ]
       },
       {
        "id": 93892,
        "type": "message",
        "date": "2023-07-06T15:30:38",
        "date_unixtime": "1688637638",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "beatXP Buzz Electric Toothbrush for Adults @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44xVJbS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Buzz Electric Toothbrush for Adults @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44xVJbS"
         }
        ]
       },
       {
        "id": 93893,
        "type": "message",
        "date": "2023-07-06T15:32:24",
        "date_unixtime": "1688637744",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1070,
        "height": 388,
        "text": [
         "🔊💥  Deal Price   ₹989✅\n\n📢 Regular Price   ₹ 1,099❌\n\n🔗 ",
         {
          "type": "link",
          "text": "https://extp.in/8wzrc9"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "🔊💥  Deal Price   ₹989✅\n\n📢 Regular Price   ₹ 1,099❌\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://extp.in/8wzrc9"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93894,
        "type": "message",
        "date": "2023-07-06T15:32:48",
        "date_unixtime": "1688637768",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 603,
        "text": [
         "Beurer HR 8000 rotary shaver Precision cutting system  @849\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKyovs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beurer HR 8000 rotary shaver Precision cutting system  @849\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKyovs"
         }
        ]
       },
       {
        "id": 93895,
        "type": "message",
        "date": "2023-07-06T15:33:13",
        "date_unixtime": "1688637793",
        "edited": "2023-07-06T18:31:38",
        "edited_unixtime": "1688648498",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 609,
        "text": [
         "Jivo Premium Cold Pressed Kachi Ghani Pure Mustard Oil @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKYLBn"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Jivo Premium Cold Pressed Kachi Ghani Pure Mustard Oil @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKYLBn"
         }
        ]
       },
       {
        "id": 93896,
        "type": "message",
        "date": "2023-07-06T15:33:48",
        "date_unixtime": "1688637828",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "EDYELL C9 Wireless Earbud  ",
         {
          "type": "mention",
          "text": "@2299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O3sUOQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "EDYELL C9 Wireless Earbud  "
         },
         {
          "type": "mention",
          "text": "@2299"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O3sUOQ"
         }
        ]
       },
       {
        "id": 93897,
        "type": "message",
        "date": "2023-07-06T15:40:10",
        "date_unixtime": "1688638210",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 609,
        "text": [
         "London Hills Solid Men Half Sleeve Round Neck Olive Green and Black T-Shirt @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2lYeL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "London Hills Solid Men Half Sleeve Round Neck Olive Green and Black T-Shirt @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2lYeL"
         }
        ]
       },
       {
        "id": 93898,
        "type": "message",
        "date": "2023-07-06T15:40:48",
        "date_unixtime": "1688638248",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 579,
        "text": [
         "Zebronics ZEB-JUKE BAR 9700 PRO DOLBY ATMOS Bluetooth Home Theater Soundbar ",
         {
          "type": "mention",
          "text": "@11499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D2u9Yw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics ZEB-JUKE BAR 9700 PRO DOLBY ATMOS Bluetooth Home Theater Soundbar "
         },
         {
          "type": "mention",
          "text": "@11499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D2u9Yw"
         }
        ]
       },
       {
        "id": 93899,
        "type": "message",
        "date": "2023-07-06T15:41:48",
        "date_unixtime": "1688638308",
        "edited": "2023-07-07T08:13:00",
        "edited_unixtime": "1688697780",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1262,
        "height": 450,
        "text": [
         "💥Intel BOXNUC7CJYSAMN - Windows 11, Intel, Celeron 4505, 4 GB DDR4, 64 GB eMMC Mini PC \n\nDeal @ 5990🔥.    ❌Reg @ 9999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/NLc0A8"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Intel BOXNUC7CJYSAMN - Windows 11, Intel, Celeron 4505, 4 GB DDR4, 64 GB eMMC Mini PC \n\nDeal @ 5990🔥.    ❌Reg @ 9999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/NLc0A8"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93900,
        "type": "message",
        "date": "2023-07-06T16:53:13",
        "date_unixtime": "1688642593",
        "edited": "2023-07-06T16:53:30",
        "edited_unixtime": "1688642610",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 566,
        "text": [
         "Mivi Duopods F30 with 42 hours battery @ ₹699\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/lpbhB9"
         },
         "\n\n❌ Regular price @ ₹999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mivi Duopods F30 with 42 hours battery @ ₹699\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/lpbhB9"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹999"
         }
        ]
       },
       {
        "id": 93901,
        "type": "message",
        "date": "2023-07-06T17:02:16",
        "date_unixtime": "1688643136",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 484,
        "text": [
         "Sumeet Stainless Steel Double Wall Flask 1000ml @ ₹479\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/1yO3Ty"
         },
         "\n\n❌ Regular price @ ₹799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sumeet Stainless Steel Double Wall Flask 1000ml @ ₹479\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/1yO3Ty"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799"
         }
        ]
       },
       {
        "id": 93902,
        "type": "message",
        "date": "2023-07-06T17:02:35",
        "date_unixtime": "1688643155",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 438,
        "text": [
         "Bajaj 20W Cool Day Light LED Tubelight, Pack of 2 @ ₹379\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3PNBt1E"
         },
         "\n\n❌ Regular price @ ₹550"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bajaj 20W Cool Day Light LED Tubelight, Pack of 2 @ ₹379\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PNBt1E"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹550"
         }
        ]
       },
       {
        "id": 93903,
        "type": "message",
        "date": "2023-07-06T17:02:46",
        "date_unixtime": "1688643166",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 770,
        "height": 531,
        "text": [
         {
          "type": "hashtag",
          "text": "#Ajio"
         },
         "  Children's Clothing Starts From ₹60\n\n▶️ Boys\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ZzAThW"
         },
         "\n\n▶️ Girls\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/NVJHAD"
         },
         "\n\n▶️ Infants\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/HRsTEN"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Ajio"
         },
         {
          "type": "plain",
          "text": "  Children's Clothing Starts From ₹60\n\n▶️ Boys\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ZzAThW"
         },
         {
          "type": "plain",
          "text": "\n\n▶️ Girls\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/NVJHAD"
         },
         {
          "type": "plain",
          "text": "\n\n▶️ Infants\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/HRsTEN"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93904,
        "type": "message",
        "date": "2023-07-06T17:03:02",
        "date_unixtime": "1688643182",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 785,
        "height": 335,
        "text": [
         "LEE FLASH SALE 💥💥💥\n\n➡️ Flat 50% Off on Shirts, T-Shirts, Jeans & Sweatshirts\n\nShirts: ",
         {
          "type": "link",
          "text": "https://extp.in/yt4Z4t"
         },
         "\nJeans: ",
         {
          "type": "link",
          "text": "https://extp.in/ndcVNF"
         },
         "\nSweatshirts: ",
         {
          "type": "link",
          "text": "https://extp.in/LlDEuZ"
         },
         "\n\nUse code 👇👇\n❇️ Buy 2 Get 10% Off LEEB2G10\n❇️ Buy 3 Get 15% Off LEEB2G15\n\n📌 Free Shipping & 30 Days Return"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LEE FLASH SALE 💥💥💥\n\n➡️ Flat 50% Off on Shirts, T-Shirts, Jeans & Sweatshirts\n\nShirts: "
         },
         {
          "type": "link",
          "text": "https://extp.in/yt4Z4t"
         },
         {
          "type": "plain",
          "text": "\nJeans: "
         },
         {
          "type": "link",
          "text": "https://extp.in/ndcVNF"
         },
         {
          "type": "plain",
          "text": "\nSweatshirts: "
         },
         {
          "type": "link",
          "text": "https://extp.in/LlDEuZ"
         },
         {
          "type": "plain",
          "text": "\n\nUse code 👇👇\n❇️ Buy 2 Get 10% Off LEEB2G10\n❇️ Buy 3 Get 15% Off LEEB2G15\n\n📌 Free Shipping & 30 Days Return"
         }
        ]
       },
       {
        "id": 93905,
        "type": "message",
        "date": "2023-07-06T17:03:14",
        "date_unixtime": "1688643194",
        "edited": "2023-07-06T17:25:36",
        "edited_unixtime": "1688644536",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "OPPO Best Phone Deals 🔥🔥\n\n1️⃣ Buy OPPO A17 (4 + 64GB) @ Rs 12499/- [MRP 14999]\n✅ Extra 10% instant discount on Federal Card\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/ysuKOy"
         },
         "\n\n2️⃣ Buy OPPO Reno8 T 5G (8 + 128GB) @ Rs 29999/- [MRP 38999]\n✅ Rs 1000 Off coupon + Extra 10% instant discount on Federal Card\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/5d0X6T"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OPPO Best Phone Deals 🔥🔥\n\n1️⃣ Buy OPPO A17 (4 + 64GB) @ Rs 12499/- [MRP 14999]\n✅ Extra 10% instant discount on Federal Card\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/ysuKOy"
         },
         {
          "type": "plain",
          "text": "\n\n2️⃣ Buy OPPO Reno8 T 5G (8 + 128GB) @ Rs 29999/- [MRP 38999]\n✅ Rs 1000 Off coupon + Extra 10% instant discount on Federal Card\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/5d0X6T"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93906,
        "type": "message",
        "date": "2023-07-06T17:03:26",
        "date_unixtime": "1688643206",
        "edited": "2023-07-06T17:18:54",
        "edited_unixtime": "1688644134",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 978,
        "height": 563,
        "text": [
         "Myntra: 80-90% Off on Women's Kurta & Kurta Sets\n\n➡️ Kurta From Rs 239: ",
         {
          "type": "link",
          "text": "https://extp.in/fogvrq"
         },
         "\n\n➡️ Kurta Sets From Rs 359: ",
         {
          "type": "link",
          "text": "https://extp.in/MrxMAE"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: 80-90% Off on Women's Kurta & Kurta Sets\n\n➡️ Kurta From Rs 239: "
         },
         {
          "type": "link",
          "text": "https://extp.in/fogvrq"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Kurta Sets From Rs 359: "
         },
         {
          "type": "link",
          "text": "https://extp.in/MrxMAE"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93907,
        "type": "message",
        "date": "2023-07-06T17:29:36",
        "date_unixtime": "1688644776",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 443,
        "text": [
         "Manna Oats - 2kg (1kg x 2 Jars) @ ₹164\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/QnrUWZ"
         },
         "\n\n❌ Regular price @ ₹299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Manna Oats - 2kg (1kg x 2 Jars) @ ₹164\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/QnrUWZ"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹299"
         }
        ]
       },
       {
        "id": 93908,
        "type": "message",
        "date": "2023-07-06T17:30:09",
        "date_unixtime": "1688644809",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Nuts About You RAISIN, 200 g @79\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JMczff"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nuts About You RAISIN, 200 g @79\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JMczff"
         }
        ]
       },
       {
        "id": 93909,
        "type": "message",
        "date": "2023-07-06T17:32:30",
        "date_unixtime": "1688644950",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1084,
        "height": 372,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/OBmnJa"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/OBmnJa"
         }
        ]
       },
       {
        "id": 93910,
        "type": "message",
        "date": "2023-07-06T17:33:23",
        "date_unixtime": "1688645003",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1200,
        "height": 433,
        "text": [
         "💥POCO C55 (Cool Blue, 64 GB)  (4 GB RAM)\n\n💰Deal @ 7499🔥.    ❌Reg @ 8499\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/XxM0c3"
         },
         "\n \n💥BEST : MOTOROLA e13 (Aurora Green, 64 GB)  (4 GB RAM)\n\n💰Deal @ 7299🔥.    ❌Reg @ 8k+\n\n✅200 off with all bank cards \n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/qpj5rj"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥POCO C55 (Cool Blue, 64 GB)  (4 GB RAM)\n\n💰Deal @ 7499🔥.    ❌Reg @ 8499\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/XxM0c3"
         },
         {
          "type": "plain",
          "text": "\n \n💥BEST : MOTOROLA e13 (Aurora Green, 64 GB)  (4 GB RAM)\n\n💰Deal @ 7299🔥.    ❌Reg @ 8k+\n\n✅200 off with all bank cards \n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/qpj5rj"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93911,
        "type": "message",
        "date": "2023-07-06T17:33:44",
        "date_unixtime": "1688645024",
        "edited": "2023-07-06T17:34:39",
        "edited_unixtime": "1688645079",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Steelbird SBH-21 Wiz Reflective ISI Certified Full Face Helmet @29\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D1jVYl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Steelbird SBH-21 Wiz Reflective ISI Certified Full Face Helmet @29\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D1jVYl"
         }
        ]
       },
       {
        "id": 93912,
        "type": "message",
        "date": "2023-07-06T17:34:10",
        "date_unixtime": "1688645050",
        "edited": "2023-07-06T18:18:17",
        "edited_unixtime": "1688647697",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 604,
        "text": [
         "Amazon Basics 4 Port USB 2.0 Hub @279\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pAbPCS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics 4 Port USB 2.0 Hub @279\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pAbPCS"
         }
        ]
       },
       {
        "id": 93913,
        "type": "message",
        "date": "2023-07-06T17:35:06",
        "date_unixtime": "1688645106",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 625,
        "text": [
         "Alan Jones Clothing Men's Taped Cotton Hooded Sweatshirt @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzLqVK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Alan Jones Clothing Men's Taped Cotton Hooded Sweatshirt @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzLqVK"
         }
        ]
       },
       {
        "id": 93914,
        "type": "message",
        "date": "2023-07-06T17:35:31",
        "date_unixtime": "1688645131",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "Amazon Brand - Solimo 15-in-1 Stainless Steel Multipurpose Vegetable and Fruit Chopper @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PH2KTl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo 15-in-1 Stainless Steel Multipurpose Vegetable and Fruit Chopper @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PH2KTl"
         }
        ]
       },
       {
        "id": 93915,
        "type": "message",
        "date": "2023-07-06T17:35:52",
        "date_unixtime": "1688645152",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 627,
        "text": [
         "Amazon Brand - Solimo Nylon Backpack @339\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NIQUFX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Nylon Backpack @339\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NIQUFX"
         }
        ]
       },
       {
        "id": 93916,
        "type": "message",
        "date": "2023-07-06T17:36:15",
        "date_unixtime": "1688645175",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 579,
        "text": [
         "Dyazo 2 Port Car Charger  @65\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NDENcZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dyazo 2 Port Car Charger  @65\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NDENcZ"
         }
        ]
       },
       {
        "id": 93917,
        "type": "message",
        "date": "2023-07-06T17:36:40",
        "date_unixtime": "1688645200",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 616,
        "text": [
         "Farmley 8-In-1 Premium Dried Berries Mixed @449\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pECkqT"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Farmley 8-In-1 Premium Dried Berries Mixed @449\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pECkqT"
         }
        ]
       },
       {
        "id": 93918,
        "type": "message",
        "date": "2023-07-06T17:37:01",
        "date_unixtime": "1688645221",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 564,
        "text": [
         "Go Vegan Raw Cashew W320 Grade 1Kg @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGAjXB"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Go Vegan Raw Cashew W320 Grade 1Kg @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XGAjXB"
         }
        ]
       },
       {
        "id": 93919,
        "type": "message",
        "date": "2023-07-06T17:37:28",
        "date_unixtime": "1688645248",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "Nuts About You WALNUT Inshell, 1 kg @575\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XHs0er"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nuts About You WALNUT Inshell, 1 kg @575\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XHs0er"
         }
        ]
       },
       {
        "id": 93920,
        "type": "message",
        "date": "2023-07-06T17:37:57",
        "date_unixtime": "1688645277",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 598,
        "text": [
         "Cadbury Chocobakes ChocFilled Cookies, 300 g @119\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rgaBgF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cadbury Chocobakes ChocFilled Cookies, 300 g @119\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rgaBgF"
         }
        ]
       },
       {
        "id": 93921,
        "type": "message",
        "date": "2023-07-06T17:48:05",
        "date_unixtime": "1688645885",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 568,
        "text": [
         "Oshotto Yty Universal Door Guard @237\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44extMb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Oshotto Yty Universal Door Guard @237\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44extMb"
         }
        ]
       },
       {
        "id": 93922,
        "type": "message",
        "date": "2023-07-06T17:48:28",
        "date_unixtime": "1688645908",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 602,
        "text": [
         "SIMPEX SLB 150, 150W 5600±300K LED Video Light ",
         {
          "type": "mention",
          "text": "@7199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43jVfVv"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SIMPEX SLB 150, 150W 5600±300K LED Video Light "
         },
         {
          "type": "mention",
          "text": "@7199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43jVfVv"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93923,
        "type": "message",
        "date": "2023-07-06T17:48:44",
        "date_unixtime": "1688645924",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Amazon Basics Fast Charging Braided Type C @94\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/438ydkA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics Fast Charging Braided Type C @94\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/438ydkA"
         }
        ]
       },
       {
        "id": 93924,
        "type": "message",
        "date": "2023-07-06T17:49:05",
        "date_unixtime": "1688645945",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "ZINQ Mini UPS for 12V Routers, High Power Fiber Routers ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JL2PSr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZINQ Mini UPS for 12V Routers, High Power Fiber Routers "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JL2PSr"
         }
        ]
       },
       {
        "id": 93925,
        "type": "message",
        "date": "2023-07-06T17:51:20",
        "date_unixtime": "1688646080",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1192,
        "height": 651,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/zBrxrT"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/zBrxrT"
         }
        ]
       },
       {
        "id": 93926,
        "type": "message",
        "date": "2023-07-06T17:51:53",
        "date_unixtime": "1688646113",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 608,
        "text": [
         "Beurer 37 Watts Professional Curling Tongs @784\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43aC2pj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beurer 37 Watts Professional Curling Tongs @784\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43aC2pj"
         }
        ]
       },
       {
        "id": 93927,
        "type": "message",
        "date": "2023-07-06T17:52:35",
        "date_unixtime": "1688646155",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1054,
        "height": 397,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/7DX2vP"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/7DX2vP"
         }
        ]
       },
       {
        "id": 93928,
        "type": "message",
        "date": "2023-07-06T17:53:02",
        "date_unixtime": "1688646182",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 582,
        "text": [
         "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband  @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44y2r1y"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband  @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44y2r1y"
         }
        ]
       },
       {
        "id": 93929,
        "type": "message",
        "date": "2023-07-06T17:53:28",
        "date_unixtime": "1688646208",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "LG 7 Kg 5 Star Inverter Touch Control Fully-Automatic Front Load Washing Machine  ",
         {
          "type": "mention",
          "text": "@30990"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rlwpqZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 7 Kg 5 Star Inverter Touch Control Fully-Automatic Front Load Washing Machine  "
         },
         {
          "type": "mention",
          "text": "@30990"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rlwpqZ"
         }
        ]
       },
       {
        "id": 93930,
        "type": "message",
        "date": "2023-07-06T17:54:00",
        "date_unixtime": "1688646240",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 598,
        "text": [
         "beatXP Vortex Active Air Bike Exercise Cycle ",
         {
          "type": "mention",
          "text": "@6999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JNG1kK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Vortex Active Air Bike Exercise Cycle "
         },
         {
          "type": "mention",
          "text": "@6999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JNG1kK"
         }
        ]
       },
       {
        "id": 93931,
        "type": "message",
        "date": "2023-07-06T17:54:21",
        "date_unixtime": "1688646261",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1238,
        "height": 430,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CMv3Zn"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CMv3Zn"
         }
        ]
       },
       {
        "id": 93932,
        "type": "message",
        "date": "2023-07-06T17:54:54",
        "date_unixtime": "1688646294",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "Amazon Brand - Solimo Cell Phone Stand @119\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46EEdnW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Cell Phone Stand @119\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46EEdnW"
         }
        ]
       },
       {
        "id": 93933,
        "type": "message",
        "date": "2023-07-06T17:55:22",
        "date_unixtime": "1688646322",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1082,
        "height": 376,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/EWA3Ii"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/EWA3Ii"
         }
        ]
       },
       {
        "id": 93934,
        "type": "message",
        "date": "2023-07-06T17:55:52",
        "date_unixtime": "1688646352",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Livpure Bolt+ copper, 80% Water Savings ",
         {
          "type": "mention",
          "text": "@12900"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NHsnAL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Livpure Bolt+ copper, 80% Water Savings "
         },
         {
          "type": "mention",
          "text": "@12900"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NHsnAL"
         }
        ]
       },
       {
        "id": 93935,
        "type": "message",
        "date": "2023-07-06T17:56:15",
        "date_unixtime": "1688646375",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1156,
        "height": 377,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/C0vtkB"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/C0vtkB"
         }
        ]
       },
       {
        "id": 93936,
        "type": "message",
        "date": "2023-07-06T17:56:41",
        "date_unixtime": "1688646401",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "Beurer HR 4000 Cordless Beard Trimmer @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XJaAhh"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beurer HR 4000 Cordless Beard Trimmer @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XJaAhh"
         }
        ]
       },
       {
        "id": 93937,
        "type": "message",
        "date": "2023-07-06T17:57:03",
        "date_unixtime": "1688646423",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "Wrangler Men T-Shirt @341\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PPYK3f"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wrangler Men T-Shirt @341\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PPYK3f"
         }
        ]
       },
       {
        "id": 93938,
        "type": "message",
        "date": "2023-07-06T17:57:25",
        "date_unixtime": "1688646445",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Fire-Boltt Mystic 1.3\" AMOLED Display Smartwatch ",
         {
          "type": "mention",
          "text": "@2551"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PIMQIc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Mystic 1.3\" AMOLED Display Smartwatch "
         },
         {
          "type": "mention",
          "text": "@2551"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PIMQIc"
         }
        ]
       },
       {
        "id": 93939,
        "type": "message",
        "date": "2023-07-06T17:57:47",
        "date_unixtime": "1688646467",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1264,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/tnwb8r"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/tnwb8r"
         }
        ]
       },
       {
        "id": 93940,
        "type": "message",
        "date": "2023-07-06T17:58:12",
        "date_unixtime": "1688646492",
        "edited": "2023-07-07T08:16:47",
        "edited_unixtime": "1688698007",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "GREENCHEF Elon Glass cook top 2 Burner Gas stove ",
         {
          "type": "mention",
          "text": "@1228"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NEaUt1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GREENCHEF Elon Glass cook top 2 Burner Gas stove "
         },
         {
          "type": "mention",
          "text": "@1228"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEaUt1"
         }
        ]
       },
       {
        "id": 93941,
        "type": "message",
        "date": "2023-07-06T17:59:30",
        "date_unixtime": "1688646570",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "Amazon Brand - Inkast Denim Co. Men's Regular Fit T-Shirt @220\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3OcauMh"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Inkast Denim Co. Men's Regular Fit T-Shirt @220\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OcauMh"
         }
        ]
       },
       {
        "id": 93942,
        "type": "message",
        "date": "2023-07-06T18:00:05",
        "date_unixtime": "1688646605",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Lifelong LLSSCAS2000 2 Litre Stainless Steel Insulated Casserole  @543\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43dzOph"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong LLSSCAS2000 2 Litre Stainless Steel Insulated Casserole  @543\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43dzOph"
         }
        ]
       },
       {
        "id": 93943,
        "type": "message",
        "date": "2023-07-06T18:00:36",
        "date_unixtime": "1688646636",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 614,
        "text": [
         "KENT Gem Induction Cooktop 1500W ",
         {
          "type": "mention",
          "text": "@1999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44b9EEN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "KENT Gem Induction Cooktop 1500W "
         },
         {
          "type": "mention",
          "text": "@1999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44b9EEN"
         }
        ]
       },
       {
        "id": 93944,
        "type": "message",
        "date": "2023-07-06T18:01:07",
        "date_unixtime": "1688646667",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Osaka Pro Series-11 Waterproof DSLR Backpack  @880\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XCELa3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Osaka Pro Series-11 Waterproof DSLR Backpack  @880\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XCELa3"
         }
        ]
       },
       {
        "id": 93945,
        "type": "message",
        "date": "2023-07-06T18:01:30",
        "date_unixtime": "1688646690",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1253,
        "height": 446,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/R9B6un"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/R9B6un"
         }
        ]
       },
       {
        "id": 93946,
        "type": "message",
        "date": "2023-07-06T18:01:54",
        "date_unixtime": "1688646714",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1166,
        "height": 334,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/o65il1"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/o65il1"
         }
        ]
       },
       {
        "id": 93947,
        "type": "message",
        "date": "2023-07-06T18:02:20",
        "date_unixtime": "1688646740",
        "edited": "2023-07-06T18:11:48",
        "edited_unixtime": "1688647308",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 578,
        "text": [
         "boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones ",
         {
          "type": "mention",
          "text": "@4499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JLha1a"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones "
         },
         {
          "type": "mention",
          "text": "@4499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JLha1a"
         }
        ]
       },
       {
        "id": 93948,
        "type": "message",
        "date": "2023-07-06T18:02:49",
        "date_unixtime": "1688646769",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1266,
        "height": 459,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/YupoR7"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/YupoR7"
         }
        ]
       },
       {
        "id": 93949,
        "type": "message",
        "date": "2023-07-06T18:03:15",
        "date_unixtime": "1688646795",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "MILTON Super 1000 Stainless Steel Water Bottle @374\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D1mJER"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MILTON Super 1000 Stainless Steel Water Bottle @374\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D1mJER"
         }
        ]
       },
       {
        "id": 93950,
        "type": "message",
        "date": "2023-07-06T18:03:37",
        "date_unixtime": "1688646817",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1198,
        "height": 490,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/nyNW3Q"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/nyNW3Q"
         }
        ]
       },
       {
        "id": 93951,
        "type": "message",
        "date": "2023-07-06T18:04:01",
        "date_unixtime": "1688646841",
        "edited": "2023-07-06T18:16:56",
        "edited_unixtime": "1688647616",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1266,
        "height": 620,
        "text": [
         "ALTRA QUARTZ Analog Black Clock @249\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rjq1kk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ALTRA QUARTZ Analog Black Clock @249\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rjq1kk"
         }
        ]
       },
       {
        "id": 93952,
        "type": "message",
        "date": "2023-07-06T18:04:32",
        "date_unixtime": "1688646872",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1277,
        "height": 582,
        "text": [
         "ViewSonic VA2432-MH 24 Inch (60.45 cm) IPS Panel FHD 1080p Monitor ",
         {
          "type": "mention",
          "text": "@8890"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3reDRo6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ViewSonic VA2432-MH 24 Inch (60.45 cm) IPS Panel FHD 1080p Monitor "
         },
         {
          "type": "mention",
          "text": "@8890"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3reDRo6"
         }
        ]
       },
       {
        "id": 93953,
        "type": "message",
        "date": "2023-07-06T18:05:02",
        "date_unixtime": "1688646902",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Tygot Gorilla Tripod @274\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKFgce"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tygot Gorilla Tripod @274\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKFgce"
         }
        ]
       },
       {
        "id": 93954,
        "type": "message",
        "date": "2023-07-06T18:13:33",
        "date_unixtime": "1688647413",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "Amazon Brand - Solimo Xxl Bean Bag Filled With Beans ",
         {
          "type": "mention",
          "text": "@1399"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XDzUoW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Xxl Bean Bag Filled With Beans "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XDzUoW"
         }
        ]
       },
       {
        "id": 93955,
        "type": "message",
        "date": "2023-07-06T18:13:57",
        "date_unixtime": "1688647437",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 563,
        "text": [
         "Portronics Clean M Multifunctional 8-in-1 Gadget Cleaning Kit @449\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44iCFP1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Clean M Multifunctional 8-in-1 Gadget Cleaning Kit @449\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44iCFP1"
         }
        ]
       },
       {
        "id": 93956,
        "type": "message",
        "date": "2023-07-06T18:14:19",
        "date_unixtime": "1688647459",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         "Jager-Smith GB 501 Multipurpose Gym Bag @68\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JNNq3z"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Jager-Smith GB 501 Multipurpose Gym Bag @68\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JNNq3z"
         }
        ]
       },
       {
        "id": 93957,
        "type": "message",
        "date": "2023-07-06T18:14:46",
        "date_unixtime": "1688647486",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1062,
        "height": 364,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/wdFYZ0"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/wdFYZ0"
         }
        ]
       },
       {
        "id": 93958,
        "type": "message",
        "date": "2023-07-06T18:15:04",
        "date_unixtime": "1688647504",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1194,
        "height": 442,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/JuRXHH"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/JuRXHH"
         }
        ]
       },
       {
        "id": 93959,
        "type": "message",
        "date": "2023-07-06T18:19:19",
        "date_unixtime": "1688647759",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "Amazon Brand - Solimo Swerve Height Adjustable Laptop @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NED6vZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Swerve Height Adjustable Laptop @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NED6vZ"
         }
        ]
       },
       {
        "id": 93960,
        "type": "message",
        "date": "2023-07-06T18:19:53",
        "date_unixtime": "1688647793",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 597,
        "text": [
         "ARMAAN Metal Magnetic Cable 360 Degree with C Type  @298\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44vIQPj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ARMAAN Metal Magnetic Cable 360 Degree with C Type  @298\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44vIQPj"
         }
        ]
       },
       {
        "id": 93961,
        "type": "message",
        "date": "2023-07-06T18:20:17",
        "date_unixtime": "1688647817",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1190,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ReSVzc"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ReSVzc"
         }
        ]
       },
       {
        "id": 93962,
        "type": "message",
        "date": "2023-07-06T18:20:45",
        "date_unixtime": "1688647845",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1197,
        "height": 673,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/hOomHz"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/hOomHz"
         }
        ]
       },
       {
        "id": 93963,
        "type": "message",
        "date": "2023-07-06T18:21:13",
        "date_unixtime": "1688647873",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 597,
        "text": [
         "Portronics Konnect L 60W PD Type C to Type C Mobile Charging Cable @179\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKP6hZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Konnect L 60W PD Type C to Type C Mobile Charging Cable @179\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKP6hZ"
         }
        ]
       },
       {
        "id": 93964,
        "type": "message",
        "date": "2023-07-06T18:21:44",
        "date_unixtime": "1688647904",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "Amazon Basics 8 Feet 1/2-Male to 2-Male RCA Audio Interconnects @169\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PQ0c5H"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics 8 Feet 1/2-Male to 2-Male RCA Audio Interconnects @169\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PQ0c5H"
         }
        ]
       },
       {
        "id": 93965,
        "type": "message",
        "date": "2023-07-06T18:22:10",
        "date_unixtime": "1688647930",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1206,
        "height": 593,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ttIrcl"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ttIrcl"
         }
        ]
       },
       {
        "id": 93966,
        "type": "message",
        "date": "2023-07-06T18:22:37",
        "date_unixtime": "1688647957",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1251,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/qmuIYt"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/qmuIYt"
         }
        ]
       },
       {
        "id": 93967,
        "type": "message",
        "date": "2023-07-06T18:23:36",
        "date_unixtime": "1688648016",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1055,
        "height": 379,
        "text": [
         "MYNTRA LOOT : Biotique Beauty Combo Products Start @ 115\n\n",
         {
          "type": "link",
          "text": "https://extp.in/axCwcX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MYNTRA LOOT : Biotique Beauty Combo Products Start @ 115\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/axCwcX"
         }
        ]
       },
       {
        "id": 93968,
        "type": "message",
        "date": "2023-07-06T18:24:17",
        "date_unixtime": "1688648057",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 656,
        "text": [
         "London Hills Men Round Neck Cotton Blend Multicolor Half Sleeve Solid T-Shirts (Pack of 3) @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44uSp14"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "London Hills Men Round Neck Cotton Blend Multicolor Half Sleeve Solid T-Shirts (Pack of 3) @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44uSp14"
         }
        ]
       },
       {
        "id": 93969,
        "type": "message",
        "date": "2023-07-06T18:24:50",
        "date_unixtime": "1688648090",
        "edited": "2023-07-06T22:20:44",
        "edited_unixtime": "1688662244",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 582,
        "text": [
         "Campus Men's Harrow PRO Running Shoes @559\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46FS4KL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Campus Men's Harrow PRO Running Shoes @559\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46FS4KL"
         }
        ]
       },
       {
        "id": 93970,
        "type": "message",
        "date": "2023-07-06T18:25:20",
        "date_unixtime": "1688648120",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 570,
        "text": [
         "Redmi 10 Power ",
         {
          "type": "mention",
          "text": "@12499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/438SOFv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redmi 10 Power "
         },
         {
          "type": "mention",
          "text": "@12499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/438SOFv"
         }
        ]
       },
       {
        "id": 93971,
        "type": "message",
        "date": "2023-07-06T18:44:46",
        "date_unixtime": "1688649286",
        "edited": "2023-07-06T18:56:31",
        "edited_unixtime": "1688649991",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 978,
        "height": 563,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " 80-90% Off on Women's Kurta & Kurta Sets\n\n▶️ Kurta From ₹239\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/foq41y"
         },
         "\n\n▶️ Kurta Sets From ₹359\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/OB1XVQ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         {
          "type": "plain",
          "text": " 80-90% Off on Women's Kurta & Kurta Sets\n\n▶️ Kurta From ₹239\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/foq41y"
         },
         {
          "type": "plain",
          "text": "\n\n▶️ Kurta Sets From ₹359\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/OB1XVQ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93972,
        "type": "message",
        "date": "2023-07-06T18:45:17",
        "date_unixtime": "1688649317",
        "edited": "2023-07-06T19:58:18",
        "edited_unixtime": "1688653698",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1243,
        "height": 453,
        "text": [
         "Avita SATUS S111 Celeron Dual Core - 4 GB/128 GB SSD Laptop @ ₹16,990\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/uCxyh7"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Avita SATUS S111 Celeron Dual Core - 4 GB/128 GB SSD Laptop @ ₹16,990\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/uCxyh7"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93973,
        "type": "message",
        "date": "2023-07-06T22:30:43",
        "date_unixtime": "1688662843",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1046,
        "height": 438,
        "text": [
         "Flipkart: Pack Of 2 Slippers @ Rs 199\n\n👉 Buy: ",
         {
          "type": "link",
          "text": "https://extp.in/8guz3w"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Pack Of 2 Slippers @ Rs 199\n\n👉 Buy: "
         },
         {
          "type": "link",
          "text": "https://extp.in/8guz3w"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93974,
        "type": "message",
        "date": "2023-07-06T22:31:09",
        "date_unixtime": "1688662869",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1192,
        "height": 446,
        "text": [
         "Flipkart: Cake Rainbow Vermicelli + Silver Ball Sprinkles (160 g, Pack of 2) @ Rs 125 [MRP 699]\n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/MPLZcM"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Cake Rainbow Vermicelli + Silver Ball Sprinkles (160 g, Pack of 2) @ Rs 125 [MRP 699]\n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/MPLZcM"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93975,
        "type": "message",
        "date": "2023-07-06T22:31:51",
        "date_unixtime": "1688662911",
        "edited": "2023-07-07T00:14:42",
        "edited_unixtime": "1688669082",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1012,
        "height": 641,
        "text": [
         "Happilo LOOT  🥰🥰\n\n▶️ GET FLAT 60% OFF on Bars, Brittle and Barfi's \n\nCoupon: PWLOOT60\n\n❇️ Bars: ",
         {
          "type": "link",
          "text": "https://extp.in/QKqxC9"
         },
         "\n❇️ Brittles & Barfi: ",
         {
          "type": "link",
          "text": "https://extp.in/2dK1fk"
         },
         "\n\n👉 Happilo is a Premium Brand in Dryfruits & Nuts category 🥰"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Happilo LOOT  🥰🥰\n\n▶️ GET FLAT 60% OFF on Bars, Brittle and Barfi's \n\nCoupon: PWLOOT60\n\n❇️ Bars: "
         },
         {
          "type": "link",
          "text": "https://extp.in/QKqxC9"
         },
         {
          "type": "plain",
          "text": "\n❇️ Brittles & Barfi: "
         },
         {
          "type": "link",
          "text": "https://extp.in/2dK1fk"
         },
         {
          "type": "plain",
          "text": "\n\n👉 Happilo is a Premium Brand in Dryfruits & Nuts category 🥰"
         }
        ]
       },
       {
        "id": 93976,
        "type": "message",
        "date": "2023-07-06T22:32:17",
        "date_unixtime": "1688662937",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1189,
        "height": 597,
        "text": [
         "DECIWOOD - Handcrafted In India 🇮🇳♥️\n\n👉 Up to 50% Off on Wooden Bluetooth Speakers + \n✅ 10% Off Code: DECI10\n✅ + Extra 5% Prepaid Off\n\nMasterlink: ",
         {
          "type": "link",
          "text": "https://extp.in/tjcHM0"
         },
         "\n\nFree Personalisation (See above Pic) - Write ur Fav phrase in Box & same will be printed on ur speaker.😍😍\n\n💥  Experience the QUALITY similar to MARSHAL (Luxury Foreign Brand) ❤️‍🔥"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "DECIWOOD - Handcrafted In India 🇮🇳♥️\n\n👉 Up to 50% Off on Wooden Bluetooth Speakers + \n✅ 10% Off Code: DECI10\n✅ + Extra 5% Prepaid Off\n\nMasterlink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/tjcHM0"
         },
         {
          "type": "plain",
          "text": "\n\nFree Personalisation (See above Pic) - Write ur Fav phrase in Box & same will be printed on ur speaker.😍😍\n\n💥  Experience the QUALITY similar to MARSHAL (Luxury Foreign Brand) ❤️‍🔥"
         }
        ]
       },
       {
        "id": 93977,
        "type": "message",
        "date": "2023-07-06T22:32:51",
        "date_unixtime": "1688662971",
        "edited": "2023-07-07T01:21:22",
        "edited_unixtime": "1688673082",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1204,
        "height": 443,
        "text": [
         "1️⃣ MAHARAJA 500 W Mixer Grinder With 3 Jars @ ₹1,599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/Lkkotw"
         },
         "\n\n❌ Regular price @ ₹1,999\n\n \n\n2️⃣ Sansui 750 W Mixer Grinder With 4 Jars @ ₹1,689\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/4cTBXu"
         },
         "\n\n❌ Regular price @ ₹2,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "1️⃣ MAHARAJA 500 W Mixer Grinder With 3 Jars @ ₹1,599\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/Lkkotw"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,999\n\n \n\n2️⃣ Sansui 750 W Mixer Grinder With 4 Jars @ ₹1,689\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/4cTBXu"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,999"
         }
        ]
       },
       {
        "id": 93978,
        "type": "message",
        "date": "2023-07-06T22:33:52",
        "date_unixtime": "1688663032",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "AmazonBasics Hair Straightener @ ₹549\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/46BSphC"
         },
         "\n\n❌ Regular price @ ₹1,300"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AmazonBasics Hair Straightener @ ₹549\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46BSphC"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,300"
         }
        ]
       },
       {
        "id": 93979,
        "type": "message",
        "date": "2023-07-06T22:35:20",
        "date_unixtime": "1688663120",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "VAcer 109 cm (43 inches) Advanced I Series 4K Ultra HD Smart LED Google TV ",
         {
          "type": "mention",
          "text": "@24999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D3imcA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "VAcer 109 cm (43 inches) Advanced I Series 4K Ultra HD Smart LED Google TV "
         },
         {
          "type": "mention",
          "text": "@24999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D3imcA"
         }
        ]
       },
       {
        "id": 93980,
        "type": "message",
        "date": "2023-07-06T22:36:17",
        "date_unixtime": "1688663177",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 608,
        "text": [
         "The Man Company Ocean Perfume for Men  @239\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44dL1Hw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "The Man Company Ocean Perfume for Men  @239\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44dL1Hw"
         }
        ]
       },
       {
        "id": 93981,
        "type": "message",
        "date": "2023-07-06T22:36:50",
        "date_unixtime": "1688663210",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1033,
        "height": 346,
        "text": [
         "Fogg Master Intense Napoleon Perfume Body Spray @264\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46EyxdS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fogg Master Intense Napoleon Perfume Body Spray @264\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46EyxdS"
         }
        ]
       },
       {
        "id": 93982,
        "type": "message",
        "date": "2023-07-06T22:37:43",
        "date_unixtime": "1688663263",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1065,
        "height": 468,
        "text": [
         "💥Women’s Shoe (All Size) \n\n💰Deal @ 299🔥.    ❌Reg @ 499\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/IEJKVn"
         },
         "\n\nMaster link:\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/CmApjA"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Women’s Shoe (All Size) \n\n💰Deal @ 299🔥.    ❌Reg @ 499\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/IEJKVn"
         },
         {
          "type": "plain",
          "text": "\n\nMaster link:\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/CmApjA"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93983,
        "type": "message",
        "date": "2023-07-06T22:38:13",
        "date_unixtime": "1688663293",
        "edited": "2023-07-06T22:38:41",
        "edited_unixtime": "1688663321",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1203,
        "height": 424,
        "text": [
         "💥Misfit by boAt T150 Trimmer \n\n💰Deal @ 694🔥.   ❌Reg @ 800+\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/PKlC4O"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Misfit by boAt T150 Trimmer \n\n💰Deal @ 694🔥.   ❌Reg @ 800+\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/PKlC4O"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93984,
        "type": "message",
        "date": "2023-07-06T22:38:39",
        "date_unixtime": "1688663319",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1233,
        "height": 442,
        "text": [
         "💥Boult Audio ProBass EQCharge with ZEN Mode ENC,\n\nDeal @ 799 🔥.      ❌Reg @ 1099\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/QCNx1A"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Boult Audio ProBass EQCharge with ZEN Mode ENC,\n\nDeal @ 799 🔥.      ❌Reg @ 1099\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/QCNx1A"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93985,
        "type": "message",
        "date": "2023-07-06T22:39:04",
        "date_unixtime": "1688663344",
        "edited": "2023-07-06T22:39:35",
        "edited_unixtime": "1688663375",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1035,
        "height": 322,
        "text": [
         "💥Upto 86% Off On Bucik Sandals\n\nFrom 461🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/JQihVb"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Upto 86% Off On Bucik Sandals\n\nFrom 461🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/JQihVb"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93986,
        "type": "message",
        "date": "2023-07-06T22:39:38",
        "date_unixtime": "1688663378",
        "edited": "2023-07-06T22:40:06",
        "edited_unixtime": "1688663406",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1188,
        "height": 427,
        "text": [
         "💥Lowest : Pepper Cashew (500g x 2) \n\nDeal @ 719🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/0RHshy"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Lowest : Pepper Cashew (500g x 2) \n\nDeal @ 719🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/0RHshy"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93987,
        "type": "message",
        "date": "2023-07-06T22:39:59",
        "date_unixtime": "1688663399",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 572,
        "text": [
         "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV  ",
         {
          "type": "mention",
          "text": "@30490"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0hifK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV  "
         },
         {
          "type": "mention",
          "text": "@30490"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0hifK"
         }
        ]
       },
       {
        "id": 93988,
        "type": "message",
        "date": "2023-07-06T22:40:23",
        "date_unixtime": "1688663423",
        "edited": "2023-07-07T06:05:35",
        "edited_unixtime": "1688690135",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "Studds Chrome Super D2 Full Face Helmet ",
         {
          "type": "mention",
          "text": "@1254"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D00EX4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Studds Chrome Super D2 Full Face Helmet "
         },
         {
          "type": "mention",
          "text": "@1254"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D00EX4"
         }
        ]
       },
       {
        "id": 93989,
        "type": "message",
        "date": "2023-07-06T22:41:39",
        "date_unixtime": "1688663499",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 845,
        "height": 453,
        "text": [
         "💥Min. 65% Off On Puma Footwear.\n\nFrom 639🔥\n\nMen's :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3pCDfrO"
         },
         "\n\nWomen’s :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3pAcC6M"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Min. 65% Off On Puma Footwear.\n\nFrom 639🔥\n\nMen's :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pCDfrO"
         },
         {
          "type": "plain",
          "text": "\n\nWomen’s :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pAcC6M"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93990,
        "type": "message",
        "date": "2023-07-06T22:42:04",
        "date_unixtime": "1688663524",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 544,
        "text": [
         "JAAMSO Royals Multi Color Wallpaper @131\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43iYAEq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "JAAMSO Royals Multi Color Wallpaper @131\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43iYAEq"
         }
        ]
       },
       {
        "id": 93991,
        "type": "message",
        "date": "2023-07-06T22:42:26",
        "date_unixtime": "1688663546",
        "edited": "2023-07-06T22:47:03",
        "edited_unixtime": "1688663823",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "Mosquito Killer Racket @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46EIIyO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mosquito Killer Racket @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46EIIyO"
         }
        ]
       },
       {
        "id": 93992,
        "type": "message",
        "date": "2023-07-06T22:44:00",
        "date_unixtime": "1688663640",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1057,
        "height": 395,
        "text": [
         {
          "type": "bold",
          "text": "Apply 25% Off Coupon"
         },
         " : Women's Yoga Trackpants@299\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3D01Jyr"
         },
         "\n\nMen's T-Shirt Starts @249 :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3riS9UN"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Apply 25% Off Coupon"
         },
         {
          "type": "plain",
          "text": " : Women's Yoga Trackpants@299\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D01Jyr"
         },
         {
          "type": "plain",
          "text": "\n\nMen's T-Shirt Starts @249 :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3riS9UN"
         }
        ]
       },
       {
        "id": 93993,
        "type": "message",
        "date": "2023-07-06T22:45:07",
        "date_unixtime": "1688663707",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1258,
        "height": 428,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/pzR9A1"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/pzR9A1"
         }
        ]
       },
       {
        "id": 93994,
        "type": "message",
        "date": "2023-07-06T22:45:27",
        "date_unixtime": "1688663727",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1221,
        "height": 433,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/iYCI5V"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/iYCI5V"
         }
        ]
       },
       {
        "id": 93995,
        "type": "message",
        "date": "2023-07-06T22:47:15",
        "date_unixtime": "1688663835",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 617,
        "text": [
         "Levi's Men's Cottonblend Crew Neck Sweatshirts  @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D44fDy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Levi's Men's Cottonblend Crew Neck Sweatshirts  @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D44fDy"
         }
        ]
       },
       {
        "id": 93996,
        "type": "message",
        "date": "2023-07-06T22:47:43",
        "date_unixtime": "1688663863",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 611,
        "text": [
         "Amazon Brand Solimo - Honey and Raisin Muesli 1kg @345\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44gKp4e"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand Solimo - Honey and Raisin Muesli 1kg @345\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44gKp4e"
         }
        ]
       },
       {
        "id": 93997,
        "type": "message",
        "date": "2023-07-06T22:48:06",
        "date_unixtime": "1688663886",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 642,
        "text": [
         "KETCH Men Casual Pants @752\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46wmbV7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "KETCH Men Casual Pants @752\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46wmbV7"
         }
        ]
       },
       {
        "id": 93998,
        "type": "message",
        "date": "2023-07-06T22:48:42",
        "date_unixtime": "1688663922",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 620,
        "text": [
         "BATA Men's Alfred Slipper @287\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43tYv0Z"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BATA Men's Alfred Slipper @287\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43tYv0Z"
         }
        ]
       },
       {
        "id": 93999,
        "type": "message",
        "date": "2023-07-06T22:49:07",
        "date_unixtime": "1688663947",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "Hush Puppies Womens Allina E Slipper @579\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NF2ba7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hush Puppies Womens Allina E Slipper @579\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NF2ba7"
         }
        ]
       },
       {
        "id": 94000,
        "type": "message",
        "date": "2023-07-06T22:49:34",
        "date_unixtime": "1688663974",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Portronics Power Plate 5 1500W Power Converter    @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NGxXDN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Power Plate 5 1500W Power Converter    @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NGxXDN"
         }
        ]
       },
       {
        "id": 94001,
        "type": "message",
        "date": "2023-07-06T22:49:58",
        "date_unixtime": "1688663998",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "HAMMONDS FLYCATCHER Genuine Leather Wallets  @497\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CZGe0w"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HAMMONDS FLYCATCHER Genuine Leather Wallets  @497\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CZGe0w"
         }
        ]
       },
       {
        "id": 94002,
        "type": "message",
        "date": "2023-07-06T22:58:57",
        "date_unixtime": "1688664537",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1254,
        "height": 495,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Yvj7MA"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Yvj7MA"
         }
        ]
       },
       {
        "id": 94003,
        "type": "message",
        "date": "2023-07-06T22:59:18",
        "date_unixtime": "1688664558",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 625,
        "text": [
         "Fastrack Analog Men's Watch ",
         {
          "type": "mention",
          "text": "@1490"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGZ5XN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fastrack Analog Men's Watch "
         },
         {
          "type": "mention",
          "text": "@1490"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XGZ5XN"
         }
        ]
       },
       {
        "id": 94004,
        "type": "message",
        "date": "2023-07-06T22:59:41",
        "date_unixtime": "1688664581",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 604,
        "text": [
         "Scott International Rich Cotton Winter Wear Hooded Sweatshirt @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O3l1Jy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Scott International Rich Cotton Winter Wear Hooded Sweatshirt @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O3l1Jy"
         }
        ]
       },
       {
        "id": 94005,
        "type": "message",
        "date": "2023-07-06T23:00:00",
        "date_unixtime": "1688664600",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1187,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/l0K9gw"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/l0K9gw"
         }
        ]
       },
       {
        "id": 94006,
        "type": "message",
        "date": "2023-07-06T23:00:22",
        "date_unixtime": "1688664622",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "Horlicks Chocolate Health @294\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PLk5ul"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Horlicks Chocolate Health @294\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PLk5ul"
         }
        ]
       },
       {
        "id": 94007,
        "type": "message",
        "date": "2023-07-06T23:00:43",
        "date_unixtime": "1688664643",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "Xiaomi Wired in-Ear Earphones  @337\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3DljKaF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Xiaomi Wired in-Ear Earphones  @337\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3DljKaF"
         }
        ]
       },
       {
        "id": 94008,
        "type": "message",
        "date": "2023-07-06T23:01:01",
        "date_unixtime": "1688664661",
        "edited": "2023-07-06T23:03:04",
        "edited_unixtime": "1688664784",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1205,
        "height": 582,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/gQ7BRe"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/gQ7BRe"
         }
        ]
       },
       {
        "id": 94009,
        "type": "message",
        "date": "2023-07-06T23:01:30",
        "date_unixtime": "1688664690",
        "edited": "2023-07-06T23:01:34",
        "edited_unixtime": "1688664694",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "STRIFF Laptop Stand Adjustable Laptop Computer Stand @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JLvGpC"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "STRIFF Laptop Stand Adjustable Laptop Computer Stand @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JLvGpC"
         }
        ]
       },
       {
        "id": 94010,
        "type": "message",
        "date": "2023-07-06T23:02:05",
        "date_unixtime": "1688664725",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 438,
        "text": [
         "Flipkart Loot Deal 🔥🔥\n\nRealFitness Peanut Butter 1 Kg @ Rs 246/- [MRP 999]\n\n👉 Loot: ",
         {
          "type": "link",
          "text": "https://extp.in/uZvFcH"
         },
         "\n\n📌 Buy Max Qnty."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart Loot Deal 🔥🔥\n\nRealFitness Peanut Butter 1 Kg @ Rs 246/- [MRP 999]\n\n👉 Loot: "
         },
         {
          "type": "link",
          "text": "https://extp.in/uZvFcH"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Buy Max Qnty."
         }
        ]
       },
       {
        "id": 94011,
        "type": "message",
        "date": "2023-07-06T23:02:35",
        "date_unixtime": "1688664755",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 622,
        "text": [
         "Eufy Security Mini IndoorCam ",
         {
          "type": "mention",
          "text": "@3099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43dOXH2V"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Eufy Security Mini IndoorCam "
         },
         {
          "type": "mention",
          "text": "@3099"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43dOXH2V"
         }
        ]
       },
       {
        "id": 94012,
        "type": "message",
        "date": "2023-07-06T23:03:01",
        "date_unixtime": "1688664781",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1267,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/mIG7Af"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/mIG7Af"
         }
        ]
       },
       {
        "id": 94013,
        "type": "message",
        "date": "2023-07-06T23:06:30",
        "date_unixtime": "1688664990",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1245,
        "height": 442,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/F0fggd"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/F0fggd"
         }
        ]
       },
       {
        "id": 94014,
        "type": "message",
        "date": "2023-07-06T23:06:59",
        "date_unixtime": "1688665019",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 616,
        "text": [
         "Bajaj Energos 12DC5R 1200mm Silent BLDC Ceiling Fan ",
         {
          "type": "mention",
          "text": "@2499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O1xjSt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bajaj Energos 12DC5R 1200mm Silent BLDC Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@2499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O1xjSt"
         }
        ]
       },
       {
        "id": 94015,
        "type": "message",
        "date": "2023-07-06T23:07:28",
        "date_unixtime": "1688665048",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1203,
        "height": 442,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/gaVk0C"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/gaVk0C"
         }
        ]
       },
       {
        "id": 94016,
        "type": "message",
        "date": "2023-07-06T23:08:17",
        "date_unixtime": "1688665097",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 615,
        "text": [
         "TIMEX Analog Blue Dial Women's Watch ",
         {
          "type": "mention",
          "text": "@1329"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzroLb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "TIMEX Analog Blue Dial Women's Watch "
         },
         {
          "type": "mention",
          "text": "@1329"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzroLb"
         }
        ]
       },
       {
        "id": 94017,
        "type": "message",
        "date": "2023-07-06T23:08:48",
        "date_unixtime": "1688665128",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 629,
        "text": [
         "VYOOx 2 in 1 Bathroom Cleaning Brush Wiper Tiles Cleaning Bathroom Brush @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44j2COr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "VYOOx 2 in 1 Bathroom Cleaning Brush Wiper Tiles Cleaning Bathroom Brush @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44j2COr"
         }
        ]
       },
       {
        "id": 94018,
        "type": "message",
        "date": "2023-07-06T23:09:14",
        "date_unixtime": "1688665154",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "Boldfit Weight Machine @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44q2AUQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boldfit Weight Machine @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44q2AUQ"
         }
        ]
       },
       {
        "id": 94019,
        "type": "message",
        "date": "2023-07-06T23:09:39",
        "date_unixtime": "1688665179",
        "edited": "2023-07-06T23:09:45",
        "edited_unixtime": "1688665185",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Samsung T420/XL 2.1 Channel Wireless Soundbar ",
         {
          "type": "mention",
          "text": "@8999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43g4Dd0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung T420/XL 2.1 Channel Wireless Soundbar "
         },
         {
          "type": "mention",
          "text": "@8999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43g4Dd0"
         }
        ]
       },
       {
        "id": 94020,
        "type": "message",
        "date": "2023-07-06T23:10:00",
        "date_unixtime": "1688665200",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1194,
        "height": 422,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/1eee3H"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/1eee3H"
         }
        ]
       },
       {
        "id": 94021,
        "type": "message",
        "date": "2023-07-06T23:10:27",
        "date_unixtime": "1688665227",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 561,
        "text": [
         "Philips BRE235/00 Corded Compact Epilator ",
         {
          "type": "mention",
          "text": "@2174"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O46RIb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Philips BRE235/00 Corded Compact Epilator "
         },
         {
          "type": "mention",
          "text": "@2174"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O46RIb"
         }
        ]
       },
       {
        "id": 94022,
        "type": "message",
        "date": "2023-07-06T23:10:56",
        "date_unixtime": "1688665256",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 631,
        "text": [
         "Wipro Safelite N10004 B22 0.5-Watt Led Night Lamp (Pack of 6, Blue) @150\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKon1r"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wipro Safelite N10004 B22 0.5-Watt Led Night Lamp (Pack of 6, Blue) @150\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKon1r"
         }
        ]
       },
       {
        "id": 94023,
        "type": "message",
        "date": "2023-07-06T23:11:20",
        "date_unixtime": "1688665280",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 627,
        "text": [
         "Sonata Analog Watches for Men @900\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O2VgsD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sonata Analog Watches for Men @900\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O2VgsD"
         }
        ]
       },
       {
        "id": 94024,
        "type": "message",
        "date": "2023-07-06T23:11:44",
        "date_unixtime": "1688665304",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1217,
        "height": 412,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/vcXAWr"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/vcXAWr"
         }
        ]
       },
       {
        "id": 94025,
        "type": "message",
        "date": "2023-07-06T23:12:11",
        "date_unixtime": "1688665331",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 632,
        "text": [
         "Havells 1200mm Astura Energy Saving Ceiling Fan ",
         {
          "type": "mention",
          "text": "@2252"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pBNvAE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells 1200mm Astura Energy Saving Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@2252"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pBNvAE"
         }
        ]
       },
       {
        "id": 94026,
        "type": "message",
        "date": "2023-07-06T23:12:33",
        "date_unixtime": "1688665353",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1229,
        "height": 427,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/QzqJnu"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/QzqJnu"
         }
        ]
       },
       {
        "id": 94027,
        "type": "message",
        "date": "2023-07-06T23:13:04",
        "date_unixtime": "1688665384",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 632,
        "text": [
         "Intex 5Ft X 10In Ocean Reef Snapset Pool Bath Toy @835\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NNEpce"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Intex 5Ft X 10In Ocean Reef Snapset Pool Bath Toy @835\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NNEpce"
         }
        ]
       },
       {
        "id": 94028,
        "type": "message",
        "date": "2023-07-06T23:13:28",
        "date_unixtime": "1688665408",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 431,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ZU6DWZ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ZU6DWZ"
         }
        ]
       },
       {
        "id": 94029,
        "type": "message",
        "date": "2023-07-06T23:14:00",
        "date_unixtime": "1688665440",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 565,
        "text": [
         "Amazon Basics Wired Over Ear Gaming Headphones  ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43u07YB"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics Wired Over Ear Gaming Headphones  "
         },
         {
          "type": "mention",
          "text": "@1499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43u07YB"
         }
        ]
       },
       {
        "id": 94030,
        "type": "message",
        "date": "2023-07-06T23:14:26",
        "date_unixtime": "1688665466",
        "edited": "2023-07-07T00:47:43",
        "edited_unixtime": "1688671063",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1218,
        "height": 439,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/aqrt9j"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/aqrt9j"
         }
        ]
       },
       {
        "id": 94031,
        "type": "message",
        "date": "2023-07-06T23:14:53",
        "date_unixtime": "1688665493",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 566,
        "text": [
         "Boss S13 Office/Home Full Hd Projector 4000 Lumens ",
         {
          "type": "mention",
          "text": "@14249"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pKoaEu"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boss S13 Office/Home Full Hd Projector 4000 Lumens "
         },
         {
          "type": "mention",
          "text": "@14249"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pKoaEu"
         }
        ]
       },
       {
        "id": 94032,
        "type": "message",
        "date": "2023-07-06T23:15:20",
        "date_unixtime": "1688665520",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 593,
        "text": [
         "Amazon Brand - Solimo Stainless Steel Water Bottle @419\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NZXjxJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Stainless Steel Water Bottle @419\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NZXjxJ"
         }
        ]
       },
       {
        "id": 94033,
        "type": "message",
        "date": "2023-07-06T23:16:03",
        "date_unixtime": "1688665563",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Nivea Lemon and Oil Shower Gel @553\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NIGRQW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nivea Lemon and Oil Shower Gel @553\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NIGRQW"
         }
        ]
       },
       {
        "id": 94034,
        "type": "message",
        "date": "2023-07-07T00:49:51",
        "date_unixtime": "1688671191",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "RAISIN, 200gm@ 79\n\nMin Buy 2 :  ",
         {
          "type": "link",
          "text": "https://amzn.to/43cz2sI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "RAISIN, 200gm@ 79\n\nMin Buy 2 :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43cz2sI"
         }
        ]
       },
       {
        "id": 94035,
        "type": "message",
        "date": "2023-07-07T00:50:04",
        "date_unixtime": "1688671204",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1031,
        "height": 893,
        "text": [
         "Myntra Fashion Carnival Sale \n\n✅ Flat Rs 300 Off on 1st order + Free Shipping\n\n👉 Shop Now: ",
         {
          "type": "link",
          "text": "https://extp.in/xuxFFJ"
         },
         "\n\n➡️ Men: ",
         {
          "type": "link",
          "text": "https://extp.in/TcKHkP"
         },
         "\n\n➡️ Women: ",
         {
          "type": "link",
          "text": "https://extp.in/hVYoMC"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra Fashion Carnival Sale \n\n✅ Flat Rs 300 Off on 1st order + Free Shipping\n\n👉 Shop Now: "
         },
         {
          "type": "link",
          "text": "https://extp.in/xuxFFJ"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Men: "
         },
         {
          "type": "link",
          "text": "https://extp.in/TcKHkP"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Women: "
         },
         {
          "type": "link",
          "text": "https://extp.in/hVYoMC"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94036,
        "type": "message",
        "date": "2023-07-07T00:50:26",
        "date_unixtime": "1688671226",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1223,
        "height": 480,
        "text": [
         "Nivea Dark Spot Reduction Face Wash, 100ml (Pack of 3) @ ₹384\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3NyMbGE"
         },
         "\n\n❌ Regular price @ ₹599"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nivea Dark Spot Reduction Face Wash, 100ml (Pack of 3) @ ₹384\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NyMbGE"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹599"
         }
        ]
       },
       {
        "id": 94037,
        "type": "message",
        "date": "2023-07-07T00:50:46",
        "date_unixtime": "1688671246",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 476,
        "text": [
         "SYSKA 1000-Watt Iron Box @ ₹468\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3PMcDPN"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SYSKA 1000-Watt Iron Box @ ₹468\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PMcDPN"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94038,
        "type": "message",
        "date": "2023-07-07T00:51:03",
        "date_unixtime": "1688671263",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 518,
        "text": [
         "Black + Decker PD1200AV-B1 12V Cordless Dustbuster Flexi Auto Handheld Vacuum Cleaner @ ₹2,799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3NJmBPm"
         },
         "\n\n❌ Regular price @ ₹5,500"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Black + Decker PD1200AV-B1 12V Cordless Dustbuster Flexi Auto Handheld Vacuum Cleaner @ ₹2,799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NJmBPm"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹5,500"
         }
        ]
       },
       {
        "id": 94039,
        "type": "message",
        "date": "2023-07-07T00:51:22",
        "date_unixtime": "1688671282",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 614,
        "text": [
         "Black + Decker PV1200AV-B1 12V Cordless Dustbuster Flexi Auto Handheld Vacuum Cleaner @ ₹2,799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44bU2AR"
         },
         "\n\n❌ Regular price @ ₹6,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Black + Decker PV1200AV-B1 12V Cordless Dustbuster Flexi Auto Handheld Vacuum Cleaner @ ₹2,799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bU2AR"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹6,100"
         }
        ]
       },
       {
        "id": 94040,
        "type": "message",
        "date": "2023-07-07T00:51:47",
        "date_unixtime": "1688671307",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Supples Baby Premium Diaper Pants - XXL (42 Count/White)\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rovGW0"
         },
         "\n\n✅ Apply 15% coupon"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Supples Baby Premium Diaper Pants - XXL (42 Count/White)\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rovGW0"
         },
         {
          "type": "plain",
          "text": "\n\n✅ Apply 15% coupon"
         }
        ]
       },
       {
        "id": 94041,
        "type": "message",
        "date": "2023-07-07T00:52:06",
        "date_unixtime": "1688671326",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 479,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/JrQwoL"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/JrQwoL"
         }
        ]
       },
       {
        "id": 94042,
        "type": "message",
        "date": "2023-07-07T00:57:35",
        "date_unixtime": "1688671655",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 478,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2CPJmh"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2CPJmh"
         }
        ]
       },
       {
        "id": 94043,
        "type": "message",
        "date": "2023-07-07T00:58:11",
        "date_unixtime": "1688671691",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Cadbury ChocFilled Cookies, 300g @119\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XJogsS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cadbury ChocFilled Cookies, 300g @119\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XJogsS"
         }
        ]
       },
       {
        "id": 94044,
        "type": "message",
        "date": "2023-07-07T00:58:36",
        "date_unixtime": "1688671716",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 922,
        "height": 497,
        "text": [
         "Roadster Jeans Upto 80% Off starting @399\n\nScroll Down : ",
         {
          "type": "link",
          "text": "https://extp.in/VjyyvJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Roadster Jeans Upto 80% Off starting @399\n\nScroll Down : "
         },
         {
          "type": "link",
          "text": "https://extp.in/VjyyvJ"
         }
        ]
       },
       {
        "id": 94045,
        "type": "message",
        "date": "2023-07-07T00:59:14",
        "date_unixtime": "1688671754",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 893,
        "height": 381,
        "text": [
         "Apply 25% Off Coupon : Women's Yoga Trackpants@299\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3CZzDDg"
         },
         "\n\nMen's T-Shirt Starts @249 :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3JL5Sdc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Apply 25% Off Coupon : Women's Yoga Trackpants@299\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CZzDDg"
         },
         {
          "type": "plain",
          "text": "\n\nMen's T-Shirt Starts @249 :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JL5Sdc"
         }
        ]
       },
       {
        "id": 94046,
        "type": "message",
        "date": "2023-07-07T00:59:40",
        "date_unixtime": "1688671780",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Min. 65% Off On Puma Footwear.\n\nMen's : ",
         {
          "type": "link",
          "text": "https://amzn.to/3pKwhkq"
         },
         " \nWomen’s :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3NEWKrG"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Min. 65% Off On Puma Footwear.\n\nMen's : "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pKwhkq"
         },
         {
          "type": "plain",
          "text": " \nWomen’s :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEWKrG"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94047,
        "type": "message",
        "date": "2023-07-07T00:59:56",
        "date_unixtime": "1688671796",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Calcutta Meetha Paan Mukhwas (300gm) @175\n\n ",
         {
          "type": "link",
          "text": "https://extp.in/XlrDFV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Calcutta Meetha Paan Mukhwas (300gm) @175\n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/XlrDFV"
         }
        ]
       },
       {
        "id": 94048,
        "type": "message",
        "date": "2023-07-07T01:00:17",
        "date_unixtime": "1688671817",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1207,
        "height": 473,
        "text": [
         "Back : LG (43 Inches) 4K Ultra HD Smart LED TV ",
         {
          "type": "bold",
          "text": "@23,990"
         },
         " | @27,240",
         {
          "type": "bold",
          "text": " (Effectively). \n\n"
         },
         " 🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3NFj2K2"
         },
         "\n\n*",
         {
          "type": "underline",
          "text": "Apply ₹2000 Off Coupon + Flat ₹1250 Off With HDFC Cards No Cost EMI"
         },
         ".\n\nPro Tip : Select 18 Months No Cost EMI Option & Cancel Your EMI After Delivery To Save Extra ₹3000 (Approx Cost 24K)."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Back : LG (43 Inches) 4K Ultra HD Smart LED TV "
         },
         {
          "type": "bold",
          "text": "@23,990"
         },
         {
          "type": "plain",
          "text": " | @27,240"
         },
         {
          "type": "bold",
          "text": " (Effectively). \n\n"
         },
         {
          "type": "plain",
          "text": " 🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NFj2K2"
         },
         {
          "type": "plain",
          "text": "\n\n*"
         },
         {
          "type": "underline",
          "text": "Apply ₹2000 Off Coupon + Flat ₹1250 Off With HDFC Cards No Cost EMI"
         },
         {
          "type": "plain",
          "text": ".\n\nPro Tip : Select 18 Months No Cost EMI Option & Cancel Your EMI After Delivery To Save Extra ₹3000 (Approx Cost 24K)."
         }
        ]
       },
       {
        "id": 94049,
        "type": "message",
        "date": "2023-07-07T01:00:36",
        "date_unixtime": "1688671836",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1243,
        "height": 533,
        "text": [
         {
          "type": "bold",
          "text": "Apply ₹40 Off Coupon |"
         },
         " The Man Company EDP - Ocean, 30 ml@199.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JJIZ9S"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Apply ₹40 Off Coupon |"
         },
         {
          "type": "plain",
          "text": " The Man Company EDP - Ocean, 30 ml@199.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JJIZ9S"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94050,
        "type": "message",
        "date": "2023-07-07T01:00:58",
        "date_unixtime": "1688671858",
        "edited": "2023-07-07T07:23:54",
        "edited_unixtime": "1688694834",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 538,
        "text": [
         {
          "type": "bold",
          "text": "Apply ₹2000 Off Coupon |"
         },
         " Acer (43'') 4K UHD Smart LED TV ",
         {
          "type": "bold",
          "text": "@22,999 + Bank Offer.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D0byMu"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Apply ₹2000 Off Coupon |"
         },
         {
          "type": "plain",
          "text": " Acer (43'') 4K UHD Smart LED TV "
         },
         {
          "type": "bold",
          "text": "@22,999 + Bank Offer.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D0byMu"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94051,
        "type": "message",
        "date": "2023-07-07T01:01:15",
        "date_unixtime": "1688671875",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 497,
        "text": [
         "Lowest : Mix Dry Fruits, 500g @309.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/L2EktF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lowest : Mix Dry Fruits, 500g @309.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/L2EktF"
         }
        ]
       },
       {
        "id": 94052,
        "type": "message",
        "date": "2023-07-07T01:01:39",
        "date_unixtime": "1688671899",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1165,
        "height": 618,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/4lTA9e"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/4lTA9e"
         }
        ]
       },
       {
        "id": 94053,
        "type": "message",
        "date": "2023-07-07T01:02:07",
        "date_unixtime": "1688671927",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 951,
        "height": 422,
        "text": [
         "Upto 86% Off On Bucik Sandals\n\n",
         {
          "type": "link",
          "text": "https://extp.in/M0Cmod"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 86% Off On Bucik Sandals\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/M0Cmod"
         }
        ]
       },
       {
        "id": 94054,
        "type": "message",
        "date": "2023-07-07T01:02:21",
        "date_unixtime": "1688671941",
        "edited": "2023-07-07T01:03:58",
        "edited_unixtime": "1688672038",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Loot 💥💥💥 \n\n103: ",
         {
          "type": "link",
          "text": "https://extp.in/mtMBzy"
         },
         "\n14 : ",
         {
          "type": "link",
          "text": "https://extp.in/5qypPv"
         },
         "\n117 : ",
         {
          "type": "link",
          "text": "https://extp.in/aKK9q6"
         },
         "\n47 : ",
         {
          "type": "link",
          "text": "https://extp.in/dwdOwF"
         },
         "\n44 : ",
         {
          "type": "link",
          "text": "https://extp.in/Rg4gSp"
         },
         "\n105 : ",
         {
          "type": "link",
          "text": "https://extp.in/ioc8kf"
         },
         "\n76 : ",
         {
          "type": "link",
          "text": "https://extp.in/YBhAbE"
         },
         "\n77 : ",
         {
          "type": "link",
          "text": "https://extp.in/BcQCPs"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 💥💥💥 \n\n103: "
         },
         {
          "type": "link",
          "text": "https://extp.in/mtMBzy"
         },
         {
          "type": "plain",
          "text": "\n14 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/5qypPv"
         },
         {
          "type": "plain",
          "text": "\n117 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/aKK9q6"
         },
         {
          "type": "plain",
          "text": "\n47 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/dwdOwF"
         },
         {
          "type": "plain",
          "text": "\n44 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/Rg4gSp"
         },
         {
          "type": "plain",
          "text": "\n105 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/ioc8kf"
         },
         {
          "type": "plain",
          "text": "\n76 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/YBhAbE"
         },
         {
          "type": "plain",
          "text": "\n77 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/BcQCPs"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 94055,
        "type": "message",
        "date": "2023-07-07T01:02:40",
        "date_unixtime": "1688671960",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 473,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Fisgw6"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Fisgw6"
         }
        ]
       },
       {
        "id": 94056,
        "type": "message",
        "date": "2023-07-07T01:03:15",
        "date_unixtime": "1688671995",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 511,
        "text": [
         "52% Off : LOTUS White Glow Insta Glow Fairnes Facial Kit @126\n\n",
         {
          "type": "link",
          "text": "https://extp.in/rHPvwe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "52% Off : LOTUS White Glow Insta Glow Fairnes Facial Kit @126\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/rHPvwe"
         }
        ]
       },
       {
        "id": 94057,
        "type": "message",
        "date": "2023-07-07T01:03:38",
        "date_unixtime": "1688672018",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1122,
        "height": 575,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/8VIRYE"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/8VIRYE"
         }
        ]
       },
       {
        "id": 94058,
        "type": "message",
        "date": "2023-07-07T01:04:04",
        "date_unixtime": "1688672044",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1128,
        "height": 543,
        "text": [
         "Min 50% Off On Top Branded Beauty Products.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/uw5Ofj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Min 50% Off On Top Branded Beauty Products.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/uw5Ofj"
         }
        ]
       },
       {
        "id": 94059,
        "type": "message",
        "date": "2023-07-07T01:04:27",
        "date_unixtime": "1688672067",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 495,
        "text": [
         "Soap\n\n243 : ",
         {
          "type": "link",
          "text": "https://extp.in/6UcJVt"
         },
         "\n452 : ",
         {
          "type": "link",
          "text": "https://extp.in/IQaDpY"
         },
         "\n353 : ",
         {
          "type": "link",
          "text": "https://extp.in/GqiGn7"
         },
         "\n222 : ",
         {
          "type": "link",
          "text": "https://extp.in/id520y"
         },
         "\n\nMasterLink (Min 50% Off) : ",
         {
          "type": "link",
          "text": "https://extp.in/4NBobd"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Soap\n\n243 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/6UcJVt"
         },
         {
          "type": "plain",
          "text": "\n452 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/IQaDpY"
         },
         {
          "type": "plain",
          "text": "\n353 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/GqiGn7"
         },
         {
          "type": "plain",
          "text": "\n222 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/id520y"
         },
         {
          "type": "plain",
          "text": "\n\nMasterLink (Min 50% Off) : "
         },
         {
          "type": "link",
          "text": "https://extp.in/4NBobd"
         }
        ]
       },
       {
        "id": 94060,
        "type": "message",
        "date": "2023-07-07T01:04:51",
        "date_unixtime": "1688672091",
        "edited": "2023-07-07T01:23:19",
        "edited_unixtime": "1688673199",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 511,
        "text": [
         "50% Off : Surf excel Liquid Detergent  (2 L)@ 215\n\n",
         {
          "type": "link",
          "text": "https://extp.in/RVAY3M"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "50% Off : Surf excel Liquid Detergent  (2 L)@ 215\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/RVAY3M"
         }
        ]
       },
       {
        "id": 94061,
        "type": "message",
        "date": "2023-07-07T01:05:10",
        "date_unixtime": "1688672110",
        "edited": "2023-07-07T07:50:57",
        "edited_unixtime": "1688696457",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 511,
        "text": [
         "Noise Smartwatch @999\n\n",
         {
          "type": "link",
          "text": "https://extp.in/9doWSg"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Noise Smartwatch @999\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/9doWSg"
         }
        ]
       }
    ];
  //@getcookies
  // let cokies = await driver.manage().getCookies();

  // await driver.manage().getCookies().then(function(cookies) {
  //     console.log('cookie details => ', cookies);
  // });

  // it('Read all cookies',async function() {
  //     await driver.get('https://web.telegram.org/');

  //     // Add few cookies
  //     await driver.manage().addCookie({ name: 'test1', value: 'cookie1' });
  //     await driver.manage().addCookie({ name: 'test2', value: 'cookie2' });

  //     // Get all Available cookies
  //     await driver.manage().getCookies().then(function(cookies) {
  //         console.log('cookie details => ', cookies);
  //     });
  // });

  //@telegram login
  // await driver.get("https://web.telegram.org/?legacy=1#/login");

  // await driver.findElement(By.name("phone_country")).sendKeys(Key.BACK_SPACE,Key.BACK_SPACE,"+91");
  // await driver.findElement(By.name("phone_number")).sendKeys("9951797149",Key.RETURN);
  // await driver.findElement(By.xpath("/html/body/div[5]/div[2]/div/div/div[2]/button[2]")).click();
  // await driver.findElement(By.name("")).click();
  // setTimeout(function waitSixtySeconds() {
  //     console.log('sixty')
  //     }, 60000)

  //@amazon login
  // await driver.wait(until.t)
  // await driver.wait(urlIs('https://web.telegram.org/?legacy=1#/im'))/
  // await driver.wait(until.elementLocated(By.name('try_desktop_text')), 30000)
  // try {
  // await driver.get("https://web.telegram.org/?legacy=1#/im?p=@All1App");
  // await driver.get("https://www.amazon.in/");
  // await driver.get("https://web.whatsapp.com/");
  // await driver.get("https://chat.whatsapp.com/J1JAPHSgHgE3bBVYkv0KPp");
  // >50 whatsapp : await driver.get("https://web.whatsapp.com/accept?code=DSyvXzBJuax5uJ6MFylXJk");
  // inp_xpath_search = "//input[@title='Search or start new chat']"
  // input_box_search = WebDriverWait(driver,50).until(lambda driver: driver.find_element_by_xpath(inp_xpath_search))

  // await
  // input_box_search.click();
  // time.sleep(2)
  // await driver.sleep(5000);
  // input_box_search.send_keys(contact)
  // await driver.findElement(By.xpath('//*[@id="side"]/div[1]/div/div/div[2]/div/div[2]').sendKeys("hai",Key.RETURN));
  // await driver.wait(until.elementLocated(By.name('try_desktop_text')), 30000)
  // await driver.findElement(By.xpath('//div[@class="_2S1VP copyable-text selectable-text"][@contenteditable="true"][@data-tab="1"]')).sendKeys("hai",Key.RETURN);

  // await driver.get("https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp");
  // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),10000);
  // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys("namasthe",Key.RETURN);

  // await driver.sleep(5000);
  // time.sleep(2)

  // await driver.findElement(By.id("action-button")).click();
  // await driver.sleep(10000);
  // await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[4]/div/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).click();
  // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).click();
  //     await driver.actions()
  // .keyDown(Key.CONTROL)
  // .keyDown('v')
  // .keyUp(Key.CONTROL)
  // .perform()
  // await driver.actions()
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .keyDown(Key.TAB)
  // .keyUp(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.TAB)
  // .sendKeys(Key.DOWN)
  // .sendKeys(Key.DOWN)
  // .sendKeys('hai')
  // .sendKeys(Key.RETURN)
  // .perform()

  // await driver.findElement(By.xpath('//*[@id="top-of-page"]/div[1]/div[1]/div[1]/header/div/div[2]/span[1]/a[1]')).click();
  // await driver.findElement(By.id("action-button")).click();
  // await driver.sleep(2000);
  // await driver.actions()
  // .keyDown(Key.CONTROL)
  // .keyDown('v')
  // .keyUp(Key.CONTROL)
  // .perform()

  // await driver.sleep(5000);
  // await driver.actions()
  // .sendKeys("hai")
  // .sendKeys(Key.RETURN)
  // .perform()
  //Amazon Login
  await driver.get("https://amazon.in");
  await driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
  await driver
    .findElement(By.id("ap_email"))
    .sendKeys("Avinash1Affiliate@gmail.com");
  await driver.findElement(By.id("continue")).click();
  await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
  await driver.findElement(By.id("signInSubmit")).click();
  await driver.sleep(1000);
  
  
  //earnkaro login
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
  // await driver.actions()
  //     .keyDown(Key.CONTROL)
  //     // .keyDown(Key.TAB)
  //     .sendKeys('t')
  //     .keyUp(Key.CONTROL)
  //     // .keyUp(Key.TAB)
  //     // .sendKeys('b')
  //     .perform()

  let linkvalue;
  let otherUrls = "";
  let itemText = "";
  let itemTipe = "";
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
  // await driver.get("https://amzn.eu/d/fvjhOPh");
  let i = 0,
    j = 0;
  // let Links = "https://amzn.eu/d/fvjhOPh"
  let Links;
  // let Links = "http://google.com";
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
  let itemcategory = "";
  let price = "",
    pricenum = 0;
  let id = 0;
  let len = 0;
  let idlen =
    "https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json";
  let access_token =
    "EAAKw6ZAutPZBoBAFhbJxab6tjDlZCCZAEjzdZAQTXXhTU6xyj3NfVJq3MM299PyAsJOBFrGLNKZCp61ktBLdhzBmqpLCeK4vjG0OisdWsZBy2xnbfl09eXXw57d2JUhXumCgDNSUGE9XSKVHSZCoVZB5zSmxHFL8xeZBZAYIbGbLZAXkunmNr3KiVEZAH0s8iINZB9ZC4dDjebEhAzE8VZCZA3EOzCU7B";
  let mention = "";
  // Links = Input[0].text_entities[1].text;
  // Links = Input.messages[0].text_entities[1].text;
  len = firebaseget();
  for (i = 0; i < Input.length; i++) {
    // for (i=1;i<Input.messages.length;i++){
    discount = "";
    photo = "";
    watscode = "";
    price = "";
    disco = 0;
    pricenum = 0;
    caption = "";
    disc = false;
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
    c1 = "";
    c2 = "";
    c3 = "";
    c4 = "";
    c5 = "";
    if (Input[i] != undefined)
      if (Input[i].text_entities != undefined)
        try {
          for (j = 0; j < Input[i].text_entities.length; j++) {
            // for (j=0;j<Input.messages[i].text_entities.length;j++){
            // await driver.get("http://google.com");

            // await driver.findElement(By.name("q")).click();
            // await driver.findElement(By.name("q")).sendKeys(Key.F6);
            // await driver.actions()
            //         .sendKeys(Input[i].type)
            //         .sendKeys(Input[i].text_entities[j].text)
            //         .perform()
            // await driver.findElement(By.name("q")).sendKeys(Key.RETURN);

            // Links = Input[i].text_entities[j].text;

            //@ New Tab Copy
            // if (Input.messages[i].text_entities[j].type!="link"){
            try {
              if (Input[i].photo != "") {
                // photo = Input[i].photo
              }
              // if (Input[i].text_entities[j].type!="link"){
              if (!Input[i].text_entities[j].type.includes("link")) {
                if (Input[i].text_entities[j].type == "mention") {
                  mention = Number(Input[i].text_entities[j].text.substring(1));
                  continue;
                }
                if (Input[i].from.includes("All1App")) {
                  if (Input[i].text_entities[j].text.includes("#")) {
                    //changed on 1-12-22
                    // break;
                    continue;
                  }
                }

                // await driver.get("https://www.youtube.com");
                //     await driver.actions()
                // .keyDown(Key.CONTROL)
                // // .keyDown(Key.TAB)
                // .sendKeys('t')
                // .keyUp(Key.CONTROL)
                // // .keyUp(Key.TAB)
                // // .sendKeys('b')
                // .perform()

                //using browser
                // await driver.get("http://duckduckgo.com");
                // await driver.findElement(By.name("q")).sendKeys(Input[i].text_entities[j].text,Key.RETURN);

                // try{
                // }
                // catch(error){
                //     console.log(error);
                //     continue;
                // }

                //@get value
                // urlvalue = await driver.findElement(By.name("q")).getAttribute("value");
                if (Input[i].from.includes("Telugu Tech World")) {
                }
                // urlvalue = Input[i].text_entities[j].text;
                // console.log("plain text \n")
                // console.log(urlvalue);

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
                  Input[i].text_entities[j].text = Input[i].text_entities[
                    j
                  ].text.replaceAll("Looot", "");
                }
                text = text + Input[i].text_entities[j].text + "\n";
                btext = btext + Input[i].text_entities[j].text + "\n";
                if (Input[i].text_entities[j].type == "mention") {
                  text = text + "\n";
                  btext = btext + "\n";

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
              // else if(Input[i].text_entities[j].type.includes("link") && !Input[i].text_entities[j].href.includes("amzn")){ //telugu deals

              //@Before Blocking Code
              // else if(Input[i].from == "all1appdaily"){
              //   text = text + `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
              // }



              else if ((Input[i].text_entities[j].type.includes("link")) && (!(Input[i].text_entities[j].text.includes("amzn")))) {
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type.includes("link"));
                console.log("value Other than Amzn Links",Input[i].text_entities[j].type);
                console.log("Amazon value Amzn Links ",(Input[i].text_entities[j].text));
                console.log("Amazon value Amzn Links ",!(Input[i].text_entities[j].text.includes("amzn")));
                
                if(!Input[i].from.includes("All1App")){
                  console.log("Entered into Other than Amzn Links");
                // console.log('All including  Amzn Links');
                await driver.get(Input[i].text_entities[j].text);
                // otherurl = await driver.get();
                let strUrl = await driver.getCurrentUrl();
                console.log('Other than Amazon Url is ',strUrl);
                if(strUrl.includes("flipkart")){
                  itemType = "flipkart"
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
                  if(discount == "" || discount == NaN || discount == undefined){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 2nd")
                    }
                  }
                  if(discount == "" || discount == NaN || discount == undefined){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[2]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 3rd")
                    }
                  }
                  if(discount == ""|| discount == NaN || discount == undefined){
                    try{
                    discount = await driver.findElement(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[3]/div[1]/div/div[3]/span')).getAttribute("innerHTML");
                    }
                    catch(e){
                      console.log("Flipkart discount 4th")
                    }
                  }
                  if(discount == ""|| discount == NaN || discount == undefined){
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
                  itemType = myntra

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
                
                otherUrls = otherUrls + strUrl + "\n"
                
                await driver.get("https://earnkaro.com/create-earn-link");
                await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                
                await driver
                .findElement(By.id("Btn_Make_Profit_Button"))
                .click();
                // await driver.findElement(By.id("deallink")).click();
                await driver.findElement(By.id("deallinkshorturl")).getAttribute("value").then(function(webElement) {
                  console.log('deal exists');
                  earnlink = webElement;
                  console.log('earnlink is '+earnlink);
                }, function(err) {
                  if (err.state && err.state === 'no such element') {
                    console.log('Deal not found');
                  }
                });
                console.log('earn link is '+earnlink);
                await driver.findElement(By.id("Copy_Link_make")).click();
                // text = discount + "% off on " + text + "price is " + price
                
                
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
                itemText = itemText +" "+ earnlink;
                if(itemText.includes("&amp;")){
                  itemText = itemText.replaceAll("&amp;","&")
                }
                // photo="https://m.media-amazon.com/images/I/91pIt7I-aVL._SY450_.jpg"
                telegram(photo,"@all1app",itemText);//to be reverted
                telegram(photo,"@all1appweb",itemText);
                if(photo != "" && photo.length <300 && pricenum>0 && disco>0){
                  telegram(photo,"@all1appdaily",text + "\n"+ earnlink +"\n" + itemcategory +"\n"+"itemTipe" + itemType);

                }
                console.log('Called telegram for other than amazon')
                text = "";
                btext = "";
                photo = "";
                console.log('Clearing all the values')
                // continue;//new change 14th Nov
                break;
              }
              }

              //old other than amazon
              // else if (
              //   Input[i].text_entities[j].type.includes("link") &&
              //   !Input[i].text_entities[j].text.includes("amzn")
              // ) {
              //   //generic

              //   // else if(Input[i].text_entities[j].type.includes("link") ){ //for all(amazon and generic - ekaro)
              //   // else if((Input[i].text_entities[j].type.includes("link")) && (
              //   // (Input[i].from.includes("Telugu Tech World") &&  !Input[i].text_entities[j].href.includes("amzn"))
              //   // (!Input[i].from.includes("Telugu Tech World") && Input[i].text_entities[j].text.includes("amzn")))){
              //   console.log("Other than Amzn Links");
              //   // console.log('All including  Amzn Links');
              //   // await driver.get(Input[i].text_entities[j].text);
              //   // otherurl = await driver.get(await driver.);
              //   // otherurl = await driver.get((await driver.getCurrentUrl()));
              //   // await driver.get
              //   // console.log('otherurl is '+String(otherurl));
              //   // await driver.get("https://earnkaro.com/create-earn-link");
              //   // await driver.findElement(By.id("deallink")).click();
              //   if (Input[i].text_entities[j].text.includes("amzn")) {
              //     // await driver.actions()
              //     // .sendKeys(Input[i].text_entities[j].text)
              //     // .sendKeys(String(otherurl))
              //     // .sendKeys(Input[i].text_entities[j].href) //telugu deals
              //     // .perform()
              //   } else {
              //     console.log("Other than Amazon");
              //     // break;
              //   }
              //   await driver
              //     .findElement(By.id("Btn_Make_Profit_Button"))
              //     .click();
              //   // await driver.findElement(By.id("deallink")).click();
              //   //   earnlink = await driver.findElement(By.id("deallinkshorturl")).getAttribute("value").then(function(webElement) {
              //   //     console.log('deal exists');
              //   //     earnlink = webElement;
              //   //     console.log('earnlink exception is '+earnlink);
              //   // }, function(err) {
              //   //     if (err.state && err.state === 'no such element') {
              //   //         console.log('Deal not found');
              //   //     }
              //   // });
              //   // console.log('earn link is '+earnlink);
              //   // await driver.findElement(By.id("Copy_Link_make")).click();

              //   // text = text + earnlink;
              //   text = "";
              //   btext = "";
              //   photo = "";
              //   // continue;//new change 14th Nov
              //   break;
              // }





              Links = Input[i].text_entities[j].text;
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

              // await driver.findElement(By.id("landingImage")).click();
              // await driver.findElement(By.id("ivLargeImage")).click(Button.RIGHT);
              // await driver.actions()
              // .right_action.ContextClick("ivLargeImage").SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ENTER).Build().Perform();

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
              //   await driver.moveToElement
              // await driver.actions().moveToElement(By.id("landingImage")).ContextClick()
              // .keyDown(Key.DOWN)
              // .keyUp(Key.DOWN)
              // .keyDown(Key.DOWN)
              // .keyUp(Key.DOWN)
              // .keyDown(Key.DOWN)
              // .keyUp(Key.DOWN)
              // .sendKeys(Key.RETURN)
              // .Build().Perform();
              //   await driver.findElement(By.id("landingImage")).then(function(webElement) {

              //   }, function(err) {
              //     if (err.state && err.state === 'no such element') {
              //         console.log('Image not found so cleared all details');

              //         //without image
              //         text = "";
              //         btext = "";
              //         photo = "";
              //       }
              //     // else {
              //     //     webdriver.promise.rejected(err);
              //     // }
              // });
              // try{
              // <img src=`./${Input[i].photo}` id="imgage" />
              // photo = document.getElementById("imgage")
              //Not Working
              // photo=require(`./${Input[i].photo}`)
              // console.log('photo in require is '+photo)
              // console.log('Require image success')
              // }
              // catch(e){
              // console.log('photo in require is '+photo)
              // console.log('error in photo require is '+e)
              // console.log('Require image fail')
              // }
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
              // console.log('image: '+photo)
              try {
                discount = await driver
                  .findElement(
                    By.xpath(
                      '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]'
                    )
                  )
                  .getAttribute("innerHTML");
                // discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("src");
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]
                // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                if (discount == "") {
                  await driver
                    .findElement(
                      By.xpath(
                        "/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]"
                      )
                    )
                    .getAttribute("innerHTML")
                    .then(
                      function (webElement) {
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
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                } catch (e) {
                  console.log("Price New Error");
                }
                if (price.length > 10) {
                  let pricecheck = "";
                  pricecheck = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]'
                      )
                    )
                    .getAttribute("innerHTML");
                  if (pricecheck != "") {
                    price = pricecheck;
                  }
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
                if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]'
                      )
                    )
                    .getAttribute("innerHTML");
                }
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[1]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                else if (price == "") {
                  price = await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          "/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]"
                        )
                      ),
                      5000
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML");
                  // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                  //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                } else if (price == "") {
                  price = await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'
                        )
                      ),
                      5000
                    )
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver
                    .findElement(By.className("a-price-whole"))
                    .getAttribute("innerHTML");
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
                } else if (price == "") {
                  await driver
                    .findElement(
                      By.xpath(
                        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'
                      )
                    )
                    .getAttribute("innerHTML")
                    .then(
                      function (webElement) {
                        //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]
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
              } catch (e) {
                console.log(e);
              }
              try {
                if (price.includes(",")) {
                  price = price.replaceAll(",", "");
                }
                if (price.includes("₹")) {
                  price = price.replaceAll("₹", "");
                }
                for (let k = 0; k < price.length; k++) {
                  if (Number.isInteger(Number(price[k]))) {
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
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[1]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[2]/span')
                      )
                      .getAttribute("innerHTML"));
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
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[4]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[5]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[6]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[7]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[8]/span')
                      )
                      .getAttribute("innerHTML"));
                  itemcategory = itemcategory.trim() + " ";
                  // itemcategory = itemcategory+"\n";
                  itemcategory =
                    itemcategory +
                    "#" +
                    (await driver
                      .findElement(
                        By.xpath('//*[@id="feature-bullets"]/ul/li[9]/span')
                      )
                      .getAttribute("innerHTML"));
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
                  await driver.sleep(1200);
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
                    await driver.sleep(1000);
                    // await driver.findElement(By.id("a-autoid-1-announce")).click();
                    try {
                      console.log("Calling Text Link try inside catch");
                      await driver
                        .findElement(By.id("a-autoid-1-announce"))
                        .click();
                      await driver.sleep(1000);
                    } catch (e) {
                      console.log("Calling Text Link Catch inside catch");
                      await driver
                        .findElement(By.id("amzn-ss-text-link"))
                        .click();
                      await driver.sleep(1000);
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
                      await driver.sleep(600);
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
                      // .keyDown(Key.UP)
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

                  await driver.sleep(600);
                  // await driver.sleep(200);
                  await driver
                    .findElement(By.id("amzn-ss-get-link-btn-text-announce"))
                    .click();
                  await driver.sleep(600);
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
                  await driver.sleep(800);
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

                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();
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

                  await driver
                    .findElement(By.id("amzn-ss-text-shortlink-textarea"))
                    .click();

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
                    urlvalue1 = "";
                    // console.log("Link Appended");
                    // btext = btext + urlvalue1+"\n" + "\n" + itemcategory + "\n";

                    // if(btext.length>99)
                    //   btext = text.substring(0,99);
                  } else {
                    console.log("Telegram Link else");
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
                        t1 =
                          disco +
                          "% off on" +
                          t1 +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
                        // t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
                        telegram(photo, "@all1app", t1);
                        let link = `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
                        if (disco >= 75) {
                          telegram(photo, "@all1appdeals", t1);
                          if (t1.includes("affiliiate")) {
                            fbdata = facebook(photo, link, t1);
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
                        t1 =
                          disco +
                          "% off on" +
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
                          "% off on" +
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
                          "% off on" +
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
                          "% off on" +
                          text +
                          "\n\nDeal Price: " +
                          pricenum +
                          "\n " +
                          `https://affiliiate-app.firebaseapp.com/avideals${l}/product/${Input[i].id}`;
                        telegram(photo, `@avideals${l}`, t1);
                        t1 = "";
                    }
                  }
                  // text = ta;
                } catch (e) {
                  console.log(e);
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
                // text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
                break; //@for now
                // text = text + `+"\n";
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
              //     text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
              //     break; //@for now
              //     // text = text + `+"\n";
              //   }
              //   }
              //   catch(e){
              //     console.log(e);
              //   }

              // await driver.get(Links);
              // await driver.findElement(By.id("landingImage")).click();
              try {
                await driver
                  .actions()
                  .right_action.ContextClick("landingImage")
                  .SendKeys(Key.ARROW_DOWN)
                  .SendKeys(Key.ARROW_DOWN)
                  .SendKeys(Key.ARROW_DOWN)
                  .SendKeys(Key.ENTER)
                  .Build()
                  .Perform();
              } catch (e) {
                console.log("Context Click error");
              }

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
              console.log(error);
              continue;
            }
          } //j loop ends
        } catch (e) {}

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
    // if(discount>=60){
    //   text = "💥"+text
    //   btext = "💥"+btext
    // }
    // if(discount>=75){
    //   text = "💥💥"+texttelegram(photo,chatId,text);
    //   btext = "💥💥"+btext

    // }

    // telegram(photo,"@adddeals",text);
    // whatsapp("FfH1v13f7dVA5ZHVvzEW3E",text);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      console.log("Len of Firebase is", len);
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            chatId = "@all1appdaily";
            console.log("calling all1appdaily");
            if(disco>0)
            telegram(photo, chatId, text);
            try {
              var app = JSON.stringify({
                id: id++,
                idlen: idlen.length,
                idlength: len++,
                date: Input[i].date.split("T")[0],
                // date: new date(),
                photo: photo,
                // text: text,
                urltext: urltext,
                price: pricenum,
                discount: disco,
                category: {
                  mainCategory: "",
                  c1: c1,
                  c2: c2,
                  c3: c3,
                  c4: c4,
                  c5: c5,
                },
                links: {
                  avinashbmv: avinashbmv,
                  bmvavinash: bmvavinash,
                  offers: offers,
                  avideals: avideals,
                  avideals5: avideals5,
                  avideals6: avideals6,
                  avideals7: avideals7,
                  avideals8: avideals8,
                  avideals9: avideals9,
                  avideals10: avideals10,
                  avideals11: avideals11,
                  avideals12: avideals12,
                  avideals13: avideals13,
                  avideals14: avideals14,
                  avideals15: avideals15,
                },
              });
              console.log("calling firebase");
              console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              firebase(app);
            } catch (e) {
              console.log("firebase error", e);
            }
          }
      //changed for All1App
    } catch (e) {
      console.log("Telegram Error");
    }
    console.log("Len of Firebase outside is", idlen.length);

    var raw = JSON.stringify({
      // photo: "https://m.media-amazon.com/images/I/61URvoFTTEL._SY355_.jpg",
      // photo: "/"+Input[i].photo,
      // photo: 'F:/Study/Affiliate/selenium/Selenium Example/'+Input[i].photo,
      // photo: "F:\\Study\\Affiliate\\selenium\\Selenium Example\\photos\\photo_26290@29-10-2022_00-06-21.jpg",
      // chat_id: "@all1app",
      photo: photo,
      chat_id: chatId,
      caption: text,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    let output = false;
    if (photo != "") {
      console.log("with photo");
      await fetch(
        // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
        //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
        //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log("success", result);
          //   console.log('hai'+JSON.stringify(result).includes("false"));
          output = JSON.stringify(result).includes("false");
        })
        .catch((error) => console.log("error", error));

      if (output) {
        await fetch(
          // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
          //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
          //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
          //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
          //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log("success", result);
            //   console.log('hai'+JSON.stringify(result).includes("false"));
            console.log("re api 1st");
            output = JSON.stringify(result).includes("false");
          })
          .catch((error) => console.log("error", error));
      }
      //@whatsapp
      if (Input[i].from.includes("All1App")) {
        // watscode = "FfH1v13f7dVA5ZHVvzEW3E";
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
              // 30000
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
        // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
      }
    } else {
      console.log("without photo");
      await fetch(
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chat_id}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
        //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
        //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log("success", result))
        .catch((error) => console.log("error", error));

      //@Whatsapp
      try {
        if (Input[i] != undefined)
          if (Input[i].from != undefined)
            if (Input[i].from.includes("All1App")) {
              // watscode = "FfH1v13f7dVA5ZHVvzEW3E";
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
                await driver.sleep(3500);
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
          chatId = "@all1app";
          watscode = "FfH1v13f7dVA5ZHVvzEW3E";
          console.log("with photo");
          // telegram(photo,chatId,text);
          await fetch(
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              console.log("success", result);
              //   console.log('hai'+JSON.stringify(result).includes("false"));
              console.log("re api 2nd");
              output = JSON.stringify(result).includes("false");
            })
            .catch((error) => console.log("error", error));

          if (output) {
            await fetch(
              // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
              //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
              //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
              //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
              //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                console.log("success", result);
                //   console.log('hai'+JSON.stringify(result).includes("false"));
                output = JSON.stringify(result).includes("false");
              })
              .catch((error) => console.log("error", error));
          }
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
              await driver.sleep(3500);
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
          await fetch(
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chat_id}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
            //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => console.log("success", result))
            .catch((error) => console.log("error", error));

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
    //Telegram Bot for bmvavinash deals

    //Need to Change
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            // telegram(photo, "@all1appdaily", text);
            if(disco>0)
            telegram(photo, "@all1appweb", text);
            console.log("entered into all1app web");
            var raw = JSON.stringify({
              // photo: "https://m.media-amazon.com/images/I/61URvoFTTEL._SY355_.jpg",
              // photo: "/"+Input[i].photo,
              // photo: 'F:/Study/Affiliate/selenium/Selenium Example/'+Input[i].photo,
              // photo: "F:\\Study\\Affiliate\\selenium\\Selenium Example\\photos\\photo_26290@29-10-2022_00-06-21.jpg",
              // chat_id: "@all1app",
              photo: photo,
              chat_id: "@all1appweb",
              caption: btext,
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
            };
            console.log("all1app web data");
            let chatid = "@all1appweb";
            await fetch(
              // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
              //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
              //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
              //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
              //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                console.log("success", result);
                //   console.log('hai'+JSON.stringify(result).includes("false"));
                console.log("re api 2nd");
                output = JSON.stringify(result).includes("false");
              })
              .catch((error) => console.log("error", error));

            if (output) {
              await fetch(
                // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
                //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
                //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
                requestOptions
              )
                .then((response) => response.text())
                .then((result) => {
                  console.log("success", result);
                  //   console.log('hai'+JSON.stringify(result).includes("false"));
                  output = JSON.stringify(result).includes("false");
                })
                .catch((error) => console.log("error", error));
            }
          }
    } catch (e) {
      console.log(e);
    }

    myHeaders = "";
    // const jsonData =
    //     {
    //         "photo": "https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg",
    //         "chat_id": "@all1app",
    //         "caption": "https://amzn.to/3h23vHh"
    //         // "parse_mode": "html"

    //     }

    //     const jsonResponse = await fetch(`https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo=${photo}`,{method: 'POST', body: jsonData});

    //     const data = await jsonResponse.json();

    // console.log(data);

    // fetch( 'jsonData.json' )
    // // fetch( 'https://flipkart.com/path/?param1=value1&param2=value2' )
    // .then( response => response.json() )
    // .then( response => {
    //     // Do something with response.
    // } );

    try {
      xhr.send();
    } catch (error) {
      usedget++;
      // await driver.get(resres);
    } finally {
      try {
        // await driver.get("https://api.whatsapp.com/send?phone=9866017750");
        // await driver.get(`https://wa.me/919866017750?text=completed${Input[0].from}`);
      } catch (e) {
        console.log("Wats Finally Error");
      }
    }
    // let response = resres.response;
    // let response = xhr.response;
    // console.log(response)
    // if(response == 'undefined')
    // {
    //     getcount++;
    // }

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
    // break;
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
