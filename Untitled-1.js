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
    const {By,Key,Builder, Button, until} = require("selenium-webdriver");
    require('url').URLSearchParams

    // import Input from './ChatExport_2022-10-13 (3)/result.json';

const { urlIs } = require("selenium-webdriver/lib/until");


//@chrome
require("chromedriver");
const { Options } = require('./node_modules/selenium-webdriver/chrome');

const fetch = require("node-fetch");
global.fetch = fetch
global.Headers = fetch.Headers;
// const Headers = require("headers");
const fs = require("fs");
const FormData = require("form-data");


// const { Options } = require('../chrome')
var chrome = require("selenium-webdriver/chrome");
const { get } = require("selenium-webdriver/http");
const { WebElement } = require("selenium-webdriver");
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.XMLHttpRequest = require('xhr2');
// var XMLHttpRequest = require('xhr2');
var xhr = new global.XMLHttpRequest();
// import axios from 'axios';
const axios = require('axios').default;
let urlvalue;
let chat_id="@all1app";
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
// let driver = await new Builder().forBrowser("firefox").build();

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
    "id": 6991,
    "type": "message",
    "date": "2023-02-02T10:34:28",
    "date_unixtime": "1675314268",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀 Portronics Harmonics Twins S4 Smart TWS Earbuds with Hall Switch Feature, ✅Deal Price : RS: ₹ 1021😱\n 🛒  \n\n",
     {
      "type": "mention",
      "text": "@1021"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3js18PS"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/411PGZHumcL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1021\nD71\n\n❌Regular Price : ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Portronics Harmonics Twins S4 Smart TWS Earbuds with Hall Switch Feature, ✅Deal Price : RS: ₹ 1021😱\n 🛒  \n\n"
     },
     {
      "type": "mention",
      "text": "@1021"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3js18PS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/411PGZHumcL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1021\nD71\n\n❌Regular Price : ₹1999"
     }
    ]
   },
   {
    "id": 6992,
    "type": "message",
    "date": "2023-02-02T10:46:12",
    "date_unixtime": "1675314972",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀 Portronics Harmonics Twins S4 Smart TWS Earbuds with Hall Switch Feature, ✅Deal Price : RS: ₹ 1021😱\n 🛒  \n\n",
     {
      "type": "mention",
      "text": "@1021"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YbEtFW"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/411PGZHumcL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1021\nD71\n\n❌Regular Price : ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Portronics Harmonics Twins S4 Smart TWS Earbuds with Hall Switch Feature, ✅Deal Price : RS: ₹ 1021😱\n 🛒  \n\n"
     },
     {
      "type": "mention",
      "text": "@1021"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YbEtFW"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/411PGZHumcL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1021\nD71\n\n❌Regular Price : ₹1999"
     }
    ]
   },
   {
    "id": 6993,
    "type": "message",
    "date": "2023-02-02T10:47:12",
    "date_unixtime": "1675315032",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 beatXP BP Machine - Fully Automatic BP Monitor Large Cuff Size -✅Deal Price : RS: ₹ 699😱\n 🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HQdQkQ"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71YavCSZRcL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Home Medical Supplies &amp; Equipment \n                Health Monitors \n\n❌Regular Price : ₹1499"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 beatXP BP Machine - Fully Automatic BP Monitor Large Cuff Size -✅Deal Price : RS: ₹ 699😱\n 🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HQdQkQ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71YavCSZRcL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Home Medical Supplies &amp; Equipment \n                Health Monitors \n\n❌Regular Price : ₹1499"
     }
    ]
   },
   {
    "id": 6994,
    "type": "message",
    "date": "2023-02-02T10:48:16",
    "date_unixtime": "1675315096",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 446,
    "text": [
     "Offer 🚀🚀 Bajaj DX-6 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating✅Deal Price : RS: ₹ 625😱\n 🛒 \n\n@625\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wMq1bN"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61qgKaW71mL._SX450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Vacuum, Cleaning &amp; Ironing \nP625\nD55\n\n❌Regular Price : ₹1199"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Bajaj DX-6 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating✅Deal Price : RS: ₹ 625😱\n 🛒 \n\n@625\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wMq1bN"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61qgKaW71mL._SX450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Vacuum, Cleaning &amp; Ironing \nP625\nD55\n\n❌Regular Price : ₹1199"
     }
    ]
   },
   {
    "id": 6995,
    "type": "message",
    "date": "2023-02-02T10:49:21",
    "date_unixtime": "1675315161",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀  boAt Flash Edition Smartwatch with Activity Tracker,Multiple Sports Modes,F✅Deal Price : RS: ₹ 1499😱\n 🛒  \n\n",
     {
      "type": "mention",
      "text": "@1499"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RxOOdl"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71DqqFHYL7L._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nP1499\nD79\n\n❌Regular Price : ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  boAt Flash Edition Smartwatch with Activity Tracker,Multiple Sports Modes,F✅Deal Price : RS: ₹ 1499😱\n 🛒  \n\n"
     },
     {
      "type": "mention",
      "text": "@1499"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RxOOdl"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71DqqFHYL7L._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nP1499\nD79\n\n❌Regular Price : ₹2999"
     }
    ]
   },
   {
    "id": 6996,
    "type": "message",
    "date": "2023-02-02T10:50:23",
    "date_unixtime": "1675315223",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀  Lifelong LLSWH15 Aqua Plus 15L Storage Metal Body Vertical Water Heater (Geyser) |3 Star BEE Rating| 2000W| (White)✅Deal Price : RS: ₹ 4599😱\n 🛒 \n\n",
     {
      "type": "mention",
      "text": "@4599"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/40gR0dn"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51yaVo-lPfL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Water Heaters &amp; Geysers \nP4599\nD69\n\n❌Regular Price : ₹8999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Lifelong LLSWH15 Aqua Plus 15L Storage Metal Body Vertical Water Heater (Geyser) |3 Star BEE Rating| 2000W| (White)✅Deal Price : RS: ₹ 4599😱\n 🛒 \n\n"
     },
     {
      "type": "mention",
      "text": "@4599"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40gR0dn"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51yaVo-lPfL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Water Heaters &amp; Geysers \nP4599\nD69\n\n❌Regular Price : ₹8999"
     }
    ]
   },
   {
    "id": 6997,
    "type": "message",
    "date": "2023-02-02T10:51:25",
    "date_unixtime": "1675315285",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀   Portronics Toad 21 Wired Optical Mouse for Laptop/PC with Adjustable DPI, 1.5 M Length(Black)✅Deal Price : RS: ₹ 149😱\n 🛒 \n\n@149\n",
     {
      "type": "link",
      "text": "https://amzn.to/3l0c8En"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41WLiU3Su3L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Keyboards, Mice &amp; Input Devices \nP149\nD63\n\n❌Regular Price : ₹199"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Portronics Toad 21 Wired Optical Mouse for Laptop/PC with Adjustable DPI, 1.5 M Length(Black)✅Deal Price : RS: ₹ 149😱\n 🛒 \n\n@149\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3l0c8En"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41WLiU3Su3L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Keyboards, Mice &amp; Input Devices \nP149\nD63\n\n❌Regular Price : ₹199"
     }
    ]
   },
   {
    "id": 6998,
    "type": "message",
    "date": "2023-02-02T10:52:29",
    "date_unixtime": "1675315349",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 569,
    "height": 569,
    "text": [
     "Offer 🚀🚀   LOUIS DEVIN Leather Strap Analog Wrist Watch for Men✅Deal Price : RS: ₹ 389😱\n 🛒 \n\n@355\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Dyppuj"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/815WsVOPDLL._UX569_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     "\n\n                Watches \n                Men \n                 Wrist Watches \nP355\nD85\n\n❌Regular Price : ₹1299"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   LOUIS DEVIN Leather Strap Analog Wrist Watch for Men✅Deal Price : RS: ₹ 389😱\n 🛒 \n\n@355\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Dyppuj"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/815WsVOPDLL._UX569_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     {
      "type": "plain",
      "text": "\n\n                Watches \n                Men \n                 Wrist Watches \nP355\nD85\n\n❌Regular Price : ₹1299"
     }
    ]
   },
   {
    "id": 6999,
    "type": "message",
    "date": "2023-02-02T10:53:25",
    "date_unixtime": "1675315405",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 384,
    "text": [
     "Offer 🚀🚀 \n Azone RingW Nylon Ring Diameter 36 cm Basketball Ring with 2 NetBall Size 6 (White)\n✅Deal Price : RS: ₹ 176😱\n 🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/40lkLJX"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81KQxcZn9FL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Sports"
     },
     ", Fitness &amp; Outdoors\n\n                Jewellery \n                Women \n                 Rings \n\n❌Regular Price : ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 \n Azone RingW Nylon Ring Diameter 36 cm Basketball Ring with 2 NetBall Size 6 (White)\n✅Deal Price : RS: ₹ 176😱\n 🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40lkLJX"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81KQxcZn9FL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Sports"
     },
     {
      "type": "plain",
      "text": ", Fitness &amp; Outdoors\n\n                Jewellery \n                Women \n                 Rings \n\n❌Regular Price : ₹599"
     }
    ]
   },
   {
    "id": 7000,
    "type": "message",
    "date": "2023-02-02T10:54:26",
    "date_unixtime": "1675315466",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 385,
    "height": 385,
    "text": [
     "Offer 🚀🚀 Vector X Training Bibs for Football Soccer Basketball Volleyball for Track and Field Play✅Deal Price : RS: ₹ 140😱\n  🛒 \n\n@143\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wM1TGz"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71JT2fH4fTL._UX385_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Sports"
     },
     ", Fitness &amp; Outdoors\n\n                Clothing &amp; Accessories \n                Sport Specific Clothing \n                Soccer \nP143\nD15\n \n❌Regular Price : ₹160"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Vector X Training Bibs for Football Soccer Basketball Volleyball for Track and Field Play✅Deal Price : RS: ₹ 140😱\n  🛒 \n\n@143\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wM1TGz"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71JT2fH4fTL._UX385_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Sports"
     },
     {
      "type": "plain",
      "text": ", Fitness &amp; Outdoors\n\n                Clothing &amp; Accessories \n                Sport Specific Clothing \n                Soccer \nP143\nD15\n \n❌Regular Price : ₹160"
     }
    ]
   },
   {
    "id": 7001,
    "type": "message",
    "date": "2023-02-02T10:55:28",
    "date_unixtime": "1675315528",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 466,
    "height": 606,
    "text": [
     "Offer 🚀🚀 Nation Street Men's Solid Slim Fit T-Shirt✅Deal Price : RS: ₹259 😱\n  🛒 \n\n@729\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jhjFyk"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81YWNRV9XAL._UX466_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP729\nD48\n \n❌Regular Price : ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Nation Street Men's Solid Slim Fit T-Shirt✅Deal Price : RS: ₹259 😱\n  🛒 \n\n@729\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jhjFyk"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81YWNRV9XAL._UX466_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP729\nD48\n \n❌Regular Price : ₹599"
     }
    ]
   },
   {
    "id": 7002,
    "type": "message",
    "date": "2023-02-02T10:56:32",
    "date_unixtime": "1675315592",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀 Pigeon - StakBox Plastic Storage Container for Kitchen With Airtight Lids 6 Pieces - Ruby Red✅Deal Price : RS: ₹336 😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/40oY47u"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ZqbpJtEyL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP334<span class=\"a-price-decimal\">.</span>\nD74\n \n❌Regular Price : ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Pigeon - StakBox Plastic Storage Container for Kitchen With Airtight Lids 6 Pieces - Ruby Red✅Deal Price : RS: ₹336 😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40oY47u"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ZqbpJtEyL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP334<span class=\"a-price-decimal\">.</span>\nD74\n \n❌Regular Price : ₹599"
     }
    ]
   },
   {
    "id": 7003,
    "type": "message",
    "date": "2023-02-02T10:57:35",
    "date_unixtime": "1675315655",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 313,
    "text": [
     "Offer 🚀🚀SAF 6 mm MDF UV Textured Multi Effect Floral Paintings Frame - SANFJM32427 (Multicolour, 12 Inch x 18 Inch) - Set of 3✅Deal Price : RS:179   😱\n  🛒 \n\n@169\n",
     {
      "type": "link",
      "text": "https://amzn.to/3js37Uk"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/710KZvAmZKL._SX450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Artwork \n                 Paintings \nP169\nD81\n \n❌Regular Price : ₹\n 599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀SAF 6 mm MDF UV Textured Multi Effect Floral Paintings Frame - SANFJM32427 (Multicolour, 12 Inch x 18 Inch) - Set of 3✅Deal Price : RS:179   😱\n  🛒 \n\n@169\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3js37Uk"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/710KZvAmZKL._SX450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Artwork \n                 Paintings \nP169\nD81\n \n❌Regular Price : ₹\n 599"
     }
    ]
   },
   {
    "id": 7004,
    "type": "message",
    "date": "2023-02-02T10:58:41",
    "date_unixtime": "1675315721",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 Supreme Web Plastic Chairs for Home, Outdoor & Garden (Set of 6, Globus Brown)✅Deal Price : RS: 3323 😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3l3FEcx"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71W6UdRDxjL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Home &amp; Kitchen \n                Furniture \n                Living Room Furniture \nP3237<span class=\"a-price-decimal\">.</span>\nD79\n \n❌Regular Price : ₹\n 1099"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Supreme Web Plastic Chairs for Home, Outdoor & Garden (Set of 6, Globus Brown)✅Deal Price : RS: 3323 😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3l3FEcx"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71W6UdRDxjL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Home &amp; Kitchen \n                Furniture \n                Living Room Furniture \nP3237<span class=\"a-price-decimal\">.</span>\nD79\n \n❌Regular Price : ₹\n 1099"
     }
    ]
   },
   {
    "id": 7005,
    "type": "message",
    "date": "2023-02-02T10:59:46",
    "date_unixtime": "1675315786",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀 Royal Enfield Street Prime Crackling Camo Full Face ISI DOT ECE Certified Helmet Olive (M)58CM (RRGHEM000091)✅Deal Price : RS:2220 😱\n  🛒 \n\n",
     {
      "type": "mention",
      "text": "@2220"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HNvq92"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71r74hWTjLL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Car"
     },
     " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Motorbike Accessories &amp; Parts \n                Helmets \nP2220\nD40\n \n❌Regular Price : ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Royal Enfield Street Prime Crackling Camo Full Face ISI DOT ECE Certified Helmet Olive (M)58CM (RRGHEM000091)✅Deal Price : RS:2220 😱\n  🛒 \n\n"
     },
     {
      "type": "mention",
      "text": "@2220"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HNvq92"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71r74hWTjLL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Car"
     },
     {
      "type": "plain",
      "text": " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Motorbike Accessories &amp; Parts \n                Helmets \nP2220\nD40\n \n❌Regular Price : ₹2999"
     }
    ]
   },
   {
    "id": 7006,
    "type": "message",
    "date": "2023-02-02T11:00:52",
    "date_unixtime": "1675315852",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 446,
    "text": [
     "Offer 🚀🚀 Bajaj DX-6 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating Technology, White✅Deal Price : RS625:😱\n  🛒 \n\n@625\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DyzrM4"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61qgKaW71mL._SX450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Vacuum, Cleaning &amp; Ironing \nP625\nD55\n \n❌Regular Price : ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Bajaj DX-6 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating Technology, White✅Deal Price : RS625:😱\n  🛒 \n\n@625\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DyzrM4"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61qgKaW71mL._SX450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Vacuum, Cleaning &amp; Ironing \nP625\nD55\n \n❌Regular Price : ₹999"
     }
    ]
   },
   {
    "id": 7007,
    "type": "message",
    "date": "2023-02-02T11:01:54",
    "date_unixtime": "1675315914",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 B Natural Grand Celebration Pack (1L X3)✅Deal Price : RS:249😱\n  🛒 \n\n@249\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jhXmsl"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/612yH7LjVIL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Coffee, Tea &amp; Beverages \n                Juices \nP249\nD36\n \n❌Regular Price : ₹390"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 B Natural Grand Celebration Pack (1L X3)✅Deal Price : RS:249😱\n  🛒 \n\n@249\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jhXmsl"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/612yH7LjVIL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Coffee, Tea &amp; Beverages \n                Juices \nP249\nD36\n \n❌Regular Price : ₹390"
     }
    ]
   },
   {
    "id": 7008,
    "type": "message",
    "date": "2023-02-02T11:02:53",
    "date_unixtime": "1675315973",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀  )beatXP BP Machine - Fully Automatic BP Monitor Large Cuff Size - Memory Feature with Pulse Rate Detection - 1✅Deal Price : RS:699😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3l3WgR7"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610pL1Xpo3L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Home Medical Supplies &amp; Equipment \n                Health Monitors \n \n❌Regular Price : ₹1599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  )beatXP BP Machine - Fully Automatic BP Monitor Large Cuff Size - Memory Feature with Pulse Rate Detection - 1✅Deal Price : RS:699😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3l3WgR7"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610pL1Xpo3L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Home Medical Supplies &amp; Equipment \n                Health Monitors \n \n❌Regular Price : ₹1599"
     }
    ]
   },
   {
    "id": 7009,
    "type": "message",
    "date": "2023-02-02T11:03:54",
    "date_unixtime": "1675316034",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 280,
    "text": [
     "Offer 🚀🚀   Kuber Industries E27 40W Vintage Antique Dimmable Filament Edison Style Light LED✅Deal Price : RS:449😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XXxaSO"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71J1eXm8b4L._SX355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Home &amp; Décor \n                Seasonal Decorations \nDNaN\n \n❌Regular Price : ₹600"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Kuber Industries E27 40W Vintage Antique Dimmable Filament Edison Style Light LED✅Deal Price : RS:449😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XXxaSO"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71J1eXm8b4L._SX355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Home &amp; Décor \n                Seasonal Decorations \nDNaN\n \n❌Regular Price : ₹600"
     }
    ]
   },
   {
    "id": 7010,
    "type": "message",
    "date": "2023-02-02T11:04:58",
    "date_unixtime": "1675316098",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀   Organic Castor Hair Oil from Soulflower |Hair Growth, Stronger✅Deal Price : RS:176😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Rrhi8r"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51H1-219N2L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                 Hair Oils \n \n❌Regular Price : ₹215"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Organic Castor Hair Oil from Soulflower |Hair Growth, Stronger✅Deal Price : RS:176😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Rrhi8r"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51H1-219N2L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                 Hair Oils \n \n❌Regular Price : ₹215"
     }
    ]
   },
   {
    "id": 7011,
    "type": "message",
    "date": "2023-02-02T11:06:01",
    "date_unixtime": "1675316161",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀   Saffola FITTIFY Whey Protein Peanut Butter | Unsweetened | Extra Crunchy | High Protein | No Added Sugar | Diabetic Friendly | Keto Diet | 200g✅Deal Price : RS:120😱\n  🛒 \n\n@79\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HrtnGb"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HvL7z89tL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Jams, Honey &amp; Spreads \n                 Nut Butters \nP79\nD60\n \n❌Regular Price : ₹199"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Saffola FITTIFY Whey Protein Peanut Butter | Unsweetened | Extra Crunchy | High Protein | No Added Sugar | Diabetic Friendly | Keto Diet | 200g✅Deal Price : RS:120😱\n  🛒 \n\n@79\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HrtnGb"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HvL7z89tL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Jams, Honey &amp; Spreads \n                 Nut Butters \nP79\nD60\n \n❌Regular Price : ₹199"
     }
    ]
   },
   {
    "id": 7012,
    "type": "message",
    "date": "2023-02-02T11:12:11",
    "date_unixtime": "1675316531",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 679,
    "height": 679,
    "text": [
     "Offer 🚀🚀   AirCase Premium Canvas Backpack fits Upto 15.6 Inches Laptop, ✅Deal Price : RS:1499😱\n  🛒  \n\n",
     {
      "type": "mention",
      "text": "@1499"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RpxS8J"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81XQUxt6JvL._UX679_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \nP1499\nD57\n \n❌Regular Price : ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   AirCase Premium Canvas Backpack fits Upto 15.6 Inches Laptop, ✅Deal Price : RS:1499😱\n  🛒  \n\n"
     },
     {
      "type": "mention",
      "text": "@1499"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RpxS8J"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81XQUxt6JvL._UX679_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \nP1499\nD57\n \n❌Regular Price : ₹2999"
     }
    ]
   },
   {
    "id": 7013,
    "type": "message",
    "date": "2023-02-02T11:13:05",
    "date_unixtime": "1675316585",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 679,
    "height": 679,
    "text": [
     "Offer 🚀🚀   AirCase Premium Canvas Backpack fits Upto 15.6 Inches Laptop, Lightweight✅Deal Price : RS:1499😱\n  🛒  \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YjpgD8"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71yh1rHGbeL._UX679_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \n \n❌Regular Price :\n ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   AirCase Premium Canvas Backpack fits Upto 15.6 Inches Laptop, Lightweight✅Deal Price : RS:1499😱\n  🛒  \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YjpgD8"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71yh1rHGbeL._UX679_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \n \n❌Regular Price :\n ₹2999"
     }
    ]
   },
   {
    "id": 7014,
    "type": "message",
    "date": "2023-02-02T11:13:50",
    "date_unixtime": "1675316630",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 455,
    "height": 606,
    "text": [
     "Offer 🚀🚀  Klamotten Women's Nightdress (DS01G42_Green_Free Size)✅Deal Price : RS436:😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jhlkE4"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81VIKXJh-jL._UY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Sleep &amp; Lounge Wear \nP307<span class=\"a-price-decimal\">.</span>\nD62\n \n❌Regular Price :\n ₹799"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Klamotten Women's Nightdress (DS01G42_Green_Free Size)✅Deal Price : RS436:😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jhlkE4"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81VIKXJh-jL._UY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Sleep &amp; Lounge Wear \nP307<span class=\"a-price-decimal\">.</span>\nD62\n \n❌Regular Price :\n ₹799"
     }
    ]
   },
   {
    "id": 7015,
    "type": "message",
    "date": "2023-02-02T11:19:43",
    "date_unixtime": "1675316983",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 679,
    "height": 495,
    "text": [
     "Offer 🚀🚀   Amazon Brand - Symbol Men's Printed Boxers (Pack of 2)✅Deal Price : RS:299😱\n  🛒  \n\n@299\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YbH1Uw"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91jIlYYKYJL._UX679_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Innerwear \nP299\nD70\n \n❌Regular Price :\n ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Amazon Brand - Symbol Men's Printed Boxers (Pack of 2)✅Deal Price : RS:299😱\n  🛒  \n\n@299\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YbH1Uw"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91jIlYYKYJL._UX679_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Innerwear \nP299\nD70\n \n❌Regular Price :\n ₹599"
     }
    ]
   },
   {
    "id": 7016,
    "type": "message",
    "date": "2023-02-02T11:21:22",
    "date_unixtime": "1675317082",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 318,
    "text": [
     "Offer 🚀🚀 PHILIPS Audio TAE1136 Wired in Ear Earphones with Built in Mic, 10 mm Driver, Powerful bass and Clear Sound✅Deal Price : RS:219😱\n  🛒  \n\n@605\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X57z9m"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71rO8C1iChL._SX450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP219\nD69\n \n❌Regular Price :\n ₹699"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 PHILIPS Audio TAE1136 Wired in Ear Earphones with Built in Mic, 10 mm Driver, Powerful bass and Clear Sound✅Deal Price : RS:219😱\n  🛒  \n\n@605\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X57z9m"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71rO8C1iChL._SX450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP219\nD69\n \n❌Regular Price :\n ₹699"
     }
    ]
   },
   {
    "id": 7017,
    "type": "message",
    "date": "2023-02-02T11:23:11",
    "date_unixtime": "1675317191",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀 VGR V-071 Cordless Professional Hair Clipper Runtime: 120 Min Trimmer For Men With 3 Guide Combs ✅Deal Price : RS:1124😱\n  🛒 \n\n@459\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jnjJwe"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ZoTiXUy6L._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \nP459\nD23\n \n❌Regular Price :\n ₹1599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 VGR V-071 Cordless Professional Hair Clipper Runtime: 120 Min Trimmer For Men With 3 Guide Combs ✅Deal Price : RS:1124😱\n  🛒 \n\n@459\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jnjJwe"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ZoTiXUy6L._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \nP459\nD23\n \n❌Regular Price :\n ₹1599"
     }
    ]
   },
   {
    "id": 7018,
    "type": "message",
    "date": "2023-02-02T11:24:02",
    "date_unixtime": "1675317242",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 522,
    "height": 522,
    "text": [
     "Offer 🚀🚀  Happilo Premium Almond Chocolate Spread, Delicious and Low-Carb Chocolate Spread with Goodness of California Almonds,✅Deal Price : RS:177😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HN82bI"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71nOHp14A5L._SX522_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Jams, Honey &amp; Spreads \n                 Nut Butters \nDNaN\n \n❌Regular Price :\n ₹295"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Happilo Premium Almond Chocolate Spread, Delicious and Low-Carb Chocolate Spread with Goodness of California Almonds,✅Deal Price : RS:177😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HN82bI"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71nOHp14A5L._SX522_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Jams, Honey &amp; Spreads \n                 Nut Butters \nDNaN\n \n❌Regular Price :\n ₹295"
     }
    ]
   },
   {
    "id": 7019,
    "type": "message",
    "date": "2023-02-02T11:24:58",
    "date_unixtime": "1675317298",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀   ,Happilo Dry Fruit Celebrations Valentine's Day Gift Box Iris For Corporate Gifts✅Deal Price : RS:358😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WRaVfS"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71RtDrcrb0L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                 Hampers &amp; Gourmet Gifts \n  \n❌Regular Price :\n ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   ,Happilo Dry Fruit Celebrations Valentine's Day Gift Box Iris For Corporate Gifts✅Deal Price : RS:358😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WRaVfS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71RtDrcrb0L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                 Hampers &amp; Gourmet Gifts \n  \n❌Regular Price :\n ₹599"
     }
    ]
   },
   {
    "id": 7020,
    "type": "message",
    "date": "2023-02-02T11:25:49",
    "date_unixtime": "1675317349",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀   ,HP K300 Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting, 4 LED Indicators,  ✅Deal Price : RS:899😱\n  🛒 \n\n@899\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RFrnPz"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71fHypDvRML._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                PC Gaming Peripherals \nP899\nD50\n \n❌Regular Price :\n ₹1199"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   ,HP K300 Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting, 4 LED Indicators,  ✅Deal Price : RS:899😱\n  🛒 \n\n@899\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RFrnPz"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71fHypDvRML._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                PC Gaming Peripherals \nP899\nD50\n \n❌Regular Price :\n ₹1199"
     }
    ]
   },
   {
    "id": 7021,
    "type": "message",
    "date": "2023-02-02T11:26:28",
    "date_unixtime": "1675317388",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 679,
    "height": 453,
    "text": [
     "Offer 🚀🚀   ,  Kamiliant Harrier 2 Pc Set Spinner Trolley 56 + 68 CM Iron Grey (Small & Medim)  ✅Deal Price : RS:4899😱\n  🛒  \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Y9j5l2"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61P5ZkrkalL._UX679_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases &amp; Trolley Bags \nP3866<span class=\"a-price-decimal\">.</span>\nD77\n \n❌Regular Price :\n ₹9999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   ,  Kamiliant Harrier 2 Pc Set Spinner Trolley 56 + 68 CM Iron Grey (Small & Medim)  ✅Deal Price : RS:4899😱\n  🛒  \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Y9j5l2"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61P5ZkrkalL._UX679_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases &amp; Trolley Bags \nP3866<span class=\"a-price-decimal\">.</span>\nD77\n \n❌Regular Price :\n ₹9999"
     }
    ]
   },
   {
    "id": 7022,
    "type": "message",
    "date": "2023-02-02T11:27:16",
    "date_unixtime": "1675317436",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 679,
    "height": 679,
    "text": [
     "Offer 🚀🚀   ,Skybags Polypropylene 46 Cms Travel Bag(DFACN1BLU_Blue)   ✅Deal Price : RS:564😱\n  🛒\n\n@564\n",
     {
      "type": "link",
      "text": "https://amzn.to/3js7Cy7"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610iVBb11dL._UX679_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \nP564\nD70\n \n❌Regular Price :\n ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   ,Skybags Polypropylene 46 Cms Travel Bag(DFACN1BLU_Blue)   ✅Deal Price : RS:564😱\n  🛒\n\n@564\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3js7Cy7"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610iVBb11dL._UX679_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \nP564\nD70\n \n❌Regular Price :\n ₹999"
     }
    ]
   },
   {
    "id": 7023,
    "type": "message",
    "date": "2023-02-02T11:28:06",
    "date_unixtime": "1675317486",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀  Parachute Advansed Deep Nourish Body Lotion for Women & Men, Dry Skin, 400ml | ✅Deal Price : RS:139😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/40kyhxp"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51cwzZAh0qL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Bath &amp; Body \n                Body Washes \n \n❌Regular Price :\n ₹335"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Parachute Advansed Deep Nourish Body Lotion for Women & Men, Dry Skin, 400ml | ✅Deal Price : RS:139😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40kyhxp"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51cwzZAh0qL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Bath &amp; Body \n                Body Washes \n \n❌Regular Price :\n ₹335"
     }
    ]
   },
   {
    "id": 7024,
    "type": "message",
    "date": "2023-02-02T11:28:54",
    "date_unixtime": "1675317534",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 371,
    "height": 450,
    "text": [
     "Offer 🚀🚀 | Amazon Brand - Solimo Baby Water Resistant Dry Sheet, Small, 70cm x 50cm, Navy Blue✅Deal Price : RS:125😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jvQVBI"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91VfiSuJqxL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Baby"
     },
     "\n\n                Baby \n                Bedding, Furniture &amp; Room Décor \n                Bedding \n \n❌Regular Price :\n ₹299"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 | Amazon Brand - Solimo Baby Water Resistant Dry Sheet, Small, 70cm x 50cm, Navy Blue✅Deal Price : RS:125😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jvQVBI"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91VfiSuJqxL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Baby"
     },
     {
      "type": "plain",
      "text": "\n\n                Baby \n                Bedding, Furniture &amp; Room Décor \n                Bedding \n \n❌Regular Price :\n ₹299"
     }
    ]
   },
   {
    "id": 7025,
    "type": "message",
    "date": "2023-02-02T11:29:39",
    "date_unixtime": "1675317579",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀 | Karthika Hair Fall Shield Shampoo, White, Pleasant, 650 ml✅Deal Price : RS:294😱\n  🛒 \n\n@237\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JDamDo"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51C2nzhhH8L._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \nP237\nD50\n \n❌Regular Price :\n ₹475"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 | Karthika Hair Fall Shield Shampoo, White, Pleasant, 650 ml✅Deal Price : RS:294😱\n  🛒 \n\n@237\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JDamDo"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51C2nzhhH8L._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \nP237\nD50\n \n❌Regular Price :\n ₹475"
     }
    ]
   },
   {
    "id": 7026,
    "type": "message",
    "date": "2023-02-02T12:18:11",
    "date_unixtime": "1675320491",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 300,
    "height": 300,
    "text": [
     "Offer 🚀🚀 | AmazonBasics Hypoallergenic Vinyl-Free Waterproof Mattress Protector, ✅Deal Price : RS:559😱\n  🛒\n\n @522\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X2hyMh"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41CmtGhGXbL._SX300_SY300_QL70_FMwebp_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Home Furnishing \n                Bedding &amp; Linen \nP522\nD75\n \n❌Regular Price :\n ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 | AmazonBasics Hypoallergenic Vinyl-Free Waterproof Mattress Protector, ✅Deal Price : RS:559😱\n  🛒\n\n @522\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X2hyMh"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41CmtGhGXbL._SX300_SY300_QL70_FMwebp_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Home Furnishing \n                Bedding &amp; Linen \nP522\nD75\n \n❌Regular Price :\n ₹999"
     }
    ]
   },
   {
    "id": 7027,
    "type": "message",
    "date": "2023-02-02T12:19:05",
    "date_unixtime": "1675320545",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀 |Himalaya Quista Pro Advanced Whey Protein Powder - 2 kg (Chocolate)✅Deal Price : RS:3240😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XUNDqX"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61O+48tjTCL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Diet &amp; Nutrition \n                Sports Supplements \n \n❌Regular Price :\n ₹3999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 |Himalaya Quista Pro Advanced Whey Protein Powder - 2 kg (Chocolate)✅Deal Price : RS:3240😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XUNDqX"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61O+48tjTCL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Diet &amp; Nutrition \n                Sports Supplements \n \n❌Regular Price :\n ₹3999"
     }
    ]
   },
   {
    "id": 7028,
    "type": "message",
    "date": "2023-02-02T12:19:56",
    "date_unixtime": "1675320596",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 400,
    "height": 500,
    "text": [
     "Offer 🚀🚀 )Pampers Baby Dry Diapers, New Born, 11 Count✅Deal Price : RS:174😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/40nALLh"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41KVnWcep+L.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Baby"
     },
     "\n\n                Baby \n                Diapering &amp; Nappy Changing \n                Diapers \nDNaN\n \n❌Regular Price :\n ₹199"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 )Pampers Baby Dry Diapers, New Born, 11 Count✅Deal Price : RS:174😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40nALLh"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41KVnWcep+L.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Baby"
     },
     {
      "type": "plain",
      "text": "\n\n                Baby \n                Diapering &amp; Nappy Changing \n                Diapers \nDNaN\n \n❌Regular Price :\n ₹199"
     }
    ]
   },
   {
    "id": 7029,
    "type": "message",
    "date": "2023-02-02T12:21:24",
    "date_unixtime": "1675320684",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 522,
    "height": 522,
    "text": [
     "Offer 🚀🚀ishin Women Kurta Sets✅Deal Price : RS:2190😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@1899"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YlDzah"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Dp-FWXXxS._UX522_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nP1899\nD65\n \n❌Regular Price :\n ₹4999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀ishin Women Kurta Sets✅Deal Price : RS:2190😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1899"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YlDzah"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Dp-FWXXxS._UX522_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nP1899\nD65\n \n❌Regular Price :\n ₹4999"
     }
    ]
   },
   {
    "id": 7030,
    "type": "message",
    "date": "2023-02-02T12:22:09",
    "date_unixtime": "1675320729",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 455,
    "height": 606,
    "text": [
     "Offer 🚀🚀ishin Women's Art Silk Embroidered Beads and Stones✅Deal Price : RS:1979😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3l4TFGE"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51u+BE5-SIL._UY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nDNaN\n \n❌Regular Price :\n ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀ishin Women's Art Silk Embroidered Beads and Stones✅Deal Price : RS:1979😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3l4TFGE"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51u+BE5-SIL._UY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nDNaN\n \n❌Regular Price :\n ₹2999"
     }
    ]
   },
   {
    "id": 7031,
    "type": "message",
    "date": "2023-02-02T12:23:29",
    "date_unixtime": "1675320809",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 Hair & Care Dry Fruit Oil with Walnuts, Almonds & Vitamin E| Reduce Hairfall |Stronger & Silkier Hair ✅Deal Price : RS:295😱\n  🛒 \n\n @295\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XY9Dkr"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71g0oI6v-KL._SX425_PIbundle-2,TopRight,0,0_AA425SH20_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                 Hair Oils \nP295\nD50\n \n❌Regular Price :\n ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Hair & Care Dry Fruit Oil with Walnuts, Almonds & Vitamin E| Reduce Hairfall |Stronger & Silkier Hair ✅Deal Price : RS:295😱\n  🛒 \n\n @295\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XY9Dkr"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71g0oI6v-KL._SX425_PIbundle-2,TopRight,0,0_AA425SH20_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                 Hair Oils \nP295\nD50\n \n❌Regular Price :\n ₹599"
     }
    ]
   },
   {
    "id": 7032,
    "type": "message",
    "date": "2023-02-02T12:24:28",
    "date_unixtime": "1675320868",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀   Anchor by Panasonic Lugano 3L Geyser, Instant Water Heater with advance 4 level safety (Geyser) with Glassline Inner Tank✅Deal Price : RS:2199😱\n  🛒 \n\n ",
     {
      "type": "mention",
      "text": "@2199"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Y8arTI"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51DtrbxP1DL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Water Heaters &amp; Geysers \nP2199\nD58\n \n❌Regular Price :\n ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Anchor by Panasonic Lugano 3L Geyser, Instant Water Heater with advance 4 level safety (Geyser) with Glassline Inner Tank✅Deal Price : RS:2199😱\n  🛒 \n\n "
     },
     {
      "type": "mention",
      "text": "@2199"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Y8arTI"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51DtrbxP1DL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Water Heaters &amp; Geysers \nP2199\nD58\n \n❌Regular Price :\n ₹2999"
     }
    ]
   },
   {
    "id": 7033,
    "type": "message",
    "date": "2023-02-02T12:26:12",
    "date_unixtime": "1675320972",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 AmazonBasics 20-Inch Carry-on, Pink✅Deal Price : RS:1879😱\n  🛒 \n\n ",
     {
      "type": "mention",
      "text": "@1879"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/40o3DU0"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/715cR16zyML._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Luggage"
     },
     " &amp; Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases &amp; Trolley Bags \nP1879\nD79\n \n❌Regular Price :\n ₹5999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 AmazonBasics 20-Inch Carry-on, Pink✅Deal Price : RS:1879😱\n  🛒 \n\n "
     },
     {
      "type": "mention",
      "text": "@1879"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40o3DU0"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/715cR16zyML._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Luggage"
     },
     {
      "type": "plain",
      "text": " &amp; Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases &amp; Trolley Bags \nP1879\nD79\n \n❌Regular Price :\n ₹5999"
     }
    ]
   },
   {
    "id": 7034,
    "type": "message",
    "date": "2023-02-02T12:27:08",
    "date_unixtime": "1675321028",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀Morphy Richards OFR Room Heater, 09 Fin 2000 Watts Oil Filled Room Heater , ISI Approved (OFR 9 Grey)✅Deal Price : RS:6299😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@6299"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jmzxiZ"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51d3Lkfg-LL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Room Heaters \nP6299\nD55\n \n❌Regular Price :\n ₹9999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀Morphy Richards OFR Room Heater, 09 Fin 2000 Watts Oil Filled Room Heater , ISI Approved (OFR 9 Grey)✅Deal Price : RS:6299😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@6299"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jmzxiZ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51d3Lkfg-LL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Room Heaters \nP6299\nD55\n \n❌Regular Price :\n ₹9999"
     }
    ]
   },
   {
    "id": 7035,
    "type": "message",
    "date": "2023-02-02T12:28:00",
    "date_unixtime": "1675321080",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 DABUR Vatika Ayurvedic Shampoo, 640ml : Power of Dus Poshan for 10 Hair Problems✅Deal Price : RS:183😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HPvrsS"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Zem3JeK6L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \n \n❌Regular Price :\n ₹525"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 DABUR Vatika Ayurvedic Shampoo, 640ml : Power of Dus Poshan for 10 Hair Problems✅Deal Price : RS:183😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HPvrsS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Zem3JeK6L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \n \n❌Regular Price :\n ₹525"
     }
    ]
   },
   {
    "id": 7036,
    "type": "message",
    "date": "2023-02-02T12:28:46",
    "date_unixtime": "1675321126",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀ZEBRONICS Zeb Buds 20 in Ear 3.5mm Wired Stereo Earphones with Mic, 1.2 Metre Cable,✅Deal Price : RS:285😱\n  🛒 \n\n @285\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YjEk3h"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61IO+wjTuaL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP285\nD52\n \n❌Regular Price :\n ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀ZEBRONICS Zeb Buds 20 in Ear 3.5mm Wired Stereo Earphones with Mic, 1.2 Metre Cable,✅Deal Price : RS:285😱\n  🛒 \n\n @285\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YjEk3h"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61IO+wjTuaL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP285\nD52\n \n❌Regular Price :\n ₹599"
     }
    ]
   },
   {
    "id": 7037,
    "type": "message",
    "date": "2023-02-02T12:29:50",
    "date_unixtime": "1675321190",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 222,
    "text": [
     "Offer 🚀🚀 ,JUNIOR KID 20T Kids Cycle for Boys & Girls 7 to 10 Years (Blue)✅Deal Price : RS:3794😱\n  🛒 \n\n ",
     {
      "type": "mention",
      "text": "@3794"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JEfDuF"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61smJ6hPVcL._SX355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Sports, Fitness &amp; Outdoors \n                Cycling \n                Kids' Cycles &amp; Accessories \nP3794\nD60\n \n❌Regular Price :\n ₹4599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 ,JUNIOR KID 20T Kids Cycle for Boys & Girls 7 to 10 Years (Blue)✅Deal Price : RS:3794😱\n  🛒 \n\n "
     },
     {
      "type": "mention",
      "text": "@3794"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JEfDuF"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61smJ6hPVcL._SX355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Sports, Fitness &amp; Outdoors \n                Cycling \n                Kids' Cycles &amp; Accessories \nP3794\nD60\n \n❌Regular Price :\n ₹4599"
     }
    ]
   },
   {
    "id": 7038,
    "type": "message",
    "date": "2023-02-02T12:30:42",
    "date_unixtime": "1675321242",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 466,
    "height": 583,
    "text": [
     "Offer 🚀🚀  French Connection Analog Dial Women's Watch✅Deal Price : RS:1840😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@1840"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RsmY1W"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ckPHkDlrL._UX466_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     "\n\n                Watches \n                Women \n                 Wrist Watches \nP1840\nD73\n \n❌Regular Price :\n ₹3999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  French Connection Analog Dial Women's Watch✅Deal Price : RS:1840😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1840"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RsmY1W"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ckPHkDlrL._UX466_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     {
      "type": "plain",
      "text": "\n\n                Watches \n                Women \n                 Wrist Watches \nP1840\nD73\n \n❌Regular Price :\n ₹3999"
     }
    ]
   },
   {
    "id": 7039,
    "type": "message",
    "date": "2023-02-02T12:31:44",
    "date_unixtime": "1675321304",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 404,
    "height": 606,
    "text": [
     "Offer 🚀🚀 Peter England Men`s Slim Fit Sweatshirt (PJSTPSLFH88664_M_Medium Blue)✅Deal Price : RS:699😱\n  🛒 \n\n @699\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JB6G5i"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51al6oKG-KL._UY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Winter Wear \nP699\nD50\n \n❌Regular Price :\n ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Peter England Men`s Slim Fit Sweatshirt (PJSTPSLFH88664_M_Medium Blue)✅Deal Price : RS:699😱\n  🛒 \n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JB6G5i"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51al6oKG-KL._UY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Winter Wear \nP699\nD50\n \n❌Regular Price :\n ₹999"
     }
    ]
   },
   {
    "id": 7040,
    "type": "message",
    "date": "2023-02-02T12:32:28",
    "date_unixtime": "1675321348",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 Tide Ultra 5 Kg Semi-Auto Washing Machine and Hand Wash✅Deal Price : RS:560😱\n  🛒 \n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wKuw6Z"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61bV41BSy6L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Household Supplies \n                Laundry \n \n❌Regular Price :\n  ₹800"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Tide Ultra 5 Kg Semi-Auto Washing Machine and Hand Wash✅Deal Price : RS:560😱\n  🛒 \n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wKuw6Z"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61bV41BSy6L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Health &amp; Personal Care \n                Household Supplies \n                Laundry \n \n❌Regular Price :\n  ₹800"
     }
    ]
   },
   {
    "id": 7041,
    "type": "message",
    "date": "2023-02-02T12:33:10",
    "date_unixtime": "1675321390",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 569,
    "height": 569,
    "text": [
     "Offer 🚀🚀XElectron USB Type C Cable 1.2m (Red)✅Deal Price : RS:159😱\n  🛒 \n\n @159\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wOPiCw"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610j7q+pv0L._SX569_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Cables &amp; Accessories \nP159\nD68\n \n❌Regular Price :\n  ₹499"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀XElectron USB Type C Cable 1.2m (Red)✅Deal Price : RS:159😱\n  🛒 \n\n @159\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wOPiCw"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/610j7q+pv0L._SX569_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Cables &amp; Accessories \nP159\nD68\n \n❌Regular Price :\n  ₹499"
     }
    ]
   },
   {
    "id": 7042,
    "type": "message",
    "date": "2023-02-02T12:33:58",
    "date_unixtime": "1675321438",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀 Polycab Eleganz Purocoat Premium 1200 mm Anti Dust Anti Rust Anti fade Anti Microbial Ceiling Fan (Pearl Indigo Blue)✅Deal Price : RS:2519😱\n  🛒  \n\n ",
     {
      "type": "mention",
      "text": "@2519"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XOFfcl"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61I26Q9CG3L._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP2519\nD46\n \n❌Regular Price :\n  ₹3599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Polycab Eleganz Purocoat Premium 1200 mm Anti Dust Anti Rust Anti fade Anti Microbial Ceiling Fan (Pearl Indigo Blue)✅Deal Price : RS:2519😱\n  🛒  \n\n "
     },
     {
      "type": "mention",
      "text": "@2519"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XOFfcl"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61I26Q9CG3L._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP2519\nD46\n \n❌Regular Price :\n  ₹3599"
     }
    ]
   },
   {
    "id": 7043,
    "type": "message",
    "date": "2023-02-02T12:34:42",
    "date_unixtime": "1675321482",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 500,
    "height": 500,
    "text": [
     "Offer 🚀🚀  Lino Perros Womens Synthetic Leather Tote✅Deal Price : RS:699😱\n  🛒 \n\n @978\n",
     {
      "type": "link",
      "text": "https://amzn.to/3kWH34p"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HPHj3M2uL._UY500_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Handbags, Purses &amp; Clutches \n                Handbags \nP978\nD72\n \n❌Regular Price :\n  ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Lino Perros Womens Synthetic Leather Tote✅Deal Price : RS:699😱\n  🛒 \n\n @978\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3kWH34p"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HPHj3M2uL._UY500_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     {
      "type": "plain",
      "text": " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Handbags, Purses &amp; Clutches \n                Handbags \nP978\nD72\n \n❌Regular Price :\n  ₹1999"
     }
    ]
   },
   {
    "id": 7044,
    "type": "message",
    "date": "2023-02-02T12:35:28",
    "date_unixtime": "1675321528",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀  Cello Mixer Grinder - Ertiga 750 Pro, 750 W, Black✅Deal Price : RS:2239😱\n  🛒 \n\n ",
     {
      "type": "mention",
      "text": "@2239"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Hv3mFQ"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61zyeYwlZQL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP2239\nD55\n \n❌Regular Price :\n  ₹3999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  Cello Mixer Grinder - Ertiga 750 Pro, 750 W, Black✅Deal Price : RS:2239😱\n  🛒 \n\n "
     },
     {
      "type": "mention",
      "text": "@2239"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Hv3mFQ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61zyeYwlZQL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP2239\nD55\n \n❌Regular Price :\n  ₹3999"
     }
    ]
   },
   {
    "id": 7045,
    "type": "message",
    "date": "2023-02-02T12:36:15",
    "date_unixtime": "1675321575",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 445,
    "height": 450,
    "text": [
     "Offer 🚀🚀   ZEBRONICS ZEB-PGF110 120mm Blue Premium Chassis Fan, with High Speed 43.5CFM✅Deal Price : RS:349😱\n  🛒 \n\n @418\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XcoHdn"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71+U0fQTa-L._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\n                Computers &amp; Accessories \n                Components \n                Fans &amp; Cooling \nP418\nD58\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   ZEBRONICS ZEB-PGF110 120mm Blue Premium Chassis Fan, with High Speed 43.5CFM✅Deal Price : RS:349😱\n  🛒 \n\n @418\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XcoHdn"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71+U0fQTa-L._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Computers &amp; Accessories \n                Components \n                Fans &amp; Cooling \nP418\nD58\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7046,
    "type": "message",
    "date": "2023-02-02T12:36:59",
    "date_unixtime": "1675321619",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 344,
    "height": 550,
    "text": [
     "Offer 🚀🚀 Q&Q Analog Blue Dial Men's Watch-S342-212NY✅Deal Price : RS:519😱\n  🛒\n\n @519\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WWhVYW"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61RFkongEOL._UY550_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     "\n\n                Watches \n                Men \n                 Wrist Watches \nP519\nD62\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Q&Q Analog Blue Dial Men's Watch-S342-212NY✅Deal Price : RS:519😱\n  🛒\n\n @519\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WWhVYW"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61RFkongEOL._UY550_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     {
      "type": "plain",
      "text": "\n\n                Watches \n                Men \n                 Wrist Watches \nP519\nD62\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7047,
    "type": "message",
    "date": "2023-02-02T12:37:42",
    "date_unixtime": "1675321662",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀  VGR Professional Multipurpose Beard and Hair Trimmer, Model 18✅Deal Price : RS:940😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@1439"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Y3Fpgg"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/616nm-vH4cL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Health"
     },
     " &amp; Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \nP1439\nD52\n \n❌Regular Price :\n  ₹1599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  VGR Professional Multipurpose Beard and Hair Trimmer, Model 18✅Deal Price : RS:940😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1439"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Y3Fpgg"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/616nm-vH4cL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Health"
     },
     {
      "type": "plain",
      "text": " &amp; Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \nP1439\nD52\n \n❌Regular Price :\n  ₹1599"
     }
    ]
   },
   {
    "id": 7048,
    "type": "message",
    "date": "2023-02-02T12:38:29",
    "date_unixtime": "1675321709",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 384,
    "height": 500,
    "text": [
     "Offer 🚀🚀EYEBOGLER Regular Fit Men's Cotton T-Shirt✅Deal Price : RS:279😱\n  🛒\n\n @279\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wRN1q5"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41jdgZS+7IL.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP279\nD79\n \n❌Regular Price :\n  ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀EYEBOGLER Regular Fit Men's Cotton T-Shirt✅Deal Price : RS:279😱\n  🛒\n\n @279\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wRN1q5"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41jdgZS+7IL.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP279\nD79\n \n❌Regular Price :\n  ₹599"
     }
    ]
   },
   {
    "id": 7049,
    "type": "message",
    "date": "2023-02-02T12:40:14",
    "date_unixtime": "1675321814",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 455,
    "height": 606,
    "text": [
     "Offer 🚀🚀Vaamsi Women's Crepe Regular Kurta✅Deal Price : RS:189😱\n  🛒\n\n @199\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RxtSDq"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61YVH0rU-dL._UY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nP199\nD80\n \n❌Regular Price :\n  ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀Vaamsi Women's Crepe Regular Kurta✅Deal Price : RS:189😱\n  🛒\n\n @199\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RxtSDq"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61YVH0rU-dL._UY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Women \n                Ethnic Wear \nP199\nD80\n \n❌Regular Price :\n  ₹599"
     }
    ]
   },
   {
    "id": 7050,
    "type": "message",
    "date": "2023-02-02T12:40:59",
    "date_unixtime": "1675321859",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 413,
    "text": [
     "Offer 🚀🚀 LAFILLETTE Shockproof Anti-Slip Outdoor Professional Road Bike Bicycle Half Finger Cycling✅Deal Price : RS399:😱\n  🛒\n\n @399\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RmZyvb"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61rxGXLw2GL._SX450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Car"
     },
     " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Motorbike Accessories &amp; Parts \n                Protective Gear &amp; Clothing \nP399\nD60\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 LAFILLETTE Shockproof Anti-Slip Outdoor Professional Road Bike Bicycle Half Finger Cycling✅Deal Price : RS399:😱\n  🛒\n\n @399\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RmZyvb"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61rxGXLw2GL._SX450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Car"
     },
     {
      "type": "plain",
      "text": " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Motorbike Accessories &amp; Parts \n                Protective Gear &amp; Clothing \nP399\nD60\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7051,
    "type": "message",
    "date": "2023-02-02T12:43:16",
    "date_unixtime": "1675321996",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 300,
    "height": 300,
    "text": [
     "Offer 🚀🚀Himalaya Anti-Dandruff Shampoo | Soothes the Scalp & Nourishes Hair |✅Deal Price : RS:485😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/40lnoLO"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41-TGf7MkHL._SX300_SY300_QL70_FMwebp_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \n \n❌Regular Price :\n  ₹630"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀Himalaya Anti-Dandruff Shampoo | Soothes the Scalp & Nourishes Hair |✅Deal Price : RS:485😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40lnoLO"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41-TGf7MkHL._SX300_SY300_QL70_FMwebp_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                Shampoo &amp; Conditioner \n \n❌Regular Price :\n  ₹630"
     }
    ]
   },
   {
    "id": 7052,
    "type": "message",
    "date": "2023-02-02T12:46:01",
    "date_unixtime": "1675322161",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 342,
    "height": 444,
    "text": [
     "Offer 🚀🚀Amazon Brand - Symbol Men's Cotton Print Regular Fit Pyjamas PO2 Pajama Set✅Deal Price : RS:290😱\n  🛒\n\n @779\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JvFYuz"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91ld0EJTPqL._UX342_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Sleep &amp; Lounge Wear \nP779\nD61\n \n❌Regular Price :\n  ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀Amazon Brand - Symbol Men's Cotton Print Regular Fit Pyjamas PO2 Pajama Set✅Deal Price : RS:290😱\n  🛒\n\n @779\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JvFYuz"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91ld0EJTPqL._UX342_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                Sleep &amp; Lounge Wear \nP779\nD61\n \n❌Regular Price :\n  ₹599"
     }
    ]
   },
   {
    "id": 7053,
    "type": "message",
    "date": "2023-02-02T12:47:02",
    "date_unixtime": "1675322222",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 405,
    "height": 606,
    "text": [
     "Offer 🚀🚀 Deborah Milano Extra Lipstick, Flashy Orange, 1g✅Deal Price : RS:220😱\n  🛒 \n\n @219\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Hv4zwS"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61mycohzA6L._SY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#All"
     },
     "\n\n                Beauty \n                Make-up \n                Lips \nP219\nD77\n \n❌Regular Price :\n  ₹599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Deborah Milano Extra Lipstick, Flashy Orange, 1g✅Deal Price : RS:220😱\n  🛒 \n\n @219\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Hv4zwS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61mycohzA6L._SY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#All"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Make-up \n                Lips \nP219\nD77\n \n❌Regular Price :\n  ₹599"
     }
    ]
   },
   {
    "id": 7054,
    "type": "message",
    "date": "2023-02-02T12:48:02",
    "date_unixtime": "1675322282",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "Offer 🚀🚀 Divinext 45 In 1 Screwdrivers Set Opening Repair Tools Kit For all kind of use | 15.3 X 11.3 X 3.4 CM, Silver✅Deal Price : RS: 479😱\n  🛒 \n\n @479\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wPzEGS"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41OkIkIdfzS._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Tools"
     },
     " &amp; Home Improvement\n\n                Home Improvement \n                Power &amp; Hand Tools \n                Hand Tools \nP479\nD40\n \n❌Regular Price :\n  ₹799"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Divinext 45 In 1 Screwdrivers Set Opening Repair Tools Kit For all kind of use | 15.3 X 11.3 X 3.4 CM, Silver✅Deal Price : RS: 479😱\n  🛒 \n\n @479\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wPzEGS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41OkIkIdfzS._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Tools"
     },
     {
      "type": "plain",
      "text": " &amp; Home Improvement\n\n                Home Improvement \n                Power &amp; Hand Tools \n                Hand Tools \nP479\nD40\n \n❌Regular Price :\n  ₹799"
     }
    ]
   },
   {
    "id": 7055,
    "type": "message",
    "date": "2023-02-02T12:48:52",
    "date_unixtime": "1675322332",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 466,
    "height": 606,
    "text": [
     "Offer 🚀🚀 Amazon Brand - Arthur Harvey Men Polo Shirt✅Deal Price : RS: 280😱\n  🛒 \n\n @294\n",
     {
      "type": "link",
      "text": "https://amzn.to/40kHtSr"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71QDhb32yYL._UX466_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP294\nD77\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Amazon Brand - Arthur Harvey Men Polo Shirt✅Deal Price : RS: 280😱\n  🛒 \n\n @294\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40kHtSr"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71QDhb32yYL._UX466_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                T-Shirts &amp; Polos \nP294\nD77\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7056,
    "type": "message",
    "date": "2023-02-02T12:49:40",
    "date_unixtime": "1675322380",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "Offer 🚀🚀   Surya Oretta 1200mm Decorative Ceiling Fan (Mettalic White-UV), standard (SU-OR-Chrome)✅Deal Price : RS:3370 😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@3330"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DBr6au"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51DoY2NGLnL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP3330\nD14\n \n❌Regular Price :\n  ₹5000"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀   Surya Oretta 1200mm Decorative Ceiling Fan (Mettalic White-UV), standard (SU-OR-Chrome)✅Deal Price : RS:3370 😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@3330"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DBr6au"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51DoY2NGLnL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP3330\nD14\n \n❌Regular Price :\n  ₹5000"
     }
    ]
   },
   {
    "id": 7057,
    "type": "message",
    "date": "2023-02-02T12:50:25",
    "date_unixtime": "1675322425",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀 Park Avenue Cool Blue Soap Pack of 125*4 (500gm)  ✅Deal Price : RS:174 😱\n  🛒\n\n @192\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YbEidQ"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71JFWTI7a0L._SX425_PIbundle-4,TopRight,0,0_AA425SH20_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Bath &amp; Body \n                Cleansers \nP192\nD31\n \n❌Regular Price :\n  ₹200"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀 Park Avenue Cool Blue Soap Pack of 125*4 (500gm)  ✅Deal Price : RS:174 😱\n  🛒\n\n @192\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YbEidQ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71JFWTI7a0L._SX425_PIbundle-4,TopRight,0,0_AA425SH20_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Bath &amp; Body \n                Cleansers \nP192\nD31\n \n❌Regular Price :\n  ₹200"
     }
    ]
   },
   {
    "id": 7058,
    "type": "message",
    "date": "2023-02-02T12:51:19",
    "date_unixtime": "1675322479",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀  \n  🛒\nOffer 🚀🚀 Orion Chocopie Premium Gift pack (20 pies)|Chocolate gift pack ✅Deal Price : RS: 207😱\n  🛒\n\n @240\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XUkE6o"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71g8MhuzocL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Snacks &amp; Sweets \n                Chocolate \nP240\nD31\n \n❌Regular Price :\n  ₹359"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  \n  🛒\nOffer 🚀🚀 Orion Chocopie Premium Gift pack (20 pies)|Chocolate gift pack ✅Deal Price : RS: 207😱\n  🛒\n\n @240\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XUkE6o"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71g8MhuzocL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Snacks &amp; Sweets \n                Chocolate \nP240\nD31\n \n❌Regular Price :\n  ₹359"
     }
    ]
   },
   {
    "id": 7059,
    "type": "message",
    "date": "2023-02-02T12:52:19",
    "date_unixtime": "1675322539",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "Offer 🚀🚀  \n  🛒\nOffer 🚀🚀 Zebronics ZEB-SP116, Smart Wi-Fi Plug Compatible with Google Assistant & Alexa, ✅Deal Price : RS:799 😱\n  🛒\n\n @799\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JDk2xI"
     },
     "\n \n ",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71dbxg1QoKL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\nP799\nD73\n \n❌Regular Price :\n  ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Offer 🚀🚀  \n  🛒\nOffer 🚀🚀 Zebronics ZEB-SP116, Smart Wi-Fi Plug Compatible with Google Assistant & Alexa, ✅Deal Price : RS:799 😱\n  🛒\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JDk2xI"
     },
     {
      "type": "plain",
      "text": "\n \n "
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71dbxg1QoKL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\nP799\nD73\n \n❌Regular Price :\n  ₹1999"
     }
    ]
   },
   {
    "id": 7060,
    "type": "message",
    "date": "2023-02-02T12:53:08",
    "date_unixtime": "1675322588",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Gizga Essentials Type-C 4 Port Adapter Hub, Fast Data Transfer, USB✅Deal Price : RS: 359😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wOJOYc"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41B1DYowt-L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                 USB Hubs \n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Gizga Essentials Type-C 4 Port Adapter Hub, Fast Data Transfer, USB✅Deal Price : RS: 359😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wOJOYc"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41B1DYowt-L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Computers"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                 USB Hubs \n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7061,
    "type": "message",
    "date": "2023-02-02T13:01:02",
    "date_unixtime": "1675323062",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Digway 8+1 Round Strip Extension Cord; 6 A 8 Universal Multi Plug Point✅Deal Price : RS: 199😱\n  🛒\n\n @219\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DCKovZ"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71SqGA++UFL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Tools"
     },
     " &amp; Home Improvement\n\n                Electronics \n                Power Accessories \n                 Extension Cords \nP219\nD45\n \n❌Regular Price :\n  ₹399"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Digway 8+1 Round Strip Extension Cord; 6 A 8 Universal Multi Plug Point✅Deal Price : RS: 199😱\n  🛒\n\n @219\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DCKovZ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71SqGA++UFL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Tools"
     },
     {
      "type": "plain",
      "text": " &amp; Home Improvement\n\n                Electronics \n                Power Accessories \n                 Extension Cords \nP219\nD45\n \n❌Regular Price :\n  ₹399"
     }
    ]
   },
   {
    "id": 7062,
    "type": "message",
    "date": "2023-02-02T13:02:02",
    "date_unixtime": "1675323122",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Origine Naturespired Face Pack For Tan Removal | De-tan Pack For Face | Enriched with Multani Mitti,✅Deal Price : RS:249 😱\n  🛒\n\n @249\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HQ0SU5"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71QJS7MetwL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Skin Care \n                Face \nP249\nD55\n \n❌Regular Price :\n  ₹549"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Origine Naturespired Face Pack For Tan Removal | De-tan Pack For Face | Enriched with Multani Mitti,✅Deal Price : RS:249 😱\n  🛒\n\n @249\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HQ0SU5"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71QJS7MetwL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Skin Care \n                Face \nP249\nD55\n \n❌Regular Price :\n  ₹549"
     }
    ]
   },
   {
    "id": 7063,
    "type": "message",
    "date": "2023-02-02T13:08:41",
    "date_unixtime": "1675323521",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "🛒\nOffer 🚀🚀 Kingsway Universal Fit Center Console Armrest Storage Box Organizer for Renault Scala, Model Year : 2011-2018, Beige✅Deal Price : RS:341😱\n  🛒\n\n @179\n",
     {
      "type": "link",
      "text": "https://amzn.to/3YeL6aL"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51KJnliO-xL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Car"
     },
     " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Car Parts \n                Interior Fittings \nP1239\nD35\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀 Kingsway Universal Fit Center Console Armrest Storage Box Organizer for Renault Scala, Model Year : 2011-2018, Beige✅Deal Price : RS:341😱\n  🛒\n\n @179\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YeL6aL"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51KJnliO-xL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Car"
     },
     {
      "type": "plain",
      "text": " &amp; Motorbike\n\n                Car &amp; Motorbike \n                Car Parts \n                Interior Fittings \nP1239\nD35\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7064,
    "type": "message",
    "date": "2023-02-02T13:10:46",
    "date_unixtime": "1675323646",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 500,
    "height": 500,
    "text": [
     "🛒\nOffer 🚀🚀Lino Perros Womens Synthetic Leather Tote✅Deal Price : RS:699😱\n  🛒\n\n @978\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DAPsB3"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HPHj3M2uL._UY500_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Handbags, Purses &amp; Clutches \n                Handbags \nP978\nD72\n \n❌Regular Price :\n  ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Lino Perros Womens Synthetic Leather Tote✅Deal Price : RS:699😱\n  🛒\n\n @978\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DAPsB3"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71HPHj3M2uL._UY500_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     {
      "type": "plain",
      "text": " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Handbags, Purses &amp; Clutches \n                Handbags \nP978\nD72\n \n❌Regular Price :\n  ₹1999"
     }
    ]
   },
   {
    "id": 7065,
    "type": "message",
    "date": "2023-02-02T13:11:49",
    "date_unixtime": "1675323709",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 395,
    "height": 212,
    "text": [
     "🛒\nOffer 🚀🚀US Polo Association Mens Aaron 2.0 Drivers✅Deal Price : RS:1350😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@1350"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/40oKfG6"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61O38I-m9vL._UX395_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Shoes \n                Men's Shoes \nP1350\nD58\n \n❌Regular Price :\n  ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀US Polo Association Mens Aaron 2.0 Drivers✅Deal Price : RS:1350😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1350"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40oKfG6"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61O38I-m9vL._UX395_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Shoes"
     },
     {
      "type": "plain",
      "text": " &amp; Handbags\n\n                Shoes &amp; Handbags \n                Shoes \n                Men's Shoes \nP1350\nD58\n \n❌Regular Price :\n  ₹2999"
     }
    ]
   },
   {
    "id": 7066,
    "type": "message",
    "date": "2023-02-02T13:12:54",
    "date_unixtime": "1675323774",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "🛒\nOffer 🚀🚀 Tygot Gorilla Tripod/Mini (13 Inch) Tripod for Mobile Phone✅Deal Price : RS:345😱\n  🛒\n\n @345\n",
     {
      "type": "link",
      "text": "https://amzn.to/3HPA9XA"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61h005AFsZL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Cameras &amp; Photography \n                Accessories \nP345\nD83\n \n❌Regular Price :\n  ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀 Tygot Gorilla Tripod/Mini (13 Inch) Tripod for Mobile Phone✅Deal Price : RS:345😱\n  🛒\n\n @345\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3HPA9XA"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61h005AFsZL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Cameras &amp; Photography \n                Accessories \nP345\nD83\n \n❌Regular Price :\n  ₹999"
     }
    ]
   },
   {
    "id": 7067,
    "type": "message",
    "date": "2023-02-02T13:14:36",
    "date_unixtime": "1675323876",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 321,
    "height": 550,
    "text": [
     "🛒\nOffer 🚀🚀Fastrack Sunburn Analog Multicolor Dial Women's Watch-6212SM01 / 6212SM01✅Deal Price : RS:999😱\n  🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XT2EcC"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71oOu3TQvEL._UY550_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     "\n\n                Watches \n                Women \n                 Wrist Watches \nDNaN\n \n❌Regular Price :\n    ₹1599"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Fastrack Sunburn Analog Multicolor Dial Women's Watch-6212SM01 / 6212SM01✅Deal Price : RS:999😱\n  🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XT2EcC"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71oOu3TQvEL._UY550_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Watches"
     },
     {
      "type": "plain",
      "text": "\n\n                Watches \n                Women \n                 Wrist Watches \nDNaN\n \n❌Regular Price :\n    ₹1599"
     }
    ]
   },
   {
    "id": 7068,
    "type": "message",
    "date": "2023-02-02T13:15:43",
    "date_unixtime": "1675323943",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀realme Buds Air 3 Neo True Wireless in-Ear Earbuds with Mic, 30 hrs Playtime with Fast Charging✅Deal Price : RS:1999😱\n  🛒\n\n ",
     {
      "type": "mention",
      "text": "@1999"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RpMk0t"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61wnFKjF1EL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1999\nD43\n \n❌Regular Price :\n    ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀realme Buds Air 3 Neo True Wireless in-Ear Earbuds with Mic, 30 hrs Playtime with Fast Charging✅Deal Price : RS:1999😱\n  🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RpMk0t"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61wnFKjF1EL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Headphones, Earbuds &amp; Accessories \n                Headphones \nP1999\nD43\n \n❌Regular Price :\n    ₹2999"
     }
    ]
   },
   {
    "id": 7069,
    "type": "message",
    "date": "2023-02-02T13:16:46",
    "date_unixtime": "1675324006",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Cambridge Tea Party 8 Spices Masala Chai Patti Tea Powder CTC, 100g✅Deal Price : RS:95😱\n  🛒\n\n @95\n",
     {
      "type": "link",
      "text": "https://amzn.to/3wMa3P2"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71ZUPERYzKL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Cooking &amp; Baking Supplies \n                Spices &amp; Masalas \nP95\nD68\n \n❌Regular Price :\n    ₹300"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Cambridge Tea Party 8 Spices Masala Chai Patti Tea Powder CTC, 100g✅Deal Price : RS:95😱\n  🛒\n\n @95\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3wMa3P2"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71ZUPERYzKL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Cooking &amp; Baking Supplies \n                Spices &amp; Masalas \nP95\nD68\n \n❌Regular Price :\n    ₹300"
     }
    ]
   },
   {
    "id": 7070,
    "type": "message",
    "date": "2023-02-02T13:17:47",
    "date_unixtime": "1675324067",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "🛒\nOffer 🚀🚀pTron Solero M241 2.4A Micro USB Data & Charging Cable, Made in India,✅Deal Price : RS:89\n🛒\n\n @89\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DAQAEN"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51JVvqm1mAL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Cables &amp; Accessories \nP89\nD89\n \n❌Regular Price :\n    ₹800"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀pTron Solero M241 2.4A Micro USB Data & Charging Cable, Made in India,✅Deal Price : RS:89\n🛒\n\n @89\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DAQAEN"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51JVvqm1mAL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Computers &amp; Accessories \n                Accessories &amp; Peripherals \n                Cables &amp; Accessories \nP89\nD89\n \n❌Regular Price :\n    ₹800"
     }
    ]
   },
   {
    "id": 7071,
    "type": "message",
    "date": "2023-02-02T13:18:53",
    "date_unixtime": "1675324133",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Parachute Advansed Gold Coconut Hair Oil, Pure Coconut Oil,✅Deal Price : RS:161\n🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jn3NtV"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51oSwlCAkLL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Hair Care \n                 Hair Oils \n \n❌Regular Price :\n    ₹235"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Parachute Advansed Gold Coconut Hair Oil, Pure Coconut Oil,✅Deal Price : RS:161\n🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jn3NtV"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51oSwlCAkLL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Hair Care \n                 Hair Oils \n \n❌Regular Price :\n    ₹235"
     }
    ]
   },
   {
    "id": 7072,
    "type": "message",
    "date": "2023-02-02T13:19:46",
    "date_unixtime": "1675324186",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀,Jaipan Magic Bullet (400W) 21Pcs set✅Deal Price : RS:1832\n🛒\n\n ",
     {
      "type": "mention",
      "text": "@1806"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JzfMiD"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81-G-PO3zIL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP1806\nD64\n \n❌Regular Price :\n    ₹2999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀,Jaipan Magic Bullet (400W) 21Pcs set✅Deal Price : RS:1832\n🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1806"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JzfMiD"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81-G-PO3zIL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP1806\nD64\n \n❌Regular Price :\n    ₹2999"
     }
    ]
   },
   {
    "id": 7073,
    "type": "message",
    "date": "2023-02-02T13:20:37",
    "date_unixtime": "1675324237",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 335,
    "height": 606,
    "text": [
     "🛒\nOffer 🚀🚀Tosaa Hot & Cold Double Wall Vacuum Insulated Flask Water Bottle Stainless Steel 500 ML, Matt✅Deal Price : RS:361\n🛒\n\n @353\n",
     {
      "type": "link",
      "text": "https://amzn.to/3RnqgDT"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Bi4kziwVL._SY606_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP353\nD50\n \n❌Regular Price :\n    ₹699"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Tosaa Hot & Cold Double Wall Vacuum Insulated Flask Water Bottle Stainless Steel 500 ML, Matt✅Deal Price : RS:361\n🛒\n\n @353\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3RnqgDT"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Bi4kziwVL._SY606_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP353\nD50\n \n❌Regular Price :\n    ₹699"
     }
    ]
   },
   {
    "id": 7074,
    "type": "message",
    "date": "2023-02-02T13:21:27",
    "date_unixtime": "1675324287",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀 Parachute Advansed Coconut Water Hydrating Gel for Skin & Hair, 200ml | Niacinamide ✅Deal Price : RS:179\n🛒\n\n @164\n",
     {
      "type": "link",
      "text": "https://amzn.to/40h8shT"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81GO+j4DG6L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Skin Care \n                Face \nP164\nD45\n \n❌Regular Price :\n    ₹299"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀 Parachute Advansed Coconut Water Hydrating Gel for Skin & Hair, 200ml | Niacinamide ✅Deal Price : RS:179\n🛒\n\n @164\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40h8shT"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81GO+j4DG6L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Skin Care \n                Face \nP164\nD45\n \n❌Regular Price :\n    ₹299"
     }
    ]
   },
   {
    "id": 7075,
    "type": "message",
    "date": "2023-02-02T13:22:14",
    "date_unixtime": "1675324334",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀CP Plus Wired 8 Channel HD DVR, with 2.4MP Dome Cameras (6 nos) | 2.4 MP 2Pcs, Outdoor Bullet Camera✅Deal Price : RS:18999\n🛒\n\n ",
     {
      "type": "mention",
      "text": "@18999"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WVS6Ij"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61KnuCdQ+7L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     "\n\n                Electronics \n                Cameras &amp; Photography \n                Security Cameras \nP18999\nD53\n \n❌Regular Price :\n    ₹25999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀CP Plus Wired 8 Channel HD DVR, with 2.4MP Dome Cameras (6 nos) | 2.4 MP 2Pcs, Outdoor Bullet Camera✅Deal Price : RS:18999\n🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@18999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WVS6Ij"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61KnuCdQ+7L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Electronics"
     },
     {
      "type": "plain",
      "text": "\n\n                Electronics \n                Cameras &amp; Photography \n                Security Cameras \nP18999\nD53\n \n❌Regular Price :\n    ₹25999"
     }
    ]
   },
   {
    "id": 7076,
    "type": "message",
    "date": "2023-02-02T13:23:15",
    "date_unixtime": "1675324395",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀Lotus Makeup Proedit Silk Touch Perfecting Powder, Espresso, 10 g✅Deal Price : RS:335\n🛒\n\n @209\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DAxmPL"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71jCKAtyf5L._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     "\n\n                Beauty \n                Make-up \n                Face \nP354\nD49\n \n❌Regular Price :\n    ₹ 695"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Lotus Makeup Proedit Silk Touch Perfecting Powder, Espresso, 10 g✅Deal Price : RS:335\n🛒\n\n @209\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DAxmPL"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71jCKAtyf5L._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Beauty"
     },
     {
      "type": "plain",
      "text": "\n\n                Beauty \n                Make-up \n                Face \nP354\nD49\n \n❌Regular Price :\n    ₹ 695"
     }
    ]
   },
   {
    "id": 7077,
    "type": "message",
    "date": "2023-02-02T13:23:59",
    "date_unixtime": "1675324439",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 425,
    "height": 425,
    "text": [
     "🛒\nOffer 🚀🚀 Jaipan Magic Bullet (400W) 21Pcs set✅Deal Price : RS:1832\n🛒\n\n ",
     {
      "type": "mention",
      "text": "@1806"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Rs5hzN"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81-G-PO3zIL._SX425_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP1806\nD64\n \n❌Regular Price :\n    ₹3999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀 Jaipan Magic Bullet (400W) 21Pcs set✅Deal Price : RS:1832\n🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@1806"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Rs5hzN"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81-G-PO3zIL._SX425_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Home Appliances \n                Small Kitchen Appliances \nP1806\nD64\n \n❌Regular Price :\n    ₹3999"
     }
    ]
   },
   {
    "id": 7078,
    "type": "message",
    "date": "2023-02-02T13:25:02",
    "date_unixtime": "1675324502",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 355,
    "text": [
     "🛒\nOffer 🚀🚀Cello Magna Storage Containers for Kitchen 10 Pc (500 x 2, 750 x 2, 1000 x 2, 1700 x 2, 2200 x 2) ✅Deal Price : RS:453\n🛒\n\n @441\n",
     {
      "type": "link",
      "text": "https://amzn.to/3JzTeyw"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/819PFmAOiVL._SY355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP441\nD51\n \n❌Regular Price :\n    ₹799"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Cello Magna Storage Containers for Kitchen 10 Pc (500 x 2, 750 x 2, 1000 x 2, 1700 x 2, 2200 x 2) ✅Deal Price : RS:453\n🛒\n\n @441\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3JzTeyw"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/819PFmAOiVL._SY355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP441\nD51\n \n❌Regular Price :\n    ₹799"
     }
    ]
   },
   {
    "id": 7079,
    "type": "message",
    "date": "2023-02-02T13:25:52",
    "date_unixtime": "1675324552",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 522,
    "height": 522,
    "text": [
     "🛒\nOffer 🚀🚀Dukes Waffy Chocolate flavoured rolls (300g) ✅Deal Price : RS:149\n🛒\n\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3l1nic5"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61hi61YJzpS._SX522_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Snacks &amp; Sweets \n                Snack Foods \n \n❌Regular Price :\n    ₹299"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Dukes Waffy Chocolate flavoured rolls (300g) ✅Deal Price : RS:149\n🛒\n\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3l1nic5"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61hi61YJzpS._SX522_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Grocery"
     },
     {
      "type": "plain",
      "text": " &amp; Gourmet Foods\n\n                Grocery &amp; Gourmet Foods \n                Snacks &amp; Sweets \n                Snack Foods \n \n❌Regular Price :\n    ₹299"
     }
    ]
   },
   {
    "id": 7080,
    "type": "message",
    "date": "2023-02-02T13:26:52",
    "date_unixtime": "1675324612",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 355,
    "height": 237,
    "text": [
     "🛒\nOffer 🚀🚀Wonder Plastic Prime Magna Fridge Bottle Set, 24 Pc Bottle, 1000 ml, Blue Color, Made in India ✅Deal Price : RS:739\n🛒\n\n ",
     {
      "type": "mention",
      "text": "@2113"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3DzAPhq"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71cwUOMV9NL._SX355_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP2113\nD45\n \n❌Regular Price :\n    ₹1999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀Wonder Plastic Prime Magna Fridge Bottle Set, 24 Pc Bottle, 1000 ml, Blue Color, Made in India ✅Deal Price : RS:739\n🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@2113"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3DzAPhq"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71cwUOMV9NL._SX355_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Kitchen &amp; Dining \n                Kitchen Storage &amp; Containers \nP2113\nD45\n \n❌Regular Price :\n    ₹1999"
     }
    ]
   },
   {
    "id": 7081,
    "type": "message",
    "date": "2023-02-02T13:27:56",
    "date_unixtime": "1675324676",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 466,
    "height": 606,
    "text": [
     "🛒\nOffer 🚀🚀  Amazon Brand - House & Shields Men's Hybrid Shorts ✅Deal Price : RS:217\n🛒\n\n @214\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WR3XHO"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61q5PauUTYL._UX466_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                 Shorts \nP214\nD83\n \n❌Regular Price :\n    ₹999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀  Amazon Brand - House & Shields Men's Hybrid Shorts ✅Deal Price : RS:217\n🛒\n\n @214\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WR3XHO"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61q5PauUTYL._UX466_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Clothing"
     },
     {
      "type": "plain",
      "text": " &amp; Accessories\n\n                Clothing &amp; Accessories \n                Men \n                 Shorts \nP214\nD83\n \n❌Regular Price :\n    ₹999"
     }
    ]
   },
   {
    "id": 7082,
    "type": "message",
    "date": "2023-02-02T13:29:20",
    "date_unixtime": "1675324760",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 450,
    "height": 450,
    "text": [
     "🛒\nOffer 🚀🚀  Polycab Purocoat Premium 1200 MM Ceiling Fan (Aspire Lavender) ✅Deal Price : RS:2202\n🛒\n\n ",
     {
      "type": "mention",
      "text": "@2180"
     },
     "\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X2pGfL"
     },
     "\n",
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41pPKyCwwiL._SY450_.jpg"
     },
     " \n\n\n",
     {
      "type": "hashtag",
      "text": "#Home"
     },
     " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP2180\nD55\n \n❌Regular Price :\n    ₹3999"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🛒\nOffer 🚀🚀  Polycab Purocoat Premium 1200 MM Ceiling Fan (Aspire Lavender) ✅Deal Price : RS:2202\n🛒\n\n "
     },
     {
      "type": "mention",
      "text": "@2180"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X2pGfL"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41pPKyCwwiL._SY450_.jpg"
     },
     {
      "type": "plain",
      "text": " \n\n\n"
     },
     {
      "type": "hashtag",
      "text": "#Home"
     },
     {
      "type": "plain",
      "text": " &amp; Kitchen\n\n                Home &amp; Kitchen \n                Heating, Cooling &amp; Air Quality \n                Fans \nP2180\nD55\n \n❌Regular Price :\n    ₹3999"
     }
    ]
   }
//     {
//         "id": 176959,
//         "type": "message",
//         "date": "2022-10-01T11:57:14",
//         "date_unixtime": "1664605634",
//         "from": BSD",
//         "from_id": "user1175672156",
//         "photo": "photos/photo_69730@01-10-2022_11-57-14.jpg",
//         "width": 1280,
//         "height": 392,
//         "text": [
//          "Barbie Kids' Night Dresses And Nighties \n@ Rs.249\n",
//          {
//           "type": "link",
//           "text": "https://amzn.to/3rluYFS"
//          }
//         ],
//         "text_entities": [
//          {
//           "type": "plain",
//           "text": "Barbie Kids' Night Dresses And Nighties \n@ Rs.249\n"
//          },
//          {
//           "type": "link",
//           "text": "https://amzn.to/3rluYFS"
//          }
//         ]
//        },
//   {
//    "id": 176766,
//    "type": "message",
//    "date": "2022-10-01T00:00:09",
//    "date_unixtime": "1664562609",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "Offer Live At 12Am at 1893\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3y4WCLb"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "Offer Live At 12Am at 1893\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3y4WCLb"
//     }
//    ]
//   },
//   {
//    "id": 176767,
//    "type": "message",
//    "date": "2022-10-01T00:01:13",
//    "date_unixtime": "1664562673",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "Cello Opalware Dazzle Scarlet Bliss Dinner Set, 18Pcs, White @1028\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rluYFS"
//     },
//     " \nJaquline USA Aqua Energy Clay Face Wash 100ml @97\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3RG3CoV"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "Cello Opalware Dazzle Scarlet Bliss Dinner Set, 18Pcs, White @1028\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rluYFS"
//     },
//     {
//      "type": "plain",
//      "text": " \nJaquline USA Aqua Energy Clay Face Wash 100ml @97\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3RG3CoV"
//     }
//    ]
//   },
//   {
//    "id": 176768,
//    "type": "message",
//    "date": "2022-10-01T00:02:31",
//    "date_unixtime": "1664562751",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "Apply Coupon:Clovia Womens Polyester Sports Short Sleeve T-Shirt Dress @ 148\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss2M05"
//     },
//     " \nAmazon Brand - Presto! Vegetable and Fruit Wash - 1L @191\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rgWOTT"
//     },
//     " \nLifelong Yoga mat for Women and Men EVA Material 4mm Black Anti Slip for Gym\nWorkout\n@199\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rDE9St"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "Apply Coupon:Clovia Womens Polyester Sports Short Sleeve T-Shirt Dress @ 148\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss2M05"
//     },
//     {
//      "type": "plain",
//      "text": " \nAmazon Brand - Presto! Vegetable and Fruit Wash - 1L @191\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rgWOTT"
//     },
//     {
//      "type": "plain",
//      "text": " \nLifelong Yoga mat for Women and Men EVA Material 4mm Black Anti Slip for Gym\nWorkout\n@199\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3rDE9St"
//     }
//    ]
//   },
//   {
//    "id": 176769,
//    "type": "message",
//    "date": "2022-10-01T00:03:24",
//    "date_unixtime": "1664562804",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "HE Innovator Perfume Body Spray, 150 Ml Pack Of 2, 150 ml\n@191\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss3lqJ"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "HE Innovator Perfume Body Spray, 150 Ml Pack Of 2, 150 ml\n@191\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss3lqJ"
//     }
//    ]
//   },
//   {
//    "id": 176770,
//    "type": "message",
//    "date": "2022-10-01T00:03:28",
//    "date_unixtime": "1664562808",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "HE Innovator Perfume Body Spray, 150 Ml Pack Of 2, 150 ml\n@191\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss3lqJ"
//     },
//     " \nAmazon Brand - Solimo Pineapple Face Wash with Chia Seed, 150ml (Pack of 2)\n@139\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3y4XbVj"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "HE Innovator Perfume Body Spray, 150 Ml Pack Of 2, 150 ml\n@191\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Ss3lqJ"
//     },
//     {
//      "type": "plain",
//      "text": " \nAmazon Brand - Solimo Pineapple Face Wash with Chia Seed, 150ml (Pack of 2)\n@139\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3y4XbVj"
//     }
//    ]
//   },
//   {
//    "id": 176771,
//    "type": "message",
//    "date": "2022-10-01T00:03:39",
//    "date_unixtime": "1664562819",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "text": [
//     "Gym Gloves at 49\n",
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Sk024N"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "Gym Gloves at 49\n"
//     },
//     {
//      "type": "link",
//      "text": "https://amzn.to/3Sk024N"
//     }
//    ]
//   },
//     {
//    "id": 176959,
//    "type": "message",
//    "date": "2022-10-01T11:57:14",
//    "date_unixtime": "1664605634",
//    "from": BSD",
//    "from_id": "user1175672156",
//    "photo": "photos/photo_69730@01-10-2022_11-57-14.jpg",
//    "width": 1280,
//    "height": 392,
//    "text": [
//     "Barbie Kids' Night Dresses And Nighties \n@ Rs.249\n",
//     {
//      "type": "link",
//      "text": "https://fkrtt.in/OP/81ul8pj78jn"
//     }
//    ],
//    "text_entities": [
//     {
//      "type": "plain",
//      "text": "Barbie Kids' Night Dresses And Nighties \n@ Rs.249\n"
//     },
//     {
//      "type": "link",
//      "text": "https://fkrtt.in/OP/81ul8pj78jn"
//     }
//    ]
//   },
//     {
//         "id": 176766,
//         "type": "message",
//         "date": "2022-10-01T00:00:09",
//         "date_unixtime": "1664562609",
//         "from": BSD",
//         "from_id": "user1175672156",
//         "text": [
//          "Offer Live At 12Am at 1893\n",
//          {
//           "type": "link",
//           "text": "https://amzn.to/3y4WCLb"
//          }
//         ],
//         "text_entities": [
//          {
//           "type": "plain",
//           "text": "Offer Live At 12Am at 1893\n"
//          },
//          {
//           "type": "link",
//           "text": "https://amzn.to/3y4WCLb"
//          }
//         ]
//        },
//        {
//         "id": 176767,
//         "type": "message",
//         "date": "2022-10-01T00:01:13",
//         "date_unixtime": "1664562673",
//         "from": BSD",
//         "from_id": "user1175672156",
//         "text": [
//          "Cello Opalware Dazzle Scarlet Bliss Dinner Set, 18Pcs, White @1028\n",
//          {
//           "type": "link",
//           "text": "https://amzn.to/3rluYFS"
//          },
//          " \nJaquline USA Aqua Energy Clay Face Wash 100ml @97\n",
//          {
//           "type": "link",
//           "text": "https://amzn.to/3RG3CoV"
//          }
//         ],
//         "text_entities": [
//          {
//           "type": "plain",
//           "text": "Cello Opalware Dazzle Scarlet Bliss Dinner Set, 18Pcs, White @1028\n"
//          },
//          {
//           "type": "link",
//           "text": "https://amzn.to/3rluYFS"
//          },
//          {
//           "type": "plain",
//           "text": " \nJaquline USA Aqua Energy Clay Face Wash 100ml @97\n"
//          },
//          {
//           "type": "link",
//           "text": "https://amzn.to/3RG3CoV"
//          }
//         ]
//        }
    ]

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
    // await driver.findElement(By.id("ap_email")).sendKeys("Avinash1Affiliate@gmail.com");
    // await driver.findElement(By.id("continue")).click();
    // await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
    // await driver.findElement(By.id("signInSubmit")).click();
    // await driver.sleep(50000);
    // await driver.actions()
    //     .keyDown(Key.CONTROL)
    //     // .keyDown(Key.TAB)
    //     .sendKeys('t')
    //     .keyUp(Key.CONTROL)
    //     // .keyUp(Key.TAB)
    //     // .sendKeys('b')
    //     .perform()
    
    

    let linkvalue;
    // await driver.get("https://amzn.eu/d/fvjhOPh");
    let i=0,j=0;
    // let Links = "https://amzn.eu/d/fvjhOPh"
    let Links;
    // let Links = "http://google.com";
    let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
let chatId = "@all1app";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E";
let text = "";
let btext = "";
let disable_web_page_preview= 1
let photo = ""
let getcount = 0;
let disco = 0;
let skipped = 0;
let overallskipped = 0;
let usedget = 0;
let discount = "";
let otherurl = "";
let newurl = "";
let disc=false;
let itemcategory="";
let price="",pricenum=0;
let mention="";
        // Links = Input[0].text_entities[1].text;
        // Links = Input.messages[0].text_entities[1].text;
        for (i=0;i<Input.length;i++){
        // for (i=1;i<Input.messages.length;i++){
            discount="";
            photo="";
            watscode="";
            caption="";
            disc=false;
            itemcategory = ""
            for (j=0;j<Input[i].text_entities.length;j++){
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
        if(Input[i].photo != ""){

            // photo = Input[i].photo
        }
    // if (Input[i].text_entities[j].type!="link"){
    if (!Input[i].text_entities[j].type.includes("link")){
    if (!Input[i].text_entities[j].type=="mention"){
        mention = Input[i].text_entities[j].text
      continue;
    }
      if(Input[i].from.includes("All1App")){
        if (Input[i].text_entities[j].text.includes("#")){ //changed on 1-12-22
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
        if(Input[i].from.includes("Telugu Tech World"))
        {
            
        }
        // urlvalue = Input[i].text_entities[j].text;
        // console.log("plain text \n")
        // console.log(urlvalue);

        if(Input[i].text_entities[j].text.includes("\n")){
          Input[i].text_entities[j].text=Input[i].text_entities[j].text.replaceAll("\n","");
        }
        if(Input[i].text_entities[j].text.includes("Loot")){
          Input[i].text_entities[j].text=Input[i].text_entities[j].text.replaceAll("Loot","Offer");
        }
        if(Input[i].text_entities[j].text.includes("Looot")){
          Input[i].text_entities[j].text=Input[i].text_entities[j].text.replaceAll("Looot","Offer");
        }
        text = text + Input[i].text_entities[j].text+"\n";
        btext = btext + Input[i].text_entities[j].text+"\n";
        if(Input[i].text_entities[j].type=="mention"){
          text = text +"\n";
          btext = btext +"\n";

          if(text.includes('Deal Price')){
            console.log('Deal Price found')
            for(i=0;i<text.length;i++){

            }

          }

          if(Input[i].text_entities.length>j)
            j++;//changes on 1-12-2022
        }
        continue;
    }
    // else if(Input[i].text_entities[j].type.includes("link") && !Input[i].text_entities[j].href.includes("amzn")){ //telugu deals

    //@Before Blocking Code
    // else if(Input[i].from == "all1appdaily"){
    //   text = text + `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
    // }
    else if(Input[i].text_entities[j].type.includes("link") && !Input[i].text_entities[j].text.includes("amzn")){ //generic
    
    
    // else if(Input[i].text_entities[j].type.includes("link") ){ //for all(amazon and generic - ekaro)
    // else if((Input[i].text_entities[j].type.includes("link")) && (
    // (Input[i].from.includes("Telugu Tech World") &&  !Input[i].text_entities[j].href.includes("amzn"))
    // (!Input[i].from.includes("Telugu Tech World") && Input[i].text_entities[j].text.includes("amzn")))){
        console.log('Other than Amzn Links');
        // console.log('All including  Amzn Links');
        // await driver.get(Input[i].text_entities[j].text);
        // otherurl = await driver.get(await driver.);
        // otherurl = await driver.get((await driver.getCurrentUrl()));
        // await driver.get
        // console.log('otherurl is '+String(otherurl));
        // await driver.get("https://earnkaro.com/create-earn-link");
        // await driver.findElement(By.id("deallink")).click();
        if(Input[i].text_entities[j].text.includes('amzn')){
        // await driver.actions()
        // .sendKeys(Input[i].text_entities[j].text)
        // .sendKeys(String(otherurl))
        // .sendKeys(Input[i].text_entities[j].href) //telugu deals
        // .perform()
        }
        else{
          console.log('Other than Amazon');
          break;
        }
        await driver.findElement(By.id("Btn_Make_Profit_Button")).click();
        // await driver.findElement(By.id("deallink")).click();
      //   earnlink = await driver.findElement(By.id("deallinkshorturl")).getAttribute("value").then(function(webElement) {
      //     console.log('deal exists');
      //     earnlink = webElement;
      //     console.log('earnlink exception is '+earnlink);
      // }, function(err) {
      //     if (err.state && err.state === 'no such element') {
      //         console.log('Deal not found');
      //     } 
      // });
        // console.log('earn link is '+earnlink);
        // await driver.findElement(By.id("Copy_Link_make")).click();

        
        // text = text + earnlink;
        text = "";
        btext = "";
        photo = "";
        // continue;//new change 14th Nov
        break;
    }
    Links = Input[i].text_entities[j].text;
    if(Input[i].from.includes("Telugu Tech World"))
    {
        Links = Input[i].text_entities[j].href;

    }
        // Links = Input.messages[i].text_entities[j].text;
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

          try{
          let asin = await driver.findElement(By.xpath('//*[@id="productDetails_detailBullets_sections1"]/tbody/tr[1]/td')).getAttribute("innerHTML");
          }
          catch(e){
            console.log('Asin error');
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
          try{
            // <img src=`./${Input[i].photo}` id="imgage" />
            // photo = document.getElementById("imgage")
          photo=require(`./${Input[i].photo}`)
          console.log('photo in require is '+photo)
          console.log('Require image success')
        }
        catch(e){
            console.log('photo in require is '+photo)
            console.log('error in photo require is '+e)
            console.log('Require image fail')
          }
          await driver.findElement(By.id("landingImage")).getAttribute("src").then(function(webElement) {
            console.log('Image exists');
            // console.log('WebElement is '+webElement);
            photo = webElement;
            // webElement.click();
            // photo = webElement.findElement(By.id("landingImage")).getAttribute("src");
            
            console.log(photo);
            itemcategory = itemcategory + " \n " + photo +" \n\n";
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Image not found so cleared all details');

                //without image 
                text = "";
                btext = "";
                photo = "";
              } 
            // else {
            //     webdriver.promise.rejected(err);
            // }
        });
        console.log('image: '+photo)
        try{
        discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("innerHTML");
        // discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("src");
        //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]
        // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
        if(discount==""){
        await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]")).getAttribute("innerHTML").then(function(webElement) {
            console.log('Discount  exists');
            discount = webElement;
            console.log('discount is '+discount);
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Discount not found');
            } 
        });
      }
      else{
        console.log('Discount Found Out is '+discount);
      }
    }
    catch(e){
      console.log(e);
    }

        // discount = await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/span[1]"));
        // console.log(typeof(discount));
        try{
        // await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
        // for(l=0;l<discount.length;l++){
          if(discount != ""){
            if(discount.charAt(0)=='-'){
              discount = discount.substring(1,discount.length);
              console.log('new discount is '+discount);
            }
            if(discount.charAt(discount.length-1)=='%'){
              discount = discount.substring(0,discount.length-1);
              console.log('new discount is '+discount);
            }
            disco = Number(discount);
            disc = Number(discount)>=50;
            console.log(disc);
          }
        }
        catch(e){
          console.log(e);
        }
          // }
          //price data
          
          try{
            price=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]')).getAttribute("innerHTML");
            if(price.length>10){
              let pricecheck= "";
              pricecheck=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]')).getAttribute("innerHTML");
              if(pricecheck!=""){
                price=pricecheck
              }
              if(price.includes('₹')){
                console.log('Rupee Symbol found')
                price = price.substring(1,price.length);
              }
              if(price.includes('.')){
                if(price.indexOf('.')){
                  console.log('Dot Symbol found')
                  price = price.substring(0,price.indexOf('.'));
                }
              }

            }
            if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
            }
            //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
            //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
            if(price==""){
            price=await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]')),5000).getAttribute("innerHTML");
            }
            if(price==""){
              price=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
              // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
              //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
            }
            if(price==""){
              price=await driver.wait(until.elementLocated(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')),5000).getAttribute("innerHTML");
            } 
            if(price==""){
              price=await driver.findElement(By.className('a-price-whole')).getAttribute("innerHTML");
              // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
            } 
          if(price==""){
          await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML").then(function(webElement) {
            //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]
              console.log('Element exists');
              price = webElement;
              console.log('price is '+price);
          }, function(err) {
              if (err.state && err.state === 'no such element') {
                  console.log('Element not found for price');
              } 
          });
        }
      }
      catch(e){
        console.log(e);
      }
      try{
      if(price.includes(',')){
        price=price.replaceAll(',',"")
      }
      for(let k=0;k<price.length;k++){
        if(Number.isInteger(Number(price[k]))){
          a=a+price[k];
        }
      }
        price=a;

          pricenum = Number(price);
    }
    catch(e){
      console.log('Price Error');
    }
        // }
        // break;
