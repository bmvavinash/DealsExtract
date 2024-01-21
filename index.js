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
let urlvalue,urlvalue1;
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
        "id": 17565,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616335",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3693",
        "dicos": "91",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Kobo Recumbent Exercise Bike (Imported)✅Deal Price :  ₹  3759   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3693"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A33dGE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFvckC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61-LSeqgaLL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Exercise Machines \nPryce3693 \nDicos91 \n\n❌Regular Price  : ₹  12999  /- 😱"
         }
        ]
       },
       {
        "id": 17566,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616363",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "64",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Rockerz 245v2 Bluetooth Wireless in Ear Earphones with Upto 8 Hours Playback, 12mm Drivers, IPX5, Magnetic Eartips, Integrated Controls and Lightweight Design with Mic (Navy Blue)✅Deal Price :  ₹ 899    /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B097DTJRWZ?th=1&amp;linkCode=sl1&amp;tag=avinash0372-21&amp;linkId=3193f4e674484e878cf55f595226a0a8&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPBHUv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31r4MOOo2NS._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce899 \nDicos64 \n\n❌Regular Price  : ₹ 1999   /- 😱"
         }
        ]
       },
       {
        "id": 17567,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616433",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "46",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Prestige PKOSS 1.8 Litre Kettle, Red✅Deal Price :  ₹  699   /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40cYDjH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40bqiBw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41JCf4kTKgL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce699 \nDicos46 \n\n❌Regular Price  : ₹1199    /- 😱"
         }
        ]
       },
       {
        "id": 17568,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616458",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "139",
        "dicos": "50",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Odonil Destinations Room Air Freshener Spray 240ml - Carribean Dreams | Long Lasting Fragrance✅Deal Price :  ₹ 139    /- 😱\n 🛒 \n\n @139\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNYgJg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40bc6s3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41jfrIXlncL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Home & Kitchen \n                Home & Décor \n                Home Fragrance \nPryce139 \nDicos50 \n\n❌Regular Price  : ₹ 250   /- 😱"
         }
        ]
       },
       {
        "id": 17569,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616504",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "8990",
        "dicos": "31",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Onida 23 L Convection Microwave Oven (MO23CJS11BN, Black)✅Deal Price :  ₹ 8990    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@8990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407pZHL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4Zqiq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71u0GM8gpHL._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                 Microwave Ovens \nPryce8990 \nDicos31 \n\n❌Regular Price  : ₹11999    /- 😱"
         }
        ]
       },
       {
        "id": 17570,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616592",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "50",
        "dicos": "54",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Street Wear Street Wear Nail Enamel - Pretty Girl Collection - I Dream - 8ml, I Dream, 8 ml✅Deal Price :  ₹  52   /- 😱\n 🛒 \n\n @50\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNqfca"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L0K5PN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51EMmXMCQAS._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Manicure & Pedicure \n                Nails \nPryce50 \nDicos54 \n\n❌Regular Price  : ₹ 100   /- 😱"
         }
        ]
       },
       {
        "id": 17571,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616639",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3999",
        "dicos": "61",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wakeup Imperious Medicated Orthopedic 5-inch Medium Firm Single Size Memory Foam Mattress (72x30x5 inch)✅Deal Price :  ₹  3999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MOGANO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3obzYP7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71xLGpKou9L._SX522_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Bedroom Furniture \nPryce3999 \nDicos61 \n\n❌Regular Price  : ₹  8599  /- 😱"
         }
        ]
       },
       {
        "id": 17572,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616685",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "482",
        "dicos": "52",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AXG New Goal AX-8 Strenuous Aluminium Badminton Set (2 Racquets, 3 Shuttlecocks, 1 Net) Badminton Kit✅Deal Price :  ₹ 485    /- 😱\n 🛒 \n\n @482\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIASu7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40eBsoW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Bo6vrK69L._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Badminton \n                 Complete Sets \nPryce482 \nDicos52 \n\n❌Regular Price  : ₹899    /- 😱"
         }
        ]
       },
       {
        "id": 17573,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616731",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "33",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Buildskill 3 Meter Flexible PVC Washing Machine Inlet Hose, Universal Water Inlet with Tap adaptor/Connector for Top & Front Load Fully Automatic Washing Machine (3 Meter)✅Deal Price :  ₹ 299    /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3om4aqE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40e6YUi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61FjYCuNAIL._SY355_.jpg"
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
          "text": " & Home Improvement\n\n                Home & Kitchen \n                Large Appliances \n                Parts & Accessories \nPryce299 \nDicos33 \n\n❌Regular Price  : ₹ 410   /- 😱"
         }
        ]
       },
       {
        "id": 17574,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616799",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "8999",
        "dicos": "61",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ASUS VA249HE Eye Care Monitor - 23.8\"\n"
         },
         {
          "type": "bot_command",
          "text": "/60"
         },
         {
          "type": "plain",
          "text": "\n.5 cm LED 1920 x 1080 Pixels with 178° Wide Viewing Angle, Full HD 1080p, Flicker Free, Blue Light Filter, Anti Glare, HDMI, Black✅Deal Price :  ₹  8999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@8999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3obLQ3z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41OyOYz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/810fqm-aQBL._SY355_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                 Monitors \nPryce8999 \nDicos61 \n\n❌Regular Price  : ₹ 18999   /- 😱"
         }
        ]
       },
       {
        "id": 17575,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616845",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "129",
        "dicos": "30",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   MERCATO HOSE CONNECTION 304 18\"✅Deal Price :  ₹ 185    /- 😱\n 🛒 \n\n @129\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41cKq7s"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41ykD9x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61mcwUEO21L._SY355_.jpg"
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
          "text": " & Home Improvement\n\n                Home & Kitchen \n                Large Appliances \n                Parts & Accessories \nPryce129 \nDicos30"
         }
        ]
       },
       {
        "id": 17576,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616890",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "47",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Havells HD1903 1200 Watts Powerful Hair Dryer, 2 Heat (Hot & Warm) Settings, Overheat Protection, 2 Year Guarantee (Premium Pink)✅Deal Price :  ₹  799   /- 😱\n 🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Al2ZLf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2NLtT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51EvVgRr4kL._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce799 \nDicos47 \n\n❌Regular Price  : ₹ 1199   /- 😱"
         }
        ]
       },
       {
        "id": 17577,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616935",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "549",
        "dicos": "66",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HP 240 Bluetooth Wireless Mouse with 3 Buttons/1600 DPI Red Optical Tracking/Sleek and Ambidextrous/Compatible to Windows 10, macOS, Chrome OS, 3 Years Warranty (Black)✅Deal Price :  ₹  549   /- 😱\n 🛒 \n\n @549\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AzORy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2NRBL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51pFMw57VBL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce549 \nDicos66 \n\n❌Regular Price  : ₹ 1299   /- 😱"
         }
        ]
       },
       {
        "id": 17578,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681616981",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "17490",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Basics 6 Kg 5 Star Fully Automatic Front Load Washing Machine (White/Silver, Built in Heater)✅Deal Price :  ₹  17490   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@17490"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40bWwMU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UCgMGv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71he-OXPgvL._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                Washing Machines & Dryers \nPryce17490 \nDicos69 \n\n❌Regular Price  : ₹ 35999   /- 😱"
         }
        ]
       },
       {
        "id": 17579,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617048",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1249",
        "dicos": "64",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Black)✅Deal Price :  ₹  1249   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1249"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zZmXef"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A33UQg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61zhqJg1bTL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1249 \nDicos64 \n\n❌Regular Price  : ₹  2100  /- 😱"
         }
        ]
       },
       {
        "id": 17580,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617183",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2099",
        "dicos": "79",
        "catagory": "Luggage",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Solimo Polycarbonate Hard 65 Cms Hardsided Check-In Luggage(T21718-2_Black)✅Deal Price :  ₹ 2099    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3om4pC4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mybdMK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91T3fnKUKGL._SY879_.jpg"
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
          "text": " & Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases & Trolley Bags \nPryce2099 \nDicos79 \n\n❌Regular Price  : ₹ 6599   /- 😱"
         }
        ]
       },
       {
        "id": 17581,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617250",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "66",
        "dicos": "62",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Street Wear Matte Nail Enamel, Tickled Pink, 8ml✅Deal Price :  ₹   62  /- 😱\n 🛒 \n\n @66\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MLDHgs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41xPFi8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51qd14G0PFL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Manicure & Pedicure \n                Nails \nPryce66 \nDicos62 \n\n❌Regular Price  : ₹  150  /- 😱"
         }
        ]
       },
       {
        "id": 17582,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617296",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "40",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Syska UltraTrim HT700 Beard Trimmer (Black and Red)✅Deal Price :  ₹  899   /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ofZYJg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41zu5d5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31ENo+aDfKL._SX466_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                 Shaving, Waxing & Beard Care \nPryce899 \nDicos40 \n\n❌Regular Price  : ₹  1299   /- 😱"
         }
        ]
       },
       {
        "id": 17583,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617409",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "99",
        "dicos": "83",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Kratos Thump Wired Earphones, Powerful Bass, HD Sound Quality Earphones, Tangle Free Cable, Comfortable in Ear Fit, with mic, 3.5 mm Jack (Black)✅Deal Price :  ₹ 99    /- 😱\n 🛒 \n\n @99\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMV6pk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMvAQN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31HSvz6FNsL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce99 \nDicos83 \n\n❌Regular Price  : ₹ 499   /- 😱"
         }
        ]
       },
       {
        "id": 17584,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617434",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1426",
        "dicos": "30",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Verilux® Gaming Headset,PS4 Gaming Headset for PC,Xbox One,Nintendo Switch,Laptop,Tablet,Mobile,with Mic LED Light Over-Ear Surround Sound Noise Cancelling & Volume Control-Red✅Deal Price :  ₹  1026   /- 😱\n Apply ₹400 coupon  🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1426"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B097XT4XZF?m=AMJC2C5GJAQ9T&amp;linkCode=sl1&amp;tag=avinash0372-21&amp;linkId=ffc75991aefc0560054c874ed73a2af5&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIY9fz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71MC6RkPkvL._SX425_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Audio & Video Accessories \nPryce1426 \nDicos30 \n\n❌Regular Price  : ₹  1949   /- 😱"
         }
        ]
       },
       {
        "id": 17585,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617479",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "269",
        "dicos": "76",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Gizga Essentials Laptop Bag Sleeve Case Cover Pouch with Handle for 14.1 Inch Laptop for Men & Women, Padded Laptop Compartment, Premium Zipper Closure, Water Repellent Nylon Fabric, Grey✅Deal Price :  ₹  269   /- 😱\n 🛒 \n\n @269\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40e9Twf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43ySS2H"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91R7HnI8QlL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \nPryce269 \nDicos76 \n\n❌Regular Price  : ₹  899  /- 😱"
         }
        ]
       },
       {
        "id": 17586,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617526",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "649",
        "dicos": "12",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Farmley Premium California Roasted & Salted Pistachios, Pista, Pistachios, Dry Fruits, Whole Shelled Pista (Pack Of 2 - Each 200g)✅Deal Price :  ₹  499   /- 😱\n Apply ₹150 coupon  🛒 \n\n @649\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41xQJ5k"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UDO0VI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71MRyVXlD1L._SX569_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Nuts & Seeds \nPryce649 \nDicos12 \n\n❌Regular Price  : ₹   699  /- 😱"
         }
        ]
       },
       {
        "id": 17587,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617571",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "28990",
        "dicos": "28",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Haier Fully Automatic Washing Machine with Inverter Motor, Super Drum, Dual Spray (HW70-IM12929, Ice White)✅Deal Price :  ₹  23990    /- 😱Apply\n ₹5000 coupon  🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@28990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIBwI3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41u6jPB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51-vd6r2wLL._SY445_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                Washing Machines & Dryers \nPryce28990 \nDicos28 \n\n❌Regular Price  : ₹ 34999   /- 😱"
         }
        ]
       },
       {
        "id": 17588,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617615",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "330",
        "dicos": "28",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Park Avenue Essential Grooming Collection 7 in 1 Combo Grooming Kit for men | Gift Set for men | Gift Hamper for men✅Deal Price :  ₹  276   /- 😱\n 🛒 \n\n @330\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tbjnw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KDco5r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71Zral8OYUL._SX425_.jpg"
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
          "text": "\n\n                Health & Personal Care \n                Personal Care \n                 Shaving, Waxing & Beard Care \nPryce330 \nDicos28 \n\n❌Regular Price  : ₹ 425   /- 😱"
         }
        ]
       },
       {
        "id": 17589,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617639",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1046",
        "dicos": "54",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Hindware Immacula F110001SCP Brass Pillar Cock (Chrome)✅Deal Price :  ₹ 1036    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1046"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41rPqFL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFzOam"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/511eDZqH9aL._SY355_.jpg"
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
          "text": " & Home Improvement\n\n                Home Improvement \n                Kitchen & Bath Fixtures \n                Bathroom Fixtures \nPryce1046 \nDicos54 \n\n❌Regular Price  : ₹  1699   /- 😱"
         }
        ]
       },
       {
        "id": 17590,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617754",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "300",
        "dicos": "25",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Love Beauty and Planet Argan Oil and Lavender Conditioner for Dry & Frizzy hair| Paraben Free , 200ml✅Deal Price :  ₹  285    /- 😱\n Apply 5% coupon  🛒 \n\n @300\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mzH2ER"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43z4WAX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51dGwy3zbJL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Shampoo & Conditioner \nPryce300 \nDicos25 \n\n❌Regular Price  : ₹ 400    /- 😱"
         }
        ]
       },
       {
        "id": 17591,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617799",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5592",
        "dicos": "72",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Balzano Yoga Blender/Smoothie Maker/Juicer/Soup Maker Jar With Auto Seed Separation And Immunity Booster - Metallic Red✅Deal Price :  ₹  7999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@5592"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A41hgS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oipvBD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31Fazm5LlmL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce5592 \nDicos72 \n\n❌Regular Price  : ₹  14999   /- 😱"
         }
        ]
       },
       {
        "id": 17592,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617888",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4784",
        "dicos": "81",
        "catagory": "Luggage",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AmazonBasics Premium Hardside Spinner Luggage with Built-In TSA Lock - 2-Piece Set (21\", 30\"), Red✅Deal Price :  ₹  4860   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4784"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojp21M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojp1ee"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81t9zMQDz6L._SY606_.jpg"
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
          "text": " & Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Luggage Sets \nPryce4784 \nDicos81 \n\n❌Regular Price  : ₹13999    /- 😱"
         }
        ]
       },
       {
        "id": 17593,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617912",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "132",
        "dicos": "55",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   MyGlamm 2IN1 Nail Paint-Poolside Soiree-2X5ml✅Deal Price :  ₹  147   /- 😱\n 🛒 \n\n @132\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A7o8bi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41afXH7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31leP-qA7wL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Manicure & Pedicure \n                Nails \nPryce132 \nDicos55 \n\n❌Regular Price  : ₹ 280   /- 😱"
         }
        ]
       },
       {
        "id": 17594,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681617958",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1199",
        "dicos": "73",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers, Beast™ Mode(50ms Super Low Latency), ASAP™ Charge, BT v5.3(Pearl White)✅Deal Price :  ₹  999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41fkyYM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMqNyY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31NuOjDjnML._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1199 \nDicos73 \n\n❌Regular Price  : ₹ 2499   /- 😱"
         }
        ]
       },
       {
        "id": 17595,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618004",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1399",
        "dicos": "77",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Maxima New Samurai Smartwatch 1.85\", 1st Time Call Accept Feature, Hindi Language Support, 600Nits Brightness, Longer Battery, in-App GPS,100+ Watch Faces, Multisport Modes,HR/SpO2 (Gold Peach)✅Deal Price :  ₹ 1399    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMO008"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMpgVJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61VoXw2cuiL._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1399 \nDicos77 \n\n❌Regular Price  : ₹  2199  /- 😱"
         }
        ]
       },
       {
        "id": 17596,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618051",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Rockerz 261 in Ear Wireless Earphones with mic(Raging Red)✅Deal Price :  ₹  999   /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2HOnb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMU5JW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61D6IlM5ArL._SX425_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce999 \nDicos80 \n\n❌Regular Price  : ₹  2299  /- 😱"
         }
        ]
       },
       {
        "id": 17597,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618075",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1100",
        "dicos": "60",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Hindware Angular Stop Cock (Chrome)✅Deal Price :  ₹  1100   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1100"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mGELHV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MIqZ2d"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71dybWPRNPL._SX425_.jpg"
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
          "text": " & Home Improvement\n\n                Home Improvement \n                Kitchen & Bath Fixtures \n                Bathroom Fixtures \nPryce1100 \nDicos60 \n\n❌Regular Price  : ₹ 2199   /- 😱"
         }
        ]
       },
       {
        "id": 17598,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618143",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Portronics Toad 23 Wireless Optical Mouse with 2.4GHz, USB Nano Dongle, Optical Orientation, Click Wheel, Adjustable DPI(Black)✅Deal Price :  ₹  299   /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLun8y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MOHGZW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41KuRShR97L._SX425_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce299 \nDicos50 \n\n❌Regular Price  : ₹  550  /- 😱"
         }
        ]
       },
       {
        "id": 17599,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618190",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Boult Audio Z20 True Wireless in Ear Earbuds with Zen ENC Mic, 40H Playtime, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, Environmental Noise Cancellation, IPX5 Ear Buds TWS (Green)✅Deal Price :  ₹ 1099    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oaTOKd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L35bwM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71GFeaOKepL._SX425_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1099 \nDicos80 \n\n❌Regular Price  : ₹  3199  /- 😱"
         }
        ]
       },
       {
        "id": 17600,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618236",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1399",
        "dicos": "46",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Crompton SUREBREEZE HILLBRIZ 1200 mm (48 inch) Ceiling Fan (Brown) Star rated energy efficient fans✅Deal Price :  ₹ 1399    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41wYybG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41xRYl0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41WcOzTijEL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce1399 \nDicos46 \n\n❌Regular Price  : ₹ 2299   /- 😱"
         }
        ]
       },
       {
        "id": 17601,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618306",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1299",
        "dicos": "86",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Boult Audio Powerbuds True Wireless in Ear Earbuds with 120H Playtime, in-Built Powerbank, Type-C Fast Charging, Made in India, Pro+ Calling HD Mic, IPX7 Waterproof, Bluetooth Ear Buds TWS (Black)✅Deal Price :  ₹ 12999    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1299"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ohKmVF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFwOuG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71jrExswt4L._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1299 \nDicos86 \n\n❌Regular Price  : ₹4999    /- 😱"
         }
        ]
       },
       {
        "id": 17602,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618331",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "82",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Boult Audio Z20 True Wireless in Ear Earbuds with Zen ENC Mic, 40H Playtime, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, Environmental Noise Cancellation, IPX5 Ear Buds TWS (Black)✅Deal Price :  ₹  999   /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIOuFy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3of3TpC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71ZB8xdkpcL._SX425_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce999 \nDicos82 \n\n❌Regular Price  : ₹ 2999   /- 😱"
         }
        ]
       },
       {
        "id": 17603,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618377",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1199",
        "dicos": "70",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Rockerz 335 Bluetooth in Ear Neckband with Qualcomm aptX & CVC, Upto 30 Hours Playback, ASAP Charge, Signature Sound, IPX5 and BTv5.0(Black)✅Deal Price :  ₹ 1199    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40kDqo8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KCgta5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51UnzgINvYL._SX425_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1199 \nDicos70 \n\n❌Regular Price  : ₹  2499  /- 😱"
         }
        ]
       },
       {
        "id": 17604,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618467",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "13399",
        "dicos": "64",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Netgear Orbi Whole Home Dual Band Mesh WiFi 6 System (RBK352) Router with 1 Satellite Extender|Coverage up to 3,000 sq. ft. and 30+ Devices|AX1800 WiFi 6 (Up to 1.8Gbps), White, Medium (RBK352-100EUS)✅Deal Price :  ₹  13999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@13399"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFAcFQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3o8tO26"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41hIYSWgtqL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Networking Devices \n                 Routers \nPryce13399 \nDicos64 \n\n❌Regular Price  : ₹ 26999   /- 😱"
         }
        ]
       },
       {
        "id": 17605,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618512",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "73",
        "dicos": "63",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wipro Glass Safelite N10004 B22 0.5-Watt Led Night Lamp (Pack of 2, Blue)✅Deal Price :  ₹  73   /- 😱\n 🛒 \n\n @73\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A3fqLo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A3fpqO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61lVpK8h2YL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Specialty Lighting \nPryce73 \nDicos63 \n\n❌Regular Price  : ₹  180  /- 😱"
         }
        ]
       },
       {
        "id": 17606,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618537",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "231",
        "dicos": "82",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   GLUN® Plastic Fusion High-Pressure Replacement Water Aerator Tap and Faucet Foam Flow (Medium, 30)✅Deal Price :  ₹ 239    /- 😱\n 🛒 \n\n @231\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DrYGY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41ubwHc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71vlpAijt8L._SY450_.jpg"
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
          "text": " & Home Improvement\n\n                Home Improvement \n                Power & Hand Tools \n                Hand Tools \nPryce231 \nDicos82 \n\n❌Regular Price  : ₹  999  /- 😱"
         }
        ]
       },
       {
        "id": 17607,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618602",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4729",
        "dicos": "36",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bajaj PMH 25 DLX 24L Personal Air Cooler for home with DuraMarine Pump (2-Yr Warranty by Bajaj) Anti-Bacterial Hexacool Master, TurboFan Technology, 3-SpeedControl, Portable AC, White Cooler for Room✅Deal Price :  ₹  4849   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4729"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Ds41i"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LdnMXn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31M46SO630L._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Coolers \nPryce4729 \nDicos36 \n\n❌Regular Price  : ₹ 6899   /- 😱"
         }
        ]
       },
       {
        "id": 17608,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618765",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2099",
        "dicos": "35",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bajaj Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, White✅Deal Price :  ₹  2099   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oiJLTL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/Bajaj-Rex-500-Watt-Mixer-Grinder/dp/B00HVXS7WC?qid=1681498169&amp;refinements=p_85%3A10440599031%2Cp_6%3AA1WYWER0W24N8S%7CA3K8GDUW67973J%7CAXOGFIT0PZZ7G&amp;rnid=1318474031&amp;rps=1&amp;s=kitchen&amp;sr=1-73&amp;th=1&amp;linkCode=sl1&amp;tag=bmvavinash01-21&amp;linkId=dcb6fb27c6411e40d0ba39e4af8c5ffc&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51Ck4wmBbSL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce2099 \nDicos35 \n\n❌Regular Price  : ₹ 3099   /- 😱"
         }
        ]
       },
       {
        "id": 17609,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618791",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "217",
        "dicos": "50",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Revlon Colorsilk Beautiful Color, Permanent Hair Color with Keratin, 40ml + 40ml + 11.8ml - Light Golden Brown 5G (Pack of 1)✅Deal Price :  ₹  217   /- 😱\n 🛒 \n\n @217\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLuvF4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mA7Kgs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71wLm+iIVVL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Hair Color \nPryce217 \nDicos50 \n\n❌Regular Price  : ₹ 420   /- 😱"
         }
        ]
       },
       {
        "id": 17610,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618936",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1299",
        "dicos": "40",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bajaj ATX 4 750-Watt Pop-up Toaster, 2-Slice Automatic Pop up Toaster with Dust Cover & Slide Out Crumb Tray, 6-Level Browning Controls, Mid-Cycle Cancel Feature, 2-Yr Warranty, White Electric Toaster✅Deal Price :  ₹  1299   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1299"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GIcoQf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KZwrwd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51D5T7TGVbL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1299 \nDicos40 \n\n❌Regular Price  : ₹ 2099   /- 😱"
         }
        ]
       },
       {
        "id": 17611,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681618961",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "6232",
        "dicos": "61",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Onyx✅Deal Price :  ₹  6238   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@6232"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMVT9M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRTPNL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/615xn0oFzuL._SX679_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce6232 \nDicos61 \n\n❌Regular Price  : ₹ 13999   /- 😱"
         }
        ]
       },
       {
        "id": 17612,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619007",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "402",
        "dicos": "50",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pantene Advanced Hairfall Solution with Bamboo, Shampoo, 650ML✅Deal Price :  ₹ 403    /- 😱\n 🛒 \n\n @402\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2Prdn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MOIDkY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/512btbFKwBL._SY550_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Shampoo & Conditioner \nPryce402 \nDicos50 \n\n❌Regular Price  : ₹ 799   /- 😱"
         }
        ]
       },
       {
        "id": 17613,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619031",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "12014",
        "dicos": "16",
        "catagory": "Industrial",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Rubbermaid FG401310 OneShot Lotion Dispenser - Polished Chrome/Black, 2.681\" x 3.875\" x 3.875\"✅Deal Price :  ₹ 2577    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@12014"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/406hrB2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNvZ5B"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51yiXykQt+L._SX342_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Industrial"
         },
         {
          "type": "plain",
          "text": " & Scientific\n\n                Home Improvement \n                Hardware \n                Bathroom Hardware \nPryce12014 \nDicos16 \n\n❌Regular Price  : ₹ 9999   /- 😱"
         }
        ]
       },
       {
        "id": 17614,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619077",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "854",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PHILIPS 4-Watt 400-lumen Candle Frosted E27 Base (Warm White, Pack of 12) - Decorative, Ambience for Chandeliers, Wall lights, Desk lamps, Floor lamps✅Deal Price :  ₹  854   /- 😱\n 🛒 \n\n @854\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4VJsI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3om5Gck"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41FzSkSbHGL._SY445_SX342_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce854 \nDicos69 \n\n❌Regular Price  : ₹ 1999   /- 😱"
         }
        ]
       },
       {
        "id": 17615,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619149",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "70",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lapster USB 3.0 sata Cable for 2.5 inch SSD and HDD, USB 3.0 to SATA III Hard Driver Adapter, sata to USB Cable-(Blue)✅Deal Price :  ₹ 299    /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mHKwoD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ML03Pe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51g7KyX3MqL._SY355_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \nPryce299 \nDicos70 \n\n❌Regular Price  : ₹ 899   /- 😱"
         }
        ]
       },
       {
        "id": 17616,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619195",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1273",
        "dicos": "83",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEB-SD26 256 GB Solid State Drive, TLC, SATA II & SATA III Interface✅Deal Price :  ₹ 1273    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1273"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41x4C3P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KxLMmk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/614wNrAOwRL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Components \n                 Internal Solid State Drives \nPryce1273 \nDicos83 \n\n❌Regular Price  : ₹ 3499   /- 😱"
         }
        ]
       },
       {
        "id": 17617,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619264",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "55",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Portronics Bubble Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size, Shortcut Keys Function(Black)✅Deal Price :  ₹   899  /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43zecoF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43CjYFX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51r3E7G78VL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce899 \nDicos55 \n\n❌Regular Price  : ₹  1699  /- 😱"
         }
        ]
       },
       {
        "id": 17618,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619353",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "161",
        "dicos": "46",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Body Cupid Wild Strawberry Face Wash - 100 ML✅Deal Price :  ₹ 125    /- 😱\n 🛒 \n\n @161\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UHubNe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oeZray"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61FWBcBxODS._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce161 \nDicos46 \n\n❌Regular Price  : ₹ 270   /- 😱"
         }
        ]
       },
       {
        "id": 17619,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619398",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "68",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS PODS 2 Wireless TWS Earbuds with Bluetooth 5.3, LED Display, Voice Assistant, Call Function, Transparent Charging case, Touch Control & Built-in Rechargeable Battery - Black✅Deal Price :  ₹ 699   /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGVl73"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UMCsj9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61J+ctxWn+L._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce699 \nDicos68 \n\n❌Regular Price  : ₹ 1999   /- 😱"
         }
        ]
       },
       {
        "id": 17620,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619489",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "70",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLPCW18 Travel Friendly Cordless Hair Straightener (Rechargeable, Portable)✅Deal Price :  ₹ 450    /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41rQHN3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zYmwAV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61-v6jpId0L._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce899 \nDicos70 \n\n❌Regular Price  : ₹  1499  /- 😱"
         }
        ]
       },
       {
        "id": 17621,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619558",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "379",
        "dicos": "53",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Aurion premium Super Comfort and Durable Weight Lifting Belt (Large, Black, Pack of 1) for Men and Women| Body Fitness Gym Back Support Weightlifting Belt | Unisex | Adjustable Buckle | Power Training✅Deal Price :  ₹  379   /- 😱\n 🛒 \n\n @379\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tf0tp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43A34rw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81ADWunLvuL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce379 \nDicos53 \n\n❌Regular Price  : ₹750    /- 😱"
         }
        ]
       },
       {
        "id": 17622,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619675",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1309",
        "dicos": "67",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AmazonBasics Vacuum Compression Storage Bags with Hand Pump - 15-Pack (2 Jumbo, 5 Jumbo, 4 Large, 4 Medium)✅Deal Price :  ₹ 1309    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1309"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mA8pOY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2FzKc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51lgAJKbwOL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Clothing & Wardrobe Storage \nPryce1309 \nDicos67 \n\n❌Regular Price  : ₹ 3099   /- 😱"
         }
        ]
       },
       {
        "id": 17623,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619701",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "238",
        "dicos": "40",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cello Puro Sports 900 | Water Bottle with Inner Steel and Outer Plastic | Set of 2 | 730 ml, Assorted✅Deal Price :  ₹  238   /- 😱\n 🛒 \n\n @238\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zYmIQF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGD35L"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61ZVAOOaGmL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce238 \nDicos40 \n\n❌Regular Price  : ₹  370  /- 😱"
         }
        ]
       },
       {
        "id": 17624,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619815",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "243",
        "dicos": "51",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Clazkit Silicone Multi-Purpose Portable Folding Wash Basin with Hanging Hole & Save Storage Space, for Home Kitchen (Diameter 26, Grey), YH754✅Deal Price :  ₹ 243    /- 😱\n 🛒 \n\n @243\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMq2C7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A0TAbd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/618ZvYrylcL._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce243 \nDicos51 \n\n❌Regular Price  : ₹ 450   /- 😱"
         }
        ]
       },
       {
        "id": 17625,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619839",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "225",
        "dicos": "77",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   QUALCOSA KITCHEN Premium Microfiber Cleaning Cloths - Highly Absorbent Micro Fiber Cleaning Towels, Wash Clothes, Size: 40\" x 40\" Cms - Especially for Kitchen, Home, Car, Bike (Pack of 06 PCS)✅Deal Price :  ₹  225   /- 😱\n 🛒 \n\n @225\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQ4OXM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/417Ol5A"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Xxy13A10L._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home Improvement \n                Cleaning Supplies \n                 Cleaning Sets \nPryce225 \nDicos77 \n\n❌Regular Price  : ₹ 799   /- 😱"
         }
        ]
       },
       {
        "id": 17626,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619884",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "68",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS PODS 2 Wireless TWS Earbuds with Bluetooth 5.3, LED Display, Voice Assistant, Call Function, Transparent Charging case, Touch Control & Built-in Rechargeable Battery - Black✅Deal Price :  ₹ 699    /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3muomq8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOSrr7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61J+ctxWn+L._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce699 \nDicos68 \n\n❌Regular Price  : ₹ 1799   /- 😱"
         }
        ]
       },
       {
        "id": 17627,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619931",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4121",
        "dicos": "48",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon By Stovekraft Oven Toaster Grill (12624) 30 Liters Otg With Rotisserie, Oven Toaster And Grill For Grilling And Baking Cakes (Grey), Standard✅Deal Price :  ₹  4121   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4121"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4W3HW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mzIo2p"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51SHRLSCS0L._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce4121 \nDicos48 \n\n❌Regular Price  : ₹ 6799   /- 😱"
         }
        ]
       },
       {
        "id": 17628,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681619956",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "105",
        "dicos": "16",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Rage Coffee 5 x Instant Coffee Sachets | 1 Sachet Each x 5 Different Flavours | Premium Arabica Coffee Beans | Black Coffee, Hot or Cold Coffee | Single Serve✅Deal Price :  ₹  105   /- 😱\n 🛒 \n\n @105\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMeIpu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L3rEd9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51o6VxMH-6L._SX466_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Coffee, Tea & Beverages \n                 Coffee \nPryce105 \nDicos16 \n\n❌Regular Price  : ₹   130 /- 😱"
         }
        ]
       },
       {
        "id": 17629,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620001",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "70",
        "catagory": "Toys",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Toy Imagine™ 120 pcs Colorful Wooden Domino Block Set Toy for Kids Educational Dominoes and Fun Learning Activity Game Play | Helps Skill Development and Color Recognition (12 Colors)✅Deal Price :  ₹ 135    /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4aqMO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MLEZrO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51JHt4F1l1L._SX300_SY300_QL70_FMwebp_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Toys"
         },
         {
          "type": "plain",
          "text": " & Games\n\n                Toys & Games \n                Games \n                 Domino & Tile Games \nPryce299 \nDicos70 \n\n❌Regular Price  : ₹ 999   /- 😱"
         }
        ]
       },
       {
        "id": 17630,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620049",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1249",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Nilkamal Set of 2 CHR2197 Plastic Chair, Brown and King Orange✅Deal Price :  ₹  1264   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1249"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40axhe4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407rVA1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61nBirJRNyL._SX425_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Living Room Furniture \nPryce1249 \nDicos50 \n\n❌Regular Price  : ₹ 2199   /- 😱"
         }
        ]
       },
       {
        "id": 17631,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620096",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "41990",
        "dicos": "40",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)✅Deal Price :  ₹   41990  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@41990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40h6Kf0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40h6Xii"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81wxS8abrgL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \nPryce41990 \nDicos40 \n\n❌Regular Price  : ₹61999    /- 😱"
         }
        ]
       },
       {
        "id": 17632,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620146",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1798",
        "dicos": "51",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Larah by Borosil Speckle Silk Series Opalware 35 Pieces Dinner Set, Opal Glass Dinner Plates & Bowls, Crockery Set for Dining (White)✅Deal Price :  ₹  1798   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1798"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41OAEIX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MKCYMu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81gIvjWG-AL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce1798 \nDicos51 \n\n❌Regular Price  : ₹ 3199   /- 😱"
         }
        ]
       },
       {
        "id": 17633,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620195",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "189",
        "dicos": "79",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AmazonBasics RJ45 Cat-5e Network Ethernet Patch/LAN Cable - 25 Feet (7.6 Meters),White✅Deal Price :  ₹ 189    /- 😱\n 🛒 \n\n @189\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43wblNr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIee4P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61UU6FqVUzL._SX425_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \nPryce189 \nDicos79 \n\n❌Regular Price  : ₹ 699   /- 😱"
         }
        ]
       },
       {
        "id": 17634,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620220",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4999",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   INALSA EKON 60BK 1050 m³/hr Pyramid Kitchen Chimney With Elegant Look|Push Button Control|Efficient Dual LED Lamps & Double Baffle Filter|5 Year Warranty on Motor (Black)✅Deal Price :  ₹ 4999    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43N5zqO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41qMwQQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41e4YpkyIiL._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                 Range Hoods & Chimneys \nPryce4999 \nDicos69 \n\n❌Regular Price  : ₹ 11669   /- 😱"
         }
        ]
       },
       {
        "id": 17635,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620247",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "84",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Status Contract 3D Printed Vintage Persian Carpet Rug Runner for Bedroom/Living Area/Home with Anti Slip Backing (4X 6 Feet-Medium , Multi)-Pack of 1✅Deal Price :  ₹  1099   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40hX6bT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40gFehE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71YEzdDdsHL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Carpets & Rugs \nPryce1099 \nDicos84 \n\n❌Regular Price  : ₹  2999  /- 😱"
         }
        ]
       },
       {
        "id": 17636,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620273",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1840",
        "dicos": "46",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Neelam Stainless Steel 26 pcs Dinner Set✅Deal Price :  ₹   2685  /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3KEelyn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43FlqYu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41jxXtnzywL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce1840 \nDicos46 \n\n❌Regular Price  : ₹  3099  /- 😱"
         }
        ]
       },
       {
        "id": 17637,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620300",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4121",
        "dicos": "48",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon By Stovekraft Oven Toaster Grill (12624) 30 Liters Otg With Rotisserie, Oven Toaster And Grill For Grilling And Baking Cakes (Grey), Standard✅Deal Price :  ₹ 4121     /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4121"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41OAUrp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KDK42J"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Pk9Mt8QPL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce4121 \nDicos48 \n\n❌Regular Price  : ₹  5999    /- 😱"
         }
        ]
       },
       {
        "id": 17638,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620325",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "459",
        "dicos": "54",
        "catagory": "Industrial",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Electomania Buffing Sponge Pads Kit for Car Sanding Polishing Waxing Sealing Glaze (12pcs, 3 inch)✅Deal Price :  ₹ 459    /- 😱\n 🛒 \n\n @459\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KJrINI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KID2Kf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Ss2OhQAHL._SX342_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Industrial"
         },
         {
          "type": "plain",
          "text": " & Scientific\n\n                Car & Motorbike \n                Car & Motorbike Care \n                Paint & Exterior Care \nPryce459 \nDicos54 \n\n❌Regular Price  : ₹  8999   /- 😱"
         }
        ]
       },
       {
        "id": 17639,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620350",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "47",
        "catagory": "Video",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cosmic Byte GS430 Gaming wired over ear Headphone, 7 Color RGB LED and Microphone✅Deal Price :  ₹  799   /- 😱\n 🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KDdY7n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41bJMHz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/7154EWu-5LL._SX522_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Video"
         },
         {
          "type": "plain",
          "text": " Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \nPryce799 \nDicos47 \n\n❌Regular Price  : ₹   1399   /- 😱"
         }
        ]
       },
       {
        "id": 17640,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620375",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "298",
        "dicos": "70",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   2.4 Inch Large Rose Ice Cube Trays FDA Silicone Round Ice Cube Mold BPA Free Ice Trays for Freezer with Lid Ice Ball Maker Mold for Whiskey Cocktails Bourbon Juice(Pink)✅Deal Price :  ₹ 298    /- 😱\n 🛒 \n\n @298\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4a8Wn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41bfLYt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71xO6m4J91L._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Tools \nPryce298 \nDicos70 \n\n❌Regular Price  : ₹ 399    /- 😱"
         }
        ]
       },
       {
        "id": 17641,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620401",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "679",
        "dicos": "51",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Usha Aurora 1000 W Dry Iron with Innovative Tail Light Indicator, Weilburger Soleplate (White & Grey)✅Deal Price :  ₹  679   /- 😱\n 🛒 \n\n @679\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LdoGDf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dtXQH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31W1xfnsOPL._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \nPryce679 \nDicos51 \n\n❌Regular Price  : ₹  1299  /- 😱"
         }
        ]
       },
       {
        "id": 17642,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620426",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "359",
        "dicos": "64",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Gizga Essentials Type-C 4 Port Adapter Hub, Fast Data Transfer, USB 3.0 Ports, Multi-System Compatible, MacBook & Type-C Devices, for Windows/Mac OS/Linux, 5GBPS, Voltage Protection, Black✅Deal Price :  ₹  359   /- 😱\n 🛒 \n\n @359\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41cZIJt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3of0dV0"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                 USB Hubs \nPryce359 \nDicos64 \n\n❌Regular Price  : ₹  899  /- 😱"
         }
        ]
       },
       {
        "id": 17643,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620471",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "599",
        "dicos": "76",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "\\\nOffer 🚀🚀   Hammer Ultra Flow Electric Toothbrush and 3 Replaceable Brush Heads for Men and Women, 6 Brushing Modes, Rechargeable Battery, Waterproof, 31000 Strokes per Minute, Super-Soft Bristles, Electric Toothbrush (Pink)✅Deal Price :  ₹  599   /- 😱\n 🛒 \n\n @599\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43yUxFo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tGyig"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61QAVNTWr4L._SX425_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Oral Care \n                Toothbrushes & Accessories \nPryce599 \nDicos76 \n\n❌Regular Price  : ₹  1399     /- 😱"
         }
        ]
       },
       {
        "id": 17644,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620497",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "63",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Black)✅Deal Price :  ₹  149   /- 😱\n 🛒 \n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L39Ajp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIDh87"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51D37uhFFBL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce149 \nDicos63 \n\n❌Regular Price  : ₹  399   /- 😱"
         }
        ]
       },
       {
        "id": 17645,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620523",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "599",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS Zeb-Yoga 90 Pro Wireless Bluetooth in Ear Neckband Earphone with Rapid Charge,Dual Pairing,Magnetic earpiece,Splash Proof,Type C Charging with Mic (Grey)✅Deal Price :  ₹ 599    /- 😱\n 🛒 \n\n @599\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41yngYX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L17Rey"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71KpXHax2JL._SY741_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce599 \nDicos80 \n\n❌Regular Price  : ₹   1899  /- 😱"
         }
        ]
       },
       {
        "id": 17646,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620549",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "85",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   beatXP Gravity Elevate Digital Weight Machine For Body Weight with Thick Tempered Glass, Best Bathroom Weighing Scale with LCD Display - 24 month Warranty✅Deal Price :  ₹ 299    /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L17TTI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dP05v"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61vzsVQA6UL._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Home Medical Supplies & Equipment \n                Health Monitors \nPryce299 \nDicos85 \n\n❌Regular Price  : ₹  999   /- 😱"
         }
        ]
       },
       {
        "id": 17647,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620595",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1059",
        "dicos": "33",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Prestige TriPly Splendor Sauce Pan 160mm, 1.5 L (Stainless Steel, Silver)✅Deal Price :  ₹ 1062    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1059"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40fndAp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41oK7qc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51Xbx22+g+L._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \nPryce1059 \nDicos33 \n\n❌Regular Price  : ₹  1499   /- 😱"
         }
        ]
       },
       {
        "id": 17648,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620619",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "287",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wonder Plastic Vijay Jug Set, 2 pc jug 2 LTR, Green Color, Made in India, KBS01180✅Deal Price :  ₹  290    /- 😱\n 🛒 \n\n @287\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40h7f8S"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40ebDph"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Fgdpg+AEL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce287 \nDicos50 \n\n❌Regular Price  : ₹  570    /- 😱"
         }
        ]
       },
       {
        "id": 17649,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620665",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Maharaja Whiteline HB-129 175 Watt Hand Blender, Stainless Steel Blades, Long Lasting Performance With 175W Motor, Detachable Anti Splash Plastic Foot ( Blue And White )✅Deal Price :  ₹  699    /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zZnMDI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mEjFdg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Jo0NH0vOL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce699 \nDicos50 \n\n❌Regular Price  : ₹  1199  /- 😱"
         }
        ]
       },
       {
        "id": 17650,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620711",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "324",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cello Plastic Kitchen Basket, Jumbo, 62 Liters, Beige✅Deal Price :  ₹  324    /- 😱\n 🛒 \n\n @324\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A4qXKy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mEjOgO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71RzQbZfnrL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Boxes, Baskets & Bins \nPryce324 \nDicos61 \n\n❌Regular Price  : ₹  799    /- 😱"
         }
        ]
       },
       {
        "id": 17651,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620738",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "119",
        "dicos": "70",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PHILIPS LED Deco Yellow 0.5W Glass Candle (Pack of 4)✅Deal Price :  ₹  119 /- 😱\n 🛒 \n\n @119\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMsjkE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNuqRv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31JFFNvSiuL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                 Light Bulbs \nPryce119 \nDicos70 \n\n❌Regular Price  : ₹  396   /- 😱"
         }
        ]
       },
       {
        "id": 17652,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620853",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3196",
        "dicos": "73",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Firefox Bikes Kids Avengers Marvel Captain America 6S Gloss Blue Bicycle Ideal Age 9-12 Years Unisex (24 inch)✅Deal Price :  ₹  3231     /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3196"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L18apI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5Ra1G"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81pghWrF8vL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Cycling \n                Kids' Cycles & Accessories \nPryce3196 \nDicos73 \n\n❌Regular Price  : ₹  7999   /- 😱"
         }
        ]
       },
       {
        "id": 17653,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620878",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1384",
        "dicos": "54",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Larah by Borosil Ruby Opalware Dinner Set, 21 Pieces, White✅Deal Price :  ₹  1394   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1384"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41ucF1s"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MGDAD0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51pO0KkGnLL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce1384 \nDicos54 \n\n❌Regular Price  : ₹  1799   /- 😱"
         }
        ]
       },
       {
        "id": 17654,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620905",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1439",
        "dicos": "54",
        "catagory": "Garden",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Nayasa Funk 6 Piece Plastic Bucket Set-Green✅Deal Price :  ₹  1439   /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3L4WQbS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41vjjV1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81nyOeXLY5L._SX425_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Garden"
         },
         {
          "type": "plain",
          "text": " & Outdoors\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Bathroom Accessories & Organization \nPryce1439 \nDicos54 \n\n❌Regular Price  : ₹  1999   /- 😱"
         }
        ]
       },
       {
        "id": 17655,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620930",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2992",
        "dicos": "62",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Butterfly Cordial 2L, 3L & 5L Stainless Steel Outer Lid Pressure Cooker✅Deal Price :  ₹  2992     /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2992"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRV5QZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/406jaX2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71kh3eARwwS._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \nPryce2992 \nDicos62 \n\n❌Regular Price  : ₹  5999   /- 😱"
         }
        ]
       },
       {
        "id": 17656,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620955",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "250",
        "dicos": "50",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   FOGG PURELADY WOMEN SCENT JASMINE 50ML✅Deal Price :  ₹   250  /- 😱\n 🛒 \n\n @250\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MISubJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ML1hdi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/818rIv3u6rL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Fragrance \n                 Eau de Parfum \nPryce250 \nDicos50 \n\n❌Regular Price  : ₹ 499   /- 😱"
         }
        ]
       },
       {
        "id": 17657,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681620981",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1199",
        "dicos": "14",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zebronics Zeb Wonderbar 10 USB Powered 2.0 Computer Speaker with RGB Lights✅Deal Price :  ₹  1199    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1199"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/406WF4k"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KK4o2u"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81pFzHKGuXL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Audio & Video Accessories \nPryce1199 \nDicos14 \n\n❌Regular Price  : ₹  1399  /- 😱"
         }
        ]
       },
       {
        "id": 17658,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621006",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "349",
        "dicos": "65",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   KIRMANI Kirmani handicrafts Abstract Decorative Throw Pillow/Cushion Cover Multicolors,( 16 X 16 Inches ) Set of 5, Standard (PUIO1)✅Deal Price :  ₹  338    /- 😱Apply\n ₹11 coupon  🛒 \n\n @349\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40dfTFi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ky03iI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51dPZzGhlyL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Cushions & Cushion Covers \nPryce349 \nDicos65 \n\n❌Regular Price  : ₹  899  /- 😱"
         }
        ]
       },
       {
        "id": 17659,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621033",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "37990",
        "dicos": "46",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Whirlpool 1.5 Ton 5 Star, Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling Mode, HD Filter 2023 Model, S3I3AD0, White)✅Deal Price :  ₹  37990   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@37990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Op2aH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFyeFw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51xzmzjFS7L._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Conditioners \nPryce37990 \nDicos46 \n\n❌Regular Price  : ₹  54999   /- 😱"
         }
        ]
       },
       {
        "id": 17660,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621061",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "146",
        "dicos": "51",
        "catagory": "Toys",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zodo 8. 5 inch LCD E-Writer Electronic Writing Pad/Tablet Drawing Board (Paperless Memo Digital Tablet)✅Deal Price :  ₹  166   /- 😱\n 🛒 \n\n @146\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DNifc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DtuJa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61jovxIQplL._SY355_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Toys"
         },
         {
          "type": "plain",
          "text": " & Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce146 \nDicos51 \n\n❌Regular Price  : ₹   549  /- 😱"
         }
        ]
       },
       {
        "id": 17661,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621087",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "27100",
        "dicos": "44",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lloyd 1.5 Ton 3 Star Fixed Speed Window AC (Copper, 2022 Model, White with Silver Deco Strip, GLW18C3YWSEW)✅Deal Price :  ₹  27100   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@27100"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41yP6nU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41uoX9P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81qXJbtSA6L._SX466_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Conditioners \nPryce27100 \nDicos44 \n\n❌Regular Price  : ₹   42999  /- 😱"
         }
        ]
       },
       {
        "id": 17662,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621114",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "12990",
        "dicos": "38",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Voltas Beko 9 kg Semi Automatic Twin Tub Washing machine (WTT90UDX/BKGR4KPTD) Black - ECO Model✅Deal Price :  ₹ 12990    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@12990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UHw24E"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41up4lL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61FWJv8FRzL._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                Washing Machines & Dryers \nPryce12990 \nDicos38 \n\n❌Regular Price  : ₹ 16999   /- 😱"
         }
        ]
       },
       {
        "id": 17663,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621139",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "53",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   GO VEGAN Combo Pack of Natural Mix Dry Fruits and Nuts | Mix Dry Fruits 500 gm Each Total 1 Kg Healthy for Every Occasion Fresh and Healthy Dry Fruits [Jar Pack]✅Deal Price :  ₹  699   /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41x5IfX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41aKc0P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/711aToB-DOL._SX466_PIbundle-2,TopRight,0,0_AA466SH20_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Dried Fruits \nPryce699 \nDicos53 \n\n❌Regular Price  : ₹  1399   /- 😱"
         }
        ]
       },
       {
        "id": 17664,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621209",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "182",
        "dicos": "39",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Dabur Herb'l Olive Enamel Care Toothpaste 150g (Pack of 2)✅Deal Price :  ₹  188    /- 😱\n 🛒 \n\n @182\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UC0WeZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UCjpIn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71zMnbPeiKL._SY355_PIbundle-2,TopRight,0,0_AA355SH20_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Oral Care \n                 Toothpastes \nPryce182 \nDicos39 \n\n❌Regular Price  : ₹  300  /- 😱"
         }
        ]
       },
       {
        "id": 17665,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621235",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1898",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Orient Electric Aura Neo 3L Instant Water Heater (Geyser), 5-Level Safety Shield, Suitable For High Rise Buildings, Stainless Steel Tank (White & Turquoise), Wall Mounting✅Deal Price :  ₹  1911    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1898"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A0s3GX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGWpI5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/612KMt5Qz1L._SY550_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Water Heaters & Geysers \nPryce1898 \nDicos61 \n\n❌Regular Price  : ₹ 3999  /- 😱"
         }
        ]
       },
       {
        "id": 17666,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621307",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "57",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Soulflower Kumkumadi Face Toner Mist | Glowing Skin, Open Pores Tightening | Ayurvedic, Paraben Free, Vegan, Ayush Certified | 50ml✅Deal Price :  ₹   99  /- 😱\n Apply ₹50 coupon  🛒 \n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oh7zas"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41ytrfY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61PVnAbtvLL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce149 \nDicos57 \n\n❌Regular Price  : ₹   350  /- 😱"
         }
        ]
       },
       {
        "id": 17667,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621380",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "909",
        "dicos": "50",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong Beard Trimmer for Men | Quick Charge (2 Hours) | Runtime: 60 mins | 20 Length Settings | Cordless | USB Charging | 1 year warranty (LLPCM07)✅Deal Price :  ₹  540  /- 😱\n 🛒 \n\n @909\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LdpjwB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oirqWR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51IOw6+eT7L._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                 Shaving, Waxing & Beard Care \nPryce909 \nDicos50 \n\n❌Regular Price  : ₹  1499   /- 😱"
         }
        ]
       },
       {
        "id": 17668,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621406",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "685",
        "dicos": "43",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bombay Shaving Co Trimmer Men, 2X Fast Charging, 2 Yr Warranty, 80Min runtime, Hair Trimmer, Shaving Machine, Cordless Beard, 38 length Settings, Flash USB Cable fast Charging (Black)✅Deal Price :  ₹  685     /- 😱\n 🛒 \n\n @685\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40ay7HK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43CluYF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61qtxFjZjzL._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                Shaving, Waxing & Beard Care \nPryce685 \nDicos43 \n\n❌Regular Price  : ₹   1599  /- 😱"
         }
        ]
       },
       {
        "id": 17669,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621454",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "62",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SanDisk Ultra Luxe USB 3.1 Flash Drive 128GB, Upto 150MB/s, All Metal, Metallic Silver✅Deal Price :  ₹  999   /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407sR7v"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43zWjpP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61MtrB2hqcL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 Pen Drives \nPryce999 \nDicos62 \n\n❌Regular Price  : ₹   1899  /- 😱"
         }
        ]
       },
       {
        "id": 17670,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621481",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1899",
        "dicos": "32",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   anchor by panasonic Ventus 600mm Ceiling Fan (Honey Gold Briken)✅Deal Price :  ₹  1899   /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3A4BLrO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UDgC1s"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81Ku+RAA0KL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce1899 \nDicos32 \n\n❌Regular Price  : ₹  2499  /- 😱"
         }
        ]
       },
       {
        "id": 17671,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621551",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5390",
        "dicos": "46",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Da URBAN® Texas Mid Back Revolving Leatherette Ergonomic Home & Office Executive Chair with High Comfort Seating, dicos Adjustable Seat & Nylon Base (Brown)✅Deal Price :  ₹  5390   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@5390"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mEk13A"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLYwVk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/711J2gshe9L._SX522_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Study & Home Office Furniture \nPryce5390 \nDicos46 \n\n❌Regular Price  : ₹  8999  /- 😱"
         }
        ]
       },
       {
        "id": 17672,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621578",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1249",
        "dicos": "64",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Black)✅Deal Price :  ₹  1249    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1249"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMw59Y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A43HMu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61zhqJg1bTL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1249 \nDicos64 \n\n❌Regular Price  : ₹  2999  /- 😱"
         }
        ]
       },
       {
        "id": 17673,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621607",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1375",
        "dicos": "51",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SanDisk Ultra Dual Drive Go USB Type C Pendrive for Mobile (Black, 128 GB, 5Y - SDDDC3-128G-I35)✅Deal Price :  ₹  1375   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1375"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMGPZz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A0UFQj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71qOWNxv4jL._SY355_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 Pen Drives \nPryce1375 \nDicos51 \n\n❌Regular Price  : ₹ 2499   /- 😱"
         }
        ]
       },
       {
        "id": 17674,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621654",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "110",
        "dicos": "56",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HE Re-Energize Body Perfume for Men | Long Lasting | Re Freshing| Woody, Aromatic & Spicy Notes | 120ml✅Deal Price :  ₹  110    /- 😱\n 🛒 \n\n @110\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4aYlZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mvMLvv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51rShN378QL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Fragrance \n                 Perfume \nPryce110 \nDicos56 \n\n❌Regular Price  : ₹  225   /- 😱"
         }
        ]
       },
       {
        "id": 17675,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621703",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "998",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   NIRLON Eco Sipper Stainless Steel Single Wall Water Bottle with Flip Cap/Fridge Refrigerator Bottle/ 100% Leak Proof/Office Bottle/School Bottle, 900 ML, Set of 5✅Deal Price :  ₹ 998    /- 😱\n 🛒 \n\n @998\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L1eEom"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L0MY35"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81MuzOf7yOL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce998 \nDicos50 \n\n❌Regular Price  : ₹  1699    /- 😱"
         }
        ]
       },
       {
        "id": 17676,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621799",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1599",
        "dicos": "45",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   KENT Smart Multi Cooker Cum Kettle 1.2 Liter 800 Watts, Electric Cooker with Steamer & Boiler for Idlis, Instant Noodles, Momos, Eggs, & Steam Vegetables, Inner Stainless Steel & Cool Touch Outer Body✅Deal Price :  ₹  1599   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1599"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MGE9wC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407tfmt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/610XNgcgfKL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1599 \nDicos45 \n\n❌Regular Price  : ₹ 2499   /- 😱"
         }
        ]
       },
       {
        "id": 17677,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621849",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "62",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Hazel Beige)✅Deal Price :  ₹ 1499    /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3obP9I1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Fmn30"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/610bnYBwzmL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1499 \nDicos62 \n\n❌Regular Price  : ₹  2699   /- 😱"
         }
        ]
       },
       {
        "id": 17678,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621900",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "249",
        "dicos": "75",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   One94Store Study Lamp Rechargeable Led Touch On Off Switch Student Study Reading Dimmer Led Table Lamps White Desk Light Lamp (Multicolor,Plastic, Pack of 1)✅Deal Price :  ₹  249   /- 😱\n 🛒 \n\n @249\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41udvLE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KK4Y0a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41+ERlW2gqL._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                 Desk Lights \nPryce249 \nDicos75 \n\n❌Regular Price  : ₹   899  /- 😱"
         }
        ]
       },
       {
        "id": 17679,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621948",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1336",
        "dicos": "78",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLGS10 Glass Top, 2 Burner Manual Glass Gas Stove, Black (ISI Certified)✅Deal Price :  ₹  1336  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1336"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DNOtE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mKelVD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41SlaPm+x-L._SY300_SX300_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                 Gas Stoves \nPryce1336 \nDicos78 \n\n❌Regular Price  : ₹ 3999    /- 😱"
         }
        ]
       },
       {
        "id": 17680,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681621976",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "707",
        "dicos": "49",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AGARO MT 8001 Beard Trimmer for Men, 60min Run Time, USB Charging, Fast Charge, 20 Length Setting, Rechargeable Battery, Black✅Deal Price :  ₹  707   /- 😱\n 🛒 \n\n @707\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41cNGzI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGT8IT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/618q0OCICQL._SX466_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                 Shaving, Waxing & Beard Care \nPryce707 \nDicos49 \n\n❌Regular Price  : ₹ 1199   /- 😱"
         }
        ]
       },
       {
        "id": 17681,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622025",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "40",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS Sound Feast 50, 14 W Portable Speaker Supporting Bluetooth, Pendrive Slot, mSD Card, FM, Call Function (Black)✅Deal Price :  ₹  1499  /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3L2oN49"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L356cp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/816YiPaiKNL._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \nPryce1499 \nDicos40 \n\n❌Regular Price  : ₹  2299  /- 😱"
         }
        ]
       },
       {
        "id": 17682,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622053",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "78",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zollyss Plastic Wall Mount Phone Holder, Remote Control Storage Box, Multi Purpose Phone Charging Dock With Adhesive Phone Holder For Shower/Charging Pvc (2 Pc, Mixed Colors)✅Deal Price :  ₹ 199    /- 😱\n 🛒 \n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Al6kKh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UDgWgG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61JnGSHE0VL._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Mobile Accessories \nPryce199 \nDicos78 \n\n❌Regular Price  : ₹ 599    /- 😱"
         }
        ]
       },
       {
        "id": 17683,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622101",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "67",
        "catagory": "Industrial",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Glun Multipurpose Portable Electronic Digital Weighing Scale Weight Machine (10 Kg - with Back Light)✅Deal Price :  ₹  299   /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KID6cY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41vXp45"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61ocesEh0cL._SY445_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Industrial"
         },
         {
          "type": "plain",
          "text": " & Scientific\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce299 \nDicos67 \n\n❌Regular Price  : ₹  799   /- 😱"
         }
        ]
       },
       {
        "id": 17684,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622149",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "879",
        "dicos": "56",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   beatXP Blaze Electric Body Massager with 3 Massage Heads - Shiatsu Full Body Relaxation for Pain and Stress Relief - Infra Red Heat Therapy - Back, Leg, Foot & Body Slimming Massager, 1 Year Warranty✅Deal Price :  ₹  879    /- 😱\n 🛒 \n\n @879\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41fn6Gk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5Cuzz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61RjbZ68WrL._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Health Care \n                Massage & Relaxation \nPryce879 \nDicos56 \n\n❌Regular Price  : ₹  1999  /- 😱"
         }
        ]
       },
       {
        "id": 17685,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622198",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "8544",
        "dicos": "43",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Symphony Solaris OFR 11 fin 2900W Room Heater for Home with Oil-filled radiator, 11 fins, and Multidirectional Heating (Off White)✅Deal Price :  ₹  8651   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@8544"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/417Q1fo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3odueEy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61BgTyoPZeL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Room Heaters \nPryce8544 \nDicos43 \n\n❌Regular Price  : ₹ 13999   /- 😱"
         }
        ]
       },
       {
        "id": 17686,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622246",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2949",
        "dicos": "34",
        "catagory": "Amazon",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Echo Dot (3rd Gen) - Compact smart speaker with Alexa & Bluetooth (Black)✅Deal Price :  ₹ 2949   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2949"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGXaAV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KHySlE"
         },
         {
          "type": "plain",
          "text": "\n \n "
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61IfOpQwIEL._SX425_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Amazon"
         },
         {
          "type": "plain",
          "text": " Devices\n\nPryce2949 \nDicos34 \n\n❌Regular Price  : ₹  3999  /- 😱"
         }
        ]
       },
       {
        "id": 17687,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622295",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "86",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   TAGG Verve Sense Smartwatch with 1.70'' Large Display, Real SPO2, and Real-Time Heart Rate Tracking, 7 Days Battery Backup, IPX67 Waterproof || Gold Lavender, Standard✅Deal Price :  ₹  899   /- 😱\n Apply ₹100 coupon  🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UEwcKa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41oLepS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/515f7w5xoHL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce999 \nDicos86 \n\n❌Regular Price  : ₹  2999  /- 😱"
         }
        ]
       },
       {
        "id": 17688,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622322",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "662",
        "dicos": "75",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   VGR V-015 Professional Hair Trimmer Runtime: 60 min Trimmer for Men (Black)✅Deal Price :  ₹  662   /- 😱\n 🛒 \n\n @662\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOeGxz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mAyX2z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71glRuBqNBS._SX466_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \nPryce662 \nDicos75 \n\n❌Regular Price  : ₹  1999  /- 😱"
         }
        ]
       },
       {
        "id": 17689,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622372",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "590",
        "dicos": "52",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Butterfly Voyage Vacuum Flask, 1000 ml, Stainless Steel✅Deal Price :  ₹ 590    /- 😱\n 🛒 \n\n @590\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GKLNlC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMQMCA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41alzyH6c6L._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce590 \nDicos52 \n\n❌Regular Price  : ₹  1099   /- 😱"
         }
        ]
       },
       {
        "id": 17690,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622549",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "70",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Type C A325 Tangle-free, Sturdy Type C Cable with 3A Rapid Charging & 480mbps Data Transmission(Black)✅Deal Price :  ₹  149   /- 😱\n 🛒 \n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4bOz9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KZyOiB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71eVAHH3tsL._SX466_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \nPryce149 \nDicos70 \n\n❌Regular Price  : ₹  499  /- 😱"
         }
        ]
       },
       {
        "id": 17691,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622580",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "53990",
        "dicos": "24",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 11/MS Office/Xbox Game Pass),16-E0162ax✅Deal Price :  ₹  53990    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@53990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KHyVOm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2KMbj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81wJJj6jLfL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Laptops \n                 Traditional Laptops \nPryce53990 \nDicos24 \n\n❌Regular Price  : ₹  64999  /- 😱"
         }
        ]
       },
       {
        "id": 17692,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622628",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "549",
        "dicos": "24",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Prestige Magic Dry Iron - PDI 07✅Deal Price :  ₹  549    /- 😱\n 🛒 \n\n @549\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40e4uFx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40h8lS2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/614a582yjSS._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \nPryce549 \nDicos24 \n\n❌Regular Price  : ₹   699  /- 😱"
         }
        ]
       },
       {
        "id": 17693,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622677",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "499",
        "dicos": "69",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PTron Newly Launched Musicbot Lite 5W Mini Bluetooth Speaker with 6Hrs Playtime, Immersive Sound, 40mm Driver, BT5.1 with Strong Connectivity, Portable Design, Integrated Music & Call Control (Black)✅Deal Price :  ₹  499    /- 😱\n 🛒 \n\n @499\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KCiVgN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KxNQL6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71qpDfsAI6L._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \nPryce499 \nDicos69 \n\n❌Regular Price  : ₹  1399   /- 😱"
         }
        ]
       },
       {
        "id": 17694,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622726",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "279",
        "dicos": "44",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Control D Steamer Home Spa Face White Vaporizer✅Deal Price :  ₹  279   /- 😱\n 🛒 \n\n @279\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43A53Mu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3og3CCW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Y6BiuwpUL._SX425_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Tools & Accessories \n                Skin Care Tools \nPryce279 \nDicos44 \n\n❌Regular Price  : ₹  499  /- 😱"
         }
        ]
       },
       {
        "id": 17695,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622775",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "449",
        "dicos": "25",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Quantum QHM7403D Spill-Resistant Wired USB Keyboard with 104 Keys, Rupee Symbol (₹), Hotkeys and 3 LED Function Keys Compatible with PC/Laptop/Smart TV and Every OS (Black)✅Deal Price :  ₹   399  /- 😱\n 🛒 \n\n @449\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41sBIlq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41thyYv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71z65B-fMCL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce449 \nDicos25 \n\n❌Regular Price  : ₹  599   /- 😱"
         }
        ]
       },
       {
        "id": 17696,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622873",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1198",
        "dicos": "64",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon Basics Non Induction Base Nons tick Aluminium Cookware set, including Nonstick Dosa Tawa, Nonstick Kadai With Glass Lid, and Nonstick Frying Pan, (Pink)✅Deal Price :  ₹  1198   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1198"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41a7Fz3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dQtsx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61JlllBcGpL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \nPryce1198 \nDicos64 \n\n❌Regular Price  : ₹   2499  /- 😱"
         }
        ]
       },
       {
        "id": 17697,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622920",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1160",
        "dicos": "22",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Nova NHP 8211 1800 Watts Proffesional Hair Dryer for Women (Blue)✅Deal Price :  ₹  1160   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1160"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43A5t5w"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A5rmMJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/510t5vSHweS._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce1160 \nDicos22 \n\n❌Regular Price  : ₹  1495  /- 😱"
         }
        ]
       },
       {
        "id": 17698,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622970",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1527",
        "dicos": "55",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong Duos 500 Watt 2 Jar Mixer Grinder with 3 Speed Control and 1100 Watt Dry Non-Stick soleplate Iron Super Combo (Black, 1 Year Warranty)✅Deal Price :  ₹  1527   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1527"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mzKlMh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L1flOu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61whl+GwjiL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1527 \nDicos55 \n\n❌Regular Price  : ₹  2499  /- 😱"
         }
        ]
       },
       {
        "id": 17699,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681622997",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "269",
        "dicos": "62",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   TRUNISH Multi-Purpose Laptop Desk for Study and Reading with Foldable Non-Slip Legs Reading Table Tray, Laptop Table, Laptop Stands, Laptop Desk, Foldable Study Laptop Table (Wheat, 1)✅Deal Price :  ₹ 269    /- 😱\n 🛒 \n\n @269\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4XXs4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UEtfcx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/713sanDEHAL._SX425_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \nPryce269 \nDicos62 \n\n❌Regular Price  : ₹  599   /- 😱"
         }
        ]
       },
       {
        "id": 17700,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623025",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "8089",
        "dicos": "55",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AmazonBasics Polycarbonate Soft 73 cms Suitcase (N802_Blue)✅Deal Price :  ₹ 8089    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@8089"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mKGE6i"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L19qsW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/915zpRm7a1L._SX466_.jpg"
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
          "text": " & Accessories\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases & Trolley Bags \nPryce8089 \nDicos55 \n\n❌Regular Price  : ₹  15999  /- 😱"
         }
        ]
       },
       {
        "id": 17701,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623052",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2005",
        "dicos": "67",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLGS18 Glass Top 3 Burner Gas Stove, Manual Ignition, LPG Compatible, Black (ISI Certified, Door Step Service, 1 Year Warranty)✅Deal Price :  ₹   2005  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2005"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mHMEwD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mCOvmC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51bMcjdgQeL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                 Gas Stoves \nPryce2005 \nDicos67 \n\n❌Regular Price  : ₹ 4999   /- 😱"
         }
        ]
       },
       {
        "id": 17702,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623149",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2999",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Jabra Elite 2 in Ear True Wireless Earbuds with 21 Hours of Battery, 2 Built-in Microphones for Clear Calls, Rich Bass and Comfortable fit with mic - Navy✅Deal Price :  ₹  2999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3obDXex"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KISplK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31NI-igp4iL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce2999 \nDicos50 \n\n❌Regular Price  : ₹  4999  /- 😱"
         }
        ]
       },
       {
        "id": 17703,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623205",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "23999",
        "dicos": "25",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   OnePlus 108 cm (43 inches) Y Series Full HD Smart Android LED TV 43 Y1S (Black)✅Deal Price :  ₹  23299   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@23999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dqlxR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43N7JGW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81Y8+2cuWEL._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \nPryce23999 \nDicos25 \n\n❌Regular Price  : ₹  28999  /- 😱"
         }
        ]
       },
       {
        "id": 17704,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623236",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "27999",
        "dicos": "30",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)✅Deal Price :  ₹  27999    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@27999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mKfixb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3of6Zde"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/819SRH2DKBL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \nPryce27999 \nDicos30 \n\n❌Regular Price  : ₹ 35999   /- 😱"
         }
        ]
       },
       {
        "id": 17705,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623335",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "63",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wonderchef Valencia Non-Stick Cookware 4 Piece Set, Kadhai with Lid, Fry Pan, Dosa Tawa, Induction Friendly Design, Cool Touch Bakelite Handles, Pure Grade Aluminium, PFOA Free-2 Yrs Warranty, Purple✅Deal Price :  ₹  1499    /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3A08izc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mB0HUK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/515WE8KlilL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \nPryce1499 \nDicos63 \n\n❌Regular Price  : ₹ 2999  /- 😱"
         }
        ]
       },
       {
        "id": 17706,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623365",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "11999",
        "dicos": "40",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)✅Deal Price :  ₹  11999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@11999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLZsZQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GImHnK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71d5fMDvq9L._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \nPryce11999 \nDicos40 \n\n❌Regular Price  : ₹  18499   /- 😱"
         }
        ]
       },
       {
        "id": 17707,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623393",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2599",
        "dicos": "57",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   WohnWunder Oscillating Tower Fan with 20 Feet Air Delivery, 4 Way Air Flow, High Speed, Anti Rust Body (Color Pink and White)✅Deal Price :  ₹ 2599    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2599"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GKMkUE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GKXmJL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71v7msqDPjL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce2599 \nDicos57 \n\n❌Regular Price  : ₹  4999   /- 😱"
         }
        ]
       },
       {
        "id": 17708,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623442",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong PVC Home Gym Set 10Kg Plate 3Feet Curl Rod and Dumbbells Rods with Gym Accessories, Black✅Deal Price :  ₹  999   /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3muqnCI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNw85n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81f76RWGiYL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce999 \nDicos69 \n\n❌Regular Price  : ₹ 1999   /- 😱"
         }
        ]
       },
       {
        "id": 17709,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623516",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1249",
        "dicos": "58",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong Neoprene Cast Iron Light Heavy Dumbbells Weights Fitness Home Gym Exercise Barbell for Women and Men (Black, 2kg x 2) - Set of 2✅Deal Price :  ₹  1249   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1249"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPFYr1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPFXTZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/5142ws+OZ9L._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce1249 \nDicos58 \n\n❌Regular Price  : ₹  2499  /- 😱"
         }
        ]
       },
       {
        "id": 17710,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623564",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "664",
        "dicos": "40",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   THEODORE Electric 1.8 Litre Mini Cooker Kettle with Glass Lid Base Concealed Base Cooking Pot Noodle Maker Egg Boiler hot Pot Vegetable and Rice & Pasta PorridgeTravel Cookers and Steamer, Blue✅Deal Price :  ₹  651    /- 😱\n Apply ₹15 coupon  🛒 \n\n @664\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2pRFb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N4A6un"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61ioqIPjutL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce664 \nDicos40 \n\n❌Regular Price  : ₹  949  /- 😱"
         }
        ]
       },
       {
        "id": 17711,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623614",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "76",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Yodel 3D6 5.0 Bluetooth Wireless In Ear Earphones With Mic Magnetic With Stereo Sound And Hands Free, Black✅Deal Price :  ₹   279  /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3N4Af0T"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mzRyvR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31D3CdxAtoL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce299 \nDicos76 \n\n❌Regular Price  : ₹  899   /- 😱"
         }
        ]
       },
       {
        "id": 17712,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623664",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "318",
        "dicos": "9",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Surya 6W Moon PRO LED DOWNLIGHTER, Recessed LED Downlight for Ceiling, LED Ceiling Light for Home & Hall, White, Medium, (Pack of 1)✅Deal Price :  ₹  138   /- 😱\n 🛒 \n\n @318\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40h945I"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4dgkW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41vg+RzKloL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce318 \nDicos9 \n\n❌Regular Price  : ₹299    /- 😱"
         }
        ]
       },
       {
        "id": 17713,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623692",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "396",
        "dicos": "60",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wipro Northwest 6A Four-Way Extension Board (White) (NWE0200)✅Deal Price :  ₹  396   /- 😱\n 🛒 \n\n @396\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MHtodr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/408QOvf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/716zM02AhJL._SX425_.jpg"
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
          "text": " & Home Improvement\n\n                Electronics \n                Power Accessories \n                 Extension Cords \nPryce396 \nDicos60 \n\n❌Regular Price  : ₹ 899   /- 😱"
         }
        ]
       },
       {
        "id": 17714,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623719",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "57",
        "dicos": "42",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Tosaa 18 Pcs - 3 Different Size Plastic Food Snack Bag Pouch Clip Sealer Large,Medium,Small Plastic Snack Seal Sealing Bag Clips Vacuum Sealer (Multicolor)✅Deal Price :  ₹  57   /- 😱\n 🛒 \n\n @57\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KG4KqT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMIluJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41IrWG1SPFL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce57 \nDicos42 \n\n❌Regular Price  : ₹99    /- 😱"
         }
        ]
       },
       {
        "id": 17715,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623768",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "102",
        "dicos": "59",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Tosaa Plastic Dieting Airtight Lunch/Tiffin Box Set 3 Compartment Tiffin with Handle & Push Lock for Travelling, School Kids & Office Exclusive,Blue (14 x 12 x 14 cm)✅Deal Price :  ₹ 102    /- 😱\n 🛒 \n\n @102\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407ut13"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KF2Hn1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51g5EUXudTL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce102 \nDicos59 \n\n❌Regular Price  : ₹230    /- 😱"
         }
        ]
       },
       {
        "id": 17716,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623865",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "389",
        "dicos": "51",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PHILIPS Ace Saver 10W B22 LED Bulb,900lm, Cool Day Light, Pack of 4✅Deal Price :  ₹ 389    /- 😱\n 🛒 \n\n @389\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41uFxq7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41AXnYN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51dziVno+mL._SY450_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce389 \nDicos51 \n\n❌Regular Price  : ₹ 799   /- 😱"
         }
        ]
       },
       {
        "id": 17717,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681623962",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "229",
        "dicos": "86",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SAF Set of 5 Buddha UV Textured Home Decorative Gift Item MDF Panel Painting 18 Inch X 42 Inch SANFPNL31195✅Deal Price :  ₹ 209    /- 😱\n 🛒 \n\n @229\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dwp9R"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UHbj1d"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91KCVwTbFjL._SX466_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Artwork \n                 Paintings \nPryce229 \nDicos86 \n\n❌Regular Price  : ₹ 999   /- 😱"
         }
        ]
       },
       {
        "id": 17718,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624010",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cello Quick Boil Primo 1.8 Litre Electric Kettle 1500 Watts, Red✅Deal Price :  ₹  899   /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mAOxLE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KISZjq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61iLJQrqBPL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce899 \nDicos61 \n\n❌Regular Price  : ₹ 2099   /- 😱"
         }
        ]
       },
       {
        "id": 17719,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624086",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "449",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   NIRLON Bullet Vacuum Insulated Flask/Hot and Cold Water Bottle/Double Walled Stainless Steel Bottle for Travel, Home, Office, School, Silver, 1000ml✅Deal Price :  ₹  499   /- 😱\n 🛒 \n\n @449\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41fo8lG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5T2aI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71E5yQPiykL._SY606_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce449 \nDicos69 \n\n❌Regular Price  : ₹ 1099   /- 😱"
         }
        ]
       },
       {
        "id": 17720,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624114",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "296",
        "dicos": "51",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wonderland Foods - Healthy & Roasted Flax Seeds 400g Jar Combo Pack (200g X 2)✅Deal Price :  ₹ 296    /- 😱\n 🛒 \n\n @296\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ol6u19"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40hZnnr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71g8MQRWpvL._SX466_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Nuts & Seeds \nPryce296 \nDicos51 \n\n❌Regular Price  : ₹ 550   /- 😱"
         }
        ]
       },
       {
        "id": 17721,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624210",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "289",
        "dicos": "59",
        "catagory": "Video",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Ant Value Fkbri01 Wired Usb Multi-Device Keyboardâ  (Black)✅Deal Price :  ₹  289   /- 😱\n 🛒 \n\n @289\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A4sX5w"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNfnqH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Q-zPvwzEL._SX569_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Video"
         },
         {
          "type": "plain",
          "text": " Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce289 \nDicos59 \n\n❌Regular Price  : ₹  550  /- 😱"
         }
        ]
       },
       {
        "id": 17722,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624258",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1884",
        "dicos": "71",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLGS930 Manual Ignition, High Efficiency 3 Burner Gas Stove with Toughened Glass Top, ISI Certified, For LPG Use (1 Year Warranty, Doorstep Service, Black)✅Deal Price :  ₹  1884   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1884"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNbBgW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mDpFD2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71M3CqbBboL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                 Gas Stoves \nPryce1884 \nDicos71 \n\n❌Regular Price  : ₹ 4599   /- 😱"
         }
        ]
       },
       {
        "id": 17723,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624307",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "339",
        "dicos": "52",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cello Sapphire | Insulated Inner Steel Casserole | BPA Free | Food Grade | Serving 1500ml, Blue✅Deal Price :  ₹  424   /- 😱\n 🛒 \n\n @339\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GInJ36"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mCGGgF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61ARjVOqugL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce339 \nDicos52 \n\n❌Regular Price  : ₹  610  /- 😱"
         }
        ]
       },
       {
        "id": 17724,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624355",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "217",
        "dicos": "64",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   REALMAN Attract Deodorant, Strong Body Spray for Men, Long Lasting Fragrance, 200ml Each (Pack of 2)✅Deal Price :  ₹  217   /- 😱\n 🛒 \n\n @217\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MGFWBQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMA7mh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71XQS5gy7FL._SX425_PIbundle-2,TopRight,0,0_AA425SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Deodorants & Antiperspirants \nPryce217 \nDicos64 \n\n❌Regular Price  : ₹ 450   /- 😱"
         }
        ]
       },
       {
        "id": 17725,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624526",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1669",
        "dicos": "52",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Larah by Borosil - Tiara Series, Rose Gold, 21 Pcs, Opalware Dinner Set, White✅Deal Price :  ₹  1669   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1669"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MHufuF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KFAdcW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51DwAWq84UL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce1669 \nDicos52 \n\n❌Regular Price  : ₹2799    /- 😱"
         }
        ]
       },
       {
        "id": 17726,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624554",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "83",
        "dicos": "44",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Danima Celebration Choco Chip Cookies • Original Danish Recipe, Gift Box,10.5 oz / 300 g✅Deal Price :  ₹  83   /- 😱\n 🛒 \n\n @83\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43zYklT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mHNlWL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61RlYe0-qQL._SX466_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Snacks & Sweets \n                Snack Foods \nPryce83 \nDicos44 \n\n❌Regular Price  : ₹ 150   /- 😱"
         }
        ]
       },
       {
        "id": 17727,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624650",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "310",
        "dicos": "52",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Revlon Orofluido Asia ZEN Control Shampoo 200ml✅Deal Price :  ₹ 310    /- 😱\n 🛒 \n\n @310\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43BYI35"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Cjj7x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71rkv5m1cBL._SY679_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Shampoo & Conditioner \nPryce310 \nDicos52 \n\n❌Regular Price  : ₹ 599   /- 😱"
         }
        ]
       },
       {
        "id": 17728,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624699",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "70",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Fashion String Polyester 2 Pieces Door Curtain Set, 7 Feet Long, Brown (Eyelet, String, Washable)✅Deal Price :  ₹  299   /- 😱\n 🛒 \n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41vm0G7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mHNx8r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81wBRjeS9IL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Curtains & Accessories \nPryce299 \nDicos70 \n\n❌Regular Price  : ₹ 799  /- 😱"
         }
        ]
       },
       {
        "id": 17729,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624755",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1530",
        "dicos": "45",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Polycab Zoomer High Speed 1200 mm 1 star rating Ceiling Fan (Luster Brown)✅Deal Price :  ₹ 1530    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1530"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UUs1u9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UIPcqX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51oyr8tFelL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce1530 \nDicos45 \n\n❌Regular Price  : ₹ 2369   /- 😱"
         }
        ]
       },
       {
        "id": 17730,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624851",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1299",
        "dicos": "62",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Safari ARC Polyester 55 cms Blue Travel Duffle (ARC55RLBLU)✅Deal Price :  ₹ 1299    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1299"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43FoH9V"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41ypFmr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91vQqZNMKCL._SY879_.jpg"
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
          "text": " & Kitchen\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Travel Duffles \nPryce1299 \nDicos62 \n\n❌Regular Price  : ₹  2499  /- 😱"
         }
        ]
       },
       {
        "id": 17731,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681624970",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "139",
        "dicos": "44",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Colorbar Colorbar Luxe Nail Lacquer, Peacock Blue 105, 12ml✅Deal Price :  ₹  139   /- 😱\n 🛒 \n\n @139\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40cV6Sj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A45EIO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61ECnc6ulcL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Manicure & Pedicure \n                Nails \nPryce139 \nDicos44 \n\n❌Regular Price  : ₹ 250   /- 😱"
         }
        ]
       },
       {
        "id": 17732,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625019",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "142",
        "dicos": "56",
        "catagory": "Baby",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   OYO BABY Waterproof Quick Dry Sheet for Baby | Extra Absorbent Quick Dry Sheet for Baby, Baby Bed Protector, Waterproof Baby Sheet, Washable Mattress Protector - Medium, 100 x 70cm (Red)✅Deal Price :  ₹ 142    /- 😱\n 🛒 \n\n @142\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3odvYO6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMA6i9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/7145uYCQQWL._SX355_.jpg"
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
          "text": "\n\n                Baby \n                Bedding, Furniture & Room Décor \n                Bedding \nPryce142 \nDicos56 \n\n❌Regular Price  : ₹ 299   /- 😱"
         }
        ]
       },
       {
        "id": 17733,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625068",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1399",
        "dicos": "77",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Maxima New Samurai Smartwatch 1.85\", 1st Time Call Accept Feature, Hindi Language Support, 600Nits Brightness, Longer Battery, in-App GPS,100+ Watch Faces, Multisport Modes,HR/SpO2 (Gold Black)✅Deal Price :  ₹  1399   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mDqgEM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A45Wzo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41tuHDo+miL._SY300_SX300_.jpg"
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
          "text": "\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1399 \nDicos77 \n\n❌Regular Price  : ₹ 2999   /- 😱"
         }
        ]
       },
       {
        "id": 17734,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625117",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1579",
        "dicos": "71",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Solimo Stainless Steel Dinner Set of 42 Pieces | Mirror Finish I Bhojan Thali Set I Dinnerware Set for Kitchen I Dishwasher Safe✅Deal Price :  ₹ 1579    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1579"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40gIn0W"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MLHURi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71nHZVd0+LL._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce1579 \nDicos71 \n\n❌Regular Price  : ₹ 3999   /- 😱"
         }
        ]
       },
       {
        "id": 17735,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625164",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "649",
        "dicos": "47",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   CHONCHOW Wired Headphone with Mic for Kids Birthday Gift, Lightweight Cat Ear Children Earphone with 40mm Driver, for iPad, Tablet, Kindle/Airplane,School, Online Class, Music, Game (Blue)✅Deal Price :  ₹ 649    /- 😱\n 🛒 \n\n @649\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KF40lV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A1YFQF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/5189STadYLL._SX425_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Audio & Video Accessories \nPryce649 \nDicos47 \n\n❌Regular Price  : ₹ 1199   /- 😱"
         }
        ]
       },
       {
        "id": 17736,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625213",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "220",
        "dicos": "69",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lakmé Absolute Matte Melt Liquid Lip Color, Blushing Brink, 6 ml✅Deal Price :  ₹220     /- 😱\n 🛒 \n\n @220\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UCmpV9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UIN9U2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41KRrfNQpUL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Make-up \n                Lips \nPryce220 \nDicos69 \n\n❌Regular Price  : ₹ 650   /- 😱"
         }
        ]
       },
       {
        "id": 17737,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625334",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "275",
        "dicos": "69",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Palmolive Hydrating Range with Beauty Pouch | Gel Facewash 100 ml and Face Masque 100 ml combo, with 100% natural unique blend of Multani Mitti and Lavender Essential Oil - Suitable for All Skin Types✅Deal Price :  ₹  275   /- 😱\n 🛒 \n\n @275\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41hJ9Mz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DEiXu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/512UVx8aVML._SX425_PIbundle-3,TopRight,0,0_AA425SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce275 \nDicos69 \n\n❌Regular Price  : ₹ 799   /- 😱"
         }
        ]
       },
       {
        "id": 17738,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625382",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "67",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bluoilz Aloe Neem Body Wash, 300 ml | Prepared with Aloe Vera & Neem | Removes Impurities & Purifies Skin | All Natural Ingredients✅Deal Price :  ₹ 199    /- 😱\n 🛒 \n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMzEgm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GIgqYT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51BhA-kRoqL._SX425_PIbundle-50,TopRight,0,0_AA425SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Cleansers \nPryce199 \nDicos67 \n\n❌Regular Price  : ₹ 450   /- 😱"
         }
        ]
       },
       {
        "id": 17739,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625501",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "219",
        "dicos": "63",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   LILA DRY FRUITS Natural Premium Dry Fruits Mix(Cashew, Almonds, Figs, Walnut 8 pcs, Black and Golden Raisins) 250g Jar Pack | Badam Giri, Kaju, Black & Golden Kishmish, Anjeer, Akhrot✅Deal Price :  ₹ 219    /- 😱\n 🛒 \n\n @219\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ky3JB2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/419SGp5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61FrFdrO67L._SX466_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Dried Fruits \nPryce219 \nDicos63 \n\n❌Regular Price  : ₹ 450  /- 😱"
         }
        ]
       },
       {
        "id": 17740,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625598",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4121",
        "dicos": "48",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon By Stovekraft Oven Toaster Grill (12624) 30 Liters Otg With Rotisserie, Oven Toaster And Grill For Grilling And Baking Cakes (Grey), Standard✅Deal Price :  ₹ 4121    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4121"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFQ2bC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ofV8f3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51SHRLSCS0L._SY355_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce4121 \nDicos48 \n\n❌Regular Price  : ₹ 6999   /- 😱"
         }
        ]
       },
       {
        "id": 17741,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625646",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "170",
        "dicos": "81",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   AMFIN® ( Pack of 4 2.5 x 6 Feet Rose Gold Metallic Fringe Curtain for Wedding , 1st Birthday , Engagement Baby Shower , Anniversary , Office Party , Diwali Decorations✅Deal Price :  ₹ 170    /- 😱\n 🛒 \n\n @170\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFbJs4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mABNVh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81ZUYamWyIL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Toys & Games \n                Party Supplies \n                Decorations \nPryce170 \nDicos81 \n\n❌Regular Price  : ₹  650  /- 😱"
         }
        ]
       },
       {
        "id": 17742,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625694",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "55",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Portronics Bubble Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size, Shortcut Keys Function(Black)✅Deal Price :  ₹  899   /- 😱\n 🛒 \n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMw1e4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMTSqc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51r3E7G78VL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce899 \nDicos55 \n\n❌Regular Price  : ₹ 1699   /- 😱"
         }
        ]
       },
       {
        "id": 17743,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625743",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "576",
        "dicos": "27",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Milton Hamper Laundry/Toy Organizer Basket, 35 litres, Grey✅Deal Price :  ₹576     /- 😱\n 🛒 \n\n @576\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ol8jv1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L3998B"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71qXXR7arAL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Laundry Organization \nPryce576 \nDicos27 \n\n❌Regular Price  : ₹ 750   /- 😱"
         }
        ]
       },
       {
        "id": 17744,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625791",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "141",
        "dicos": "64",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Heart Home Checkered Design Cotton 4 Seater Center Table Cover 60\"x40\"(Maroon) - CTHH6971,Standard✅Deal Price :  ₹ 141    /- 😱\n 🛒 \n\n @141\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41w2dq1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DxARy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/7122HfZ0U1L._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Kitchen Linens \nPryce141 \nDicos64 \n\n❌Regular Price  : ₹  350  /- 😱"
         }
        ]
       },
       {
        "id": 17745,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625839",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2467",
        "dicos": "62",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLMG756 750 Watt Juicer Mixer Grinder, 5 Jars for Grinding, Mixing, and Juice at home , Juicer with Fruit Filter, Chutney/Masala Storage Jar (1 Year Warranty, Black)✅Deal Price :  ₹ 2477    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2467"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ky4ha4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L1iA8C"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Wix6EBOYL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce2467 \nDicos62 \n\n❌Regular Price  : ₹ 5599   /- 😱"
         }
        ]
       },
       {
        "id": 17746,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625907",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "489",
        "dicos": "45",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon Ivory 1000W Dry Iron✅Deal Price :  ₹ 489    /- 😱\n 🛒 \n\n @489\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43tkdDg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41uhDLE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41psIgdZkCL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \nPryce489 \nDicos45 \n\n❌Regular Price  : ₹ 799   /- 😱"
         }
        ]
       },
       {
        "id": 17747,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681625954",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "63",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Beurer Professional Foldable 1600 Watts Hair Dryer With 2 Ultra Heat & Speed Settings, Pink Limited Edition (3 Years Warranty)✅Deal Price :  ₹ 956    /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41yreAP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2OhhX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/315Ma9ox+LL._SY300_SX300_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce999 \nDicos63 \n\n❌Regular Price  : ₹  1999  /- 😱"
         }
        ]
       },
       {
        "id": 17748,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626002",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1898",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Orient Electric Aura Neo 3L Instant Water Heater (Geyser), 5-Level Safety Shield, Suitable For High Rise Buildings, Stainless Steel Tank (White & Turquoise), Wall Mounting✅Deal Price :  ₹ 1898    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1898"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ldu4Gt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41aQlKw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/612KMt5Qz1L._SY550_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Water Heaters & Geysers \nPryce1898 \nDicos61 \n\n❌Regular Price  : ₹  3599  /- 😱"
         }
        ]
       },
       {
        "id": 17749,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626050",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1848",
        "dicos": "42",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon by Stovekraft Classic Lite Mixer Grinder with 550W motor and 2 Stainless Steel Jars (Ivory)✅Deal Price :  ₹ 1848    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1848"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UEERfG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dtbD1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41c3ns1nvFL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1848 \nDicos42 \n\n❌Regular Price  : ₹  3099  /- 😱"
         }
        ]
       },
       {
        "id": 17750,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626078",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "449",
        "dicos": "85",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Furniture Cafe® Wooden Wall Shelves for Living Room | Wall Shelf for Home Decor Items | Floating Book Rack for Study Room, Office (3Tiers | Size- Standard | Colour- Teak Natural)✅Deal Price :  ₹ 449    /- 😱\n 🛒 \n\n @449\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLAgCG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GLA5Y2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71Kg7mN2wdL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Furniture \n                Living Room Furniture \nPryce449 \nDicos85 \n\n❌Regular Price  : ₹ 1499   /- 😱"
         }
        ]
       },
       {
        "id": 17751,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626202",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "75",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong PVC Home Gym Set 10Kg Plate 3Feet Curl Rod and Dumbbells Rods with Gym Accessories, Black✅Deal Price :  ₹  799   /- 😱\n 🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40sg3ZT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43vqH4J"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91Wbp8-3mIS._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce799 \nDicos75 \n\n❌Regular Price  : ₹ 1899   /- 😱"
         }
        ]
       },
       {
        "id": 17752,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626250",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "50",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Boldfit Wrist Supporter for Gym Wrist Band for Men Gym & Women with Thumb Loop Straps - Wrist Wrap Gym Accessories for Men Hand Grip & Wrist Support Sports Straps for Gym✅Deal Price :  ₹  149   /- 😱\n 🛒 \n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A3b9rq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41dPLeO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71efZuOyE2L._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce199 \nDicos50 \n\n❌Regular Price  : ₹  370  /- 😱"
         }
        ]
       },
       {
        "id": 17753,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626349",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2961",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   INALSA Vacuum Cleaner Easy CLEAN-1200W|Blower|2L Washable Cloth Filter Bag|100% Copper Motor|Powerful 18KPA Suction|Easy Carry Handle,Dust Bag Full Indicator,Automatic Cord Winder,(Red/Black)✅Deal Price :  ₹ 2961    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2961"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AGVcI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43yLX9I"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41NGpBW8LmL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \nPryce2961 \nDicos50 \n\n❌Regular Price  : ₹ 4999   /- 😱"
         }
        ]
       },
       {
        "id": 17754,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626423",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "287",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀  Wonder Plastic Vijay Jug Set, 2 pc jug 2 LTR, Green Color, Made in India, KBS01180 ✅Deal Price :  ₹  287   /- 😱\n 🛒 \n\n @287\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Ef4s4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UBAP81"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Fgdpg+AEL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce287 \nDicos50 \n\n❌Regular Price  : ₹ 550  /- 😱"
         }
        ]
       },
       {
        "id": 17755,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626519",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "217",
        "dicos": "50",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Revlon Colorsilk Beautiful Color, Permanent Hair Color with Keratin, 40ml + 40ml + 11.8ml - Brown Black 2N (Pack of 1)✅Deal Price :  ₹  217   /- 😱\n 🛒 \n\n @217\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/419kQjO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NbKv0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71i-MeCDeOL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Hair Color \nPryce217 \nDicos50 \n\n❌Regular Price  : ₹410    /- 😱"
         }
        ]
       },
       {
        "id": 17756,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626569",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "289",
        "dicos": "81",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Symactive Cast Iron Kettlebell, 2 Kg✅Deal Price :  ₹  289   /- 😱\n 🛒 \n\n @289\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GL15XL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4g55F"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41azbVekZpL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce289 \nDicos81 \n\n❌Regular Price  : ₹ 999   /- 😱"
         }
        ]
       },
       {
        "id": 17757,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626618",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1049",
        "dicos": "65",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Candes Hector Nutri Blender Complete Kitchen Machine, 22000 RPM Mixer Grinder, Blender, Chopper, Juicer, Stainless Steel Blades, 2 Unbreakable Jars, 1 Years Warranty | 400-Watts (Ivory)✅Deal Price :  ₹  1049   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1049"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojvVQG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UHVMhG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61A4TXkPCpL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1049 \nDicos65 \n\n❌Regular Price  : ₹ 2099   /- 😱"
         }
        ]
       },
       {
        "id": 17758,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626667",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "359",
        "dicos": "52",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   The Man Company Night Perfume for Men - 50ml | Premium Long Lasting Fragrance | Citrusy, Exotic & Woody | Gift For Men | Date Night Body Spray✅Deal Price :  ₹ 359    /- 😱\n 🛒 \n\n @359\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojKy6A"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFcPUI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/515msrbUuyL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Fragrance \n                 Eau de Parfum \nPryce359 \nDicos52 \n\n❌Regular Price  : ₹ 650   /- 😱"
         }
        ]
       },
       {
        "id": 17759,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626696",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1733",
        "dicos": "53",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Hindware Snowcrest Jubilo Metallic 1200mm Designer 3 Blade Ceiling Fan with Premium Metallic Finish, Dust Resistant Aerodynamic Blades For Even Air Distribution (Mocha Brown)✅Deal Price :  ₹ 1733    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1733"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DSXSu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43C1pBJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41nBkWfDpcL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce1733 \nDicos53 \n\n❌Regular Price  : ₹ 3099   /- 😱"
         }
        ]
       },
       {
        "id": 17760,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626725",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1164",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLHB921 300 W Hand Blender Machine for Kitchen with Stainless Steel Blade| Food Mixer, Purees, Smoothies, Shakes, Sauces & Soups | 1 Year Warranty (ISI Certified, White)✅Deal Price :  ₹  1164   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1164"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43FrSyn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KxShFK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31mWsNxfMEL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1164 \nDicos61 \n\n❌Regular Price  : ₹ 2499   /- 😱"
         }
        ]
       },
       {
        "id": 17761,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626753",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "243",
        "dicos": "59",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Kuber Industries Polyester 12 Pieces Curtain Tie Back Tassel Set (Black) -CTKTC029392✅Deal Price :  ₹ 248    /- 😱\n 🛒 \n\n @243\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A7v7Ry"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFRryU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81k8D3bBrNL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Curtains & Accessories \nPryce243 \nDicos59 \n\n❌Regular Price  : ₹ 550   /- 😱"
         }
        ]
       },
       {
        "id": 17762,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626782",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1299",
        "dicos": "35",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ZEBRONICS Zeb-Duke Bluetooth Wireless Over Ear Headphone with Mic (Black)✅Deal Price :  ₹  1299   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1299"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L129t6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ky5caw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71p1qpkQy4L._SX425_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1299 \nDicos35 \n\n❌Regular Price  : ₹ 1799   /- 😱"
         }
        ]
       },
       {
        "id": 17763,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626832",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2769",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Polycab Aereo plus 1200 mm High Speed 1 Star Rated 52 Watt Ceiling Fan with Rust-Proof Aluminium Blades and 3 years warranty (Cool Grey Silver)✅Deal Price :  ₹  2769   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2769"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOYvjn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4g9SX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51dlubiOFhL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce2769 \nDicos50 \n\n❌Regular Price  : ₹ 4999   /- 😱"
         }
        ]
       },
       {
        "id": 17764,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626860",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "499",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SENMAXU SMX-208 Dual Port Car Charger with 3 in 1 Cable Micro USB, Type C, V8 Cable (White)✅Deal Price :  ₹ 499    /- 😱\n 🛒 \n\n @499\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIJ3GP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KIJ3GP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41UEfIbyT3L._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Mobile Accessories \nPryce499 \nDicos50 \n\n❌Regular Price  : ₹899    /- 😱"
         }
        ]
       },
       {
        "id": 17765,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626886",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "87",
        "dicos": "71",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   wipro 0.5W LED Lamp, Pack of 3, (N10003)✅Deal Price :  ₹ 87    /- 😱\n 🛒 \n\n @87\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A8L4XH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MGJ6pc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71788nlp2uL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce87 \nDicos71 \n\n❌Regular Price  : ₹250   /- 😱"
         }
        ]
       },
       {
        "id": 17766,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626936",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4819",
        "dicos": "68",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Shri & Sam Stainless Steel Shagun Dinner Set (101 Pcs Set)✅Deal Price :  ₹ 3856    /- 😱\n Apply 20% coupon  🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4819"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L57KyG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A0gU9a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61VsQQAbOlL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce4819 \nDicos68 \n\n❌Regular Price  : ₹  8999   /- 😱"
         }
        ]
       },
       {
        "id": 17767,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681626984",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1297",
        "dicos": "57",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLCMK01 Caffe Drip 5 cup Coffee Maker| Water Level Indicator| 600W|Borosilicate glass 750ml Carafe jar| Detachable Coffee Filter, (Black)✅Deal Price :  ₹   1297   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1297"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5He8l"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNiWgz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71KJ0ndMc4L._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Coffee, Tea & Espresso \nPryce1297 \nDicos57 \n\n❌Regular Price  : ₹   2499  /- 😱"
         }
        ]
       },
       {
        "id": 17768,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627126",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "100",
        "dicos": "83",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   NO APOLOGY Apple Cider Vinegar Shampoo With Silk Protein & Vit. E |Natural Shampoo|Dermatologically Tested|FDA Approved|Anti Dandruff & for Hair Shine-300 ml✅Deal Price :  ₹   100  /- 😱\n 🛒 \n\n @100\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4072hLW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L0RMp9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41lWIhoBRwL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                Shampoo & Conditioner \nPryce100 \nDicos83 \n\n❌Regular Price  : ₹   575 /- 😱"
         }
        ]
       },
       {
        "id": 17769,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627174",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "65",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ENVIKLEAN Bathroom Cleaning Brush with Wiper 2 in 1 Tiles Cleaning Brush Floor Scrub Bathroom Brush with Long Handle Squeegee Floor Scrubber Brush Home Kitchen Bathroom Window Cleaning Accessories.✅Deal Price :  ₹  649   /- 😱\n Apply ₹50 coupon  🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MHxGl3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L52g6I"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71ZnI6wUIhL._SY355_.jpg"
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
          "text": " & Home Improvement\n\n                Home Improvement \n                Cleaning Supplies \n                 Brushes \nPryce699 \nDicos65 \n\n❌Regular Price  : ₹  1299   /- 😱"
         }
        ]
       },
       {
        "id": 17770,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627223",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4990",
        "dicos": "69",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Upto 21 Hours Playtime, Mystic Black✅Deal Price :  ₹  4909   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@4990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mzVDQH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41yUVSi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61G5JoU9tTL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce4990 \nDicos69 \n\n❌Regular Price  : ₹  8999   /- 😱"
         }
        ]
       },
       {
        "id": 17771,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627272",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2961",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   INALSA Vacuum Cleaner Easy CLEAN-1200W|Blower|2L Washable Cloth Filter Bag|100% Copper Motor|Powerful 18KPA Suction|Easy Carry Handle,Dust Bag Full Indicator,Automatic Cord Winder,(Red/Black)✅Deal Price :  ₹  2961   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2961"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3o7wbCk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3o8ApcS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61tH1osluML._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \nPryce2961 \nDicos50 \n\n❌Regular Price  : ₹  4499  /- 😱"
         }
        ]
       },
       {
        "id": 17772,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627345",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "37490",
        "dicos": "32",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Godrej 1.5 Ton 5 Star, 5-in-1 Convertible Cooling, Inverter Split AC (Copper, Heavy Duty Cooling At 52°C, Anti-dust Filter, 2023 Model, EI 18IINV5R32 WWR, White)✅Deal Price :  ₹  36490   /- 😱Apply\n ₹1000 coupon  🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@37490"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/417UJK6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mHRcTJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51B6MycF8EL._SX342_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Conditioners \nPryce37490 \nDicos32 \n\n❌Regular Price  : ₹  49999   /- 😱"
         }
        ]
       },
       {
        "id": 17773,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627416",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "58",
        "catagory": "Video",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cosmic Byte H3 Gaming Headphone with Mic for PC, Laptops, Mobiles, PS4, Xbox One (Red)✅Deal Price :  ₹  600   /- 😱\n Apply 25% coupon  🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KJ5vzH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KE0ZT2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/416j8vmoWvL.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Video"
         },
         {
          "type": "plain",
          "text": " Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \nPryce799 \nDicos58 \n\n❌Regular Price  : ₹  1499  /- 😱"
         }
        ]
       },
       {
        "id": 17774,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627465",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "63",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Mivi Roam 2 Bluetooth 5W Portable Speaker,24 Hours Playtime,Powerful Bass, Wireless Stereo Speaker with Studio Quality Sound,Waterproof, Bluetooth 5.0 and in-Built Mic with Voice Assistance-Black✅Deal Price :  ₹  999    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UDpvrK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ldva53"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/512SMIvhtPL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \nPryce1099 \nDicos63 \n\n❌Regular Price  : ₹  1999   /- 😱"
         }
        ]
       },
       {
        "id": 17775,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627512",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "63",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Beurer Professional Foldable 1600 Watts Hair Dryer With 2 Ultra Heat & Speed Settings, Pink Limited Edition (3 Years Warranty)✅Deal Price :  ₹  999     /- 😱\n 🛒 \n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KH1Bal"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UDlROG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41yw6IvR1IL._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce999 \nDicos63 \n\n❌Regular Price  : ₹ 1999   /- 😱"
         }
        ]
       },
       {
        "id": 17776,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627559",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "359",
        "dicos": "52",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   The Man Company Night Perfume for Men - 50ml | Premium Long Lasting Fragrance | Citrusy, Exotic & Woody | Gift For Men | Date Night Body Spray✅Deal Price :  ₹  359  /- 😱\n 🛒 \n\n @359\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UBBlCZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KDjMhb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/515msrbUuyL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Fragrance \n                 Eau de Parfum \nPryce359 \nDicos52 \n\n❌Regular Price  : ₹  749   /- 😱"
         }
        ]
       },
       {
        "id": 17777,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627606",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "203",
        "dicos": "63",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Coco Soul Hair Mask for Long, Strong & Black Hair with 100% Cold Pressed Virgin Coconut Oil | Mahabhringraj Tailam | Amla & Sesame | Sulphate & Paraben Free | From the Makers of Parachute Advansed | 160ml✅Deal Price :  ₹  203   /- 😱\n 🛒 \n\n @203\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41hLzL9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43z0FgS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61In-ZpJsWL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Hair Care \n                 Hair Masks & Packs \nPryce203 \nDicos63 \n\n❌Regular Price  : ₹  549  /- 😱"
         }
        ]
       },
       {
        "id": 17778,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627654",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "41",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Odonil Aerosol Spray (Pack of 2), Citrus Fresh 220ml+Ocean Breeze 220ml✅Deal Price :  ₹  199   /- 😱\n 🛒 \n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NcvUS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A3mJ5M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71hE7kfUlVL._SY355_PIbundle-2,TopRight,0,0_AA355SH20_.jpg"
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
          "text": " & Personal Care\n\n                Home & Kitchen \n                Home & Décor \n                Home Fragrance \nPryce199 \nDicos41 \n\n❌Regular Price  : ₹  338   /- 😱"
         }
        ]
       },
       {
        "id": 17779,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627702",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1848",
        "dicos": "42",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon by Stovekraft Classic Lite Mixer Grinder with 550W motor and 2 Stainless Steel Jars (Ivory)✅Deal Price :  ₹  1848    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1848"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zZtFki"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGK9Hr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41c3ns1nvFL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1848 \nDicos42 \n\n❌Regular Price  : ₹  2699   /- 😱"
         }
        ]
       },
       {
        "id": 17780,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627819",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "87",
        "dicos": "71",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   wipro 0.5W LED Lamp, Pack of 3, (N10003)✅Deal Price :  ₹  87    /- 😱\n 🛒 \n\n @87\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mB56qK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOHVQJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71788nlp2uL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce87 \nDicos71 \n\n❌Regular Price  : ₹  300   /- 😱"
         }
        ]
       },
       {
        "id": 17781,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627866",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "83",
        "dicos": "72",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   wipro Glass Safe lite N10005 B22 0.5-Watt LED Night Lamp (Green) - Pack of 3✅Deal Price :  ₹  83   /- 😱\n 🛒 \n\n @83\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mB59mq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40eKhiy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/7143zCwS2OL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce83 \nDicos72 \n\n❌Regular Price  : ₹  300  /- 😱"
         }
        ]
       },
       {
        "id": 17782,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681627960",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "75",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong PVC Home Gym Set 10Kg Plate 3Feet Curl Rod and Dumbbells Rods with Gym Accessories, Black✅Deal Price :  ₹  799    /- 😱\n 🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GN1h8U"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2JB5p"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91Wbp8-3mIS._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce799 \nDicos75 \n\n❌Regular Price  : ₹  2499   /- 😱"
         }
        ]
       },
       {
        "id": 17783,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628009",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "9159",
        "dicos": "20",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   DSC Condor Glider Grade 2 English Willow Cricket Bat ( Size: 5, Ball_ type : Leather Ball, Playing Style : All-Round )✅Deal Price :  ₹  9159   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@9159"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFO4rF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPKMg3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51nBCyrBYmL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Cricket \n                Bats \nPryce9159 \nDicos20 \n\n❌Regular Price  : ₹  10499   /- 😱"
         }
        ]
       },
       {
        "id": 17784,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628148",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "500",
        "dicos": "76",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ExclusiveLane 'Moroccan Paradise' Hand-Etched Iron Wall Pendant Light for Living Room & Ceiling Hanging Lights for Home Decoration (Without Bulb) (8 Inch, Matte Finish)✅Deal Price :  ₹  500   /- 😱\n 🛒 \n\n @500\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40byQIC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MIz32Z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61KvG5208aL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Ceiling Lighting \nPryce500 \nDicos76 \n\n❌Regular Price  : ₹  1499   /- 😱"
         }
        ]
       },
       {
        "id": 17785,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628265",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "345",
        "dicos": "31",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   glowious Combo Pack of 5 (Sandalwood, Kasturi Turmeric, Lemon Peel, Amla & Hibiscus Powder) 250gms(50gX5)✅Deal Price :  ₹  345   /- 😱\n 🛒 \n\n @345\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40aDNS4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tiZpQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81t-2MjAoFL._SX425_PIbundle-5,TopRight,0,0_AA425SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce345 \nDicos31 \n\n❌Regular Price  : ₹  499  /- 😱"
         }
        ]
       },
       {
        "id": 17786,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628314",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "281",
        "dicos": "51",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lotus Makeup Proedit Lip Plumper Toasted Almond Lp11, Toasted Almond, 8 ml✅Deal Price :  ₹  281   /- 😱\n 🛒 \n\n @281\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41B1FPT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43A3a2x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Mg27hLQzL._SY355_.jpg"
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
          "text": "\n\n                Beauty \n                Make-up \n                Lips \nPryce281 \nDicos51 \n\n❌Regular Price  : ₹  575   /- 😱"
         }
        ]
       },
       {
        "id": 17787,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628458",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2099",
        "dicos": "65",
        "catagory": "Tools",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀  One94Store Portable Air Conditioner Fan, 500 ml Water Tank USB Personal Cooler, Mini Humidifier Fan with 7 Colors LED Light, 3 Timer, 3 Wind Speeds, 3 Spray Modes for Office, Home (White Pack of 1) ✅Deal Price :  ₹  1898   /- 😱\n Apply ₹201 coupon  🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2099"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UGqbwv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UBBNRH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61g0ar-vuiL._SX425_.jpg"
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
          "text": " & Home Improvement\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce2099 \nDicos65 \n\n❌Regular Price  : ₹ 3999    /- 😱"
         }
        ]
       },
       {
        "id": 17788,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628506",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "59",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SWAPKART Spiral Charger Cable Protector Data Cable Saver Charging Cord Protective Cable Cover Headphone MacBook Laptop Earphone Cell Phone Set of 3 (Cable Protector (12 Units))✅Deal Price :  ₹   59  /- 😱\n 🛒 \n\n @59\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41fe9No"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3obJm5j"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61efk5VJorL._SX466_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \nPryce59 \nDicos80 \n\n❌Regular Price  : ₹  299  /- 😱"
         }
        ]
       },
       {
        "id": 17789,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628557",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zebronics Zeb-Bang Bluetooth Wireless Over Ear Headphones with Mic (Orange)✅Deal Price :  ₹ 699    /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UEHfDa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L1exJE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Ti-gFK4fL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce699 \nDicos50 \n\n❌Regular Price  : ₹  1299  /- 😱"
         }
        ]
       },
       {
        "id": 17790,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628605",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "72",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PTron Bassbuds Plus in Ear True Wireless Stereo Earbuds with Mic, Deep Bass Bluetooth Headphones, Voice Assistance, IPX4 Sweat & Water Resistant TWS, 12Hrs Battery & Fast Charge (Red & Black)✅Deal Price :  ₹  699    /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L4hrNN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5IgkJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61JVcCzQ0hL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce699 \nDicos72 \n\n❌Regular Price  : ₹  1999   /- 😱"
         }
        ]
       },
       {
        "id": 17791,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628655",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "160",
        "dicos": "78",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ExclusiveLane 'Daawat-e-Taj' Handcrafted Ceramic Kullad Set of 2 (200 ml, Microwave Safe, Dishwasher Safe) - Ceramic Tea Cup Chai Tea Kullad Set Kulhad Cup Coffee Mug✅Deal Price :  ₹  160     /- 😱\n 🛒 \n\n @160\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GM43v4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KHzmbr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71Bxpj2yzhS._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce160 \nDicos78 \n\n❌Regular Price  : ₹   499   /- 😱"
         }
        ]
       },
       {
        "id": 17792,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628702",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "391",
        "dicos": "70",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Attro SKY Lexus Celebration 6 Pcs Storage Container Set for Kitchen (2100 ml x 6 PcS),(Grey)✅Deal Price :  ₹  391   /- 😱\n 🛒 \n\n @391\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOZu33"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41d70Nl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51WfXWKBSMS._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce391 \nDicos70 \n\n❌Regular Price  : ₹ 1099    /- 😱"
         }
        ]
       },
       {
        "id": 17793,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628893",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "135",
        "dicos": "81",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SYSKA 9W B22D Led Cool Day Light Bulb, Pack Of 2 (Ssk-Srl)✅Deal Price :  ₹ 135    /- 😱\n 🛒 \n\n @135\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMEUEh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mwdSqd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/716F-aiWrpL._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce135 \nDicos81 \n\n❌Regular Price  : ₹ 499   /- 😱"
         }
        ]
       },
       {
        "id": 17794,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628942",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "398",
        "dicos": "80",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HP w100 480P 30 FPS Digital Webcam with Built-in Mic, Plug and Play Setup, Wide-Angle View for Video Calling on Skype, Zoom, Microsoft Teams and Other Apps (Black)✅Deal Price :  ₹  398   /- 😱\n 🛒 \n\n @398\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mD7VaY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQcmd4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61HfJn05shL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Audio & Video Accessories \nPryce398 \nDicos80 \n\n❌Regular Price  : ₹ 1199   /- 😱"
         }
        ]
       },
       {
        "id": 17795,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681628989",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3999",
        "dicos": "75",
        "catagory": "Luggage",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Solimo Set of 2 (55 cm + 75 cm) Black Hardsided Trolley✅Deal Price :  ₹  3999   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40i4eVH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MHyXIR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/814hKclvSeL._SY550_.jpg"
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
          "text": " & Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Luggage Sets \nPryce3999 \nDicos75 \n\n❌Regular Price  : ₹9999    /- 😱"
         }
        ]
       },
       {
        "id": 17796,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629038",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "73",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   BMS Lifestyle Akoya Classic Insulated Inner Stainless Steel Casserole, Set of 3 (500ml, 1000ml, 1500ml) Food Grade I BPA Free I Easy to Store I Ideal for Chapatti I Roti/Curry (White)✅Deal Price :  ₹  799   /- 😱\n 🛒 \n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40blL1N"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3olb4fR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/615piCVLhtL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \nPryce799 \nDicos73 \n\n❌Regular Price  : ₹  1899  /- 😱"
         }
        ]
       },
       {
        "id": 17797,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629132",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "880",
        "dicos": "56",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Symphony Solaris Quartz 800W Room Heater for Home with ISI Certified 2 Quartz Heating Tubes and Energy Efficient Heating ( Grey & Black)✅Deal Price :  ₹  880   /- 😱\n 🛒 \n\n @880\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mKkKjD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/407z2bH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61TdtREyj8L._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Room Heaters \nPryce880 \nDicos56 \n\n❌Regular Price  : ₹ 1499   /- 😱"
         }
        ]
       },
       {
        "id": 17798,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629180",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1560",
        "dicos": "61",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Echt RC 5s Mixer Grinder 550 Watt, 3 Stainless Steel Jars,Wet Jar (1500 ml), Multipurpose Jar (1000 ml), Chutney Jar (300 ml); with 3 Speed Control, with 2 years warranty, Green✅Deal Price :  ₹  1560   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1560"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojxyhg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KxTYmA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61fYokCiDVL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce1560 \nDicos61 \n\n❌Regular Price  : ₹ 2799   /- 😱"
         }
        ]
       },
       {
        "id": 17799,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629274",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2009",
        "dicos": "69",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Wonderchef Health-Gear Prato Anti-Viral UVC Oven 9 litres✅Deal Price :  ₹   2009  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2009"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43EOgbp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L5ekFp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61N55mleRyL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce2009 \nDicos69 \n\n❌Regular Price  : ₹  4999  /- 😱"
         }
        ]
       },
       {
        "id": 17800,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629322",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3079",
        "dicos": "66",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Pigeon by Stovekraft Infinity LPG Gas Stove 2 Burner Auto Ignition with Brass Burner, Stainless Steel Body, 8 mm Toughened Glass Cooktop for Easy Cleaning - Black✅Deal Price :  ₹   3079  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3079"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3of8rMS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oiYPRe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51Y8DlETIzL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce3079 \nDicos66 \n\n❌Regular Price  : ₹ 6999   /- 😱"
         }
        ]
       },
       {
        "id": 17801,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629394",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2899",
        "dicos": "43",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   LUMINOUS Triana 1200MM 2 Star BEE Certified Energy Efficient 50-Watt High-Speed Ceiling Fan For Home and Office (Black)✅Deal Price :  ₹  2899   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2899"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41xcl1P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41w3tcR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51rWdA7Wd+L._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \nPryce2899 \nDicos43 \n\n❌Regular Price  : ₹ 4599   /- 😱"
         }
        ]
       },
       {
        "id": 17802,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629443",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "50",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Maharaja Whiteline HB-129 175 Watt Hand Blender, Stainless Steel Blades, Long Lasting Performance With 175W Motor, Detachable Anti Splash Plastic Foot ( Blue And White )✅Deal Price :  ₹  699   /- 😱\n 🛒 \n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A3nTOG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A0zgXx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Jo0NH0vOL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \nPryce699 \nDicos50 \n\n❌Regular Price  : ₹1499    /- 😱"
         }
        ]
       },
       {
        "id": 17803,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629492",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "9990",
        "dicos": "43",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HUL Pureit Advanced Pro Mineral RO+UV 6 stage wall mounted counter top black 7L Water Purifier✅Deal Price :  ₹   9990  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@9990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3zZv3n0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oiAkDF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31Pq9FM-4AL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Water Purifiers & Accessories \nPryce9990 \nDicos43 \n\n❌Regular Price  : ₹14999    /- 😱"
         }
        ]
       },
       {
        "id": 17804,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629587",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "85",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Boult Audio Omega True Wireless in Ear Earbuds with 30dB ANC, 32H Playtime, 45ms Xtreme Low Latency Mode, Quad Mic ENC, 3 Equalizer Modes, Active Noise Cancellation, TWS Bluetooth Gaming TWS (Black)✅Deal Price :  ₹  1499   /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3A4xcOu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UCruN7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/711ntjylB0L._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce1499 \nDicos85 \n\n❌Regular Price  : ₹6999    /- 😱"
         }
        ]
       },
       {
        "id": 17805,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629635",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "468",
        "dicos": "41",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   NIVIA Beast Gym Bag-4 Polyester/Unisex Gym Bags/Shoulder Bag for Men & Women with Separate Shoes Compartment/Carry Gym Accessories/Fitness Bag/Sports & Travel Bag/Sports Kit✅Deal Price :  ₹  468   /- 😱\n 🛒 \n\n @468\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KEyFQg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40bcmHQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/4124iV0xKeL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Bags, Wallets and Luggage \n                Bags & Backpacks \n                Gym Bags \nPryce468 \nDicos41 \n\n❌Regular Price  : ₹ 750   /- 😱"
         }
        ]
       },
       {
        "id": 17806,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629684",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2899",
        "dicos": "78",
        "catagory": "Luggage",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Solimo 68.5 cm Hardsided Luggage with TSA Lock, Grey✅Deal Price :  ₹ 2899    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2899"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mB6pWG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mAEXID"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/911HnxBlUNL._SY355_.jpg"
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
          "text": " & Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Suitcases & Trolley Bags \nPryce2899 \nDicos78 \n\n❌Regular Price  : ₹  8999  /- 😱"
         }
        ]
       },
       {
        "id": 17807,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629732",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3499",
        "dicos": "46",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   VECTOR 91 Boom 20T Black Single Speed Kids Cycle, Frame: 12 Inches, Ideal for Unisex Youth✅Deal Price :  ₹  3499   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@3499"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mAgoLW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNkkzN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51J69I4W2tL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Cycling \n                Kids' Cycles & Accessories \nPryce3499 \nDicos46 \n\n❌Regular Price  : ₹ 5569   /- 😱"
         }
        ]
       },
       {
        "id": 17808,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629780",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5792",
        "dicos": "77",
        "catagory": "Luggage",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Basics Premium Hardside Spinner Luggage with Built-In TSA Lock - 2-Piece Set (21\", 30\"), Green✅Deal Price :  ₹ 5792    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@5792"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GP0hRz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B07CWPV21N?smid=AXOGFIT0PZZ7G&amp;th=1&amp;linkCode=sl1&amp;tag=bmvavinash01-21&amp;linkId=6ccb18257d52857b20d3bce0951e00c7&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81D46n4XWdL._SY606_.jpg"
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
          "text": " & Bags\n\n                Bags, Wallets and Luggage \n                Luggage \n                 Luggage Sets \nPryce5792 \nDicos77 \n\n❌Regular Price  : ₹ 14999   /- 😱"
         }
        ]
       },
       {
        "id": 17809,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629874",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "542",
        "dicos": "10",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   ICC Blue Army Sling Bag✅Deal Price :  ₹   542  /- 😱\n 🛒 \n\n @542\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GP0mVn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMWC6Y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/9131GNfdzJL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Shoes & Handbags \n                Handbags, Purses & Clutches \n                 Sling & Cross-Body Bags \nPryce542 \nDicos10 \n\n❌Regular Price  : ₹ 599   /- 😱"
         }
        ]
       },
       {
        "id": 17810,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629922",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "259",
        "dicos": "35",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Signoraware Cute Steel Container, 100ml, Set of 2, Violet✅Deal Price :  ₹  259   /- 😱\n 🛒 \n\n @259\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMncgz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mweoEF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61n4M0waOTL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce259 \nDicos35 \n\n❌Regular Price  : ₹  380  /- 😱"
         }
        ]
       },
       {
        "id": 17811,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681629970",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "459",
        "dicos": "54",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   wolpin Plastic Expandable Kitchen Dish Drainer and Drying Rack Sink Basket for Washing Bowls Utensils Vegetables Fruits Storage Organiser Retractable Up to 48 cm, Blue✅Deal Price :  ₹  459   /- 😱\n 🛒 \n\n @459\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mwevQB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMnuEb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71sp+R+WMUL._SX355_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \nPryce459 \nDicos54 \n\n❌Regular Price  : ₹  899  /- 😱"
         }
        ]
       },
       {
        "id": 17812,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630114",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "206",
        "dicos": "25",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Fogg Master Body Spray For Men, 120ml (Marco)✅Deal Price :  ₹ 206    /- 😱\n 🛒 \n\n @206\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40shV4R"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tkxQG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61fmjdUhqTL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Deodorants & Antiperspirants \nPryce206 \nDicos25 \n\n❌Regular Price  : ₹275    /- 😱"
         }
        ]
       },
       {
        "id": 17813,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630164",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "349",
        "dicos": "65",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants Small Indoor Potted Houseplants, Small Faux Plants for Home Decor Bathroom Office Farmhouse (Set 0F 8)✅Deal Price :  ₹ 349    /- 😱\n 🛒 \n\n @349\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNBW2y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MIAoa1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/8139T8YbdkL._SX355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home & Décor \n                Artificial Flora \nPryce349 \nDicos65 \n\n❌Regular Price  : ₹ 899   /- 😱"
         }
        ]
       },
       {
        "id": 17814,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630212",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "193",
        "dicos": "81",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SHAPURE SHA BLACK Pre-calibrated Pen Type Digital LCD TDS Meter Tester✅Deal Price :  ₹   193  /- 😱\n 🛒 \n\n @193\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tnIYD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MJilAv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31iUH3YwZML._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Industrial & Scientific \n                Test, Measure & Inspect \n                 Water Quality & Instrumentation \nPryce193 \nDicos81 \n\n❌Regular Price  : ₹ 499   /- 😱"
         }
        ]
       },
       {
        "id": 17815,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630260",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2599",
        "dicos": "60",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Lifelong LLM378 Electric Foldable Foot Spa Massager with 8 Manual Massage Rollers, Digital Panel & Water Heating Technology for Pain Relief| Pedicure Machine| Foot Massager (1 Year Warranty, Brown)✅Deal Price :  ₹ 2599    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@2599"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41vqhJF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40cZS2b"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51J7pFQSV3L._SX425_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Health Care \n                Massage & Relaxation \nPryce2599 \nDicos60 \n\n❌Regular Price  : ₹ 4999   /- 😱"
         }
        ]
       },
       {
        "id": 17816,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630308",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "179",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PTron Pride Lite HBE (High Bass Earphones) in Ear Wired Earphones with Mic, 10mm Powerful Driver for Stereo Audio, Noise Cancelling Headset with 1.2m Tangle-Free Cable & 3.5mm Aux (Grey)✅Deal Price :  ₹  179   /- 😱\n 🛒 \n\n @179\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4072Bud"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40d9zxL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31ayQE6qnbL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce179 \nDicos80 \n\n❌Regular Price  : ₹  799  /- 😱"
         }
        ]
       },
       {
        "id": 17817,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630404",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "397",
        "dicos": "34",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Surya 4W Aura Prime Led Downlighter, Recessed Led Downlight for Ceiling, Led Ceiling Light for Home & Hall, Green, Medium, (Pack of 6)✅Deal Price :  ₹  397   /- 😱\n 🛒 \n\n @397\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41xcLFr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41uwl53"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51TNhRBkPHL._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \nPryce397 \nDicos34 \n\n❌Regular Price  : ₹  570  /- 😱"
         }
        ]
       },
       {
        "id": 17818,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630453",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "60",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Portronics Toad 101 Wired Optical Mouse with 1200 DPI, Plug & Play, Hi-Optical Tracking, 1.25M Cable Length, 30 Million Click Life(Black)✅Deal Price :  ₹ 209    /- 😱\n 🛒 \n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFU3gc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UM6PX6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51czxrySrVL._SX425_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \nPryce199 \nDicos60 \n\n❌Regular Price  : ₹450    /- 😱"
         }
        ]
       },
       {
        "id": 17819,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630502",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1999",
        "dicos": "75",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   beatXP Unbound NEO 1.8\" Super AMOLED 2.5D Curved Display, One-Tap BT Calling Smartwatch (Black)✅Deal Price :  ₹ 1999    /- 😱\n 🛒 \n\n "
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
          "text": "https://amzn.to/3UDY8xI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3UC8sXe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61xQOD1ZPUL._SY355_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1999 \nDicos75 \n\n❌Regular Price  : ₹4599    /- 😱"
         }
        ]
       },
       {
        "id": 17820,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630552",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1325",
        "dicos": "87",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Amazon Brand - Solimo Denison Engineered Wood Bookcase/Display Stand (Walnut , Set of 5 Shelves)✅Deal Price :  ₹  1325   /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@1325"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3L2UqdQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KEzhp2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71I5qjqmUJL._SX425_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Living Room Furniture \nPryce1325 \nDicos87 \n\n❌Regular Price  : ₹ 6799   /- 😱"
         }
        ]
       },
       {
        "id": 17821,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630579",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "325",
        "dicos": "84",
        "catagory": "Industrial",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   HANOI� Extreme Posture Corrector for Women and Men | Long Dual Metallic Plate at Back Brace Straightener Shoulder Upright Support Trainer for Body Correction and Neck Pain Relief - Free Size✅Deal Price :  ₹  325   /- 😱\n 🛒 \n\n @325\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mD8WzO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43zea03"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71FMyS+q9CL._SX342_.jpg"
         },
         {
          "type": "plain",
          "text": " \n\n\n"
         },
         {
          "type": "hashtag",
          "text": "#Industrial"
         },
         {
          "type": "plain",
          "text": " & Scientific\n\n                Health & Personal Care \n                Home Medical Supplies & Equipment \n                Braces, Splints & Supports \nPryce325 \nDicos84 \n\n❌Regular Price  : ₹ 1499   /- 😱"
         }
        ]
       },
       {
        "id": 17822,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630626",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "391",
        "dicos": "62",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Bombay Shaving Company Co Men's Perfume-Moisturiser Kit Mexico EDT Perfume 100 Ml, Shea Butter Moisturiser✅Deal Price :  ₹  391   /- 😱\n 🛒 \n\n @391\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mAFGJR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ky7Wok"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61iA9yGTvJL._SX425_PIbundle-2,TopRight,0,0_AA425SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce391 \nDicos62 \n\n❌Regular Price  : ₹  999  /- 😱"
         }
        ]
       },
       {
        "id": 17823,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630675",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "119",
        "dicos": "40",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   NIVEA Deodorant Roll On, Pearl & Beauty For Women 50ml✅Deal Price :  ₹  159   /- 😱\n 🛒 \n\n @119\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GNC5PL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GR3a4n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41yTql4T5bL._SX425_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Deodorants & Antiperspirants \nPryce119 \nDicos40 \n\n❌Regular Price  : ₹ 199   /- 😱"
         }
        ]
       },
       {
        "id": 17824,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630747",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "499",
        "dicos": "76",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zebronics Zeb-Tempest Plus 8-Button Wired Gaming Mouse with Rapid Fire Key, 6400 DPI Sensor, Rubber Finish, RGB Lights, Advanced Windows Software, Braided Cable✅Deal Price :  ₹ 499    /- 😱\n 🛒 \n\n @499\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41tOuA4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ojypyu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51TIfFrLYbL._SX466_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \nPryce499 \nDicos76 \n\n❌Regular Price  : ₹  1399  /- 😱"
         }
        ]
       },
       {
        "id": 17825,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630795",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "6134",
        "dicos": "59",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Hindware Smart Appliances Cruzo 46L Personal Air Cooler with Bacto Shield Honeycomb Pad, Inverter Compatible (Black & White)✅Deal Price :  ₹ 6134    /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@6134"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KHFDUy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3KNEhIe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61pBDiVOP2L._SY355_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Coolers \nPryce6134 \nDicos59 \n\n❌Regular Price  : ₹   10499 /- 😱"
         }
        ]
       },
       {
        "id": 17826,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630868",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "10369",
        "dicos": "65",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Kent 15008 Alps+ UV Air Purifier | Highly Efficient HEPA Technology | Smart Air Purifier | Cleaner Air Every Time | UV LED That Kills Bacteria & Viruses (White)✅Deal Price :  ₹   10369  /- 😱\n 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@10369"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A5y5pX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2YGnn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/611XbSHwuZS._SX522_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Air Purifiers \nPryce10369 \nDicos65 \n\n❌Regular Price  : ₹  16999   /- 😱"
         }
        ]
       },
       {
        "id": 17827,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681630963",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "889",
        "dicos": "61",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Honeywell Moxie V10 Bluetooth V5.0 Wireless On Ear Headphone with mic, 12H Playtime, 40mm Drivers, Padded Ear Cushions, 3.5mm AUX, Integrated Controls, Deep Bass, IPX4, Voice Assistant Enabled✅Deal Price :  ₹  889    /- 😱\n 🛒 \n\n @889\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ofVylw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3A2Oyeo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51tRFJtrW+L._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce889 \nDicos61 \n\n❌Regular Price  : ₹  1699   /- 😱"
         }
        ]
       },
       {
        "id": 17828,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681631012",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "675",
        "dicos": "44",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Zebronics Zeb-Crystal Pro Web Camera with USB Powered,3P Lens,Night Vision and Built-in Mic(RED)✅Deal Price :  ₹   511  /- 😱\n Apply 25% coupon 🛒 \n\n @675\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41af5SV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3mFPXof"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71ht0EOwQsL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Cameras & Photography \n                Security Cameras \nPryce675 \nDicos44 \n\n❌Regular Price  : ₹  949  /- 😱"
         }
        ]
       },
       {
        "id": 17829,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681631060",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5999",
        "dicos": "25",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   PHILIPS Audio TWS SHB2505 Bluetooth Truly Wireless In Ear Earbuds with Mic, 20 Hr Playtime (5+15), 6 mm Drivers, Voice Assistant (Black)✅Deal Price :  ₹ 4499    /- 😱\n Apply 25% coupon 🛒 \n\n "
         },
         {
          "type": "mention",
          "text": "@5999"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GOlHOV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AlejqJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/5158v8Qb7kL._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce5999 \nDicos25 \n\n❌Regular Price  : ₹  6499   /- 😱"
         }
        ]
       },
       {
        "id": 17830,
        "type": "message",
        "date": "2023-04-16",
        "date_unixtime": "1681631107",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "499",
        "dicos": "58",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   K-life GluneoLite Blood Glucose Sugar Testing 50 Strips✅Deal Price :  ₹ 499   /- 😱\n 🛒 \n\n @499\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GMox75"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3GJjYdy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71NHl7Q0u4L._SY355_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Home Medical Supplies & Equipment \n                Health Monitors \nPryce499 \nDicos58 \n\n❌Regular Price  : ₹  999   /- 😱"
         }
        ]
       }



  ]


  
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
            if(Input[i]!=undefined)
            if(Input[i].text_entities!=undefined)
            try{
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
    if (Input[i].text_entities[j].type=="mention"){
        mention = Number(Input[i].text_entities[j].text.substring(1));
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
          if(Input[i]!=undefined)
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
            //Not Working
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
            // console.log('Discount  exists');
            discount = webElement;
            // console.log('discount is '+discount);
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
              // console.log('new discount is '+discount);
            }
            if(discount.charAt(discount.length-1)=='%'){
              discount = discount.substring(0,discount.length-1);
              console.log('new discount is '+discount);
            }
            disco = Number(discount);
            disc = Number(discount)>=75;
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
            if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]')).getAttribute("innerHTML");
          }
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[1]
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
              // console.log('price is '+price);
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
      if(price.includes('₹')){
        price=price.replaceAll('₹',"")
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
            itemcategory += "Pryce"+price + " ";
            }
          }
          if(disco != 0){
          itemcategory = itemcategory + "\n";
          itemcategory += "Dicos"+disco+ " ";
          }
          // console.log('Price String is '+price);
          console.log('Price is '+pricenum);
          console.log('Discount is '+disco);
        }
        catch(e){
          console.log(e);
        }
        try{
        if(itemcategory.includes("&amp;")){
          itemcategory = itemcategory.replaceAll("&amp;","&");
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
// await driver.get(Links);

if(!Input[i].from.includes('All1App')){ //Only All1App Start
    await driver.findElement(By.id("amzn-ss-text-link")).click();
    // let popupIsVisible = await driver.wait(until.elementIsVisible("a-popover-content-2"));
// console.log("popupIsVisible is "+popupIsVisible);
// if(!popupIsVisible){
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
//   await driver.findElement(By.id("amzn-ss-text-link")).click();
// }
await driver.findElement(By.id("amzn-ss-text-link")).click();
// await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
await driver.sleep(2500);
try{
  await driver.findElement(By.id("a-autoid-1-announce")).click();
  await driver.sleep(1500);
}
catch(e){
  await driver.findElement(By.id("amzn-ss-text-link")).click();
  await driver.sleep(1500);
  // await driver.findElement(By.id("a-autoid-1-announce")).click();
  try{
    await driver.findElement(By.id("a-autoid-1-announce")).click();
    await driver.sleep(1500);
  }
  catch(e){
    await driver.findElement(By.id("amzn-ss-text-link")).click();
    await driver.sleep(1500);
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
    await driver.sleep(1500);
  
  }

}
await driver.actions()
.sendKeys(Key.UP) //bmvavinash
.sendKeys(Key.UP) //bmvavinash
.keyDown(Key.UP)
.keyUp(Key.UP)
.sendKeys(Key.RETURN)
// .sendKeys(Key.TAB)

// Associate Extra Tab Remove
// .keyDown(Key.TAB)
// .keyUp(Key.TAB)
// .sendKeys(Key.RETURN)
.perform();

await driver.sleep(1500);
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
  await driver.sleep(1500);
}
let datasnew = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("innerHTML").then(function(webElement) {
  console.log('Link Success '+webElement);
  urlvalue1 = webElement;
}, function(err) {
  console.log('Link Err'+err);
});
if(datasnew == null){
  await driver.wait(until.elementLocated(By.id("amzn-ss-text-shortlink-textarea")),5000).getAttribute("src");
}


await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
console.log('Instead of Copy ' +datasnew)

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
try{
    if(!Input[i].from.includes("All1App")){
  if(urlvalue1 == "")
      break;
  btext = btext + urlvalue1+"\n" + "\n" + itemcategory + "\n";
  
  // if(btext.length>99)
  //   btext = text.substring(0,99);
}
}
catch(e){
    console.log(e);
}
} //Only All1App Take

//avinash08 data take
// await driver.get(Links);
if(!Input[i].from.includes('All1App')){ //Only All1App Start
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
await driver.sleep(2500);
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

// Associate Extra Tab Remove
// .keyDown(Key.TAB)
// .keyUp(Key.TAB)
// .sendKeys(Key.RETURN)
.perform();
await driver.sleep(1500);
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
  await driver.sleep(1500);
}

await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("innerHTML").then(function(webElement) {
  console.log('Link Success '+webElement);
  urlvalue = webElement;
}, function(err) {
  console.log('Link Err'+err);
});


await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
let linkvalue = await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("src");
console.log('Link Value is '+linkvalue)

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
} // Only All1App End
try{
    if(!Input[i].from.includes("All1App")){
    if(urlvalue == "")
        break;
        // text = text + urlvalue+"\n" + itemcategory + "\n";
        if(pricenum>0){
            text = text + "\n @" + pricenum + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";
        }
        else if(mention>0){
            text = text + "\n";
      text = text +"@"+mention + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";
      
    }
    else{
        console.log('No Price');
      break;
    }
    // text = text.substring(0,99);
    // if(text.length>99)
}
else{
    if(text.includes("Deal Price")){
        text.indexOf("Deal Price");
        text=text.substring(0,text.indexOf("Deal Price"));
    }
    text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
    break; //@for now
    // text = text + `+"\n";
  }
  }
  catch(e){
    console.log(e);
  }

  // await driver.get(Links);
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
  }
  catch(e){
    
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
          if(Input[i]!=undefined)
          if(Input[i].from!=undefined)
            // if(Input[i].text_entities!=undefined)
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
          if(Input[i]!=undefined)
            if(Input[i].from!=undefined)
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
      if(Input[i]!=undefined)
            if(Input[i].from!=undefined)
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
                    if(Input[i]!=undefined)
            if(Input[i].from!=undefined)
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
          if(Input[i]!=undefined)
            if(Input[i].from!=undefined)
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
      try{
      // await driver.get("https://api.whatsapp.com/send?phone=9866017750"); 
      // await driver.get(`https://wa.me/919866017750?text=completed${Input[0].from}`); 
      }
      catch(e){
        console.log('Wats Finally Error')
      }
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