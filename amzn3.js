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
   "id": 85087,
   "type": "message",
   "date": "2023-06-08T10:48:51",
   "date_unixtime": "1686201531",
   "edited": "2023-06-08T14:28:56",
   "edited_unixtime": "1686214736",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1009,
   "height": 396,
   "text": [
    "Min. 80% Off On Branded Luggage\n\nMaster Link : ",
    {
     "type": "link",
     "text": "https://extp.in/Gr4gS7"
    },
    "\n\nSmall : ",
    {
     "type": "link",
     "text": "https://extp.in/vywVIH"
    },
    "\nMedium : ",
    {
     "type": "link",
     "text": "https://extp.in/3XJ0N1"
    },
    "\nLarge : ",
    {
     "type": "link",
     "text": "https://extp.in/3XJ0N1"
    },
    "\n\nPack Of 2 : ",
    {
     "type": "link",
     "text": "https://extp.in/RfqgJx"
    },
    "\nPack Of 3 : ",
    {
     "type": "link",
     "text": "https://extp.in/RfqgJx"
    },
    "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link : ",
    {
     "type": "link",
     "text": "https://extp.in/dYDply"
    },
    "\n\nSmall : ",
    {
     "type": "link",
     "text": "https://extp.in/OVRFqw"
    },
    "\nMedium : ",
    {
     "type": "link",
     "text": "https://extp.in/YYGy1Y"
    },
    "\nLarge : ",
    {
     "type": "link",
     "text": "https://extp.in/YYGy1Y"
    },
    "\n\nPack Of 2 : ",
    {
     "type": "link",
     "text": "https://extp.in/pPhNg2"
    },
    "\nPack Of 3 : ",
    {
     "type": "link",
     "text": "https://extp.in/wW4IZT"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Min. 80% Off On Branded Luggage\n\nMaster Link : "
    },
    {
     "type": "link",
     "text": "https://extp.in/Gr4gS7"
    },
    {
     "type": "plain",
     "text": "\n\nSmall : "
    },
    {
     "type": "link",
     "text": "https://extp.in/vywVIH"
    },
    {
     "type": "plain",
     "text": "\nMedium : "
    },
    {
     "type": "link",
     "text": "https://extp.in/3XJ0N1"
    },
    {
     "type": "plain",
     "text": "\nLarge : "
    },
    {
     "type": "link",
     "text": "https://extp.in/3XJ0N1"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 2 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/RfqgJx"
    },
    {
     "type": "plain",
     "text": "\nPack Of 3 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/RfqgJx"
    },
    {
     "type": "plain",
     "text": "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link : "
    },
    {
     "type": "link",
     "text": "https://extp.in/dYDply"
    },
    {
     "type": "plain",
     "text": "\n\nSmall : "
    },
    {
     "type": "link",
     "text": "https://extp.in/OVRFqw"
    },
    {
     "type": "plain",
     "text": "\nMedium : "
    },
    {
     "type": "link",
     "text": "https://extp.in/YYGy1Y"
    },
    {
     "type": "plain",
     "text": "\nLarge : "
    },
    {
     "type": "link",
     "text": "https://extp.in/YYGy1Y"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 2 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/pPhNg2"
    },
    {
     "type": "plain",
     "text": "\nPack Of 3 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/wW4IZT"
    }
   ]
  },
  {
   "id": 85088,
   "type": "message",
   "date": "2023-06-08T10:49:25",
   "date_unixtime": "1686201565",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1178,
   "height": 422,
   "text": [
    "Kesh King Shampoo 600 ml @ 55% Off\n\n",
    {
     "type": "link",
     "text": "https://extp.in/Pj9iOy"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Kesh King Shampoo 600 ml @ 55% Off\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/Pj9iOy"
    }
   ]
  },
  {
   "id": 85089,
   "type": "message",
   "date": "2023-06-08T10:50:02",
   "date_unixtime": "1686201602",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1013,
   "height": 413,
   "text": [
    "Li Ning Badminton Racquet from Rs.399\n\n",
    {
     "type": "link",
     "text": "https://extp.in/N5XIte"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Li Ning Badminton Racquet from Rs.399\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/N5XIte"
    }
   ]
  },
  {
   "id": 85090,
   "type": "message",
   "date": "2023-06-08T10:50:36",
   "date_unixtime": "1686201636",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1012,
   "height": 435,
   "text": [
    "Bedsheets from 197\n\n",
    {
     "type": "link",
     "text": "https://extp.in/0bvooy"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bedsheets from 197\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/0bvooy"
    }
   ]
  },
  {
   "id": 85091,
   "type": "message",
   "date": "2023-06-08T10:51:04",
   "date_unixtime": "1686201664",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1184,
   "height": 421,
   "text": [
    "Boult Audio XCharge Neckband At Rs.699\n\nBuy - ",
    {
     "type": "link",
     "text": "https://extp.in/hIXQvC"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Boult Audio XCharge Neckband At Rs.699\n\nBuy - "
    },
    {
     "type": "link",
     "text": "https://extp.in/hIXQvC"
    }
   ]
  },
  {
   "id": 85092,
   "type": "message",
   "date": "2023-06-08T10:51:37",
   "date_unixtime": "1686201697",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1043,
   "height": 478,
   "text": [
    "GRAB : Metronaut Men's Tracksuits Starts @ rs 379\n\n",
    {
     "type": "link",
     "text": "https://extp.in/ivqj7W"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GRAB : Metronaut Men's Tracksuits Starts @ rs 379\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/ivqj7W"
    }
   ]
  },
  {
   "id": 85093,
   "type": "message",
   "date": "2023-06-08T10:52:44",
   "date_unixtime": "1686201764",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 590,
   "height": 381,
   "text": [
    "📛📛 Get Rs.500 Worth Flipkart Gift Voucher + Flat Rs 1000 PW Cashback + Lifetime UNLIMITED 5% CASHBACK On All Flipkart & Myntra Purchases.\n\n➡️  Apply For Flipkart Axis Credit Card - Best Shopping Credit Card🔥🔥\n\n👉 Apply Here: ",
    {
     "type": "link",
     "text": "https://extp.in/2tdRIe"
    },
    "\n\n🎁 Benefits:\n->  Get Rs.500 Worth Flipkart Gift Voucher.\n-> 15% Cashback on 1st Myntra Order\n->  5% Lifetime Cashback on Flipkart & Myntra\n->  4% Lifetime Cashback on Uber, Swiggy & 1MG\n-> 1.5% Cashback on all other spends\n-> 4 Complimentary Domestic Lounge visits\n-> 1% Fuel surcharge waiver on your transaction of Rs 400 or more. 😱😱\n\n*Annual Fee of Rs 500 is Waived On spending ₹2,00,000 or more in a year."
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "📛📛 Get Rs.500 Worth Flipkart Gift Voucher + Flat Rs 1000 PW Cashback + Lifetime UNLIMITED 5% CASHBACK On All Flipkart & Myntra Purchases.\n\n➡️  Apply For Flipkart Axis Credit Card - Best Shopping Credit Card🔥🔥\n\n👉 Apply Here: "
    },
    {
     "type": "link",
     "text": "https://extp.in/2tdRIe"
    },
    {
     "type": "plain",
     "text": "\n\n🎁 Benefits:\n->  Get Rs.500 Worth Flipkart Gift Voucher.\n-> 15% Cashback on 1st Myntra Order\n->  5% Lifetime Cashback on Flipkart & Myntra\n->  4% Lifetime Cashback on Uber, Swiggy & 1MG\n-> 1.5% Cashback on all other spends\n-> 4 Complimentary Domestic Lounge visits\n-> 1% Fuel surcharge waiver on your transaction of Rs 400 or more. 😱😱\n\n*Annual Fee of Rs 500 is Waived On spending ₹2,00,000 or more in a year."
    }
   ]
  },
  {
   "id": 85094,
   "type": "message",
   "date": "2023-06-08T10:53:20",
   "date_unixtime": "1686201800",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 776,
   "height": 381,
   "text": [
    "Myntra : Min 50% Off On Branded Deodrants from ₹99\n\n",
    {
     "type": "link",
     "text": "https://extp.in/7RJB1l"
    },
    "\n\nDenver : ",
    {
     "type": "link",
     "text": "https://extp.in/Wl3rB0"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Min 50% Off On Branded Deodrants from ₹99\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/7RJB1l"
    },
    {
     "type": "plain",
     "text": "\n\nDenver : "
    },
    {
     "type": "link",
     "text": "https://extp.in/Wl3rB0"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85095,
   "type": "message",
   "date": "2023-06-08T10:53:52",
   "date_unixtime": "1686201832",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1240,
   "height": 462,
   "text": [
    "Bata Loafers @ 649\n\n",
    {
     "type": "link",
     "text": "https://extp.in/FNbgj2"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bata Loafers @ 649\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/FNbgj2"
    }
   ]
  },
  {
   "id": 85096,
   "type": "message",
   "date": "2023-06-08T10:54:21",
   "date_unixtime": "1686201861",
   "edited": "2023-06-08T11:22:13",
   "edited_unixtime": "1686203533",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1262,
   "height": 433,
   "text": [
    "Boult Calling Smartwatch @ Rs 1599\n\n",
    {
     "type": "link",
     "text": "https://extp.in/LN4EW8"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Boult Calling Smartwatch @ Rs 1599\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/LN4EW8"
    }
   ]
  },
  {
   "id": 85097,
   "type": "message",
   "date": "2023-06-08T10:55:29",
   "date_unixtime": "1686201929",
   "edited": "2023-06-08T10:55:51",
   "edited_unixtime": "1686201951",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1190,
   "height": 595,
   "text": [
    "Get Flat ₹800 CashBack On Min Order ₹8,799 On REDMI 12C Mobiles\n\n",
    {
     "type": "bold",
     "text": "▶️ Collect Here\n\n"
    },
    "🔗 ",
    {
     "type": "link",
     "text": "https://amzn.to/42oyZtm"
    },
    "\n\n",
    {
     "type": "bold",
     "text": "Pay Using UPI To Get Cashback.\n\n▶️ Redmi 12C 4GB RAM, 64GB @ ₹7,999\n\n"
    },
    "🔗 ",
    {
     "type": "link",
     "text": "https://amzn.to/42zLNgl"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Get Flat ₹800 CashBack On Min Order ₹8,799 On REDMI 12C Mobiles\n\n"
    },
    {
     "type": "bold",
     "text": "▶️ Collect Here\n\n"
    },
    {
     "type": "plain",
     "text": "🔗 "
    },
    {
     "type": "link",
     "text": "https://amzn.to/42oyZtm"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "bold",
     "text": "Pay Using UPI To Get Cashback.\n\n▶️ Redmi 12C 4GB RAM, 64GB @ ₹7,999\n\n"
    },
    {
     "type": "plain",
     "text": "🔗 "
    },
    {
     "type": "link",
     "text": "https://amzn.to/42zLNgl"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85098,
   "type": "message",
   "date": "2023-06-08T10:56:31",
   "date_unixtime": "1686201991",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 874,
   "height": 677,
   "text": [
    "LEE COOPER Watches From ₹2,724\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/fVc5uI"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "LEE COOPER Watches From ₹2,724\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/fVc5uI"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85099,
   "type": "message",
   "date": "2023-06-08T10:56:59",
   "date_unixtime": "1686202019",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 868,
   "height": 665,
   "text": [
    "Provogue Belts From ₹149\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/vJkkS6"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Provogue Belts From ₹149\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/vJkkS6"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85100,
   "type": "message",
   "date": "2023-06-08T10:57:39",
   "date_unixtime": "1686202059",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 980,
   "height": 369,
   "text": [
    {
     "type": "hashtag",
     "text": "#Ajio"
    },
    " Womens Handbags From ₹319\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/cDsuQy"
    },
    "\n\n❌ Regular price @ ₹799"
   ],
   "text_entities": [
    {
     "type": "hashtag",
     "text": "#Ajio"
    },
    {
     "type": "plain",
     "text": " Womens Handbags From ₹319\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/cDsuQy"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹799"
    }
   ]
  },
  {
   "id": 85101,
   "type": "message",
   "date": "2023-06-08T10:58:04",
   "date_unixtime": "1686202084",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 759,
   "height": 370,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    " High Star Boys Printed Jacket Starts @ ₹279\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/GROzy9"
    },
    "\n\n❌ Regular price @ ₹750"
   ],
   "text_entities": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    {
     "type": "plain",
     "text": " High Star Boys Printed Jacket Starts @ ₹279\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/GROzy9"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹750"
    }
   ]
  },
  {
   "id": 85102,
   "type": "message",
   "date": "2023-06-08T10:58:30",
   "date_unixtime": "1686202110",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 488,
   "text": [
    "Lenovo 300 Wireless Compact Mouse @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45SMcxh"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lenovo 300 Wireless Compact Mouse @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45SMcxh"
    }
   ]
  },
  {
   "id": 85103,
   "type": "message",
   "date": "2023-06-08T10:58:55",
   "date_unixtime": "1686202135",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 585,
   "text": [
    "Fire-Boltt Phoenix Smart Watch  ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OW8sR3"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Phoenix Smart Watch  "
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
     "text": "https://amzn.to/3OW8sR3"
    }
   ]
  },
  {
   "id": 85104,
   "type": "message",
   "date": "2023-06-08T10:59:22",
   "date_unixtime": "1686202162",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "pTron Bassbuds Duo in Ear Earbuds  @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NkUebj"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "pTron Bassbuds Duo in Ear Earbuds  @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NkUebj"
    }
   ]
  },
  {
   "id": 85105,
   "type": "message",
   "date": "2023-06-08T10:59:55",
   "date_unixtime": "1686202195",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 511,
   "text": [
    "La Opala, Novo Collection, Opal Glass Dinner Set ",
    {
     "type": "mention",
     "text": "@1058"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NiyiNO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "La Opala, Novo Collection, Opal Glass Dinner Set "
    },
    {
     "type": "mention",
     "text": "@1058"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NiyiNO"
    }
   ]
  },
  {
   "id": 85106,
   "type": "message",
   "date": "2023-06-08T11:00:26",
   "date_unixtime": "1686202226",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 598,
   "text": [
    "Steelbird SB-33 ARM 7Wings ISI Certified Open Face Helmet @749\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43I3dZa"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Steelbird SB-33 ARM 7Wings ISI Certified Open Face Helmet @749\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43I3dZa"
    }
   ]
  },
  {
   "id": 85107,
   "type": "message",
   "date": "2023-06-08T11:00:46",
   "date_unixtime": "1686202246",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1252,
   "height": 393,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/rLdr92"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/rLdr92"
    }
   ]
  },
  {
   "id": 85108,
   "type": "message",
   "date": "2023-06-08T11:03:26",
   "date_unixtime": "1686202406",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 537,
   "text": [
    "Oppo Enco Buds Bluetooth True Wireless in Ear Earbuds  ",
    {
     "type": "mention",
     "text": "@1599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42JvdLr"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Oppo Enco Buds Bluetooth True Wireless in Ear Earbuds  "
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
     "text": "https://amzn.to/42JvdLr"
    }
   ]
  },
  {
   "id": 85109,
   "type": "message",
   "date": "2023-06-08T11:03:49",
   "date_unixtime": "1686202429",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 795,
   "height": 380,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/BlUVZJ"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/BlUVZJ"
    }
   ]
  },
  {
   "id": 85110,
   "type": "message",
   "date": "2023-06-08T11:04:13",
   "date_unixtime": "1686202453",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 991,
   "height": 463,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/BWTwVv"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/BWTwVv"
    }
   ]
  },
  {
   "id": 85111,
   "type": "message",
   "date": "2023-06-08T11:04:43",
   "date_unixtime": "1686202483",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1146,
   "height": 388,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/5UUKHb"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/5UUKHb"
    }
   ]
  },
  {
   "id": 85112,
   "type": "message",
   "date": "2023-06-08T11:05:45",
   "date_unixtime": "1686202545",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1054,
   "height": 471,
   "text": [
    "🔗",
    {
     "type": "link",
     "text": "https://extp.in/C0v0cG"
    },
    "\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/cCcX4g"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/C0v0cG"
    },
    {
     "type": "plain",
     "text": "\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/cCcX4g"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85113,
   "type": "message",
   "date": "2023-06-08T11:06:24",
   "date_unixtime": "1686202584",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 590,
   "text": [
    "Fire-Boltt Phoenix Smart Watch  ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WT0wlB"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Phoenix Smart Watch  "
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
     "text": "https://amzn.to/3WT0wlB"
    }
   ]
  },
  {
   "id": 85114,
   "type": "message",
   "date": "2023-06-08T11:06:56",
   "date_unixtime": "1686202616",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 583,
   "text": [
    "Cockatoo SKP-TP Skipping Rope @48\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Cj0olR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Cockatoo SKP-TP Skipping Rope @48\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Cj0olR"
    }
   ]
  },
  {
   "id": 85115,
   "type": "message",
   "date": "2023-06-08T11:07:23",
   "date_unixtime": "1686202643",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 610,
   "text": [
    "Skybags Unisex Gucci Fabric Backpacks @454\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42teKKY"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Skybags Unisex Gucci Fabric Backpacks @454\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42teKKY"
    }
   ]
  },
  {
   "id": 85116,
   "type": "message",
   "date": "2023-06-08T11:08:03",
   "date_unixtime": "1686202683",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 627,
   "text": [
    "Nature Purify Afghani Anjeer Figs - 1kg @575\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oWenLh"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nature Purify Afghani Anjeer Figs - 1kg @575\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oWenLh"
    }
   ]
  },
  {
   "id": 85117,
   "type": "message",
   "date": "2023-06-08T11:08:33",
   "date_unixtime": "1686202713",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 578,
   "text": [
    "pTron Tangent Evo with 14Hrs Playback, Bluetooth 5.0 @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3IXxStS"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "pTron Tangent Evo with 14Hrs Playback, Bluetooth 5.0 @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3IXxStS"
    }
   ]
  },
  {
   "id": 85118,
   "type": "message",
   "date": "2023-06-08T11:09:00",
   "date_unixtime": "1686202740",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 501,
   "text": [
    "Aristocrat Polyester Hard 53 cms Luggage ",
    {
     "type": "mention",
     "text": "@2050"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3IZFnAc"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Aristocrat Polyester Hard 53 cms Luggage "
    },
    {
     "type": "mention",
     "text": "@2050"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3IZFnAc"
    }
   ]
  },
  {
   "id": 85119,
   "type": "message",
   "date": "2023-06-08T11:09:25",
   "date_unixtime": "1686202765",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 595,
   "text": [
    "boAt Newly Launched Rockerz 255 Touch Neckband  ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oVNtTG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Newly Launched Rockerz 255 Touch Neckband  "
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
     "text": "https://amzn.to/3oVNtTG"
    }
   ]
  },
  {
   "id": 85120,
   "type": "message",
   "date": "2023-06-08T11:09:50",
   "date_unixtime": "1686202790",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 591,
   "text": [
    "Dabur Vatika Health Shampoo - 640ml @262\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43sfWjf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Dabur Vatika Health Shampoo - 640ml @262\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43sfWjf"
    }
   ]
  },
  {
   "id": 85121,
   "type": "message",
   "date": "2023-06-08T11:10:14",
   "date_unixtime": "1686202814",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 525,
   "text": [
    "Fastrack Reflex Vox Smartwatch ",
    {
     "type": "mention",
     "text": "@1995"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43rp9bf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fastrack Reflex Vox Smartwatch "
    },
    {
     "type": "mention",
     "text": "@1995"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43rp9bf"
    }
   ]
  },
  {
   "id": 85122,
   "type": "message",
   "date": "2023-06-08T11:10:44",
   "date_unixtime": "1686202844",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 548,
   "text": [
    "Noise Buds VS201 V2 in-Ear Truly Wireless Earbuds @999\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WXgniV"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Noise Buds VS201 V2 in-Ear Truly Wireless Earbuds @999\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WXgniV"
    }
   ]
  },
  {
   "id": 85123,
   "type": "message",
   "date": "2023-06-08T11:11:12",
   "date_unixtime": "1686202872",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 536,
   "text": [
    "Ant Esports GM50 Optical Gaming Mouse @289\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43KK0WU"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ant Esports GM50 Optical Gaming Mouse @289\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43KK0WU"
    }
   ]
  },
  {
   "id": 85124,
   "type": "message",
   "date": "2023-06-08T11:11:36",
   "date_unixtime": "1686202896",
   "edited": "2023-06-08T16:45:02",
   "edited_unixtime": "1686222902",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 551,
   "text": [
    "Tizum V7 5V 2.1A USB Wall Charger Adapter @99\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43Q0QUb"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Tizum V7 5V 2.1A USB Wall Charger Adapter @99\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43Q0QUb"
    }
   ]
  },
  {
   "id": 85125,
   "type": "message",
   "date": "2023-06-08T11:12:02",
   "date_unixtime": "1686202922",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 743,
   "text": [
    "Bourge Mens Moda-z2 Running Shoes @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42qI0SB"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bourge Mens Moda-z2 Running Shoes @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42qI0SB"
    }
   ]
  },
  {
   "id": 85126,
   "type": "message",
   "date": "2023-06-08T11:12:28",
   "date_unixtime": "1686202948",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 581,
   "text": [
    "BALTRA Savy Wall and table fan Multi Purpose Fan ",
    {
     "type": "mention",
     "text": "@1259"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MUBYny"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "BALTRA Savy Wall and table fan Multi Purpose Fan "
    },
    {
     "type": "mention",
     "text": "@1259"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MUBYny"
    }
   ]
  },
  {
   "id": 85127,
   "type": "message",
   "date": "2023-06-08T11:13:21",
   "date_unixtime": "1686203001",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 632,
   "text": [
    "Bellavie Dual Mop Bucket ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42tfb84"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bellavie Dual Mop Bucket "
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
     "text": "https://amzn.to/42tfb84"
    }
   ]
  },
  {
   "id": 85128,
   "type": "message",
   "date": "2023-06-08T11:13:48",
   "date_unixtime": "1686203028",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 570,
   "text": [
    "pTron Tangent Duo Made in India Bluetooth @449\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43uBlYV"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "pTron Tangent Duo Made in India Bluetooth @449\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43uBlYV"
    }
   ]
  },
  {
   "id": 85129,
   "type": "message",
   "date": "2023-06-08T11:14:12",
   "date_unixtime": "1686203052",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1251,
   "height": 436,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/523w5x"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/523w5x"
    }
   ]
  },
  {
   "id": 85130,
   "type": "message",
   "date": "2023-06-08T11:14:39",
   "date_unixtime": "1686203079",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 534,
   "text": [
    "Xiaomi NotebookPro ",
    {
     "type": "mention",
     "text": "@42999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTJ9ku"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Xiaomi NotebookPro "
    },
    {
     "type": "mention",
     "text": "@42999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTJ9ku"
    }
   ]
  },
  {
   "id": 85131,
   "type": "message",
   "date": "2023-06-08T11:15:06",
   "date_unixtime": "1686203106",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 574,
   "text": [
    "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones ",
    {
     "type": "mention",
     "text": "@1599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J6FOc7"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones "
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
     "text": "https://amzn.to/3J6FOc7"
    }
   ]
  },
  {
   "id": 85132,
   "type": "message",
   "date": "2023-06-08T11:15:45",
   "date_unixtime": "1686203145",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "boAt Micro USB @99}\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiTU6A"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Micro USB @99}\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiTU6A"
    }
   ]
  },
  {
   "id": 85133,
   "type": "message",
   "date": "2023-06-08T11:16:14",
   "date_unixtime": "1686203174",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1255,
   "height": 630,
   "text": [
    "VIMAL JONNEY Men Regular Fit Cotton Blended Round Neck Tshirts @657\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NiOe2z"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VIMAL JONNEY Men Regular Fit Cotton Blended Round Neck Tshirts @657\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NiOe2z"
    }
   ]
  },
  {
   "id": 85134,
   "type": "message",
   "date": "2023-06-08T11:19:06",
   "date_unixtime": "1686203346",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 472,
   "text": [
    "Trident Comfort Living 120 Thread Count 100% Cotton Bedsheet @545\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qp9k6m"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Trident Comfort Living 120 Thread Count 100% Cotton Bedsheet @545\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qp9k6m"
    }
   ]
  },
  {
   "id": 85135,
   "type": "message",
   "date": "2023-06-08T11:19:36",
   "date_unixtime": "1686203376",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 599,
   "text": [
    "Asian Paints TruCare Hand Tools Kit @799\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45Qnb65"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Asian Paints TruCare Hand Tools Kit @799\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45Qnb65"
    }
   ]
  },
  {
   "id": 85136,
   "type": "message",
   "date": "2023-06-08T11:20:02",
   "date_unixtime": "1686203402",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 628,
   "text": [
    "Nasher Miles Dalhousie Hard-Sided Poycarbonate Cabin Luggage  ",
    {
     "type": "mention",
     "text": "@2399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P2yRwG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nasher Miles Dalhousie Hard-Sided Poycarbonate Cabin Luggage  "
    },
    {
     "type": "mention",
     "text": "@2399"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P2yRwG"
    }
   ]
  },
  {
   "id": 85137,
   "type": "message",
   "date": "2023-06-08T11:20:30",
   "date_unixtime": "1686203430",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 497,
   "text": [
    "Zebronics, ZEB-NC3300 USB Powered Laptop Cooling Pad  @509\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P2m9hl"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Zebronics, ZEB-NC3300 USB Powered Laptop Cooling Pad  @509\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P2m9hl"
    }
   ]
  },
  {
   "id": 85138,
   "type": "message",
   "date": "2023-06-08T11:21:21",
   "date_unixtime": "1686203481",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 594,
   "text": [
    "GIZGA Essentials 2 in 1 Laptop  /Notebook/MacBook Tabletop Stand @339\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CgMZur"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GIZGA Essentials 2 in 1 Laptop  /Notebook/MacBook Tabletop Stand @339\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CgMZur"
    }
   ]
  },
  {
   "id": 85140,
   "type": "message",
   "date": "2023-06-08T11:21:59",
   "date_unixtime": "1686203519",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 480,
   "text": [
    "Wireless Doorbell, Himster Waterproof Door Bell Chime Kit @934\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MQnp4q"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Wireless Doorbell, Himster Waterproof Door Bell Chime Kit @934\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MQnp4q"
    }
   ]
  },
  {
   "id": 85141,
   "type": "message",
   "date": "2023-06-08T11:22:32",
   "date_unixtime": "1686203552",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 547,
   "text": [
    "ZEBRONICS Zeb-Warrior 4, 2.0 Speaker  @749\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MUfZgI"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ZEBRONICS Zeb-Warrior 4, 2.0 Speaker  @749\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MUfZgI"
    }
   ]
  },
  {
   "id": 85142,
   "type": "message",
   "date": "2023-06-08T11:23:00",
   "date_unixtime": "1686203580",
   "edited": "2023-06-08T13:51:44",
   "edited_unixtime": "1686212504",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1271,
   "height": 499,
   "text": [
    "ASIAN Men's Express-08 Sports Running @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WUSDvO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ASIAN Men's Express-08 Sports Running @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WUSDvO"
    }
   ]
  },
  {
   "id": 85143,
   "type": "message",
   "date": "2023-06-08T11:23:33",
   "date_unixtime": "1686203613",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1260,
   "height": 467,
   "text": [
    "Birde Men Mesh Sports Shoes @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CfYUsw"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Birde Men Mesh Sports Shoes @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CfYUsw"
    }
   ]
  },
  {
   "id": 85144,
   "type": "message",
   "date": "2023-06-08T11:24:07",
   "date_unixtime": "1686203647",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 779,
   "height": 375,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/yemfT6"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/yemfT6"
    }
   ]
  },
  {
   "id": 85145,
   "type": "message",
   "date": "2023-06-08T11:24:54",
   "date_unixtime": "1686203694",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 568,
   "text": [
    "GLUN Automatic Wireless Portable Mini Rechargeable Water Bottle Can Dispenser Pump  @334\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CjnCZe"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GLUN Automatic Wireless Portable Mini Rechargeable Water Bottle Can Dispenser Pump  @334\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CjnCZe"
    }
   ]
  },
  {
   "id": 85146,
   "type": "message",
   "date": "2023-06-08T11:25:15",
   "date_unixtime": "1686203715",
   "edited": "2023-06-08T15:52:16",
   "edited_unixtime": "1686219736",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1023,
   "height": 459,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/wriYvH"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/wriYvH"
    }
   ]
  },
  {
   "id": 85147,
   "type": "message",
   "date": "2023-06-08T11:25:56",
   "date_unixtime": "1686203756",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1059,
   "height": 392,
   "text": [
    "Loss Fit Half Sleeve Streetwear T Shirt @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42sl05J"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loss Fit Half Sleeve Streetwear T Shirt @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42sl05J"
    }
   ]
  },
  {
   "id": 85148,
   "type": "message",
   "date": "2023-06-08T11:26:45",
   "date_unixtime": "1686203805",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 778,
   "height": 375,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/RWf6EV"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/RWf6EV"
    }
   ]
  },
  {
   "id": 85149,
   "type": "message",
   "date": "2023-06-08T11:27:09",
   "date_unixtime": "1686203829",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1181,
   "height": 456,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/zzMhmK"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/zzMhmK"
    }
   ]
  },
  {
   "id": 85150,
   "type": "message",
   "date": "2023-06-08T11:27:36",
   "date_unixtime": "1686203856",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 495,
   "text": [
    "ASIAN Men's Newton-01 Sports Running Shoes  @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3X30E1R"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ASIAN Men's Newton-01 Sports Running Shoes  @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3X30E1R"
    }
   ]
  },
  {
   "id": 85151,
   "type": "message",
   "date": "2023-06-08T11:28:06",
   "date_unixtime": "1686203886",
   "edited": "2023-06-08T11:28:23",
   "edited_unixtime": "1686203903",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1083,
   "height": 524,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/oHVbsY"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/oHVbsY"
    }
   ]
  },
  {
   "id": 85152,
   "type": "message",
   "date": "2023-06-08T11:28:47",
   "date_unixtime": "1686203927",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1258,
   "height": 425,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/n7g7Pt"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/n7g7Pt"
    }
   ]
  },
  {
   "id": 85153,
   "type": "message",
   "date": "2023-06-08T11:29:20",
   "date_unixtime": "1686203960",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 616,
   "text": [
    "USHA Maxx Air Ultra 400MM Table Fan ",
    {
     "type": "mention",
     "text": "@1799"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NhPnHA"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "USHA Maxx Air Ultra 400MM Table Fan "
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
     "text": "https://amzn.to/3NhPnHA"
    }
   ]
  },
  {
   "id": 85154,
   "type": "message",
   "date": "2023-06-08T11:29:48",
   "date_unixtime": "1686203988",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 582,
   "text": [
    "Pringle 2 Jar Mixer Grinder @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MS7hiZ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pringle 2 Jar Mixer Grinder @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MS7hiZ"
    }
   ]
  },
  {
   "id": 85155,
   "type": "message",
   "date": "2023-06-08T11:30:39",
   "date_unixtime": "1686204039",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 506,
   "text": [
    "Cello Xylo Without Cushion Chair  ",
    {
     "type": "mention",
     "text": "@7500"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WROcSF"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Cello Xylo Without Cushion Chair  "
    },
    {
     "type": "mention",
     "text": "@7500"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WROcSF"
    }
   ]
  },
  {
   "id": 85156,
   "type": "message",
   "date": "2023-06-08T11:31:06",
   "date_unixtime": "1686204066",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 583,
   "text": [
    "AGARO Rex Dlx Sonic AA Battery Electric Toothbrush  @364\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oWg7UP"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AGARO Rex Dlx Sonic AA Battery Electric Toothbrush  @364\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oWg7UP"
    }
   ]
  },
  {
   "id": 85157,
   "type": "message",
   "date": "2023-06-08T11:31:31",
   "date_unixtime": "1686204091",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1055,
   "height": 475,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/L2kkBe"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/L2kkBe"
    }
   ]
  },
  {
   "id": 85158,
   "type": "message",
   "date": "2023-06-08T11:31:56",
   "date_unixtime": "1686204116",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1113,
   "height": 417,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/2pIYPl"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/2pIYPl"
    }
   ]
  },
  {
   "id": 85159,
   "type": "message",
   "date": "2023-06-08T11:32:21",
   "date_unixtime": "1686204141",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1188,
   "height": 434,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/uAPf2Q"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/uAPf2Q"
    }
   ]
  },
  {
   "id": 85160,
   "type": "message",
   "date": "2023-06-08T11:32:57",
   "date_unixtime": "1686204177",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 801,
   "height": 365,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Os0tfw"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Os0tfw"
    }
   ]
  },
  {
   "id": 85161,
   "type": "message",
   "date": "2023-06-08T11:33:26",
   "date_unixtime": "1686204206",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1014,
   "height": 473,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/KX9pjs"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/KX9pjs"
    }
   ]
  },
  {
   "id": 85162,
   "type": "message",
   "date": "2023-06-08T11:33:54",
   "date_unixtime": "1686204234",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1193,
   "height": 401,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/qsEPKb"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/qsEPKb"
    }
   ]
  },
  {
   "id": 85163,
   "type": "message",
   "date": "2023-06-08T11:34:23",
   "date_unixtime": "1686204263",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 606,
   "text": [
    "Hammer Smart Plug @649\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qrDYfn"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Hammer Smart Plug @649\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qrDYfn"
    }
   ]
  },
  {
   "id": 85164,
   "type": "message",
   "date": "2023-06-08T11:34:47",
   "date_unixtime": "1686204287",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 382,
   "text": [
    "Pigeon 2 burner Gas Stove & Cookware Combo ",
    {
     "type": "mention",
     "text": "@2798"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43KJvMz"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pigeon 2 burner Gas Stove & Cookware Combo "
    },
    {
     "type": "mention",
     "text": "@2798"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43KJvMz"
    }
   ]
  },
  {
   "id": 85165,
   "type": "message",
   "date": "2023-06-08T11:35:08",
   "date_unixtime": "1686204308",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1186,
   "height": 458,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/M9uB17"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/M9uB17"
    }
   ]
  },
  {
   "id": 85166,
   "type": "message",
   "date": "2023-06-08T11:35:35",
   "date_unixtime": "1686204335",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 562,
   "text": [
    "Mivi Collar Flash Bluetooth Wireless in Ear Earphones @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ck5AFY"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Mivi Collar Flash Bluetooth Wireless in Ear Earphones @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ck5AFY"
    }
   ]
  },
  {
   "id": 85167,
   "type": "message",
   "date": "2023-06-08T11:36:03",
   "date_unixtime": "1686204363",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 518,
   "text": [
    "OnePlus Buds Pro Bluetooth Truly Wireless in Ear Earbuds ",
    {
     "type": "mention",
     "text": "@6989"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiCWoI"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "OnePlus Buds Pro Bluetooth Truly Wireless in Ear Earbuds "
    },
    {
     "type": "mention",
     "text": "@6989"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiCWoI"
    }
   ]
  },
  {
   "id": 85168,
   "type": "message",
   "date": "2023-06-08T11:36:32",
   "date_unixtime": "1686204392",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 500,
   "text": [
    "Ant Esports MK3400 V3 Pro Mechanical Pro World of Warship Edition Wired RGB Gaming Keyboard  ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OXUrSL"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ant Esports MK3400 V3 Pro Mechanical Pro World of Warship Edition Wired RGB Gaming Keyboard  "
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
     "text": "https://amzn.to/3OXUrSL"
    }
   ]
  },
  {
   "id": 85169,
   "type": "message",
   "date": "2023-06-08T11:37:22",
   "date_unixtime": "1686204442",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "Inalsa Oven MasterChef 16BK OTG  ",
    {
     "type": "mention",
     "text": "@2870"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oWgr5Z"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Inalsa Oven MasterChef 16BK OTG  "
    },
    {
     "type": "mention",
     "text": "@2870"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oWgr5Z"
    }
   ]
  },
  {
   "id": 85170,
   "type": "message",
   "date": "2023-06-08T11:37:50",
   "date_unixtime": "1686204470",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1252,
   "height": 408,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/iAMFv_"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/iAMFv_"
    }
   ]
  },
  {
   "id": 85172,
   "type": "message",
   "date": "2023-06-08T11:39:08",
   "date_unixtime": "1686204548",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "Crompton Laser Ray Neo 20W LED Batten @227\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiVPrO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Crompton Laser Ray Neo 20W LED Batten @227\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiVPrO"
    }
   ]
  },
  {
   "id": 85173,
   "type": "message",
   "date": "2023-06-08T11:39:37",
   "date_unixtime": "1686204577",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 625,
   "text": [
    "Havells HS4150 Ceramic Plates Hair Straightener ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43IlK7M"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Havells HS4150 Ceramic Plates Hair Straightener "
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
     "text": "https://amzn.to/43IlK7M"
    }
   ]
  },
  {
   "id": 85174,
   "type": "message",
   "date": "2023-06-08T11:41:23",
   "date_unixtime": "1686204683",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 595,
   "text": [
    "Ferro Round Dial Men's Analog Watch ",
    {
     "type": "mention",
     "text": "@2799"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43PRms8"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ferro Round Dial Men's Analog Watch "
    },
    {
     "type": "mention",
     "text": "@2799"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43PRms8"
    }
   ]
  },
  {
   "id": 85175,
   "type": "message",
   "date": "2023-06-08T11:41:46",
   "date_unixtime": "1686204706",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 533,
   "text": [
    "pTron Volta FC12 20W QC3.0 Smart USB Charger @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J2JYC1"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "pTron Volta FC12 20W QC3.0 Smart USB Charger @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J2JYC1"
    }
   ]
  },
  {
   "id": 85176,
   "type": "message",
   "date": "2023-06-08T11:42:38",
   "date_unixtime": "1686204758",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1015,
   "height": 479,
   "text": [
    "Flipkart: Up to 79% Off on Roadster Men's Jeans\n\n👉 Grab: ",
    {
     "type": "link",
     "text": "https://extp.in/hEy2PE"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Flipkart: Up to 79% Off on Roadster Men's Jeans\n\n👉 Grab: "
    },
    {
     "type": "link",
     "text": "https://extp.in/hEy2PE"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85177,
   "type": "message",
   "date": "2023-06-08T11:43:02",
   "date_unixtime": "1686204782",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1252,
   "height": 444,
   "text": [
    "[Edit - Deal Over] BERSACHE Running Shoes For Men 6 & 9uk @ ₹299\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/wR1yZG"
    },
    "\n\n❌ Regular price @ ₹750"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "[Edit - Deal Over] BERSACHE Running Shoes For Men 6 & 9uk @ ₹299\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/wR1yZG"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹750"
    }
   ]
  },
  {
   "id": 85178,
   "type": "message",
   "date": "2023-06-08T11:45:07",
   "date_unixtime": "1686204907",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 523,
   "text": [
    "Odomos Protect - Mosquito Repellent Liquid Vaporiser Refill 45ml each @143\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42tN9td"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Odomos Protect - Mosquito Repellent Liquid Vaporiser Refill 45ml each @143\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42tN9td"
    }
   ]
  },
  {
   "id": 85179,
   "type": "message",
   "date": "2023-06-08T11:45:37",
   "date_unixtime": "1686204937",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 607,
   "text": [
    "Pringle 2 Jar Mixer Grinder ",
    {
     "type": "mention",
     "text": "@1149"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43MEcft"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pringle 2 Jar Mixer Grinder "
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
     "text": "https://amzn.to/43MEcft"
    }
   ]
  },
  {
   "id": 85180,
   "type": "message",
   "date": "2023-06-08T11:46:27",
   "date_unixtime": "1686204987",
   "edited": "2023-06-08T16:04:23",
   "edited_unixtime": "1686220463",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1175,
   "height": 505,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/F2ofyJ"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/F2ofyJ"
    }
   ]
  },
  {
   "id": 85181,
   "type": "message",
   "date": "2023-06-08T11:47:14",
   "date_unixtime": "1686205034",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 594,
   "text": [
    "boAt Deuce USB 300 2 in 1 Type-C @189\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OVawZA"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Deuce USB 300 2 in 1 Type-C @189\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3OVawZA"
    }
   ]
  },
  {
   "id": 85182,
   "type": "message",
   "date": "2023-06-08T11:47:41",
   "date_unixtime": "1686205061",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 589,
   "text": [
    "HP 64GB Class 10 MicroSD Memory Card @748\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WXSXKv"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HP 64GB Class 10 MicroSD Memory Card @748\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WXSXKv"
    }
   ]
  },
  {
   "id": 85183,
   "type": "message",
   "date": "2023-06-08T11:48:05",
   "date_unixtime": "1686205085",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 596,
   "text": [
    "AccuSure MT-32 Mercury-Free Digital Thermometer @179\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ck9sqK"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AccuSure MT-32 Mercury-Free Digital Thermometer @179\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ck9sqK"
    }
   ]
  },
  {
   "id": 85184,
   "type": "message",
   "date": "2023-06-08T11:48:25",
   "date_unixtime": "1686205105",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1216,
   "height": 441,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/bGorQr"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/bGorQr"
    }
   ]
  },
  {
   "id": 85185,
   "type": "message",
   "date": "2023-06-08T11:48:46",
   "date_unixtime": "1686205126",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1236,
   "height": 405,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jhlQI5"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jhlQI5"
    }
   ]
  },
  {
   "id": 85186,
   "type": "message",
   "date": "2023-06-08T11:50:48",
   "date_unixtime": "1686205248",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1032,
   "height": 457,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/ntEjtR"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/ntEjtR"
    }
   ]
  },
  {
   "id": 85187,
   "type": "message",
   "date": "2023-06-08T11:51:16",
   "date_unixtime": "1686205276",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 816,
   "height": 370,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/eo5emV"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/eo5emV"
    }
   ]
  },
  {
   "id": 85188,
   "type": "message",
   "date": "2023-06-08T11:51:58",
   "date_unixtime": "1686205318",
   "edited": "2023-06-08T11:52:15",
   "edited_unixtime": "1686205335",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 806,
   "height": 372,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/EJPLlG"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/EJPLlG"
    }
   ]
  },
  {
   "id": 85189,
   "type": "message",
   "date": "2023-06-08T11:52:54",
   "date_unixtime": "1686205374",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 524,
   "text": [
    "OSG Crafters Happy Birthday Letter Foil Balloon Set  @233\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qB207I"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "OSG Crafters Happy Birthday Letter Foil Balloon Set  @233\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qB207I"
    }
   ]
  },
  {
   "id": 85190,
   "type": "message",
   "date": "2023-06-08T11:53:25",
   "date_unixtime": "1686205405",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 540,
   "text": [
    "Farmley Roasted & Flavoured Healthy Makhana Snacks @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1xqhL"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Farmley Roasted & Flavoured Healthy Makhana Snacks @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1xqhL"
    }
   ]
  },
  {
   "id": 85191,
   "type": "message",
   "date": "2023-06-08T11:53:48",
   "date_unixtime": "1686205428",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1202,
   "height": 386,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/n5jDck"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/n5jDck"
    }
   ]
  },
  {
   "id": 85192,
   "type": "message",
   "date": "2023-06-08T11:54:22",
   "date_unixtime": "1686205462",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1225,
   "height": 431,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/MDWhoD"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/MDWhoD"
    }
   ]
  },
  {
   "id": 85193,
   "type": "message",
   "date": "2023-06-08T11:54:58",
   "date_unixtime": "1686205498",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1033,
   "height": 484,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/ZCeA1x"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/ZCeA1x"
    }
   ]
  },
  {
   "id": 85194,
   "type": "message",
   "date": "2023-06-08T11:55:34",
   "date_unixtime": "1686205534",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1142,
   "height": 481,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/BMtIVd"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/BMtIVd"
    }
   ]
  },
  {
   "id": 85195,
   "type": "message",
   "date": "2023-06-08T11:56:02",
   "date_unixtime": "1686205562",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1205,
   "height": 450,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/D73myk"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/D73myk"
    }
   ]
  },
  {
   "id": 85196,
   "type": "message",
   "date": "2023-06-08T11:56:30",
   "date_unixtime": "1686205590",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 560,
   "text": [
    "DENVER Hamilton Imperial Deo  @574\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qz6RGR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "DENVER Hamilton Imperial Deo  @574\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qz6RGR"
    }
   ]
  },
  {
   "id": 85197,
   "type": "message",
   "date": "2023-06-08T11:57:05",
   "date_unixtime": "1686205625",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 556,
   "text": [
    "Tosaa Manual Press Fruit & Vegetable Chopper @139\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J3Y5GW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Tosaa Manual Press Fruit & Vegetable Chopper @139\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J3Y5GW"
    }
   ]
  },
  {
   "id": 85198,
   "type": "message",
   "date": "2023-06-08T11:58:56",
   "date_unixtime": "1686205736",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 582,
   "text": [
    "OnePlus Nord Buds 2 True Wireless in Ear Earbuds ",
    {
     "type": "mention",
     "text": "@2998"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43txLOQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "OnePlus Nord Buds 2 True Wireless in Ear Earbuds "
    },
    {
     "type": "mention",
     "text": "@2998"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43txLOQ"
    }
   ]
  },
  {
   "id": 85199,
   "type": "message",
   "date": "2023-06-08T11:59:27",
   "date_unixtime": "1686205767",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 617,
   "text": [
    "Buildskill Pro BIXO 3.6V Cordless/Battery Powered Light Screwdriver Machine  @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45KlV4i"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Buildskill Pro BIXO 3.6V Cordless/Battery Powered Light Screwdriver Machine  @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45KlV4i"
    }
   ]
  },
  {
   "id": 85200,
   "type": "message",
   "date": "2023-06-08T11:59:49",
   "date_unixtime": "1686205789",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1203,
   "height": 450,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/NmixOW"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/NmixOW"
    }
   ]
  },
  {
   "id": 85201,
   "type": "message",
   "date": "2023-06-08T12:00:15",
   "date_unixtime": "1686205815",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1134,
   "height": 615,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/dpwres"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/dpwres"
    }
   ]
  },
  {
   "id": 85202,
   "type": "message",
   "date": "2023-06-08T12:00:44",
   "date_unixtime": "1686205844",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 550,
   "text": [
    "Boroplus Body Lotion  @150\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P3xvlm"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Boroplus Body Lotion  @150\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P3xvlm"
    }
   ]
  },
  {
   "id": 85203,
   "type": "message",
   "date": "2023-06-08T12:02:43",
   "date_unixtime": "1686205963",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 576,
   "text": [
    "Bajaj Bahar Fresh 225 mm Air Fan  ",
    {
     "type": "mention",
     "text": "@1249"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oWjwmz"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bajaj Bahar Fresh 225 mm Air Fan  "
    },
    {
     "type": "mention",
     "text": "@1249"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oWjwmz"
    }
   ]
  },
  {
   "id": 85204,
   "type": "message",
   "date": "2023-06-08T12:04:23",
   "date_unixtime": "1686206063",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 602,
   "text": [
    "Pidilite Fevistik Super Glue Stick Non-Toxic Transparent Adhesive @26\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42soPI7"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pidilite Fevistik Super Glue Stick Non-Toxic Transparent Adhesive @26\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42soPI7"
    }
   ]
  },
  {
   "id": 85205,
   "type": "message",
   "date": "2023-06-08T12:04:50",
   "date_unixtime": "1686206090",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 579,
   "text": [
    "Lifelong Duos 500 Watt 2 Jar Mixer Grinder  ",
    {
     "type": "mention",
     "text": "@1599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42JAW3T"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lifelong Duos 500 Watt 2 Jar Mixer Grinder  "
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
     "text": "https://amzn.to/42JAW3T"
    }
   ]
  },
  {
   "id": 85206,
   "type": "message",
   "date": "2023-06-08T12:05:19",
   "date_unixtime": "1686206119",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 589,
   "text": [
    "Wesley Milestone 2.0 Casual Waterproof Laptop Backpack @570\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WS7ebv"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Wesley Milestone 2.0 Casual Waterproof Laptop Backpack @570\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WS7ebv"
    }
   ]
  },
  {
   "id": 85207,
   "type": "message",
   "date": "2023-06-08T12:05:48",
   "date_unixtime": "1686206148",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1194,
   "height": 405,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/KQ7VZX"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/KQ7VZX"
    }
   ]
  },
  {
   "id": 85208,
   "type": "message",
   "date": "2023-06-08T12:06:15",
   "date_unixtime": "1686206175",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 562,
   "text": [
    "(Renewed) CP Plus 1080P Full HD Smart WiFi Camera @890\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43IosKu"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "(Renewed) CP Plus 1080P Full HD Smart WiFi Camera @890\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43IosKu"
    }
   ]
  },
  {
   "id": 85209,
   "type": "message",
   "date": "2023-06-08T12:06:58",
   "date_unixtime": "1686206218",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 510,
   "text": [
    "Belkin Game Consoles, Speakers @999\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qrHzdn"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Belkin Game Consoles, Speakers @999\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qrHzdn"
    }
   ]
  },
  {
   "id": 85210,
   "type": "message",
   "date": "2023-06-08T12:07:37",
   "date_unixtime": "1686206257",
   "edited": "2023-06-08T12:44:58",
   "edited_unixtime": "1686208498",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1270,
   "height": 604,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/0O70rT"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/0O70rT"
    }
   ]
  },
  {
   "id": 85211,
   "type": "message",
   "date": "2023-06-08T12:08:11",
   "date_unixtime": "1686206291",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 560,
   "text": [
    "Bajaj Esteem 400 mm Wall Fan ",
    {
     "type": "mention",
     "text": "@2029"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MYR1ws"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bajaj Esteem 400 mm Wall Fan "
    },
    {
     "type": "mention",
     "text": "@2029"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MYR1ws"
    }
   ]
  },
  {
   "id": 85212,
   "type": "message",
   "date": "2023-06-08T12:08:39",
   "date_unixtime": "1686206319",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1245,
   "height": 423,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/ACZhgC"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/ACZhgC"
    }
   ]
  },
  {
   "id": 85213,
   "type": "message",
   "date": "2023-06-08T12:09:05",
   "date_unixtime": "1686206345",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "PTron Bassbuds Air in-Ear TWS Earbuds @589\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MXMFpj"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "PTron Bassbuds Air in-Ear TWS Earbuds @589\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MXMFpj"
    }
   ]
  },
  {
   "id": 85214,
   "type": "message",
   "date": "2023-06-08T12:09:38",
   "date_unixtime": "1686206378",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 543,
   "text": [
    "McAfee @640\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oVTxLW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "McAfee @640\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oVTxLW"
    }
   ]
  },
  {
   "id": 85215,
   "type": "message",
   "date": "2023-06-08T12:10:04",
   "date_unixtime": "1686206404",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 583,
   "text": [
    "Fire-Boltt Rage Full Touch 1.28” Display & 60 Sports Modes with IP68 Rating Smartwatch ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P2qIIv"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Rage Full Touch 1.28” Display & 60 Sports Modes with IP68 Rating Smartwatch "
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
     "text": "https://amzn.to/3P2qIIv"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85216,
   "type": "message",
   "date": "2023-06-08T12:10:27",
   "date_unixtime": "1686206427",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 570,
   "text": [
    "Elv Foldable, Portable, Tablet/Phone Stand @79\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43PzldM"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Elv Foldable, Portable, Tablet/Phone Stand @79\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43PzldM"
    }
   ]
  },
  {
   "id": 85217,
   "type": "message",
   "date": "2023-06-08T12:10:57",
   "date_unixtime": "1686206457",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 574,
   "text": [
    "The Better Home Stainless Steel Water Bottle 1 Litre @335\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MVe4ID"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Better Home Stainless Steel Water Bottle 1 Litre @335\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MVe4ID"
    }
   ]
  },
  {
   "id": 85218,
   "type": "message",
   "date": "2023-06-08T12:11:26",
   "date_unixtime": "1686206486",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 607,
   "text": [
    "Nasher Miles Dalhousie Hard-Sided Poycarbonate Luggage Set of 3 Rose Gold Trolley Bags ",
    {
     "type": "mention",
     "text": "@8649"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45SS9dB"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nasher Miles Dalhousie Hard-Sided Poycarbonate Luggage Set of 3 Rose Gold Trolley Bags "
    },
    {
     "type": "mention",
     "text": "@8649"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45SS9dB"
    }
   ]
  },
  {
   "id": 85219,
   "type": "message",
   "date": "2023-06-08T12:11:59",
   "date_unixtime": "1686206519",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 596,
   "text": [
    "Gizga Essentials Laptop Bag Sleeve Case Cover Pouch  @269\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43MH3Fd"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Gizga Essentials Laptop Bag Sleeve Case Cover Pouch  @269\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43MH3Fd"
    }
   ]
  },
  {
   "id": 85220,
   "type": "message",
   "date": "2023-06-08T12:12:23",
   "date_unixtime": "1686206543",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 556,
   "text": [
    "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV ",
    {
     "type": "mention",
     "text": "@30490"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43OMBPO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV "
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
     "text": "https://amzn.to/43OMBPO"
    }
   ]
  },
  {
   "id": 85221,
   "type": "message",
   "date": "2023-06-08T12:12:52",
   "date_unixtime": "1686206572",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1041,
   "height": 430,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/rxcyXv"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/rxcyXv"
    }
   ]
  },
  {
   "id": 85222,
   "type": "message",
   "date": "2023-06-08T12:13:17",
   "date_unixtime": "1686206597",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 525,
   "text": [
    "Dyazo Wired Gaming Keyboard and Mouse Combo  @699\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CjacfG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Dyazo Wired Gaming Keyboard and Mouse Combo  @699\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CjacfG"
    }
   ]
  },
  {
   "id": 85223,
   "type": "message",
   "date": "2023-06-08T12:13:41",
   "date_unixtime": "1686206621",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 632,
   "text": [
    "London Hills Men's Slim Fit T-Shirt @699\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45UAJNK"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "London Hills Men's Slim Fit T-Shirt @699\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45UAJNK"
    }
   ]
  },
  {
   "id": 85224,
   "type": "message",
   "date": "2023-06-08T12:14:17",
   "date_unixtime": "1686206657",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 603,
   "text": [
    "Cosbary Noise Cancelling Gaming Stereo Headphone  @999\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43tpdY2"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Cosbary Noise Cancelling Gaming Stereo Headphone  @999\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43tpdY2"
    }
   ]
  },
  {
   "id": 85225,
   "type": "message",
   "date": "2023-06-08T12:14:56",
   "date_unixtime": "1686206696",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 637,
   "text": [
    "VGR V-015 Professional Hair Trimmer  @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P3yDW8"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VGR V-015 Professional Hair Trimmer  @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P3yDW8"
    }
   ]
  },
  {
   "id": 85226,
   "type": "message",
   "date": "2023-06-08T12:15:42",
   "date_unixtime": "1686206742",
   "edited": "2023-06-08T13:11:36",
   "edited_unixtime": "1686210096",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1043,
   "height": 476,
   "text": [
    "💥 Flipkart Grab Deals 💥\n\n➡️ WROGN Backpack Starts at Rs.349.\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/73UB9a"
    },
    "\n\n➡️ Rucksacks Starts at Rs.444. \n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/1mcvLE"
    },
    "\n\n➡️ Pack Of 2 Duffel Bag at Rs.506.\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/Oinj6H"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "💥 Flipkart Grab Deals 💥\n\n➡️ WROGN Backpack Starts at Rs.349.\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/73UB9a"
    },
    {
     "type": "plain",
     "text": "\n\n➡️ Rucksacks Starts at Rs.444. \n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/1mcvLE"
    },
    {
     "type": "plain",
     "text": "\n\n➡️ Pack Of 2 Duffel Bag at Rs.506.\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/Oinj6H"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85227,
   "type": "message",
   "date": "2023-06-08T12:16:35",
   "date_unixtime": "1686206795",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 591,
   "text": [
    "Noise Newly Launched Buds VS401 in-Ear Truly Wireless Earbuds  ",
    {
     "type": "mention",
     "text": "@1299"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42v4jGI"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Noise Newly Launched Buds VS401 in-Ear Truly Wireless Earbuds  "
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
     "text": "https://amzn.to/42v4jGI"
    }
   ]
  },
  {
   "id": 85228,
   "type": "message",
   "date": "2023-06-08T12:17:23",
   "date_unixtime": "1686206843",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 546,
   "text": [
    "HealthSense BP Machine ",
    {
     "type": "mention",
     "text": "@1099"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CfuCpM"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HealthSense BP Machine "
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
     "text": "https://amzn.to/3CfuCpM"
    }
   ]
  },
  {
   "id": 85229,
   "type": "message",
   "date": "2023-06-08T12:17:45",
   "date_unixtime": "1686206865",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1212,
   "height": 440,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/F0e7GY"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/F0e7GY"
    }
   ]
  },
  {
   "id": 85230,
   "type": "message",
   "date": "2023-06-08T12:18:09",
   "date_unixtime": "1686206889",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 540,
   "text": [
    "Nivea Dark Spot Reduction Face Wash, 100ml (Pack of 3) @388\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42tkt3q"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nivea Dark Spot Reduction Face Wash, 100ml (Pack of 3) @388\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42tkt3q"
    }
   ]
  },
  {
   "id": 85231,
   "type": "message",
   "date": "2023-06-08T12:19:29",
   "date_unixtime": "1686206969",
   "edited": "2023-06-08T13:22:20",
   "edited_unixtime": "1686210740",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "Paperkraft Expressions Gift Set  @197\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qve0YG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Paperkraft Expressions Gift Set  @197\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qve0YG"
    }
   ]
  },
  {
   "id": 85232,
   "type": "message",
   "date": "2023-06-08T12:19:54",
   "date_unixtime": "1686206994",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 592,
   "text": [
    "Lavie Sport Strato Medium 55 cms Duffle Bag for Travel  @789\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OZrjKS"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lavie Sport Strato Medium 55 cms Duffle Bag for Travel  @789\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3OZrjKS"
    }
   ]
  },
  {
   "id": 85233,
   "type": "message",
   "date": "2023-06-08T12:20:19",
   "date_unixtime": "1686207019",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 543,
   "text": [
    "AmazonBasics Wireless Sound Bar ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45VrfSK"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics Wireless Sound Bar "
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
     "text": "https://amzn.to/45VrfSK"
    }
   ]
  },
  {
   "id": 85234,
   "type": "message",
   "date": "2023-06-08T12:20:43",
   "date_unixtime": "1686207043",
   "edited": "2023-06-08T12:34:27",
   "edited_unixtime": "1686207867",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 815,
   "height": 382,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/8PrPya"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/8PrPya"
    }
   ]
  },
  {
   "id": 85235,
   "type": "message",
   "date": "2023-06-08T12:21:10",
   "date_unixtime": "1686207070",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 594,
   "text": [
    "Wesley Spartan 45 Ltr Unisex trekking Rucksack Travel Backpack @759\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43EKduO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Wesley Spartan 45 Ltr Unisex trekking Rucksack Travel Backpack @759\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43EKduO"
    }
   ]
  },
  {
   "id": 85236,
   "type": "message",
   "date": "2023-06-08T12:21:35",
   "date_unixtime": "1686207095",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 544,
   "text": [
    "Bevzilla Instant Coffee Kit  @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43KMHrw"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bevzilla Instant Coffee Kit  @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43KMHrw"
    }
   ]
  },
  {
   "id": 85237,
   "type": "message",
   "date": "2023-06-08T12:22:02",
   "date_unixtime": "1686207122",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 606,
   "text": [
    "AccuSure MT-32 Mercury-Free Digital Thermometer @179\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CfuXsy"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AccuSure MT-32 Mercury-Free Digital Thermometer @179\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CfuXsy"
    }
   ]
  },
  {
   "id": 85238,
   "type": "message",
   "date": "2023-06-08T12:23:44",
   "date_unixtime": "1686207224",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 884,
   "height": 407,
   "text": [
    "Myntra : Flat 50% Off On Bata Footwears\n\nMen : ",
    {
     "type": "link",
     "text": "https://extp.in/byh3IU"
    },
    "\nWomen : ",
    {
     "type": "link",
     "text": "https://extp.in/szKgtG"
    },
    "\nBoys : ",
    {
     "type": "link",
     "text": "https://extp.in/zVIRf5"
    },
    "\nGirls : ",
    {
     "type": "link",
     "text": "https://extp.in/4pGZ1R"
    },
    "\n\n50-68% Off :  ",
    {
     "type": "link",
     "text": "https://amzn.to/45TDO0x"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Flat 50% Off On Bata Footwears\n\nMen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/byh3IU"
    },
    {
     "type": "plain",
     "text": "\nWomen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/szKgtG"
    },
    {
     "type": "plain",
     "text": "\nBoys : "
    },
    {
     "type": "link",
     "text": "https://extp.in/zVIRf5"
    },
    {
     "type": "plain",
     "text": "\nGirls : "
    },
    {
     "type": "link",
     "text": "https://extp.in/4pGZ1R"
    },
    {
     "type": "plain",
     "text": "\n\n50-68% Off :  "
    },
    {
     "type": "link",
     "text": "https://amzn.to/45TDO0x"
    }
   ]
  },
  {
   "id": 85239,
   "type": "message",
   "date": "2023-06-08T12:24:21",
   "date_unixtime": "1686207261",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 613,
   "text": [
    "BPL Accudigit DT04 Digital Thermometer @99\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45PjKfZ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "BPL Accudigit DT04 Digital Thermometer @99\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45PjKfZ"
    }
   ]
  },
  {
   "id": 85240,
   "type": "message",
   "date": "2023-06-08T12:38:52",
   "date_unixtime": "1686208132",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1213,
   "height": 397,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/MfSQbK"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/MfSQbK"
    }
   ]
  },
  {
   "id": 85241,
   "type": "message",
   "date": "2023-06-08T12:39:37",
   "date_unixtime": "1686208177",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 1280,
   "text": [
    "Godrej 564 L Multi Air Flow System, With Advanced Controls Frost Free Side-By-Side Refrigerator ",
    {
     "type": "mention",
     "text": "@54990"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oQXnWG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Godrej 564 L Multi Air Flow System, With Advanced Controls Frost Free Side-By-Side Refrigerator "
    },
    {
     "type": "mention",
     "text": "@54990"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oQXnWG"
    }
   ]
  },
  {
   "id": 85242,
   "type": "message",
   "date": "2023-06-08T12:39:37",
   "date_unixtime": "1686208177",
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
   "id": 85243,
   "type": "message",
   "date": "2023-06-08T12:40:07",
   "date_unixtime": "1686208207",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1038,
   "height": 492,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/qOpech"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/qOpech"
    }
   ]
  },
  {
   "id": 85244,
   "type": "message",
   "date": "2023-06-08T12:50:09",
   "date_unixtime": "1686208809",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1192,
   "height": 394,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/bltz7d"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/bltz7d"
    }
   ]
  },
  {
   "id": 85245,
   "type": "message",
   "date": "2023-06-08T12:50:35",
   "date_unixtime": "1686208835",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1000,
   "height": 476,
   "text": [
    "Loot 🚀 🚀 Womens Slippers From ₹99\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/dRbI_d"
    },
    "\n\n❌ Regular price @ ₹299"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot 🚀 🚀 Womens Slippers From ₹99\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/dRbI_d"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹299"
    }
   ]
  },
  {
   "id": 85246,
   "type": "message",
   "date": "2023-06-08T13:04:39",
   "date_unixtime": "1686209679",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 983,
   "height": 478,
   "text": [
    "AJIO: 80% Off On Baggit Women Wallets & Bags\n\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/reCpd2"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AJIO: 80% Off On Baggit Women Wallets & Bags\n\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/reCpd2"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85247,
   "type": "message",
   "date": "2023-06-08T13:05:29",
   "date_unixtime": "1686209729",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1217,
   "height": 438,
   "text": [
    "PUMA 34 L Backpack @ ₹679\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/RYRsob"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "PUMA 34 L Backpack @ ₹679\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/RYRsob"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85248,
   "type": "message",
   "date": "2023-06-08T13:06:17",
   "date_unixtime": "1686209777",
   "edited": "2023-06-08T15:50:23",
   "edited_unixtime": "1686219623",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 524,
   "height": 387,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    "  Branded Perfumes Upto 85% Off\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/6MtnCP"
    },
    "\n\nLow To High\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/9Fpjzl"
    },
    "\n\nApply Code : EXTRA15OFF  (Extra 15% Off)"
   ],
   "text_entities": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    {
     "type": "plain",
     "text": "  Branded Perfumes Upto 85% Off\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/6MtnCP"
    },
    {
     "type": "plain",
     "text": "\n\nLow To High\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/9Fpjzl"
    },
    {
     "type": "plain",
     "text": "\n\nApply Code : EXTRA15OFF  (Extra 15% Off)"
    }
   ]
  },
  {
   "id": 85249,
   "type": "message",
   "date": "2023-06-08T13:07:20",
   "date_unixtime": "1686209840",
   "edited": "2023-06-08T13:11:36",
   "edited_unixtime": "1686210096",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1196,
   "height": 428,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/tkMZpP"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/tkMZpP"
    }
   ]
  },
  {
   "id": 85250,
   "type": "message",
   "date": "2023-06-08T13:07:58",
   "date_unixtime": "1686209878",
   "edited": "2023-06-08T13:52:43",
   "edited_unixtime": "1686212563",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1006,
   "height": 528,
   "text": [
    "Master Link\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/pzToC9"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Master Link\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/pzToC9"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85251,
   "type": "message",
   "date": "2023-06-08T13:52:40",
   "date_unixtime": "1686212560",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "Loot 🚀 🚀 Levi's Men Briefs (All Size, Pack Of 3) @ ₹238\n\n🔗",
    {
     "type": "link",
     "text": "https://amzn.to/45Rovp8"
    },
    "\n\n❌ Regular price @ ₹410"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot 🚀 🚀 Levi's Men Briefs (All Size, Pack Of 3) @ ₹238\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45Rovp8"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹410"
    }
   ]
  },
  {
   "id": 85252,
   "type": "message",
   "date": "2023-06-08T13:53:16",
   "date_unixtime": "1686212596",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 793,
   "height": 369,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/vfqNCT"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/vfqNCT"
    }
   ]
  },
  {
   "id": 85253,
   "type": "message",
   "date": "2023-06-08T13:53:50",
   "date_unixtime": "1686212630",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1187,
   "height": 395,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/DZFU3m"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/DZFU3m"
    }
   ]
  },
  {
   "id": 85254,
   "type": "message",
   "date": "2023-06-08T13:54:33",
   "date_unixtime": "1686212673",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1213,
   "height": 447,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/uZwJay"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/uZwJay"
    }
   ]
  },
  {
   "id": 85255,
   "type": "message",
   "date": "2023-06-08T13:55:08",
   "date_unixtime": "1686212708",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 594,
   "text": [
    "Sounce 38W Type-C 20W PD & 18W 3.0 Qualcomm Certified Dual USB Car Charger @ ₹199\n\n🔗 ",
    {
     "type": "link",
     "text": "https://amzn.to/3NgpwzQ"
    },
    "\n\n❌ Regular price @ ₹499"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Sounce 38W Type-C 20W PD & 18W 3.0 Qualcomm Certified Dual USB Car Charger @ ₹199\n\n🔗 "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NgpwzQ"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹499"
    }
   ]
  },
  {
   "id": 85256,
   "type": "message",
   "date": "2023-06-08T13:55:42",
   "date_unixtime": "1686212742",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 600,
   "text": [
    "Skybags Unisex 17L Backpack @ ₹454\n\n🔗 ",
    {
     "type": "link",
     "text": "https://amzn.to/3P9DzIK"
    },
    "\n\n❌ Regular price @ ₹699"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Skybags Unisex 17L Backpack @ ₹454\n\n🔗 "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P9DzIK"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹699"
    }
   ]
  },
  {
   "id": 85257,
   "type": "message",
   "date": "2023-06-08T13:56:10",
   "date_unixtime": "1686212770",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 582,
   "text": [
    "Morphy Richards beard trimmer 9 Settings @ ₹799\n\n🔗 ",
    {
     "type": "link",
     "text": "https://amzn.to/3P1zkit"
    },
    "\n\n❌ Regular price @ ₹1,100"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Morphy Richards beard trimmer 9 Settings @ ₹799\n\n🔗 "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1zkit"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹1,100"
    }
   ]
  },
  {
   "id": 85258,
   "type": "message",
   "date": "2023-06-08T13:58:59",
   "date_unixtime": "1686212939",
   "edited": "2023-06-08T15:11:31",
   "edited_unixtime": "1686217291",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1179,
   "height": 372,
   "text": [
    {
     "type": "bold",
     "text": "OnePlus Community Sale : Upto ₹5000 Off with bank cards\n\n"
    },
    " ",
    {
     "type": "link",
     "text": "https://amzn.to/3MUXY1x"
    },
    "\n\n• OnePlus Nord CE 2 lite 5G \n\n ",
    {
     "type": "link",
     "text": "https://amzn.to/43OUZPi"
    },
    "\n\nGet Extra 2% Off , Use Code : ",
    {
     "type": "code",
     "text": "LY6VXAVA\n\n"
    },
    "• ",
    {
     "type": "bold",
     "text": "OnePlus 11 : Upto ₹1000 Off with bank cards\n\n"
    },
    " ",
    {
     "type": "link",
     "text": "https://amzn.to/3CfCeIS"
    },
    "\n\n• Realme 50i Prime : Get ₹80 OFF on select Realme models\n\n ",
    {
     "type": "link",
     "text": "https://amzn.to/43PUPa6"
    },
    "\n\nUse Code : ",
    {
     "type": "code",
     "text": "MCQLRAX5\n\n"
    },
    "• ",
    {
     "type": "bold",
     "text": "Realme GT 2 : Get ₹250 Off on select Realme models\n\n"
    },
    " ",
    {
     "type": "link",
     "text": "https://amzn.to/3quiYoq"
    },
    "\n\nUse Code : ",
    {
     "type": "code",
     "text": "A63L29DD\n\n"
    },
    "• ",
    {
     "type": "bold",
     "text": "Advantages Just for Prime :"
    },
    " Minimum 6 Months No Cost EMI :  ",
    {
     "type": "link",
     "text": "https://amzn.to/43FVQ4Q"
    },
    "\n\n• Smartphones EMI Carnival : Upto 24 months No Cost EMI :  ",
    {
     "type": "link",
     "text": "https://amzn.to/43oyWPs"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "bold",
     "text": "OnePlus Community Sale : Upto ₹5000 Off with bank cards\n\n"
    },
    {
     "type": "plain",
     "text": " "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MUXY1x"
    },
    {
     "type": "plain",
     "text": "\n\n• OnePlus Nord CE 2 lite 5G \n\n "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43OUZPi"
    },
    {
     "type": "plain",
     "text": "\n\nGet Extra 2% Off , Use Code : "
    },
    {
     "type": "code",
     "text": "LY6VXAVA\n\n"
    },
    {
     "type": "plain",
     "text": "• "
    },
    {
     "type": "bold",
     "text": "OnePlus 11 : Upto ₹1000 Off with bank cards\n\n"
    },
    {
     "type": "plain",
     "text": " "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CfCeIS"
    },
    {
     "type": "plain",
     "text": "\n\n• Realme 50i Prime : Get ₹80 OFF on select Realme models\n\n "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43PUPa6"
    },
    {
     "type": "plain",
     "text": "\n\nUse Code : "
    },
    {
     "type": "code",
     "text": "MCQLRAX5\n\n"
    },
    {
     "type": "plain",
     "text": "• "
    },
    {
     "type": "bold",
     "text": "Realme GT 2 : Get ₹250 Off on select Realme models\n\n"
    },
    {
     "type": "plain",
     "text": " "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3quiYoq"
    },
    {
     "type": "plain",
     "text": "\n\nUse Code : "
    },
    {
     "type": "code",
     "text": "A63L29DD\n\n"
    },
    {
     "type": "plain",
     "text": "• "
    },
    {
     "type": "bold",
     "text": "Advantages Just for Prime :"
    },
    {
     "type": "plain",
     "text": " Minimum 6 Months No Cost EMI :  "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43FVQ4Q"
    },
    {
     "type": "plain",
     "text": "\n\n• Smartphones EMI Carnival : Upto 24 months No Cost EMI :  "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43oyWPs"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85259,
   "type": "message",
   "date": "2023-06-08T14:01:28",
   "date_unixtime": "1686213088",
   "edited": "2023-06-08T22:45:41",
   "edited_unixtime": "1686244541",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1099,
   "height": 533,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Itr2tC"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Itr2tC"
    }
   ]
  },
  {
   "id": 85260,
   "type": "message",
   "date": "2023-06-08T14:02:13",
   "date_unixtime": "1686213133",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 589,
   "text": [
    "GIZGA essentials (25cm x 21cm Gaming Mouse Pad @89\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45MTGSN"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GIZGA essentials (25cm x 21cm Gaming Mouse Pad @89\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45MTGSN"
    }
   ]
  },
  {
   "id": 85261,
   "type": "message",
   "date": "2023-06-08T14:02:51",
   "date_unixtime": "1686213171",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1251,
   "height": 409,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Jy2bFg"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Jy2bFg"
    }
   ]
  },
  {
   "id": 85262,
   "type": "message",
   "date": "2023-06-08T14:03:37",
   "date_unixtime": "1686213217",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1129,
   "height": 439,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/PwwX4u"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/PwwX4u"
    }
   ]
  },
  {
   "id": 85263,
   "type": "message",
   "date": "2023-06-08T14:04:00",
   "date_unixtime": "1686213240",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1243,
   "height": 434,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/wqVl6J"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/wqVl6J"
    }
   ]
  },
  {
   "id": 85264,
   "type": "message",
   "date": "2023-06-08T14:04:27",
   "date_unixtime": "1686213267",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 595,
   "text": [
    "Escort Analog White Dial Men's Watch @940\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43R85eT"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Escort Analog White Dial Men's Watch @940\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43R85eT"
    }
   ]
  },
  {
   "id": 85265,
   "type": "message",
   "date": "2023-06-08T14:04:56",
   "date_unixtime": "1686213296",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 640,
   "text": [
    "KETCH Men Casual Pants @478\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43uS26s"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "KETCH Men Casual Pants @478\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43uS26s"
    }
   ]
  },
  {
   "id": 85266,
   "type": "message",
   "date": "2023-06-08T14:05:31",
   "date_unixtime": "1686213331",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1147,
   "height": 529,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/E8qQn0"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/E8qQn0"
    }
   ]
  },
  {
   "id": 85267,
   "type": "message",
   "date": "2023-06-08T14:10:59",
   "date_unixtime": "1686213659",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 581,
   "height": 261,
   "text": [
    "🚨 New Store Alert 🚨\n\nTatacliq Palette Is Live On Extrape.\n\n🎁 Flat Rs 200 Off for new users\n✅ Use Code: SAVE200\n\n🎁 Flat Rs 500 Off for old users on order above Rs 1999\n✅ Use Code: LOYAL500\n\n👉 Link: ",
    {
     "type": "link",
     "text": "https://extp.in/OMgJt2"
    },
    "\n\n👉 Bestsellers: ",
    {
     "type": "link",
     "text": "https://extp.in/JLfurQ"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "🚨 New Store Alert 🚨\n\nTatacliq Palette Is Live On Extrape.\n\n🎁 Flat Rs 200 Off for new users\n✅ Use Code: SAVE200\n\n🎁 Flat Rs 500 Off for old users on order above Rs 1999\n✅ Use Code: LOYAL500\n\n👉 Link: "
    },
    {
     "type": "link",
     "text": "https://extp.in/OMgJt2"
    },
    {
     "type": "plain",
     "text": "\n\n👉 Bestsellers: "
    },
    {
     "type": "link",
     "text": "https://extp.in/JLfurQ"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85268,
   "type": "message",
   "date": "2023-06-08T14:11:37",
   "date_unixtime": "1686213697",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 998,
   "height": 336,
   "text": [
    "24pcs Steel Dinner Set @ 949\n\n",
    {
     "type": "link",
     "text": "https://extp.in/AZX7rQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "24pcs Steel Dinner Set @ 949\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/AZX7rQ"
    }
   ]
  },
  {
   "id": 85269,
   "type": "message",
   "date": "2023-06-08T14:12:27",
   "date_unixtime": "1686213747",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 886,
   "height": 384,
   "text": [
    "MyGlamm Lipliner 80% off from ₹89\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/UlBfvL"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "MyGlamm Lipliner 80% off from ₹89\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/UlBfvL"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85270,
   "type": "message",
   "date": "2023-06-08T14:13:18",
   "date_unixtime": "1686213798",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "HUL Pureit Vital Pro Mineral RO+MF+UV in-Tank 7 Stage, 7L Wall mount Water Purifier  ",
    {
     "type": "mention",
     "text": "@15499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43KY4Qc"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HUL Pureit Vital Pro Mineral RO+MF+UV in-Tank 7 Stage, 7L Wall mount Water Purifier  "
    },
    {
     "type": "mention",
     "text": "@15499"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43KY4Qc"
    }
   ]
  },
  {
   "id": 85271,
   "type": "message",
   "date": "2023-06-08T14:13:59",
   "date_unixtime": "1686213839",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 555,
   "text": [
    "Orient Electric Pacific Air Decor | 1200mm BEE Star Rated Ceiling Fan ",
    {
     "type": "mention",
     "text": "@1800"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTgXyj"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Orient Electric Pacific Air Decor | 1200mm BEE Star Rated Ceiling Fan "
    },
    {
     "type": "mention",
     "text": "@1800"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTgXyj"
    }
   ]
  },
  {
   "id": 85272,
   "type": "message",
   "date": "2023-06-08T14:14:31",
   "date_unixtime": "1686213871",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 565,
   "text": [
    "Vatika Neelibhringa 21 Hair Growth Oil - 50ml @99\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MZ0rrO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Vatika Neelibhringa 21 Hair Growth Oil - 50ml @99\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MZ0rrO"
    }
   ]
  },
  {
   "id": 85273,
   "type": "message",
   "date": "2023-06-08T14:15:52",
   "date_unixtime": "1686213952",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 721,
   "text": [
    "Lee Cooper Mens Lc4419a Uniform Dress Shoe @735\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MOFlMQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lee Cooper Mens Lc4419a Uniform Dress Shoe @735\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MOFlMQ"
    }
   ]
  },
  {
   "id": 85274,
   "type": "message",
   "date": "2023-06-08T14:20:30",
   "date_unixtime": "1686214230",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1011,
   "height": 427,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Hs8B7U"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Hs8B7U"
    }
   ]
  },
  {
   "id": 85275,
   "type": "message",
   "date": "2023-06-08T14:20:58",
   "date_unixtime": "1686214258",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 581,
   "text": [
    "Sattva Classic XXXL Bean Bag ",
    {
     "type": "mention",
     "text": "@1445"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1Cd31"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Sattva Classic XXXL Bean Bag "
    },
    {
     "type": "mention",
     "text": "@1445"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1Cd31"
    }
   ]
  },
  {
   "id": 85276,
   "type": "message",
   "date": "2023-06-08T14:21:25",
   "date_unixtime": "1686214285",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 824,
   "height": 365,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/NupmpW"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/NupmpW"
    }
   ]
  },
  {
   "id": 85277,
   "type": "message",
   "date": "2023-06-08T14:22:34",
   "date_unixtime": "1686214354",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 591,
   "text": [
    "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband  @799\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J2Y5Hv"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Boult Audio FXCharge Wireless in Ear Bluetooth Neckband  @799\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J2Y5Hv"
    }
   ]
  },
  {
   "id": 85278,
   "type": "message",
   "date": "2023-06-08T14:23:13",
   "date_unixtime": "1686214393",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 584,
   "text": [
    "GNC Pro Performance 100% Whey Protein Powder  ",
    {
     "type": "mention",
     "text": "@2700"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3X2DIzW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GNC Pro Performance 100% Whey Protein Powder  "
    },
    {
     "type": "mention",
     "text": "@2700"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3X2DIzW"
    }
   ]
  },
  {
   "id": 85279,
   "type": "message",
   "date": "2023-06-08T14:24:08",
   "date_unixtime": "1686214448",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "Philips Audio TAH4205XTBK/00 Bluetooth 5.0, Bass Booster ",
    {
     "type": "mention",
     "text": "@2479"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qBA6c4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Philips Audio TAH4205XTBK/00 Bluetooth 5.0, Bass Booster "
    },
    {
     "type": "mention",
     "text": "@2479"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qBA6c4"
    }
   ]
  },
  {
   "id": 85280,
   "type": "message",
   "date": "2023-06-08T14:24:49",
   "date_unixtime": "1686214489",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 972,
   "height": 391,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/81SnGI"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/81SnGI"
    }
   ]
  },
  {
   "id": 85281,
   "type": "message",
   "date": "2023-06-08T14:25:30",
   "date_unixtime": "1686214530",
   "edited": "2023-06-08T15:06:12",
   "edited_unixtime": "1686216972",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 648,
   "text": [
    "Amazon Brand - Solimo Stainless Steel Insulated 24 Hour Hot or Cold Water Bottle  @699\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NjF8Tg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Solimo Stainless Steel Insulated 24 Hour Hot or Cold Water Bottle  @699\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NjF8Tg"
    }
   ]
  },
  {
   "id": 85282,
   "type": "message",
   "date": "2023-06-08T14:33:42",
   "date_unixtime": "1686215022",
   "edited": "2023-06-08T16:13:50",
   "edited_unixtime": "1686221030",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1108,
   "height": 387,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/SYu5aD"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/SYu5aD"
    }
   ]
  },
  {
   "id": 85283,
   "type": "message",
   "date": "2023-06-08T14:34:07",
   "date_unixtime": "1686215047",
   "edited": "2023-06-08T14:34:23",
   "edited_unixtime": "1686215063",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 627,
   "text": [
    "Amazon Brand - Vedaka Dry Fruit Combo - Almonds and Cashews @389\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Xbj94t"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Vedaka Dry Fruit Combo - Almonds and Cashews @389\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Xbj94t"
    }
   ]
  },
  {
   "id": 85284,
   "type": "message",
   "date": "2023-06-08T14:34:51",
   "date_unixtime": "1686215091",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 519,
   "text": [
    "VERVENIX 0.5W Attractive Sensor Led Night Light Lamp @199\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42yPT8C"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VERVENIX 0.5W Attractive Sensor Led Night Light Lamp @199\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42yPT8C"
    }
   ]
  },
  {
   "id": 85286,
   "type": "message",
   "date": "2023-06-08T14:35:21",
   "date_unixtime": "1686215121",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "Infinity (JBL Glide 500, 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone  @999\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45T49Mb"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Infinity (JBL Glide 500, 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone  @999\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45T49Mb"
    }
   ]
  },
  {
   "id": 85287,
   "type": "message",
   "date": "2023-06-08T14:36:55",
   "date_unixtime": "1686215215",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "75% Off : Pepe Jeans Men Pack Of 2 Briefs @119\n\nSize S : ",
    {
     "type": "link",
     "text": "https://extp.in/hiebUg"
    },
    "\n\nMore Min 70% Off : ",
    {
     "type": "link",
     "text": "https://extp.in/xHNu2w"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "75% Off : Pepe Jeans Men Pack Of 2 Briefs @119\n\nSize S : "
    },
    {
     "type": "link",
     "text": "https://extp.in/hiebUg"
    },
    {
     "type": "plain",
     "text": "\n\nMore Min 70% Off : "
    },
    {
     "type": "link",
     "text": "https://extp.in/xHNu2w"
    }
   ]
  },
  {
   "id": 85288,
   "type": "message",
   "date": "2023-06-08T14:37:22",
   "date_unixtime": "1686215242",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 557,
   "text": [
    "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds  ",
    {
     "type": "mention",
     "text": "@4790"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OWqZg5"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds  "
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
     "text": "https://amzn.to/3OWqZg5"
    }
   ]
  },
  {
   "id": 85289,
   "type": "message",
   "date": "2023-06-08T14:37:51",
   "date_unixtime": "1686215271",
   "edited": "2023-06-08T14:41:50",
   "edited_unixtime": "1686215510",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 781,
   "height": 382,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/hvH7XQ"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/hvH7XQ"
    }
   ]
  },
  {
   "id": 85290,
   "type": "message",
   "date": "2023-06-08T14:38:19",
   "date_unixtime": "1686215299",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 798,
   "height": 365,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/sNqSjV"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/sNqSjV"
    }
   ]
  },
  {
   "id": 85291,
   "type": "message",
   "date": "2023-06-08T15:04:17",
   "date_unixtime": "1686216857",
   "edited": "2023-06-08T18:58:25",
   "edited_unixtime": "1686230905",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1214,
   "height": 500,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    " Flat 70-75% Off On Being Human Clothing \n\n▶️ Men\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/LK_rCQ"
    },
    "\n\n▶️ T-shirts from ₹269\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/TKNXsw"
    },
    "\n\n▶️ Shirts from ₹599\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/LRKsuC"
    },
    "\n\n▶️ Jeans from ₹719\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/e68T9p"
    },
    "\n\n▶️ Trousers from ₹599\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/7zUUrw"
    },
    "\n\n▶️ Shorts from ₹449\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/vmfctF"
    },
    "\n\n▶️ Women\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/Gjrr0x"
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
     "text": " Flat 70-75% Off On Being Human Clothing \n\n▶️ Men\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/LK_rCQ"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ T-shirts from ₹269\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/TKNXsw"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Shirts from ₹599\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/LRKsuC"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Jeans from ₹719\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/e68T9p"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Trousers from ₹599\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/7zUUrw"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Shorts from ₹449\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/vmfctF"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Women\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/Gjrr0x"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85292,
   "type": "message",
   "date": "2023-06-08T15:06:47",
   "date_unixtime": "1686217007",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "Nivia Graffiti Rubber Moulded Basketball @449\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CgopKr"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nivia Graffiti Rubber Moulded Basketball @449\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CgopKr"
    }
   ]
  },
  {
   "id": 85293,
   "type": "message",
   "date": "2023-06-08T15:07:15",
   "date_unixtime": "1686217035",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1181,
   "height": 565,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/qgID2N"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/qgID2N"
    }
   ]
  },
  {
   "id": 85294,
   "type": "message",
   "date": "2023-06-08T15:07:48",
   "date_unixtime": "1686217068",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "GLUN® Lock Number Plastic 3 Code CH 13B @118\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P0RvVq"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GLUN® Lock Number Plastic 3 Code CH 13B @118\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P0RvVq"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85295,
   "type": "message",
   "date": "2023-06-08T15:08:22",
   "date_unixtime": "1686217102",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1050,
   "height": 363,
   "text": [
    "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch ",
    {
     "type": "mention",
     "text": "@1299"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MUzBBm"
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
     "text": "https://amzn.to/3MUzBBm"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85296,
   "type": "message",
   "date": "2023-06-08T15:08:55",
   "date_unixtime": "1686217135",
   "edited": "2023-06-08T17:36:50",
   "edited_unixtime": "1686226010",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 621,
   "text": [
    "VGR V-927 Professional Rechargeable Hair Trimmer Runtime @749\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43EXVhg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VGR V-927 Professional Rechargeable Hair Trimmer Runtime @749\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43EXVhg"
    }
   ]
  },
  {
   "id": 85297,
   "type": "message",
   "date": "2023-06-08T15:09:26",
   "date_unixtime": "1686217166",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 577,
   "text": [
    "Lifelong LLM279 Foot Spa and Massager ",
    {
     "type": "mention",
     "text": "@3999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oPEmUL"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lifelong LLM279 Foot Spa and Massager "
    },
    {
     "type": "mention",
     "text": "@3999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oPEmUL"
    }
   ]
  },
  {
   "id": 85298,
   "type": "message",
   "date": "2023-06-08T15:09:59",
   "date_unixtime": "1686217199",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 557,
   "text": [
    "GIGABYTE G24F 2 23.8 Inch ",
    {
     "type": "mention",
     "text": "@14815"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qCU6L5"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GIGABYTE G24F 2 23.8 Inch "
    },
    {
     "type": "mention",
     "text": "@14815"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qCU6L5"
    }
   ]
  },
  {
   "id": 85299,
   "type": "message",
   "date": "2023-06-08T15:10:31",
   "date_unixtime": "1686217231",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1267,
   "height": 724,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/lN642H"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/lN642H"
    }
   ]
  },
  {
   "id": 85300,
   "type": "message",
   "date": "2023-06-08T15:10:53",
   "date_unixtime": "1686217253",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1247,
   "height": 561,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/fk10Lm"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/fk10Lm"
    }
   ]
  },
  {
   "id": 85301,
   "type": "message",
   "date": "2023-06-08T15:11:24",
   "date_unixtime": "1686217284",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1024,
   "height": 470,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/cd2l5Y"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/cd2l5Y"
    }
   ]
  },
  {
   "id": 85302,
   "type": "message",
   "date": "2023-06-08T15:11:53",
   "date_unixtime": "1686217313",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 633,
   "text": [
    "Ant Esports H650 HD RGB LED Wired Gaming On Ear Headset @575\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiRlRL"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ant Esports H650 HD RGB LED Wired Gaming On Ear Headset @575\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiRlRL"
    }
   ]
  },
  {
   "id": 85303,
   "type": "message",
   "date": "2023-06-08T15:12:27",
   "date_unixtime": "1686217347",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 593,
   "text": [
    "Soniasaa Prime Collection Combo Pack of 2 Double Bedsheet  @474\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NjNw5m"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Soniasaa Prime Collection Combo Pack of 2 Double Bedsheet  @474\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NjNw5m"
    }
   ]
  },
  {
   "id": 85304,
   "type": "message",
   "date": "2023-06-08T15:12:58",
   "date_unixtime": "1686217378",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 523,
   "text": [
    "PRIVILON GLOBALL Foldable Wooden Laptop Bed Tray Table @394\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J00TEY"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "PRIVILON GLOBALL Foldable Wooden Laptop Bed Tray Table @394\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J00TEY"
    }
   ]
  },
  {
   "id": 85305,
   "type": "message",
   "date": "2023-06-08T15:13:33",
   "date_unixtime": "1686217413",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 636,
   "text": [
    "Holic Microfiber Feather Duster Bendable & Extendable Fan Cleaning Duster  @349\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qzSqlJ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Holic Microfiber Feather Duster Bendable & Extendable Fan Cleaning Duster  @349\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qzSqlJ"
    }
   ]
  },
  {
   "id": 85306,
   "type": "message",
   "date": "2023-06-08T15:14:09",
   "date_unixtime": "1686217449",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 581,
   "text": [
    "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC) ",
    {
     "type": "mention",
     "text": "@34999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1ODYx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC) "
    },
    {
     "type": "mention",
     "text": "@34999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1ODYx"
    }
   ]
  },
  {
   "id": 85307,
   "type": "message",
   "date": "2023-06-08T15:14:42",
   "date_unixtime": "1686217482",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 826,
   "height": 392,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jZjtGP"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jZjtGP"
    }
   ]
  },
  {
   "id": 85308,
   "type": "message",
   "date": "2023-06-08T15:15:12",
   "date_unixtime": "1686217512",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 826,
   "height": 370,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/WlpfuY"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/WlpfuY"
    }
   ]
  },
  {
   "id": 85309,
   "type": "message",
   "date": "2023-06-08T15:16:02",
   "date_unixtime": "1686217562",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1146,
   "height": 635,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/FwVp6f"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/FwVp6f"
    }
   ]
  },
  {
   "id": 85310,
   "type": "message",
   "date": "2023-06-08T15:16:53",
   "date_unixtime": "1686217613",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 599,
   "text": [
    "Aristocrat Commander 79Cms Premium Polyester ",
    {
     "type": "mention",
     "text": "@2599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1D5og"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Aristocrat Commander 79Cms Premium Polyester "
    },
    {
     "type": "mention",
     "text": "@2599"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1D5og"
    }
   ]
  },
  {
   "id": 85311,
   "type": "message",
   "date": "2023-06-08T15:17:23",
   "date_unixtime": "1686217643",
   "edited": "2023-06-08T16:13:43",
   "edited_unixtime": "1686221023",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 576,
   "text": [
    "PTron Bassbuds B21 Bluetooth 5.2 Truly Wireless TWS Earbuds @749\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1DmHO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "PTron Bassbuds B21 Bluetooth 5.2 Truly Wireless TWS Earbuds @749\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1DmHO"
    }
   ]
  },
  {
   "id": 85312,
   "type": "message",
   "date": "2023-06-08T15:17:58",
   "date_unixtime": "1686217678",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 546,
   "text": [
    "HP 15s, Intel Core i3-1115G4, 15.6 inch(39.6cm) FHD Anti-Glare Laptop ",
    {
     "type": "mention",
     "text": "@38990"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42ovnYg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HP 15s, Intel Core i3-1115G4, 15.6 inch(39.6cm) FHD Anti-Glare Laptop "
    },
    {
     "type": "mention",
     "text": "@38990"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42ovnYg"
    }
   ]
  },
  {
   "id": 85313,
   "type": "message",
   "date": "2023-06-08T15:18:30",
   "date_unixtime": "1686217710",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 579,
   "height": 302,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/cP4RXH"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/cP4RXH"
    }
   ]
  },
  {
   "id": 85314,
   "type": "message",
   "date": "2023-06-08T15:19:06",
   "date_unixtime": "1686217746",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 655,
   "height": 395,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/vStnir"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/vStnir"
    }
   ]
  },
  {
   "id": 85315,
   "type": "message",
   "date": "2023-06-08T15:20:24",
   "date_unixtime": "1686217824",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1089,
   "height": 561,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/g2IxDe"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/g2IxDe"
    }
   ]
  },
  {
   "id": 85316,
   "type": "message",
   "date": "2023-06-08T15:21:03",
   "date_unixtime": "1686217863",
   "edited": "2023-06-08T15:34:44",
   "edited_unixtime": "1686218684",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1131,
   "height": 349,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Aqocxc"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Aqocxc"
    }
   ]
  },
  {
   "id": 85317,
   "type": "message",
   "date": "2023-06-08T15:21:41",
   "date_unixtime": "1686217901",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 620,
   "text": [
    "Neeman's Eco Flip Flops for Men  @359\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiS0CJ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Neeman's Eco Flip Flops for Men  @359\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiS0CJ"
    }
   ]
  },
  {
   "id": 85318,
   "type": "message",
   "date": "2023-06-08T15:22:17",
   "date_unixtime": "1686217937",
   "edited": "2023-06-08T18:03:54",
   "edited_unixtime": "1686227634",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 585,
   "text": [
    "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch  ",
    {
     "type": "mention",
     "text": "@1399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J4ezii"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch  "
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
     "text": "https://amzn.to/3J4ezii"
    }
   ]
  },
  {
   "id": 85319,
   "type": "message",
   "date": "2023-06-08T15:22:45",
   "date_unixtime": "1686217965",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1077,
   "height": 436,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jFF0ro"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jFF0ro"
    }
   ]
  },
  {
   "id": 85320,
   "type": "message",
   "date": "2023-06-08T15:31:44",
   "date_unixtime": "1686218504",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "Ambrane Wired in Ear Earphones @199\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CfKx7w"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ambrane Wired in Ear Earphones @199\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CfKx7w"
    }
   ]
  },
  {
   "id": 85321,
   "type": "message",
   "date": "2023-06-08T16:03:07",
   "date_unixtime": "1686220387",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 823,
   "text": [
    "Havells Samraat 1050mm 1 Star Energy Saving Ceiling Fan ",
    {
     "type": "mention",
     "text": "@2098"
    },
    "\n\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43P4o9y"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Havells Samraat 1050mm 1 Star Energy Saving Ceiling Fan "
    },
    {
     "type": "mention",
     "text": "@2098"
    },
    {
     "type": "plain",
     "text": "\n\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43P4o9y"
    }
   ]
  },
  {
   "id": 85322,
   "type": "message",
   "date": "2023-06-08T16:03:36",
   "date_unixtime": "1686220416",
   "edited": "2023-06-08T16:04:34",
   "edited_unixtime": "1686220474",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 603,
   "text": [
    "Amazon Brand - Inkast Denim Co. Men T-Shirt @231\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ni6PM7"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Inkast Denim Co. Men T-Shirt @231\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ni6PM7"
    }
   ]
  },
  {
   "id": 85323,
   "type": "message",
   "date": "2023-06-08T16:04:00",
   "date_unixtime": "1686220440",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 991,
   "height": 508,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/8n9rBz"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/8n9rBz"
    }
   ]
  },
  {
   "id": 85324,
   "type": "message",
   "date": "2023-06-08T16:04:34",
   "date_unixtime": "1686220474",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1014,
   "height": 477,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/FgfHzt"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/FgfHzt"
    }
   ]
  },
  {
   "id": 85325,
   "type": "message",
   "date": "2023-06-08T16:05:03",
   "date_unixtime": "1686220503",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 612,
   "text": [
    "Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J3607H"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J3607H"
    }
   ]
  },
  {
   "id": 85326,
   "type": "message",
   "date": "2023-06-08T16:05:33",
   "date_unixtime": "1686220533",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1235,
   "height": 441,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/CkSWco"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/CkSWco"
    }
   ]
  },
  {
   "id": 85327,
   "type": "message",
   "date": "2023-06-08T16:06:03",
   "date_unixtime": "1686220563",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 601,
   "text": [
    "Lifelong LLEKBT01 Electric Kettle 1.5 @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1LPuD"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lifelong LLEKBT01 Electric Kettle 1.5 @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1LPuD"
    }
   ]
  },
  {
   "id": 85328,
   "type": "message",
   "date": "2023-06-08T16:06:43",
   "date_unixtime": "1686220603",
   "edited": "2023-06-08T16:10:24",
   "edited_unixtime": "1686220824",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 519,
   "text": [
    "S.S.Axon V-99 Headphone Amplifier Pocket Hearing Aid Personal Acousticon @100\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45Rz5wm"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "S.S.Axon V-99 Headphone Amplifier Pocket Hearing Aid Personal Acousticon @100\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45Rz5wm"
    }
   ]
  },
  {
   "id": 85329,
   "type": "message",
   "date": "2023-06-08T16:07:20",
   "date_unixtime": "1686220640",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 560,
   "text": [
    "Activa Easy Mix Nutri Mixer Grinder 500 Watt ",
    {
     "type": "mention",
     "text": "@1249"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42w2VUv"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Activa Easy Mix Nutri Mixer Grinder 500 Watt "
    },
    {
     "type": "mention",
     "text": "@1249"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42w2VUv"
    }
   ]
  },
  {
   "id": 85330,
   "type": "message",
   "date": "2023-06-08T16:07:47",
   "date_unixtime": "1686220667",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1248,
   "height": 434,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/KKNzpc"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/KKNzpc"
    }
   ]
  },
  {
   "id": 85331,
   "type": "message",
   "date": "2023-06-08T16:08:19",
   "date_unixtime": "1686220699",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 573,
   "text": [
    "AmazonBasics 6 Place Setting Dishwasher ",
    {
     "type": "mention",
     "text": "@9999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MUEvyg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics 6 Place Setting Dishwasher "
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
     "text": "https://amzn.to/3MUEvyg"
    }
   ]
  },
  {
   "id": 85332,
   "type": "message",
   "date": "2023-06-08T16:08:50",
   "date_unixtime": "1686220730",
   "edited": "2023-06-08T17:55:34",
   "edited_unixtime": "1686227134",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 635,
   "text": [
    "The Man Company Hair Styling Spray For Men 250Ml  @224\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J43Apj"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Man Company Hair Styling Spray For Men 250Ml  @224\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J43Apj"
    }
   ]
  },
  {
   "id": 85333,
   "type": "message",
   "date": "2023-06-08T16:09:21",
   "date_unixtime": "1686220761",
   "edited": "2023-06-08T16:11:19",
   "edited_unixtime": "1686220879",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 598,
   "text": [
    "Lifelong Protein Shaker @149\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OWyq6Y"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lifelong Protein Shaker @149\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3OWyq6Y"
    }
   ]
  },
  {
   "id": 85334,
   "type": "message",
   "date": "2023-06-08T16:09:50",
   "date_unixtime": "1686220790",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 554,
   "text": [
    "Lavie Sport Strato Medium 55 cms Duffle Bag @789\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P1Thpj"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lavie Sport Strato Medium 55 cms Duffle Bag @789\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P1Thpj"
    }
   ]
  },
  {
   "id": 85335,
   "type": "message",
   "date": "2023-06-08T16:10:16",
   "date_unixtime": "1686220816",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1105,
   "height": 446,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/ypLv9R"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/ypLv9R"
    }
   ]
  },
  {
   "id": 85336,
   "type": "message",
   "date": "2023-06-08T16:10:56",
   "date_unixtime": "1686220856",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 584,
   "text": [
    "Pringle 2 Jar Mixer Grinder ",
    {
     "type": "mention",
     "text": "@1149"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3OY0WVR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pringle 2 Jar Mixer Grinder "
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
     "text": "https://amzn.to/3OY0WVR"
    }
   ]
  },
  {
   "id": 85337,
   "type": "message",
   "date": "2023-06-08T16:11:27",
   "date_unixtime": "1686220887",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 589,
   "text": [
    "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch ",
    {
     "type": "mention",
     "text": "@1399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oPJk3R"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch "
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
     "text": "https://amzn.to/3oPJk3R"
    }
   ]
  },
  {
   "id": 85338,
   "type": "message",
   "date": "2023-06-08T16:12:08",
   "date_unixtime": "1686220928",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 810,
   "height": 387,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/gRWgBR"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/gRWgBR"
    }
   ]
  },
  {
   "id": 85339,
   "type": "message",
   "date": "2023-06-08T16:12:42",
   "date_unixtime": "1686220962",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1260,
   "height": 449,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jhj3f7"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jhj3f7"
    }
   ]
  },
  {
   "id": 85340,
   "type": "message",
   "date": "2023-06-08T16:13:53",
   "date_unixtime": "1686221033",
   "edited": "2023-06-08T18:10:50",
   "edited_unixtime": "1686228050",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 799,
   "height": 375,
   "text": [
    "Myntra Loot : Flat 80% Off On HRX by Hrithik Roshan Clothing \n\nMen : Tshirts from 139 : ",
    {
     "type": "link",
     "text": "https://extp.in/V2P6te"
    },
    "\nTrackpants from 299 : ",
    {
     "type": "link",
     "text": "https://extp.in/HdmcyK"
    },
    "\nShorts from 239 : ",
    {
     "type": "link",
     "text": "https://extp.in/sqfkgk"
    },
    "\nTracksuits from 659 : ",
    {
     "type": "link",
     "text": "https://extp.in/kvlvl2"
    },
    "\nTrousers from 519 : ",
    {
     "type": "link",
     "text": "https://extp.in/8dDuww"
    },
    "\n\nWomen : ",
    {
     "type": "link",
     "text": "https://extp.in/pLumZ2"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra Loot : Flat 80% Off On HRX by Hrithik Roshan Clothing \n\nMen : Tshirts from 139 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/V2P6te"
    },
    {
     "type": "plain",
     "text": "\nTrackpants from 299 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/HdmcyK"
    },
    {
     "type": "plain",
     "text": "\nShorts from 239 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/sqfkgk"
    },
    {
     "type": "plain",
     "text": "\nTracksuits from 659 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/kvlvl2"
    },
    {
     "type": "plain",
     "text": "\nTrousers from 519 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/8dDuww"
    },
    {
     "type": "plain",
     "text": "\n\nWomen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/pLumZ2"
    }
   ]
  },
  {
   "id": 85341,
   "type": "message",
   "date": "2023-06-08T16:14:33",
   "date_unixtime": "1686221073",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 548,
   "text": [
    "The Interio Era Walking Lion Statue for Home Decor @799\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45TYy8p"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Interio Era Walking Lion Statue for Home Decor @799\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45TYy8p"
    }
   ]
  },
  {
   "id": 85342,
   "type": "message",
   "date": "2023-06-08T16:15:02",
   "date_unixtime": "1686221102",
   "edited": "2023-06-08T16:52:59",
   "edited_unixtime": "1686223379",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 547,
   "text": [
    "zart Black Cheetah Showpiece for Home Decor Showpiece @729\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42CDhxu"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "zart Black Cheetah Showpiece for Home Decor Showpiece @729\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42CDhxu"
    }
   ]
  },
  {
   "id": 85343,
   "type": "message",
   "date": "2023-06-08T16:15:29",
   "date_unixtime": "1686221129",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 509,
   "text": [
    "TIED RIBBONS Polyresin Buddha Showpiece, Small, Multicolour, Set of 4 @349\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WU8omK"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "TIED RIBBONS Polyresin Buddha Showpiece, Small, Multicolour, Set of 4 @349\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WU8omK"
    }
   ]
  },
  {
   "id": 85344,
   "type": "message",
   "date": "2023-06-08T16:15:59",
   "date_unixtime": "1686221159",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 550,
   "text": [
    "AGARO Classic Portable Yogurt Maker @539\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CgmKo0"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AGARO Classic Portable Yogurt Maker @539\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CgmKo0"
    }
   ]
  },
  {
   "id": 85345,
   "type": "message",
   "date": "2023-06-08T16:16:55",
   "date_unixtime": "1686221215",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1189,
   "height": 439,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jRmZMe"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jRmZMe"
    }
   ]
  },
  {
   "id": 85346,
   "type": "message",
   "date": "2023-06-08T16:17:21",
   "date_unixtime": "1686221241",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1205,
   "height": 437,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/GVQ1N9"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/GVQ1N9"
    }
   ]
  },
  {
   "id": 85347,
   "type": "message",
   "date": "2023-06-08T16:17:52",
   "date_unixtime": "1686221272",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "Inalsa Oven MasterChef 16BK OTG ",
    {
     "type": "mention",
     "text": "@2870"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WXqhBd"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Inalsa Oven MasterChef 16BK OTG "
    },
    {
     "type": "mention",
     "text": "@2870"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WXqhBd"
    }
   ]
  },
  {
   "id": 85348,
   "type": "message",
   "date": "2023-06-08T16:18:36",
   "date_unixtime": "1686221316",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1262,
   "height": 406,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/t2pvM6"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/t2pvM6"
    }
   ]
  },
  {
   "id": 85349,
   "type": "message",
   "date": "2023-06-08T16:19:03",
   "date_unixtime": "1686221343",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1194,
   "height": 549,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/D1TlMJ"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/D1TlMJ"
    }
   ]
  },
  {
   "id": 85350,
   "type": "message",
   "date": "2023-06-08T16:19:42",
   "date_unixtime": "1686221382",
   "edited": "2023-06-09T08:23:03",
   "edited_unixtime": "1686279183",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1247,
   "height": 652,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/zTXo3x"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/zTXo3x"
    }
   ]
  },
  {
   "id": 85351,
   "type": "message",
   "date": "2023-06-08T16:20:05",
   "date_unixtime": "1686221405",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1194,
   "height": 613,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/FXUORh"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/FXUORh"
    }
   ]
  },
  {
   "id": 85352,
   "type": "message",
   "date": "2023-06-08T16:29:44",
   "date_unixtime": "1686221984",
   "edited": "2023-06-08T17:23:59",
   "edited_unixtime": "1686225239",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1189,
   "height": 438,
   "text": [
    "VEGA 2-In-1 Unisex Face/Body & Nose Trimmer @ Rs 199\n\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/5OU8qo"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VEGA 2-In-1 Unisex Face/Body & Nose Trimmer @ Rs 199\n\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/5OU8qo"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85353,
   "type": "message",
   "date": "2023-06-08T16:30:23",
   "date_unixtime": "1686222023",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 628,
   "text": [
    "AmazonBasics 3 Piece Expandable Softside Spinner Luggage Suitcase ",
    {
     "type": "mention",
     "text": "@6119"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P27XFg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics 3 Piece Expandable Softside Spinner Luggage Suitcase "
    },
    {
     "type": "mention",
     "text": "@6119"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P27XFg"
    }
   ]
  },
  {
   "id": 85354,
   "type": "message",
   "date": "2023-06-08T16:30:44",
   "date_unixtime": "1686222044",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1267,
   "height": 444,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/RaSXJb"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/RaSXJb"
    }
   ]
  },
  {
   "id": 85355,
   "type": "message",
   "date": "2023-06-08T17:58:59",
   "date_unixtime": "1686227339",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 388,
   "text": [
    "💥 MamaEarth Deal: (Pack of 2) Black Long Stay Kajal Kohl Pencil For 11-Hour Smudge-free Stay with Free Sharpener @ Rs 499 [MRP 998]\n\n👉 Link: ",
    {
     "type": "link",
     "text": "https://extp.in/SyjBxy"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "💥 MamaEarth Deal: (Pack of 2) Black Long Stay Kajal Kohl Pencil For 11-Hour Smudge-free Stay with Free Sharpener @ Rs 499 [MRP 998]\n\n👉 Link: "
    },
    {
     "type": "link",
     "text": "https://extp.in/SyjBxy"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85356,
   "type": "message",
   "date": "2023-06-08T17:59:24",
   "date_unixtime": "1686227364",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 916,
   "height": 408,
   "text": [
    "💥 Renee Cosmetics LOOT Offer 🔥🔥\n\n🛍 Buy 1 Get 1 Free Sitewide +\n🎁 Bonus Offer: Get Extra 5% Prepaid Off + Assorted Gloss Touch Nail Paint FREE😍 \n\n✅ Use Code - PWBOGO\n\n 👉 Link- ",
    {
     "type": "link",
     "text": "https://extp.in/LihTVk"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "💥 Renee Cosmetics LOOT Offer 🔥🔥\n\n🛍 Buy 1 Get 1 Free Sitewide +\n🎁 Bonus Offer: Get Extra 5% Prepaid Off + Assorted Gloss Touch Nail Paint FREE😍 \n\n✅ Use Code - PWBOGO\n\n 👉 Link- "
    },
    {
     "type": "link",
     "text": "https://extp.in/LihTVk"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85357,
   "type": "message",
   "date": "2023-06-08T18:00:01",
   "date_unixtime": "1686227401",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 821,
   "height": 382,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/aLPc2O"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/aLPc2O"
    }
   ]
  },
  {
   "id": 85358,
   "type": "message",
   "date": "2023-06-08T18:00:30",
   "date_unixtime": "1686227430",
   "edited": "2023-06-08T18:11:19",
   "edited_unixtime": "1686228079",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 598,
   "text": [
    "Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV  ",
    {
     "type": "mention",
     "text": "@10999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTAM8H"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV  "
    },
    {
     "type": "mention",
     "text": "@10999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTAM8H"
    }
   ]
  },
  {
   "id": 85359,
   "type": "message",
   "date": "2023-06-08T18:01:53",
   "date_unixtime": "1686227513",
   "edited": "2023-06-08T18:03:37",
   "edited_unixtime": "1686227617",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 576,
   "text": [
    "ESET NOD32 Antivirus 1 User, 1 Year @314\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43RuCbt"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ESET NOD32 Antivirus 1 User, 1 Year @314\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43RuCbt"
    }
   ]
  },
  {
   "id": 85360,
   "type": "message",
   "date": "2023-06-08T18:03:03",
   "date_unixtime": "1686227583",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 643,
   "text": [
    "Boldfit Turf Bat Cricket for Adults Plastic Tennis Cricket Bat @447\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42uJMlF"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Boldfit Turf Bat Cricket for Adults Plastic Tennis Cricket Bat @447\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42uJMlF"
    }
   ]
  },
  {
   "id": 85361,
   "type": "message",
   "date": "2023-06-08T18:03:34",
   "date_unixtime": "1686227614",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 620,
   "text": [
    "Veirdo Men's Half Sleeve Regular Fit Combo Polo T-Shirt @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P0u0Mg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Veirdo Men's Half Sleeve Regular Fit Combo Polo T-Shirt @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P0u0Mg"
    }
   ]
  },
  {
   "id": 85362,
   "type": "message",
   "date": "2023-06-08T18:04:01",
   "date_unixtime": "1686227641",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 592,
   "text": [
    "Beurer HR 5000 Professional Cordless hair clipper  @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oRjmwH"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Beurer HR 5000 Professional Cordless hair clipper  @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oRjmwH"
    }
   ]
  },
  {
   "id": 85363,
   "type": "message",
   "date": "2023-06-08T18:04:34",
   "date_unixtime": "1686227674",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 650,
   "text": [
    "Dabur Vatika Health Shampoo - 1L @239\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42oKz7K"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Dabur Vatika Health Shampoo - 1L @239\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42oKz7K"
    }
   ]
  },
  {
   "id": 85364,
   "type": "message",
   "date": "2023-06-08T18:05:02",
   "date_unixtime": "1686227702",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 574,
   "text": [
    "EDYELL TWS Wireless Earbuds ",
    {
     "type": "mention",
     "text": "@1999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J1BJWC"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "EDYELL TWS Wireless Earbuds "
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
     "text": "https://amzn.to/3J1BJWC"
    }
   ]
  },
  {
   "id": 85365,
   "type": "message",
   "date": "2023-06-08T18:05:28",
   "date_unixtime": "1686227728",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 589,
   "text": [
    "Hammer Stroke 1.96\" Calling Smart Watch ",
    {
     "type": "mention",
     "text": "@1599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45V6rdI"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Hammer Stroke 1.96\" Calling Smart Watch "
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
     "text": "https://amzn.to/45V6rdI"
    }
   ]
  },
  {
   "id": 85366,
   "type": "message",
   "date": "2023-06-08T18:06:36",
   "date_unixtime": "1686227796",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 554,
   "text": [
    "Redgear MP35 Speed-Type Gaming Mousepad @219\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42ukgx1"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Redgear MP35 Speed-Type Gaming Mousepad @219\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42ukgx1"
    }
   ]
  },
  {
   "id": 85367,
   "type": "message",
   "date": "2023-06-08T18:07:02",
   "date_unixtime": "1686227822",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 540,
   "text": [
    "Amazon Brand - Solimo Denison Engineered Wood Bookcase ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42p8pjO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Solimo Denison Engineered Wood Bookcase "
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
     "text": "https://amzn.to/42p8pjO"
    }
   ]
  },
  {
   "id": 85368,
   "type": "message",
   "date": "2023-06-08T18:07:34",
   "date_unixtime": "1686227854",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 596,
   "text": [
    "AmazonBasics 2-Piece Set ",
    {
     "type": "mention",
     "text": "@4130"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45Pm9XT"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics 2-Piece Set "
    },
    {
     "type": "mention",
     "text": "@4130"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45Pm9XT"
    }
   ]
  },
  {
   "id": 85369,
   "type": "message",
   "date": "2023-06-08T18:07:57",
   "date_unixtime": "1686227877",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1183,
   "height": 435,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/S9u6Ki"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/S9u6Ki"
    }
   ]
  },
  {
   "id": 85370,
   "type": "message",
   "date": "2023-06-08T18:08:26",
   "date_unixtime": "1686227906",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "Gear Camo Maxis Water Resistant Hybrid Travel Duffle & Backpack @510\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3N0wsjg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Gear Camo Maxis Water Resistant Hybrid Travel Duffle & Backpack @510\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3N0wsjg"
    }
   ]
  },
  {
   "id": 85371,
   "type": "message",
   "date": "2023-06-08T18:08:55",
   "date_unixtime": "1686227935",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 677,
   "height": 434,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/3tfDUg"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/3tfDUg"
    }
   ]
  },
  {
   "id": 85372,
   "type": "message",
   "date": "2023-06-08T18:09:18",
   "date_unixtime": "1686227958",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1191,
   "height": 392,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/7y8GNg"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/7y8GNg"
    }
   ]
  },
  {
   "id": 85373,
   "type": "message",
   "date": "2023-06-08T18:09:42",
   "date_unixtime": "1686227982",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1178,
   "height": 485,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/RaWcdp"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/RaWcdp"
    }
   ]
  },
  {
   "id": 85374,
   "type": "message",
   "date": "2023-06-08T18:10:07",
   "date_unixtime": "1686228007",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 609,
   "text": [
    "Gear SUPERIOR XL 17L Water Resistant School Bag @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43QBsO7"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Gear SUPERIOR XL 17L Water Resistant School Bag @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43QBsO7"
    }
   ]
  },
  {
   "id": 85375,
   "type": "message",
   "date": "2023-06-08T18:10:51",
   "date_unixtime": "1686228051",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1256,
   "height": 423,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/9tlNQP"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/9tlNQP"
    }
   ]
  },
  {
   "id": 85376,
   "type": "message",
   "date": "2023-06-08T18:11:16",
   "date_unixtime": "1686228076",
   "edited": "2023-06-08T18:28:31",
   "edited_unixtime": "1686229111",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 616,
   "text": [
    "Fire-Boltt Phoenix Smart Watch ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oRrFbQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Phoenix Smart Watch "
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
     "text": "https://amzn.to/3oRrFbQ"
    }
   ]
  },
  {
   "id": 85377,
   "type": "message",
   "date": "2023-06-08T18:11:38",
   "date_unixtime": "1686228098",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1234,
   "height": 432,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/XMqGfa"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/XMqGfa"
    }
   ]
  },
  {
   "id": 85378,
   "type": "message",
   "date": "2023-06-08T18:12:19",
   "date_unixtime": "1686228139",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "Wahl India WCHS6-1524 Argan Oil Infused Straightener @799\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CkGkzE"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Wahl India WCHS6-1524 Argan Oil Infused Straightener @799\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CkGkzE"
    }
   ]
  },
  {
   "id": 85379,
   "type": "message",
   "date": "2023-06-08T18:12:43",
   "date_unixtime": "1686228163",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1204,
   "height": 381,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/KlxP3i"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/KlxP3i"
    }
   ]
  },
  {
   "id": 85380,
   "type": "message",
   "date": "2023-06-08T18:13:15",
   "date_unixtime": "1686228195",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1240,
   "height": 420,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/LlmRsB"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/LlmRsB"
    }
   ]
  },
  {
   "id": 85381,
   "type": "message",
   "date": "2023-06-08T18:13:42",
   "date_unixtime": "1686228222",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 502,
   "text": [
    "Dell MS116 1000Dpi USB Wired Optical Mouse @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CgyRkY"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Dell MS116 1000Dpi USB Wired Optical Mouse @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CgyRkY"
    }
   ]
  },
  {
   "id": 85382,
   "type": "message",
   "date": "2023-06-08T18:14:11",
   "date_unixtime": "1686228251",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 613,
   "text": [
    "The Indian Garage Co Adult Mens Chinos @532\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NkVpHq"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Indian Garage Co Adult Mens Chinos @532\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NkVpHq"
    }
   ]
  },
  {
   "id": 85383,
   "type": "message",
   "date": "2023-06-08T18:14:55",
   "date_unixtime": "1686228295",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 833,
   "height": 391,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/S7DnNs"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/S7DnNs"
    }
   ]
  },
  {
   "id": 85384,
   "type": "message",
   "date": "2023-06-08T18:15:54",
   "date_unixtime": "1686228354",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 606,
   "text": [
    "Pepe Solid Cotton Regular Fit Mens Casual Shirt @650\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qtgt5L"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pepe Solid Cotton Regular Fit Mens Casual Shirt @650\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qtgt5L"
    }
   ]
  },
  {
   "id": 85385,
   "type": "message",
   "date": "2023-06-08T18:16:42",
   "date_unixtime": "1686228402",
   "edited": "2023-06-08T18:24:31",
   "edited_unixtime": "1686228871",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 822,
   "height": 388,
   "text": [
    "➡️ Min 50% Off on Nivea products: ",
    {
     "type": "link",
     "text": "https://extp.in/Y2okIL"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "➡️ Min 50% Off on Nivea products: "
    },
    {
     "type": "link",
     "text": "https://extp.in/Y2okIL"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85386,
   "type": "message",
   "date": "2023-06-08T19:27:36",
   "date_unixtime": "1686232656",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 976,
   "height": 356,
   "text": [
    "+💥 Ajio: Kids' Clothing Starts From Rs 45\n\n➡️ Girls: ",
    {
     "type": "link",
     "text": "https://extp.in/XXO3mX"
    },
    "\n\n➡️ Boys: ",
    {
     "type": "link",
     "text": "https://extp.in/FvAOOl"
    },
    "\n\n➡️ Infants: ",
    {
     "type": "link",
     "text": "https://extp.in/YqoiGx"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "+💥 Ajio: Kids' Clothing Starts From Rs 45\n\n➡️ Girls: "
    },
    {
     "type": "link",
     "text": "https://extp.in/XXO3mX"
    },
    {
     "type": "plain",
     "text": "\n\n➡️ Boys: "
    },
    {
     "type": "link",
     "text": "https://extp.in/FvAOOl"
    },
    {
     "type": "plain",
     "text": "\n\n➡️ Infants: "
    },
    {
     "type": "link",
     "text": "https://extp.in/YqoiGx"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85387,
   "type": "message",
   "date": "2023-06-08T19:28:20",
   "date_unixtime": "1686232700",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 809,
   "height": 391,
   "text": [
    "Myntra: Up to 80% Off On Men's Branded Jeans from Rs.399\n\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/aSDk2C"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra: Up to 80% Off On Men's Branded Jeans from Rs.399\n\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/aSDk2C"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85388,
   "type": "message",
   "date": "2023-06-08T19:28:58",
   "date_unixtime": "1686232738",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 785,
   "height": 384,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    " Flat 80% Off On Here&Now, KooknKeech, Highlander & Invictus Men Clothing\n\n▶️ T-shirts\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/gyFwF9"
    },
    "\n\n▶️ Shirts\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/ktTp0d"
    },
    "\n\n▶️ Jeans\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/DiOUCj"
    },
    "\n\n▶️ Kurta\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/fHuy29"
    },
    "\n\n▶️ Trousers\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/ERNwHO"
    },
    "\n\n▶️ Trackpants\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/DiZc4V"
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
     "text": " Flat 80% Off On Here&Now, KooknKeech, Highlander & Invictus Men Clothing\n\n▶️ T-shirts\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/gyFwF9"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Shirts\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/ktTp0d"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Jeans\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/DiOUCj"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Kurta\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/fHuy29"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Trousers\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/ERNwHO"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Trackpants\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/DiZc4V"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85389,
   "type": "message",
   "date": "2023-06-08T19:30:16",
   "date_unixtime": "1686232816",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 575,
   "text": [
    "🔥Redmi 12C (4GB+64GB) \n\nAt ",
    {
     "type": "bold",
     "text": "Rs : 7,999 /- "
    },
    "😱\n\n",
    {
     "type": "bold",
     "text": "Buy Here :  "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43vjcdF"
    },
    {
     "type": "bold",
     "text": "\n\nBank Offer : 800 Off With ICICI Cards"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "🔥Redmi 12C (4GB+64GB) \n\nAt "
    },
    {
     "type": "bold",
     "text": "Rs : 7,999 /- "
    },
    {
     "type": "plain",
     "text": "😱\n\n"
    },
    {
     "type": "bold",
     "text": "Buy Here :  "
    },
    {
     "type": "link",
     "text": "https://amzn.to/43vjcdF"
    },
    {
     "type": "bold",
     "text": "\n\nBank Offer : 800 Off With ICICI Cards"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85390,
   "type": "message",
   "date": "2023-06-08T19:31:06",
   "date_unixtime": "1686232866",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 644,
   "text": [
    "VGR V-015 Professional Hair Trimmer Runtime: 60 min Trimmer  @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45UjzQl"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VGR V-015 Professional Hair Trimmer Runtime: 60 min Trimmer  @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45UjzQl"
    }
   ]
  },
  {
   "id": 85391,
   "type": "message",
   "date": "2023-06-08T19:31:32",
   "date_unixtime": "1686232892",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "Birde Men Mesh Sports Shoes for Men Running and Walking Shoes @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTL34L"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Birde Men Mesh Sports Shoes for Men Running and Walking Shoes @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTL34L"
    }
   ]
  },
  {
   "id": 85392,
   "type": "message",
   "date": "2023-06-08T19:32:06",
   "date_unixtime": "1686232926",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 616,
   "text": [
    "JUARI BE A GENTLEMAN Half Sleeve T-Shirt for Men Pack of 2 @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43vm0Hz"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "JUARI BE A GENTLEMAN Half Sleeve T-Shirt for Men Pack of 2 @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43vm0Hz"
    }
   ]
  },
  {
   "id": 85393,
   "type": "message",
   "date": "2023-06-08T19:32:55",
   "date_unixtime": "1686232975",
   "edited": "2023-06-08T19:34:54",
   "edited_unixtime": "1686233094",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 558,
   "text": [
    "Arckord Multi-Function Electric 2 Layer Egg Boiler Cooker & Steamer @387\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qvRxe2"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Arckord Multi-Function Electric 2 Layer Egg Boiler Cooker & Steamer @387\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qvRxe2"
    }
   ]
  },
  {
   "id": 85394,
   "type": "message",
   "date": "2023-06-08T19:33:20",
   "date_unixtime": "1686233000",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 550,
   "text": [
    "SATTVA Wooden Stools @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NlG8Xb"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "SATTVA Wooden Stools @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NlG8Xb"
    }
   ]
  },
  {
   "id": 85395,
   "type": "message",
   "date": "2023-06-08T19:33:55",
   "date_unixtime": "1686233035",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 624,
   "text": [
    "The Man Company Body Spray Combo Pack @344\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qC6Jq4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Man Company Body Spray Combo Pack @344\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qC6Jq4"
    }
   ]
  },
  {
   "id": 85396,
   "type": "message",
   "date": "2023-06-08T19:34:19",
   "date_unixtime": "1686233059",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1203,
   "height": 582,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/jcVb2-"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/jcVb2-"
    }
   ]
  },
  {
   "id": 85397,
   "type": "message",
   "date": "2023-06-08T19:34:46",
   "date_unixtime": "1686233086",
   "edited": "2023-06-08T21:36:30",
   "edited_unixtime": "1686240390",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 607,
   "text": [
    "Santoor, Crème Handwash, 750ml Pack of 2 @194\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J2FLOA"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Santoor, Crème Handwash, 750ml Pack of 2 @194\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J2FLOA"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85398,
   "type": "message",
   "date": "2023-06-08T19:35:12",
   "date_unixtime": "1686233112",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 532,
   "text": [
    "Auric A2 Desi Cow Ghee 500 ml  @849\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oMZTxo"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Auric A2 Desi Cow Ghee 500 ml  @849\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oMZTxo"
    }
   ]
  },
  {
   "id": 85399,
   "type": "message",
   "date": "2023-06-08T19:36:08",
   "date_unixtime": "1686233168",
   "edited": "2023-06-09T06:58:02",
   "edited_unixtime": "1686274082",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 621,
   "text": [
    "MARK LOUIIS Track Pant for Men @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oMGQDp"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "MARK LOUIIS Track Pant for Men @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oMGQDp"
    }
   ]
  },
  {
   "id": 85400,
   "type": "message",
   "date": "2023-06-08T19:37:02",
   "date_unixtime": "1686233222",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 592,
   "text": [
    "TRESemme Keratin Smooth Shampoo 1 L @899\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3PjONLd"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "TRESemme Keratin Smooth Shampoo 1 L @899\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3PjONLd"
    }
   ]
  },
  {
   "id": 85401,
   "type": "message",
   "date": "2023-06-08T19:37:42",
   "date_unixtime": "1686233262",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 552,
   "text": [
    "Syska HT200 PRO BeardPro Cordless Rechargeable Trimmer  ",
    {
     "type": "mention",
     "text": "@1299"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/466fRUb"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Syska HT200 PRO BeardPro Cordless Rechargeable Trimmer  "
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
     "text": "https://amzn.to/466fRUb"
    }
   ]
  },
  {
   "id": 85402,
   "type": "message",
   "date": "2023-06-08T19:39:22",
   "date_unixtime": "1686233362",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 600,
   "text": [
    "Longway Kwid Light Weight Dry Iron @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3IYkLZq"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Longway Kwid Light Weight Dry Iron @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3IYkLZq"
    }
   ]
  },
  {
   "id": 85403,
   "type": "message",
   "date": "2023-06-08T19:39:44",
   "date_unixtime": "1686233384",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1244,
   "height": 422,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/6sQImN"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/6sQImN"
    }
   ]
  },
  {
   "id": 85404,
   "type": "message",
   "date": "2023-06-08T19:40:12",
   "date_unixtime": "1686233412",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 635,
   "text": [
    "LucidSound LS10P Wired Stereo Gaming Headset  ",
    {
     "type": "mention",
     "text": "@1619"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NiYKqD"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "LucidSound LS10P Wired Stereo Gaming Headset  "
    },
    {
     "type": "mention",
     "text": "@1619"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NiYKqD"
    }
   ]
  },
  {
   "id": 85405,
   "type": "message",
   "date": "2023-06-08T19:40:41",
   "date_unixtime": "1686233441",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 592,
   "text": [
    "VRPRIME USB Rechargeable Electric Gas Lighter for Kitchen Gas Stove @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J4WXmG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VRPRIME USB Rechargeable Electric Gas Lighter for Kitchen Gas Stove @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J4WXmG"
    }
   ]
  },
  {
   "id": 85406,
   "type": "message",
   "date": "2023-06-08T19:41:07",
   "date_unixtime": "1686233467",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 630,
   "text": [
    "Ajanta Quartz Analog Women's Watch ",
    {
     "type": "mention",
     "text": "@1088"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3ClVTHf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ajanta Quartz Analog Women's Watch "
    },
    {
     "type": "mention",
     "text": "@1088"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3ClVTHf"
    }
   ]
  },
  {
   "id": 85407,
   "type": "message",
   "date": "2023-06-08T19:42:42",
   "date_unixtime": "1686233562",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 649,
   "text": [
    "Halonix Glitz led Desk Lamp @611\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3p1dwc6"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Halonix Glitz led Desk Lamp @611\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3p1dwc6"
    }
   ]
  },
  {
   "id": 85408,
   "type": "message",
   "date": "2023-06-08T19:43:10",
   "date_unixtime": "1686233590",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 591,
   "text": [
    "Audio Array AM-C1 USB Condenser Microphone Kit  ",
    {
     "type": "mention",
     "text": "@2989"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J4NuvA"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Audio Array AM-C1 USB Condenser Microphone Kit  "
    },
    {
     "type": "mention",
     "text": "@2989"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J4NuvA"
    }
   ]
  },
  {
   "id": 85409,
   "type": "message",
   "date": "2023-06-08T19:52:23",
   "date_unixtime": "1686234143",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 508,
   "text": [
    "ONLINE Allia 60 Cms Chimney ",
    {
     "type": "mention",
     "text": "@3990"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WUCg2g"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ONLINE Allia 60 Cms Chimney "
    },
    {
     "type": "mention",
     "text": "@3990"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WUCg2g"
    }
   ]
  },
  {
   "id": 85410,
   "type": "message",
   "date": "2023-06-08T19:53:13",
   "date_unixtime": "1686234193",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1193,
   "height": 415,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/29pMw4"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/29pMw4"
    }
   ]
  },
  {
   "id": 85411,
   "type": "message",
   "date": "2023-06-08T19:53:46",
   "date_unixtime": "1686234226",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 502,
   "text": [
    "Portronics Decibel 20 16W Wireless Bluetooth Soundbar, @999\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43RHMVV"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Portronics Decibel 20 16W Wireless Bluetooth Soundbar, @999\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43RHMVV"
    }
   ]
  },
  {
   "id": 85412,
   "type": "message",
   "date": "2023-06-08T19:54:14",
   "date_unixtime": "1686234254",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 563,
   "text": [
    "Havells Enticer Decorative BLDC 1200mm Energy Saving with Remote Control 5 Star Ceiling Fan ",
    {
     "type": "mention",
     "text": "@4149"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ck9PSc"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Havells Enticer Decorative BLDC 1200mm Energy Saving with Remote Control 5 Star Ceiling Fan "
    },
    {
     "type": "mention",
     "text": "@4149"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ck9PSc"
    }
   ]
  },
  {
   "id": 85413,
   "type": "message",
   "date": "2023-06-08T19:54:37",
   "date_unixtime": "1686234277",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 625,
   "text": [
    "TIMEWEAR Analogue - Digital Men's Watch  @549\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WVZaX4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "TIMEWEAR Analogue - Digital Men's Watch  @549\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WVZaX4"
    }
   ]
  },
  {
   "id": 85414,
   "type": "message",
   "date": "2023-06-08T19:55:05",
   "date_unixtime": "1686234305",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 576,
   "text": [
    "NutriPro Juicer Mixer Grinder - Smoothie Maker ",
    {
     "type": "mention",
     "text": "@1978"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qAlrhe"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "NutriPro Juicer Mixer Grinder - Smoothie Maker "
    },
    {
     "type": "mention",
     "text": "@1978"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qAlrhe"
    }
   ]
  },
  {
   "id": 85415,
   "type": "message",
   "date": "2023-06-08T19:55:31",
   "date_unixtime": "1686234331",
   "edited": "2023-06-08T19:57:14",
   "edited_unixtime": "1686234434",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 579,
   "text": [
    "GOVO GOCRUSH 900 16W Bluetooth Portable Speaker ",
    {
     "type": "mention",
     "text": "@2999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qwQZEA"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "GOVO GOCRUSH 900 16W Bluetooth Portable Speaker "
    },
    {
     "type": "mention",
     "text": "@2999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qwQZEA"
    }
   ]
  },
  {
   "id": 85416,
   "type": "message",
   "date": "2023-06-08T19:56:21",
   "date_unixtime": "1686234381",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "SONATA GOLD Series 1080p HD Bulb Light Wireless IP Camera ",
    {
     "type": "mention",
     "text": "@1999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43tCXSR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "SONATA GOLD Series 1080p HD Bulb Light Wireless IP Camera "
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
     "text": "https://amzn.to/43tCXSR"
    }
   ]
  },
  {
   "id": 85417,
   "type": "message",
   "date": "2023-06-08T19:56:40",
   "date_unixtime": "1686234400",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "HAMMER Micro USB Data Cable  @79\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CfI9Oe"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HAMMER Micro USB Data Cable  @79\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CfI9Oe"
    }
   ]
  },
  {
   "id": 85418,
   "type": "message",
   "date": "2023-06-08T19:57:13",
   "date_unixtime": "1686234433",
   "edited": "2023-06-08T21:17:49",
   "edited_unixtime": "1686239269",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 627,
   "text": [
    "Kinsound USB to 3.5mm Audio Jack Converter Adapter ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qC98kA"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Kinsound USB to 3.5mm Audio Jack Converter Adapter "
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
     "text": "https://amzn.to/3qC98kA"
    }
   ]
  },
  {
   "id": 85419,
   "type": "message",
   "date": "2023-06-08T19:59:09",
   "date_unixtime": "1686234549",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1194,
   "height": 427,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/uMdjqj"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/uMdjqj"
    }
   ]
  },
  {
   "id": 85420,
   "type": "message",
   "date": "2023-06-08T19:59:34",
   "date_unixtime": "1686234574",
   "edited": "2023-06-08T20:24:58",
   "edited_unixtime": "1686236098",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 595,
   "text": [
    "Fire-Boltt Rage Full Touch 1.28” Display & 60 Sports Modes with IP68 Rating Smartwatch ",
    {
     "type": "mention",
     "text": "@1799"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3ClY1Pf"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Rage Full Touch 1.28” Display & 60 Sports Modes with IP68 Rating Smartwatch "
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
     "text": "https://amzn.to/3ClY1Pf"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85421,
   "type": "message",
   "date": "2023-06-08T20:00:02",
   "date_unixtime": "1686234602",
   "edited": "2023-06-08T22:27:13",
   "edited_unixtime": "1686243433",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 593,
   "text": [
    "ZEBRONICS A22FHD LED 54.6cm (21.5\") 1920x1080 FHD Resolution Monitor ",
    {
     "type": "mention",
     "text": "@5898"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiHA69"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ZEBRONICS A22FHD LED 54.6cm (21.5\") 1920x1080 FHD Resolution Monitor "
    },
    {
     "type": "mention",
     "text": "@5898"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiHA69"
    }
   ]
  },
  {
   "id": 85422,
   "type": "message",
   "date": "2023-06-08T20:00:28",
   "date_unixtime": "1686234628",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 793,
   "height": 389,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/pQHgiJ"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/pQHgiJ"
    }
   ]
  },
  {
   "id": 85423,
   "type": "message",
   "date": "2023-06-08T20:01:01",
   "date_unixtime": "1686234661",
   "edited": "2023-06-08T21:52:04",
   "edited_unixtime": "1686241324",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 537,
   "text": [
    "Hand-Free Personal Fan @431\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3X3Nemf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Hand-Free Personal Fan @431\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3X3Nemf"
    }
   ]
  },
  {
   "id": 85424,
   "type": "message",
   "date": "2023-06-08T20:01:31",
   "date_unixtime": "1686234691",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 626,
   "text": [
    "E-COSMOS Ice Face Roller Massager @69\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J2zvWY"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "E-COSMOS Ice Face Roller Massager @69\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J2zvWY"
    }
   ]
  },
  {
   "id": 85425,
   "type": "message",
   "date": "2023-06-08T20:01:54",
   "date_unixtime": "1686234714",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1249,
   "height": 419,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/DWMJbr"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/DWMJbr"
    }
   ]
  },
  {
   "id": 85426,
   "type": "message",
   "date": "2023-06-08T20:02:24",
   "date_unixtime": "1686234744",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 586,
   "text": [
    "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV  ",
    {
     "type": "mention",
     "text": "@14999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43QodNo"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV  "
    },
    {
     "type": "mention",
     "text": "@14999"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43QodNo"
    }
   ]
  },
  {
   "id": 85427,
   "type": "message",
   "date": "2023-06-08T20:02:49",
   "date_unixtime": "1686234769",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1043,
   "height": 476,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/bwFMMX"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/bwFMMX"
    }
   ]
  },
  {
   "id": 85428,
   "type": "message",
   "date": "2023-06-08T20:03:23",
   "date_unixtime": "1686234803",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 992,
   "height": 428,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/4wiTxG"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/4wiTxG"
    }
   ]
  },
  {
   "id": 85429,
   "type": "message",
   "date": "2023-06-08T20:03:53",
   "date_unixtime": "1686234833",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 637,
   "text": [
    "AmazonBasics 2 Piece Geometric Hard Shell Expandable Luggage Spinner Suitcase Set ",
    {
     "type": "mention",
     "text": "@4129"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P26lLC"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics 2 Piece Geometric Hard Shell Expandable Luggage Spinner Suitcase Set "
    },
    {
     "type": "mention",
     "text": "@4129"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P26lLC"
    }
   ]
  },
  {
   "id": 85430,
   "type": "message",
   "date": "2023-06-08T20:04:28",
   "date_unixtime": "1686234868",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 597,
   "text": [
    "Fitkit FK800 Front Drive Orbitrac Cross Trainer with Free Diet and Fitness Plan ",
    {
     "type": "mention",
     "text": "@5396"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43SNwi9"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fitkit FK800 Front Drive Orbitrac Cross Trainer with Free Diet and Fitness Plan "
    },
    {
     "type": "mention",
     "text": "@5396"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43SNwi9"
    }
   ]
  },
  {
   "id": 85431,
   "type": "message",
   "date": "2023-06-08T20:05:01",
   "date_unixtime": "1686234901",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 579,
   "text": [
    "Intex Swan Ride-On @815\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3X3bMvO"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Intex Swan Ride-On @815\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3X3bMvO"
    }
   ]
  },
  {
   "id": 85432,
   "type": "message",
   "date": "2023-06-08T20:05:26",
   "date_unixtime": "1686234926",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 621,
   "text": [
    "Ant Esports GM330 RGB Optical Wired Gaming Mouse @649\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MVyQrt"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ant Esports GM330 RGB Optical Wired Gaming Mouse @649\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MVyQrt"
    }
   ]
  },
  {
   "id": 85433,
   "type": "message",
   "date": "2023-06-08T20:05:56",
   "date_unixtime": "1686234956",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 591,
   "text": [
    "Longway Star 1200mm/48 inch High Speed Anti-dust Decorative 5 Star Rated Ceiling Fan ",
    {
     "type": "mention",
     "text": "@2329"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qxbmS9"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Longway Star 1200mm/48 inch High Speed Anti-dust Decorative 5 Star Rated Ceiling Fan "
    },
    {
     "type": "mention",
     "text": "@2329"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qxbmS9"
    }
   ]
  },
  {
   "id": 85434,
   "type": "message",
   "date": "2023-06-08T20:06:21",
   "date_unixtime": "1686234981",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "Zap ZX5534 Hand Shower With Flexible Silicone Nozzles, Stainless Steel Finish @379\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43KZWIM"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Zap ZX5534 Hand Shower With Flexible Silicone Nozzles, Stainless Steel Finish @379\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43KZWIM"
    }
   ]
  },
  {
   "id": 85435,
   "type": "message",
   "date": "2023-06-08T20:06:44",
   "date_unixtime": "1686235004",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 572,
   "text": [
    "boAt Airdopes 121v2 in-Ear True Wireless Earbuds ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oX4E7t"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Airdopes 121v2 in-Ear True Wireless Earbuds "
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
     "text": "https://amzn.to/3oX4E7t"
    }
   ]
  },
  {
   "id": 85436,
   "type": "message",
   "date": "2023-06-08T20:07:08",
   "date_unixtime": "1686235028",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1237,
   "height": 625,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/mzRJHx"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/mzRJHx"
    }
   ]
  },
  {
   "id": 85437,
   "type": "message",
   "date": "2023-06-08T20:07:36",
   "date_unixtime": "1686235056",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1229,
   "height": 426,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/K59fK1"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/K59fK1"
    }
   ]
  },
  {
   "id": 85438,
   "type": "message",
   "date": "2023-06-08T20:08:12",
   "date_unixtime": "1686235092",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 566,
   "text": [
    "beatXP SmartPlus Prime Weight Machine  ",
    {
     "type": "mention",
     "text": "@1499"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qBN6hw"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP SmartPlus Prime Weight Machine  "
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
     "text": "https://amzn.to/3qBN6hw"
    }
   ]
  },
  {
   "id": 85439,
   "type": "message",
   "date": "2023-06-08T20:08:36",
   "date_unixtime": "1686235116",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 527,
   "text": [
    "Power Gummies for That Time of The Month @360\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45Wc2AS"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Power Gummies for That Time of The Month @360\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45Wc2AS"
    }
   ]
  },
  {
   "id": 85440,
   "type": "message",
   "date": "2023-06-08T20:09:05",
   "date_unixtime": "1686235145",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 571,
   "text": [
    "Amazon Brand - Solimo Muddha Sofa XXXL Bean Bag Cover Without Beans ",
    {
     "type": "mention",
     "text": "@1099"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43tVvSW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Solimo Muddha Sofa XXXL Bean Bag Cover Without Beans "
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
     "text": "https://amzn.to/43tVvSW"
    }
   ]
  },
  {
   "id": 85441,
   "type": "message",
   "date": "2023-06-08T20:09:35",
   "date_unixtime": "1686235175",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 540,
   "text": [
    "Pigeon Basic Induction Cooktop 1200 W ",
    {
     "type": "mention",
     "text": "@1399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P4gXK0"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pigeon Basic Induction Cooktop 1200 W "
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
     "text": "https://amzn.to/3P4gXK0"
    }
   ]
  },
  {
   "id": 85442,
   "type": "message",
   "date": "2023-06-08T20:10:22",
   "date_unixtime": "1686235222",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 641,
   "text": [
    "PowerMax Fitness 6mm thick Premium Exercise Red Colour Yoga Mat @257\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3J3bX4y"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "PowerMax Fitness 6mm thick Premium Exercise Red Colour Yoga Mat @257\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3J3bX4y"
    }
   ]
  },
  {
   "id": 85443,
   "type": "message",
   "date": "2023-06-08T20:10:53",
   "date_unixtime": "1686235253",
   "edited": "2023-06-08T20:22:44",
   "edited_unixtime": "1686235964",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1028,
   "height": 437,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/eDOIg3"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/eDOIg3"
    }
   ]
  },
  {
   "id": 85444,
   "type": "message",
   "date": "2023-06-08T20:11:22",
   "date_unixtime": "1686235282",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 618,
   "text": [
    "CARMATE Car Steering Cover Finger Grip for Mahindra Tuv 300 @74\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43LY82f"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "CARMATE Car Steering Cover Finger Grip for Mahindra Tuv 300 @74\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43LY82f"
    }
   ]
  },
  {
   "id": 85445,
   "type": "message",
   "date": "2023-06-08T20:11:58",
   "date_unixtime": "1686235318",
   "edited": "2023-06-08T20:12:15",
   "edited_unixtime": "1686235335",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 794,
   "height": 391,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/LNtkdy"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/LNtkdy"
    }
   ]
  },
  {
   "id": 85446,
   "type": "message",
   "date": "2023-06-08T20:12:43",
   "date_unixtime": "1686235363",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 761,
   "height": 308,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/94TjE1"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/94TjE1"
    }
   ]
  },
  {
   "id": 85447,
   "type": "message",
   "date": "2023-06-08T21:04:20",
   "date_unixtime": "1686238460",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1049,
   "height": 557,
   "text": [
    "Myntra : Flat 70% Off On Puma Clothing \n\nMen : ",
    {
     "type": "link",
     "text": "https://extp.in/PR6IGs"
    },
    "\n\nWomen : ",
    {
     "type": "link",
     "text": "https://extp.in/J7gNhx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Flat 70% Off On Puma Clothing \n\nMen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/PR6IGs"
    },
    {
     "type": "plain",
     "text": "\n\nWomen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/J7gNhx"
    }
   ]
  },
  {
   "id": 85448,
   "type": "message",
   "date": "2023-06-08T21:05:02",
   "date_unixtime": "1686238502",
   "edited": "2023-06-08T21:59:46",
   "edited_unixtime": "1686241786",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 733,
   "height": 302,
   "text": [
    "The Derma Co: BFF Sale 🔥\n \n🎁 Offer: Buy 1 Get 1 FREE \n✅ + 10% Cashback \n✅ + 5% online Payment Discount\n\nUse Code: BFF\n\nLink: ",
    {
     "type": "link",
     "text": "https://extp.in/sFfB1G"
    },
    "\n\nTnC: Offer not applicable on kits | Cannot be clubbed with any other offer"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Derma Co: BFF Sale 🔥\n \n🎁 Offer: Buy 1 Get 1 FREE \n✅ + 10% Cashback \n✅ + 5% online Payment Discount\n\nUse Code: BFF\n\nLink: "
    },
    {
     "type": "link",
     "text": "https://extp.in/sFfB1G"
    },
    {
     "type": "plain",
     "text": "\n\nTnC: Offer not applicable on kits | Cannot be clubbed with any other offer"
    }
   ]
  },
  {
   "id": 85449,
   "type": "message",
   "date": "2023-06-08T21:06:39",
   "date_unixtime": "1686238599",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 603,
   "text": [
    "MARK LOUIIS Track Pant for Men @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTE7EF"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "MARK LOUIIS Track Pant for Men @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTE7EF"
    }
   ]
  },
  {
   "id": 85450,
   "type": "message",
   "date": "2023-06-08T21:07:08",
   "date_unixtime": "1686238628",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 557,
   "text": [
    "Real Activ Fiber Multi Fruit 1L @80\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oLoaUB"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Real Activ Fiber Multi Fruit 1L @80\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oLoaUB"
    }
   ]
  },
  {
   "id": 85451,
   "type": "message",
   "date": "2023-06-08T21:07:40",
   "date_unixtime": "1686238660",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 621,
   "text": [
    "LEOTUDE Men's Oversized Cottonblend Half Sleeve Printed T-Shirt @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42vxjhu"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "LEOTUDE Men's Oversized Cottonblend Half Sleeve Printed T-Shirt @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42vxjhu"
    }
   ]
  },
  {
   "id": 85452,
   "type": "message",
   "date": "2023-06-08T21:08:19",
   "date_unixtime": "1686238699",
   "edited": "2023-06-08T21:30:51",
   "edited_unixtime": "1686240051",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 602,
   "text": [
    "boAt Wave Electra with 1.81\" HD Display, Smart Calling  ",
    {
     "type": "mention",
     "text": "@1999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qx5RCT"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Wave Electra with 1.81\" HD Display, Smart Calling  "
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
     "text": "https://amzn.to/3qx5RCT"
    }
   ]
  },
  {
   "id": 85453,
   "type": "message",
   "date": "2023-06-08T21:08:43",
   "date_unixtime": "1686238723",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 588,
   "text": [
    "Kotion Each GS130 USB Microphone for PC @409\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qx5U1x"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Kotion Each GS130 USB Microphone for PC @409\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qx5U1x"
    }
   ]
  },
  {
   "id": 85454,
   "type": "message",
   "date": "2023-06-08T21:09:08",
   "date_unixtime": "1686238748",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 581,
   "text": [
    "Skybags Unisex Red Gucci Fabric 17L Backpacks @452\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43sapcd"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Skybags Unisex Red Gucci Fabric 17L Backpacks @452\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43sapcd"
    }
   ]
  },
  {
   "id": 85455,
   "type": "message",
   "date": "2023-06-08T21:09:33",
   "date_unixtime": "1686238773",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 598,
   "text": [
    "SUPERBAK Scout 30 Ltrs Laptop Backpack @791\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WWhRKk"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "SUPERBAK Scout 30 Ltrs Laptop Backpack @791\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WWhRKk"
    }
   ]
  },
  {
   "id": 85456,
   "type": "message",
   "date": "2023-06-08T21:09:59",
   "date_unixtime": "1686238799",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 586,
   "text": [
    "Gillette Fusion Proglide 4-in-1 Styler for Trimming  @729\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3ClfCGQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Gillette Fusion Proglide 4-in-1 Styler for Trimming  @729\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3ClfCGQ"
    }
   ]
  },
  {
   "id": 85457,
   "type": "message",
   "date": "2023-06-08T21:10:21",
   "date_unixtime": "1686238821",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1188,
   "height": 452,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/Lgk6w9"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/Lgk6w9"
    }
   ]
  },
  {
   "id": 85458,
   "type": "message",
   "date": "2023-06-08T21:10:48",
   "date_unixtime": "1686238848",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 473,
   "text": [
    "Bajaj 1000TSS 10 Litre Oven Toaster Grill ",
    {
     "type": "mention",
     "text": "@2780"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CiBWkx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bajaj 1000TSS 10 Litre Oven Toaster Grill "
    },
    {
     "type": "mention",
     "text": "@2780"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CiBWkx"
    }
   ]
  },
  {
   "id": 85459,
   "type": "message",
   "date": "2023-06-08T21:11:13",
   "date_unixtime": "1686238873",
   "edited": "2023-06-08T21:59:13",
   "edited_unixtime": "1686241753",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 641,
   "text": [
    "Amazon Basics 3 Piece Geometric Hard Shell Expandable Luggage Spinner Suitcase Set ",
    {
     "type": "mention",
     "text": "@6440"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CpojQp"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Basics 3 Piece Geometric Hard Shell Expandable Luggage Spinner Suitcase Set "
    },
    {
     "type": "mention",
     "text": "@6440"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3CpojQp"
    }
   ]
  },
  {
   "id": 85460,
   "type": "message",
   "date": "2023-06-08T21:11:40",
   "date_unixtime": "1686238900",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 581,
   "text": [
    "AGARO VIBE 500 ml Adult ",
    {
     "type": "mention",
     "text": "@1799"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3CjY7a3"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AGARO VIBE 500 ml Adult "
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
     "text": "https://amzn.to/3CjY7a3"
    }
   ]
  },
  {
   "id": 85461,
   "type": "message",
   "date": "2023-06-08T21:12:23",
   "date_unixtime": "1686238943",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 787,
   "height": 370,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    " T-shirts + Jeans for ₹557\n\nTshirts : ",
    {
     "type": "link",
     "text": "https://extp.in/Zc5ovq"
    },
    "\nShirts : ",
    {
     "type": "link",
     "text": "https://extp.in/g0f3SO"
    },
    "\nJeans : ",
    {
     "type": "link",
     "text": "https://extp.in/KdZWE5"
    },
    "\n\n💡 Apply Coupon  MYNTRA100"
   ],
   "text_entities": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    {
     "type": "plain",
     "text": " T-shirts + Jeans for ₹557\n\nTshirts : "
    },
    {
     "type": "link",
     "text": "https://extp.in/Zc5ovq"
    },
    {
     "type": "plain",
     "text": "\nShirts : "
    },
    {
     "type": "link",
     "text": "https://extp.in/g0f3SO"
    },
    {
     "type": "plain",
     "text": "\nJeans : "
    },
    {
     "type": "link",
     "text": "https://extp.in/KdZWE5"
    },
    {
     "type": "plain",
     "text": "\n\n💡 Apply Coupon  MYNTRA100"
    }
   ]
  },
  {
   "id": 85462,
   "type": "message",
   "date": "2023-06-08T21:12:48",
   "date_unixtime": "1686238968",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 587,
   "text": [
    "Fastrack Reflex Vybe Smartwatch  ",
    {
     "type": "mention",
     "text": "@1995"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42AKLRf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fastrack Reflex Vybe Smartwatch  "
    },
    {
     "type": "mention",
     "text": "@1995"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42AKLRf"
    }
   ]
  },
  {
   "id": 85463,
   "type": "message",
   "date": "2023-06-08T21:13:15",
   "date_unixtime": "1686238995",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 611,
   "text": [
    "Zebronics-NS1500 Laptop Stand  @299\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3oMRutR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Zebronics-NS1500 Laptop Stand  @299\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oMRutR"
    }
   ]
  },
  {
   "id": 85464,
   "type": "message",
   "date": "2023-06-08T21:13:42",
   "date_unixtime": "1686239022",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1190,
   "height": 451,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/r3kuR2"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/r3kuR2"
    }
   ]
  },
  {
   "id": 85465,
   "type": "message",
   "date": "2023-06-08T21:14:05",
   "date_unixtime": "1686239045",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 582,
   "text": [
    "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch ",
    {
     "type": "mention",
     "text": "@1399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Nj7eOl"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch "
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
     "text": "https://amzn.to/3Nj7eOl"
    }
   ]
  },
  {
   "id": 85466,
   "type": "message",
   "date": "2023-06-08T21:14:28",
   "date_unixtime": "1686239068",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1261,
   "height": 427,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/hscnm1"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/hscnm1"
    }
   ]
  },
  {
   "id": 85467,
   "type": "message",
   "date": "2023-06-08T21:14:59",
   "date_unixtime": "1686239099",
   "edited": "2023-06-08T22:44:23",
   "edited_unixtime": "1686244463",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 533,
   "text": [
    "TRENDY Cameo 4 Step Heavy Duty Foldable Metal Step Ladder ",
    {
     "type": "mention",
     "text": "@2199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/466rWZx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "TRENDY Cameo 4 Step Heavy Duty Foldable Metal Step Ladder "
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
     "text": "https://amzn.to/466rWZx"
    }
   ]
  },
  {
   "id": 85468,
   "type": "message",
   "date": "2023-06-08T21:15:36",
   "date_unixtime": "1686239136",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 655,
   "text": [
    "Smart Anchor by Panasonic 22060 10A Revolving Horizontal Tower Spike Guard ",
    {
     "type": "mention",
     "text": "@1003"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43LCXNJ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Smart Anchor by Panasonic 22060 10A Revolving Horizontal Tower Spike Guard "
    },
    {
     "type": "mention",
     "text": "@1003"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43LCXNJ"
    }
   ]
  },
  {
   "id": 85469,
   "type": "message",
   "date": "2023-06-08T21:16:06",
   "date_unixtime": "1686239166",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 640,
   "text": [
    "The Indian Garage Co Men Casual Pants @532\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3WTT0a4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "The Indian Garage Co Men Casual Pants @532\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WTT0a4"
    }
   ]
  },
  {
   "id": 85470,
   "type": "message",
   "date": "2023-06-08T21:17:10",
   "date_unixtime": "1686239230",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1208,
   "height": 424,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/MbzGGg"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/MbzGGg"
    }
   ]
  },
  {
   "id": 85471,
   "type": "message",
   "date": "2023-06-08T21:17:41",
   "date_unixtime": "1686239261",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1220,
   "height": 616,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/28gxZK"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/28gxZK"
    }
   ]
  },
  {
   "id": 85472,
   "type": "message",
   "date": "2023-06-08T21:18:11",
   "date_unixtime": "1686239291",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 564,
   "text": [
    "boAt Airdopes 121v2 in-Ear True Wireless Earbuds ",
    {
     "type": "mention",
     "text": "@1199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45UNOHa"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Airdopes 121v2 in-Ear True Wireless Earbuds "
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
     "text": "https://amzn.to/45UNOHa"
    }
   ]
  },
  {
   "id": 85473,
   "type": "message",
   "date": "2023-06-08T21:18:34",
   "date_unixtime": "1686239314",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 635,
   "text": [
    "Halonix Glitz led Desk Lamp  @611\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qCpnOd"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Halonix Glitz led Desk Lamp  @611\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qCpnOd"
    }
   ]
  },
  {
   "id": 85474,
   "type": "message",
   "date": "2023-06-08T21:18:56",
   "date_unixtime": "1686239336",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1233,
   "height": 454,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/i6MUlN"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/i6MUlN"
    }
   ]
  },
  {
   "id": 85475,
   "type": "message",
   "date": "2023-06-08T21:19:33",
   "date_unixtime": "1686239373",
   "edited": "2023-06-08T22:09:04",
   "edited_unixtime": "1686242344",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1047,
   "height": 377,
   "text": [
    "Men's Achiever-16 Latest Stylish Casual Sneaker @449\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ch2sLh"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Men's Achiever-16 Latest Stylish Casual Sneaker @449\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ch2sLh"
    }
   ]
  },
  {
   "id": 85476,
   "type": "message",
   "date": "2023-06-08T21:20:04",
   "date_unixtime": "1686239404",
   "edited": "2023-06-08T21:55:40",
   "edited_unixtime": "1686241540",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1247,
   "height": 473,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/NT4HCh"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/NT4HCh"
    }
   ]
  },
  {
   "id": 85477,
   "type": "message",
   "date": "2023-06-08T21:20:37",
   "date_unixtime": "1686239437",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 617,
   "text": [
    "Go Vegan California Almonds 1kg @635\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MZkTJ4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Go Vegan California Almonds 1kg @635\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MZkTJ4"
    }
   ]
  },
  {
   "id": 85478,
   "type": "message",
   "date": "2023-06-08T22:12:53",
   "date_unixtime": "1686242573",
   "edited": "2023-06-08T22:13:18",
   "edited_unixtime": "1686242598",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 451,
   "text": [
    "Flipkart Big Saving Days Sale (10-14th June).\n\nEarly Access for Flipkart Plus Members  \n\nLink : ",
    {
     "type": "link",
     "text": "https://extp.in/YdyUmq"
    },
    "\n\nStay Active Tonight."
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Flipkart Big Saving Days Sale (10-14th June).\n\nEarly Access for Flipkart Plus Members  \n\nLink : "
    },
    {
     "type": "link",
     "text": "https://extp.in/YdyUmq"
    },
    {
     "type": "plain",
     "text": "\n\nStay Active Tonight."
    }
   ]
  },
  {
   "id": 85479,
   "type": "message",
   "date": "2023-06-08T22:13:57",
   "date_unixtime": "1686242637",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 472,
   "text": [
    "HP Chromebook (2023) Intel Core i5 11th Gen - (8 GB/256 GB SSD/Chrome OS) @ 42990\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/aKqZXv"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HP Chromebook (2023) Intel Core i5 11th Gen - (8 GB/256 GB SSD/Chrome OS) @ 42990\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/aKqZXv"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85480,
   "type": "message",
   "date": "2023-06-08T22:17:21",
   "date_unixtime": "1686242841",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 501,
   "text": [
    "NOVA Hair Dryer +  Hair Straightener @585\n\n",
    {
     "type": "link",
     "text": "https://extp.in/DpZ8I4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "NOVA Hair Dryer +  Hair Straightener @585\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/DpZ8I4"
    }
   ]
  },
  {
   "id": 85481,
   "type": "message",
   "date": "2023-06-08T22:18:04",
   "date_unixtime": "1686242884",
   "edited": "2023-06-08T23:05:45",
   "edited_unixtime": "1686245745",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 545,
   "text": [
    "NEWPORT NPMEPDN20001B22001SMU5000 @649\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43v0MJR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "NEWPORT NPMEPDN20001B22001SMU5000 @649\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43v0MJR"
    }
   ]
  },
  {
   "id": 85482,
   "type": "message",
   "date": "2023-06-08T22:19:22",
   "date_unixtime": "1686242962",
   "edited": "2023-06-08T22:45:16",
   "edited_unixtime": "1686244516",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1257,
   "height": 562,
   "text": [
    "9W Smart LED Bulb with Alexa @499\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MZrBie"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "9W Smart LED Bulb with Alexa @499\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MZrBie"
    }
   ]
  },
  {
   "id": 85483,
   "type": "message",
   "date": "2023-06-08T22:20:03",
   "date_unixtime": "1686243003",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 556,
   "text": [
    "AmazonBasics 12\" Numbered Wall Clock  @699\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3ClnAje"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "AmazonBasics 12\" Numbered Wall Clock  @699\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3ClnAje"
    }
   ]
  },
  {
   "id": 85484,
   "type": "message",
   "date": "2023-06-08T22:23:22",
   "date_unixtime": "1686243202",
   "edited": "2023-06-08T22:25:27",
   "edited_unixtime": "1686243327",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": "LLLLL",
   "text_entities": [
    {
     "type": "plain",
     "text": "LLLLL"
    }
   ]
  },
  {
   "id": 85485,
   "type": "message",
   "date": "2023-06-08T22:48:47",
   "date_unixtime": "1686244727",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 999,
   "height": 432,
   "text": [
    "Caprese Sale 💥\n\n🛍 Upto 50% Off on Sling Bags, Clutch, Tote, Wallets & More\n\nHome Page 👉 ",
    {
     "type": "link",
     "text": "https://extp.in/8wx7Ln"
    },
    "\n\nSale Link 👉 ",
    {
     "type": "link",
     "text": "https://extp.in/4Tb2Sv"
    },
    "\n\nHurry! Limited Period Offer 🚨"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Caprese Sale 💥\n\n🛍 Upto 50% Off on Sling Bags, Clutch, Tote, Wallets & More\n\nHome Page 👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/8wx7Ln"
    },
    {
     "type": "plain",
     "text": "\n\nSale Link 👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/4Tb2Sv"
    },
    {
     "type": "plain",
     "text": "\n\nHurry! Limited Period Offer 🚨"
    }
   ]
  },
  {
   "id": 85486,
   "type": "message",
   "date": "2023-06-08T22:50:02",
   "date_unixtime": "1686244802",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 617,
   "text": [
    "Amazon Brand - Symbol Men Regular Casual Pants @349\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45QQ2an"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Symbol Men Regular Casual Pants @349\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45QQ2an"
    }
   ]
  },
  {
   "id": 85487,
   "type": "message",
   "date": "2023-06-08T22:52:16",
   "date_unixtime": "1686244936",
   "edited": "2023-06-09T00:48:06",
   "edited_unixtime": "1686251886",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1028,
   "height": 492,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/f6FO3G"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/f6FO3G"
    }
   ]
  },
  {
   "id": 85488,
   "type": "message",
   "date": "2023-06-08T22:52:51",
   "date_unixtime": "1686244971",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 648,
   "text": [
    "Nasher Miles Dalhousie Hard-Sided Poycarbonate Cabin Luggage Titanium Blue 20 inch  ",
    {
     "type": "mention",
     "text": "@3599"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43v4cMH"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Nasher Miles Dalhousie Hard-Sided Poycarbonate Cabin Luggage Titanium Blue 20 inch  "
    },
    {
     "type": "mention",
     "text": "@3599"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43v4cMH"
    }
   ]
  },
  {
   "id": 85489,
   "type": "message",
   "date": "2023-06-08T23:41:33",
   "date_unixtime": "1686247893",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 885,
   "height": 450,
   "text": [
    "XYXX Loot : Premium Brand 5 Innerwears at Flat Rs.999/- ✅✅\n\nAdd Any 5, Proceed To Checkout & Goto Payment Page, Price Will Be ₹999. \n\nBriefs : ",
    {
     "type": "link",
     "text": "https://extp.in/hILaxg"
    },
    "\n\nTrunks : ",
    {
     "type": "link",
     "text": "https://extp.in/aKj4q3"
    },
    "\n\nVests : ",
    {
     "type": "link",
     "text": "https://extp.in/lMEuj5"
    },
    "\n\nNo Code Required + Pay Using CRED Pay For 5%  Discount & Effective price will be Rs.949/-\n\nYou will Get Top Quality Products (As It’s Premium Brand)🔥."
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "XYXX Loot : Premium Brand 5 Innerwears at Flat Rs.999/- ✅✅\n\nAdd Any 5, Proceed To Checkout & Goto Payment Page, Price Will Be ₹999. \n\nBriefs : "
    },
    {
     "type": "link",
     "text": "https://extp.in/hILaxg"
    },
    {
     "type": "plain",
     "text": "\n\nTrunks : "
    },
    {
     "type": "link",
     "text": "https://extp.in/aKj4q3"
    },
    {
     "type": "plain",
     "text": "\n\nVests : "
    },
    {
     "type": "link",
     "text": "https://extp.in/lMEuj5"
    },
    {
     "type": "plain",
     "text": "\n\nNo Code Required + Pay Using CRED Pay For 5%  Discount & Effective price will be Rs.949/-\n\nYou will Get Top Quality Products (As It’s Premium Brand)🔥."
    }
   ]
  },
  {
   "id": 85490,
   "type": "message",
   "date": "2023-06-08T23:41:53",
   "date_unixtime": "1686247913",
   "edited": "2023-06-09T06:06:23",
   "edited_unixtime": "1686270983",
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
     "text": "https://extp.in/G35fIr"
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
     "text": "https://extp.in/G35fIr"
    },
    {
     "type": "plain",
     "text": "\n\n📌 Validity: 12 AM to 6 AM daily till the end of the month."
    }
   ]
  },
  {
   "id": 85491,
   "type": "message",
   "date": "2023-06-08T23:45:02",
   "date_unixtime": "1686248102",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1236,
   "height": 422,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/u1VaaE"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/u1VaaE"
    }
   ]
  },
  {
   "id": 85492,
   "type": "message",
   "date": "2023-06-08T23:45:29",
   "date_unixtime": "1686248129",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 616,
   "text": [
    "WOW Skin Science Green Tea Restoring Gift Kit @432\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43LUCou"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "WOW Skin Science Green Tea Restoring Gift Kit @432\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43LUCou"
    }
   ]
  },
  {
   "id": 85493,
   "type": "message",
   "date": "2023-06-08T23:45:58",
   "date_unixtime": "1686248158",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 558,
   "text": [
    "Vatika Neelibhringa 21 Hair Growth Oil - 50ml @99\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3N4Lk0i"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Vatika Neelibhringa 21 Hair Growth Oil - 50ml @99\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3N4Lk0i"
    }
   ]
  },
  {
   "id": 85494,
   "type": "message",
   "date": "2023-06-08T23:47:20",
   "date_unixtime": "1686248240",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 807,
   "height": 377,
   "text": [
    "Myntra : Flat 70-75% Off On Being Human Clothing \n\nMen : ",
    {
     "type": "link",
     "text": "https://extp.in/Egnwuf"
    },
    "\nTshirts from 279 : ",
    {
     "type": "link",
     "text": "https://extp.in/XIA9-q"
    },
    "\nShirts from 599 : ",
    {
     "type": "link",
     "text": "https://extp.in/VP4iyv"
    },
    "\nJeans from 719 : ",
    {
     "type": "link",
     "text": "https://extp.in/hXWFjD"
    },
    "\nTrousers from 599 : ",
    {
     "type": "link",
     "text": "https://extp.in/MfNPBu"
    },
    "\nShorts from 449 : ",
    {
     "type": "link",
     "text": "https://extp.in/BQqL06"
    },
    "\n\nWomen : ",
    {
     "type": "link",
     "text": "https://extp.in/ci9YCy"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Flat 70-75% Off On Being Human Clothing \n\nMen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/Egnwuf"
    },
    {
     "type": "plain",
     "text": "\nTshirts from 279 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/XIA9-q"
    },
    {
     "type": "plain",
     "text": "\nShirts from 599 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/VP4iyv"
    },
    {
     "type": "plain",
     "text": "\nJeans from 719 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/hXWFjD"
    },
    {
     "type": "plain",
     "text": "\nTrousers from 599 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/MfNPBu"
    },
    {
     "type": "plain",
     "text": "\nShorts from 449 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/BQqL06"
    },
    {
     "type": "plain",
     "text": "\n\nWomen : "
    },
    {
     "type": "link",
     "text": "https://extp.in/ci9YCy"
    }
   ]
  },
  {
   "id": 85495,
   "type": "message",
   "date": "2023-06-08T23:48:12",
   "date_unixtime": "1686248292",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1059,
   "height": 391,
   "text": [
    "Skybags 22L Backpack ‎ at‎ 691\n\n ",
    {
     "type": "link",
     "text": "https://amzn.to/3oQFGqp"
    },
    "\n\nMore Min 70% Off : ",
    {
     "type": "link",
     "text": "https://amzn.to/3P5niEO"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Skybags 22L Backpack ‎ at‎ 691\n\n "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3oQFGqp"
    },
    {
     "type": "plain",
     "text": "\n\nMore Min 70% Off : "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P5niEO"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85496,
   "type": "message",
   "date": "2023-06-08T23:48:48",
   "date_unixtime": "1686248328",
   "edited": "2023-06-08T23:48:55",
   "edited_unixtime": "1686248335",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 533,
   "text": [
    "Athom Living Ecosaviour Premium Cotton Bath Towel Pink Checkers  @599\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MRBYES"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Athom Living Ecosaviour Premium Cotton Bath Towel Pink Checkers  @599\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MRBYES"
    }
   ]
  },
  {
   "id": 85497,
   "type": "message",
   "date": "2023-06-08T23:49:15",
   "date_unixtime": "1686248355",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1189,
   "height": 384,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/EUQhGp"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/EUQhGp"
    }
   ]
  },
  {
   "id": 85498,
   "type": "message",
   "date": "2023-06-08T23:52:34",
   "date_unixtime": "1686248554",
   "edited": "2023-06-09T00:18:57",
   "edited_unixtime": "1686250137",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1252,
   "height": 757,
   "text": [
    {
     "type": "hashtag",
     "text": "#Myntra"
    },
    " Campus Sutra Jackets From ₹399\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/p0T8qS"
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
     "text": " Campus Sutra Jackets From ₹399\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/p0T8qS"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85499,
   "type": "message",
   "date": "2023-06-09T00:00:59",
   "date_unixtime": "1686249059",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 519,
   "text": [
    "Havells Glaze 1200mm 1 Star Energy Saving Ceiling Fan ",
    {
     "type": "mention",
     "text": "@2498"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3MZfL7J"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Havells Glaze 1200mm 1 Star Energy Saving Ceiling Fan "
    },
    {
     "type": "mention",
     "text": "@2498"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3MZfL7J"
    }
   ]
  },
  {
   "id": 85500,
   "type": "message",
   "date": "2023-06-09T07:25:12",
   "date_unixtime": "1686275712",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1131,
   "height": 601,
   "text": [
    "Luggage Starts From ₹1,619\n\n",
    {
     "type": "link",
     "text": "https://extp.in/bWf2G9"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Luggage Starts From ₹1,619\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/bWf2G9"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85501,
   "type": "message",
   "date": "2023-06-09T07:25:54",
   "date_unixtime": "1686275754",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 548,
   "text": [
    "🔗",
    {
     "type": "link",
     "text": "https://extp.in/I4Tn75"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/I4Tn75"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85502,
   "type": "message",
   "date": "2023-06-09T07:26:42",
   "date_unixtime": "1686275802",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 532,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/ZqaMgS"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/ZqaMgS"
    }
   ]
  },
  {
   "id": 85503,
   "type": "message",
   "date": "2023-06-09T07:28:05",
   "date_unixtime": "1686275885",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 793,
   "height": 402,
   "text": [
    "80% Off On Safari Luggage \n\nSurf All Pages : ",
    {
     "type": "link",
     "text": "https://extp.in/muujO8"
    },
    "\n\nPack Of 2 : ",
    {
     "type": "link",
     "text": "https://extp.in/VTknEe"
    },
    "\n\nPack Of 3 : ",
    {
     "type": "link",
     "text": "https://extp.in/08QC85"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "80% Off On Safari Luggage \n\nSurf All Pages : "
    },
    {
     "type": "link",
     "text": "https://extp.in/muujO8"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 2 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/VTknEe"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 3 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/08QC85"
    }
   ]
  },
  {
   "id": 85504,
   "type": "message",
   "date": "2023-06-09T07:28:25",
   "date_unixtime": "1686275905",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    {
     "type": "bold",
     "text": "Sale is LIVE for Flipkart PLUS MEMBERS only"
    },
    " \n\nIf you’re a non plus member, you might see different price\n\nFor Non Plus Members Sale Will be live tomorrow"
   ],
   "text_entities": [
    {
     "type": "bold",
     "text": "Sale is LIVE for Flipkart PLUS MEMBERS only"
    },
    {
     "type": "plain",
     "text": " \n\nIf you’re a non plus member, you might see different price\n\nFor Non Plus Members Sale Will be live tomorrow"
    }
   ]
  },
  {
   "id": 85505,
   "type": "message",
   "date": "2023-06-09T07:29:35",
   "date_unixtime": "1686275975",
   "edited": "2023-06-09T07:35:01",
   "edited_unixtime": "1686276301",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 793,
   "height": 402,
   "text": [
    "ARISTOCRAT Hard Body Set of 3 Luggage @ ₹5,414\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/F7ll4X"
    },
    "\n\n❌Regular price @ ₹8,999"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ARISTOCRAT Hard Body Set of 3 Luggage @ ₹5,414\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/F7ll4X"
    },
    {
     "type": "plain",
     "text": "\n\n❌Regular price @ ₹8,999"
    }
   ]
  },
  {
   "id": 85506,
   "type": "message",
   "date": "2023-06-09T07:30:17",
   "date_unixtime": "1686276017",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 825,
   "height": 432,
   "text": [
    "SAFARI Small Check-in Suitcase 55 cm ₹1,549\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/RFkZ9f"
    },
    "\n\n❌ Regular price @ ₹2,100"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "SAFARI Small Check-in Suitcase 55 cm ₹1,549\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/RFkZ9f"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹2,100"
    }
   ]
  },
  {
   "id": 85507,
   "type": "message",
   "date": "2023-06-09T07:47:59",
   "date_unixtime": "1686277079",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 903,
   "height": 603,
   "text": [
    "3 Months Membership of EazyDiner Prime Worth Rs.695 at Free\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/67MGcy"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "3 Months Membership of EazyDiner Prime Worth Rs.695 at Free\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/67MGcy"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85508,
   "type": "message",
   "date": "2023-06-09T07:49:06",
   "date_unixtime": "1686277146",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 541,
   "text": [
    "Loot 🚀 🚀  Google Pixel 6a 6 GB RAM 128 GB ₹26,999\n\n▶️ Chalk\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/cIA0ZI"
    },
    " \n\n▶️ Charcoal\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/CP3IaY"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot 🚀 🚀  Google Pixel 6a 6 GB RAM 128 GB ₹26,999\n\n▶️ Chalk\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/cIA0ZI"
    },
    {
     "type": "plain",
     "text": " \n\n▶️ Charcoal\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/CP3IaY"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85509,
   "type": "message",
   "date": "2023-06-09T07:53:03",
   "date_unixtime": "1686277383",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 863,
   "height": 660,
   "text": [
    "Loot 🚀 🚀 80% Off On Safari/Genie Luggage\n\nSmall Size (55 cm) @ ₹1499\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/SkgMCR"
    },
    "\n\n▶️ Medium Size (66cm) \n\n@ ₹1999\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/wUzyxJ"
    },
    "\n\n@ ₹2099\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/2G81gu"
    },
    "\n\n▶️ Masterlink\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/IGx95e"
    },
    "\n\n▶️ Genie by Safari\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/cGcyEb"
    },
    "\n\n▶️ Pack Of 2\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/A7uAZh"
    },
    "\n▶️ Pack Of 3\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/RyjKg6"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot 🚀 🚀 80% Off On Safari/Genie Luggage\n\nSmall Size (55 cm) @ ₹1499\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/SkgMCR"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Medium Size (66cm) \n\n@ ₹1999\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/wUzyxJ"
    },
    {
     "type": "plain",
     "text": "\n\n@ ₹2099\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/2G81gu"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Masterlink\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/IGx95e"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Genie by Safari\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/cGcyEb"
    },
    {
     "type": "plain",
     "text": "\n\n▶️ Pack Of 2\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/A7uAZh"
    },
    {
     "type": "plain",
     "text": "\n▶️ Pack Of 3\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/RyjKg6"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85510,
   "type": "message",
   "date": "2023-06-09T07:53:30",
   "date_unixtime": "1686277410",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 887,
   "height": 529,
   "text": [
    "381 ",
    {
     "type": "link",
     "text": "https://extp.in/cMg3FA"
    },
    "\n\nTimex Analog Watch - For Men"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "381 "
    },
    {
     "type": "link",
     "text": "https://extp.in/cMg3FA"
    },
    {
     "type": "plain",
     "text": "\n\nTimex Analog Watch - For Men"
    }
   ]
  },
  {
   "id": 85511,
   "type": "message",
   "date": "2023-06-09T07:54:05",
   "date_unixtime": "1686277445",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 873,
   "height": 402,
   "text": [
    "boAt Airdopes 131 Earbuds @ 799.\n\n",
    {
     "type": "link",
     "text": "https://extp.in/n8Iqys"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Airdopes 131 Earbuds @ 799.\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/n8Iqys"
    }
   ]
  },
  {
   "id": 85512,
   "type": "message",
   "date": "2023-06-09T07:54:48",
   "date_unixtime": "1686277488",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 561,
   "text": [
    "Noise Newly Launched Buds ",
    {
     "type": "mention",
     "text": "@1299"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45SdV1f"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Noise Newly Launched Buds "
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
     "text": "https://amzn.to/45SdV1f"
    }
   ]
  },
  {
   "id": 85513,
   "type": "message",
   "date": "2023-06-09T07:55:16",
   "date_unixtime": "1686277516",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 800,
   "height": 356,
   "text": [
    "Flipkart Big Saving Days (10th - 14th June)\n\nSale Live For Plus Members.\n\n10% Extra Discount On HDFC & Kotak Card.\n\n👉 ",
    {
     "type": "link",
     "text": "https://extp.in/ePlLPY"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Flipkart Big Saving Days (10th - 14th June)\n\nSale Live For Plus Members.\n\n10% Extra Discount On HDFC & Kotak Card.\n\n👉 "
    },
    {
     "type": "link",
     "text": "https://extp.in/ePlLPY"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85514,
   "type": "message",
   "date": "2023-06-09T07:55:54",
   "date_unixtime": "1686277554",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 544,
   "text": [
    "Pigeon 500 Watt Juicer Mixer Grinder (4 Jars) at 1699.\n\n",
    {
     "type": "link",
     "text": "https://extp.in/a9yItx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Pigeon 500 Watt Juicer Mixer Grinder (4 Jars) at 1699.\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/a9yItx"
    }
   ]
  },
  {
   "id": 85515,
   "type": "message",
   "date": "2023-06-09T07:56:51",
   "date_unixtime": "1686277611",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 485,
   "text": [
    "realme Watch 2 with 320 x 320p Ultra Sharp 600 nits Display  at 1299/-\n\n",
    {
     "type": "link",
     "text": "https://extp.in/Chun3u"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "realme Watch 2 with 320 x 320p Ultra Sharp 600 nits Display  at 1299/-\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/Chun3u"
    }
   ]
  },
  {
   "id": 85516,
   "type": "message",
   "date": "2023-06-09T07:57:36",
   "date_unixtime": "1686277656",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1235,
   "height": 547,
   "text": [
    "Bourge mens Garda-z21 Floaters @429\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3Ni4sZV"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Bourge mens Garda-z21 Floaters @429\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3Ni4sZV"
    }
   ]
  },
  {
   "id": 85517,
   "type": "message",
   "date": "2023-06-09T07:58:14",
   "date_unixtime": "1686277694",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1258,
   "height": 547,
   "text": [
    "Fastrack Reflex Curv Unisex Activity Tracker Smart Watch ",
    {
     "type": "mention",
     "text": "@2495"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3P3nLqX"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fastrack Reflex Curv Unisex Activity Tracker Smart Watch "
    },
    {
     "type": "mention",
     "text": "@2495"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3P3nLqX"
    }
   ]
  },
  {
   "id": 85518,
   "type": "message",
   "date": "2023-06-09T07:58:48",
   "date_unixtime": "1686277728",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 553,
   "text": [
    "Amazon Brand - Symbol Women's Regular T-Shirt @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42vpXL2"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Amazon Brand - Symbol Women's Regular T-Shirt @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/42vpXL2"
    }
   ]
  },
  {
   "id": 85519,
   "type": "message",
   "date": "2023-06-09T07:59:31",
   "date_unixtime": "1686277771",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1263,
   "height": 577,
   "text": [
    "Fire-Boltt Ninja Call Pro Smart Watch  ",
    {
     "type": "mention",
     "text": "@1799"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qDqUny"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Fire-Boltt Ninja Call Pro Smart Watch  "
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
     "text": "https://amzn.to/3qDqUny"
    }
   ]
  },
  {
   "id": 85520,
   "type": "message",
   "date": "2023-06-09T08:00:04",
   "date_unixtime": "1686277804",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 926,
   "height": 472,
   "text": [
    "Myntra : Harvard Track Pants Upto 75% Off from Rs.249\n\n",
    {
     "type": "link",
     "text": "https://extp.in/mOVaod"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Harvard Track Pants Upto 75% Off from Rs.249\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/mOVaod"
    }
   ]
  },
  {
   "id": 85521,
   "type": "message",
   "date": "2023-06-09T08:00:37",
   "date_unixtime": "1686277837",
   "edited": "2023-06-09T08:12:53",
   "edited_unixtime": "1686278573",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1177,
   "height": 477,
   "text": [
    "Arctic Fox E Barrel Orange Duffel Bag @300\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43sqD5a"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Arctic Fox E Barrel Orange Duffel Bag @300\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43sqD5a"
    }
   ]
  },
  {
   "id": 85522,
   "type": "message",
   "date": "2023-06-09T08:01:18",
   "date_unixtime": "1686277878",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1277,
   "height": 525,
   "text": [
    "beatXP ArcHeal Foot Massager for Pain Relief  ",
    {
     "type": "mention",
     "text": "@1999"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3N232RQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP ArcHeal Foot Massager for Pain Relief  "
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
     "text": "https://amzn.to/3N232RQ"
    }
   ]
  },
  {
   "id": 85523,
   "type": "message",
   "date": "2023-06-09T08:01:59",
   "date_unixtime": "1686277919",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 505,
   "text": [
    "DIZO by realme TechLife RMH2015 Hair DryerÂ Â (1400 W, White) at â¹699\n\nBuy Now: ",
    {
     "type": "link",
     "text": "https://extp.in/qefVFR"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "DIZO by realme TechLife RMH2015 Hair DryerÂ Â (1400 W, White) at â¹699\n\nBuy Now: "
    },
    {
     "type": "link",
     "text": "https://extp.in/qefVFR"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85524,
   "type": "message",
   "date": "2023-06-09T08:14:33",
   "date_unixtime": "1686278673",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 532,
   "text": [
    "Flipkart SmartBuy 500 W Mixer Grinder (2 Jars) @ 998\n\n",
    {
     "type": "link",
     "text": "https://extp.in/UoAwKz"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Flipkart SmartBuy 500 W Mixer Grinder (2 Jars) @ 998\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/UoAwKz"
    }
   ]
  },
  {
   "id": 85525,
   "type": "message",
   "date": "2023-06-09T08:14:53",
   "date_unixtime": "1686278693",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "80% Off On Safari Luggage \n\nSurf All Pages : ",
    {
     "type": "link",
     "text": "https://extp.in/BPAULj"
    },
    "\n\nPack Of 2 : ",
    {
     "type": "link",
     "text": "https://extp.in/PoksP9"
    },
    "\n\nPack Of 3 : ",
    {
     "type": "link",
     "text": "https://extp.in/CNm0Jf"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "80% Off On Safari Luggage \n\nSurf All Pages : "
    },
    {
     "type": "link",
     "text": "https://extp.in/BPAULj"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 2 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/PoksP9"
    },
    {
     "type": "plain",
     "text": "\n\nPack Of 3 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/CNm0Jf"
    }
   ]
  },
  {
   "id": 85526,
   "type": "message",
   "date": "2023-06-09T08:15:12",
   "date_unixtime": "1686278712",
   "edited": "2023-06-09T08:44:53",
   "edited_unixtime": "1686280493",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 800,
   "height": 356,
   "text": [
    "Live : Flipkart Big Saving Days\n\nEarly Access Only For Plus Members. \n",
    {
     "type": "link",
     "text": "https://extp.in/FvihMN"
    },
    "\n\nBest Landing Pages 👇\n\nRainy Hours Deals :\n",
    {
     "type": "link",
     "text": "https://extp.in/CAUcVs"
    },
    "\n\nExtra 15% Early Access Deals :\n",
    {
     "type": "link",
     "text": "https://extp.in/5Oy43s"
    },
    "\n\nMobiles :\n",
    {
     "type": "link",
     "text": "https://extp.in/R2qd2M"
    },
    "\n\nPremium :\n",
    {
     "type": "link",
     "text": "https://extp.in/DUz-mf"
    },
    "\n\nGadgets :\n",
    {
     "type": "link",
     "text": "https://extp.in/j8d5GL"
    },
    "\n\nKitchen :\n",
    {
     "type": "link",
     "text": "https://extp.in/oNIXQK"
    },
    "\n\nTV & Appliances :\n",
    {
     "type": "link",
     "text": "https://extp.in/mawmFh"
    },
    "\n\nFashion :\n",
    {
     "type": "link",
     "text": "https://extp.in/qAtL6Q"
    },
    "\n\n80% Off : ",
    {
     "type": "link",
     "text": "https://extp.in/gq1pzP"
    },
    "\n\nLaptops Deals : 👇\ni3 ",
    {
     "type": "link",
     "text": "https://extp.in/vTpMx0"
    },
    "\ni5 ",
    {
     "type": "link",
     "text": "https://extp.in/CqLqD7"
    },
    "\ni7 ",
    {
     "type": "link",
     "text": "https://extp.in/HcMlzy"
    },
    "\nRYZEN 3 ",
    {
     "type": "link",
     "text": "https://extp.in/ZAln63"
    },
    "\nRYZEN 5 ",
    {
     "type": "link",
     "text": "https://extp.in/eRTUbr"
    },
    "\nRYZEN 7 ",
    {
     "type": "link",
     "text": "https://extp.in/twpece"
    },
    "\nGAMING ",
    {
     "type": "link",
     "text": "https://extp.in/XUsHQu"
    },
    "\n\nClaim Extra Discounts Using Few Super Coins :\n",
    {
     "type": "link",
     "text": "https://extp.in/QMpkR6"
    },
    "\n\nFor Non Plus Members Sale Will Live Tomorrow @ 12 Midnight"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Live : Flipkart Big Saving Days\n\nEarly Access Only For Plus Members. \n"
    },
    {
     "type": "link",
     "text": "https://extp.in/FvihMN"
    },
    {
     "type": "plain",
     "text": "\n\nBest Landing Pages 👇\n\nRainy Hours Deals :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/CAUcVs"
    },
    {
     "type": "plain",
     "text": "\n\nExtra 15% Early Access Deals :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/5Oy43s"
    },
    {
     "type": "plain",
     "text": "\n\nMobiles :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/R2qd2M"
    },
    {
     "type": "plain",
     "text": "\n\nPremium :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/DUz-mf"
    },
    {
     "type": "plain",
     "text": "\n\nGadgets :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/j8d5GL"
    },
    {
     "type": "plain",
     "text": "\n\nKitchen :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/oNIXQK"
    },
    {
     "type": "plain",
     "text": "\n\nTV & Appliances :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/mawmFh"
    },
    {
     "type": "plain",
     "text": "\n\nFashion :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/qAtL6Q"
    },
    {
     "type": "plain",
     "text": "\n\n80% Off : "
    },
    {
     "type": "link",
     "text": "https://extp.in/gq1pzP"
    },
    {
     "type": "plain",
     "text": "\n\nLaptops Deals : 👇\ni3 "
    },
    {
     "type": "link",
     "text": "https://extp.in/vTpMx0"
    },
    {
     "type": "plain",
     "text": "\ni5 "
    },
    {
     "type": "link",
     "text": "https://extp.in/CqLqD7"
    },
    {
     "type": "plain",
     "text": "\ni7 "
    },
    {
     "type": "link",
     "text": "https://extp.in/HcMlzy"
    },
    {
     "type": "plain",
     "text": "\nRYZEN 3 "
    },
    {
     "type": "link",
     "text": "https://extp.in/ZAln63"
    },
    {
     "type": "plain",
     "text": "\nRYZEN 5 "
    },
    {
     "type": "link",
     "text": "https://extp.in/eRTUbr"
    },
    {
     "type": "plain",
     "text": "\nRYZEN 7 "
    },
    {
     "type": "link",
     "text": "https://extp.in/twpece"
    },
    {
     "type": "plain",
     "text": "\nGAMING "
    },
    {
     "type": "link",
     "text": "https://extp.in/XUsHQu"
    },
    {
     "type": "plain",
     "text": "\n\nClaim Extra Discounts Using Few Super Coins :\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/QMpkR6"
    },
    {
     "type": "plain",
     "text": "\n\nFor Non Plus Members Sale Will Live Tomorrow @ 12 Midnight"
    }
   ]
  },
  {
   "id": 85527,
   "type": "message",
   "date": "2023-06-09T08:15:45",
   "date_unixtime": "1686278745",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1131,
   "height": 611,
   "text": [
    "Reebok watch Loot \n",
    {
     "type": "link",
     "text": "https://extp.in/sVNX7n"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Reebok watch Loot \n"
    },
    {
     "type": "link",
     "text": "https://extp.in/sVNX7n"
    }
   ]
  },
  {
   "id": 85528,
   "type": "message",
   "date": "2023-06-09T08:16:18",
   "date_unixtime": "1686278778",
   "edited": "2023-06-09T08:18:40",
   "edited_unixtime": "1686278920",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 524,
   "text": [
    "APPLE iPhone 13 (128 GB) @ 57,999  Bank Offer\n\n",
    {
     "type": "link",
     "text": "https://extp.in/zT90le"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "APPLE iPhone 13 (128 GB) @ 57,999  Bank Offer\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/zT90le"
    }
   ]
  },
  {
   "id": 85529,
   "type": "message",
   "date": "2023-06-09T08:16:51",
   "date_unixtime": "1686278811",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1127,
   "height": 586,
   "text": [
    "Loot : Buy Max for Free Shipping \n\n",
    {
     "type": "link",
     "text": "https://extp.in/KLN5fy"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot : Buy Max for Free Shipping \n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/KLN5fy"
    }
   ]
  },
  {
   "id": 85530,
   "type": "message",
   "date": "2023-06-09T08:17:36",
   "date_unixtime": "1686278856",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1151,
   "height": 615,
   "text": [
    "Min. 60% Off On Fastrack Watches\n\n",
    {
     "type": "link",
     "text": "https://extp.in/9eZLVH"
    },
    "\n\nMin 50% Off : ",
    {
     "type": "link",
     "text": "https://extp.in/0PmAcg"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Min. 60% Off On Fastrack Watches\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/9eZLVH"
    },
    {
     "type": "plain",
     "text": "\n\nMin 50% Off : "
    },
    {
     "type": "link",
     "text": "https://extp.in/0PmAcg"
    }
   ]
  },
  {
   "id": 85531,
   "type": "message",
   "date": "2023-06-09T08:18:06",
   "date_unixtime": "1686278886",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1140,
   "height": 573,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/DkHQmG"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://extp.in/F2ZluW"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/DkHQmG"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/F2ZluW"
    }
   ]
  },
  {
   "id": 85532,
   "type": "message",
   "date": "2023-06-09T08:18:49",
   "date_unixtime": "1686278929",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 536,
   "text": [
    "POCO C50 (Royal Blue, 32 GB)  (2 GB RAM) at Rs 5649\n\n ",
    {
     "type": "link",
     "text": "https://extp.in/U01vcW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "POCO C50 (Royal Blue, 32 GB)  (2 GB RAM) at Rs 5649\n\n "
    },
    {
     "type": "link",
     "text": "https://extp.in/U01vcW"
    }
   ]
  },
  {
   "id": 85533,
   "type": "message",
   "date": "2023-06-09T08:19:21",
   "date_unixtime": "1686278961",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 576,
   "text": [
    "laptop masterlink : ",
    {
     "type": "link",
     "text": "https://extp.in/0T4aAP"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "laptop masterlink : "
    },
    {
     "type": "link",
     "text": "https://extp.in/0T4aAP"
    }
   ]
  },
  {
   "id": 85534,
   "type": "message",
   "date": "2023-06-09T08:19:29",
   "date_unixtime": "1686278969",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": "Note : Flipkart  Sale Live for Flipkart Plus members only\n\nSo if you are not a plus member then  you may see  price difference or won't be able to buy, then please buy through Flipkart plus account only.",
   "text_entities": [
    {
     "type": "plain",
     "text": "Note : Flipkart  Sale Live for Flipkart Plus members only\n\nSo if you are not a plus member then  you may see  price difference or won't be able to buy, then please buy through Flipkart plus account only."
    }
   ]
  },
  {
   "id": 85535,
   "type": "message",
   "date": "2023-06-09T08:20:01",
   "date_unixtime": "1686279001",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 521,
   "text": [
    "20000 Mah Power Bank @799\n\n",
    {
     "type": "link",
     "text": "https://extp.in/qCN0cx"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://extp.in/i3Z92o"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "20000 Mah Power Bank @799\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/qCN0cx"
    },
    {
     "type": "plain",
     "text": "\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/i3Z92o"
    }
   ]
  },
  {
   "id": 85536,
   "type": "message",
   "date": "2023-06-09T08:20:44",
   "date_unixtime": "1686279044",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1147,
   "height": 605,
   "text": [
    "Upto 89% Off Killer Watches from Rs.299\n\n",
    {
     "type": "link",
     "text": "https://extp.in/ap7vw7"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Upto 89% Off Killer Watches from Rs.299\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/ap7vw7"
    }
   ]
  },
  {
   "id": 85537,
   "type": "message",
   "date": "2023-06-09T08:22:02",
   "date_unixtime": "1686279122",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 468,
   "text": [
    "boAt Aavante Bar 1600D Dolby Digital 120 W Bluetooth Soundbar ",
    {
     "type": "mention",
     "text": "@6499"
    },
    "\n\n ",
    {
     "type": "link",
     "text": "https://extp.in/fNvwAm"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "boAt Aavante Bar 1600D Dolby Digital 120 W Bluetooth Soundbar "
    },
    {
     "type": "mention",
     "text": "@6499"
    },
    {
     "type": "plain",
     "text": "\n\n "
    },
    {
     "type": "link",
     "text": "https://extp.in/fNvwAm"
    }
   ]
  },
  {
   "id": 85538,
   "type": "message",
   "date": "2023-06-09T08:22:30",
   "date_unixtime": "1686279150",
   "edited": "2023-06-09T08:23:29",
   "edited_unixtime": "1686279209",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 475,
   "text": [
    "Lowest : boAt Airdopes 131 with upto 60 Hours and ASAP Charge @ 799\n\n",
    {
     "type": "link",
     "text": "https://extp.in/ZA1dwf"
    },
    "\n\nMore Earbuds from BoAt : ",
    {
     "type": "link",
     "text": "https://extp.in/wFxblW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Lowest : boAt Airdopes 131 with upto 60 Hours and ASAP Charge @ 799\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/ZA1dwf"
    },
    {
     "type": "plain",
     "text": "\n\nMore Earbuds from BoAt : "
    },
    {
     "type": "link",
     "text": "https://extp.in/wFxblW"
    }
   ]
  },
  {
   "id": 85539,
   "type": "message",
   "date": "2023-06-09T08:23:05",
   "date_unixtime": "1686279185",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1121,
   "height": 526,
   "text": [
    "Loot @ rs 9 \n\n",
    {
     "type": "link",
     "text": "https://extp.in/ZovPpp"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot @ rs 9 \n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/ZovPpp"
    }
   ]
  },
  {
   "id": 85540,
   "type": "message",
   "date": "2023-06-09T08:27:05",
   "date_unixtime": "1686279425",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 478,
   "text": [
    "50% Off : HIMALAYA PURIFYING NEEM Face Wash (400 ml) @ 250 \n\n",
    {
     "type": "link",
     "text": "https://extp.in/2kpGEh"
    },
    "\n\nbuy max Qty"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "50% Off : HIMALAYA PURIFYING NEEM Face Wash (400 ml) @ 250 \n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/2kpGEh"
    },
    {
     "type": "plain",
     "text": "\n\nbuy max Qty"
    }
   ]
  },
  {
   "id": 85541,
   "type": "message",
   "date": "2023-06-09T08:35:09",
   "date_unixtime": "1686279909",
   "edited": "2023-06-09T08:41:19",
   "edited_unixtime": "1686280279",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 467,
   "text": [
    "Loot | ASUS TUF Gaming Laptop\n\n1,31,990 : ",
    {
     "type": "link",
     "text": "https://extp.in/5qCv53"
    },
    "\n\n1,55,990 : ",
    {
     "type": "link",
     "text": "https://extp.in/N-y3gR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Loot | ASUS TUF Gaming Laptop\n\n1,31,990 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/5qCv53"
    },
    {
     "type": "plain",
     "text": "\n\n1,55,990 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/N-y3gR"
    }
   ]
  },
  {
   "id": 85542,
   "type": "message",
   "date": "2023-06-09T08:35:38",
   "date_unixtime": "1686279938",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 457,
   "text": [
    "Apple 2020 MacBook Air Laptop With M1 Chip @ 71,490 (Effectively)\n\n",
    {
     "type": "link",
     "text": "https://extp.in/yYdCVh"
    },
    "\n\n*Rs.5000 Off With HDFC Credit Card."
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Apple 2020 MacBook Air Laptop With M1 Chip @ 71,490 (Effectively)\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/yYdCVh"
    },
    {
     "type": "plain",
     "text": "\n\n*Rs.5000 Off With HDFC Credit Card."
    }
   ]
  },
  {
   "id": 85543,
   "type": "message",
   "date": "2023-06-09T08:36:15",
   "date_unixtime": "1686279975",
   "edited": "2023-06-09T08:36:22",
   "edited_unixtime": "1686279982",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "Kids Tent House\n\n399 : ",
    {
     "type": "link",
     "text": "https://extp.in/RxR4sF"
    },
    "\n440 : ",
    {
     "type": "link",
     "text": "https://extp.in/7wylUk"
    },
    "\n\nMore : ",
    {
     "type": "link",
     "text": "https://extp.in/9AJWV4"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Kids Tent House\n\n399 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/RxR4sF"
    },
    {
     "type": "plain",
     "text": "\n440 : "
    },
    {
     "type": "link",
     "text": "https://extp.in/7wylUk"
    },
    {
     "type": "plain",
     "text": "\n\nMore : "
    },
    {
     "type": "link",
     "text": "https://extp.in/9AJWV4"
    }
   ]
  },
  {
   "id": 85544,
   "type": "message",
   "date": "2023-06-09T08:36:54",
   "date_unixtime": "1686280014",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1128,
   "height": 592,
   "text": [
    "Upto 71% Off On Parachute Moisturizer\n\n",
    {
     "type": "link",
     "text": "https://extp.in/DBStxZ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Upto 71% Off On Parachute Moisturizer\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/DBStxZ"
    }
   ]
  },
  {
   "id": 85545,
   "type": "message",
   "date": "2023-06-09T08:37:23",
   "date_unixtime": "1686280043",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 498,
   "text": [
    "Intex 4.1 Bluetooth Party Speaker ",
    {
     "type": "mention",
     "text": "@2199"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://extp.in/tHvXek"
    },
    "\n\nPC : Other Sites Selling@ 3600+"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Intex 4.1 Bluetooth Party Speaker "
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
     "text": "https://extp.in/tHvXek"
    },
    {
     "type": "plain",
     "text": "\n\nPC : Other Sites Selling@ 3600+"
    }
   ]
  },
  {
   "id": 85546,
   "type": "message",
   "date": "2023-06-09T08:38:09",
   "date_unixtime": "1686280089",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1167,
   "height": 640,
   "text": [
    "Upto 72% Off On Timex Wrist Watches.\n\nMen's : ",
    {
     "type": "link",
     "text": "https://extp.in/fKgc2h"
    },
    "\nWomen's : ",
    {
     "type": "link",
     "text": "https://extp.in/BlUdwa"
    },
    "\n\nUpto 83% Off On Wrogn Men's Watch.\n\n",
    {
     "type": "link",
     "text": "https://extp.in/UQ4PNR"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Upto 72% Off On Timex Wrist Watches.\n\nMen's : "
    },
    {
     "type": "link",
     "text": "https://extp.in/fKgc2h"
    },
    {
     "type": "plain",
     "text": "\nWomen's : "
    },
    {
     "type": "link",
     "text": "https://extp.in/BlUdwa"
    },
    {
     "type": "plain",
     "text": "\n\nUpto 83% Off On Wrogn Men's Watch.\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/UQ4PNR"
    }
   ]
  },
  {
   "id": 85547,
   "type": "message",
   "date": "2023-06-09T08:38:47",
   "date_unixtime": "1686280127",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 517,
   "text": [
    "84% Off : Red Tape Shoes for Men@ 815 \n\n",
    {
     "type": "link",
     "text": "https://extp.in/wEHBes"
    },
    "\n\nRed Tape Shoes Starts@ 783\n\n",
    {
     "type": "link",
     "text": "https://extp.in/dkHTJx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "84% Off : Red Tape Shoes for Men@ 815 \n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/wEHBes"
    },
    {
     "type": "plain",
     "text": "\n\nRed Tape Shoes Starts@ 783\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/dkHTJx"
    }
   ]
  },
  {
   "id": 85548,
   "type": "message",
   "date": "2023-06-09T08:39:26",
   "date_unixtime": "1686280166",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 915,
   "height": 477,
   "text": [
    "Myntra : Women Track Pants Upto 75% Off from Rs.249\n\n",
    {
     "type": "link",
     "text": "https://extp.in/5JIhBx"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Myntra : Women Track Pants Upto 75% Off from Rs.249\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/5JIhBx"
    }
   ]
  },
  {
   "id": 85549,
   "type": "message",
   "date": "2023-06-09T08:40:07",
   "date_unixtime": "1686280207",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1233,
   "height": 542,
   "text": [
    "ZEBRONICS Portable Multimedia Speaker  @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43w4wL9"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "ZEBRONICS Portable Multimedia Speaker  @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43w4wL9"
    }
   ]
  },
  {
   "id": 85550,
   "type": "message",
   "date": "2023-06-09T08:40:45",
   "date_unixtime": "1686280245",
   "edited": "2023-06-09T08:41:04",
   "edited_unixtime": "1686280264",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 473,
   "text": [
    "DELL Core i3 12th Gen (8 GB/512 GB SSD/16 GB EMMC Storage/Windows 11 Home) Vostro 3420 Business Laptop@ 37,990 (Effectively)\n\n",
    {
     "type": "link",
     "text": "https://extp.in/6K0p0Y"
    },
    "\n\nFlat Rs.4000 Off via HDFC Credit Card"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "DELL Core i3 12th Gen (8 GB/512 GB SSD/16 GB EMMC Storage/Windows 11 Home) Vostro 3420 Business Laptop@ 37,990 (Effectively)\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/6K0p0Y"
    },
    {
     "type": "plain",
     "text": "\n\nFlat Rs.4000 Off via HDFC Credit Card"
    }
   ]
  },
  {
   "id": 85551,
   "type": "message",
   "date": "2023-06-09T08:42:22",
   "date_unixtime": "1686280342",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1102,
   "height": 616,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/sDtIxp"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/sDtIxp"
    }
   ]
  },
  {
   "id": 85552,
   "type": "message",
   "date": "2023-06-09T08:43:05",
   "date_unixtime": "1686280385",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 536,
   "text": [
    "60% Off : HAIR & CARE Non-Sticky Hair Oil 1L@ 244\n\n",
    {
     "type": "link",
     "text": "https://extp.in/HvnWJV"
    },
    "\n\n50% Off : Garnier Men Face Wash (300 g)@ 379\n\n",
    {
     "type": "link",
     "text": "https://extp.in/znyaQi"
    },
    "\n\n51% Off : Fair & Handsome Cream 60g + HE Deo 150ml@ 173\n\n",
    {
     "type": "link",
     "text": "https://extp.in/u8YjPT"
    },
    "\n\n53% Off : Bajaj Brahmi Amla Pack Of 2 Hair Oil (800 ml)@ 188\n\n",
    {
     "type": "link",
     "text": "https://extp.in/fQvXdN"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "60% Off : HAIR & CARE Non-Sticky Hair Oil 1L@ 244\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/HvnWJV"
    },
    {
     "type": "plain",
     "text": "\n\n50% Off : Garnier Men Face Wash (300 g)@ 379\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/znyaQi"
    },
    {
     "type": "plain",
     "text": "\n\n51% Off : Fair & Handsome Cream 60g + HE Deo 150ml@ 173\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/u8YjPT"
    },
    {
     "type": "plain",
     "text": "\n\n53% Off : Bajaj Brahmi Amla Pack Of 2 Hair Oil (800 ml)@ 188\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/fQvXdN"
    }
   ]
  },
  {
   "id": 85553,
   "type": "message",
   "date": "2023-06-09T08:43:36",
   "date_unixtime": "1686280416",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 502,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/AHc7ky"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/AHc7ky"
    }
   ]
  },
  {
   "id": 85554,
   "type": "message",
   "date": "2023-06-09T08:44:46",
   "date_unixtime": "1686280486",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 551,
   "text": [
    {
     "type": "link",
     "text": "https://extp.in/8ZJW93"
    }
   ],
   "text_entities": [
    {
     "type": "link",
     "text": "https://extp.in/8ZJW93"
    }
   ]
  },
  {
   "id": 85555,
   "type": "message",
   "date": "2023-06-09T08:45:36",
   "date_unixtime": "1686280536",
   "edited": "2023-06-09T08:57:55",
   "edited_unixtime": "1686281275",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1267,
   "height": 568,
   "text": [
    "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch  ",
    {
     "type": "mention",
     "text": "@1399"
    },
    "\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/42vcYcm"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch  "
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
     "text": "https://amzn.to/42vcYcm"
    }
   ]
  },
  {
   "id": 85556,
   "type": "message",
   "date": "2023-06-09T08:46:47",
   "date_unixtime": "1686280607",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 622,
   "text": [
    "realme 11 Pro / realme 11 Pro + \n\n[ HDFC / SBI CC ₹1500 Off ] \n \n",
    {
     "type": "link",
     "text": "https://extp.in/f67wbO"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "realme 11 Pro / realme 11 Pro + \n\n[ HDFC / SBI CC ₹1500 Off ] \n \n"
    },
    {
     "type": "link",
     "text": "https://extp.in/f67wbO"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85557,
   "type": "message",
   "date": "2023-06-09T08:47:28",
   "date_unixtime": "1686280648",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 464,
   "text": [
    "MarQ by Flipkart innopure Crux 12 L RO + UV + UF + Copper + TDS Control Water Purifier  at 3899/-\n\n",
    {
     "type": "link",
     "text": "https://extp.in/v2HJ4S"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "MarQ by Flipkart innopure Crux 12 L RO + UV + UF + Copper + TDS Control Water Purifier  at 3899/-\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/v2HJ4S"
    }
   ]
  },
  {
   "id": 85558,
   "type": "message",
   "date": "2023-06-09T08:48:11",
   "date_unixtime": "1686280691",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "BAJAJ Almond Drops Moisturizing Soap 100Gm Pack of 4  (4 x 100 g) at 113/-\n\n",
    {
     "type": "link",
     "text": "https://extp.in/5kzVEQ"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "BAJAJ Almond Drops Moisturizing Soap 100Gm Pack of 4  (4 x 100 g) at 113/-\n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/5kzVEQ"
    }
   ]
  },
  {
   "id": 85559,
   "type": "message",
   "date": "2023-06-09T08:52:01",
   "date_unixtime": "1686280921",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 541,
   "text": [
    "Apple 2020 MacBook Air Laptop With M1 Chip ‎ at ‎71,490 (Effectively). \n\n",
    {
     "type": "link",
     "text": "https://extp.in/itnd6k"
    },
    "\n\n*₹5000 Off With HDFC Credit Card."
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Apple 2020 MacBook Air Laptop With M1 Chip ‎ at ‎71,490 (Effectively). \n\n"
    },
    {
     "type": "link",
     "text": "https://extp.in/itnd6k"
    },
    {
     "type": "plain",
     "text": "\n\n*₹5000 Off With HDFC Credit Card."
    }
   ]
  },
  {
   "id": 85560,
   "type": "message",
   "date": "2023-06-09T08:52:42",
   "date_unixtime": "1686280962",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "text": [
    "50% Off : Real Fruit Juice @140\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/43HQwOo"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "50% Off : Real Fruit Juice @140\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/43HQwOo"
    }
   ]
  },
  {
   "id": 85561,
   "type": "message",
   "date": "2023-06-09T08:53:26",
   "date_unixtime": "1686281006",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 524,
   "text": [
    "750W Mixer Grinder With 4 Jars @ ₹1,299\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/HkhJ2h"
    },
    "\n\n❌ Regular price @ ₹2,499"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "750W Mixer Grinder With 4 Jars @ ₹1,299\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/HkhJ2h"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹2,499"
    }
   ]
  },
  {
   "id": 85562,
   "type": "message",
   "date": "2023-06-09T08:54:07",
   "date_unixtime": "1686281047",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1051,
   "height": 330,
   "text": [
    "HP USB 3.2 Flash Drive 32GB x718w  @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3NmtGGG"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "HP USB 3.2 Flash Drive 32GB x718w  @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3NmtGGG"
    }
   ]
  },
  {
   "id": 85563,
   "type": "message",
   "date": "2023-06-09T08:55:35",
   "date_unixtime": "1686281135",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1280,
   "height": 524,
   "text": [
    "realme 32 inch HD Ready LED Smart Android TV @ ₹9,749\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/PDTmaU"
    },
    "\n\n❌ Regular price @ ₹13,999\n\n💡 With HDFC Cc"
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "realme 32 inch HD Ready LED Smart Android TV @ ₹9,749\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/PDTmaU"
    },
    {
     "type": "plain",
     "text": "\n\n❌ Regular price @ ₹13,999\n\n💡 With HDFC Cc"
    }
   ]
  },
  {
   "id": 85564,
   "type": "message",
   "date": "2023-06-09T08:56:11",
   "date_unixtime": "1686281171",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1130,
   "height": 595,
   "text": [
    "Butterfly Cookware Sets at ₹999\n\n🔗",
    {
     "type": "link",
     "text": "https://extp.in/XXOlff"
    },
    ""
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Butterfly Cookware Sets at ₹999\n\n🔗"
    },
    {
     "type": "link",
     "text": "https://extp.in/XXOlff"
    },
    {
     "type": "plain",
     "text": ""
    }
   ]
  },
  {
   "id": 85565,
   "type": "message",
   "date": "2023-06-09T08:57:13",
   "date_unixtime": "1686281233",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1225,
   "height": 530,
   "text": [
    "Oraimo FreePods 3 True Wireless Earbuds   ",
    {
     "type": "mention",
     "text": "@1432"
    },
    "\n\n ",
    {
     "type": "link",
     "text": "https://amzn.to/3WUQ2C9"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Oraimo FreePods 3 True Wireless Earbuds   "
    },
    {
     "type": "mention",
     "text": "@1432"
    },
    {
     "type": "plain",
     "text": "\n\n "
    },
    {
     "type": "link",
     "text": "https://amzn.to/3WUQ2C9"
    }
   ]
  },
  {
   "id": 85566,
   "type": "message",
   "date": "2023-06-09T08:58:06",
   "date_unixtime": "1686281286",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 1222,
   "height": 497,
   "text": [
    "Wonderchef Piccolo Glass Tea Infuser with Plunger, 750ml, Black @399\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/3qwgIwW"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Wonderchef Piccolo Glass Tea Infuser with Plunger, 750ml, Black @399\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/3qwgIwW"
    }
   ]
  },
  {
   "id": 85567,
   "type": "message",
   "date": "2023-06-09T08:58:45",
   "date_unixtime": "1686281325",
   "from": "TR Facts Deals🔥🔥🔥",
   "from_id": "channel1487851422",
   "author": ".",
   "photo": "(File not included. Change data exporting settings to download.)",
   "width": 993,
   "height": 335,
   "text": [
    "Ant Value FKBRI03 / Auto-Stand-by, Silent Keys  @549\n\n",
    {
     "type": "link",
     "text": "https://amzn.to/45VpeWr"
    }
   ],
   "text_entities": [
    {
     "type": "plain",
     "text": "Ant Value FKBRI03 / Auto-Stand-by, Silent Keys  @549\n\n"
    },
    {
     "type": "link",
     "text": "https://amzn.to/45VpeWr"
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