//     }
//     // break;
// }
        // let slink="https://www.facebook.com";
        try{
        let newitems = await driver.findElement(By.id("nav-search-label-id")).getAttribute("innerHTML");
        itemcategory = itemcategory + "\n#"+newitems+"\n";
        console.log('item category is '+newitems)
        itemcategory = itemcategory + await driver.findElement(By.xpath('//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[1]/span/a')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        itemcategory = itemcategory + await driver.findElement(By.xpath('//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[3]/span/a')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        itemcategory = itemcategory + await driver.findElement(By.xpath('//*[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[5]/span/a')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        itemcategory = itemcategory + asin;
        itemcategory = itemcategory.trim()+" ";
        itemcategory = itemcategory+"\n";
        }
        catch(e){
          console.log('title tag error')
        }
        try{
          // check undefined and later assign
          if(Input[i].from.includes("All deals")){
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[1]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[2]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[3]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[4]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[5]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[6]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[7]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[8]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        itemcategory = itemcategory + "#" + await driver.findElement(By.xpath('//*[@id="feature-bullets"]/ul/li[9]/span')).getAttribute("innerHTML");
        itemcategory = itemcategory.trim()+" ";
        // itemcategory = itemcategory+"\n";
        }
        }
        catch(e){
          console.log(' Category exceed Error');
        }
        try{
          if(price != "NaN"){
            if(pricenum<=0){
              pricenum=Number(price)
            }
            if(pricenum!=0){
            itemcategory = itemcategory + "\n";
            itemcategory += "Pryce"+price;
            }
          }
          if(disco != 0){
          itemcategory = itemcategory + "\n";
          itemcategory += "Discos"+disco;
          }
          console.log('Price String is '+price);
          console.log('Price is '+pricenum);
          console.log('Discount is '+disco);
        }
        catch(e){
          console.log(e);
        }
        try{
        if(itemcategory.includes("&amp")){
          itemcategory.replaceAll("&amp","");
        }
        if(itemcategory.includes("&")){
          itemcategory.replaceAll("&","");
        }
      }
      catch(e){
        console.log('amp error')
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
await driver.get(Links);
await driver.findElement(By.id("amzn-ss-text-link")).click();
// let popupIsVisible = await driver.wait(until.elementIsVisible("a-popover-content-2"));
// console.log("popupIsVisible is "+popupIsVisible);
// if(!popupIsVisible){
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
// }
await driver.findElement(By.id("amzn-ss-text-link")).click();
// await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
await driver.sleep(2000);
try{
  await driver.findElement(By.id("a-autoid-1-announce")).click();
  await driver.sleep(1000);
}
catch(e){
  await driver.findElement(By.id("amzn-ss-text-link")).click();
  await driver.sleep(1000);
  // await driver.findElement(By.id("a-autoid-1-announce")).click();
  try{
    await driver.findElement(By.id("a-autoid-1-announce")).click();
    await driver.sleep(1000);
  }
  catch(e){
    await driver.findElement(By.id("amzn-ss-text-link")).click();
    await driver.sleep(1000);
    try{await driver.findElement(By.id("a-autoid-1-announce")).click();}
    catch(e){
      console.log('inside catch')
      await driver.actions()
      // .keyDown(Key.SHIFT)
      .keyDown(Key.CONTROL)
      .keyDown(Key.F4)
      .keyUp(Key.F4)
      .keyUp(Key.CONTROL)
      // .keyDown(Key.TAB)
      .perform();
      console.log('Tab Removed');
    }
    await driver.sleep(1000);
  
  }

}
await driver.actions()
.sendKeys(Key.UP) //bmvavinash
.sendKeys(Key.UP) //bmvavinash
.keyDown(Key.UP)
.keyUp(Key.UP)
.sendKeys(Key.RETURN)
// .sendKeys(Key.TAB)
.keyDown(Key.TAB)
.keyUp(Key.TAB)
.sendKeys(Key.RETURN)
.perform();

await driver.sleep(1000);
await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
await driver.sleep(3000);

let datas = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
if(datas == "")
{
  console.log('empty text box')
  await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
  try{
    await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
    console.log('empty text box 2nd')
  }
  catch(e){
    console.log(e);
  }
  
  // await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
  await driver.sleep(1000);
}
let datasnew = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");


await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
console.log('Instead of Copy ' +datasnew)

// linkdata = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
// console.log('Link Value is '+linkdata)

await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('a')
.keyUp(Key.CONTROL)
.perform()
await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('c')
.keyUp(Key.CONTROL)
.perform()

// await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).getAttribute("src");
// await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).click();

await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();


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


//@Before Blocking Code
await driver.get("https://www.duckduckgo.com");
await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('v')
.keyUp(Key.CONTROL)
.sendKeys(Key.RETURN)
.perform()
urlvalue = await driver.findElement(By.name("q")).getAttribute("value");
console.log(urlvalue);

//To Change
try{
if(!Input[i].from.includes("All1App")){
  if(urlvalue == "")
      break;
  btext = btext + urlvalue+"\n" + "\n" + itemcategory + "\n";

  // if(btext.length>99)
  //   btext = text.substring(0,99);
}
}
catch(e){
  console.log(e);
}

//avinash08 data take
await driver.get(Links);
await driver.findElement(By.id("amzn-ss-text-link")).click();
await driver.findElement(By.id("amzn-ss-text-link")).click();

// popupIsVisible = await driver.wait(until.elementIsVisible("a-popover-content-2"));
// console.log("popupIsVisible is "+popupIsVisible);
// if(!popupIsVisible){
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
// }
await driver.findElement(By.id("amzn-ss-text-link")).click();
// await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
await driver.sleep(2000);
try{
  await driver.findElement(By.id("a-autoid-1-announce")).click();
}
catch(e){
  await driver.findElement(By.id("amzn-ss-text-link")).click();
  await driver.findElement(By.id("a-autoid-1-announce")).click();

}
// await driver.findElement(By.id("a-autoid-1-announce")).click();


// await driver.findElement(By.id("a-autoid-1-announce")).click();
await driver.actions()
.sendKeys(Key.DOWN) //avinash08 id
.sendKeys(Key.DOWN) //avinash08 id
// .ARROW_DOWN
.keyDown(Key.ARROW_DOWN)
.keyUp(Key.ARROW_DOWN)
.sendKeys(Key.RETURN)
// .sendKeys(Key.TAB)
.keyDown(Key.TAB)
.keyUp(Key.TAB)
.sendKeys(Key.RETURN)
.perform();
await driver.sleep(1000);
await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
await driver.sleep(3000);
let data = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
if(data == "")
{
  console.log('empty text box')
  await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
  try{
    await driver.findElement(By.id("amzn-ss-get-link-btn-text-announce")).click();
    console.log('empty text box 2nd')
  }
  catch(e){
    console.log(e);
  }
  await driver.sleep(1000);
}


await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
let linkvalue = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
console.log('Link Value is '+linkvalue)
await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('a')
.keyUp(Key.CONTROL)
.perform()
await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('c')
.keyUp(Key.CONTROL)
.perform()

// await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).getAttribute("src");
// await driver.findElement(By.id("amzn-ss-tracking-id-dropdown-text")).click();

await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();


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


//@Before Blocking Code
await driver.get("https://www.duckduckgo.com");
await driver.actions()
.keyDown(Key.CONTROL)
.sendKeys('v')
.keyUp(Key.CONTROL)
.sendKeys(Key.RETURN)
.perform()
urlvalue = await driver.findElement(By.name("q")).getAttribute("value");
console.log(urlvalue);
try{
if(!Input[i].from.includes("All1App")){
    if(urlvalue == "")
        break;
    // text = text + urlvalue+"\n" + itemcategory + "\n";
    if(pricenum>0){
    text = text + "\n @" + pricenum + "\n" +urlvalue+"\n" + itemcategory + "\n";
  }
  else{
      text = text + "\n@" + mention + "\n" +urlvalue+"\n" + itemcategory + "\n";

    }
    // if(text.length>99)
    // text = text.substring(0,99);
}
else{
    text = text + `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
    break; //@for now
    // text = text + `+"\n";
  }
  }
  catch(e){
    console.log(e);
  }

  await driver.get(Links);
  // await driver.findElement(By.id("landingImage")).click();
  try{
      await driver.actions()
.right_action.ContextClick("landingImage").SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ARROW_DOWN).SendKeys(Key.ENTER).Build().Perform();
  }
  catch(e){
    console.log('Context Click error');
  }
  
  console.log('Context Click Continuing');

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
    }
    catch(error){
        overallskipped++;
        console.log(error);
        continue;
    }
        
    } //j loop ends

    
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
    urlString = `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app&text=${text}`
    // }
    // xhr.open("GET", urlString?photo=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg);
    // photo = "https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg";
    xhr.open("GET", `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app/sendMessage?chat_id=@all1app?photo=?`+photo+"?chat_id="+chatId+"?caption="+text, true);
    var res = encodeURIComponent(urlString);
    var resres = decodeURIComponent(res);
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
        try{
        if(Input[i].from.includes("All1App")){
            if(!text.includes("affiliiate"))
            {
                console.log('non Affiliate product')
                text = "";
                btext = "";
                photo = "";
                continue;
            }
        }
      }
      catch(e){
        console.log(e);
      }
        try{
        if(!Input[i].from.includes("All1App")){
            if(!text.includes("amzn")){
                console.log('non Amazon product')
                text = "";
                btext = "";
                photo = "";
                continue;
            }
        }

      }
      catch(e){
        console.log(e);
      }
if(disc){
    console.log('deals');
    chatId="@all1appdeals";
    watscode="DSyvXzBJuax5uJ6MFylXJk";
  }
  else{
    console.log('all');
    chatId="@all1app";
    watscode="FfH1v13f7dVA5ZHVvzEW3E";
}
if(text.includes("Offer")){
  text.replace("Offer","offer");
}
// if(discount>=60){
//   text = "💥"+text
//   btext = "💥"+btext
// }
// if(discount>=75){
//   text = "💥💥"+text
//   btext = "💥💥"+btext

// }
var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try{
    if(!Input[i].from.includes("All1App")){
        chatId = "@all1appdaily";
        
    }
  }
  catch(e){
    console.log(e);
  }

    var raw = JSON.stringify({
        // photo: "https://m.media-amazon.com/images/I/61URvoFTTEL._SY355_.jpg",
        // photo: "/"+Input[i].photo,
        // photo: 'F:/Study/Affiliate/selenium/Selenium Example/'+Input[i].photo,
        // photo: "F:\\Study\\Affiliate\\selenium\\Selenium Example\\photos\\photo_26290@29-10-2022_00-06-21.jpg",
        // chat_id: "@all1app",
        photo:photo,
        chat_id: chatId,
        caption: text
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    let output = false;
    if(photo!=""){
        console.log('with photo');
        await fetch(
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));

      if(output){
        await fetch(
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
    console.log('re api 1st')
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));

      }
      //@whatsapp 
      if(Input[i].from.includes("All1App")){
        // watscode = "FfH1v13f7dVA5ZHVvzEW3E";
      await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
      try{
        await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
        let s=text.split("\n");
                        for(let q=0;q<s.length;q++){
                          await driver.actions()
                          .sendKeys(s[q])
                          .keyDown(Key.SHIFT)
                          .keyDown(Key.RETURN)
                          .keyUp(Key.RETURN)
                          .keyUp(Key.SHIFT)
                          .perform()
                      }
                      await driver.sleep(3500);
                      await driver.actions()
                      .sendKeys(Key.RETURN)
                      .perform()
                      await driver.sleep(2500);
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),30000).click();
                      await driver.sleep(3500);
                      await driver.actions()
                      .keyDown(Key.TAB)
                      .keyUp(Key.TAB)
                      .sendKeys(Key.RETURN)
                      .perform()
      }
      catch(error){
        console.log('Whatsapp Error');
      }
      // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
      }
      
        }
        else{
            console.log('without photo');
            await fetch(
                  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chat_id}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
                  //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
                  requestOptions
                )
                .then((response) => response.text())
                  .then((result) => console.log("success",result))
                  .catch((error) => console.log("error", error));


                  //@Whatsapp
                  try{
                  if(Input[i].from.includes("All1App")){
                    // watscode = "FfH1v13f7dVA5ZHVvzEW3E";
                    console.log('removed \n');
                    await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                  watstext = text;
                  if(watstext.includes("\n")){
                    watstext.replaceAll("\n","");
                  }
                    try{
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();//,Key.RETURN
                      // for(String s in text.split("\n")){
                        let s=text.split("\n");
                        for(let q=0;q<s.length;q++){
                          await driver.actions()
                          .sendKeys(s[q])
                          .keyDown(Key.SHIFT)
                          .keyDown(Key.RETURN)
                          .keyUp(Key.RETURN)
                          .keyUp(Key.SHIFT)
                          .perform()
                      }
                      await driver.sleep(3000);
                      await driver.actions()
                      .sendKeys(Key.RETURN)
                      .perform()
                      await driver.sleep(3000);
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),30000).click();
                      await driver.sleep(3500);
                      await driver.actions()
                      .keyDown(Key.TAB)
                      .keyUp(Key.TAB);
                      sendKeys(Key.RETURN)
                      .perform()
                      }
                      catch(error){
                        console.log('Whatsapp Error');
                      }
                    // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'));
                    }
                  }
                  catch(e){
                    console.log(e);
                  }
        }

        try{
        if(disc && Input[i].from.includes("All1App")){
            if(photo!=""){
            chatId = "@all1app";
            watscode = "FfH1v13f7dVA5ZHVvzEW3E";
            console.log('with photo');
            await fetch(
                //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
        `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
    console.log('re api 2nd');
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));

      if(output){
        await fetch(
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));
    }
    //@Whatsapp
    if(Input[i].from.includes("All1App")){
      await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
      try{
        await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
        let s=text.split("\n");
                        for(let q=0;q<s.length;q++){
                          await driver.actions()
                          .sendKeys(s[q])
                          .keyDown(Key.SHIFT)
                          .keyDown(Key.RETURN)
                          .keyUp(Key.RETURN)
                          .keyUp(Key.SHIFT)
                          .perform()
                      }
                      await driver.sleep(3000);
                      await driver.actions()
                      .sendKeys(Key.RETURN)
                      .perform()
                      await driver.sleep(3000);
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),30000).click();
                      await driver.sleep(3500);
                      await driver.actions()
                      .keyDown(Key.TAB)
                      .keyUp(Key.TAB);
                      sendKeys(Key.RETURN)
                      .perform()
        }
        catch(error){
          console.log('Whatsapp Error');
        }
      // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]'));
      }
      
        }
        else{
            console.log('without photo');
            await fetch(
                  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chat_id}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
                  //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
                  requestOptions
                )
                .then((response) => response.text())
                  .then((result) => console.log("success",result))
                  .catch((error) => console.log("error", error));

                  // @Whatsapp
                  if(Input[i].from.includes("All1App")){
                    await driver.get(`https://web.whatsapp.com/accept?code=${watscode}`);
                    try{
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
                      let s=text.split("\n");
                        for(let q=0;q<s.length;q++){
                          await driver.actions()
                          .sendKeys(s[q])
                          .keyDown(Key.SHIFT)
                          .keyDown(Key.RETURN)
                          .keyUp(Key.RETURN)
                          .keyUp(Key.SHIFT)
                          .perform()
                      }
                      await driver.sleep(4000);
                      await driver.actions()
                      .sendKeys(Key.RETURN)
                      .perform()
                      await driver.sleep(4000);
                      await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]')),30000).click();
                      await driver.sleep(5000);
                      await driver.actions()
                      .keyDown(Key.TAB)
                      .keyUp(Key.TAB);
                      sendKeys(Key.RETURN)
                      .perform()
                      }
                      catch(error){
                        console.log('Whatsapp Error');
                      }
                    // await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys(text,Key.RETURN);
                    }
        }
      }
    }
    catch(e){
      console.log(e);
    }
        //Telegram Bot for bmvavinash deals

        //Need to Change
        try{
        if(!Input[i].from.includes("All1App")){
          console.log('entered into all1app web')
        var raw = JSON.stringify({
          // photo: "https://m.media-amazon.com/images/I/61URvoFTTEL._SY355_.jpg",
          // photo: "/"+Input[i].photo,
          // photo: 'F:/Study/Affiliate/selenium/Selenium Example/'+Input[i].photo,
          // photo: "F:\\Study\\Affiliate\\selenium\\Selenium Example\\photos\\photo_26290@29-10-2022_00-06-21.jpg",
          // chat_id: "@all1app",
          photo:photo,
          chat_id: "@all1appweb",
          caption: btext
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      console.log('all1app web data')
          let chatid = "@all1appweb"
        await fetch(
                //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
        `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
    console.log('re api 2nd');
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));

      if(output){
        await fetch(
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
    //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app",
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app`,
    //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=@all1app`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));
      }
    }
  }
  catch(e){
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

    


    try{
    xhr.send();
    }
    catch(error){
        usedget++;
        await driver.get(resres);
    }
    finally{
      await driver.get("https://api.whatsapp.com/send?phone=9866017750"); 
      await driver.get(`https://wa.me/919866017750?text=completed${Input[0].from}`); 
    }
    let response = resres.response;
    // let response = xhr.response;
    console.log(response)
    if(response == 'undefined')
    {
        getcount++;
    }
    

    text = "";
    btext = "";
    photo = "";
    caption="";
    discount="";
    price="";
    pricenum=0;
    disco=0;
    disc=false;
    itemcategory="";
    // break;
}
console.log("getcount")
console.log(getcount)
getcount = 0;
console.log("\nskipped")
console.log(skipped)
skipped = 0;
console.log("\noverallskipped")
console.log(overallskipped)
overallskipped = 0;
console.log("\nusedget")
console.log(usedget)
usedget = 0;

await driver.get("https://amzn.to/3Ok5KCE");
await driver.findElement(By.id("landingImage")).click();

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
await driver.get("https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp");
try{
  await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
  await driver.actions()
  .sendKeys('completed ')
  .sendKeys(Input[0].from)
  .sendKeys(Key.RETURN)
  .perform()
}
catch(error){
  console.log(error);
}
finally {
// await driver.actions()
// .sendKeys(Key.ESCAPE)
// await driver.findElement(By.xpath('//*[@id="top-of-page"]/div[1]/div[1]/div[1]/header/div/div[2]/span[1]/a[1]')).click();
// await driver.findElement(By.id("action-button")).click();
// await driver.sleep(10000);
await driver.actions()
.keyDown(Key.CONTROL)
.keyDown('v')
.keyUp(Key.CONTROL)
.sendKeys(Key.RETURN)
.perform()


await driver.sleep(5000);
await driver.actions()
.sendKeys("hai")
.sendKeys(Key.RETURN)
.perform()

// await driver.get("https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp");
await driver.get("https://api.whatsapp.com/send?phone=9866017750");

}
// await driver.sleep(5000);

// await driver.actions()
// .sendKeys('Key.RETURN')
// .sendKeys(Key.RETURN)
// .perform()

// if(slink != '')
// await driver.findElement(By.name("q")).sendKeys(slink,Key.RETURN);
// await driver.get(slink);


// await driver.findElement(By.xpath("//*[@id='ap_password']")).sendKeys("AviAff@123");
// await driver.findElement(By.name("password")).click();
// await driver sendKeys("AviAff@123",Key.RETURN);
// await document.getElementById("ap_password").value="AviAff@123";
// await driver.findElement(By.xpath("//input[@id='ap_password']")).sendKeys("AviAff@123",Key.RETURN);
// await driver.ExecuteScript(string.Format("document.getElementById('ap_password').value='{AviAff@123}';",password));
// await driver.findElement(By.name("password")).sendKeys("AviAff@123",Key.RETURN);
// .sendKeys("hai");
// await driver.findElement(By.id("signInSubmit")).sendKeys(Keys.chord(Key.SHIFT, Key.TAB),"AviAff@123",Key.RETURN);
// await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123",Key.RETURN);

// await driver.get("https://web.whatsapp.com/accept?code=J1JAPHSgHgE3bBVYkv0KPp");
// await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),10000);
// await driver.findElement(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')).sendKeys("Completed",Key.RETURN);

    // await driver.get("http://google.com");
    // await driver.findElement(By.name("q")).sendKeys(Links,Key.RETURN);
    // {Input.map((product) => (
        // <ProductCard key={product.id} product={product} />
        // product.id == "176767" ? Link= product.test[0].test: product.id = product.id + 1
        // console.log('hai')
    //   ))}
    // await driver.get(Input.findIndex("176767").valueOf(type));
    // await driver.get(Link);


    // driver.findElement(By.id("url")).sendKeys(Link);
    // var Links = driver.getElementById(By.id('u_0_5_EA')).value="123";
    // driver


    // driver.findElement(By.id('url')).sendKeys("abc");
    // const Link = document.getElementsByName("Submit").values
    // const Link = inputRef.current;

    // const myElement = document.getElementById("demo");
    // myElement.style.color = "red";


    // Link = document.getElementById("url").value;
    // await driver.get(`${Link}/hai`);


//needed
    // let strUrl = await driver.getCurrentUrl()
    // let i= strUrl.indexOf("/dp");
    // strUrl = strUrl.substring(0,i+14);
    // await driver.get(`${strUrl}/?tag=avinash0f2a-21`);
    
    // await driver.get("https://affiliiate-app.web.app/flag");
    // await driver.findElement(By.id('url')).sendKeys(strUrl);

    // await driver.get("https://www.facebook.com");
    // var Links = document.getElementById("email").value="hai";
    


    // await driver.get(strUrl);
    // strUrl = strUrl.substring(0,indexOf("/dp")+15); 
    // await driver.get("http://google.com");
    // await driver.get((await driver.getCurrentUrl()).substring(0,15));
    // i = strUrl.indexOf("/dp/")+15
    // strUrl = strUrl.substr(0,15)
    // ?tag=109dd6-21
    // console.log(strUrl)
    // await driver.findElement(By.name("q")).sendKeys(Input[0].id,Key.RETURN);
    // await driver.get("http://google.com");
    // await driver.get(strUrl);
    // await driver.get(`${strUrl.substr(0,strUrl.indexOf("/dp/")+15)}?tag=109dd6-21`);
    // await driver.findElement(By.id("ASIN")).sendKeys(Key.F6,"Selenium Search",Key.RETURN);
    
}
// console.l
example();
// return(
        // <div>
        //     <label>Enter data</label>
        //     <input type="text" value={count}></input>
        //     <button onClick={example()}></button>
        // </div>
//     )
    // var Link = prompt("Enter the URL")
    // JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;  
//set the text
// jsExecutor.executeScript("document.getElementById('firstName').value='testuser'");  
//get the text
// String text = (String) jsExecutor.executeScript("return document.getElementById('firstName').value");  
// System.out.println(text); 
// example();
// }