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
const { telegram } = require("./telegram");
const { whatsapp } = require("./whatsapp");
const { facebook } = require("./facebook");
const { driverLocation } = require("selenium-webdriver/common/seleniumManager");
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
//  driver = await new Builder().forBrowser("firefox").build();

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
        "id": 19816,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682829634",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1889",
        "dicos": "66",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   TP-Link AC750 Wifi Range Extender | Up to 750Mbps | Dual Band WiFi Extender, Repeater, Wifi Signal Booster, Access Point| Easy Set-Up | Extends Wifi to Smart Home & Alexa Devices (RE200)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VxGHzH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ng18Es"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LI0rgH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LFRO6d"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40PEctp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ec705"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/427Ykb3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ec9oJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44qo58K"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lhf2yc"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1889"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41eyLfRsPIL._SY450_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Networking Devices \n                 Repeaters & Extenders \nPryce1889 \nDicos66 \n\n❌Regular Price  : ₹ 4199   /- 😱"
         }
        ]
       },
       {
        "id": 19817,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682829744",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "69",
        "dicos": "83",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   MISTRONICS Spiral Charger Cable Protector Data Cable Saver Charging Cord Protective Cable Cover Set of 1 (4 Pieces)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3n8FQZv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ed34x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44cEvRT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LjamYD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/429vJCh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LQqm5X"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41N9Ucb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lhfdtm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41Q0lca"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44hbCE0"
         },
         {
          "type": "plain",
          "text": "\n\n @69\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61eqW9cfk+L._SY450_.jpg"
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
          "text": "\n\n                Home Improvement \n                Electrical \n                Cord Management \nPryce69 \nDicos83 \n\n❌Regular Price  : ₹  250  /- 😱"
         }
        ]
       },
       {
        "id": 19818,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682829874",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "59",
        "dicos": "70",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   SPIRO Jumping Skipping Rope with Comfortable PVC, Pencil Shape Handle for Weight REDUCING/Warm-UP/Gym/Sports & Gym Fitness.✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41MBru4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AEUQ4d"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40RA5NB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LjsykH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ncNB0r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40ScV9w"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ndSUwu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LGqGE4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AFNmxS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AHzQtQ"
         },
         {
          "type": "plain",
          "text": "\n\n @59\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61p7ucQpvHL._SY606_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Accessories \nPryce59 \nDicos70 \n\n❌Regular Price  : ₹ 140   /- 😱"
         }
        ]
       },
       {
        "id": 19819,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682829992",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "69",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless Headphones, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40RCY0P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HpPJZI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hp2RhF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hq4BqC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41QMXVd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vfw4kM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VhPDJ3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42edqvX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HqAcsB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3niTtoT"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51ZT3aMrJIL._SX522_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce799 \nDicos69 \n\n❌Regular Price  : ₹  1999  /- 😱"
         }
        ]
       },
       {
        "id": 19820,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830102",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "498",
        "dicos": "67",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   MATTSPY Bluetooth Smart Watch for Men Women, Touch Screen for Android iOS Phones Wrist Phone Watch, Daily Activity Tracker, Heart Rate Sensor, BP Monitor, Sports Watch - Black✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NplHZR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lm7CcX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oSA1j9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hq4SKa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NsNjNw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NkjE9j"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LQqEd3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LIJVNr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oV9YYL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nlyj3V"
         },
         {
          "type": "plain",
          "text": "\n\n @498\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61icsCcbdKL._SY355_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce498 \nDicos67 \n\n❌Regular Price  : ₹ 1199   /- 😱"
         }
        ]
       },
       {
        "id": 19821,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830212",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "39",
        "dicos": "NaN",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   E-COSMOS 5V 1.2W Portable Flexible USB LED Light (Colours May Vary, Small, EC-POF1, Plastic)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VknAcf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NxmHea"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3n8GjuJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NkjQFz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/426Dw3Q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/424uu7o"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oYtdQX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/428M4Hp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42bKSTx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42aqKS0"
         },
         {
          "type": "plain",
          "text": "\n\n @39\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51IEbBI7qBL._SY450_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                USB Gadgets \nPryce39 \nDicosNaN"
         }
        ]
       },
       {
        "id": 19822,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830319",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "599",
        "dicos": "78",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   VIMAL JONNEY Men Regular Fit Trackpants Pack of 3 Multicolor✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LljgEH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/427Lbiu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lm7v0Q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LmQX8S"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41H49MZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41PYGna"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oR1FNw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LGqhkX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ADnFOw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3naM4YO"
         },
         {
          "type": "plain",
          "text": "\n\n @599\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61MXQ+vHwjL._UX679_.jpg"
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
          "text": "\n\n                Clothing & Accessories \n                Men \n                Sportswear \nPryce599 \nDicos78 \n\n❌Regular Price  : ₹ 1799   /- 😱"
         }
        ]
       },
       {
        "id": 19823,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830435",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "13499",
        "dicos": "46",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Onida 80 cm (32 inches) HD Ready Smart LED Fire TV 32HIF3 (Black)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AYbQCV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ADNqy7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44iq7rw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AKr91y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LGnFDJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40RAzDp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LFUa4Z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LDG6cf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LHeLG2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3niTCIX"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@13499"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71K6W3QsL2L._SX450_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \nPryce13499 \nDicos46 \n\n❌Regular Price  : ₹ 20999   /- 😱"
         }
        ]
       },
       {
        "id": 19824,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830546",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1999",
        "dicos": "71",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   boAt Blaze Smart Watch with 1.75\" HD Display, Fast Charge, Apollo 3 Blue Plus Processor, 24x7 Heart Rate & SpO2 Monitor, Multiple Watch Faces, Multiple Sports Modes & 7 Days Battery Life(Active Black)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hq54Jo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40QI9hi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ACODpB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ljb8ov"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40KmXtu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41P9HVP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41QXKyI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AGaCMo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44iDDuX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44rQF9R"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/61mh6YHB5fL._SX522_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1999 \nDicos71 \n\n❌Regular Price  : ₹ 4799   /- 😱"
         }
        ]
       },
       {
        "id": 19825,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830658",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "342",
        "dicos": "62",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Gear Superior 16L Water Resistant School Bag//Backpack/College Bag for Men/Women - Orange Black✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hrp8eu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vh5R58"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VxHxwl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VgLo0k"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LqQSRY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VfdQ2R"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LE7fMc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LDyOoS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3nfLo4h"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HpQulw"
         },
         {
          "type": "plain",
          "text": "\n\n @342\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91F36KkXG3L._UY606_.jpg"
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
          "text": " & Accessories\n\n                Bags, Wallets and Luggage \n                Bags & Backpacks \n                Backpacks \nPryce342 \nDicos62 \n\n❌Regular Price  : ₹ 850   /- 😱"
         }
        ]
       },
       {
        "id": 19826,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830791",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "333",
        "dicos": "72",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Cazibe Women's Regular Fit Men's T-Shirt (CZ11105_Red/S.Green M)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hln8Vh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oORE3n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NskReH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41SIWQg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41QcZrU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Npkv8M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44fD05j"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/424eHW4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LIWJU4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ee8JD"
         },
         {
          "type": "plain",
          "text": "\n\n @333\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81n0Qp78i8L._UX522_.jpg"
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
          "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \nPryce333 \nDicos72 \n\n❌Regular Price  : ₹  1099  /- 😱"
         }
        ]
       },
       {
        "id": 19827,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682830927",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "427",
        "dicos": "22",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   POND'S Triple Vitamin Moisturising Body Lotion 600 ml✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44e4V5K"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44bup3D"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vgxvzk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40MpqU9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vh6cEW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vh6eg2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VgxBaa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lm7Twk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ninrJu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vmdk3c"
         },
         {
          "type": "plain",
          "text": "\n\n @427\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41z9LG4aZnL._SY450_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Body Washes \nPryce427 \nDicos22 \n\n❌Regular Price  : ₹  530  /- 😱"
         }
        ]
       },
       {
        "id": 19828,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831062",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1299",
        "dicos": "64",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Skybags Komet 45 cms Royal Blue Laptop Backpack✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/427LXfo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ndU23c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ng2L52"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HlrRX6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hq5O18"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HrpMsq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NpkVf5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HnV3g1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HpXxKQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40KuJnf"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/91TB4AOdP6L._UX679_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \nPryce1299 \nDicos64 \n\n❌Regular Price  : ₹ 3100   /- 😱"
         }
        ]
       },
       {
        "id": 19829,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831193",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "749",
        "dicos": "46",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   VGR V-596 Professional Electric Hair Curling Wand | Stylish Hair Styling Professional Hair Curler with 200° C Max Heat Setting✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ncUqix"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40MpMdr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40OJ8P1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40SemEW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AByXD3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AGi0r2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LiSL30"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ADO8eL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AGi4qM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41QYljW"
         },
         {
          "type": "plain",
          "text": "\n\n @749\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Cn8JSpGzL._SX522_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \nPryce749 \nDicos46 \n\n❌Regular Price  : ₹  1250  /- 😱"
         }
        ]
       },
       {
        "id": 19830,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831323",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "71",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Noise Buds Smart Truly Wireless in Ear Earbuds with 18H Playtime,10mm Driver, Full Touch Control, Hyper Sync, and BT v5.0 (Jet Black)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41OA3r3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VeREWF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LFTEUF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vlatri"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LG8NoJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VhUWZ0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LFTI6R"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/426EpJI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VjXSo6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oSBVR1"
         },
         {
          "type": "plain",
          "text": "\n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51IemHi5XdL._SX522_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce999 \nDicos71 \n\n❌Regular Price  : ₹ 2396   /- 😱"
         }
        ]
       },
       {
        "id": 19831,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831455",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "60",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Mivi Play Bluetooth Speaker with 12 Hours Playtime. Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Blue, One Size✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3nhtb6q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3njz4jt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NposKt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HnVdE9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HqBvYx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nlz3WL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/426TESU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41PrpZg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41MCL00"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41SJCFi"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61Dw2jJTurS._SY355_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \nPryce799 \nDicos60 \n\n❌Regular Price  : ₹ 1550  /- 😱"
         }
        ]
       },
       {
        "id": 19832,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831567",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "275",
        "dicos": "58",
        "catagory": "Sports",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   FitBox Sports Exclusive 5kg Diamond Dumbbells Set (2.5kg x 2) Exercise and Fitness Training Kit✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41Lbpr8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42sdOan"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oSn6xG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4228RF2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/426EQ6O"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/446IzTE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42c3Nxw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4280h7n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oLM55E"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VmmFrx"
         },
         {
          "type": "plain",
          "text": "\n\n @275\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51Wexq2UEtL._SX425_.jpg"
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
          "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Strength Training Equipment \nPryce275 \nDicos58 \n\n❌Regular Price  : ₹  550  /- 😱"
         }
        ]
       },
       {
        "id": 19833,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831675",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "230",
        "dicos": "79",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Travel Blue 968 3-in-1 USB 2.0 Sync and Charge Cable (White)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vfr8fH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VfezRD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44cG0Q1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ALKejX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ndgObq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ndUuOW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AIrGRT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B00S161YNM?&amp;linkCode=sl1&amp;tag=avi1deals8-21&amp;linkId=4a552caedcede6129bc22769105aead4&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42d9A6j"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Hrqjuq"
         },
         {
          "type": "plain",
          "text": "\n\n @230\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41f+gnjS+FL._SX522_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \nPryce230 \nDicos79 \n\n❌Regular Price  : ₹ 899   /- 😱"
         }
        ]
       },
       {
        "id": 19834,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831808",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "4999",
        "dicos": "71",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Skullcandy Riff Wireless 2 on-Ear Headphones Black✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lb8BfW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3niTxVK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oOSrBn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40RBAvd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AETq9V"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41Nz7D3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40Pai8C"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44fjdmv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44hF1xW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LILgUt"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/71cKqKY3dmL._SX522_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce4999 \nDicos71 \n\n❌Regular Price  : ₹ 12596   /- 😱"
         }
        ]
       },
       {
        "id": 19835,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682831940",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "289",
        "dicos": "40",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Park Avenue Men's Deo, Alter Ego Signature, 100g (Pack of 2)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40PFYe3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LqRRl8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40QJGnu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lm9hiH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LhE2oL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ADoTcA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LgTYYp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LEeSlQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AGbwZi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42295Mo"
         },
         {
          "type": "plain",
          "text": "\n\n @289\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81P8eOv3EGL._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg"
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
          "text": "\n\n                Beauty \n                Bath & Body \n                Deodorants & Antiperspirants \nPryce289 \nDicos40 \n\n❌Regular Price  : ₹ 450   /- 😱"
         }
        ]
       },
       {
        "id": 19836,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682832046",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "166",
        "dicos": "17",
        "catagory": "Beauty",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Charmis Deep Radiance Face Wash 150ml with Vitamin C, Hyaluronic Acid and Salicylic Acid, Removes 99.9% Acne causing bacteria and gives Hydrated Skin✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AGbFfi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NqgIYL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VhVpdI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Npg6T3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NkKxtK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/424fpTe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42d9Imj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42bENGK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ngC2oU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41QmbfJ"
         },
         {
          "type": "plain",
          "text": "\n\n @166\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61PQnUkg8LL._SY450_.jpg"
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
          "text": "\n\n                Beauty \n                Skin Care \n                Face \nPryce166 \nDicos17 \n\n❌Regular Price  : ₹ 190   /- 😱"
         }
        ]
       },
       {
        "id": 19837,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682832175",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "39",
        "dicos": "NaN",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   E-COSMOS 5V 1.2W Portable Flexible USB LED Light (Colours May Vary, Small, EC-POF1, Plastic)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HlgVZd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oSBExh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44fzyYv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41Qmozx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VjKBvB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NkKPkk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44fEzAd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Vie3lO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LDAcYC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3VlbjUY"
         },
         {
          "type": "plain",
          "text": "\n\n @39\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51IEbBI7qBL._SY450_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                USB Gadgets \nPryce39 \nDicosNaN"
         }
        ]
       },
       {
        "id": 19838,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682832308",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5699",
        "dicos": "68",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀   Coirfit Folding Sofa Cum Bed - Perfect for Guests - Jute Fabric Washable Cover - Grey | 3' X 6' Feet✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/40RBVht"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3HpeJjB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LnhqTU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42efaoZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LqSkDU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LqSwmC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LGm8xm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44gztUE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42c4E1c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42c4E1c"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@5699"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41fSyPAU5OL._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Living Room Furniture \nPryce5699 \nDicos68 \n\n❌Regular Price  : ₹ 16596   /- 😱"
         }
        ]
       },
       {
        "id": 19839,
        "type": "message",
        "date": "2023-04-30",
        "date_unixtime": "1682832438",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "73",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Offer 🚀🚀 truke Air Buds Lite True Wireless in Ear Earbuds with 48 Hours Playtime, Gaming Mode, Enviornomental Noise Cancellation (ENC), Auto Play/Pause, AAC Codec, Bluetooth 5.1, IPX4 (Yellow)✅\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LI9Gxo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/41Ncdfl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3AFPGF6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ndLV6H"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oTmHv0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44cs34C"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Lmgxv3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LgUlSN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3nnoacp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3LmSziW"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61FA5YUYFjL._SX466_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \nPryce799 \nDicos73 \n\n❌Regular Price  : ₹ 1899   /- 😱\n,l"
         }
        ]
       }

   
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
let ta = "";
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
let access_token = "EAAKw6ZAutPZBoBAFhbJxab6tjDlZCCZAEjzdZAQTXXhTU6xyj3NfVJq3MM299PyAsJOBFrGLNKZCp61ktBLdhzBmqpLCeK4vjG0OisdWsZBy2xnbfl09eXXw57d2JUhXumCgDNSUGE9XSKVHSZCoVZB5zSmxHFL8xeZBZAYIbGbLZAXkunmNr3KiVEZAH0s8iINZB9ZC4dDjebEhAzE8VZCZA3EOzCU7B";
let mention="";
        // Links = Input[0].text_entities[1].text;
        // Links = Input.messages[0].text_entities[1].text;
        for (i=0;i<Input.length;i++){
        // for (i=1;i<Input.messages.length;i++){
            discount="";
            photo="";
            watscode="";
            price="";
            disco = 0;
            pricenum=0;
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
            try{
            price=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]')).getAttribute("innerHTML");
            }
            catch(e){
                console.log('Price New Error')
            }
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
            else if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            else if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            else if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
          }
            else if(price==""){
            price=await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]')).getAttribute("innerHTML");
          }
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]
          //*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[1]
            //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
            //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
            else if(price==""){
            price=await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]')),5000).getAttribute("innerHTML");
            }
            else if(price==""){
              price=await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
              // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
              //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
            }
            else if(price==""){
              price=await driver.wait(until.elementLocated(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')),5000).getAttribute("innerHTML");
            } 
            else if(price==""){
              price=await driver.findElement(By.className('a-price-whole')).getAttribute("innerHTML");
              // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
            } 
          else if(price==""){
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
          if(pricenum==0){
            break;
          }
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
          if(Input[i].from.includes("All1 deals")){
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
            else
           { break;}
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

// if(!Input[i].from.includes("All1App")){
if(text.includes("Deal Price")){
    text.indexOf("Deal Price");
    text=text.substring(0,text.indexOf("Deal Price"));
    text = text + "\n"
}


//Need to Change Compulsory !
let l,count=0;
// if(!Input[i].from.includes('All1App')){ //Only All1App Start
//   await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).getAttribute("innerHTML").then(function(webElement) {
//     urlvalue1 = webElement;
//     console.log('Link Success '+urlvalue1);
//   }, function(err) {
//     console.log('Link Err'+err);
//   });
//   text = text + urlvalue1 + "\n";
// }
for(l=0;l<1;l++){
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
count = l;
while(count--!=0){
// if(l==0){
//     await driver.actions()
//     .sendKeys(Key.UP)
//     .sendKeys(Key.RETURN)
//     .perform();
// }
// else if(l>0){
//   console.log("count is "+count);
//   console.log("l value is "+l);
await driver.actions()
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
}//while loop

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
  urlvalue1 = webElement;
  console.log('Link Success '+urlvalue1);
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


} //Only All1App Take
try{
    if(!Input[i].from.includes("All1App")){
    //     if(urlvalue1 == ""){
    //     console.log("urlvalue1 intake empty");
    //     break;
    // }
        console.log("urlvalue1 intake");
        text = text + urlvalue1 + "\n";
        console.log("Link Appended");
        // btext = btext + urlvalue1+"\n" + "\n" + itemcategory + "\n";
        
        // if(btext.length>99)
        //   btext = text.substring(0,99);
    }
    else{
      console.log("Telegram Link else")
      shortext = ""
      let t1=text;
      switch(l+1){
      case 1:
          if(t1.includes(',')){
              shortext=t1.substring(0,t1.indexOf(','));
          }
          if(t1.includes('✅')){
              t1=t1.replaceAll("✅","");
          }
          if(t1.includes('🔥')){
              t1=t1.replaceAll("🔥","");
          }
        t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
        // telegram(photo,"@all1app",t1)
        let link = `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
        if(disco>=75){
            // telegram(photo,"@all1appdeals",t1)
            // fbdata = facebook(photo,link,text)
        // fbdata = `https://graph.facebook.com/me/feeds/photos?url=${photo}&caption=${text}&${access_token}`
        // fbdata = `109973278731533/photos?url=${photo}&caption=${text}&${access_token}`
        fbdata = `109973278731533/photos?url=${photo}&caption=${t1}&EAADQM9ltnuYBAEcukShIVEsTQPHNqOmeSZBkoXqH2S3NCACs3pr1F5ikbA8yGlWKdqqYDxqHhgwKvzHc6AdKZAjUZCcPQpmz57OGKBzyNuDA2nudYux6F53MY8vhoHnKDhEI62i1d711qjQyrWZADXBWZBt4sr1n6nTFGOomP2srSAmU2m3ZBjWC9TQ1nKlXcZCmxP9kcGTZBBYQeyAgDI5BLmnavkpM4tblKKZBtIZCwQzth2Ld85ZAAmV`
        // fbdata = `109973278731533/photos?url=https://i.postimg.cc/gk6KnpXp/Avi-Deals.png&access_token=EAAKw6ZAutPZBoBACEgZCDKuuW1xIj99UuHcoRiJVwMzNDDAGT0etjy5eudESVgj2H6AnWnREqWuzyJZAIgSvjnYzvYJVNAYV1nEutV799bucTdpE1aNm6ZByvUbg8iDdC67G0LD1FZBk7G1tTED9islTwEeZB5k79hSQLLOXf6gRb8IpFfL1NG7S6MP4e9dqMNFZCSBSsJLYnLKDNnElqgKu`
        console.log(fbdata);
        // await driver.get('https://developers.facebook.com/tools/explorer');
        await driver.get('https://developers.facebook.com/tools/explorer/?method=POST');
        try{
        // await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[2]/div/div[5]/div[4]/div/div/div[2]/div[1]/div')).click();
        }   
        catch(e){
            console.log('middle req error')
        }
        
        
        await driver.sleep(5000);
        try{
        await driver.scrollToTop(0);
    }
    catch(e){
            console.log('Scroll Error')
        }
        await driver.sleep(2000);
        try{
            
            await driver.sleep(2000);
            await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[2]/div/div[5]/div[5]/div/div/div/div/div/div[7]/div[2]/button/div/div/div/div')).click();
            console.log('User Token Click Success')
        }
    catch(e){
        console.log(e);
    }
    await driver.actions()
    .sendKeys(Key.UP)
    .sendKeys(Key.RETURN)
    .perform()
    console.log('User Token changed Success')
    await driver.sleep(2000);
    console.log('changed to Avideals')
    await driver.actions()
    .keyDown(Key.SHIFT)
    .keyDown(Key.TAB)
    .keyUp(Key.TAB)
    .keyUp(Key.SHIFT)
    .keyDown(Key.SHIFT)
    .keyDown(Key.TAB)
    .keyUp(Key.TAB)
    .keyUp(Key.SHIFT)
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
    // .sendKeys(Key.DOWN)
    // .sendKeys(Key.RETURN)
    // .sendKeys(Key.TAB)
    // .sendKeys(Key.TAB)
    // .sendKeys(Key.TAB)
    .sendKeys(Key.BACK_SPACE)
    .perform()
    
    await driver.sleep(2000);
    await driver.actions()
    .sendKeys(fbdata)
    .perform()
    
        try{
            
            await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[1]/span/button/div/div')).click();
            console.log('Button CLick Success')

        }
        catch(e){
            console.log(e);
        }
        // try{

        // await driver.findElement(By.xpath('//*[@id="js_q"]/input')).click();
        // }
        // catch(e){
        //     console.log(e);
        // }

        
        
        await driver.sleep(5000);
        console.log('Fb Data entered successully')
        // await driver.findElement(By.xpath('//*[@id="js_8d1"]/div/div/div/div')).sendKeys("POST");
        // await driver.findElement(By.xpath('//*[@id="js_5j"]/div/div/div/div')).click();
        // await driver.sleep(500);
        // await driver.actions()
        // .sendKeys(Key.TAB)
        // .sendKeys(Key.TAB)
        // .sendKeys(Key.RETURN)
        // .perform()
        console.log('Fb Data Submit start reach successully')

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
        t1="";
        }
        break;
      case 2:
        t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/deals/product/${Input[i].id}`
        // telegram(photo,"@avideals2",t1)
        t1="";
        break;
      case 3:
        t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/offers/product/${Input[i].id}`
        // telegram(photo,"@avideals3",t1)
        t1="";
        break;
      case 4:
        t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/avideals/product/${Input[i].id}`
        // telegram(photo,"@avideals4",t1)
        t1="";
        break;
      default:
          t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/avideals${l}/product/${Input[i].id}`
          // telegram(photo,`@avideals${l}`,t1)
          t1="";
      }

    }
    // text = ta;
}
catch(e){
    console.log(e);
}

}//for loop of Link
if(!Input[i].from.includes("All1App")){
    text = text + "\n @" + pricenum +"\n" + itemcategory + "\n";
    console.log("text telegram")
    // telegram(photo,"@all1appdaily",text);
}
else{
    if(text.includes("Deal Price")){
        text.indexOf("Deal Price");
        text=text.substring(0,text.indexOf("Deal Price"));
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
//   text = "💥💥"+texttelegram(photo,chatId,text);
//   btext = "💥💥"+btext

// }

// telegram(photo,"@adddeals",text);
// whatsapp("FfH1v13f7dVA5ZHVvzEW3E",text);


var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try{
      if(Input[i]!=undefined)
            if(Input[i].from!=undefined)
    if(!Input[i].from.includes("All1App")){
        chatId = "@all1appdaily";
        console.log('calling all1appdaily')
        
        telegram(photo,chatId,text);
      }
      //changed for All1App
  }
  catch(e){
    console.log('Telegram Error');
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
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
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
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
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
                //   `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
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
      .then((result) => {console.log("success",result)
    //   console.log('hai'+JSON.stringify(result).includes("false"));
    console.log('re api 2nd');
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));

      if(output){
        await fetch(
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
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
            telegram(photo,"@all1appweb",text);
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
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
                //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
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
            // `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
            //   "https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=@all1app",
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
        // await driver.get(resres);
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

}

example();
