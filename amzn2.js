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
        "id": 93466,
        "type": "message",
        "date": "2023-07-05T10:09:12",
        "date_unixtime": "1688531952",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1230,
        "height": 563,
        "text": [
         "Webelkart®️ Decorative Bless This Home Wall @252\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XSSzgR"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Webelkart®️ Decorative Bless This Home Wall @252\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XSSzgR"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93467,
        "type": "message",
        "date": "2023-07-05T10:09:37",
        "date_unixtime": "1688531977",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 578,
        "text": [
         "AXN Hany Mini Compact Chopper  @129\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JLINXP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "AXN Hany Mini Compact Chopper  @129\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JLINXP"
         }
        ]
       },
       {
        "id": 93468,
        "type": "message",
        "date": "2023-07-05T10:09:57",
        "date_unixtime": "1688531997",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1256,
        "height": 527,
        "text": [
         "Nikunj Advance Detergent Powder, 4 kg Pack @159\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0WLI0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nikunj Advance Detergent Powder, 4 kg Pack @159\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0WLI0"
         }
        ]
       },
       {
        "id": 93469,
        "type": "message",
        "date": "2023-07-05T10:10:46",
        "date_unixtime": "1688532046",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 547,
        "text": [
         "Lenovo 39.63cm (15.6\")Executive Red Backpack @731\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3O1IZVA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lenovo 39.63cm (15.6\")Executive Red Backpack @731\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O1IZVA"
         }
        ]
       },
       {
        "id": 93470,
        "type": "message",
        "date": "2023-07-05T10:13:09",
        "date_unixtime": "1688532189",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1208,
        "height": 505,
        "text": [
         "SYSKA Trendsetter HD1010 1000W Hair Dryer @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43aVbaK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SYSKA Trendsetter HD1010 1000W Hair Dryer @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43aVbaK"
         }
        ]
       },
       {
        "id": 93471,
        "type": "message",
        "date": "2023-07-05T10:13:28",
        "date_unixtime": "1688532208",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Flipkart: Up to 61% Off on Washing Machines\n\n➡️ Semi-Automatic From Rs 6690: ",
         {
          "type": "link",
          "text": "https://extp.in/tUg3qY"
         },
         "\n\n➡️ Fully Automatic Top Load: ",
         {
          "type": "link",
          "text": "https://extp.in/0CzHl3"
         },
         "\n\n➡️ Fully Automatic Front Load: ",
         {
          "type": "link",
          "text": "https://extp.in/H5fhAV"
         },
         "\n\n👉 Apply Bank Offer"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Up to 61% Off on Washing Machines\n\n➡️ Semi-Automatic From Rs 6690: "
         },
         {
          "type": "link",
          "text": "https://extp.in/tUg3qY"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Fully Automatic Top Load: "
         },
         {
          "type": "link",
          "text": "https://extp.in/0CzHl3"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Fully Automatic Front Load: "
         },
         {
          "type": "link",
          "text": "https://extp.in/H5fhAV"
         },
         {
          "type": "plain",
          "text": "\n\n👉 Apply Bank Offer"
         }
        ]
       },
       {
        "id": 93472,
        "type": "message",
        "date": "2023-07-05T10:14:30",
        "date_unixtime": "1688532270",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1275,
        "height": 545,
        "text": [
         "Plant Stands Black (Set of 12) @ ₹799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3O2pkVv"
         },
         "\n\n❌ Regular price @ ₹1,179"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Plant Stands Black (Set of 12) @ ₹799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O2pkVv"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,179"
         }
        ]
       },
       {
        "id": 93473,
        "type": "message",
        "date": "2023-07-05T10:17:18",
        "date_unixtime": "1688532438",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "Loot 🚀 🚀 Kesh King Ayurvedic Anti Hairfall Shampoo 1L @ ₹297\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3rhGjdp"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Kesh King Ayurvedic Anti Hairfall Shampoo 1L @ ₹297\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rhGjdp"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93474,
        "type": "message",
        "date": "2023-07-05T10:17:55",
        "date_unixtime": "1688532475",
        "edited": "2023-07-05T10:56:53",
        "edited_unixtime": "1688534813",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1255,
        "height": 593,
        "text": [
         "Hubberholme Men's Track Pants @ ₹284\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43k8WUM"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "💡  Apply 5% coupon"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hubberholme Men's Track Pants @ ₹284\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43k8WUM"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "💡  Apply 5% coupon"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93475,
        "type": "message",
        "date": "2023-07-05T10:18:26",
        "date_unixtime": "1688532506",
        "edited": "2023-07-05T11:21:40",
        "edited_unixtime": "1688536300",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1257,
        "height": 491,
        "text": [
         "Eveready 20-Watt LED Batten, (Pack of 6) @ ₹962\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/46yu4JC"
         },
         "\n\n❌ Regular price @ ₹1,500"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Eveready 20-Watt LED Batten, (Pack of 6) @ ₹962\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46yu4JC"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,500"
         }
        ]
       },
       {
        "id": 93476,
        "type": "message",
        "date": "2023-07-05T10:18:56",
        "date_unixtime": "1688532536",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1122,
        "height": 575,
        "text": [
         "Loot 🚀 🚀 Trimmers Starts From  ₹399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/Wnnsip"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Trimmers Starts From  ₹399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/Wnnsip"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93477,
        "type": "message",
        "date": "2023-07-05T10:23:23",
        "date_unixtime": "1688532803",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 519,
        "text": [
         "💥Havells Trimmer 100 min Runtime \n\n💰Deal @ 799🔥.     ❌Reg @ 999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/YJ1lBQ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Havells Trimmer 100 min Runtime \n\n💰Deal @ 799🔥.     ❌Reg @ 999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/YJ1lBQ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93478,
        "type": "message",
        "date": "2023-07-05T10:44:26",
        "date_unixtime": "1688534066",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 484,
        "text": [
         "💥Misfit by boAt T150 Trimmer \n\n💰Deal @ 694🔥.   ❌Reg @ 800+\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/LRvgah"
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
          "text": "https://extp.in/LRvgah"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93479,
        "type": "message",
        "date": "2023-07-05T10:45:08",
        "date_unixtime": "1688534108",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1246,
        "height": 583,
        "text": [
         "Eveready 12W LED Bulb, Pack of 6  @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44v1OFX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Eveready 12W LED Bulb, Pack of 6  @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44v1OFX"
         }
        ]
       },
       {
        "id": 93480,
        "type": "message",
        "date": "2023-07-05T10:47:58",
        "date_unixtime": "1688534278",
        "edited": "2023-07-05T10:49:53",
        "edited_unixtime": "1688534393",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1213,
        "height": 447,
        "text": [
         "VEGA Hair Straightener@ 999\n\n",
         {
          "type": "link",
          "text": "https://extp.in/rzlm1F"
         },
         "\n\nVEGA Hair Dryer@ 449 : ",
         {
          "type": "link",
          "text": "https://extp.in/QKcCFG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "VEGA Hair Straightener@ 999\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/rzlm1F"
         },
         {
          "type": "plain",
          "text": "\n\nVEGA Hair Dryer@ 449 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/QKcCFG"
         }
        ]
       },
       {
        "id": 93481,
        "type": "message",
        "date": "2023-07-05T10:50:28",
        "date_unixtime": "1688534428",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1026,
        "height": 483,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/YqvaFg"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/YqvaFg"
         }
        ]
       },
       {
        "id": 93482,
        "type": "message",
        "date": "2023-07-05T10:51:24",
        "date_unixtime": "1688534484",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 437,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/jCYk7X"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/jCYk7X"
         }
        ]
       },
       {
        "id": 93483,
        "type": "message",
        "date": "2023-07-05T10:52:08",
        "date_unixtime": "1688534528",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1010,
        "height": 486,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/6SBTmi"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/6SBTmi"
         }
        ]
       },
       {
        "id": 93484,
        "type": "message",
        "date": "2023-07-05T10:52:30",
        "date_unixtime": "1688534550",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1040,
        "height": 477,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/lcnQ1J"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/lcnQ1J"
         }
        ]
       },
       {
        "id": 93485,
        "type": "message",
        "date": "2023-07-05T10:52:56",
        "date_unixtime": "1688534576",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1260,
        "height": 588,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/JCaRcs"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/JCaRcs"
         }
        ]
       },
       {
        "id": 93486,
        "type": "message",
        "date": "2023-07-05T10:53:26",
        "date_unixtime": "1688534606",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 963,
        "height": 359,
        "text": [
         "Ajio: Up to 95% Off on ZAVERI PEARLS Jewelry 💥\n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/kh7Q0A"
         },
         "\n\nJewellery Sets: ",
         {
          "type": "link",
          "text": "https://extp.in/6OnpSo"
         },
         "\nEarrings: ",
         {
          "type": "link",
          "text": "https://extp.in/bifC9K"
         },
         "\nBangles & Bracelets: ",
         {
          "type": "link",
          "text": "https://extp.in/v8cyjW"
         },
         "\nRings: ",
         {
          "type": "link",
          "text": "https://extp.in/43LwPk"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio: Up to 95% Off on ZAVERI PEARLS Jewelry 💥\n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/kh7Q0A"
         },
         {
          "type": "plain",
          "text": "\n\nJewellery Sets: "
         },
         {
          "type": "link",
          "text": "https://extp.in/6OnpSo"
         },
         {
          "type": "plain",
          "text": "\nEarrings: "
         },
         {
          "type": "link",
          "text": "https://extp.in/bifC9K"
         },
         {
          "type": "plain",
          "text": "\nBangles & Bracelets: "
         },
         {
          "type": "link",
          "text": "https://extp.in/v8cyjW"
         },
         {
          "type": "plain",
          "text": "\nRings: "
         },
         {
          "type": "link",
          "text": "https://extp.in/43LwPk"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93487,
        "type": "message",
        "date": "2023-07-05T10:57:12",
        "date_unixtime": "1688534832",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 547,
        "text": [
         "Xiaomi Wired in-Ear Earphones with Mic @337\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rfNLWs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Xiaomi Wired in-Ear Earphones with Mic @337\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rfNLWs"
         }
        ]
       },
       {
        "id": 93488,
        "type": "message",
        "date": "2023-07-05T10:57:49",
        "date_unixtime": "1688534869",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "STUDDS Professional D1 Full FACE Helmet ",
         {
          "type": "mention",
          "text": "@1193"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JKBeR0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "STUDDS Professional D1 Full FACE Helmet "
         },
         {
          "type": "mention",
          "text": "@1193"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JKBeR0"
         }
        ]
       },
       {
        "id": 93489,
        "type": "message",
        "date": "2023-07-05T10:58:18",
        "date_unixtime": "1688534898",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1207,
        "height": 441,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CPhd43"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CPhd43"
         }
        ]
       },
       {
        "id": 93490,
        "type": "message",
        "date": "2023-07-05T10:58:41",
        "date_unixtime": "1688534921",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1237,
        "height": 443,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/boUhNe"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/boUhNe"
         }
        ]
       },
       {
        "id": 93491,
        "type": "message",
        "date": "2023-07-05T10:59:07",
        "date_unixtime": "1688534947",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "Polycab 6W LED Panel Light @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JLuuCK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Polycab 6W LED Panel Light @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JLuuCK"
         }
        ]
       },
       {
        "id": 93492,
        "type": "message",
        "date": "2023-07-05T10:59:32",
        "date_unixtime": "1688534972",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "Wesley Spartan 45 Ltr Unisex trekking Rucksack Travel Backpack  @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pwQavt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wesley Spartan 45 Ltr Unisex trekking Rucksack Travel Backpack  @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pwQavt"
         }
        ]
       },
       {
        "id": 93493,
        "type": "message",
        "date": "2023-07-05T10:59:51",
        "date_unixtime": "1688534991",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1189,
        "height": 395,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2VeLjO"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2VeLjO"
         }
        ]
       },
       {
        "id": 93494,
        "type": "message",
        "date": "2023-07-05T11:00:26",
        "date_unixtime": "1688535026",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "ACO® Ventilating Exhaust Fan  ",
         {
          "type": "mention",
          "text": "@2599"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rkHRTN"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ACO® Ventilating Exhaust Fan  "
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
          "text": "https://amzn.to/3rkHRTN"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93495,
        "type": "message",
        "date": "2023-07-05T11:00:50",
        "date_unixtime": "1688535050",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1262,
        "height": 444,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/EEzjzK"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/EEzjzK"
         }
        ]
       },
       {
        "id": 93496,
        "type": "message",
        "date": "2023-07-05T11:01:15",
        "date_unixtime": "1688535075",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 585,
        "text": [
         "Longway Kiger P1 1200 mm/48 inch Ultra High Speed 3 Blade Anti-Dust Decorative 5-Star Rated Ceiling Fan ",
         {
          "type": "mention",
          "text": "@1129"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PD88XK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Longway Kiger P1 1200 mm/48 inch Ultra High Speed 3 Blade Anti-Dust Decorative 5-Star Rated Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@1129"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PD88XK"
         }
        ]
       },
       {
        "id": 93497,
        "type": "message",
        "date": "2023-07-05T11:01:43",
        "date_unixtime": "1688535103",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 609,
        "text": [
         "Fogg Master Intense Napoleon Perfume Body Spray @275\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PF2551"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fogg Master Intense Napoleon Perfume Body Spray @275\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PF2551"
         }
        ]
       },
       {
        "id": 93498,
        "type": "message",
        "date": "2023-07-05T11:02:11",
        "date_unixtime": "1688535131",
        "edited": "2023-07-05T11:03:12",
        "edited_unixtime": "1688535192",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "Horlicks Chocolate Health & Nutrition Drink 1 kg Refill Pack @294\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43epBZw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Horlicks Chocolate Health & Nutrition Drink 1 kg Refill Pack @294\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43epBZw"
         }
        ]
       },
       {
        "id": 93499,
        "type": "message",
        "date": "2023-07-05T11:02:37",
        "date_unixtime": "1688535157",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 542,
        "text": [
         "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV ",
         {
          "type": "mention",
          "text": "@30490"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44qtxHI"
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
          "text": "https://amzn.to/44qtxHI"
         }
        ]
       },
       {
        "id": 93500,
        "type": "message",
        "date": "2023-07-05T11:03:01",
        "date_unixtime": "1688535181",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 566,
        "text": [
         "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds  ",
         {
          "type": "mention",
          "text": "@1399"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44wGXSM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds  "
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
          "text": "https://amzn.to/44wGXSM"
         }
        ]
       },
       {
        "id": 93501,
        "type": "message",
        "date": "2023-07-05T11:03:27",
        "date_unixtime": "1688535207",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 610,
        "text": [
         "Ben Martin Men's Waterproof Raincoat @899\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3px82X3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ben Martin Men's Waterproof Raincoat @899\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3px82X3"
         }
        ]
       },
       {
        "id": 93502,
        "type": "message",
        "date": "2023-07-05T11:04:10",
        "date_unixtime": "1688535250",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "Havells Leganza 4B 1200mm 1 Star Energy Saving Ceiling Fan ",
         {
          "type": "mention",
          "text": "@3499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzkwNU"
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
          "text": "https://amzn.to/3pzkwNU"
         }
        ]
       },
       {
        "id": 93503,
        "type": "message",
        "date": "2023-07-05T11:05:31",
        "date_unixtime": "1688535331",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1030,
        "height": 516,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/NnEEVu"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/NnEEVu"
         }
        ]
       },
       {
        "id": 93504,
        "type": "message",
        "date": "2023-07-05T11:05:59",
        "date_unixtime": "1688535359",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         "Fire-Boltt Mystic 1.3\" AMOLED Display Smartwatch ",
         {
          "type": "mention",
          "text": "@1819"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pykrKe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Mystic 1.3\" AMOLED Display Smartwatch "
         },
         {
          "type": "mention",
          "text": "@1819"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pykrKe"
         }
        ]
       },
       {
        "id": 93505,
        "type": "message",
        "date": "2023-07-05T11:09:09",
        "date_unixtime": "1688535549",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1258,
        "height": 426,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/tTwsIq"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/tTwsIq"
         }
        ]
       },
       {
        "id": 93506,
        "type": "message",
        "date": "2023-07-05T11:10:32",
        "date_unixtime": "1688535632",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "Naughty Girl CRYSTAL No Gas Perfume spray @597\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46wUzPv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Naughty Girl CRYSTAL No Gas Perfume spray @597\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46wUzPv"
         }
        ]
       },
       {
        "id": 93507,
        "type": "message",
        "date": "2023-07-05T11:10:58",
        "date_unixtime": "1688535658",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "Fashion String 144 TC Microfibre Brown Double Bedsheet @269\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NHvfxE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fashion String 144 TC Microfibre Brown Double Bedsheet @269\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NHvfxE"
         }
        ]
       },
       {
        "id": 93508,
        "type": "message",
        "date": "2023-07-05T11:15:43",
        "date_unixtime": "1688535943",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "Amazon Basics Handheld Classic Massager  @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44xNNam"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics Handheld Classic Massager  @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44xNNam"
         }
        ]
       },
       {
        "id": 93509,
        "type": "message",
        "date": "2023-07-05T11:16:11",
        "date_unixtime": "1688535971",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Amazon Basics Electric Shaver for Men @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r7bY0W"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics Electric Shaver for Men @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r7bY0W"
         }
        ]
       },
       {
        "id": 93510,
        "type": "message",
        "date": "2023-07-05T11:16:34",
        "date_unixtime": "1688535994",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1210,
        "height": 414,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/p0mWZk"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/p0mWZk"
         }
        ]
       },
       {
        "id": 93511,
        "type": "message",
        "date": "2023-07-05T11:16:58",
        "date_unixtime": "1688536018",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "realme Buds Wireless 2 Neo Bluetooth in Ear Earphones ",
         {
          "type": "mention",
          "text": "@1299"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rjbGEA"
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
          "text": "https://amzn.to/3rjbGEA"
         }
        ]
       },
       {
        "id": 93512,
        "type": "message",
        "date": "2023-07-05T11:17:22",
        "date_unixtime": "1688536042",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 554,
        "text": [
         "Dabur Meswak Complete Oral Care Toothpaste - 500g @158\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r6kCgc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dabur Meswak Complete Oral Care Toothpaste - 500g @158\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r6kCgc"
         }
        ]
       },
       {
        "id": 93513,
        "type": "message",
        "date": "2023-07-05T11:17:50",
        "date_unixtime": "1688536070",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1208,
        "height": 448,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/X3DTEA"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/X3DTEA"
         }
        ]
       },
       {
        "id": 93514,
        "type": "message",
        "date": "2023-07-05T11:18:29",
        "date_unixtime": "1688536109",
        "edited": "2023-07-05T12:31:13",
        "edited_unixtime": "1688540473",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 621,
        "text": [
         "archies Polyresin Lord Ganesha Idol Showpiece Statue @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzlbim"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "archies Polyresin Lord Ganesha Idol Showpiece Statue @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzlbim"
         }
        ]
       },
       {
        "id": 93515,
        "type": "message",
        "date": "2023-07-05T11:28:15",
        "date_unixtime": "1688536695",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 565,
        "text": [
         "Dell Vostro 3510 Laptop ",
         {
          "type": "mention",
          "text": "@52490"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pESL6n"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dell Vostro 3510 Laptop "
         },
         {
          "type": "mention",
          "text": "@52490"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pESL6n"
         }
        ]
       },
       {
        "id": 93516,
        "type": "message",
        "date": "2023-07-05T11:29:12",
        "date_unixtime": "1688536752",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 651,
        "text": [
         "ARISTO Dyna Bathroom Set Delux (6 Pcs Set) ",
         {
          "type": "mention",
          "text": "@1097"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XFF5EI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ARISTO Dyna Bathroom Set Delux (6 Pcs Set) "
         },
         {
          "type": "mention",
          "text": "@1097"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XFF5EI"
         }
        ]
       },
       {
        "id": 93517,
        "type": "message",
        "date": "2023-07-05T11:29:40",
        "date_unixtime": "1688536780",
        "edited": "2023-07-05T13:02:05",
        "edited_unixtime": "1688542325",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 594,
        "text": [
         "Amazon Brand - Presto! Dishwash Gel @549\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43rEzvH"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Presto! Dishwash Gel @549\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43rEzvH"
         }
        ]
       },
       {
        "id": 93518,
        "type": "message",
        "date": "2023-07-05T11:30:32",
        "date_unixtime": "1688536832",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 621,
        "text": [
         "BLUE STAR SHARK Men's Lycra Stretchable Regular Fit Joggers Navy Track Pant @475\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D0cG2M"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BLUE STAR SHARK Men's Lycra Stretchable Regular Fit Joggers Navy Track Pant @475\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D0cG2M"
         }
        ]
       },
       {
        "id": 93519,
        "type": "message",
        "date": "2023-07-05T11:31:02",
        "date_unixtime": "1688536862",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 616,
        "text": [
         "Go Vegan Raw Cashew W320 Grade 1Kg @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XCZgDj"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Go Vegan Raw Cashew W320 Grade 1Kg @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XCZgDj"
         }
        ]
       },
       {
        "id": 93520,
        "type": "message",
        "date": "2023-07-05T11:32:55",
        "date_unixtime": "1688536975",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Ant Esports GS170 Gaming Speaker for PC @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PLKdFw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ant Esports GS170 Gaming Speaker for PC @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PLKdFw"
         }
        ]
       },
       {
        "id": 93521,
        "type": "message",
        "date": "2023-07-05T11:33:21",
        "date_unixtime": "1688537001",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 629,
        "text": [
         "WILDHORN 31L Laptop Backpack for Men @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3raOojX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "WILDHORN 31L Laptop Backpack for Men @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3raOojX"
         }
        ]
       },
       {
        "id": 93522,
        "type": "message",
        "date": "2023-07-05T11:33:47",
        "date_unixtime": "1688537027",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 742,
        "height": 509,
        "text": [
         "Ajio Looot Deals 🔥🔥\nWomen's Wear @ Up to 90% Off\n\nWomen's Tshirts start at Rs.120: ",
         {
          "type": "link",
          "text": "https://extp.in/DOr2oZ"
         },
         "\n\nKurta starts at Rs.150: ",
         {
          "type": "link",
          "text": "https://extp.in/X5LXva"
         },
         "\n\nTops start at Rs.100: ",
         {
          "type": "link",
          "text": "https://extp.in/Ll8XDI"
         },
         "\n\nSarees starts at Rs.195: ",
         {
          "type": "link",
          "text": "https://extp.in/OUfDYb"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio Looot Deals 🔥🔥\nWomen's Wear @ Up to 90% Off\n\nWomen's Tshirts start at Rs.120: "
         },
         {
          "type": "link",
          "text": "https://extp.in/DOr2oZ"
         },
         {
          "type": "plain",
          "text": "\n\nKurta starts at Rs.150: "
         },
         {
          "type": "link",
          "text": "https://extp.in/X5LXva"
         },
         {
          "type": "plain",
          "text": "\n\nTops start at Rs.100: "
         },
         {
          "type": "link",
          "text": "https://extp.in/Ll8XDI"
         },
         {
          "type": "plain",
          "text": "\n\nSarees starts at Rs.195: "
         },
         {
          "type": "link",
          "text": "https://extp.in/OUfDYb"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93523,
        "type": "message",
        "date": "2023-07-05T11:48:51",
        "date_unixtime": "1688537931",
        "edited": "2023-07-05T12:03:52",
        "edited_unixtime": "1688538832",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1148,
        "height": 442,
        "text": [
         "Face Skin Serum (30 ml x 3) @149.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/gXSjhc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Face Skin Serum (30 ml x 3) @149.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/gXSjhc"
         }
        ]
       },
       {
        "id": 93524,
        "type": "message",
        "date": "2023-07-05T12:43:16",
        "date_unixtime": "1688541196",
        "edited": "2023-07-05T15:14:56",
        "edited_unixtime": "1688550296",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1173,
        "height": 557,
        "text": [
         "Flipkart: realme Techlife Refrigerators @ upto 42% Off\n✅ + Bank Offer\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/ua8TxT"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: realme Techlife Refrigerators @ upto 42% Off\n✅ + Bank Offer\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/ua8TxT"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93525,
        "type": "message",
        "date": "2023-07-05T12:44:27",
        "date_unixtime": "1688541267",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 614,
        "text": [
         "Fastrack Reflex Vox Smartwatch ",
         {
          "type": "mention",
          "text": "@1995"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44tILMi"
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
          "text": "https://amzn.to/44tILMi"
         }
        ]
       },
       {
        "id": 93526,
        "type": "message",
        "date": "2023-07-05T12:44:54",
        "date_unixtime": "1688541294",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 587,
        "text": [
         "SanDisk iXpand Wireless 15W Charger ",
         {
          "type": "mention",
          "text": "@1537"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44wLnsQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SanDisk iXpand Wireless 15W Charger "
         },
         {
          "type": "mention",
          "text": "@1537"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44wLnsQ"
         }
        ]
       },
       {
        "id": 93527,
        "type": "message",
        "date": "2023-07-05T12:45:15",
        "date_unixtime": "1688541315",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1088,
        "height": 428,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/rl3pb5"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/rl3pb5"
         }
        ]
       },
       {
        "id": 93528,
        "type": "message",
        "date": "2023-07-05T12:45:36",
        "date_unixtime": "1688541336",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1243,
        "height": 441,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/s9oc7s"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/s9oc7s"
         }
        ]
       },
       {
        "id": 93529,
        "type": "message",
        "date": "2023-07-05T13:02:22",
        "date_unixtime": "1688542342",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 610,
        "text": [
         "Skagen Anita Lille Brown Watch ",
         {
          "type": "mention",
          "text": "@2488"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/436KLZK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Skagen Anita Lille Brown Watch "
         },
         {
          "type": "mention",
          "text": "@2488"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/436KLZK"
         }
        ]
       },
       {
        "id": 93530,
        "type": "message",
        "date": "2023-07-05T13:02:40",
        "date_unixtime": "1688542360",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Redgear Blaze Semi-Mechanical wired Gaming keyboard @600\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44A4P85"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redgear Blaze Semi-Mechanical wired Gaming keyboard @600\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44A4P85"
         }
        ]
       },
       {
        "id": 93531,
        "type": "message",
        "date": "2023-07-05T13:03:01",
        "date_unixtime": "1688542381",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "Kratos Thump Wired Earphones @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44xWykH"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Kratos Thump Wired Earphones @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44xWykH"
         }
        ]
       },
       {
        "id": 93532,
        "type": "message",
        "date": "2023-07-05T13:03:22",
        "date_unixtime": "1688542402",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1245,
        "height": 445,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/5noAEH"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/5noAEH"
         }
        ]
       },
       {
        "id": 93533,
        "type": "message",
        "date": "2023-07-05T13:08:39",
        "date_unixtime": "1688542719",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         "Skybags Brat Black 46 Cms Casual Backpack @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r6pHVO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Skybags Brat Black 46 Cms Casual Backpack @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r6pHVO"
         }
        ]
       },
       {
        "id": 93534,
        "type": "message",
        "date": "2023-07-05T13:17:34",
        "date_unixtime": "1688543254",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 879,
        "height": 521,
        "text": [
         "Myntra Loot Deal 🔥🔥\nWOW Skin Science Products @ up to 75% Off\n\n👉 👉 Grab Fast: ",
         {
          "type": "link",
          "text": "https://extp.in/MAvgyg"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra Loot Deal 🔥🔥\nWOW Skin Science Products @ up to 75% Off\n\n👉 👉 Grab Fast: "
         },
         {
          "type": "link",
          "text": "https://extp.in/MAvgyg"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93535,
        "type": "message",
        "date": "2023-07-05T13:18:03",
        "date_unixtime": "1688543283",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 607,
        "text": [
         "BEDSPUN Polypropylene Anti Slip Floor Door Mat  @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rdp9Ob"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BEDSPUN Polypropylene Anti Slip Floor Door Mat  @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rdp9Ob"
         }
        ]
       },
       {
        "id": 93536,
        "type": "message",
        "date": "2023-07-05T13:23:41",
        "date_unixtime": "1688543621",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1201,
        "height": 431,
        "text": [
         "Loot 🚀 🚀 Sansui Pedestal Fan @ ₹1,599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/bqRH9F"
         },
         "\n\n❌ Regular price @ ₹2,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Sansui Pedestal Fan @ ₹1,599\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/bqRH9F"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,100"
         }
        ]
       },
       {
        "id": 93537,
        "type": "message",
        "date": "2023-07-05T13:24:07",
        "date_unixtime": "1688543647",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Lifelong Kids Tricycle with EVA Wheels ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46uNhMp"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Kids Tricycle with EVA Wheels "
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
          "text": "https://amzn.to/46uNhMp"
         }
        ]
       },
       {
        "id": 93538,
        "type": "message",
        "date": "2023-07-05T13:24:41",
        "date_unixtime": "1688543681",
        "edited": "2023-07-05T13:37:05",
        "edited_unixtime": "1688544425",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "L'Oreal Paris Shampoo @528\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JLPHfA"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "L'Oreal Paris Shampoo @528\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JLPHfA"
         }
        ]
       },
       {
        "id": 93539,
        "type": "message",
        "date": "2023-07-05T13:25:05",
        "date_unixtime": "1688543705",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "LG Full HD IPS Monitor 60 Cm (24 Inches), 1920 X 1080 Pixels, FHD Monitor  ",
         {
          "type": "mention",
          "text": "@8899"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzRC01"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG Full HD IPS Monitor 60 Cm (24 Inches), 1920 X 1080 Pixels, FHD Monitor  "
         },
         {
          "type": "mention",
          "text": "@8899"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzRC01"
         }
        ]
       },
       {
        "id": 93540,
        "type": "message",
        "date": "2023-07-05T13:25:26",
        "date_unixtime": "1688543726",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Tabelito Nylon Basic Laptop Bag  @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46Cw9Ea"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tabelito Nylon Basic Laptop Bag  @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46Cw9Ea"
         }
        ]
       },
       {
        "id": 93541,
        "type": "message",
        "date": "2023-07-05T13:42:09",
        "date_unixtime": "1688544729",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "ZEBSTER Z-CU10A USB to Type C OTG @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rkQqhp"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBSTER Z-CU10A USB to Type C OTG @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rkQqhp"
         }
        ]
       },
       {
        "id": 93542,
        "type": "message",
        "date": "2023-07-05T13:42:47",
        "date_unixtime": "1688544767",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 575,
        "text": [
         "Kuber Industries Blazer ",
         {
          "type": "mention",
          "text": "@1369"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XDgTD0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Kuber Industries Blazer "
         },
         {
          "type": "mention",
          "text": "@1369"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XDgTD0"
         }
        ]
       },
       {
        "id": 93543,
        "type": "message",
        "date": "2023-07-05T13:44:55",
        "date_unixtime": "1688544895",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1239,
        "height": 761,
        "text": [
         "Hubberholme Sweatshirts Upto 84% Off starting @233\n\n",
         {
          "type": "link",
          "text": "https://extp.in/BlGW7H"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hubberholme Sweatshirts Upto 84% Off starting @233\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/BlGW7H"
         }
        ]
       },
       {
        "id": 93544,
        "type": "message",
        "date": "2023-07-05T13:45:36",
        "date_unixtime": "1688544936",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 559,
        "text": [
         "ZEBRONICS Zeb-Astra 20 Wireless BT v5.0 Portable Speaker  @899\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/449Snfq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Astra 20 Wireless BT v5.0 Portable Speaker  @899\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/449Snfq"
         }
        ]
       },
       {
        "id": 93545,
        "type": "message",
        "date": "2023-07-05T13:46:01",
        "date_unixtime": "1688544961",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 595,
        "text": [
         "BSB HOME® Super Soft Glace Cotton 180 TC Kids Print Single Bedsheet  @269\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43bAJXa"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BSB HOME® Super Soft Glace Cotton 180 TC Kids Print Single Bedsheet  @269\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43bAJXa"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93546,
        "type": "message",
        "date": "2023-07-05T13:46:22",
        "date_unixtime": "1688544982",
        "edited": "2023-07-05T13:46:40",
        "edited_unixtime": "1688545000",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "Boldfit Shoe Bag for Travel & Storage Travel Organizer @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44tLUM6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boldfit Shoe Bag for Travel & Storage Travel Organizer @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44tLUM6"
         }
        ]
       },
       {
        "id": 93547,
        "type": "message",
        "date": "2023-07-05T13:47:03",
        "date_unixtime": "1688545023",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 555,
        "text": [
         "Halonix Shield Kit Bag UV Sanitiser @800\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzsir4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Halonix Shield Kit Bag UV Sanitiser @800\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzsir4"
         }
        ]
       },
       {
        "id": 93548,
        "type": "message",
        "date": "2023-07-05T13:47:33",
        "date_unixtime": "1688545053",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 616,
        "text": [
         "TRONI Foldable Bed Study Table @219\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O3752g"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "TRONI Foldable Bed Study Table @219\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O3752g"
         }
        ]
       },
       {
        "id": 93549,
        "type": "message",
        "date": "2023-07-05T13:50:01",
        "date_unixtime": "1688545201",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 615,
        "text": [
         "OFIXO Credit Card Holder Protector Credit Card Wallet  @213\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44sk4Qg"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OFIXO Credit Card Holder Protector Credit Card Wallet  @213\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44sk4Qg"
         }
        ]
       },
       {
        "id": 93550,
        "type": "message",
        "date": "2023-07-05T13:50:31",
        "date_unixtime": "1688545231",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 604,
        "text": [
         "XYXX Men's Cruze French Terry Cotton Sweatshirt @789\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O2zpSl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "XYXX Men's Cruze French Terry Cotton Sweatshirt @789\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O2zpSl"
         }
        ]
       },
       {
        "id": 93551,
        "type": "message",
        "date": "2023-07-05T13:50:56",
        "date_unixtime": "1688545256",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1235,
        "height": 476,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/yZflMB"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/yZflMB"
         }
        ]
       },
       {
        "id": 93552,
        "type": "message",
        "date": "2023-07-05T13:51:42",
        "date_unixtime": "1688545302",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 631,
        "text": [
         "Ambrane Type-C to Lightning Cable @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46xYawN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ambrane Type-C to Lightning Cable @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46xYawN"
         }
        ]
       },
       {
        "id": 93553,
        "type": "message",
        "date": "2023-07-05T14:59:22",
        "date_unixtime": "1688549362",
        "edited": "2023-07-05T21:00:23",
        "edited_unixtime": "1688571023",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 495,
        "text": [
         "MamaEarth Oh My Goodness Sale ⚡️\n\nOffer: Buy 1 Get 1 Free \n        +\n✅ 5% online payment discount.\n\n✅ Use Code-  OMG\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/aDSaJu"
         },
         "\n\n📌 Suggestions:-\n\n👉 Skin Care: ",
         {
          "type": "link",
          "text": "https://extp.in/du5lLg"
         },
         "\n👉 Body Care: ",
         {
          "type": "link",
          "text": "https://extp.in/xE1Q8J"
         },
         "\n👉 Hair Care: ",
         {
          "type": "link",
          "text": "https://extp.in/GJsq7o"
         },
         "\n👉 Beauty Care: ",
         {
          "type": "link",
          "text": "https://extp.in/XRH5u2"
         },
         "\n👉 Make Up: ",
         {
          "type": "link",
          "text": "https://extp.in/BXR49C"
         },
         "\n \nTnC: Not applicable on kits, and cannot be applied with other coupons"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MamaEarth Oh My Goodness Sale ⚡️\n\nOffer: Buy 1 Get 1 Free \n        +\n✅ 5% online payment discount.\n\n✅ Use Code-  OMG\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/aDSaJu"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Suggestions:-\n\n👉 Skin Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/du5lLg"
         },
         {
          "type": "plain",
          "text": "\n👉 Body Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/xE1Q8J"
         },
         {
          "type": "plain",
          "text": "\n👉 Hair Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/GJsq7o"
         },
         {
          "type": "plain",
          "text": "\n👉 Beauty Care: "
         },
         {
          "type": "link",
          "text": "https://extp.in/XRH5u2"
         },
         {
          "type": "plain",
          "text": "\n👉 Make Up: "
         },
         {
          "type": "link",
          "text": "https://extp.in/BXR49C"
         },
         {
          "type": "plain",
          "text": "\n \nTnC: Not applicable on kits, and cannot be applied with other coupons"
         }
        ]
       },
       {
        "id": 93554,
        "type": "message",
        "date": "2023-07-05T15:00:11",
        "date_unixtime": "1688549411",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 596,
        "text": [
         "Loot 🚀 🚀 Havells Fusion 600mm Ceiling Fan @ ₹1,794\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/46y2zQl"
         },
         "\n\n❌ Regular price @ ₹3,100"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Havells Fusion 600mm Ceiling Fan @ ₹1,794\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/46y2zQl"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3,100"
         }
        ]
       },
       {
        "id": 93555,
        "type": "message",
        "date": "2023-07-05T15:00:42",
        "date_unixtime": "1688549442",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1038,
        "height": 523,
        "text": [
         "Metronaut Men's Readymade Blazers From ₹1,049\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/qei1kM"
         },
         "\n\n❌ Regular price @ ₹2,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut Men's Readymade Blazers From ₹1,049\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/qei1kM"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,299"
         }
        ]
       },
       {
        "id": 93556,
        "type": "message",
        "date": "2023-07-05T15:01:11",
        "date_unixtime": "1688549471",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1193,
        "height": 450,
        "text": [
         "Real Health Chocolate Peanut Butter 700 g Pack of 2 @ ₹219\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/JeaJcY"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Real Health Chocolate Peanut Butter 700 g Pack of 2 @ ₹219\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/JeaJcY"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93557,
        "type": "message",
        "date": "2023-07-05T15:01:45",
        "date_unixtime": "1688549505",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1184,
        "height": 560,
        "text": [
         "Simon Carter Men Boxer Shorts ",
         {
          "type": "mention",
          "text": "@1049"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44uWIcD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Simon Carter Men Boxer Shorts "
         },
         {
          "type": "mention",
          "text": "@1049"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44uWIcD"
         }
        ]
       },
       {
        "id": 93558,
        "type": "message",
        "date": "2023-07-05T15:02:29",
        "date_unixtime": "1688549549",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 454,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/KOJ83D"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/KOJ83D"
         }
        ]
       },
       {
        "id": 93559,
        "type": "message",
        "date": "2023-07-05T15:02:57",
        "date_unixtime": "1688549577",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 766,
        "height": 523,
        "text": [
         "Ajio: Up to 84% Off on The Indian Garage Co Clothing\n\n➡️ Shirts From Rs 320: ",
         {
          "type": "link",
          "text": "https://extp.in/BxLwPd"
         },
         "\n➡️ Jeans From Rs 400: ",
         {
          "type": "link",
          "text": "https://extp.in/OJlBcb"
         },
         "\n➡️ Shorts: ",
         {
          "type": "link",
          "text": "https://extp.in/0hFVpm"
         },
         "\n➡️ Jackets & Coats From Rs 600: ",
         {
          "type": "link",
          "text": "https://extp.in/haew8V"
         },
         "\n➡️ Sweatshirts & Hoodies From Rs 320: ",
         {
          "type": "link",
          "text": "https://extp.in/zbzimv"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio: Up to 84% Off on The Indian Garage Co Clothing\n\n➡️ Shirts From Rs 320: "
         },
         {
          "type": "link",
          "text": "https://extp.in/BxLwPd"
         },
         {
          "type": "plain",
          "text": "\n➡️ Jeans From Rs 400: "
         },
         {
          "type": "link",
          "text": "https://extp.in/OJlBcb"
         },
         {
          "type": "plain",
          "text": "\n➡️ Shorts: "
         },
         {
          "type": "link",
          "text": "https://extp.in/0hFVpm"
         },
         {
          "type": "plain",
          "text": "\n➡️ Jackets & Coats From Rs 600: "
         },
         {
          "type": "link",
          "text": "https://extp.in/haew8V"
         },
         {
          "type": "plain",
          "text": "\n➡️ Sweatshirts & Hoodies From Rs 320: "
         },
         {
          "type": "link",
          "text": "https://extp.in/zbzimv"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93560,
        "type": "message",
        "date": "2023-07-05T15:04:08",
        "date_unixtime": "1688549648",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 588,
        "text": [
         "LG 7 Kg 5 Star Inverter Touch Control Fully-Automatic Front Load Washing Machine  ",
         {
          "type": "mention",
          "text": "@58990"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3XDb4FD"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3Dj8zzf"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 7 Kg 5 Star Inverter Touch Control Fully-Automatic Front Load Washing Machine  "
         },
         {
          "type": "mention",
          "text": "@58990"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XDb4FD"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Dj8zzf"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93561,
        "type": "message",
        "date": "2023-07-05T15:04:36",
        "date_unixtime": "1688549676",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "Zebronics ZEB-JUKE BAR 9700 PRO DOLBY ATMOS Bluetooth Home Theater Soundbar ",
         {
          "type": "mention",
          "text": "@11499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46ymkY5"
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
          "text": "https://amzn.to/46ymkY5"
         }
        ]
       },
       {
        "id": 93562,
        "type": "message",
        "date": "2023-07-05T15:05:50",
        "date_unixtime": "1688549750",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Duracell Ultra Alkaline AA Batteries, Pack of 20  @400\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JOpwF9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Duracell Ultra Alkaline AA Batteries, Pack of 20  @400\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JOpwF9"
         }
        ]
       },
       {
        "id": 93563,
        "type": "message",
        "date": "2023-07-05T15:06:41",
        "date_unixtime": "1688549801",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 374,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/lZT64n"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/lZT64n"
         }
        ]
       },
       {
        "id": 93564,
        "type": "message",
        "date": "2023-07-05T15:07:11",
        "date_unixtime": "1688549831",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 593,
        "text": [
         "M MEDLER Epoch Nylon 55 litres Waterproof Strolley Duffle Bag @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3raZMfH"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "M MEDLER Epoch Nylon 55 litres Waterproof Strolley Duffle Bag @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3raZMfH"
         }
        ]
       },
       {
        "id": 93565,
        "type": "message",
        "date": "2023-07-05T15:09:15",
        "date_unixtime": "1688549955",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         "SanDisk Ultra Dual 64GB USB 3.0 OTG Pen Drive  @519\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NHb2s1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SanDisk Ultra Dual 64GB USB 3.0 OTG Pen Drive  @519\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NHb2s1"
         }
        ]
       },
       {
        "id": 93566,
        "type": "message",
        "date": "2023-07-05T15:09:40",
        "date_unixtime": "1688549980",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 634,
        "text": [
         "Nature Krafts Pachak Delicious Anardana Goli 400gm @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D0oL85"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nature Krafts Pachak Delicious Anardana Goli 400gm @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D0oL85"
         }
        ]
       },
       {
        "id": 93567,
        "type": "message",
        "date": "2023-07-05T15:10:07",
        "date_unixtime": "1688550007",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 633,
        "text": [
         "ZEBSTER Peak with Tangle Free Design @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PJ0OtN"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBSTER Peak with Tangle Free Design @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PJ0OtN"
         }
        ]
       },
       {
        "id": 93568,
        "type": "message",
        "date": "2023-07-05T15:10:32",
        "date_unixtime": "1688550032",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 587,
        "text": [
         "Rostaa Dried Pitted Prunes @280\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKgIEe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Rostaa Dried Pitted Prunes @280\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKgIEe"
         }
        ]
       },
       {
        "id": 93569,
        "type": "message",
        "date": "2023-07-05T15:10:56",
        "date_unixtime": "1688550056",
        "edited": "2023-07-05T17:50:14",
        "edited_unixtime": "1688559614",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 569,
        "text": [
         "Nutraj 100% Natural Dried Premium California Walnut Kernels, 500g  @479\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3ND2Zwi"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nutraj 100% Natural Dried Premium California Walnut Kernels, 500g  @479\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ND2Zwi"
         }
        ]
       },
       {
        "id": 93570,
        "type": "message",
        "date": "2023-07-05T15:11:24",
        "date_unixtime": "1688550084",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 643,
        "text": [
         "Amazon Brand - Vedaka Fortified Canola Oil, 1L @259\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43gKtiS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Vedaka Fortified Canola Oil, 1L @259\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gKtiS"
         }
        ]
       },
       {
        "id": 93571,
        "type": "message",
        "date": "2023-07-05T15:11:47",
        "date_unixtime": "1688550107",
        "edited": "2023-07-05T23:11:44",
        "edited_unixtime": "1688578904",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "ZEBRONICS Zeb-Crystal Clear Web Camera @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0lKuM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Crystal Clear Web Camera @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0lKuM"
         }
        ]
       },
       {
        "id": 93572,
        "type": "message",
        "date": "2023-07-05T15:12:09",
        "date_unixtime": "1688550129",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 634,
        "text": [
         "Body Cupid Vanilla Shower Gel - 200 ml @159\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/436wBI0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Body Cupid Vanilla Shower Gel - 200 ml @159\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/436wBI0"
         }
        ]
       },
       {
        "id": 93573,
        "type": "message",
        "date": "2023-07-05T15:12:31",
        "date_unixtime": "1688550151",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1230,
        "height": 437,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/hKx9mY"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/hKx9mY"
         }
        ]
       },
       {
        "id": 93574,
        "type": "message",
        "date": "2023-07-05T15:12:53",
        "date_unixtime": "1688550173",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         "Lino Perros Women Shoulder Bag @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PIXvmk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lino Perros Women Shoulder Bag @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PIXvmk"
         }
        ]
       },
       {
        "id": 93575,
        "type": "message",
        "date": "2023-07-05T15:13:22",
        "date_unixtime": "1688550202",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "Portronics Swipe 2 Screen Cleaner & Duster with Refillable Spray Bottle @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3r7oTzY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Swipe 2 Screen Cleaner & Duster with Refillable Spray Bottle @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3r7oTzY"
         }
        ]
       },
       {
        "id": 93576,
        "type": "message",
        "date": "2023-07-05T15:13:49",
        "date_unixtime": "1688550229",
        "edited": "2023-07-05T20:21:14",
        "edited_unixtime": "1688568674",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 623,
        "text": [
         "The Old Natural Car Air Freshener  @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CYkcLt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "The Old Natural Car Air Freshener  @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CYkcLt"
         }
        ]
       },
       {
        "id": 93577,
        "type": "message",
        "date": "2023-07-05T15:14:16",
        "date_unixtime": "1688550256",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 592,
        "text": [
         "GLUN Detail Pen Knife With 5 Interchangeable Sharp Blades @105\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pyHJj4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GLUN Detail Pen Knife With 5 Interchangeable Sharp Blades @105\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pyHJj4"
         }
        ]
       },
       {
        "id": 93578,
        "type": "message",
        "date": "2023-07-05T15:14:40",
        "date_unixtime": "1688550280",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "Aromahpure Premium Car Perfume Fragrance Flakes  @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NYa8so"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Aromahpure Premium Car Perfume Fragrance Flakes  @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NYa8so"
         }
        ]
       },
       {
        "id": 93579,
        "type": "message",
        "date": "2023-07-05T15:15:00",
        "date_unixtime": "1688550300",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Canus Fresh Goat'S Milk Body Wash @23\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44d1wng"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Canus Fresh Goat'S Milk Body Wash @23\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44d1wng"
         }
        ]
       },
       {
        "id": 93580,
        "type": "message",
        "date": "2023-07-05T15:15:32",
        "date_unixtime": "1688550332",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "Crompton Wave Plus 400-mm (16 inch) High Speed Oscillating Table Fan ",
         {
          "type": "mention",
          "text": "@1648"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44eF2m6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton Wave Plus 400-mm (16 inch) High Speed Oscillating Table Fan "
         },
         {
          "type": "mention",
          "text": "@1648"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44eF2m6"
         }
        ]
       },
       {
        "id": 93581,
        "type": "message",
        "date": "2023-07-05T15:15:55",
        "date_unixtime": "1688550355",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "MeeTo RAIN CARD @109\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3raLpYR"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MeeTo RAIN CARD @109\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3raLpYR"
         }
        ]
       },
       {
        "id": 93582,
        "type": "message",
        "date": "2023-07-05T15:16:13",
        "date_unixtime": "1688550373",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1145,
        "height": 438,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/VoLuJy"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/VoLuJy"
         }
        ]
       },
       {
        "id": 93583,
        "type": "message",
        "date": "2023-07-05T15:17:25",
        "date_unixtime": "1688550445",
        "edited": "2023-07-05T15:22:22",
        "edited_unixtime": "1688550742",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1256,
        "height": 423,
        "text": [
         "ASUS Vivobook 15 Core i5 11th Gen (8 GB/512 GB SSD/Windows 11 Home) Laptop @ ₹40,990\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/HY1Q2S"
         },
         "\n\n❌ Regular price @ ₹47,999\n\n💡 Flat ₹3000 Off With HDFC Cc"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ASUS Vivobook 15 Core i5 11th Gen (8 GB/512 GB SSD/Windows 11 Home) Laptop @ ₹40,990\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/HY1Q2S"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹47,999\n\n💡 Flat ₹3000 Off With HDFC Cc"
         }
        ]
       },
       {
        "id": 93584,
        "type": "message",
        "date": "2023-07-05T15:23:50",
        "date_unixtime": "1688550830",
        "edited": "2023-07-05T15:38:11",
        "edited_unixtime": "1688551691",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "🔗",
         {
          "type": "link",
          "text": "https://extp.in/dVH9mF"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/k2lAms"
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
          "text": "https://extp.in/dVH9mF"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/k2lAms"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93585,
        "type": "message",
        "date": "2023-07-05T15:30:36",
        "date_unixtime": "1688551236",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1268,
        "height": 537,
        "text": [
         "pTron Bullet Pro 36W PD Quick Charger @349\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzypvw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "pTron Bullet Pro 36W PD Quick Charger @349\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzypvw"
         }
        ]
       },
       {
        "id": 93586,
        "type": "message",
        "date": "2023-07-05T15:32:40",
        "date_unixtime": "1688551360",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 523,
        "text": [
         "Loot@4\n\nApply 50₹ off Coupon \n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44clf6z"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot@4\n\nApply 50₹ off Coupon \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44clf6z"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93587,
        "type": "message",
        "date": "2023-07-05T16:30:18",
        "date_unixtime": "1688554818",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Flipkart: XYXX Premium Solid Men's Round Neck T-shirt @ Rs.299/- [50% Off]\n\n6 Colours: ",
         {
          "type": "link",
          "text": "https://extp.in/MKtwhQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: XYXX Premium Solid Men's Round Neck T-shirt @ Rs.299/- [50% Off]\n\n6 Colours: "
         },
         {
          "type": "link",
          "text": "https://extp.in/MKtwhQ"
         }
        ]
       },
       {
        "id": 93588,
        "type": "message",
        "date": "2023-07-05T16:30:36",
        "date_unixtime": "1688554836",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Myntra : Men Watches Starts@ 199\n\n",
         {
          "type": "link",
          "text": "https://extp.in/wSrJOa"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra : Men Watches Starts@ 199\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/wSrJOa"
         }
        ]
       },
       {
        "id": 93589,
        "type": "message",
        "date": "2023-07-05T16:30:57",
        "date_unixtime": "1688554857",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 545,
        "text": [
         "Premium Almonds | 500gm @409\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JHvUOk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Premium Almonds | 500gm @409\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JHvUOk"
         }
        ]
       },
       {
        "id": 93590,
        "type": "message",
        "date": "2023-07-05T16:31:17",
        "date_unixtime": "1688554877",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1273,
        "height": 556,
        "text": [
         "Havells 1200 Watts Powerful Hair Dryer @ ₹799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3pA1sit"
         },
         "\n\n❌ Regular price @ ₹1,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells 1200 Watts Powerful Hair Dryer @ ₹799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pA1sit"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,299"
         }
        ]
       },
       {
        "id": 93591,
        "type": "message",
        "date": "2023-07-05T16:31:34",
        "date_unixtime": "1688554894",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1251,
        "height": 516,
        "text": [
         "Pigeon Steel Sipper 700 ml Pack of 3 @ ₹459\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3pyuPSb"
         },
         "\n\n❌ Regular price @ ₹920"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Steel Sipper 700 ml Pack of 3 @ ₹459\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pyuPSb"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹920"
         }
        ]
       },
       {
        "id": 93592,
        "type": "message",
        "date": "2023-07-05T16:32:20",
        "date_unixtime": "1688554940",
        "edited": "2023-07-05T16:32:51",
        "edited_unixtime": "1688554971",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1211,
        "height": 548,
        "text": [
         {
          "type": "bold",
          "text": "▶️ Redmi A2 2GB RAM, 32GB Storage @ ₹5,699\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3CXld6C"
         },
         "\n_______________________________\n\n",
         {
          "type": "bold",
          "text": "▶️ Redmi 12C 4GB RAM, 64GB Storage @ ₹7,899\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3CXldDE"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "💡  Apply ₹600 coupon\n\nMasterLink"
         },
         " :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3NCZUfB"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "▶️ Redmi A2 2GB RAM, 32GB Storage @ ₹5,699\n\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CXld6C"
         },
         {
          "type": "plain",
          "text": "\n_______________________________\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Redmi 12C 4GB RAM, 64GB Storage @ ₹7,899\n\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CXldDE"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "💡  Apply ₹600 coupon\n\nMasterLink"
         },
         {
          "type": "plain",
          "text": " :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NCZUfB"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93593,
        "type": "message",
        "date": "2023-07-05T16:34:33",
        "date_unixtime": "1688555073",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 527,
        "text": [
         "💥Misfit by boAt T150 Trimmer \n\n💰Deal @ 694🔥.   ❌Reg @ 800+\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/unJCq5"
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
          "text": "https://extp.in/unJCq5"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93594,
        "type": "message",
        "date": "2023-07-05T16:34:52",
        "date_unixtime": "1688555092",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1132,
        "height": 625,
        "text": [
         "💥Metronaut suitcases upto 80% off\n\nStarts @ 999🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/DsmWcd"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Metronaut suitcases upto 80% off\n\nStarts @ 999🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/DsmWcd"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93595,
        "type": "message",
        "date": "2023-07-05T16:35:25",
        "date_unixtime": "1688555125",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1175,
        "height": 487,
        "text": [
         "SanDisk Ultra® 128GB  @819\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NGwIEm"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SanDisk Ultra® 128GB  @819\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NGwIEm"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93596,
        "type": "message",
        "date": "2023-07-05T16:35:44",
        "date_unixtime": "1688555144",
        "edited": "2023-07-05T16:37:25",
        "edited_unixtime": "1688555245",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1236,
        "height": 557,
        "text": [
         "ZEBSTER Z-MTU10A 2 in 1 Type C to USB OTG Adapter @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JK9tIv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBSTER Z-MTU10A 2 in 1 Type C to USB OTG Adapter @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JK9tIv"
         }
        ]
       },
       {
        "id": 93597,
        "type": "message",
        "date": "2023-07-05T16:36:02",
        "date_unixtime": "1688555162",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1225,
        "height": 482,
        "text": [
         "Gizga Essentials USB WiFi Adapter for PC @169\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44b1hJz"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Gizga Essentials USB WiFi Adapter for PC @169\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44b1hJz"
         }
        ]
       },
       {
        "id": 93598,
        "type": "message",
        "date": "2023-07-05T19:32:02",
        "date_unixtime": "1688565722",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Happilo Flash SALE 🔥🔥\n\nBuy Premium California Almonds - 1kg @ Rs.837/- [Mrp : 1350/-]\n\n▶️ Link: ",
         {
          "type": "link",
          "text": "https://extp.in/KQsmAv"
         },
         "\n\n❇️ Use code : PWNUTS38\n\nHappilo is a Premium Brand & You will get 100% Quality Nuts 🥰"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Happilo Flash SALE 🔥🔥\n\nBuy Premium California Almonds - 1kg @ Rs.837/- [Mrp : 1350/-]\n\n▶️ Link: "
         },
         {
          "type": "link",
          "text": "https://extp.in/KQsmAv"
         },
         {
          "type": "plain",
          "text": "\n\n❇️ Use code : PWNUTS38\n\nHappilo is a Premium Brand & You will get 100% Quality Nuts 🥰"
         }
        ]
       },
       {
        "id": 93599,
        "type": "message",
        "date": "2023-07-05T19:32:26",
        "date_unixtime": "1688565746",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 497,
        "text": [
         "Inalsa Inox Digital Air Fryer  (2.5 L) @ ₹3,009\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/4xGYc0"
         },
         "\n\n❌ Regular price @ ₹4,799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Inalsa Inox Digital Air Fryer  (2.5 L) @ ₹3,009\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/4xGYc0"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹4,799"
         }
        ]
       },
       {
        "id": 93600,
        "type": "message",
        "date": "2023-07-05T19:32:45",
        "date_unixtime": "1688565765",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 578,
        "text": [
         "Genesis Gaming Chair Nitro @ ₹7,776\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3NHvVDl"
         },
         "\n\n❌ Regular price @ ₹12,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Genesis Gaming Chair Nitro @ ₹7,776\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NHvVDl"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹12,999"
         }
        ]
       },
       {
        "id": 93601,
        "type": "message",
        "date": "2023-07-05T19:33:03",
        "date_unixtime": "1688565783",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 488,
        "text": [
         "True Elements Rolled Oats 2kg @ ₹359\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/TRUmEH"
         },
         "\n\n❌ Regular price @ ₹650"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "True Elements Rolled Oats 2kg @ ₹359\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/TRUmEH"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹650"
         }
        ]
       },
       {
        "id": 93602,
        "type": "message",
        "date": "2023-07-05T19:33:19",
        "date_unixtime": "1688565799",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 938,
        "height": 500,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         "  Roadster Men Polo T-shirt From ₹215\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/CFU1P9"
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
          "text": "  Roadster Men Polo T-shirt From ₹215\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/CFU1P9"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93603,
        "type": "message",
        "date": "2023-07-05T19:33:35",
        "date_unixtime": "1688565815",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1136,
        "height": 498,
        "text": [
         "Wahl Beard Pro Cord/Cordless Beard Trimmer for Men @ ₹615\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3XG4deT"
         },
         "\n\n❌ Regular price @ ₹1,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wahl Beard Pro Cord/Cordless Beard Trimmer for Men @ ₹615\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XG4deT"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,299"
         }
        ]
       },
       {
        "id": 93604,
        "type": "message",
        "date": "2023-07-05T19:33:53",
        "date_unixtime": "1688565833",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1117,
        "height": 387,
        "text": [
         "Crompton 1200 mm (48 inch) Ceiling Fan @ ₹1,548\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3XG5faL"
         },
         "\n\n❌ Regular price @ ₹1,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton 1200 mm (48 inch) Ceiling Fan @ ₹1,548\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XG5faL"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,999"
         }
        ]
       },
       {
        "id": 93605,
        "type": "message",
        "date": "2023-07-05T19:34:10",
        "date_unixtime": "1688565850",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 557,
        "text": [
         "Maha Loot 🚀 🚀 Reebok men's Sliders @ ₹875 🔥\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3pyPeqi"
         },
         "\n\n❌Regular price @ ₹1,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Maha Loot 🚀 🚀 Reebok men's Sliders @ ₹875 🔥\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pyPeqi"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹1,999"
         }
        ]
       },
       {
        "id": 93606,
        "type": "message",
        "date": "2023-07-05T19:34:24",
        "date_unixtime": "1688565864",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 487,
        "text": [
         "PROLIFE Elite DLX Premium 750 W Mixer Grinder 4 Jars @ ₹1,098\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/cHU52t"
         },
         "\n\n❌ Regular price @ ₹2,199"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "PROLIFE Elite DLX Premium 750 W Mixer Grinder 4 Jars @ ₹1,098\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/cHU52t"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,199"
         }
        ]
       },
       {
        "id": 93607,
        "type": "message",
        "date": "2023-07-05T19:34:49",
        "date_unixtime": "1688565889",
        "edited": "2023-07-05T19:49:29",
        "edited_unixtime": "1688566769",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1237,
        "height": 472,
        "text": [
         "Gear Essentials 27L Travel Duffle Bag @ ₹699\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3D0IAfy"
         },
         "\n\n❌ Regular price @ ₹1,299\n\n",
         {
          "type": "bold",
          "text": "💡  Apply ₹400 coupon"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Gear Essentials 27L Travel Duffle Bag @ ₹699\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D0IAfy"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,299\n\n"
         },
         {
          "type": "bold",
          "text": "💡  Apply ₹400 coupon"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93608,
        "type": "message",
        "date": "2023-07-05T19:35:07",
        "date_unixtime": "1688565907",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1065,
        "height": 398,
        "text": [
         "Myntra: Hubberholme Joggers & Trackpants Starting @ Rs 219 😍\n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/pFwdLA"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Hubberholme Joggers & Trackpants Starting @ Rs 219 😍\n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/pFwdLA"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93609,
        "type": "message",
        "date": "2023-07-05T19:35:25",
        "date_unixtime": "1688565925",
        "edited": "2023-07-05T20:10:37",
        "edited_unixtime": "1688568037",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 504,
        "text": [
         "Flipkart: Best Mobile Deals - (4GB/64GB)\n\n➡️ POCO C51 @ Rs 6999/- [MRP 9999]\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/HtxoKq"
         },
         "\n\n➡️ MOTOROLA e32  @ Rs 7999/- [MRP 11999]\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/DS6Ymp"
         },
         "\n\n➡️ POCO M5 @ Rs 8749/- [MRP 15999]\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/RX56KO"
         },
         "\n\n➡️ More @ Min 30% Off\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/SNUuU9"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Best Mobile Deals - (4GB/64GB)\n\n➡️ POCO C51 @ Rs 6999/- [MRP 9999]\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/HtxoKq"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ MOTOROLA e32  @ Rs 7999/- [MRP 11999]\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/DS6Ymp"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ POCO M5 @ Rs 8749/- [MRP 15999]\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/RX56KO"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ More @ Min 30% Off\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/SNUuU9"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93610,
        "type": "message",
        "date": "2023-07-05T19:35:35",
        "date_unixtime": "1688565935",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 715,
        "height": 495,
        "text": [
         "💥 Ajio Loot Deal 🔥🔥\n✅ Up to 86% Off on GOLD & Silver Plated Jewellery\n\n👉 Grab Here: ",
         {
          "type": "link",
          "text": "https://extp.in/5FqlxV"
         },
         "\n\n❤️‍🔥 Scroll Down - Good Collection"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥 Ajio Loot Deal 🔥🔥\n✅ Up to 86% Off on GOLD & Silver Plated Jewellery\n\n👉 Grab Here: "
         },
         {
          "type": "link",
          "text": "https://extp.in/5FqlxV"
         },
         {
          "type": "plain",
          "text": "\n\n❤️‍🔥 Scroll Down - Good Collection"
         }
        ]
       },
       {
        "id": 93611,
        "type": "message",
        "date": "2023-07-05T19:36:00",
        "date_unixtime": "1688565960",
        "edited": "2023-07-05T23:20:07",
        "edited_unixtime": "1688579407",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 487,
        "text": [
         "Melamin Dinner Set Pack Of 40 ",
         {
          "type": "mention",
          "text": "@1449"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/Mxo4WS"
         },
         "\n\n849 : ",
         {
          "type": "link",
          "text": "https://extp.in/Lq7Sqy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Melamin Dinner Set Pack Of 40 "
         },
         {
          "type": "mention",
          "text": "@1449"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/Mxo4WS"
         },
         {
          "type": "plain",
          "text": "\n\n849 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/Lq7Sqy"
         }
        ]
       },
       {
        "id": 93612,
        "type": "message",
        "date": "2023-07-05T19:36:31",
        "date_unixtime": "1688565991",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 468,
        "text": [
         "Women’s Shoe (All Size) @299.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/YiWAY2"
         },
         "\n\nMasterLink : ",
         {
          "type": "link",
          "text": "https://extp.in/F9Qyzv"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Women’s Shoe (All Size) @299.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/YiWAY2"
         },
         {
          "type": "plain",
          "text": "\n\nMasterLink : "
         },
         {
          "type": "link",
          "text": "https://extp.in/F9Qyzv"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93613,
        "type": "message",
        "date": "2023-07-05T19:37:05",
        "date_unixtime": "1688566025",
        "edited": "2023-07-05T19:37:10",
        "edited_unixtime": "1688566030",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 867,
        "height": 372,
        "text": [
         "Men’s Tracksuit Sets Starts @599.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PJjYzJ"
         },
         " \n\nGym T-Shirt Starts @189 :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3reB51Z"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men’s Tracksuit Sets Starts @599.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PJjYzJ"
         },
         {
          "type": "plain",
          "text": " \n\nGym T-Shirt Starts @189 :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3reB51Z"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93614,
        "type": "message",
        "date": "2023-07-05T19:37:44",
        "date_unixtime": "1688566064",
        "edited": "2023-07-05T19:37:53",
        "edited_unixtime": "1688566073",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 519,
        "text": [
         {
          "type": "bold",
          "text": "New Launched"
         },
         " | OnePlus Nord Buds 2R Earbuds ",
         {
          "type": "mention",
          "text": "@2199"
         },
         ".\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PFxd4n"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "New Launched"
         },
         {
          "type": "plain",
          "text": " | OnePlus Nord Buds 2R Earbuds "
         },
         {
          "type": "mention",
          "text": "@2199"
         },
         {
          "type": "plain",
          "text": ".\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PFxd4n"
         }
        ]
       },
       {
        "id": 93615,
        "type": "message",
        "date": "2023-07-05T19:39:49",
        "date_unixtime": "1688566189",
        "edited": "2023-07-05T20:05:47",
        "edited_unixtime": "1688567747",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1242,
        "height": 580,
        "text": [
         "💥Redmi 12C (Royal Blue, 4GB RAM, 64GB Storage)\n\n💰Deal @ 7899🔥     ❌Reg @ 8499\n\n✅Apply ₹600 Off Coupon\n\n🔗  ",
         {
          "type": "link",
          "text": "https://amzn.to/43aWOoP"
         },
         "\n\nMaster link\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44r6GMR"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Redmi 12C (Royal Blue, 4GB RAM, 64GB Storage)\n\n💰Deal @ 7899🔥     ❌Reg @ 8499\n\n✅Apply ₹600 Off Coupon\n\n🔗  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43aWOoP"
         },
         {
          "type": "plain",
          "text": "\n\nMaster link\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44r6GMR"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93616,
        "type": "message",
        "date": "2023-07-05T19:40:16",
        "date_unixtime": "1688566216",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 520,
        "text": [
         {
          "type": "bold",
          "text": "❇️Pre-order Now with 1000/-🔥\nGet 2 Years of warranty \n\n💥iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 \n\nEffective Launch price @ 31999🔥\n\n❌ Regular price @ 34999/-\n\n✅Flat 2000 off with SBI/ICICI Cards\n✅1000 early bird discount \n\n🔗"
         },
         " ",
         {
          "type": "link",
          "text": "https://amzn.to/44agKJW"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "❇️Pre-order Now with 1000/-🔥\nGet 2 Years of warranty \n\n💥iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 \n\nEffective Launch price @ 31999🔥\n\n❌ Regular price @ 34999/-\n\n✅Flat 2000 off with SBI/ICICI Cards\n✅1000 early bird discount \n\n🔗"
         },
         {
          "type": "plain",
          "text": " "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44agKJW"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93617,
        "type": "message",
        "date": "2023-07-05T19:41:02",
        "date_unixtime": "1688566262",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 499,
        "text": [
         "💥Pureit Advanced Plus RO+MF+MP 7 L RO + MF Water Purifier \n\n💰Deal @ 5399🔥.     ❌Reg @ 6500\n\n✅600 off with ICICI cards\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/uB7oiX"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥Pureit Advanced Plus RO+MF+MP 7 L RO + MF Water Purifier \n\n💰Deal @ 5399🔥.     ❌Reg @ 6500\n\n✅600 off with ICICI cards\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/uB7oiX"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93618,
        "type": "message",
        "date": "2023-07-05T19:41:21",
        "date_unixtime": "1688566281",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 550,
        "text": [
         "❇️New Launch\n\n💥 OnePlus Nord Buds 2R Earbuds \n\n💰Deal @ 2199🔥\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3NYbe7s"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "❇️New Launch\n\n💥 OnePlus Nord Buds 2R Earbuds \n\n💰Deal @ 2199🔥\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NYbe7s"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93619,
        "type": "message",
        "date": "2023-07-05T19:41:47",
        "date_unixtime": "1688566307",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1061,
        "height": 321,
        "text": [
         "SanDisk ® Ultra Curve USB 3.2 64GB @419\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGajeU"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SanDisk ® Ultra Curve USB 3.2 64GB @419\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XGajeU"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93620,
        "type": "message",
        "date": "2023-07-05T19:42:05",
        "date_unixtime": "1688566325",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 559,
        "text": [
         "Portronics Swipe 2 Screen Cleaner & Duster @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46vdNoV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Portronics Swipe 2 Screen Cleaner & Duster @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46vdNoV"
         }
        ]
       },
       {
        "id": 93621,
        "type": "message",
        "date": "2023-07-05T19:42:30",
        "date_unixtime": "1688566350",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1198,
        "height": 447,
        "text": [
         "MEETION MT-M940 Black Wired Gaming Mouse @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43hcF5g"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MEETION MT-M940 Black Wired Gaming Mouse @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43hcF5g"
         }
        ]
       },
       {
        "id": 93622,
        "type": "message",
        "date": "2023-07-05T19:43:27",
        "date_unixtime": "1688566407",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1275,
        "height": 561,
        "text": [
         "Samsung 7 Kg 5 Star Inverter, Hygiene Steam  ",
         {
          "type": "mention",
          "text": "@25240"
         },
         " WITH BANK OFFER\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ahmPK"
         },
         "\n\n✅ Apply ₹1500 coupon"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung 7 Kg 5 Star Inverter, Hygiene Steam  "
         },
         {
          "type": "mention",
          "text": "@25240"
         },
         {
          "type": "plain",
          "text": " WITH BANK OFFER\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ahmPK"
         },
         {
          "type": "plain",
          "text": "\n\n✅ Apply ₹1500 coupon"
         }
        ]
       },
       {
        "id": 93623,
        "type": "message",
        "date": "2023-07-05T19:43:47",
        "date_unixtime": "1688566427",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 472,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/hAbeOG"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/hAbeOG"
         }
        ]
       },
       {
        "id": 93624,
        "type": "message",
        "date": "2023-07-05T19:44:05",
        "date_unixtime": "1688566445",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 550,
        "text": [
         "Plantex GI Steel Self-Adhesive Multipurpose @379\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3CYeglZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Plantex GI Steel Self-Adhesive Multipurpose @379\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CYeglZ"
         }
        ]
       },
       {
        "id": 93625,
        "type": "message",
        "date": "2023-07-05T19:44:29",
        "date_unixtime": "1688566469",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 547,
        "text": [
         "Sleepynuts Men's Regular Fit Round-Neck @464\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Nwm0Ac"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sleepynuts Men's Regular Fit Round-Neck @464\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nwm0Ac"
         }
        ]
       },
       {
        "id": 93626,
        "type": "message",
        "date": "2023-07-05T19:45:05",
        "date_unixtime": "1688566505",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 593,
        "text": [
         "Puma Mens Jacket ",
         {
          "type": "mention",
          "text": "@1139"
         },
         "\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3rh5Fbp"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Puma Mens Jacket "
         },
         {
          "type": "mention",
          "text": "@1139"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rh5Fbp"
         }
        ]
       },
       {
        "id": 93627,
        "type": "message",
        "date": "2023-07-05T19:45:21",
        "date_unixtime": "1688566521",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1182,
        "height": 502,
        "text": [
         "boAt Rockerz 245v2 Bluetooth Wireless in Ear Earphones @799\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JJSt52"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Rockerz 245v2 Bluetooth Wireless in Ear Earphones @799\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JJSt52"
         }
        ]
       },
       {
        "id": 93628,
        "type": "message",
        "date": "2023-07-05T19:45:41",
        "date_unixtime": "1688566541",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 569,
        "text": [
         "Scott International Men's & Boys @629\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NEBQcb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Scott International Men's & Boys @629\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEBQcb"
         }
        ]
       },
       {
        "id": 93629,
        "type": "message",
        "date": "2023-07-05T19:45:52",
        "date_unixtime": "1688566552",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Nveda Omega 3 Supplement - 1000mg (60 Softgels x 2 Bottles) @580.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PK6Lqe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nveda Omega 3 Supplement - 1000mg (60 Softgels x 2 Bottles) @580.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PK6Lqe"
         }
        ]
       },
       {
        "id": 93630,
        "type": "message",
        "date": "2023-07-05T20:01:21",
        "date_unixtime": "1688567481",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 615,
        "text": [
         "Birde Men Premium EVA Slippers  @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rlgIA7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Birde Men Premium EVA Slippers  @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rlgIA7"
         }
        ]
       },
       {
        "id": 93631,
        "type": "message",
        "date": "2023-07-05T20:02:01",
        "date_unixtime": "1688567521",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1036,
        "height": 479,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ktlCVf"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ktlCVf"
         }
        ]
       },
       {
        "id": 93632,
        "type": "message",
        "date": "2023-07-05T20:03:44",
        "date_unixtime": "1688567624",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1086,
        "height": 448,
        "text": [
         "Flipkart: Best Mobile Deals - (6GB/128GB)\n\n➡️ POCO C55 @ Rs 8499/- [MRP 13999]\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/B7ko8H"
         },
         "\n\n➡️ REDMI 11 Prime @ Rs 10999/- [MRP 16999]\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/5K5Xy9"
         },
         "\n\n➡️ More @ Min 30% Off\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/B7RqcF"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Best Mobile Deals - (6GB/128GB)\n\n➡️ POCO C55 @ Rs 8499/- [MRP 13999]\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/B7ko8H"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ REDMI 11 Prime @ Rs 10999/- [MRP 16999]\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/5K5Xy9"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ More @ Min 30% Off\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/B7RqcF"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93633,
        "type": "message",
        "date": "2023-07-05T20:04:23",
        "date_unixtime": "1688567663",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 604,
        "text": [
         "The Man Company EDP for men 100ml  @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XCfvAK"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "The Man Company EDP for men 100ml  @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XCfvAK"
         }
        ]
       },
       {
        "id": 93634,
        "type": "message",
        "date": "2023-07-05T20:23:04",
        "date_unixtime": "1688568784",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 587,
        "text": [
         "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV  ",
         {
          "type": "mention",
          "text": "@45990"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/449OYwV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV  "
         },
         {
          "type": "mention",
          "text": "@45990"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/449OYwV"
         }
        ]
       },
       {
        "id": 93635,
        "type": "message",
        "date": "2023-07-05T20:23:24",
        "date_unixtime": "1688568804",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1189,
        "height": 419,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/L1T51K"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/L1T51K"
         }
        ]
       },
       {
        "id": 93636,
        "type": "message",
        "date": "2023-07-05T20:25:36",
        "date_unixtime": "1688568936",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1041,
        "height": 473,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Sqj7fW"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Sqj7fW"
         }
        ]
       },
       {
        "id": 93637,
        "type": "message",
        "date": "2023-07-05T20:26:05",
        "date_unixtime": "1688568965",
        "edited": "2023-07-05T20:33:24",
        "edited_unixtime": "1688569404",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "Xtore® Universal Mobile Phone Holder & Tablet Holder  @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D02nMd"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Xtore® Universal Mobile Phone Holder & Tablet Holder  @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D02nMd"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93638,
        "type": "message",
        "date": "2023-07-05T20:26:36",
        "date_unixtime": "1688568996",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 637,
        "text": [
         "Tomica Fujikyu Highland Dodoonpa @279\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pyqC0Q"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Tomica Fujikyu Highland Dodoonpa @279\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pyqC0Q"
         }
        ]
       },
       {
        "id": 93639,
        "type": "message",
        "date": "2023-07-05T20:26:54",
        "date_unixtime": "1688569014",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 562,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/boLmgq"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/boLmgq"
         }
        ]
       },
       {
        "id": 93640,
        "type": "message",
        "date": "2023-07-05T20:27:17",
        "date_unixtime": "1688569037",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 595,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/ceQAvN"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/ceQAvN"
         }
        ]
       },
       {
        "id": 93641,
        "type": "message",
        "date": "2023-07-05T20:27:46",
        "date_unixtime": "1688569066",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Lifelong LLHFG922 1400W Air Fryer ",
         {
          "type": "mention",
          "text": "@6181"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3prhNGk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong LLHFG922 1400W Air Fryer "
         },
         {
          "type": "mention",
          "text": "@6181"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3prhNGk"
         }
        ]
       },
       {
        "id": 93642,
        "type": "message",
        "date": "2023-07-05T20:28:10",
        "date_unixtime": "1688569090",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1207,
        "height": 426,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/fxgsex"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/fxgsex"
         }
        ]
       },
       {
        "id": 93643,
        "type": "message",
        "date": "2023-07-05T20:28:38",
        "date_unixtime": "1688569118",
        "edited": "2023-07-05T20:59:54",
        "edited_unixtime": "1688570994",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 566,
        "text": [
         "Inalsa Oven MasterChef 46SSRC OTG ",
         {
          "type": "mention",
          "text": "@6099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44tu0sI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Inalsa Oven MasterChef 46SSRC OTG "
         },
         {
          "type": "mention",
          "text": "@6099"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44tu0sI"
         }
        ]
       },
       {
        "id": 93644,
        "type": "message",
        "date": "2023-07-05T20:29:09",
        "date_unixtime": "1688569149",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 592,
        "text": [
         "Eveready Red 1012 AAA Batteries - Pack of 10 @180\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D02G9P"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Eveready Red 1012 AAA Batteries - Pack of 10 @180\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D02G9P"
         }
        ]
       },
       {
        "id": 93645,
        "type": "message",
        "date": "2023-07-05T20:29:40",
        "date_unixtime": "1688569180",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 663,
        "text": [
         "Plus 91 Solid Cotton Men's Casual Cargo Pant @499\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3reympi"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Plus 91 Solid Cotton Men's Casual Cargo Pant @499\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3reympi"
         }
        ]
       },
       {
        "id": 93646,
        "type": "message",
        "date": "2023-07-05T20:30:05",
        "date_unixtime": "1688569205",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 582,
        "text": [
         "Gizga Essentials Earphone Carrying Case @119\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46z6AEc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Gizga Essentials Earphone Carrying Case @119\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46z6AEc"
         }
        ]
       },
       {
        "id": 93647,
        "type": "message",
        "date": "2023-07-05T20:30:29",
        "date_unixtime": "1688569229",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1258,
        "height": 449,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/7jsp8u"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/7jsp8u"
         }
        ]
       },
       {
        "id": 93648,
        "type": "message",
        "date": "2023-07-05T20:31:01",
        "date_unixtime": "1688569261",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 617,
        "text": [
         "Polycab Aery 400 mm Table Fan ",
         {
          "type": "mention",
          "text": "@1492"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NEG2IX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Polycab Aery 400 mm Table Fan "
         },
         {
          "type": "mention",
          "text": "@1492"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NEG2IX"
         }
        ]
       },
       {
        "id": 93649,
        "type": "message",
        "date": "2023-07-05T20:31:29",
        "date_unixtime": "1688569289",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "Havells 1200mm Thrill Air Energy Saving Ceiling Fan ",
         {
          "type": "mention",
          "text": "@1949"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44bRD9w"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells 1200mm Thrill Air Energy Saving Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@1949"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bRD9w"
         }
        ]
       },
       {
        "id": 93650,
        "type": "message",
        "date": "2023-07-05T20:32:00",
        "date_unixtime": "1688569320",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 620,
        "text": [
         "Philips Star Beam 5ft LED String Light  @170\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PKlJwr"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Philips Star Beam 5ft LED String Light  @170\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PKlJwr"
         }
        ]
       },
       {
        "id": 93651,
        "type": "message",
        "date": "2023-07-05T20:32:22",
        "date_unixtime": "1688569342",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1254,
        "height": 439,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/LaPxmd"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/LaPxmd"
         }
        ]
       },
       {
        "id": 93652,
        "type": "message",
        "date": "2023-07-05T20:32:51",
        "date_unixtime": "1688569371",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "CREATURE Unisex Aviator sunglasses Black Frame @289\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O2iChW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "CREATURE Unisex Aviator sunglasses Black Frame @289\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O2iChW"
         }
        ]
       },
       {
        "id": 93653,
        "type": "message",
        "date": "2023-07-05T20:33:19",
        "date_unixtime": "1688569399",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 647,
        "text": [
         "iBELL AF23BS 2.3 Litre 1200W Crispy Air Fryer ",
         {
          "type": "mention",
          "text": "@2999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XGGyLm"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "iBELL AF23BS 2.3 Litre 1200W Crispy Air Fryer "
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
          "text": "https://amzn.to/3XGGyLm"
         }
        ]
       },
       {
        "id": 93654,
        "type": "message",
        "date": "2023-07-05T20:33:44",
        "date_unixtime": "1688569424",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch ",
         {
          "type": "mention",
          "text": "@1799"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D0OMEk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Flux 1.45\" (3.6 cm) Bluetooth Calling smartwatch "
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
          "text": "https://amzn.to/3D0OMEk"
         }
        ]
       },
       {
        "id": 93655,
        "type": "message",
        "date": "2023-07-05T20:34:08",
        "date_unixtime": "1688569448",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1256,
        "height": 442,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/qnZ1lu"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/qnZ1lu"
         }
        ]
       },
       {
        "id": 93656,
        "type": "message",
        "date": "2023-07-05T20:34:32",
        "date_unixtime": "1688569472",
        "edited": "2023-07-05T21:09:14",
        "edited_unixtime": "1688571554",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1232,
        "height": 541,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/fk7Vz2"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/fk7Vz2"
         }
        ]
       },
       {
        "id": 93657,
        "type": "message",
        "date": "2023-07-05T20:34:59",
        "date_unixtime": "1688569499",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 581,
        "text": [
         "Voltas 1.5 Ton 3 Star, Inverter Split AC ",
         {
          "type": "mention",
          "text": "@32600"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PMlvF0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Voltas 1.5 Ton 3 Star, Inverter Split AC "
         },
         {
          "type": "mention",
          "text": "@32600"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PMlvF0"
         }
        ]
       },
       {
        "id": 93658,
        "type": "message",
        "date": "2023-07-05T20:35:49",
        "date_unixtime": "1688569549",
        "edited": "2023-07-05T20:47:37",
        "edited_unixtime": "1688570257",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1275,
        "height": 444,
        "text": [
         "XYXX Loot: Pack Of 5 Underwear at Rs.999/- 🔥🔥🔥\n\nMasterlink : ",
         {
          "type": "link",
          "text": "https://extp.in/sbk90L"
         },
         "\n\nSuggestions 👇👇\n\n✅ 5 Briefs at 999: ",
         {
          "type": "link",
          "text": "https://extp.in/ncyFgx"
         },
         "\n✅ 5 Trunks at 999: ",
         {
          "type": "link",
          "text": "https://extp.in/nsfrqp"
         },
         "\n✅ 5 Vests at 999: ",
         {
          "type": "link",
          "text": "https://extp.in/Cjl7ze"
         },
         "\n\n•Add Any 5 & Goto Payment Page, Price Will Be ₹999 [No Code Required + You Can add Multiple Colours]\n\n*Get Top Quality Products [As It’s Premium Brand]🔥.\n\n💰  Bonus Offer:  Pay Using CRED Pay For 5% Discount & Effective price will be Rs.949/-"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "XYXX Loot: Pack Of 5 Underwear at Rs.999/- 🔥🔥🔥\n\nMasterlink : "
         },
         {
          "type": "link",
          "text": "https://extp.in/sbk90L"
         },
         {
          "type": "plain",
          "text": "\n\nSuggestions 👇👇\n\n✅ 5 Briefs at 999: "
         },
         {
          "type": "link",
          "text": "https://extp.in/ncyFgx"
         },
         {
          "type": "plain",
          "text": "\n✅ 5 Trunks at 999: "
         },
         {
          "type": "link",
          "text": "https://extp.in/nsfrqp"
         },
         {
          "type": "plain",
          "text": "\n✅ 5 Vests at 999: "
         },
         {
          "type": "link",
          "text": "https://extp.in/Cjl7ze"
         },
         {
          "type": "plain",
          "text": "\n\n•Add Any 5 & Goto Payment Page, Price Will Be ₹999 [No Code Required + You Can add Multiple Colours]\n\n*Get Top Quality Products [As It’s Premium Brand]🔥.\n\n💰  Bonus Offer:  Pay Using CRED Pay For 5% Discount & Effective price will be Rs.949/-"
         }
        ]
       },
       {
        "id": 93659,
        "type": "message",
        "date": "2023-07-05T20:36:27",
        "date_unixtime": "1688569587",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 554,
        "text": [
         "Nuts About You Raisin, 500 g @149\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/443joB3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nuts About You Raisin, 500 g @149\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/443joB3"
         }
        ]
       },
       {
        "id": 93660,
        "type": "message",
        "date": "2023-07-05T20:36:53",
        "date_unixtime": "1688569613",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 589,
        "text": [
         "The Man Company Ombre Perfume for Men - 60ml @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44txfAq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "The Man Company Ombre Perfume for Men - 60ml @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44txfAq"
         }
        ]
       },
       {
        "id": 93661,
        "type": "message",
        "date": "2023-07-05T20:37:35",
        "date_unixtime": "1688569655",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 632,
        "text": [
         "Frestol Plastic Mop with Wheel+1 Refill+Rod @850\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XB7fAV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Frestol Plastic Mop with Wheel+1 Refill+Rod @850\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XB7fAV"
         }
        ]
       },
       {
        "id": 93662,
        "type": "message",
        "date": "2023-07-05T20:38:08",
        "date_unixtime": "1688569688",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 505,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/FfELSl"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/FfELSl"
         }
        ]
       },
       {
        "id": 93663,
        "type": "message",
        "date": "2023-07-05T20:38:43",
        "date_unixtime": "1688569723",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "HP x5600B 64GB OTG (Type B) usb3.2 Pen Drive @649\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XLsakP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP x5600B 64GB OTG (Type B) usb3.2 Pen Drive @649\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XLsakP"
         }
        ]
       },
       {
        "id": 93664,
        "type": "message",
        "date": "2023-07-05T20:39:04",
        "date_unixtime": "1688569744",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 561,
        "text": [
         "LG UltraWide FHD 26-Inch Computer Monitor ",
         {
          "type": "mention",
          "text": "@15200"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JJO1mY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG UltraWide FHD 26-Inch Computer Monitor "
         },
         {
          "type": "mention",
          "text": "@15200"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JJO1mY"
         }
        ]
       },
       {
        "id": 93665,
        "type": "message",
        "date": "2023-07-05T20:39:28",
        "date_unixtime": "1688569768",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 578,
        "text": [
         "Havells Rigo 500 watt Juicer ",
         {
          "type": "mention",
          "text": "@2531"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NFAfTv"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells Rigo 500 watt Juicer "
         },
         {
          "type": "mention",
          "text": "@2531"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NFAfTv"
         }
        ]
       },
       {
        "id": 93666,
        "type": "message",
        "date": "2023-07-05T20:39:51",
        "date_unixtime": "1688569791",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 631,
        "text": [
         "Macmerise Bad Feeling - Skin for Sony PS4 @257\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JJOc1C"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Macmerise Bad Feeling - Skin for Sony PS4 @257\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JJOc1C"
         }
        ]
       },
       {
        "id": 93667,
        "type": "message",
        "date": "2023-07-05T20:47:08",
        "date_unixtime": "1688570228",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1261,
        "height": 450,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/BXruag"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/BXruag"
         }
        ]
       },
       {
        "id": 93668,
        "type": "message",
        "date": "2023-07-05T20:47:39",
        "date_unixtime": "1688570259",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "Livon Damage Protect Serum @787\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pzXM0e"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Livon Damage Protect Serum @787\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pzXM0e"
         }
        ]
       },
       {
        "id": 93669,
        "type": "message",
        "date": "2023-07-05T20:47:59",
        "date_unixtime": "1688570279",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1222,
        "height": 368,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/fs5cmi"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/fs5cmi"
         }
        ]
       },
       {
        "id": 93670,
        "type": "message",
        "date": "2023-07-05T20:48:46",
        "date_unixtime": "1688570326",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 590,
        "text": [
         "LONGWAY Starlite-1 P1 1200 mm/48 inch Ultra High Speed 3 Blade Anti-Dust Decorative Star Rated Ceiling Fan  ",
         {
          "type": "mention",
          "text": "@1149"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pxM3PL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LONGWAY Starlite-1 P1 1200 mm/48 inch Ultra High Speed 3 Blade Anti-Dust Decorative Star Rated Ceiling Fan  "
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
          "text": "https://amzn.to/3pxM3PL"
         }
        ]
       },
       {
        "id": 93671,
        "type": "message",
        "date": "2023-07-05T20:49:10",
        "date_unixtime": "1688570350",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 583,
        "text": [
         "K-Life AM-101 Anti Bed Sore Air Mattress ",
         {
          "type": "mention",
          "text": "@1699"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rbqjJP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "K-Life AM-101 Anti Bed Sore Air Mattress "
         },
         {
          "type": "mention",
          "text": "@1699"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rbqjJP"
         }
        ]
       },
       {
        "id": 93672,
        "type": "message",
        "date": "2023-07-05T20:49:36",
        "date_unixtime": "1688570376",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 602,
        "text": [
         "Lenovo 39.63cm (15.6\")Executive Red Backpack @698\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PJz5sJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lenovo 39.63cm (15.6\")Executive Red Backpack @698\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PJz5sJ"
         }
        ]
       },
       {
        "id": 93673,
        "type": "message",
        "date": "2023-07-05T20:50:02",
        "date_unixtime": "1688570402",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 584,
        "text": [
         "LG 80 cm (32 inches) HD Ready Smart LED TV ",
         {
          "type": "mention",
          "text": "@13990"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44bppM9"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 80 cm (32 inches) HD Ready Smart LED TV "
         },
         {
          "type": "mention",
          "text": "@13990"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bppM9"
         }
        ]
       },
       {
        "id": 93674,
        "type": "message",
        "date": "2023-07-05T21:25:29",
        "date_unixtime": "1688572529",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1065,
        "height": 398,
        "text": [
         "Myntra: Min 50% Off on Fastrack Watches\n\nBuy Now: ",
         {
          "type": "link",
          "text": "https://extp.in/UAjFaf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Min 50% Off on Fastrack Watches\n\nBuy Now: "
         },
         {
          "type": "link",
          "text": "https://extp.in/UAjFaf"
         }
        ]
       },
       {
        "id": 93675,
        "type": "message",
        "date": "2023-07-05T21:26:36",
        "date_unixtime": "1688572596",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 610,
        "text": [
         "Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV ",
         {
          "type": "mention",
          "text": "@11999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pywyqE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV "
         },
         {
          "type": "mention",
          "text": "@11999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pywyqE"
         }
        ]
       },
       {
        "id": 93676,
        "type": "message",
        "date": "2023-07-05T21:27:07",
        "date_unixtime": "1688572627",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 591,
        "text": [
         "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV ",
         {
          "type": "mention",
          "text": "@11499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44f4gRa"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV "
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
          "text": "https://amzn.to/44f4gRa"
         }
        ]
       },
       {
        "id": 93677,
        "type": "message",
        "date": "2023-07-05T21:27:30",
        "date_unixtime": "1688572650",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1260,
        "height": 448,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/F6oWW1"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/F6oWW1"
         }
        ]
       },
       {
        "id": 93678,
        "type": "message",
        "date": "2023-07-05T21:28:01",
        "date_unixtime": "1688572681",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1068,
        "height": 367,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/UAtG0H"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/UAtG0H"
         }
        ]
       },
       {
        "id": 93679,
        "type": "message",
        "date": "2023-07-05T21:28:40",
        "date_unixtime": "1688572720",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 553,
        "text": [
         "GREENCHEF Crystal Plus 2 Burner Glass Gas Stove ",
         {
          "type": "mention",
          "text": "@2189"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3reYAIl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GREENCHEF Crystal Plus 2 Burner Glass Gas Stove "
         },
         {
          "type": "mention",
          "text": "@2189"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3reYAIl"
         }
        ]
       },
       {
        "id": 93680,
        "type": "message",
        "date": "2023-07-05T21:29:01",
        "date_unixtime": "1688572741",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1251,
        "height": 430,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/5ne5YK"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/5ne5YK"
         }
        ]
       },
       {
        "id": 93681,
        "type": "message",
        "date": "2023-07-05T21:29:23",
        "date_unixtime": "1688572763",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 602,
        "text": [
         "Lal Sweets Karachi Halwa 400gm @235\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NwZdo4"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lal Sweets Karachi Halwa 400gm @235\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NwZdo4"
         }
        ]
       },
       {
        "id": 93682,
        "type": "message",
        "date": "2023-07-05T21:29:56",
        "date_unixtime": "1688572796",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 566,
        "text": [
         "MageGee Gaming Keyboard and Mouse Combo ",
         {
          "type": "mention",
          "text": "@2611"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/4492AbO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MageGee Gaming Keyboard and Mouse Combo "
         },
         {
          "type": "mention",
          "text": "@2611"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4492AbO"
         }
        ]
       },
       {
        "id": 93683,
        "type": "message",
        "date": "2023-07-05T21:30:18",
        "date_unixtime": "1688572818",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1188,
        "height": 448,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/sIhdYv"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/sIhdYv"
         }
        ]
       },
       {
        "id": 93684,
        "type": "message",
        "date": "2023-07-05T21:34:31",
        "date_unixtime": "1688573071",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 617,
        "text": [
         "Crompton Galaxy Copper String Light  @280\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rlpH4j"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton Galaxy Copper String Light  @280\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rlpH4j"
         }
        ]
       },
       {
        "id": 93685,
        "type": "message",
        "date": "2023-07-05T21:34:58",
        "date_unixtime": "1688573098",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 602,
        "text": [
         "ZEBRONICS Zeb-BRO PRO in Ear Wired Stereo Earphones  @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46D7oHY"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-BRO PRO in Ear Wired Stereo Earphones  @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46D7oHY"
         }
        ]
       },
       {
        "id": 93686,
        "type": "message",
        "date": "2023-07-05T21:35:27",
        "date_unixtime": "1688573127",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1205,
        "height": 431,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Ai2kXf"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Ai2kXf"
         }
        ]
       },
       {
        "id": 93687,
        "type": "message",
        "date": "2023-07-05T21:35:56",
        "date_unixtime": "1688573156",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 620,
        "text": [
         "Gear Head Motors E Series Electric Cycle ",
         {
          "type": "mention",
          "text": "@44999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pIKJtc"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Gear Head Motors E Series Electric Cycle "
         },
         {
          "type": "mention",
          "text": "@44999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pIKJtc"
         }
        ]
       },
       {
        "id": 93688,
        "type": "message",
        "date": "2023-07-05T21:37:04",
        "date_unixtime": "1688573224",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1236,
        "height": 394,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/pBOpLQ"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/pBOpLQ"
         }
        ]
       },
       {
        "id": 93689,
        "type": "message",
        "date": "2023-07-05T21:46:28",
        "date_unixtime": "1688573788",
        "edited": "2023-07-05T22:24:28",
        "edited_unixtime": "1688576068",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "Loooot🚀🚀 Redmi (32 Inches) HD Ready Smart LED Fire TV @ ₹10,249",
         {
          "type": "bold",
          "text": " (Effectively)\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3XDV6Ly"
         },
         "\n\n💡",
         {
          "type": "bold",
          "text": " Flat ₹750 Off With ICICI Credit Card + Apply ₹500 Off Coupon"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loooot🚀🚀 Redmi (32 Inches) HD Ready Smart LED Fire TV @ ₹10,249"
         },
         {
          "type": "bold",
          "text": " (Effectively)\n\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XDV6Ly"
         },
         {
          "type": "plain",
          "text": "\n\n💡"
         },
         {
          "type": "bold",
          "text": " Flat ₹750 Off With ICICI Credit Card + Apply ₹500 Off Coupon"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93690,
        "type": "message",
        "date": "2023-07-05T21:47:17",
        "date_unixtime": "1688573837",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 479,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/fZFY61"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/fZFY61"
         }
        ]
       },
       {
        "id": 93691,
        "type": "message",
        "date": "2023-07-05T21:48:11",
        "date_unixtime": "1688573891",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 510,
        "text": [
         "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV  ",
         {
          "type": "mention",
          "text": "@38490"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46CXnuE"
         },
         "\n\n✅Apply ₹5500 coupon"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV  "
         },
         {
          "type": "mention",
          "text": "@38490"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46CXnuE"
         },
         {
          "type": "plain",
          "text": "\n\n✅Apply ₹5500 coupon"
         }
        ]
       },
       {
        "id": 93692,
        "type": "message",
        "date": "2023-07-05T21:51:34",
        "date_unixtime": "1688574094",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1170,
        "height": 546,
        "text": [
         "god & god's Sparkle Wall Sticker JUST Peel & Stick Size 30 or 45 cm Pack of 1  @89\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JMgV62"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "god & god's Sparkle Wall Sticker JUST Peel & Stick Size 30 or 45 cm Pack of 1  @89\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JMgV62"
         }
        ]
       },
       {
        "id": 93693,
        "type": "message",
        "date": "2023-07-05T21:52:05",
        "date_unixtime": "1688574125",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 574,
        "text": [
         "Oraimo 22.5W USB C Wall Charger 2 Port Fast Charger  @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/4374x7m"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Oraimo 22.5W USB C Wall Charger 2 Port Fast Charger  @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4374x7m"
         }
        ]
       },
       {
        "id": 93694,
        "type": "message",
        "date": "2023-07-05T21:53:01",
        "date_unixtime": "1688574181",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 608,
        "text": [
         "ZIUMIER Z20 White Gaming Headset  ",
         {
          "type": "mention",
          "text": "@5898"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44sVCOI"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZIUMIER Z20 White Gaming Headset  "
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
          "text": "https://amzn.to/44sVCOI"
         }
        ]
       },
       {
        "id": 93695,
        "type": "message",
        "date": "2023-07-05T21:53:52",
        "date_unixtime": "1688574232",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1150,
        "height": 592,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/Fvq65U"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/Fvq65U"
         }
        ]
       },
       {
        "id": 93696,
        "type": "message",
        "date": "2023-07-05T21:54:34",
        "date_unixtime": "1688574274",
        "edited": "2023-07-05T22:00:08",
        "edited_unixtime": "1688574608",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 524,
        "text": [
         "beatXP Bolt Deep Tissue Massage Gun  ",
         {
          "type": "mention",
          "text": "@1799"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44qKPEw"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Bolt Deep Tissue Massage Gun  "
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
          "text": "https://amzn.to/44qKPEw"
         }
        ]
       },
       {
        "id": 93697,
        "type": "message",
        "date": "2023-07-05T21:55:19",
        "date_unixtime": "1688574319",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 550,
        "text": [
         "Pigeon Brewster Coffee Maker, 600 Watt, 4 Cups Drip Coffee maker ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rhhxKx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Brewster Coffee Maker, 600 Watt, 4 Cups Drip Coffee maker "
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
          "text": "https://amzn.to/3rhhxKx"
         }
        ]
       },
       {
        "id": 93698,
        "type": "message",
        "date": "2023-07-05T22:23:18",
        "date_unixtime": "1688575998",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 553,
        "text": [
         "Eveready 12W LED Bulb, (Pack Of 6) @399\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46yY73T"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Eveready 12W LED Bulb, (Pack Of 6) @399\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46yY73T"
         }
        ]
       },
       {
        "id": 93699,
        "type": "message",
        "date": "2023-07-05T22:27:06",
        "date_unixtime": "1688576226",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 988,
        "height": 566,
        "text": [
         "Myntra: Min 80% Off on Women's Handbags, Clutches & Wallets\n\n➡️ Popularity: ",
         {
          "type": "link",
          "text": "https://extp.in/ziMiJu"
         },
         "\n\n➡️ Low to High: ",
         {
          "type": "link",
          "text": "https://extp.in/mnbzwG"
         },
         "\n\n➡️ Better Discount: ",
         {
          "type": "link",
          "text": "https://extp.in/nXAsa3"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Min 80% Off on Women's Handbags, Clutches & Wallets\n\n➡️ Popularity: "
         },
         {
          "type": "link",
          "text": "https://extp.in/ziMiJu"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Low to High: "
         },
         {
          "type": "link",
          "text": "https://extp.in/mnbzwG"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Better Discount: "
         },
         {
          "type": "link",
          "text": "https://extp.in/nXAsa3"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 93700,
        "type": "message",
        "date": "2023-07-05T22:29:39",
        "date_unixtime": "1688576379",
        "edited": "2023-07-05T23:32:49",
        "edited_unixtime": "1688580169",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 466,
        "text": [
         "Beard Oil 60ml @299\n\n",
         {
          "type": "link",
          "text": "https://extp.in/KKc7nd"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Beard Oil 60ml @299\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/KKc7nd"
         }
        ]
       },
       {
        "id": 93701,
        "type": "message",
        "date": "2023-07-05T22:30:40",
        "date_unixtime": "1688576440",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1132,
        "height": 433,
        "text": [
         "MSI Modern 15, Intel 12th Gen. i5-1235U ",
         {
          "type": "mention",
          "text": "@50990"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PI95xS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "MSI Modern 15, Intel 12th Gen. i5-1235U "
         },
         {
          "type": "mention",
          "text": "@50990"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PI95xS"
         }
        ]
       },
       {
        "id": 93702,
        "type": "message",
        "date": "2023-07-05T22:31:27",
        "date_unixtime": "1688576487",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 546,
        "text": [
         "ZEBRONICS Zeb-BRO PRO in Ear Wired Stereo Earphones  @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NM7lBo"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-BRO PRO in Ear Wired Stereo Earphones  @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NM7lBo"
         }
        ]
       },
       {
        "id": 93703,
        "type": "message",
        "date": "2023-07-05T22:31:57",
        "date_unixtime": "1688576517",
        "edited": "2023-07-05T22:33:59",
        "edited_unixtime": "1688576639",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 491,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/69ilWd"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/69ilWd"
         }
        ]
       },
       {
        "id": 93704,
        "type": "message",
        "date": "2023-07-05T22:33:07",
        "date_unixtime": "1688576587",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1277,
        "height": 562,
        "text": [
         "Havells STANDARD 400 MM ALFA HS PEDESTAL FAN ",
         {
          "type": "mention",
          "text": "@2363"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PEgZZf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells STANDARD 400 MM ALFA HS PEDESTAL FAN "
         },
         {
          "type": "mention",
          "text": "@2363"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PEgZZf"
         }
        ]
       },
       {
        "id": 93705,
        "type": "message",
        "date": "2023-07-05T22:51:24",
        "date_unixtime": "1688577684",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "50% Off | Dabur Vatika Enriched Coconut Hair Oil - 600 ml@ 180\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3D1R46o"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "50% Off | Dabur Vatika Enriched Coconut Hair Oil - 600 ml@ 180\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3D1R46o"
         }
        ]
       },
       {
        "id": 93706,
        "type": "message",
        "date": "2023-07-05T22:52:26",
        "date_unixtime": "1688577746",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 485,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/RbtO3v"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/RbtO3v"
         }
        ]
       },
       {
        "id": 93707,
        "type": "message",
        "date": "2023-07-05T22:52:56",
        "date_unixtime": "1688577776",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "wipro 3 Watt Atom Spotlight ",
         {
          "type": "mention",
          "text": "@2804"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/439yUKl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "wipro 3 Watt Atom Spotlight "
         },
         {
          "type": "mention",
          "text": "@2804"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/439yUKl"
         }
        ]
       },
       {
        "id": 93708,
        "type": "message",
        "date": "2023-07-05T23:31:09",
        "date_unixtime": "1688580069",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 484,
        "text": [
         "BAJAJ Crest Neo 1200 mm Ceiling Fan ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/aiOCTs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "BAJAJ Crest Neo 1200 mm Ceiling Fan "
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
          "text": "https://extp.in/aiOCTs"
         }
        ]
       },
       {
        "id": 93709,
        "type": "message",
        "date": "2023-07-05T23:31:25",
        "date_unixtime": "1688580085",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1039,
        "height": 458,
        "text": [
         "Flipkart: Purna Gummies Vitamin Supplement From Rs 99\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/az0Mfl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Purna Gummies Vitamin Supplement From Rs 99\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/az0Mfl"
         }
        ]
       },
       {
        "id": 93710,
        "type": "message",
        "date": "2023-07-05T23:32:19",
        "date_unixtime": "1688580139",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1128,
        "height": 392,
        "text": [
         "Orient Electric Adena Prime 1200mm Decorative BEE Star Rated Ceiling Fan ",
         {
          "type": "mention",
          "text": "@2033"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43hscC2"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Orient Electric Adena Prime 1200mm Decorative BEE Star Rated Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@2033"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43hscC2"
         }
        ]
       },
       {
        "id": 93711,
        "type": "message",
        "date": "2023-07-05T23:32:51",
        "date_unixtime": "1688580171",
        "edited": "2023-07-06T00:14:49",
        "edited_unixtime": "1688582689",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1247,
        "height": 596,
        "text": [
         "Nasher Miles Dalhousie Hard-Sided Poycarbonate Luggage Set of 2  ",
         {
          "type": "mention",
          "text": "@6398"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PElVNL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Nasher Miles Dalhousie Hard-Sided Poycarbonate Luggage Set of 2  "
         },
         {
          "type": "mention",
          "text": "@6398"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PElVNL"
         }
        ]
       },
       {
        "id": 93712,
        "type": "message",
        "date": "2023-07-05T23:33:13",
        "date_unixtime": "1688580193",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 536,
        "text": [
         "ZEBRONICS PODS 2 Wireless TWS Earbuds  @699\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rbGfvD"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS PODS 2 Wireless TWS Earbuds  @699\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rbGfvD"
         }
        ]
       },
       {
        "id": 93713,
        "type": "message",
        "date": "2023-07-05T23:33:26",
        "date_unixtime": "1688580206",
        "edited": "2023-07-05T23:43:07",
        "edited_unixtime": "1688580787",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 473,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/r1JR2t"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/r1JR2t"
         }
        ]
       },
       {
        "id": 93714,
        "type": "message",
        "date": "2023-07-05T23:42:46",
        "date_unixtime": "1688580766",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1273,
        "height": 527,
        "text": [
         "Techvor 3.0A 1Meter Type-C to Type-C Cable  @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O0tWeF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Techvor 3.0A 1Meter Type-C to Type-C Cable  @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O0tWeF"
         }
        ]
       },
       {
        "id": 93715,
        "type": "message",
        "date": "2023-07-05T23:43:12",
        "date_unixtime": "1688580792",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1145,
        "height": 543,
        "text": [
         "Cello Rock Comfortable Kids Chair @727\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NFSM21"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Rock Comfortable Kids Chair @727\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NFSM21"
         }
        ]
       },
       {
        "id": 93716,
        "type": "message",
        "date": "2023-07-06T00:08:20",
        "date_unixtime": "1688582300",
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
