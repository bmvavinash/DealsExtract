
//  chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\ChromeProfile"
//Amzn Backup 6th June
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
        "id": 26861,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686029772",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "580",
        "dicos": "20",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Horlicks Lite Regular Malt Carton, 1kg @518\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPBp34"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5kxTQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs77am"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MU8hmu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbckWG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IWmRZH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43ub2lF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NempZa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZnJhw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZIDLY"
         },
         {
          "type": "plain",
          "text": "\n\n @580\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61I4OkITeCL._SX522_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Rice, Flour & Pulses \n                Flours \n                 Multigrain \n                 Multigrain \nPryce580 \nDicos20"
         }
        ]
       },
       {
        "id": 26862,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686029833",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "121",
        "dicos": "45",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "B Natural Mango Juice @121\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PeREFd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oPEkMy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JlwscT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfM5yi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbPz4O"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQn2qw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CejWaR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MKaBfW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ccd5P9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVq90e"
         },
         {
          "type": "plain",
          "text": "\n\n @121\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91Xt+3+hwxS._SX522_PIbundle-2,TopRight,0,0_AA522SH20_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Coffee, Tea & Beverages \n                Juices \n                 Fruit Juice \n                 Fruit Juice \nPryce121 \nDicos45"
         }
        ]
       },
       {
        "id": 26863,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686029895",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "44",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells BT9009 Digital Display Beard & Moustache Trimmer @848\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXAAj1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMt43p"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYAOWO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYAIhU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXEoR3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXA0l6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oTdxPh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5kCH8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42jQJ9a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXALuH"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41SeKL07LCL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                Shaving, Waxing & Beard Care \n                Scissors \n                Scissors \nPryce1499 \nDicos44"
         }
        ]
       },
       {
        "id": 26864,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030259",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "71",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Pringle 2 Jar Mixer Grinder \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdHrat"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45M55SJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbPWMK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWs5xD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYy4ZT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45P8kZr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qtwloU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbGgly"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oTdHWT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oNYRRG"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/31e7-EaxkUL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Mixer Grinders \n                 Mixer Grinders \nPryce1099 \nDicos71"
         }
        ]
       },
       {
        "id": 26865,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030319",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "399",
        "dicos": "56",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Basics Amazonbasics Aaa Performance Alkaline Non-Rechargeable Batteries  @399\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQXGJ9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CcdBg3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45RJFDB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qoum57"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVtu28"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeGUPm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QUzd1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdzXUN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B00LH3DMUO?th=1&amp;psc=1&amp;telegram-LOOTDEALTRICKY=&amp;SITE-LOOTDEALYRICKY.IN=&amp;linkCode=sl1&amp;tag=avi1deals9-21&amp;linkId=cc9c8b38ce9a080adc970dd21e840d20&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oS21Ur"
         },
         {
          "type": "plain",
          "text": "\n\n @399\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/511x+RqvmuL._SY300_SX300_.jpg"
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
          "text": "\n\n                Electronics \n                General Purpose Batteries & Battery Chargers \n                 Disposable Batteries \nPryce399 \nDicos56"
         }
        ]
       },
       {
        "id": 26866,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030443",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "489",
        "dicos": "45",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Ivory 1000W Dry Iron @489\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nf8ouv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oNzLT0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45NdIfK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXfzJ2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZsEhb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NfeV8m"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LO8I1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ITrBPS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTqgfF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OZiQaQ"
         },
         {
          "type": "plain",
          "text": "\n\n @489\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/21wx2MaI-3L._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \n                Irons, Steamers & Accessories \n                Irons, Steamers & Accessories \nPryce489 \nDicos45"
         }
        ]
       },
       {
        "id": 26867,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030505",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1140",
        "dicos": "52",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "Newly Launched- Ajanta’s Ultra Sleek Trendy Analog AWC115 Men’s Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oVP3W"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rtfiy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXfCoc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qzG3py"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WY3MMA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5l9J8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WU8tag"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGxCIN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXfHs0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kgjeg"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1140"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81YtATIxWML._UX679_.jpg"
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
          "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce1140 \nDicos52"
         }
        ]
       },
       {
        "id": 26868,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030565",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "346",
        "dicos": "51",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "tekme Kids U-Shaped Toothbrush For 6-12 Years @346\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oEXpkE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42uhvM6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rvqmj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42psTsH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kvsMJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXegKb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42sHdAF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOHjl1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvl6wg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Q2SFW"
         },
         {
          "type": "plain",
          "text": "\n\n @346\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/21aYfPT-DqL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Oral Care \n                Toothbrushes & Accessories \n                 Manual Toothbrushes \n                 Manual Toothbrushes \nPryce346 \nDicos51"
         }
        ]
       },
       {
        "id": 26869,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030625",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "69",
        "dicos": "83",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "ATEVON 3-in-1 Dry Fruit Cutter @77\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46047m2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kgmGY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQHlss"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rtlqq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQY130"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oWaDK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qqUywa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oHKPRF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42o4K5J"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43peEp6"
         },
         {
          "type": "plain",
          "text": "\n\n @69\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41eDRaFvlNL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Tools \n                Fruit & Vegetable Preparation Tools \n                Fruit & Vegetable Preparation Tools \nPryce69 \nDicos83"
         }
        ]
       },
       {
        "id": 26870,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030684",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1399",
        "dicos": "62",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Longway Super-dlx 700 W Mixer Grinder \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oHKZbJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NffCyE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ORZhB7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42mrRO1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdAiH3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pXPKv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qjVulK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mVu2Z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GZ7AL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvdGcj"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41qz56u7hQS._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Mixer Grinders \n                 Mixer Grinders \nPryce1399 \nDicos62"
         }
        ]
       },
       {
        "id": 26871,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030744",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "224",
        "dicos": "55",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Yogabar Dark Chocolate  @224\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3quxHzP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Hemtw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oTe0B1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdBslQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42pUzNZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NbZ3n8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l2mMZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qnmNLX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qiyfS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nf8zpF"
         },
         {
          "type": "plain",
          "text": "\n\n @224\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/513oO18LSZL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Cereal & Muesli \n                Muesli & Granola Cereals \n                 Muesli \n                 Muesli \nPryce224 \nDicos55"
         }
        ]
       },
       {
        "id": 26872,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030805",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "599",
        "dicos": "50",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Dyazo 30 L Slim Business Laptop Backpack  @599\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeBnyn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43sfZvs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oRuHgc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRhdJA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43p51Xg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43E5zbA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs7rpA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OS87Pi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MU90UK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qRNcC"
         },
         {
          "type": "plain",
          "text": "\n\n @599\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31WONZied9L._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \n                Bags & Sleeves \n                Bags & Sleeves \nPryce599 \nDicos50"
         }
        ]
       },
       {
        "id": 26873,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030865",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "864",
        "dicos": "57",
        "catagory": "Shoes",
        "text_entities": [
         {
          "type": "plain",
          "text": "Reebok Girl's RBK Fulgere Slide Flip-Flops @864\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVLmr0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45G1wNM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pf272"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qsq2C2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pYcon"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KT8g7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43owQiF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qiCqUX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qucshx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MUCnq0"
         },
         {
          "type": "plain",
          "text": "\n\n @864\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71L1d22pvQL._UX575_.jpg"
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
          "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Men's Shoes \n                 Flip-Flops & Slippers \n                 Flip-Flops & Slippers \nPryce864 \nDicos57"
         }
        ]
       },
       {
        "id": 26874,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030929",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Sounce 38W Car Charger Type-C @199\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45NedGE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gjdSx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Q3488"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QVdXZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mAZUn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CiD0EQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeH2yk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42jRq2g"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43ox1dP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pY9sH"
         },
         {
          "type": "plain",
          "text": "\n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61d3SWjNNFL._SX522_.jpg"
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
          "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Mobile Accessories \n                Chargers \n                Chargers \nPryce199 \nDicos80"
         }
        ]
       },
       {
        "id": 26875,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686030988",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "688",
        "dicos": "56",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells LHEBHDP7IZ1W018 Octane Round 18-Watt LED Panel Light  @700\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CcyyaL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CcyyHN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPQSzU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42nIOry"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qsqbFA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPBWlA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cac6iJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNPNZD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oLMvcE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPv6wi"
         },
         {
          "type": "plain",
          "text": "\n\n @688\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41jLLD-OXWL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs \nPryce688 \nDicos56"
         }
        ]
       },
       {
        "id": 26876,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031049",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "282",
        "dicos": "68",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "JUGULAR Men's Cotton Printed Round Neck Loose Fit Oversized T-Shirt @282\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPvj2y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qx4yEc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOHFrR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMH9xM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WSO45h"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPRx4m"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPRAx4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTC9UX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ms6Zr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQYlPg"
         },
         {
          "type": "plain",
          "text": "\n\n @282\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61fNBDEL2FL._UY500_.jpg"
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
          "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 T-Shirts \n                 T-Shirts \nPryce282 \nDicos68"
         }
        ]
       },
       {
        "id": 26877,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031110",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "3999",
        "dicos": "58",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Preethi Blue Leaf Diamond MG-214 mixer grinder 750 watt \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WT3HJT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pfbr6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WU94c0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WU97Ve"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdIpn7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPRDJg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeBtpJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPvaw2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WU98IM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mBf5N"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41uhFa73rbS._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Mixer Grinders \n                 Mixer Grinders \nPryce3999 \nDicos58"
         }
        ]
       },
       {
        "id": 26878,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031170",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1738",
        "dicos": "75",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "French Connection Analog Black Dial Women's Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVch6r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPR5TI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qoAib"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MU9aeO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43p5uZw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3quQMC1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qnuTm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeHahi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pJDBh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMHbpo"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1738"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51sLCB+RaFL._UY679_.jpg"
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
          "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce1738 \nDicos75"
         }
        ]
       },
       {
        "id": 26879,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031229",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "99",
        "dicos": "48",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "BPL Accudigit DT04 Digital Thermometer @99\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CdH0qh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43n8LbL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qSdzI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPGiV3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qnwKY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CiD9rS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQYk9x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNA3G5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMtQNR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CkdWNL"
         },
         {
          "type": "plain",
          "text": "\n\n @99\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/21UEsUKtuxL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Health Care \n                 Thermometers \nPryce99 \nDicos48"
         }
        ]
       },
       {
        "id": 26880,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031289",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1999",
        "dicos": "50",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Oppo Enco Air2i Bluetooth Truly Wireless in-Ear Earbuds \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CaHmOy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MT7KRT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WSOuIT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OYp76C"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J03Plg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTuAZv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVr7to"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOI2mf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGmcot"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MJUaQA"
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
          "text": "https://m.media-amazon.com/images/I/21mrtoQkHfL._SY445_SX342_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce1999 \nDicos50"
         }
        ]
       },
       {
        "id": 26881,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031348",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1279",
        "dicos": "68",
        "catagory": "Toys",
        "text_entities": [
         {
          "type": "plain",
          "text": "Intex Swan Ride-On \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRhQCS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTgpqd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPCeZI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVcCGf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oRcrnl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXg5GY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oPFc3M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVLRBo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0dmZr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZV7n0"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1279"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/718ZwMFnNGL._SX425_.jpg"
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
          "text": " & Games\n\n                Toys & Games \n                Sport & Outdoor \n                Pools & Water Fun \n                Pool Toys \n                Pool Toys \nPryce1279 \nDicos68"
         }
        ]
       },
       {
        "id": 26882,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031408",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "79990",
        "dicos": "69",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "TCL 189.5 cm (75 inches) Bezel-Less Series 4K Ultra HD Smart LED Google TV \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXBAUj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cachup"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeTPAM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdBFFE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CgWN7T"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IVzcNy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXBVq3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oRcvU7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CcyRCr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cdp0ML"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@79990"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51s+XKd-RaL._SX300_SY300_.jpg"
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
          "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \n                 Smart Televisions \n                 Smart Televisions \nPryce79990 \nDicos69"
         }
        ]
       },
       {
        "id": 26883,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031470",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "73",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "Maxima Attivo Collection Analog Rose Gold Dial Men's Watch @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oO6OGt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LOBKh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQo0TG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MSiiRd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461cgXt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MScuaz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbRcjh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0dOa5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXFBYB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qjVWAs"
         },
         {
          "type": "plain",
          "text": "\n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61UJS7YnTcL._UX679_.jpg"
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
          "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce899 \nDicos73"
         }
        ]
       },
       {
        "id": 26884,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031532",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "70",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Newly Launched Rockerz 255 Touch Neckband \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Lij0m"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYbVuK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVcglo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTuYHr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGy75D"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KTKCr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMudbd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43K0UVD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qjW0QI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NChHP"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41b7bLNwb1L._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Toys & Games \n                Games \n                 Games Collections \nPryce1499 \nDicos70"
         }
        ]
       },
       {
        "id": 26885,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031592",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1188",
        "dicos": "64",
        "catagory": "Shoes",
        "text_entities": [
         {
          "type": "plain",
          "text": "Adidas Mens Restound M Running Shoe \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AlZSq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43IncqL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43K0Y7P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Mzy1h"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nh9G8o"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GsN0P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qovrtH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45MUaYO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nf9dDB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43JLSiM"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1188"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81A2J+DYdzL._UX500_.jpg"
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
          "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Men's Shoes \n                Sports & Outdoor Shoes \n                Sports & Outdoor Shoes \nPryce1188 \nDicos64"
         }
        ]
       },
       {
        "id": 26886,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031652",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1199",
        "dicos": "50",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells BT5115 Beard Trimmer \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdC374"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Lk1hU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nfgfs0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cf744q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Llrej"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbdWjc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc6haM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbRuqn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeNJAn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LOZZf"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/31SyJSdwAgL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                Shaving, Waxing & Beard Care \n                Scissors \n                Scissors \nPryce1199 \nDicos50"
         }
        ]
       },
       {
        "id": 26887,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031712",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "47",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Havells HD1903 1200 Watts Powerful Hair Dryer @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXzhEC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P2zx5f"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMvPSm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeHZXq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P02G0G"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ITBf4X"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NenIHy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WT4J8B"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3quyHnz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IWoqa1"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51EvVgRr4kL._SX522_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \n                Hair Dryers & Accessories \n                Hair Dryers & Accessories \nPryce799 \nDicos47"
         }
        ]
       },
       {
        "id": 26888,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031774",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "50",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "HP USB Wireless Spill Resistance Keyboard \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oS35HV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NamTQ5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42FiKIF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43m2HjS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZtCdj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oO7onD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kh2fu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NbM7O7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qyhNUP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwTR4c"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/31BWFhkXiPL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \n                 Keyboard & Mouse Sets \n                 Keyboard & Mouse Sets \nPryce1099 \nDicos50"
         }
        ]
       },
       {
        "id": 26889,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031834",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "349",
        "dicos": "78",
        "catagory": "Shoes",
        "text_entities": [
         {
          "type": "plain",
          "text": "Hygear Mens Superx Sneakers @639\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ng93vq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43LolxI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qyi6ir"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nha5rq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qxa35r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVMPQI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KtLed"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nan51L"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LP677"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGmR9r"
         },
         {
          "type": "plain",
          "text": "\n\n @349\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61KtlYHLb7L._UY500_.jpg"
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
          "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Men's Shoes \n                Casual Shoes \n                Casual Shoes \nPryce349 \nDicos78"
         }
        ]
       },
       {
        "id": 26890,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031894",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "67",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Equinox EQ-LE-99 Lung Exerciser @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXbMev"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43K1eUl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qzHunW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oIbFJo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OS9sFO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGyEEF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42Fj6it"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTJinS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OYpZrU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MT8pTn"
         },
         {
          "type": "plain",
          "text": "\n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51dbq3HCwfL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Health Care \n                 Allergy, Sinus & Asthma \nPryce149 \nDicos67"
         }
        ]
       },
       {
        "id": 26891,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686031953",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "288",
        "dicos": "80",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Duraware Extra-Large Wardrobe/Under Bed Storage Organiser  @288\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZp3ku"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43m2YDq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVdlXZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43vIVCQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qSvXk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gjSDv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQIEHS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mWOTv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOKc5i"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qpdZ5"
         },
         {
          "type": "plain",
          "text": "\n\n @288\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81Vo2E4LFhL._SY450_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Clothing & Wardrobe Storage \n                 Clothes Covers \n                 Clothes Covers \nPryce288 \nDicos80"
         }
        ]
       },
       {
        "id": 26892,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032013",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "69",
        "dicos": "90",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Kuber Industries 30 Biodegradable Garbage Bags @69\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrIUB2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MzRcr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPH2cN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWgPRQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nmcsw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pKkdR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Lj35E"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QW0bp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4427ozx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CdHOvj"
         },
         {
          "type": "plain",
          "text": "\n\n @69\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/419fvSPCvBL._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Waste & Recycling \n                 Dustbin Bags \n                 Dustbin Bags \nPryce69 \nDicos90"
         }
        ]
       },
       {
        "id": 26893,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032073",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "5299",
        "dicos": "59",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Amazon Brand - Solimo OFR Room Heater \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nmfVe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461fcmX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cbel5c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cg26nS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461g0rZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOItNp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQIOPu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOx1Bj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NcxaKD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNQRg5"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@5299"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71EWx+i8efL._SY879_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Room Heaters \n                 Fan Heaters \n                 Fan Heaters \nPryce5299 \nDicos59"
         }
        ]
       },
       {
        "id": 26894,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032133",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1530",
        "dicos": "64",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Wahl WPCT6-2224 Curlito Curling Tong \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43shppM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTJBPy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WSTpt9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MV73aV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQx7nh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WU9NtK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oNATWK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43kbnY2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oL7Jrh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvn4wE"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/31UCbnqeVbL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \n                Irons \n                Irons \nPryce1530 \nDicos64"
         }
        ]
       },
       {
        "id": 26895,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032194",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "70",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Noise Vivid Call Bluetooth Calling Smartwatch  \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTJELe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Jly5Y3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPHnw5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oRvTAc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MJV3Zq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQZamH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MUajTE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNRp0V"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oS3g63"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvmYoM"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/417sL05uZaL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos70"
         }
        ]
       },
       {
        "id": 26896,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032256",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1635",
        "dicos": "70",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "French Connection Analog Dial Men's Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0eufD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc246O"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WSTKvV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NcxqJB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MSjeFd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B08JM3PBQF?smid=A1JFLV2BUSJ5AK&amp;psc=1&amp;th=1&amp;linkCode=sl1&amp;tag=avi1deals6-21&amp;linkId=058238fe52031c276157dfadb025933b&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXCErh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qudkTl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPHwQ9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WT53nX"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1635"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/81HQWMoB8lL._UX679_.jpg"
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
          "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce1635 \nDicos70"
         }
        ]
       },
       {
        "id": 26897,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032317",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2249",
        "dicos": "72",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "Maxima Max Pro X4+ Rugged Bluetooth Calling Smart \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMv0cb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0kViJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NcxtFh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NcxtVN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVdMBB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45OTsdF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvnnri"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXmfqt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXBR9y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRisZg"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@2249"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61+U7yROWGL._UX679_.jpg"
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
          "text": "\n\n                Fashion \n                Women's clothing \n                SS23 Trends \n                 Wildlife safari \n                 Wildlife safari \nPryce2249 \nDicos72"
         }
        ]
       },
       {
        "id": 26898,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032380",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1796",
        "dicos": "64",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "SanDisk Ultra Dual Drive Go USB Type C Pendrive \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXNhKz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZucYx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IVAxUA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0eYCt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVMZ86"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVN63w"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0l71r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CgXLRz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42s8MKe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MV3IbO"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1796"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31kNiBcJ63S._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 Pen Drives \nPryce1796 \nDicos64"
         }
        ]
       },
       {
        "id": 26899,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032445",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "80",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Marv Raze 1.96\" Display, Advanced Bluetooth Calling Smart Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oIbRIC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WVbUgD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qqWncu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQWGJv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CwEQT3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Ljq02"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43FW9MQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeILni"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45RKWdR"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NoyVpn"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41B3c8ZIYfL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos80"
         }
        ]
       },
       {
        "id": 26900,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032505",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1575",
        "dicos": "48",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Wahl 08747-024 Corded Classic Series Clipper \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMvn6z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KuuMt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Kuv2Z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461hy5h"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVd8Xc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeozYM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OYeFfg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeK6Re"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P2Apa1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CdqxlZ"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1575"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31kt5lQG48S._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \n                Hair Clippers & Accessories \n                Hair Clippers & Accessories \nPryce1575 \nDicos48"
         }
        ]
       },
       {
        "id": 26901,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032565",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "805",
        "dicos": "77",
        "catagory": "Watches",
        "text_entities": [
         {
          "type": "plain",
          "text": "FCUK Analog Gray Dial Men's Watch @805\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43IH3pT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P0bfsn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYCVKe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J2u22r"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYD1BA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CcAShZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IWpaMl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P2AElr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMwOlw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGzd1f"
         },
         {
          "type": "plain",
          "text": "\n\n @805\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51TVe5xLX8L._UY679_.jpg"
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
          "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce805 \nDicos77"
         }
        ]
       },
       {
        "id": 26902,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032626",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1699",
        "dicos": "92",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc7f6U"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oO89gt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTshZh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZWD8G"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42FjFJ7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oLUeD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43EhQ0l"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l3MXP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42s96sq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrUwE7"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1699"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41WCgGbvwhL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1699 \nDicos92"
         }
        ]
       },
       {
        "id": 26903,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032686",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "379",
        "dicos": "24",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Active White Detergent Powder - 10 kg Family Pack @379\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwJSMe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rs4Qb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IVARCM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oOvFA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXHc0x"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTsqfh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mCqCf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43EhTt3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ud2Jg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGnGix"
         },
         {
          "type": "plain",
          "text": "\n\n @379\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/414HV9uhIoL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Household Supplies \n                Laundry \n                Laundry Detergents \n                Laundry Detergents \nPryce379 \nDicos24"
         }
        ]
       },
       {
        "id": 26904,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032747",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "33",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Morphy Richards AstonX BT1110 beard trimmer @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXMSb2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OS1tsl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43udskf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l3Qa1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45R3VWe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qxb39H"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42FjRrP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVw3Bi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qI5pi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gkVmV"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31FSjjyJnOL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                 Shaving, Waxing & Beard Care \nPryce799 \nDicos33"
         }
        ]
       },
       {
        "id": 26905,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032807",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "2699",
        "dicos": "50",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Caresmith CHARGE Massage Gun \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43LpmWy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTiceV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oEZk8Q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qqWzZg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kicaQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LhHtg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42s9qaC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Gz64s"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Hg4eq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OR16hI"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@2699"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41tP-yRPooL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Health Care \n                Massage & Relaxation \n                Electric Massagers \n                Electric Massagers \nPryce2699 \nDicos50"
         }
        ]
       },
       {
        "id": 26906,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032868",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1381",
        "dicos": "65",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics ZEB-HT101 Cordless @719\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Ldfe6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qopJbj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs0ZyZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qyj7af"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AnuQy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LmLOj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oM9X5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Pang5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNRHcJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QhaGi"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1381"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41K6xpImMkL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                Shaving, Waxing & Beard Care \n                Scissors \n                Scissors \nPryce1381 \nDicos65"
         }
        ]
       },
       {
        "id": 26907,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032929",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "13499",
        "dicos": "62",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "AGARO Imperial 240-Watt Slow Juicer \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qoSUV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTDAmj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45R43Fc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MT9yKF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rvjHk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MSjKTF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwVyyA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45G4eCW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs9k5E"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42pWC4D"
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
          "text": "https://m.media-amazon.com/images/I/41WSDJpIFLL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                Juicers \n                Juicers \nPryce13499 \nDicos62"
         }
        ]
       },
       {
        "id": 26908,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686032990",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "189",
        "dicos": "81",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "SAF Preety Floral Flower and Leaf in Cone  @189\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrV10X"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l4apf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MT9MS1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTKFTy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrJPS0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43vK0dS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwVOxy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oOTnw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQ2O0g"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l4ioJ"
         },
         {
          "type": "plain",
          "text": "\n\n @189\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51FkEHDh0IL._SX569_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home & kitchen | Prime shopping days \n                Prime Units \n                 Home \n                 Home \nPryce189 \nDicos81"
         }
        ]
       },
       {
        "id": 26909,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033051",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "249",
        "dicos": "50",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Mi Step Out 12 L Mini Backpack  @249\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nakq9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQ2T44"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MJW180"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWhSkK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MV4g1m"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43naDBj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43p7gd8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GqOcS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NN3hb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43JNtFi"
         },
         {
          "type": "plain",
          "text": "\n\n @249\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31m53mkI0GL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                2021 \n                Laptop & tablet accessories \n                 Laptop acc - bags \n                 Laptop acc - bags \nPryce249 \nDicos50"
         }
        ]
       },
       {
        "id": 26910,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033113",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "139",
        "dicos": "65",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Agaro Blaze USBA to Micro Nylon Braided 1.2M Cable @139\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cg30kg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QET9q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qox3DL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43mD4j9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs9J8a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43HvGON"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43IHws9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ncy9KP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qsrHYi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45M7ywt"
         },
         {
          "type": "plain",
          "text": "\n\n @139\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/51ZXk0NE6mL._SX569_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \n                Cables \n                Cables \nPryce139 \nDicos65"
         }
        ]
       },
       {
        "id": 26911,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033173",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "25",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Zebronics Zeb-Power Wired USB Mouse @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfRzJE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45OU9Uj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461ieaP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43php9W"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WT6m6d"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WVcAmb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qqX19U"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43kcF5k"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WSQsZN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZLOTU"
         },
         {
          "type": "plain",
          "text": "\n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31aJNyKmGHL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \n                 Mice \n                 Mice \nPryce149 \nDicos25"
         }
        ]
       },
       {
        "id": 26912,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033235",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "249",
        "dicos": "64",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "PHILIPS Audio TAE1126 Wired in Ear Earphones @269\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NemKLu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdCled"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QgXD2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Ng3Hy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNSjPz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvfJx1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeKDTe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QXdzt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQynXx"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NduWeT"
         },
         {
          "type": "plain",
          "text": "\n\n @249\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31WdkouZGBL._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce249 \nDicos64"
         }
        ]
       },
       {
        "id": 26913,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033295",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "398",
        "dicos": "73",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "HomeStore-YEP Waterproof Double Bed Mattress Protector Cover @398\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVO02A"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOK7i3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQ38w0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXYZF6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42Fksd3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MMfWDs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPxSBI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTa6jH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYAFmB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oGzDol"
         },
         {
          "type": "plain",
          "text": "\n\n @398\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41oLm30IhXL._SY300_SX300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Baby \n                Bedding, Furniture & Room Décor \n                Bedding \n                Toddler Bedding \n                Toddler Bedding \nPryce398 \nDicos73"
         }
        ]
       },
       {
        "id": 26914,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033353",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "399",
        "dicos": "50",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "Nature Prime 100% Natural & Crunchy Premium Whole Cashews 500gm @399\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXCLTu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVO3c6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oPH3FM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ITCRM3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0guEF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZX1UG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43n3O2T"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZdXuj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTisup"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXNqxC"
         },
         {
          "type": "plain",
          "text": "\n\n @399\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/416AbdFxZpL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Nuts & Seeds \n                 Cashews \n                 Cashews \nPryce399 \nDicos50"
         }
        ]
       },
       {
        "id": 26915,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033414",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "143",
        "dicos": "45",
        "catagory": "Grocery",
        "text_entities": [
         {
          "type": "plain",
          "text": "B Natural Litchi, Goodness of fiber, 1 litre (Pack of 2) @143\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MBaIn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oRf5cL"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GufjN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qpTk4a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ckgf3n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oS4Zs3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43kcOpo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NduZaz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWiWoK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MUF7DO"
         },
         {
          "type": "plain",
          "text": "\n\n @143\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/518pKrXDdjL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Coffee, Tea & Beverages \n                Juices \n                 Fruit Juice \n                 Fruit Juice \nPryce143 \nDicos45"
         }
        ]
       },
       {
        "id": 26916,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033474",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "149",
        "dicos": "63",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Bro in Ear Wired Earphones @149\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GqVFk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRkusi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMxjMq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfRRAe"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J2uVIj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qjYjTS"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbT77t"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oO1uTy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRjWCO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oOXbr2"
         },
         {
          "type": "plain",
          "text": "\n\n @149\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/316aSEuJIaL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce149 \nDicos63"
         }
        ]
       },
       {
        "id": 26917,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033593",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "89",
        "dicos": "89",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "pTron USB-A to Micro USB 2.4A Fast Charging Cable @89\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P0bO5t"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ne5tSH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rydfh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXnpCl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42s9ZBg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qlskM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwW8MM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs1BEN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IVBTi8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45HABRT"
         },
         {
          "type": "plain",
          "text": "\n\n @89\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/317rlQQXhYL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \n                Cables \n                Cables \nPryce89 \nDicos89"
         }
        ]
       },
       {
        "id": 26918,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033654",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1099",
        "dicos": "76",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Airdopes Atom 81 True Wireless in Ear Earbuds \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXDcNC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MBuH5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nfi48k"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OZllKg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43LpO7c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qssetg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43LkiBQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45Q5dkc"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXnuG9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4428XNV"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41VtSy7RGhL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce1099 \nDicos76"
         }
        ]
       },
       {
        "id": 26919,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033714",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "799",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Wings X Fire Wireless Gaming in Ear Earbuds @799\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OS2aSt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qssvMO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JlzNIX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43LxXbO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AnZKq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXd6xZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbJoxO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oIcT7s"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45R4Wh0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbIpOf"
         },
         {
          "type": "plain",
          "text": "\n\n @799\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31BM-HCITEL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Headsets \n                 Headsets \nPryce799 \nDicos80"
         }
        ]
       },
       {
        "id": 26920,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033776",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "349",
        "dicos": "65",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "SHREE HANS FASHION Home & Kitchen Studio @349\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc3v5c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/dp/B098WQKGWW?th=1&amp;linkCode=sl1&amp;tag=bmvavinash05-21&amp;linkId=18b85f7edc5f42643623ad336e2fb8ab&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/461ivKT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oNCf3M"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOyCHj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43K3uuN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45PaZ5n"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oO1YsQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GrgI6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOKclR"
         },
         {
          "type": "plain",
          "text": "\n\n @349\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/419RyFsEwKS._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Home & Décor \n                Home Fragrance \n                 Home Fragrance Lamps \n                 Home Fragrance Lamps \nPryce349 \nDicos65"
         }
        ]
       },
       {
        "id": 26921,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033838",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "295",
        "dicos": "88",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "RIATECH PU Leather Extended Gaming Mouse Pad @295\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc3xKm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NEQtr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NgaQAE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43GzIqM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdCWMZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MBNSf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oPk18"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrjiEz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qssF6S"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42l4G6F"
         },
         {
          "type": "plain",
          "text": "\n\n @295\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41B3d6yAIQL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \n                Keyboard & Mice Accessories \n                Keyboard & Mice Accessories \nPryce295 \nDicos88"
         }
        ]
       },
       {
        "id": 26922,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033899",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "295",
        "dicos": "51",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "IONIX Jewellery Scale  @295\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfaLY0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMKflo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WYPk6T"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTdxvo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Nc3HBs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbJyVW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXdixd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oLP2DG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXd3SV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45PEEvy"
         },
         {
          "type": "plain",
          "text": "\n\n @295\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/617SbvdpCoL._SX425_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Digital Kitchen Scales \n                 Digital Kitchen Scales \nPryce295 \nDicos51"
         }
        ]
       },
       {
        "id": 26923,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686033960",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "299",
        "dicos": "70",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "JUARI BE A GENTLEMAN Loss Fit Half Sleeve Streetwear T Shirt for Man T-Shirt @299\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdD2El"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0h2dH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43IpiXF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ITuwIk"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CdJPrn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NdvEsz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OYfOn4"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JlzZIb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ITQCtV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J2vmlV"
         },
         {
          "type": "plain",
          "text": "\n\n @299\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71z6Ui1duVL._UY500_.jpg"
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
          "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 T-Shirts \n                 T-Shirts \nPryce299 \nDicos70"
         }
        ]
       },
       {
        "id": 26924,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034017",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "399",
        "dicos": "83",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Lzard Men's Slim Jeans @399\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYekWi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Lmc54"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oS5ySH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXDyUs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0mPjn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NeEmXB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oPHHTI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qqhLb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42o7WhJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oNey7"
         },
         {
          "type": "plain",
          "text": "\n\n @399\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71tXYC0kdhL._UY741_.jpg"
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
          "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                 Jeans \nPryce399 \nDicos83"
         }
        ]
       },
       {
        "id": 26925,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034079",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "275",
        "dicos": "21",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "Cello Maxis PET Bottle Set @192\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43o0y7v"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42rz8wf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXF1dF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43p7ZLo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kjeDK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NbOf8z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42kjl28"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42qlNUA"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42jUk7a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43uewof"
         },
         {
          "type": "plain",
          "text": "\n\n @275\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/5107ptoq2GL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \n                 Water Bottles \n                 Water Bottles \nPryce275 \nDicos21"
         }
        ]
       },
       {
        "id": 26926,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034140",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "449",
        "dicos": "85",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "HP 64GB Class 10 MicroSD Memory Card @449\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qwLnKm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oLga5T"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NchZSO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43BxA3O"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42nMd9O"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43s1Jmg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42y5u8E"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ueivY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42nMeuo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43JOFbK"
         },
         {
          "type": "plain",
          "text": "\n\n @449\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41pSI-gU4sL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Accessories \n                Memory Cards \n                 Micro SD \n                 Micro SD \nPryce449 \nDicos85"
         }
        ]
       },
       {
        "id": 26927,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034201",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "240",
        "dicos": "4",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "wipro 10W B22D LED Cool Day Light T Bulb @240\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42o7PTl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qoqLUJ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qtzpkU"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43H2ckj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oNw8b"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WNCpop"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WUbrLW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXoavb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oNpth"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oPYvA"
         },
         {
          "type": "plain",
          "text": "\n\n @240\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61WmYwAHW6L._SY450_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs \nPryce240 \nDicos4"
         }
        ]
       },
       {
        "id": 26928,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034262",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "55",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-VITA Wireless Bluetooth 10W Portable Bar Speaker @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42o7Kiv"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43DSTBq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPU5iW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43sjceu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WR1m22"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QFYy0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPy7wC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MC1c3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P5oGam"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Hh95Y"
         },
         {
          "type": "plain",
          "text": "\n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41DYzmprWGL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Bluetooth Speakers \n                 Bluetooth Speakers \nPryce899 \nDicos55"
         }
        ]
       },
       {
        "id": 26929,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034322",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "169",
        "dicos": "81",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "OOBANI Men's Regular T-Shirt @169\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WQXZbn"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WTLAU0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qkUgd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43ueZH1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QXWRd"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oONWah"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPJi3L"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MR0Uwf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qsaPki"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Ejv65"
         },
         {
          "type": "plain",
          "text": "\n\n @169\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/518iKjOCgRL._UX466_.jpg"
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
          "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 Polos \n                 Polos \nPryce169 \nDicos81"
         }
        ]
       },
       {
        "id": 26930,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034384",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "7199",
        "dicos": "50",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Da URBAN® Cadbury Pack of 2 Height Adjustable & Revolving Bar Stool \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43ueSv5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMKyg2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPEEYi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOMrWg"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ov3ca"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qrMKH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qykEx1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45HB9ap"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pwf0a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43gmmBP"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@7199"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91oLgwfLEAL._SY450_.jpg"
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
          "text": "\n\n                Home & Kitchen \n                Furniture \n                Home Bar Furniture \n                 Barstools \n                 Barstools \nPryce7199 \nDicos50"
         }
        ]
       },
       {
        "id": 26931,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034444",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "899",
        "dicos": "55",
        "catagory": "All",
        "text_entities": [
         {
          "type": "plain",
          "text": "Gear Classic 20L Faux Leather Water Resistant Anti Theft Laptop Bag @899\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45IsYL3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbTb6S"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTbkeN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVOWRY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cfb6de"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45QhPHO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWvTyV"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MKeHok"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oOO21D"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qkVjXk"
         },
         {
          "type": "plain",
          "text": "\n\n @899\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/91x7qLAsTPL._UX679_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \n                Bags & Sleeves \n                Bags & Sleeves \nPryce899 \nDicos55"
         }
        ]
       },
       {
        "id": 26932,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034505",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1999",
        "dicos": "67",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Blaupunkt BTW07 ANC Moksha-30Db Bluetooth Truly Wireless in Ear Earbuds \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LiVom"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qpU9tM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNTudf"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WVdrmT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQzuGH"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45MiTg0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pwqbQ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43FXBPi"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVOZNE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WRamUY"
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
          "text": "https://m.media-amazon.com/images/I/31OR42nMiLL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce1999 \nDicos67"
         }
        ]
       },
       {
        "id": 26933,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034565",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "89",
        "dicos": "82",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "GIZGA essentials Portable Tabletop Mobile Holder @89\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IUyMHm"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOKI3h"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43NObBr"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LRk6t"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/4429yPF"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WOz5Jz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IWXI0S"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LeFoW"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43s2xHO"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXDHY0"
         },
         {
          "type": "plain",
          "text": "\n\n @89\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/318PLXv6pEL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Tablet Accessories \n                 Stands \n                 Stands \nPryce89 \nDicos82"
         }
        ]
       },
       {
        "id": 26934,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034626",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "779",
        "dicos": "40",
        "catagory": "Health",
        "text_entities": [
         {
          "type": "plain",
          "text": "Syska HT1309 Hair and Beard Trimmer @779\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43MC7QX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qx7DUM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMKNHY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43BygGo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IY02F2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qoy9PT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45LRrip"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43oAPvD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45OBCHB"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qrjO5t"
         },
         {
          "type": "plain",
          "text": "\n\n @779\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41Ju9WE1TUL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care & Health Appliances \n                Personal Care Appliances \n                 Power Shaving & Hair Removal Devices \n                 Power Shaving & Hair Removal Devices \nPryce779 \nDicos40"
         }
        ]
       },
       {
        "id": 26935,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034686",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "699",
        "dicos": "65",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Ant Esports KM1600 Gaming Keyboard & Mouse Comb @699\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qs18z"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43sjNwK"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MNTA4B"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cf9EYa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qqYDR0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbK1aE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MQqNME"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WV7QgC"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPJIXT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qvp5Je"
         },
         {
          "type": "plain",
          "text": "\n\n @699\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41PuUB3xyoL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \n                 Keyboard & Mouse Sets \n                 Keyboard & Mouse Sets \nPryce699 \nDicos65"
         }
        ]
       },
       {
        "id": 26936,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034746",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "85",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Ring 3 Smart Watch  \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbguxM"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbTX47"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KwjsN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfRw0a"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nc9U1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45R61W6"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRl89c"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPUqlI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://www.amazon.in/Fire-Boltt-Bluetooth-Assistance-Calculator-Monitoring/dp/B0B3MYPX74?pd_rd_w=8HEMq&amp;content-id=amzn1.sym.785b16db-ca40-46a3-ae75-2b38bb48d1aa&amp;pf_rd_p=785b16db-ca40-46a3-ae75-2b38bb48d1aa&amp;pf_rd_r=VNP0EZWKDJ48CJNRD93D&amp;pd_rd_wg=6ynLS&amp;pd_rd_r=31b6ac4d-3413-439b-a831-9a01562776eb&amp;pd_rd_i=B0B3MYPX74&amp;psc=1&amp;linkCode=sl1&amp;tag=avi1deals9-21&amp;linkId=629bfac344576cdc66408a529cbcef77&amp;language=en_IN&amp;ref_=as_li_ss_tl"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qs3NJ"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41QGESTq4LL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos85"
         }
        ]
       },
       {
        "id": 26937,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034808",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "71",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Infinity (JBL Glide 500, 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone  @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWjsmG"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pwB70"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qVL50"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43pMSZt"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WYQeAj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3qs2DRb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPe2lz"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43p8RQa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRlbSq"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPyDuy"
         },
         {
          "type": "plain",
          "text": "\n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/41ijB+fdVkL._SY300_SX300_.jpg"
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
          "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 On-Ear \n                 On-Ear \nPryce999 \nDicos71"
         }
        ]
       },
       {
        "id": 26938,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034872",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "580",
        "dicos": "55",
        "catagory": "Clothing",
        "text_entities": [
         {
          "type": "plain",
          "text": "Skybags Unisex 17L Backpack @ ₹454🔗 \n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IYeLjo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MRkVD0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMx9of"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oWwxfP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WT7NS9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MPebW9"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVuCQy"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVfUt5"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ne68Ub"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CdKid7"
         },
         {
          "type": "plain",
          "text": "\n\n @580\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/71IFuvIm67L._UX679_.jpg"
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
          "text": " & Accessories\n\n                Bags, Wallets and Luggage \n                Bags & Backpacks \n                Backpacks \n                 Casual Backpacks \n                 Casual Backpacks \nPryce580 \nDicos55 \n❌ Regular price @ ₹699"
         }
        ]
       },
       {
        "id": 26939,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034937",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1499",
        "dicos": "80",
        "catagory": "Computers",
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Marv Raze 1.96\" Display, Advanced Bluetooth Calling Smart Watch \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTy5PD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXjcPa"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MSlIn1"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZfa4P"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3P0cPuj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZrG5Q"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3WPFfJw"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NgbazI"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OXhwFp"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43HhllI"
         },
         {
          "type": "plain",
          "text": "\n\n "
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
          "text": "https://m.media-amazon.com/images/I/41B3c8ZIYfL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos80"
         }
        ]
       },
       {
        "id": 26940,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686034999",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "999",
        "dicos": "67",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Blaupunkt Newly Launched SBA15 14W Bluetooth Soundbar @999\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43J6vvj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MVgh6X"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ne3RrX"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IZYzOu"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43Iq1YT"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MTQonN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OVxIa0"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CwGUuh"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CwGUKN"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CiHafW"
         },
         {
          "type": "plain",
          "text": "\n\n @999\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31vSpb1zrcL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Soundbar Speakers \n                 Soundbar Speakers \nPryce999 \nDicos67"
         }
        ]
       },
       {
        "id": 26941,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686035064",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "199",
        "dicos": "80",
        "catagory": "Electronics",
        "text_entities": [
         {
          "type": "plain",
          "text": "Sounce 38W Type-C 20W PD & 18W 3.0 Qualcomm Certified Dual USB Car Charger @ ₹199🔗 \n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45KXjsj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cdsu1N"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CfRHZo"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CbgWfs"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45MjsGE"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXJehb"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42ov93w"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MZs1p8"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3CeKXv2"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oOOv3T"
         },
         {
          "type": "plain",
          "text": "\n\n @199\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/61d3SWjNNFL._SX522_.jpg"
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
          "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Mobile Accessories \n                Chargers \n                Chargers \nPryce199 \nDicos80 \n❌ Regular price @ ₹499"
         }
        ]
       },
       {
        "id": 26942,
        "type": "message",
        "date": "2023-06-06",
        "date_unixtime": "1686035127",
        "from": "All1App daily",
        "from_id": "channel1858370886",
        "photo": "(File not included. Change data exporting settings to download.)",
        "pryce": "1799",
        "dicos": "59",
        "catagory": "Home",
        "text_entities": [
         {
          "type": "plain",
          "text": "LUMINOUS 1200MM 52-Watt High Speed Ceiling Fan @ ₹1,799🔗 \n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3MR1JoP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3oMyVFY"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXPOo3"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3IXPVzZ"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/45ItrNj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Cg4A5G"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43AoO5Y"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3J0hJnj"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OTtTSP"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/42oNSf1"
         },
         {
          "type": "plain",
          "text": "\n\n "
         },
         {
          "type": "mention",
          "text": "@1799"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://m.media-amazon.com/images/I/31KsH6gdJBL._SX300_SY300_QL70_FMwebp_.jpg"
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
          "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \n                 Ceiling Fans \n                 Ceiling Fans \nPryce1799 \nDicos59 \n❌ Regular price @ ₹2,100"
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
                // console.log('All including  Amzn Links');
                // await driver.get(Input[i].text_entities[j].text);
                // otherurl = await driver.get(await driver.);
                // otherurl = await driver.get((await driver.getCurrentUrl()));
                // await driver.get
                // console.log('otherurl is '+String(otherurl));
                // await driver.get("https://earnkaro.com/create-earn-link");
                // await driver.findElement(By.id("deallink")).click();
                if (Input[i].text_entities[j].text.includes("amzn")) {
                  // await driver.actions()
                  // .sendKeys(Input[i].text_entities[j].text)
                  // .sendKeys(String(otherurl))
                  // .sendKeys(Input[i].text_entities[j].href) //telugu deals
                  // .perform()
                } else {
                  console.log("Other than Amazon");
                  break;
                }
                await driver
                  .findElement(By.id("Btn_Make_Profit_Button"))
                  .click();
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
            telegram(photo, "@all1appweb", texwct);
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
