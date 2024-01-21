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
async function example() {
  //     driver = await new Builder()
  //   .forBrowser('chrome')
  //   .setChromeOptions(new Options().chrome())
  //   .build()

  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  driver = await chrome.Driver.createSession(options);

  //@Firefox
  //version change error change the lib dir of chromedriver(not bin) with new chromedriver exe
  // driver = await new Builder().forBrowser("firefox").build();

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
        "id": 86716,
        "type": "message",
        "date": "2023-06-12T12:58:14",
        "date_unixtime": "1686554894",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1001,
        "height": 427,
        "text": [
         "Flat 50% Off On ",
         {
          "type": "bold",
          "text": "Woodland"
         },
         " Shoes & Sandals\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43QO9IU"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flat 50% Off On "
         },
         {
          "type": "bold",
          "text": "Woodland"
         },
         {
          "type": "plain",
          "text": " Shoes & Sandals\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43QO9IU"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86717,
        "type": "message",
        "date": "2023-06-12T12:58:40",
        "date_unixtime": "1686554920",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 480,
        "text": [
         "Lifelong Air Fryer 4L @ ₹2999🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/HixD0m"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Air Fryer 4L @ ₹2999🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/HixD0m"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86718,
        "type": "message",
        "date": "2023-06-12T12:59:03",
        "date_unixtime": "1686554943",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1138,
        "height": 586,
        "text": [
         "Metronaut Men Tshirt (Pack Of 3) @ ₹399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ae7ULn"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut Men Tshirt (Pack Of 3) @ ₹399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ae7ULn"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86719,
        "type": "message",
        "date": "2023-06-12T12:59:43",
        "date_unixtime": "1686554983",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1177,
        "height": 567,
        "text": [
         "▶️ ",
         {
          "type": "bold",
          "text": "Real Masala Guava Juice, 1L (Pack of 2) @ ₹140\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3J7HUZt"
         },
         "\n\n▶️ ",
         {
          "type": "bold",
          "text": "Real Fruit Juice, Masala Pomegranate, 1L (Pack of 2) @ ₹140\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3P3PvMb"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "▶️ "
         },
         {
          "type": "bold",
          "text": "Real Masala Guava Juice, 1L (Pack of 2) @ ₹140\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J7HUZt"
         },
         {
          "type": "plain",
          "text": "\n\n▶️ "
         },
         {
          "type": "bold",
          "text": "Real Fruit Juice, Masala Pomegranate, 1L (Pack of 2) @ ₹140\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P3PvMb"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86720,
        "type": "message",
        "date": "2023-06-12T13:00:06",
        "date_unixtime": "1686555006",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1147,
        "height": 582,
        "text": [
         "Women Sling Bag From ₹107\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/oguwgy"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/3IkIBf"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Women Sling Bag From ₹107\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/oguwgy"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/3IkIBf"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86721,
        "type": "message",
        "date": "2023-06-12T13:00:28",
        "date_unixtime": "1686555028",
        "edited": "2023-06-12T15:51:47",
        "edited_unixtime": "1686565307",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1246,
        "height": 507,
        "text": [
         "Stainless Steel Bottle Hot & Cold Double Wall Vacuum Insulated Flask 1L @ ₹514\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3P8eNJc"
         },
         "\n\n❌ Regular price @ ₹799\n\n",
         {
          "type": "bold",
          "text": "💡 Apply 5% coupon"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Stainless Steel Bottle Hot & Cold Double Wall Vacuum Insulated Flask 1L @ ₹514\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P8eNJc"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799\n\n"
         },
         {
          "type": "bold",
          "text": "💡 Apply 5% coupon"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86722,
        "type": "message",
        "date": "2023-06-12T13:00:45",
        "date_unixtime": "1686555045",
        "edited": "2023-06-12T19:51:53",
        "edited_unixtime": "1686579713",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 499,
        "text": [
         "DURACELL Ultra Alkaline AA Battery  (Pack of 20) @ ₹400\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/yc3ivE"
         },
         "\n\n❌ Regular price @ ₹799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "DURACELL Ultra Alkaline AA Battery  (Pack of 20) @ ₹400\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/yc3ivE"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799"
         }
        ]
       },
       {
        "id": 86723,
        "type": "message",
        "date": "2023-06-12T13:01:08",
        "date_unixtime": "1686555068",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 515,
        "text": [
         "Loot 🚀 🚀 boAt PartyPal 20 15 Watt Wireless Bluetooth Party Speaker @ ₹1,999\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43SH8Hx"
         },
         "\n\n❌ Regular price @ ₹2,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 boAt PartyPal 20 15 Watt Wireless Bluetooth Party Speaker @ ₹1,999\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43SH8Hx"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,999"
         }
        ]
       },
       {
        "id": 86724,
        "type": "message",
        "date": "2023-06-12T13:01:25",
        "date_unixtime": "1686555085",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 528,
        "text": [
         "Loot 🚀 🚀 Noise NoiseFit Endure Smart Watch @ ₹999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/bWimC5"
         },
         "\n\n❌ Regular @ ₹2,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Noise NoiseFit Endure Smart Watch @ ₹999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/bWimC5"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular @ ₹2,999"
         }
        ]
       },
       {
        "id": 86725,
        "type": "message",
        "date": "2023-06-12T13:01:44",
        "date_unixtime": "1686555104",
        "edited": "2023-06-12T14:32:27",
        "edited_unixtime": "1686560547",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1217,
        "height": 575,
        "text": [
         "Qisa By Lavie Handbags From ₹439\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/eYXQU6"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Qisa By Lavie Handbags From ₹439\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/eYXQU6"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86726,
        "type": "message",
        "date": "2023-06-12T13:02:08",
        "date_unixtime": "1686555128",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1128,
        "height": 627,
        "text": [
         "Safari 26 / 30 L Backpacks Starts @ 575\n\n",
         {
          "type": "link",
          "text": "https://extp.in/RMO99L"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Safari 26 / 30 L Backpacks Starts @ 575\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/RMO99L"
         }
        ]
       },
       {
        "id": 86727,
        "type": "message",
        "date": "2023-06-12T13:02:31",
        "date_unixtime": "1686555151",
        "edited": "2023-06-13T01:57:40",
        "edited_unixtime": "1686601660",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1102,
        "height": 587,
        "text": [
         "Flying Machine Casual Shirts From ₹441\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/V7YpHA"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flying Machine Casual Shirts From ₹441\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/V7YpHA"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86728,
        "type": "message",
        "date": "2023-06-12T13:03:30",
        "date_unixtime": "1686555210",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 528,
        "text": [
         "Loot 🚀 🚀 Levi's Men Briefs and Vest\n\npack of 2 at ₹225\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3N3LNQ1"
         },
         "\n\nPack of 3 at ₹308\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/42yP7IW"
         },
         " \n\nPack of 2 at ₹225 \n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3N1wd7M"
         },
         "\n\nPack of 1 stats at ₹136\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3p1hgun"
         },
         "\n\nPack of 2 Vest at ₹232\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3MZqnDP"
         },
         "\n\nCheck all size and color"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Levi's Men Briefs and Vest\n\npack of 2 at ₹225\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N3LNQ1"
         },
         {
          "type": "plain",
          "text": "\n\nPack of 3 at ₹308\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42yP7IW"
         },
         {
          "type": "plain",
          "text": " \n\nPack of 2 at ₹225 \n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N1wd7M"
         },
         {
          "type": "plain",
          "text": "\n\nPack of 1 stats at ₹136\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3p1hgun"
         },
         {
          "type": "plain",
          "text": "\n\nPack of 2 Vest at ₹232\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZqnDP"
         },
         {
          "type": "plain",
          "text": "\n\nCheck all size and color"
         }
        ]
       },
       {
        "id": 86729,
        "type": "message",
        "date": "2023-06-12T13:03:54",
        "date_unixtime": "1686555234",
        "edited": "2023-06-12T13:05:07",
        "edited_unixtime": "1686555307",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 478,
        "text": [
         "▶️ PHILIPS 5W Rechargeable LED 4.5 hr Emergency Light @ ₹649\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/dGtmOV"
         },
         "\n\n_________________________________\n\n▶️ PHILIPS Multi-Functional Rechargeable LED Torch with Emergency Light @ ₹699\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/vzEYia"
         },
         "\n\n\n❌ Regular price @ ₹1,300"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "▶️ PHILIPS 5W Rechargeable LED 4.5 hr Emergency Light @ ₹649\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/dGtmOV"
         },
         {
          "type": "plain",
          "text": "\n\n_________________________________\n\n▶️ PHILIPS Multi-Functional Rechargeable LED Torch with Emergency Light @ ₹699\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/vzEYia"
         },
         {
          "type": "plain",
          "text": "\n\n\n❌ Regular price @ ₹1,300"
         }
        ]
       },
       {
        "id": 86730,
        "type": "message",
        "date": "2023-06-12T13:05:06",
        "date_unixtime": "1686555306",
        "edited": "2023-06-12T16:35:25",
        "edited_unixtime": "1686567925",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 498,
        "text": [
         "Loot 🚀 🚀 WONDERCHEF Glass Manual Gas Stove  (2 Burners) @ ₹1,299\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/Hw4b2F"
         },
         "\n\n❌ Regular price @ ₹2,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 WONDERCHEF Glass Manual Gas Stove  (2 Burners) @ ₹1,299\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/Hw4b2F"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,299"
         }
        ]
       },
       {
        "id": 86731,
        "type": "message",
        "date": "2023-06-12T13:05:26",
        "date_unixtime": "1686555326",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 514,
        "text": [
         "500 Watts Mixer Grinder With 3 Jars @ ₹999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ne5RhJ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "500 Watts Mixer Grinder With 3 Jars @ ₹999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ne5RhJ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86732,
        "type": "message",
        "date": "2023-06-12T13:05:46",
        "date_unixtime": "1686555346",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1206,
        "height": 550,
        "text": [
         "Loot 🚀 🚀 Havells 1600 Watts Unisex Foldable Hair Dryer @ ₹850\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/42ymrQ7"
         },
         "\n\n❌ Regular price @ ₹1,499"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Havells 1600 Watts Unisex Foldable Hair Dryer @ ₹850\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ymrQ7"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,499"
         }
        ]
       },
       {
        "id": 86733,
        "type": "message",
        "date": "2023-06-12T13:06:24",
        "date_unixtime": "1686555384",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1203,
        "height": 511,
        "text": [
         {
          "type": "underline",
          "text": "Electric Toothbrush Deals Under ₹399\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Caresmith SPARK One @ ₹349\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3p6ytlY"
         },
         "\n__________________________\n\n",
         {
          "type": "bold",
          "text": "▶️ beatXP Buzz With 2 Brush Heads @ ₹399\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43AIG9i"
         },
         "\n__________________________\n\n",
         {
          "type": "bold",
          "text": "▶️ Lifelong Ultra Sonic Care @ ₹399\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43CyGwy"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "underline",
          "text": "Electric Toothbrush Deals Under ₹399\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Caresmith SPARK One @ ₹349\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3p6ytlY"
         },
         {
          "type": "plain",
          "text": "\n__________________________\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ beatXP Buzz With 2 Brush Heads @ ₹399\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AIG9i"
         },
         {
          "type": "plain",
          "text": "\n__________________________\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Lifelong Ultra Sonic Care @ ₹399\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43CyGwy"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86734,
        "type": "message",
        "date": "2023-06-12T13:06:59",
        "date_unixtime": "1686555419",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         {
          "type": "bold",
          "text": "[Edit - Deal Over]"
         },
         " Pepe Jeans Women's Slim Fit Jeans @ ₹439\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3P1egc2"
         },
         "\n\n❌ Regular price @ ₹1,399"
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "[Edit - Deal Over]"
         },
         {
          "type": "plain",
          "text": " Pepe Jeans Women's Slim Fit Jeans @ ₹439\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P1egc2"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,399"
         }
        ]
       },
       {
        "id": 86735,
        "type": "message",
        "date": "2023-06-12T13:07:28",
        "date_unixtime": "1686555448",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 685,
        "text": [
         "Power Mens Shoes @ ₹628\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3qEwc23"
         },
         "\n\n❌ Regular price @ ₹1,200"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Power Mens Shoes @ ₹628\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qEwc23"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,200"
         }
        ]
       },
       {
        "id": 86736,
        "type": "message",
        "date": "2023-06-12T13:07:53",
        "date_unixtime": "1686555473",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 927,
        "height": 492,
        "text": [
         "💥 Myntra: Min 80% Off on Watches\n✅ Starting From Rs 249\n\n👉 Grab: ",
         {
          "type": "link",
          "text": "https://extp.in/S4r1x6"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥 Myntra: Min 80% Off on Watches\n✅ Starting From Rs 249\n\n👉 Grab: "
         },
         {
          "type": "link",
          "text": "https://extp.in/S4r1x6"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86737,
        "type": "message",
        "date": "2023-06-12T13:08:25",
        "date_unixtime": "1686555505",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 887,
        "height": 482,
        "text": [
         "Myntra: Up to 80% Off on Kids' Clothing\nStarting From Rs 179\n\n👉 Boys: ",
         {
          "type": "link",
          "text": "https://extp.in/CbiHVZ"
         },
         "\n\n👉 Girls: ",
         {
          "type": "link",
          "text": "https://extp.in/rfDQBM"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Up to 80% Off on Kids' Clothing\nStarting From Rs 179\n\n👉 Boys: "
         },
         {
          "type": "link",
          "text": "https://extp.in/CbiHVZ"
         },
         {
          "type": "plain",
          "text": "\n\n👉 Girls: "
         },
         {
          "type": "link",
          "text": "https://extp.in/rfDQBM"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86738,
        "type": "message",
        "date": "2023-06-12T13:12:28",
        "date_unixtime": "1686555748",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1072,
        "height": 373,
        "text": [
         "HP Wireless Keyboard + Mouse Set @ 1099\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/43VOmdO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP Wireless Keyboard + Mouse Set @ 1099\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43VOmdO"
         }
        ]
       },
       {
        "id": 86739,
        "type": "message",
        "date": "2023-06-12T13:13:54",
        "date_unixtime": "1686555834",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 907,
        "height": 380,
        "text": [
         "Spykar\nMen T-Shirts @362\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3J9MXbP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Spykar\nMen T-Shirts @362\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J9MXbP"
         }
        ]
       },
       {
        "id": 86740,
        "type": "message",
        "date": "2023-06-12T13:14:23",
        "date_unixtime": "1686555863",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 965,
        "height": 488,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/FgxV96"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/FgxV96"
         }
        ]
       },
       {
        "id": 86741,
        "type": "message",
        "date": "2023-06-12T13:14:51",
        "date_unixtime": "1686555891",
        "edited": "2023-06-12T21:40:35",
        "edited_unixtime": "1686586235",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 906,
        "height": 476,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/YaNmfU"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/YaNmfU"
         }
        ]
       },
       {
        "id": 86742,
        "type": "message",
        "date": "2023-06-12T13:20:11",
        "date_unixtime": "1686556211",
        "edited": "2023-06-12T13:31:24",
        "edited_unixtime": "1686556884",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 535,
        "text": [
         "LG (32\") HD Ready LED Smart TV @ 11,462.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/rVcFro"
         },
         "\n\nFlat ₹1250 Off With HDFC/Kotak Bank Cards.\n\nPay Using HDFC CC & Select 9 Month No Cost EMI.\n\nPro Tip : Cancel Your EMI After Delivery (Product Cost ₹11,462)."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG (32\") HD Ready LED Smart TV @ 11,462.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/rVcFro"
         },
         {
          "type": "plain",
          "text": "\n\nFlat ₹1250 Off With HDFC/Kotak Bank Cards.\n\nPay Using HDFC CC & Select 9 Month No Cost EMI.\n\nPro Tip : Cancel Your EMI After Delivery (Product Cost ₹11,462)."
         }
        ]
       },
       {
        "id": 86743,
        "type": "message",
        "date": "2023-06-12T13:20:59",
        "date_unixtime": "1686556259",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 539,
        "text": [
         "boAt 160W Bluetooth Soundbar @ 6999 + Extra 10% Bank Discount\n\n",
         {
          "type": "link",
          "text": "https://extp.in/k74JyP"
         },
         "\n\nPC : BoatOfficial Selling ",
         {
          "type": "mention",
          "text": "@8499"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt 160W Bluetooth Soundbar @ 6999 + Extra 10% Bank Discount\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/k74JyP"
         },
         {
          "type": "plain",
          "text": "\n\nPC : BoatOfficial Selling "
         },
         {
          "type": "mention",
          "text": "@8499"
         }
        ]
       },
       {
        "id": 86744,
        "type": "message",
        "date": "2023-06-12T13:21:15",
        "date_unixtime": "1686556275",
        "edited": "2023-06-12T13:34:34",
        "edited_unixtime": "1686557074",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1112,
        "height": 588,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/DnzyXA"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/DnzyXA"
         }
        ]
       },
       {
        "id": 86745,
        "type": "message",
        "date": "2023-06-12T13:21:32",
        "date_unixtime": "1686556292",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 896,
        "height": 508,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/VTnrsi"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/VTnrsi"
         }
        ]
       },
       {
        "id": 86746,
        "type": "message",
        "date": "2023-06-12T13:44:21",
        "date_unixtime": "1686557661",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1272,
        "height": 577,
        "text": [
         "Lifelong Beard Trimmer for Men @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42CuH1o"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Beard Trimmer for Men @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42CuH1o"
         }
        ]
       },
       {
        "id": 86747,
        "type": "message",
        "date": "2023-06-12T13:46:25",
        "date_unixtime": "1686557785",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1225,
        "height": 472,
        "text": [
         "ZEBRONICS Zeb-Companion 500 2.4GHz Wireless Keyboard and Mouse Set ",
         {
          "type": "mention",
          "text": "@1149"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43TtQKR"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Companion 500 2.4GHz Wireless Keyboard and Mouse Set "
         },
         {
          "type": "mention",
          "text": "@1149"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43TtQKR"
         }
        ]
       },
       {
        "id": 86748,
        "type": "message",
        "date": "2023-06-12T13:46:58",
        "date_unixtime": "1686557818",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 546,
        "text": [
         "Lifelong LLMG93 500 Watt Duos Mixer Grinder ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3oQsJwV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong LLMG93 500 Watt Duos Mixer Grinder "
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
          "text": "https://amzn.to/3oQsJwV"
         }
        ]
       },
       {
        "id": 86749,
        "type": "message",
        "date": "2023-06-12T13:47:39",
        "date_unixtime": "1686557859",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Fedra Epoch Nylon 55 litres Waterproof Strolley Duffle Bag  @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42FXzG1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fedra Epoch Nylon 55 litres Waterproof Strolley Duffle Bag  @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42FXzG1"
         }
        ]
       },
       {
        "id": 86750,
        "type": "message",
        "date": "2023-06-12T13:48:27",
        "date_unixtime": "1686557907",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1176,
        "height": 552,
        "text": [
         "ZEBRONICS Jumbo with 160 H* Playback, ENC, Gaming Mode  ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3ClYalG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Jumbo with 160 H* Playback, ENC, Gaming Mode  "
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
          "text": "https://amzn.to/3ClYalG"
         }
        ]
       },
       {
        "id": 86751,
        "type": "message",
        "date": "2023-06-12T13:48:55",
        "date_unixtime": "1686557935",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 556,
        "text": [
         "PHILIPS Full Glow Energy Saver Glass B22D Led Bulb  @369\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45RTKRb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "PHILIPS Full Glow Energy Saver Glass B22D Led Bulb  @369\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45RTKRb"
         }
        ]
       },
       {
        "id": 86752,
        "type": "message",
        "date": "2023-06-12T13:49:25",
        "date_unixtime": "1686557965",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1212,
        "height": 483,
        "text": [
         "NIVIA Enfold-01 Round Bag  @387\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3WZKaaK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "NIVIA Enfold-01 Round Bag  @387\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WZKaaK"
         }
        ]
       },
       {
        "id": 86753,
        "type": "message",
        "date": "2023-06-12T14:19:11",
        "date_unixtime": "1686559751",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 828,
        "height": 528,
        "text": [
         "Tatacliq: UP to 76% Off on Bluetooth Speakers & Sound-bars\n\n👉 Shop Now: ",
         {
          "type": "link",
          "text": "https://extp.in/5aPLgZ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tatacliq: UP to 76% Off on Bluetooth Speakers & Sound-bars\n\n👉 Shop Now: "
         },
         {
          "type": "link",
          "text": "https://extp.in/5aPLgZ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86754,
        "type": "message",
        "date": "2023-06-12T14:19:30",
        "date_unixtime": "1686559770",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1157,
        "height": 586,
        "text": [
         "Cello Casseroles From ₹340\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/fqXmJn"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Casseroles From ₹340\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/fqXmJn"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86755,
        "type": "message",
        "date": "2023-06-12T14:19:52",
        "date_unixtime": "1686559792",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1222,
        "height": 527,
        "text": [
         "AmazonBasics 4.8 Amp/24W Dual USB Car Charger @ ₹319\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/42vqDjv"
         },
         "\n\n❌ Regular price @ ₹799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AmazonBasics 4.8 Amp/24W Dual USB Car Charger @ ₹319\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/42vqDjv"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799"
         }
        ]
       },
       {
        "id": 86756,
        "type": "message",
        "date": "2023-06-12T14:21:37",
        "date_unixtime": "1686559897",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1112,
        "height": 425,
        "text": [
         "1️⃣ Butterfly Jet Elite Mixer Grinder, 750W 4 Jars @ ₹2,599 🔥\n\n",
         {
          "type": "bold",
          "text": "▶️ GET 10% Back, Upto ₹100 Pay UsIng UPI"
         },
         " (",
         {
          "type": "bold",
          "text": "MIN ORDER ₹750"
         },
         ")\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3N5i9dq"
         },
         "\n\n👉 ",
         {
          "type": "bold",
          "text": "Then Buy From Here\n"
         },
         "🔗",
         {
          "type": "link",
          "text": "https://amzn.to/4623oR5"
         },
         " \n\n👉 ",
         {
          "type": "bold",
          "text": "Im personally using this | Best value for money product\n\n"
         },
         "2️⃣ Pigeon Mixer Grinder 750W 4 Jars @ ₹2,699 🔥\n\n👉 ",
         {
          "type": "bold",
          "text": "Then Buy From Here\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3X3p8b7"
         },
         "\n\n❌Regular price @ ₹3,499"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "1️⃣ Butterfly Jet Elite Mixer Grinder, 750W 4 Jars @ ₹2,599 🔥\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ GET 10% Back, Upto ₹100 Pay UsIng UPI"
         },
         {
          "type": "plain",
          "text": " ("
         },
         {
          "type": "bold",
          "text": "MIN ORDER ₹750"
         },
         {
          "type": "plain",
          "text": ")\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N5i9dq"
         },
         {
          "type": "plain",
          "text": "\n\n👉 "
         },
         {
          "type": "bold",
          "text": "Then Buy From Here\n"
         },
         {
          "type": "plain",
          "text": "🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4623oR5"
         },
         {
          "type": "plain",
          "text": " \n\n👉 "
         },
         {
          "type": "bold",
          "text": "Im personally using this | Best value for money product\n\n"
         },
         {
          "type": "plain",
          "text": "2️⃣ Pigeon Mixer Grinder 750W 4 Jars @ ₹2,699 🔥\n\n👉 "
         },
         {
          "type": "bold",
          "text": "Then Buy From Here\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X3p8b7"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹3,499"
         }
        ]
       },
       {
        "id": 86757,
        "type": "message",
        "date": "2023-06-12T14:25:09",
        "date_unixtime": "1686560109",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1231,
        "height": 555,
        "text": [
         "Vega P1 Beard Trimmer for Men @769\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42Intt6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Vega P1 Beard Trimmer for Men @769\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42Intt6"
         }
        ]
       },
       {
        "id": 86758,
        "type": "message",
        "date": "2023-06-12T14:25:38",
        "date_unixtime": "1686560138",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1105,
        "height": 462,
        "text": [
         "TIMEWEAR Analog Men's Watch @355\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Npo0vo"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "TIMEWEAR Analog Men's Watch @355\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Npo0vo"
         }
        ]
       },
       {
        "id": 86759,
        "type": "message",
        "date": "2023-06-12T14:26:53",
        "date_unixtime": "1686560213",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 997,
        "height": 372,
        "text": [
         "Laptop Stand at Rs.199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NoDUGk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Laptop Stand at Rs.199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NoDUGk"
         }
        ]
       },
       {
        "id": 86760,
        "type": "message",
        "date": "2023-06-12T14:27:21",
        "date_unixtime": "1686560241",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 915,
        "height": 376,
        "text": [
         "Leriya Sarees @ Flat ₹199\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3P3qFw9"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Leriya Sarees @ Flat ₹199\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P3qFw9"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86761,
        "type": "message",
        "date": "2023-06-12T14:27:59",
        "date_unixtime": "1686560279",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 545,
        "text": [
         "50% Off : Dabur Toothpaste 480g (120g x 4) ‎ at ‎300.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3oYhEd3"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "50% Off : Dabur Toothpaste 480g (120g x 4) ‎ at ‎300.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oYhEd3"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86762,
        "type": "message",
        "date": "2023-06-12T14:29:21",
        "date_unixtime": "1686560361",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 465,
        "text": [
         "ASUS VivoBook K15 OLED Ryzen 7 Laptop at 54990 + Bank Offer.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/bfiKqk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ASUS VivoBook K15 OLED Ryzen 7 Laptop at 54990 + Bank Offer.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/bfiKqk"
         }
        ]
       },
       {
        "id": 86763,
        "type": "message",
        "date": "2023-06-12T14:31:23",
        "date_unixtime": "1686560483",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 512,
        "text": [
         "Cello Prima Induction Base Non-Stick Aluminium Pan Cookware Set, 3 ",
         {
          "type": "mention",
          "text": "@1439"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qt2EnN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Prima Induction Base Non-Stick Aluminium Pan Cookware Set, 3 "
         },
         {
          "type": "mention",
          "text": "@1439"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qt2EnN"
         }
        ]
       },
       {
        "id": 86764,
        "type": "message",
        "date": "2023-06-12T14:31:48",
        "date_unixtime": "1686560508",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1212,
        "height": 457,
        "text": [
         "Infinity (JBL Fuze Pint, Wireless Ultra Portable Mini Speaker @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43W5MXF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Infinity (JBL Fuze Pint, Wireless Ultra Portable Mini Speaker @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43W5MXF"
         }
        ]
       },
       {
        "id": 86765,
        "type": "message",
        "date": "2023-06-12T14:32:12",
        "date_unixtime": "1686560532",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1068,
        "height": 487,
        "text": [
         "Amazon Brand - Presto! AmazonBasics Lightweight Mini Tripod @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qHhRle"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Presto! AmazonBasics Lightweight Mini Tripod @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qHhRle"
         }
        ]
       },
       {
        "id": 86766,
        "type": "message",
        "date": "2023-06-12T14:32:30",
        "date_unixtime": "1686560550",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1231,
        "height": 442,
        "text": [
         "Pigeon Mio Nonstick Aluminium Cookware Gift Set ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44cCeWf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Mio Nonstick Aluminium Cookware Gift Set "
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
          "text": "https://amzn.to/44cCeWf"
         }
        ]
       },
       {
        "id": 86767,
        "type": "message",
        "date": "2023-06-12T14:32:55",
        "date_unixtime": "1686560575",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1206,
        "height": 532,
        "text": [
         "Tygot 10\" Portable LED Ring Light @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3J7kLWW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tygot 10\" Portable LED Ring Light @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J7kLWW"
         }
        ]
       },
       {
        "id": 86768,
        "type": "message",
        "date": "2023-06-12T14:33:14",
        "date_unixtime": "1686560594",
        "edited": "2023-06-12T14:36:20",
        "edited_unixtime": "1686560780",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1241,
        "height": 461,
        "text": [
         "NAPA HIDE Maroon Leather Wallet for Men @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3p6Bnam"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "NAPA HIDE Maroon Leather Wallet for Men @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3p6Bnam"
         }
        ]
       },
       {
        "id": 86769,
        "type": "message",
        "date": "2023-06-12T14:33:38",
        "date_unixtime": "1686560618",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1252,
        "height": 531,
        "text": [
         "Lava Probuds 21 45 Hrs Playtime  @949\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N0pJWM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lava Probuds 21 45 Hrs Playtime  @949\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N0pJWM"
         }
        ]
       },
       {
        "id": 86770,
        "type": "message",
        "date": "2023-06-12T14:33:56",
        "date_unixtime": "1686560636",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 557,
        "text": [
         "HP 64GB Class 10 MicroSD Memory Card @748\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X3pv5v"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP 64GB Class 10 MicroSD Memory Card @748\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X3pv5v"
         }
        ]
       },
       {
        "id": 86771,
        "type": "message",
        "date": "2023-06-12T14:34:19",
        "date_unixtime": "1686560659",
        "edited": "2023-06-12T17:15:29",
        "edited_unixtime": "1686570329",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1263,
        "height": 553,
        "text": [
         "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch ",
         {
          "type": "mention",
          "text": "@1799"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qHtSHG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch "
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
          "text": "https://amzn.to/3qHtSHG"
         }
        ]
       },
       {
        "id": 86773,
        "type": "message",
        "date": "2023-06-12T14:34:45",
        "date_unixtime": "1686560685",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1205,
        "height": 547,
        "text": [
         "Wahl 09649-024 Cord/Cordless @849\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43SFZj9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wahl 09649-024 Cord/Cordless @849\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43SFZj9"
         }
        ]
       },
       {
        "id": 86775,
        "type": "message",
        "date": "2023-06-12T14:35:14",
        "date_unixtime": "1686560714",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Solefit Men's Jacket @969\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NmS35V"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Solefit Men's Jacket @969\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NmS35V"
         }
        ]
       },
       {
        "id": 86776,
        "type": "message",
        "date": "2023-06-12T14:35:41",
        "date_unixtime": "1686560741",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1165,
        "height": 465,
        "text": [
         "Bajaj New Shakti Neo 25L Vertical Storage Water Heater ",
         {
          "type": "mention",
          "text": "@7299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CoylBn"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bajaj New Shakti Neo 25L Vertical Storage Water Heater "
         },
         {
          "type": "mention",
          "text": "@7299"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CoylBn"
         }
        ]
       },
       {
        "id": 86777,
        "type": "message",
        "date": "2023-06-12T14:36:05",
        "date_unixtime": "1686560765",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 499,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/R5sp1X"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/R5sp1X"
         }
        ]
       },
       {
        "id": 86778,
        "type": "message",
        "date": "2023-06-12T14:36:18",
        "date_unixtime": "1686560778",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 512,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ZMknBJ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ZMknBJ"
         }
        ]
       },
       {
        "id": 86779,
        "type": "message",
        "date": "2023-06-12T14:37:14",
        "date_unixtime": "1686560834",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1251,
        "height": 545,
        "text": [
         "ZEBRONICS DC Aquaman Edition Sound Bomb  @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44cCzIv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS DC Aquaman Edition Sound Bomb  @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44cCzIv"
         }
        ]
       },
       {
        "id": 86780,
        "type": "message",
        "date": "2023-06-12T14:43:50",
        "date_unixtime": "1686561230",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 539,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/eUrMh6"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/eUrMh6"
         }
        ]
       },
       {
        "id": 86781,
        "type": "message",
        "date": "2023-06-12T14:44:24",
        "date_unixtime": "1686561264",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 462,
        "text": [
         "Recron Certified Dream Fibre Pillow (16X24, Fiber;Microfiber, White, Pack Of 2) @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3oPjpJG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Recron Certified Dream Fibre Pillow (16X24, Fiber;Microfiber, White, Pack Of 2) @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oPjpJG"
         }
        ]
       },
       {
        "id": 86782,
        "type": "message",
        "date": "2023-06-12T14:45:29",
        "date_unixtime": "1686561329",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 459,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/IJw70V"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/IJw70V"
         }
        ]
       },
       {
        "id": 86783,
        "type": "message",
        "date": "2023-06-12T14:45:48",
        "date_unixtime": "1686561348",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1141,
        "height": 605,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/40JfMv"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/40JfMv"
         }
        ]
       },
       {
        "id": 86784,
        "type": "message",
        "date": "2023-06-12T14:46:14",
        "date_unixtime": "1686561374",
        "edited": "2023-06-12T14:46:32",
        "edited_unixtime": "1686561392",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1275,
        "height": 591,
        "text": [
         "BULLAR Adjustable Dumbbells Set 8 Kg to 20 Kg  @648\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42uhxUg"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BULLAR Adjustable Dumbbells Set 8 Kg to 20 Kg  @648\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42uhxUg"
         }
        ]
       },
       {
        "id": 86785,
        "type": "message",
        "date": "2023-06-12T14:46:44",
        "date_unixtime": "1686561404",
        "edited": "2023-06-12T15:58:30",
        "edited_unixtime": "1686565710",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1188,
        "height": 547,
        "text": [
         "Ant Value FKAPU03 1000 DPI Wireless Mouse   @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42IoIZi"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ant Value FKAPU03 1000 DPI Wireless Mouse   @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42IoIZi"
         }
        ]
       },
       {
        "id": 86786,
        "type": "message",
        "date": "2023-06-12T14:47:02",
        "date_unixtime": "1686561422",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 530,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/g05fTa"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/g05fTa"
         }
        ]
       },
       {
        "id": 86787,
        "type": "message",
        "date": "2023-06-12T14:48:21",
        "date_unixtime": "1686561501",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 907,
        "height": 362,
        "text": [
         "Top Branded Mens Shorts From ₹339\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/460EjWE"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "💡 Apply Upto 5% coupon On Few"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Top Branded Mens Shorts From ₹339\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/460EjWE"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "💡 Apply Upto 5% coupon On Few"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86788,
        "type": "message",
        "date": "2023-06-12T14:49:03",
        "date_unixtime": "1686561543",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1165,
        "height": 597,
        "text": [
         "Metronaut Men Tshirt (Pack Of 3) @ 399\n\n",
         {
          "type": "link",
          "text": "https://extp.in/BYJgT6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut Men Tshirt (Pack Of 3) @ 399\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/BYJgT6"
         }
        ]
       },
       {
        "id": 86789,
        "type": "message",
        "date": "2023-06-12T14:49:39",
        "date_unixtime": "1686561579",
        "edited": "2023-06-12T14:54:22",
        "edited_unixtime": "1686561862",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 940,
        "height": 482,
        "text": [
         "Myntra | Flat 80-83% Off On Libas Women Clothing.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/J07gAk"
         },
         "\n\nKurta with Palazzos Set : ",
         {
          "type": "link",
          "text": "https://extp.in/bTjEWE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra | Flat 80-83% Off On Libas Women Clothing.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/J07gAk"
         },
         {
          "type": "plain",
          "text": "\n\nKurta with Palazzos Set : "
         },
         {
          "type": "link",
          "text": "https://extp.in/bTjEWE"
         }
        ]
       },
       {
        "id": 86790,
        "type": "message",
        "date": "2023-06-12T15:02:56",
        "date_unixtime": "1686562376",
        "edited": "2023-06-12T18:26:18",
        "edited_unixtime": "1686574578",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1267,
        "height": 590,
        "text": [
         "Fastrack Analog Unisex-Adult Watch @765\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3WZ3uFa"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fastrack Analog Unisex-Adult Watch @765\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WZ3uFa"
         }
        ]
       },
       {
        "id": 86791,
        "type": "message",
        "date": "2023-06-12T16:07:48",
        "date_unixtime": "1686566268",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1217,
        "height": 542,
        "text": [
         "Nasher Miles Hard-Sided Cabi Luggage Set Of 3 @ ₹8,649\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43EMgPR"
         },
         "\n\n❌ Regular price @ ₹10,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nasher Miles Hard-Sided Cabi Luggage Set Of 3 @ ₹8,649\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43EMgPR"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹10,999"
         }
        ]
       },
       {
        "id": 86792,
        "type": "message",
        "date": "2023-06-12T16:08:15",
        "date_unixtime": "1686566295",
        "edited": "2023-06-12T18:26:09",
        "edited_unixtime": "1686574569",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 503,
        "text": [
         "Longway 1200mm/48 inch High Speed Anti-Dust Ceiling Fan Pack Of 2 @ ₹2,349\n\n",
         {
          "type": "bold",
          "text": "▶️ Smoked Brown\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/460JkOY"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "▶️ Silver Blue\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/42PHwpz"
         },
         "\n\n❌ Regular price @ ₹3,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Longway 1200mm/48 inch High Speed Anti-Dust Ceiling Fan Pack Of 2 @ ₹2,349\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Smoked Brown\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/460JkOY"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Silver Blue\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/42PHwpz"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3,100"
         }
        ]
       },
       {
        "id": 86793,
        "type": "message",
        "date": "2023-06-12T16:08:41",
        "date_unixtime": "1686566321",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 542,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ODaWPY"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ODaWPY"
         }
        ]
       },
       {
        "id": 86794,
        "type": "message",
        "date": "2023-06-12T17:11:10",
        "date_unixtime": "1686570070",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1035,
        "height": 482,
        "text": [
         "Flipkart: Flat 73% Off On Liberty Men Footwear\n\n 👉 ",
         {
          "type": "link",
          "text": "https://extp.in/UgJYDs"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Flat 73% Off On Liberty Men Footwear\n\n 👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/UgJYDs"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86795,
        "type": "message",
        "date": "2023-06-12T17:11:39",
        "date_unixtime": "1686570099",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1157,
        "height": 549,
        "text": [
         "➡️ Top Branded Mixer Juicer Grinder Min 50% Off\n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/u96cdK"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "➡️ Top Branded Mixer Juicer Grinder Min 50% Off\n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/u96cdK"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86796,
        "type": "message",
        "date": "2023-06-12T17:15:29",
        "date_unixtime": "1686570329",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 607,
        "text": [
         "Bella Vita Organic Intense Deo White Antiperspirant Deodorant  @54\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45ZAi4T"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Bella Vita Organic Intense Deo White Antiperspirant Deodorant  @54\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45ZAi4T"
         }
        ]
       },
       {
        "id": 86798,
        "type": "message",
        "date": "2023-06-12T17:18:55",
        "date_unixtime": "1686570535",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 823,
        "height": 391,
        "text": [
         "Myntra : Flat 80-88% Off On Bewakoof Clothing \n\nWomen : ",
         {
          "type": "link",
          "text": "https://extp.in/KapCc0"
         },
         "\n\nMen : ",
         {
          "type": "link",
          "text": "https://extp.in/9LCOem"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra : Flat 80-88% Off On Bewakoof Clothing \n\nWomen : "
         },
         {
          "type": "link",
          "text": "https://extp.in/KapCc0"
         },
         {
          "type": "plain",
          "text": "\n\nMen : "
         },
         {
          "type": "link",
          "text": "https://extp.in/9LCOem"
         }
        ]
       },
       {
        "id": 86799,
        "type": "message",
        "date": "2023-06-12T17:19:18",
        "date_unixtime": "1686570558",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1189,
        "height": 367,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/FcxgJY"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/FcxgJY"
         }
        ]
       },
       {
        "id": 86800,
        "type": "message",
        "date": "2023-06-12T17:19:42",
        "date_unixtime": "1686570582",
        "edited": "2023-06-12T17:56:11",
        "edited_unixtime": "1686572771",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "Attro Miami Plastic Unbreakable Fridge Water Bottle  @129\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XhfHoZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Attro Miami Plastic Unbreakable Fridge Water Bottle  @129\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XhfHoZ"
         }
        ]
       },
       {
        "id": 86801,
        "type": "message",
        "date": "2023-06-12T17:20:13",
        "date_unixtime": "1686570613",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 612,
        "text": [
         "Longway Super Dlx Mixer Grinder  ",
         {
          "type": "mention",
          "text": "@1398"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3P5TckA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Longway Super Dlx Mixer Grinder  "
         },
         {
          "type": "mention",
          "text": "@1398"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5TckA"
         }
        ]
       },
       {
        "id": 86802,
        "type": "message",
        "date": "2023-06-12T17:20:47",
        "date_unixtime": "1686570647",
        "edited": "2023-06-12T17:21:21",
        "edited_unixtime": "1686570681",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "Fire-Boltt Ninja Call Pro Smart Watch ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N4grZx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Ninja Call Pro Smart Watch "
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
          "text": "https://amzn.to/3N4grZx"
         }
        ]
       },
       {
        "id": 86803,
        "type": "message",
        "date": "2023-06-12T17:21:24",
        "date_unixtime": "1686570684",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "KareIn Classic Adult Diaper Pants, Large 90-120 Cm  @313\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3P8qyzk"
         },
         " @313"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "KareIn Classic Adult Diaper Pants, Large 90-120 Cm  @313\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P8qyzk"
         },
         {
          "type": "plain",
          "text": " @313"
         }
        ]
       },
       {
        "id": 86804,
        "type": "message",
        "date": "2023-06-12T17:22:01",
        "date_unixtime": "1686570721",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 611,
        "text": [
         "Odomos Protect Mosquito Repellent Liquid Vaporiser Refill @143\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3P5DVQG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Odomos Protect Mosquito Repellent Liquid Vaporiser Refill @143\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5DVQG"
         }
        ]
       },
       {
        "id": 86805,
        "type": "message",
        "date": "2023-06-12T17:22:26",
        "date_unixtime": "1686570746",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1228,
        "height": 414,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/asUV94"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/asUV94"
         }
        ]
       },
       {
        "id": 86806,
        "type": "message",
        "date": "2023-06-12T17:34:35",
        "date_unixtime": "1686571475",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 655,
        "text": [
         "Nature Krafts Mix Tutti Frutti Cherries Fresh Fruits @148\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PpgJ0f"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nature Krafts Mix Tutti Frutti Cherries Fresh Fruits @148\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PpgJ0f"
         }
        ]
       },
       {
        "id": 86807,
        "type": "message",
        "date": "2023-06-12T17:35:36",
        "date_unixtime": "1686571536",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 500,
        "height": 500,
        "text": [
         "ACTIVA 1200 MM HIGH Speed 390 RPM BEE Approved APSRA Ceiling Fan White- 2 Year Warranty @999\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3P8s6cD"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3P5U0pC"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ACTIVA 1200 MM HIGH Speed 390 RPM BEE Approved APSRA Ceiling Fan White- 2 Year Warranty @999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P8s6cD"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5U0pC"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86808,
        "type": "message",
        "date": "2023-06-12T17:35:36",
        "date_unixtime": "1686571536",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 1280,
        "text": "",
        "text_entities": []
       },
       {
        "id": 86809,
        "type": "message",
        "date": "2023-06-12T17:36:33",
        "date_unixtime": "1686571593",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "AmazonBasics Wall Ball, 6.8 kg @949\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3J9AdSj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AmazonBasics Wall Ball, 6.8 kg @949\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J9AdSj"
         }
        ]
       },
       {
        "id": 86810,
        "type": "message",
        "date": "2023-06-12T17:36:57",
        "date_unixtime": "1686571617",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 627,
        "text": [
         "Amazon Brand - Solimo Nylon Backpack @373\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43OhKCE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo Nylon Backpack @373\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43OhKCE"
         }
        ]
       },
       {
        "id": 86811,
        "type": "message",
        "date": "2023-06-12T17:37:29",
        "date_unixtime": "1686571649",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1230,
        "height": 645,
        "text": [
         "Beardo  LOOT 🔥 \n\n🛍 Buy Ultimate Summer Essentials Combo (6 Items) @ Rs 779 [MRP Rs 2093]\n\n✅ Use Code : VIBD22\n\n➡️ Includes: \n1. Hair Serum 50ml,\n2. Ultraglow Facewash 100ml,\n3. Mariner Captain Jack Perfume 120ml,\n4. Ultraglow Bodywash 200ml,\n5. Max Sunscreen Spray 50ml,\n6. De-Tan Scrub 100g\n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/AchSdp"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beardo  LOOT 🔥 \n\n🛍 Buy Ultimate Summer Essentials Combo (6 Items) @ Rs 779 [MRP Rs 2093]\n\n✅ Use Code : VIBD22\n\n➡️ Includes: \n1. Hair Serum 50ml,\n2. Ultraglow Facewash 100ml,\n3. Mariner Captain Jack Perfume 120ml,\n4. Ultraglow Bodywash 200ml,\n5. Max Sunscreen Spray 50ml,\n6. De-Tan Scrub 100g\n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/AchSdp"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86812,
        "type": "message",
        "date": "2023-06-12T17:39:43",
        "date_unixtime": "1686571783",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1003,
        "height": 447,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/bTHtnG"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/bTHtnG"
         }
        ]
       },
       {
        "id": 86813,
        "type": "message",
        "date": "2023-06-12T17:40:10",
        "date_unixtime": "1686571810",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1043,
        "height": 389,
        "text": [
         "Men's Baseball Cap @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45VwtOf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men's Baseball Cap @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45VwtOf"
         }
        ]
       },
       {
        "id": 86814,
        "type": "message",
        "date": "2023-06-12T17:40:36",
        "date_unixtime": "1686571836",
        "edited": "2023-06-12T23:46:38",
        "edited_unixtime": "1686593798",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 567,
        "text": [
         "Havells Milor Decorative BLDC 1200mm Energy Saving with Remote Control 5 Star Ceiling Fan  ",
         {
          "type": "mention",
          "text": "@4148"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3oQUfdD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells Milor Decorative BLDC 1200mm Energy Saving with Remote Control 5 Star Ceiling Fan  "
         },
         {
          "type": "mention",
          "text": "@4148"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oQUfdD"
         }
        ]
       },
       {
        "id": 86815,
        "type": "message",
        "date": "2023-06-12T17:41:07",
        "date_unixtime": "1686571867",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1244,
        "height": 727,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2II-id"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2II-id"
         }
        ]
       },
       {
        "id": 86816,
        "type": "message",
        "date": "2023-06-12T17:44:11",
        "date_unixtime": "1686572051",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1227,
        "height": 435,
        "text": [
         "Vu 43\"\" 4K smart TV @ Just Rs.20,249*\n50W Soundbar | IPS Panel | GoogleTV\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/fZ0NHM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Vu 43\"\" 4K smart TV @ Just Rs.20,249*\n50W Soundbar | IPS Panel | GoogleTV\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/fZ0NHM"
         }
        ]
       },
       {
        "id": 86817,
        "type": "message",
        "date": "2023-06-12T17:44:43",
        "date_unixtime": "1686572083",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1238,
        "height": 438,
        "text": [
         "realme 32\"\" Smart TV @ Rs.9,749*\n24W Sound Output | Chroma Boost Engine\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/cfZFKW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "realme 32\"\" Smart TV @ Rs.9,749*\n24W Sound Output | Chroma Boost Engine\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/cfZFKW"
         }
        ]
       },
       {
        "id": 86818,
        "type": "message",
        "date": "2023-06-12T17:45:06",
        "date_unixtime": "1686572106",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 628,
        "text": [
         "Ben Martin Men's Relaxed Fit Jeans @628\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45V2V37"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ben Martin Men's Relaxed Fit Jeans @628\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45V2V37"
         }
        ]
       },
       {
        "id": 86819,
        "type": "message",
        "date": "2023-06-12T17:45:34",
        "date_unixtime": "1686572134",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1232,
        "height": 450,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2mK6xV"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2mK6xV"
         }
        ]
       },
       {
        "id": 86820,
        "type": "message",
        "date": "2023-06-12T17:45:59",
        "date_unixtime": "1686572159",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 538,
        "text": [
         "Cello Venice Plastic Bottle Set @439\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X1w6NU"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Venice Plastic Bottle Set @439\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X1w6NU"
         }
        ]
       },
       {
        "id": 86821,
        "type": "message",
        "date": "2023-06-12T17:46:23",
        "date_unixtime": "1686572183",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 619,
        "text": [
         "Skybags Brat Black 46 Cms Casual Backpack @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43yA8jv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Skybags Brat Black 46 Cms Casual Backpack @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43yA8jv"
         }
        ]
       },
       {
        "id": 86822,
        "type": "message",
        "date": "2023-06-12T17:46:50",
        "date_unixtime": "1686572210",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 561,
        "text": [
         "SYSKA Iron Press @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3p6VbdL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SYSKA Iron Press @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3p6VbdL"
         }
        ]
       },
       {
        "id": 86823,
        "type": "message",
        "date": "2023-06-12T17:47:17",
        "date_unixtime": "1686572237",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 613,
        "text": [
         "Frantic Kids Soft Cartoon Velvet Animal Plush School Backpack Bag @309\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45Xxpl0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Frantic Kids Soft Cartoon Velvet Animal Plush School Backpack Bag @309\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Xxpl0"
         }
        ]
       },
       {
        "id": 86824,
        "type": "message",
        "date": "2023-06-12T17:47:38",
        "date_unixtime": "1686572258",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1239,
        "height": 591,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/C5dt1y"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/C5dt1y"
         }
        ]
       },
       {
        "id": 86825,
        "type": "message",
        "date": "2023-06-12T17:48:09",
        "date_unixtime": "1686572289",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 636,
        "text": [
         "Healthgenie Digital Weight Machine For Body Weight @501\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/460A39S"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Healthgenie Digital Weight Machine For Body Weight @501\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/460A39S"
         }
        ]
       },
       {
        "id": 86826,
        "type": "message",
        "date": "2023-06-12T17:48:44",
        "date_unixtime": "1686572324",
        "edited": "2023-06-12T17:56:59",
        "edited_unixtime": "1686572819",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 517,
        "text": [
         "Zebronics Zeb-Warrior 2.0 Multimedia Speaker @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PaDDbl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics Zeb-Warrior 2.0 Multimedia Speaker @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PaDDbl"
         }
        ]
       },
       {
        "id": 86827,
        "type": "message",
        "date": "2023-06-12T17:49:11",
        "date_unixtime": "1686572351",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 622,
        "text": [
         "Furniture Cafe Set top Box Stand @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3P63FfO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Furniture Cafe Set top Box Stand @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P63FfO"
         }
        ]
       },
       {
        "id": 86828,
        "type": "message",
        "date": "2023-06-12T17:49:44",
        "date_unixtime": "1686572384",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 635,
        "text": [
         "RADIANT Door Bottom Sealing Strip Guard for Home @75\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qxPmq5"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "RADIANT Door Bottom Sealing Strip Guard for Home @75\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qxPmq5"
         }
        ]
       },
       {
        "id": 86829,
        "type": "message",
        "date": "2023-06-12T17:50:15",
        "date_unixtime": "1686572415",
        "edited": "2023-06-12T20:54:17",
        "edited_unixtime": "1686583457",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Red Tape Casual Sneakers for Men ",
         {
          "type": "mention",
          "text": "@1209"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42v8IcZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Red Tape Casual Sneakers for Men "
         },
         {
          "type": "mention",
          "text": "@1209"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42v8IcZ"
         }
        ]
       },
       {
        "id": 86830,
        "type": "message",
        "date": "2023-06-12T17:50:39",
        "date_unixtime": "1686572439",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1231,
        "height": 416,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/LkdESg"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/LkdESg"
         }
        ]
       },
       {
        "id": 86831,
        "type": "message",
        "date": "2023-06-12T17:51:05",
        "date_unixtime": "1686572465",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones ",
         {
          "type": "mention",
          "text": "@1698"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3J4OOys"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones "
         },
         {
          "type": "mention",
          "text": "@1698"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J4OOys"
         }
        ]
       },
       {
        "id": 86832,
        "type": "message",
        "date": "2023-06-12T17:51:35",
        "date_unixtime": "1686572495",
        "edited": "2023-06-12T18:12:50",
        "edited_unixtime": "1686573770",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 572,
        "text": [
         "Pigeon Brewster Coffee Maker, 600 Watt ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X093D6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Brewster Coffee Maker, 600 Watt "
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
          "text": "https://amzn.to/3X093D6"
         }
        ]
       },
       {
        "id": 86833,
        "type": "message",
        "date": "2023-06-12T17:52:03",
        "date_unixtime": "1686572523",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "realme Buds Wireless 2 Neo Bluetooth in Ear Earphones ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qF2E4p"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "realme Buds Wireless 2 Neo Bluetooth in Ear Earphones "
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
          "text": "https://amzn.to/3qF2E4p"
         }
        ]
       },
       {
        "id": 86834,
        "type": "message",
        "date": "2023-06-12T18:11:29",
        "date_unixtime": "1686573689",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1102,
        "height": 437,
        "text": [
         "➡️ SAMSUNG Galaxy F54 5G (8/256 GB)  @ Rs.27999*\n👉  ",
         {
          "type": "link",
          "text": "https://extp.in/XZmiId"
         },
         "\n\n📌Discount - Flat Rs. 2000 off with HDFC Bank Cards OR Additional Rs. 2000 off with Exchange! No Cost EMI Starting From Rs. 3,111/m"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "➡️ SAMSUNG Galaxy F54 5G (8/256 GB)  @ Rs.27999*\n👉  "
         },
         {
          "type": "link",
          "text": "https://extp.in/XZmiId"
         },
         {
          "type": "plain",
          "text": "\n\n📌Discount - Flat Rs. 2000 off with HDFC Bank Cards OR Additional Rs. 2000 off with Exchange! No Cost EMI Starting From Rs. 3,111/m"
         }
        ]
       },
       {
        "id": 86835,
        "type": "message",
        "date": "2023-06-12T18:12:01",
        "date_unixtime": "1686573721",
        "edited": "2023-06-12T20:53:59",
        "edited_unixtime": "1686583439",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1135,
        "height": 555,
        "text": [
         "➡️ Realme 11 Pro Series 5G @ Rs.22499*\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/KSxh4V"
         },
         "\n\n📌 Discount - Instant Upto Rs. 1500 off on Select Bank Cards OR Rs. 1500 off on Exchange. No Cost EMI also Available"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "➡️ Realme 11 Pro Series 5G @ Rs.22499*\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/KSxh4V"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Discount - Instant Upto Rs. 1500 off on Select Bank Cards OR Rs. 1500 off on Exchange. No Cost EMI also Available"
         }
        ]
       },
       {
        "id": 86836,
        "type": "message",
        "date": "2023-06-12T18:13:59",
        "date_unixtime": "1686573839",
        "edited": "2023-06-12T18:43:06",
        "edited_unixtime": "1686575586",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1213,
        "height": 416,
        "text": [
         "[ Lowest ] 10+ Mix Dry Fruits (900 g)@ 493\n\n",
         {
          "type": "link",
          "text": "https://extp.in/AQp9OJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "[ Lowest ] 10+ Mix Dry Fruits (900 g)@ 493\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/AQp9OJ"
         }
        ]
       },
       {
        "id": 86837,
        "type": "message",
        "date": "2023-06-12T18:27:19",
        "date_unixtime": "1686574639",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1253,
        "height": 750,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " Mens Kurtas From ₹199\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ycgc7M"
         },
         "\n\n❌ Regular price @ ₹799"
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         {
          "type": "plain",
          "text": " Mens Kurtas From ₹199\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ycgc7M"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799"
         }
        ]
       },
       {
        "id": 86838,
        "type": "message",
        "date": "2023-06-12T18:27:37",
        "date_unixtime": "1686574657",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1044,
        "height": 479,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/geoGjK"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/geoGjK"
         }
        ]
       },
       {
        "id": 86839,
        "type": "message",
        "date": "2023-06-12T18:34:55",
        "date_unixtime": "1686575095",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 612,
        "text": [
         "Campus Sutra Men's Slim Fit Jeans @594\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/460RU08"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Campus Sutra Men's Slim Fit Jeans @594\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/460RU08"
         }
        ]
       },
       {
        "id": 86840,
        "type": "message",
        "date": "2023-06-12T18:35:30",
        "date_unixtime": "1686575130",
        "edited": "2023-06-13T00:44:19",
        "edited_unixtime": "1686597259",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 636,
        "text": [
         "Red Tape Men's Casual Sneaker Shoes  ",
         {
          "type": "mention",
          "text": "@1275"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/461lzq4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Red Tape Men's Casual Sneaker Shoes  "
         },
         {
          "type": "mention",
          "text": "@1275"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461lzq4"
         }
        ]
       },
       {
        "id": 86841,
        "type": "message",
        "date": "2023-06-12T18:35:52",
        "date_unixtime": "1686575152",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1207,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/NIgJD9"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/NIgJD9"
         }
        ]
       },
       {
        "id": 86842,
        "type": "message",
        "date": "2023-06-12T19:08:48",
        "date_unixtime": "1686577128",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 983,
        "height": 425,
        "text": [
         "Flipkart: 60-80% Off on Branded Shoes\n\n👉 Link-1: ",
         {
          "type": "link",
          "text": "https://extp.in/xieq5d"
         },
         "\n\n👉 Link-2: ",
         {
          "type": "link",
          "text": "https://extp.in/6zhIz9"
         },
         "\n\n💥 Puma Shoes @ 993: ",
         {
          "type": "link",
          "text": "https://extp.in/qMG673"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: 60-80% Off on Branded Shoes\n\n👉 Link-1: "
         },
         {
          "type": "link",
          "text": "https://extp.in/xieq5d"
         },
         {
          "type": "plain",
          "text": "\n\n👉 Link-2: "
         },
         {
          "type": "link",
          "text": "https://extp.in/6zhIz9"
         },
         {
          "type": "plain",
          "text": "\n\n💥 Puma Shoes @ 993: "
         },
         {
          "type": "link",
          "text": "https://extp.in/qMG673"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86843,
        "type": "message",
        "date": "2023-06-12T19:09:40",
        "date_unixtime": "1686577180",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "GRAB : Roadster Women (Pack Of 3) Briefs@ 199\n\n",
         {
          "type": "link",
          "text": "https://extp.in/2VxLHb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GRAB : Roadster Women (Pack Of 3) Briefs@ 199\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/2VxLHb"
         }
        ]
       },
       {
        "id": 86844,
        "type": "message",
        "date": "2023-06-12T19:10:12",
        "date_unixtime": "1686577212",
        "edited": "2023-06-12T19:11:37",
        "edited_unixtime": "1686577297",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 603,
        "text": [
         "La Opala, Novo Collection, Opal Glass Dinner Set  ",
         {
          "type": "mention",
          "text": "@1078"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3qFWX6g"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/43Bsuoi"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "La Opala, Novo Collection, Opal Glass Dinner Set  "
         },
         {
          "type": "mention",
          "text": "@1078"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qFWX6g"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Bsuoi"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86845,
        "type": "message",
        "date": "2023-06-12T19:13:23",
        "date_unixtime": "1686577403",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "beatXP Bolt Deep Tissue Massage Gun ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Cpp38o"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Bolt Deep Tissue Massage Gun "
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
          "text": "https://amzn.to/3Cpp38o"
         }
        ]
       },
       {
        "id": 86846,
        "type": "message",
        "date": "2023-06-12T19:13:49",
        "date_unixtime": "1686577429",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Aurion Skipping Rope @59\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43B0dOJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Aurion Skipping Rope @59\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43B0dOJ"
         }
        ]
       },
       {
        "id": 86847,
        "type": "message",
        "date": "2023-06-12T19:14:11",
        "date_unixtime": "1686577451",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1214,
        "height": 439,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/4jzC08"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/4jzC08"
         }
        ]
       },
       {
        "id": 86848,
        "type": "message",
        "date": "2023-06-12T19:14:49",
        "date_unixtime": "1686577489",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "ADISA Large Laptop Backpack @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CkKjfz"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ADISA Large Laptop Backpack @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CkKjfz"
         }
        ]
       },
       {
        "id": 86849,
        "type": "message",
        "date": "2023-06-12T19:15:19",
        "date_unixtime": "1686577519",
        "edited": "2023-06-12T22:40:52",
        "edited_unixtime": "1686589852",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 634,
        "text": [
         "Go Vegan California Almonds 500gm  @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N65bMe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Go Vegan California Almonds 500gm  @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N65bMe"
         }
        ]
       },
       {
        "id": 86850,
        "type": "message",
        "date": "2023-06-12T19:15:42",
        "date_unixtime": "1686577542",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1066,
        "height": 454,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/OlQeZ6"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/OlQeZ6"
         }
        ]
       },
       {
        "id": 86851,
        "type": "message",
        "date": "2023-06-12T19:16:09",
        "date_unixtime": "1686577569",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 538,
        "text": [
         "La Opala, Novo Collection, Opal Glass Dinner Set  ",
         {
          "type": "mention",
          "text": "@1303"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42CNU30"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "La Opala, Novo Collection, Opal Glass Dinner Set  "
         },
         {
          "type": "mention",
          "text": "@1303"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42CNU30"
         }
        ]
       },
       {
        "id": 86852,
        "type": "message",
        "date": "2023-06-12T19:17:01",
        "date_unixtime": "1686577621",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 999,
        "height": 600,
        "text": [
         "👉👉 Apply SBI's Simply Click Credit Card 💳 💳 & Get Free ₹500 Amazon Voucher 😱😱😱\n\nIt takes only 5 mins to apply, Click on the link below and Apply Now 👇👇\n\n👉 Link - ",
         {
          "type": "link",
          "text": "https://extp.in/PZsI0c"
         },
         "\n\nSteps : Fill Your Personal Details » Verify Number » Submit The Application » Complete Online Or Offline Verification & Done.\n\nBenefits Of SBI Card -\n👉 ₹500 Amazon Gift Voucher.\n👉 Earn 10 rewards on every ₹100 spent on Dining, Movies, Departmental Stores and. Grocery Spends \n👉 4 reward points = ₹1.\n\nEligibility ↓↓↓↓\n👉Salaried: Rs 20,000/month\n👉Self-Employed: Rs 30,000/month\n👉CIBIL Score - 700 or more"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "👉👉 Apply SBI's Simply Click Credit Card 💳 💳 & Get Free ₹500 Amazon Voucher 😱😱😱\n\nIt takes only 5 mins to apply, Click on the link below and Apply Now 👇👇\n\n👉 Link - "
         },
         {
          "type": "link",
          "text": "https://extp.in/PZsI0c"
         },
         {
          "type": "plain",
          "text": "\n\nSteps : Fill Your Personal Details » Verify Number » Submit The Application » Complete Online Or Offline Verification & Done.\n\nBenefits Of SBI Card -\n👉 ₹500 Amazon Gift Voucher.\n👉 Earn 10 rewards on every ₹100 spent on Dining, Movies, Departmental Stores and. Grocery Spends \n👉 4 reward points = ₹1.\n\nEligibility ↓↓↓↓\n👉Salaried: Rs 20,000/month\n👉Self-Employed: Rs 30,000/month\n👉CIBIL Score - 700 or more"
         }
        ]
       },
       {
        "id": 86853,
        "type": "message",
        "date": "2023-06-12T19:42:32",
        "date_unixtime": "1686579152",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1220,
        "height": 449,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/QfwhUQ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/QfwhUQ"
         }
        ]
       },
       {
        "id": 86854,
        "type": "message",
        "date": "2023-06-12T19:43:03",
        "date_unixtime": "1686579183",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1221,
        "height": 595,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/yR8ieb"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/yR8ieb"
         }
        ]
       },
       {
        "id": 86855,
        "type": "message",
        "date": "2023-06-12T19:43:33",
        "date_unixtime": "1686579213",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "DiSano Pure Honey 1Kg @189\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3qz7GiF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "DiSano Pure Honey 1Kg @189\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qz7GiF"
         }
        ]
       },
       {
        "id": 86856,
        "type": "message",
        "date": "2023-06-12T19:43:59",
        "date_unixtime": "1686579239",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 635,
        "text": [
         "Parachute Advansed Soft Touch Body Lotion @136\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N4snuj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Parachute Advansed Soft Touch Body Lotion @136\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N4snuj"
         }
        ]
       },
       {
        "id": 86857,
        "type": "message",
        "date": "2023-06-12T19:44:20",
        "date_unixtime": "1686579260",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1218,
        "height": 423,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/LCoLLW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/LCoLLW"
         }
        ]
       },
       {
        "id": 86858,
        "type": "message",
        "date": "2023-06-12T19:44:45",
        "date_unixtime": "1686579285",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "Ambrane SliQ Wireless Optical Mouse @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X3JNMd"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ambrane SliQ Wireless Optical Mouse @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X3JNMd"
         }
        ]
       },
       {
        "id": 86859,
        "type": "message",
        "date": "2023-06-12T19:45:09",
        "date_unixtime": "1686579309",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 592,
        "text": [
         "JBL Quantum 50, Wired in Ear Gaming Earphones ",
         {
          "type": "mention",
          "text": "@1039"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3MZNhLj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "JBL Quantum 50, Wired in Ear Gaming Earphones "
         },
         {
          "type": "mention",
          "text": "@1039"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZNhLj"
         }
        ]
       },
       {
        "id": 86860,
        "type": "message",
        "date": "2023-06-12T19:45:48",
        "date_unixtime": "1686579348",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Prakriti Naturals® Peppermint Coated Fennel Seed @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42yqn3u"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Prakriti Naturals® Peppermint Coated Fennel Seed @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42yqn3u"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86861,
        "type": "message",
        "date": "2023-06-12T19:46:29",
        "date_unixtime": "1686579389",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 702,
        "height": 393,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Czfcgk"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Czfcgk"
         }
        ]
       },
       {
        "id": 86862,
        "type": "message",
        "date": "2023-06-12T19:46:50",
        "date_unixtime": "1686579410",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1210,
        "height": 435,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/OzJJbJ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/OzJJbJ"
         }
        ]
       },
       {
        "id": 86863,
        "type": "message",
        "date": "2023-06-12T20:42:33",
        "date_unixtime": "1686582753",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1248,
        "height": 446,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/0nqVr2"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/0nqVr2"
         }
        ]
       },
       {
        "id": 86864,
        "type": "message",
        "date": "2023-06-12T20:43:00",
        "date_unixtime": "1686582780",
        "edited": "2023-06-12T23:06:54",
        "edited_unixtime": "1686591414",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 551,
        "text": [
         "Boult Audio Probass Curve Bluetooth Wireless in Ear Earphones @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42uGUoY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boult Audio Probass Curve Bluetooth Wireless in Ear Earphones @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42uGUoY"
         }
        ]
       },
       {
        "id": 86865,
        "type": "message",
        "date": "2023-06-12T20:43:29",
        "date_unixtime": "1686582809",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 597,
        "text": [
         "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV  ",
         {
          "type": "mention",
          "text": "@9499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X0xvnQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV  "
         },
         {
          "type": "mention",
          "text": "@9499"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X0xvnQ"
         }
        ]
       },
       {
        "id": 86866,
        "type": "message",
        "date": "2023-06-12T20:43:58",
        "date_unixtime": "1686582838",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 634,
        "text": [
         "BULLAR Adjustable Dumbbells Set  @398\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45QUrKm"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BULLAR Adjustable Dumbbells Set  @398\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QUrKm"
         }
        ]
       },
       {
        "id": 86867,
        "type": "message",
        "date": "2023-06-12T20:44:22",
        "date_unixtime": "1686582862",
        "edited": "2023-06-12T22:02:27",
        "edited_unixtime": "1686587547",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Amazon Basics - 12W LED Bulb, Cool White @239\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45WOJ9X"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics - 12W LED Bulb, Cool White @239\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45WOJ9X"
         }
        ]
       },
       {
        "id": 86868,
        "type": "message",
        "date": "2023-06-12T20:44:44",
        "date_unixtime": "1686582884",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1215,
        "height": 478,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/UmxkGY"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/UmxkGY"
         }
        ]
       },
       {
        "id": 86869,
        "type": "message",
        "date": "2023-06-12T20:45:03",
        "date_unixtime": "1686582903",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1219,
        "height": 432,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/td9Cpr"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/td9Cpr"
         }
        ]
       },
       {
        "id": 86870,
        "type": "message",
        "date": "2023-06-12T20:45:29",
        "date_unixtime": "1686582929",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1054,
        "height": 382,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/vdxAg7"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/vdxAg7"
         }
        ]
       },
       {
        "id": 86871,
        "type": "message",
        "date": "2023-06-12T20:45:57",
        "date_unixtime": "1686582957",
        "edited": "2023-06-12T21:03:43",
        "edited_unixtime": "1686584023",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Santoor Sandalwood and Almond milk Organic Soft Bath Soap @159\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NpOVHs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Santoor Sandalwood and Almond milk Organic Soft Bath Soap @159\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NpOVHs"
         }
        ]
       },
       {
        "id": 86872,
        "type": "message",
        "date": "2023-06-12T20:46:18",
        "date_unixtime": "1686582978",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1264,
        "height": 435,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/u2IDV8"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/u2IDV8"
         }
        ]
       },
       {
        "id": 86873,
        "type": "message",
        "date": "2023-06-12T20:46:39",
        "date_unixtime": "1686582999",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1217,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/KVSYv4"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/KVSYv4"
         }
        ]
       },
       {
        "id": 86874,
        "type": "message",
        "date": "2023-06-12T20:47:06",
        "date_unixtime": "1686583026",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1231,
        "height": 404,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/oyEksf"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/oyEksf"
         }
        ]
       },
       {
        "id": 86875,
        "type": "message",
        "date": "2023-06-12T20:47:51",
        "date_unixtime": "1686583071",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 645,
        "text": [
         "Amazon Brand - Jam & Honey Giraffe Rider  @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PfOmkG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Jam & Honey Giraffe Rider  @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PfOmkG"
         }
        ]
       },
       {
        "id": 86876,
        "type": "message",
        "date": "2023-06-12T20:48:54",
        "date_unixtime": "1686583134",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Tosaa Plastic Pet Storage Jar and Container, Set of 18 @268\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43YuCGJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tosaa Plastic Pet Storage Jar and Container, Set of 18 @268\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43YuCGJ"
         }
        ]
       },
       {
        "id": 86877,
        "type": "message",
        "date": "2023-06-12T20:49:41",
        "date_unixtime": "1686583181",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1237,
        "height": 443,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/PDIMqK"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/PDIMqK"
         }
        ]
       },
       {
        "id": 86878,
        "type": "message",
        "date": "2023-06-12T20:59:11",
        "date_unixtime": "1686583751",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Sunsilk Lusciously Thick & Long Shampoo 650 ml @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42vT4hf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sunsilk Lusciously Thick & Long Shampoo 650 ml @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42vT4hf"
         }
        ]
       },
       {
        "id": 86879,
        "type": "message",
        "date": "2023-06-12T20:59:37",
        "date_unixtime": "1686583777",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 994,
        "height": 395,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/0zZiR1"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/0zZiR1"
         }
        ]
       },
       {
        "id": 86880,
        "type": "message",
        "date": "2023-06-12T20:59:57",
        "date_unixtime": "1686583797",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Levi's Men Briefs(Pack of 2) @225\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X4Q6zu"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Levi's Men Briefs(Pack of 2) @225\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X4Q6zu"
         }
        ]
       },
       {
        "id": 86881,
        "type": "message",
        "date": "2023-06-12T21:00:25",
        "date_unixtime": "1686583825",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 554,
        "text": [
         "Active White Detergent Powder - 10 kg Family Pack @379\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43WhlhC"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Active White Detergent Powder - 10 kg Family Pack @379\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43WhlhC"
         }
        ]
       },
       {
        "id": 86882,
        "type": "message",
        "date": "2023-06-12T21:01:10",
        "date_unixtime": "1686583870",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "Veirdo® Men's Oversized Multicolor Printed T-Shirt Combo (Pack of 2) @649\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Noeb0D"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Veirdo® Men's Oversized Multicolor Printed T-Shirt Combo (Pack of 2) @649\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Noeb0D"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86883,
        "type": "message",
        "date": "2023-06-12T21:02:00",
        "date_unixtime": "1686583920",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 633,
        "text": [
         "Cello Kleeno Compacto Spin Mop with 2 refill Blue @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X5O5mC"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Kleeno Compacto Spin Mop with 2 refill Blue @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X5O5mC"
         }
        ]
       },
       {
        "id": 86884,
        "type": "message",
        "date": "2023-06-12T21:08:26",
        "date_unixtime": "1686584306",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "Kandid Black Cushion Pillow  @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NniFUn"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Kandid Black Cushion Pillow  @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NniFUn"
         }
        ]
       },
       {
        "id": 86885,
        "type": "message",
        "date": "2023-06-12T21:51:31",
        "date_unixtime": "1686586891",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 549,
        "text": [
         "Cello Opalware Dinner Set, 35Pcs @ ₹1,249\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43RqkRe"
         },
         "\n\n❌ Regular price @ ₹2,699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Opalware Dinner Set, 35Pcs @ ₹1,249\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43RqkRe"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,699"
         }
        ]
       },
       {
        "id": 86886,
        "type": "message",
        "date": "2023-06-12T21:51:57",
        "date_unixtime": "1686586917",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 565,
        "text": [
         "Loot 🚀 🚀 Syska HB 100 Ultra Clip Hair Clipper Trimmer 90 min Runtime @ ₹799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3oSSZXs"
         },
         "\n\n❌Regular price @ ₹1,499"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Syska HB 100 Ultra Clip Hair Clipper Trimmer 90 min Runtime @ ₹799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oSSZXs"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹1,499"
         }
        ]
       },
       {
        "id": 86887,
        "type": "message",
        "date": "2023-06-12T21:52:25",
        "date_unixtime": "1686586945",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 593,
        "text": [
         "OnePlus 10R 5G 8GB RAM, 128GB @ ₹28,999\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/45ZsvE3"
         },
         "\n\n❌ Regular price @ ₹34,999\n\n",
         {
          "type": "bold",
          "text": "💡  Apply ₹4,000 coupon +  ₹2,000 Off With ICICI | How to Apply Coupon 👉 "
         },
         {
          "type": "text_link",
          "text": "Check here",
          "href": "https://t.me/telugutechtvdeals/56841"
         },
         {
          "type": "bold",
          "text": "."
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus 10R 5G 8GB RAM, 128GB @ ₹28,999\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/45ZsvE3"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹34,999\n\n"
         },
         {
          "type": "bold",
          "text": "💡  Apply ₹4,000 coupon +  ₹2,000 Off With ICICI | How to Apply Coupon 👉 "
         },
         {
          "type": "text_link",
          "text": "Check here",
          "href": "https://t.me/telugutechtvdeals/56841"
         },
         {
          "type": "bold",
          "text": "."
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86888,
        "type": "message",
        "date": "2023-06-12T21:52:49",
        "date_unixtime": "1686586969",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/45XTKyS"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch "
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
          "text": "https://amzn.to/45XTKyS"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86889,
        "type": "message",
        "date": "2023-06-12T21:53:12",
        "date_unixtime": "1686586992",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1043,
        "height": 525,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/RIOxmD"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/RIOxmD"
         }
        ]
       },
       {
        "id": 86890,
        "type": "message",
        "date": "2023-06-12T21:53:40",
        "date_unixtime": "1686587020",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 636,
        "text": [
         "Everyuth Naturals Anti Acne, Anti Marks Tulsi Turmeric Face Wash, 150gm @93\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X3ULkZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Everyuth Naturals Anti Acne, Anti Marks Tulsi Turmeric Face Wash, 150gm @93\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X3ULkZ"
         }
        ]
       },
       {
        "id": 86891,
        "type": "message",
        "date": "2023-06-12T21:54:07",
        "date_unixtime": "1686587047",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1032,
        "height": 420,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/vt394L"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/vt394L"
         }
        ]
       },
       {
        "id": 86892,
        "type": "message",
        "date": "2023-06-12T21:54:32",
        "date_unixtime": "1686587072",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 545,
        "text": [
         "Aristocrat Polyester Hard 50 Cms Luggage @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JdevwP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Aristocrat Polyester Hard 50 Cms Luggage @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JdevwP"
         }
        ]
       },
       {
        "id": 86893,
        "type": "message",
        "date": "2023-06-12T21:55:16",
        "date_unixtime": "1686587116",
        "edited": "2023-06-12T23:06:34",
        "edited_unixtime": "1686591394",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "DiSano Peanut Butter @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43RqS9K"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "DiSano Peanut Butter @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43RqS9K"
         }
        ]
       },
       {
        "id": 86894,
        "type": "message",
        "date": "2023-06-12T22:58:21",
        "date_unixtime": "1686590901",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1080,
        "height": 716,
        "text": [
         "McAffeine Good Addiction Sale \n\n🎁 Offer: Buy 1 Get 1 Free Sitewide + Flat 20% Cashback on prepaid orders 🤩🤩\n\n✅ No Coupon Required \n\n👉 Link: ",
         {
          "type": "link",
          "text": "https://extp.in/5sX8-W"
         },
         "\n\nProduct Suggestion:\n🔸 Face Care: ",
         {
          "type": "link",
          "text": "https://extp.in/1mmEaL"
         },
         "\n🔸 Green Tea Care Range \n",
         {
          "type": "link",
          "text": "https://extp.in/saHY8d"
         },
         "\n🔸 Body Care: ",
         {
          "type": "link",
          "text": "https://extp.in/Uvjhyv"
         },
         "\n🔸 New Launch: ",
         {
          "type": "link",
          "text": "https://extp.in/wspogU"
         },
         "\n🔸 Bestsellers: ",
         {
          "type": "link",
          "text": "https://extp.in/7rVhfl"
         },
         "\n\n😱 Also 10 Lucky Winners will get FREE Kit worth Rs 2000 Everyday"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "McAffeine Good Addiction Sale \n\n🎁 Offer: Buy 1 Get 1 Free Sitewide + Flat 20% Cashback on prepaid orders 🤩🤩\n\n✅ No Coupon Required \n\n👉 Link: "
         },
         {
          "type": "link",
          "text": "https://extp.in/5sX8-W"
         },
         {
          "type": "plain",
          "text": "\n\nProduct Suggestion:\n🔸 Face Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/1mmEaL"
         },
         {
          "type": "plain",
          "text": "\n🔸 Green Tea Care Range \n"
         },
         {
          "type": "link",
          "text": "https://extp.in/saHY8d"
         },
         {
          "type": "plain",
          "text": "\n🔸 Body Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/Uvjhyv"
         },
         {
          "type": "plain",
          "text": "\n🔸 New Launch: "
         },
         {
          "type": "link",
          "text": "https://extp.in/wspogU"
         },
         {
          "type": "plain",
          "text": "\n🔸 Bestsellers: "
         },
         {
          "type": "link",
          "text": "https://extp.in/7rVhfl"
         },
         {
          "type": "plain",
          "text": "\n\n😱 Also 10 Lucky Winners will get FREE Kit worth Rs 2000 Everyday"
         }
        ]
       },
       {
        "id": 86895,
        "type": "message",
        "date": "2023-06-12T22:58:53",
        "date_unixtime": "1686590933",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 747,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " Kids Clothing From ₹99\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/O6epxc"
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
          "text": " Kids Clothing From ₹99\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/O6epxc"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86896,
        "type": "message",
        "date": "2023-06-12T22:59:20",
        "date_unixtime": "1686590960",
        "edited": "2023-06-12T23:06:18",
        "edited_unixtime": "1686591378",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1230,
        "height": 445,
        "text": [
         "boAt Rockerz 510 Bluetooth Headset at ₹999🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/aGRZkc"
         },
         "\n\n❌Reg Price 1500+"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Rockerz 510 Bluetooth Headset at ₹999🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/aGRZkc"
         },
         {
          "type": "plain",
          "text": "\n\n❌Reg Price 1500+"
         }
        ]
       },
       {
        "id": 86897,
        "type": "message",
        "date": "2023-06-12T23:01:55",
        "date_unixtime": "1686591115",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 625,
        "text": [
         "FAADDICTION Men's Shirt Casual Printed Halfsleeve @450\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JbfwFD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "FAADDICTION Men's Shirt Casual Printed Halfsleeve @450\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JbfwFD"
         }
        ]
       },
       {
        "id": 86898,
        "type": "message",
        "date": "2023-06-12T23:02:21",
        "date_unixtime": "1686591141",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1217,
        "height": 486,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/umyFn0"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/umyFn0"
         }
        ]
       },
       {
        "id": 86899,
        "type": "message",
        "date": "2023-06-12T23:02:44",
        "date_unixtime": "1686591164",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1260,
        "height": 423,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/zNBVVB"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/zNBVVB"
         }
        ]
       },
       {
        "id": 86900,
        "type": "message",
        "date": "2023-06-12T23:03:07",
        "date_unixtime": "1686591187",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/xkmJ6Y"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/xkmJ6Y"
         }
        ]
       },
       {
        "id": 86901,
        "type": "message",
        "date": "2023-06-12T23:09:18",
        "date_unixtime": "1686591558",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 628,
        "text": [
         "Integriti Men's Slim T-Shirt  @267\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3MURGio"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Integriti Men's Slim T-Shirt  @267\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MURGio"
         }
        ]
       },
       {
        "id": 86902,
        "type": "message",
        "date": "2023-06-12T23:09:40",
        "date_unixtime": "1686591580",
        "edited": "2023-06-12T23:52:14",
        "edited_unixtime": "1686594134",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1204,
        "height": 420,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/TN2Clt"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/TN2Clt"
         }
        ]
       },
       {
        "id": 86903,
        "type": "message",
        "date": "2023-06-12T23:35:14",
        "date_unixtime": "1686593114",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Halonix 10 Watt B22D LED Cool Day Light Bulb @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43D7MEE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Halonix 10 Watt B22D LED Cool Day Light Bulb @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43D7MEE"
         }
        ]
       },
       {
        "id": 86904,
        "type": "message",
        "date": "2023-06-12T23:36:01",
        "date_unixtime": "1686593161",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1113,
        "height": 542,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/znUPqh"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/znUPqh"
         }
        ]
       },
       {
        "id": 86905,
        "type": "message",
        "date": "2023-06-12T23:37:14",
        "date_unixtime": "1686593234",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1157,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/h5kwiJ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/h5kwiJ"
         }
        ]
       },
       {
        "id": 86906,
        "type": "message",
        "date": "2023-06-12T23:51:08",
        "date_unixtime": "1686594068",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 548,
        "text": [
         "Zebronics Zeb-Power Wired USB Mouse @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N1a09W"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics Zeb-Power Wired USB Mouse @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N1a09W"
         }
        ]
       },
       {
        "id": 86907,
        "type": "message",
        "date": "2023-06-13T00:14:42",
        "date_unixtime": "1686595482",
        "edited": "2023-06-13T05:20:44",
        "edited_unixtime": "1686613844",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 333,
        "text": [
         "The Man Company Midnight Express Sale \n\n🛍 Buy 1 Get 1 FREE Across Sitewide +\n✅ 5% Off on Online Payment\n\n✅ Use Code: B1G1\n\n👉 Link: ",
         {
          "type": "link",
          "text": "https://extp.in/6wHZRO"
         },
         "\n\n📌 Validity: 12 AM to 6 AM daily till the end of the month."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "The Man Company Midnight Express Sale \n\n🛍 Buy 1 Get 1 FREE Across Sitewide +\n✅ 5% Off on Online Payment\n\n✅ Use Code: B1G1\n\n👉 Link: "
         },
         {
          "type": "link",
          "text": "https://extp.in/6wHZRO"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Validity: 12 AM to 6 AM daily till the end of the month."
         }
        ]
       },
       {
        "id": 86908,
        "type": "message",
        "date": "2023-06-13T00:15:33",
        "date_unixtime": "1686595533",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1246,
        "height": 445,
        "text": [
         "Flipkart: IFB 8 kg 5 Star 2X Power Steam, Hard Water Wash Fully Automatic Front Load Washing Machine @ Rs.27740 (Effective Price)\n\n",
         {
          "type": "link",
          "text": "https://extp.in/1btrsm"
         },
         "\n\nRs.3250 Instant Discount On SBI Credit Cards"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: IFB 8 kg 5 Star 2X Power Steam, Hard Water Wash Fully Automatic Front Load Washing Machine @ Rs.27740 (Effective Price)\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/1btrsm"
         },
         {
          "type": "plain",
          "text": "\n\nRs.3250 Instant Discount On SBI Credit Cards"
         }
        ]
       },
       {
        "id": 86909,
        "type": "message",
        "date": "2023-06-13T00:19:38",
        "date_unixtime": "1686595778",
        "edited": "2023-06-13T00:31:02",
        "edited_unixtime": "1686596462",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1062,
        "height": 396,
        "text": [
         "Min. 70% Off On Jack & Jones Clothing.\n\nMen's :   ",
         {
          "type": "link",
          "text": "https://amzn.to/42ySboo"
         },
         "\nBoy’s :  ",
         {
          "type": "link",
          "text": "https://amzn.to/46cnkkD"
         },
         "\n\nMin. 70% Off On Levi’s Clothing + Coupon.\n\nMen's :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3CHM2vH"
         },
         "\nWomen's :  ",
         {
          "type": "link",
          "text": "https://amzn.to/460p4wV"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Min. 70% Off On Jack & Jones Clothing.\n\nMen's :   "
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ySboo"
         },
         {
          "type": "plain",
          "text": "\nBoy’s :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46cnkkD"
         },
         {
          "type": "plain",
          "text": "\n\nMin. 70% Off On Levi’s Clothing + Coupon.\n\nMen's :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CHM2vH"
         },
         {
          "type": "plain",
          "text": "\nWomen's :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/460p4wV"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 86910,
        "type": "message",
        "date": "2023-06-13T00:20:08",
        "date_unixtime": "1686595808",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 619,
        "text": [
         "Integriti Men's Slim T-Shirt (Pack of 3) @324\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3N6KsYO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Integriti Men's Slim T-Shirt (Pack of 3) @324\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N6KsYO"
         }
        ]
       },
       {
        "id": 86911,
        "type": "message",
        "date": "2023-06-13T00:20:34",
        "date_unixtime": "1686595834",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1026,
        "height": 402,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2Dqybq"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2Dqybq"
         }
        ]
       },
       {
        "id": 86912,
        "type": "message",
        "date": "2023-06-13T00:21:10",
        "date_unixtime": "1686595870",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1008,
        "height": 403,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/vEm9yl"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/vEm9yl"
         }
        ]
       },
       {
        "id": 86913,
        "type": "message",
        "date": "2023-06-13T00:22:16",
        "date_unixtime": "1686595936",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1051,
        "height": 395,
        "text": [
         "Men Shirt @929\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3oZMoKI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men Shirt @929\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oZMoKI"
         }
        ]
       },
       {
        "id": 86914,
        "type": "message",
        "date": "2023-06-13T00:23:43",
        "date_unixtime": "1686596023",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1256,
        "height": 429,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/qKqAGW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/qKqAGW"
         }
        ]
       },
       {
        "id": 86915,
        "type": "message",
        "date": "2023-06-13T00:25:50",
        "date_unixtime": "1686596150",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 632,
        "text": [
         "Neostreak Men's Slim fit Polo @320\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JwwxdR"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Neostreak Men's Slim fit Polo @320\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JwwxdR"
         }
        ]
       },
       {
        "id": 86916,
        "type": "message",
        "date": "2023-06-13T00:26:17",
        "date_unixtime": "1686596177",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1022,
        "height": 380,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/d0uRsp"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/d0uRsp"
         }
        ]
       },
       {
        "id": 86917,
        "type": "message",
        "date": "2023-06-13T00:26:49",
        "date_unixtime": "1686596209",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1029,
        "height": 489,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/QILNBQ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/QILNBQ"
         }
        ]
       },
       {
        "id": 86918,
        "type": "message",
        "date": "2023-06-13T00:27:26",
        "date_unixtime": "1686596246",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 579,
        "text": [
         "L'Oreal Paris Shampoo @494\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3X0TZ8e"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "L'Oreal Paris Shampoo @494\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3X0TZ8e"
         }
        ]
       },
       {
        "id": 86919,
        "type": "message",
        "date": "2023-06-13T00:34:08",
        "date_unixtime": "1686596648",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1052,
        "height": 397,
        "text": [
         "Men's Slim T-Shirt @168\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3J9CwVo"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men's Slim T-Shirt @168\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J9CwVo"
         }
        ]
       },
       {
        "id": 86920,
        "type": "message",
        "date": "2023-06-13T00:35:02",
        "date_unixtime": "1686596702",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "Maybelline New York Waterproof Mascara @400\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42zFvxA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Maybelline New York Waterproof Mascara @400\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42zFvxA"
         }
        ]
       },
       {
        "id": 86921,
        "type": "message",
        "date": "2023-06-13T00:36:22",
        "date_unixtime": "1686596782",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "Maybelline New York Kajal @189\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/42zZPyz"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Maybelline New York Kajal @189\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42zZPyz"
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
  // await driver.get("https://amazon.in");
  // await driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
  // await driver
  //   .findElement(By.id("ap_email"))
  //   .sendKeys("Avinash1Affiliate@gmail.com");
  // await driver.findElement(By.id("continue")).click();
  // await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
  // await driver.findElement(By.id("signInSubmit")).click();
  // await driver.sleep(1000);
  // await driver.actions()
  //     .keyDown(Key.CONTROL)
  //     // .keyDown(Key.TAB)
  //     .sendKeys('t')
  //     .keyUp(Key.CONTROL)
  //     // .keyUp(Key.TAB)
  //     // .sendKeys('b')
  //     .perform()

  let linkvalue;
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
  let otherUrls = "";
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
                  text = text + " \n";
                  btext = btext + " \n";

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
              else if (
                Input[i].text_entities[j].type.includes("link") &&
                !Input[i].text_entities[j].text.includes("amzn")
              ) {
                //generic

                // else if(Input[i].text_entities[j].type.includes("link") ){ //for all(amazon and generic - ekaro)
                // else if((Input[i].text_entities[j].type.includes("link")) && (
                // (Input[i].from.includes("Telugu Tech World") &&  !Input[i].text_entities[j].href.includes("amzn"))
                // (!Input[i].from.includes("Telugu Tech World") && Input[i].text_entities[j].text.includes("amzn")))){
                console.log("Other than Amzn Links");
                
                if(!Input[i].from.includes("All1App")){
                  console.log("Entered into Other than Amzn Links");
                // console.log('All including  Amzn Links');
                await driver.get(Input[i].text_entities[j].text);
                // otherurl = await driver.get();
                let strUrl = await driver.getCurrentUrl();
                console.log('Other than Amazon Url is ',strUrl);
                // await driver.get(`https://wa.me/919866017750?text=newLink${strUrl}`);


                    //Whatsapp Clean Code
                  //   await driver.get(`https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp`);
                  //   try{
                  //     await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
                  //     await driver.actions()
                  //             .sendKeys(strUrl)
                  //             .perform()

                  //     await driver.actions()
                  //             .sendKeys(Key.RETURN)
                  //             .perform()

                  // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),30000).click();
                  // await driver.sleep(5000);
                  // await driver.actions()
                  // .keyDown(Key.TAB)
                  // .keyUp(Key.TAB);
                  // sendKeys(Key.RETURN)
                  // .perform()
                  //   }
                  //   catch(e){
                  //     console.log('Other than Amzn whatsapp error')
                  //   }
                otherUrls = otherUrls + strUrl + "\n"
                // otherurl = await driver.get(await driver.getCurrentUrl());
                // await driver.get
                // console.log('otherurl is '+String(otherurl));
                await driver.get("https://earnkaro.com/create-earn-link");
                await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                if (Input[i].text_entities[j].text.includes("amzn")) {
                  // await driver.actions()
                  // .sendKeys(Input[i].text_entities[j].text)
                  // .sendKeys(String(otherurl))
                  // .sendKeys(Input[i].text_entities[j].href) //telugu deals
                  // .perform()
                } else {
                  console.log("Other than Amazon");
                  // break;
                }
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

                text = text + earnlink;
                // photo="https://m.media-amazon.com/images/I/91pIt7I-aVL._SY450_.jpg"
                telegram("","@all1app",text);
                console.log('Called telegram for other than amazon')
                text = "";
                btext = "";
                photo = "";
                // continue;//new change 14th Nov
                break;
              }
              }
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
              for (l = 0; l < 10; l++) {
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
              // var app = JSON.stringify({
              var app = JSON.parse({
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
  console.log("\nOtherUrls");
  console.log(otherUrls);
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
