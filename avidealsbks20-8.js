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
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.XMLHttpRequest = require("xhr2");
// var XMLHttpRequest = require('xhr2');
var xhr = new global.XMLHttpRequest();
// import axios from 'axios';
const axios = require("axios").default;
let pricelinks = "", photolinks = "",
  urlvalue1 = "";
let chat_id = "@all1app";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E"; //alldeals

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

  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  driver = await chrome.Driver.createSession(options);

  //@Firefox
  // version change error change 108the lib dir of chromedriver(not bin) with new chromedriver exe
  // driver = await new Builder().forBrowser("firefox").build();
  const Input =
[
  {
    "id": 34698,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "226",
    "dicos": "64",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "PALMOLIVE Body Wash (750 ml) at 266🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32319872"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/body-wash/i/9/9/-original-imagqr4tgbnzj7ae.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nBath & Shower \nBath Essentials \n \n \npryce226 \ndicos64\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34699,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "261",
    "dicos": "50",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "50% Off : BAJAJ Coconut Hair Oil, 1.2L @261🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32319882"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/hair-oil/d/z/s/-original-imagq63mx8fyxtvr.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nHair Care and Accessory \nHair Care \n \n \npryce261 \ndicos50\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34700,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "15490",
    "dicos": "48",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lenovo Tab M10 FHD 3rd Gen 4 GB RAM 64 GB ROM 10.1 inch with Wi-Fi 4G Tablet @15,490   Supercoins & Bank Offer🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32319883"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/g/r/c/zaaf0017in-zaaf0039in-lenovo-original-imagzmyfq5b4ayrr.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nMobiles & Accessories \nTablets \nTablets with Call Facility \n \n \npryce15490 \ndicos48\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34701,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "366",
    "dicos": "72",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Hubberholme Men's Slim Trousers 30 @ ₹407🔗  \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KMK5lW"
     },
     {
      "type": "plain",
      "text": "\n\n @366\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/31XwU+mhDgL._UY445_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Apparel Steal Deals \n                Apparel_1 \n                Men \n                Men \nPryce366 \nDicos72 \nitemtipeAmazon\n❌Regular price @ ₹899"
     }
    ]
   },
   {
    "id": 34702,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "492",
    "dicos": "71",
    "catagory": "Shoes",
    "text_entities": [
     {
      "type": "plain",
      "text": "Maha    Carlton London Sliders 7uk @ ₹231 🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3P0XZn1"
     },
     {
      "type": "plain",
      "text": "\n\n @492\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61xlNEsqvHL._UX395_.jpg"
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
      "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Women's Shoes \n                 Flip-Flops & Slippers \n                 Flip-Flops & Slippers \nPryce492 \nDicos71 \nitemtipeAmazon\n❌Regular price @ ₹799"
     }
    ]
   },
   {
    "id": 34703,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2179",
    "dicos": "25",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Cello Dynamo Chair Set of 2  @ ₹1,787🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YJ76vD"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@2179"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/712JjPeQ6tL._SY355_.jpg"
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
      "text": "\n\n                Home & Kitchen \n                Furniture \n                Living Room Furniture \n                Chairs \n                Chairs \nPryce2179 \nDicos25 \nitemtipeAmazon\n ❌Regular price @ ₹2,100\n💡  Apply ₹100 coupon"
     }
    ]
   },
   {
    "id": 34704,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "399",
    "dicos": "69",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "Men's Cargo Pant (All Size) @314🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32319992"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/cargo/k/e/f/xxl-kcg1801-kraasa-original-imaggvxpqtg2u8xt.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nClothing and Accessories \nBottomwear \nCargos \n \n \npryce399 \ndicos69\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34705,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1399",
    "dicos": "80",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "boAt Wave Call 2 Smart Watch \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QGI3rj"
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
      "text": "https://m.media-amazon.com/images/I/61EzUZG0njL._SY450_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1399 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34706,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "99",
    "dicos": "80",
    "catagory": "Sports",
    "text_entities": [
     {
      "type": "plain",
      "text": "FitBox Sports Glove3 Gym Gloves @99🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QMjrh0"
     },
     {
      "type": "plain",
      "text": "\n\n @99\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/6157OLbxdLL._SX425_.jpg"
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
      "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Accessories \n                 Gloves \n                 Gloves \nPryce99 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34707,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "59",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320051"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/y/c/-original-imagrkek2hhfjr7z.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nAudio & Video \nHeadset \nEarphones \n \n \npryce999 \ndicos59\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34708,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "149",
    "dicos": "79",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Portronics Konnect L 20W PD Quick Charge Type-C  @149🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OETRrr"
     },
     {
      "type": "plain",
      "text": "\n\n @149\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51hreDKa97L._SY450_.jpg"
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
      "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \n                Cables \n                Cables \nPryce149 \nDicos79 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34709,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "83",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "boAt Wave Style Smart Watch  @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QRvvxv"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61wqooVp0tL._SX425_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce999 \nDicos83 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34710,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "87",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Half Sleeve Solid T-Shirts (Pack of 3) @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3qEzyCp"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71qStemLMxL._UX466_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 T-Shirts \n                 T-Shirts \nPryce499 \nDicos87 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34711,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "409",
    "dicos": "77",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "SP Silicon Power 64GB USB 3.0 Flash Drive @409🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E5E53O"
     },
     {
      "type": "plain",
      "text": "\n\n @409\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41ifxA3VFYL._SX425_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 Pen Drives \nPryce409 \nDicos77 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34712,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "8815",
    "dicos": "71",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Dell-E2423HN (60.45cm) FHD Monitor 1920x1080@60 Hz \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sfQtvv"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@8815"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81R53g4KiIL._SX450_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                2021 \n                 Gaming Monitors \nPryce8815 \nDicos71 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34713,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "7999",
    "dicos": "70",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Da URBAN® Merlion Office Chair \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QPg6gX"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@7999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61qEhDtYkRL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Furniture \n                Study & Home Office Furniture \n                Chairs & Sofas \n                Chairs & Sofas \nPryce7999 \nDicos70 \nitemtipeAmazon\n✅ Apply ₹800 coupon"
     }
    ]
   },
   {
    "id": 34714,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "99",
    "dicos": "80",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "DDecora Plastic Masala Rangoli Box - 7 Sections @99🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3skNKRF"
     },
     {
      "type": "plain",
      "text": "\n\n @99\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/415hbI3AroL._SX355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \n                Dressing, Seasoning & Spice Dispensers \n                Dressing, Seasoning & Spice Dispensers \nPryce99 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34715,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "38",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "ZEBRONICS Zeb- DLK01 USB Multimedia Keyboard @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QLLn4w"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81k-xNUXIwL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Keyboards, Mice & Input Devices \n                 Keyboards \n                 Keyboards \nPryce499 \nDicos38 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34716,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "30",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Electric Dry Iron @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QMa7cJ"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61v05g7GJlL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \n                Irons, Steamers & Accessories \n                Irons, Steamers & Accessories \nPryce699 \nDicos30 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34717,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "109",
    "dicos": "89",
    "catagory": "Video",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ant Value OM100 Wired Optical Mouse, @109🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QMRbL1"
     },
     {
      "type": "plain",
      "text": "\n\n @109\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71XJffbFloL._SX342_.jpg"
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
      "text": " Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Gaming Mice \n                 Gaming Mice \nPryce109 \nDicos89 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34718,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "53",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "RPM Euro Games Gaming Keyboard @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45ES6kZ"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/616fdRSET7L._SX425_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Gaming Keyboards \n                 Gaming Keyboards \nPryce699 \nDicos53 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34719,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "181",
    "dicos": "51",
    "catagory": "Beauty",
    "text_entities": [
     {
      "type": "plain",
      "text": "Everyuth Purifying Neem Face Wash Pack of 2 @181🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/47y8wgN"
     },
     {
      "type": "plain",
      "text": "\n\n @181\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Wel44VEeL._SY355_.jpg"
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
      "text": "\n\n                Beauty \n                Skin Care \n                Face \n                Cleansing Creams & Milks \n                Cleansing Creams & Milks \nPryce181 \nDicos51 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34720,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "78",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ant Value Wave 60, 5.3 BT Wireless Earphones @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45lj9lt"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51lphxDMIKL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce699 \nDicos78 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34721,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "599",
    "dicos": "60",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Eveready 9W B22D LED Cool White Bulb, Pack of 10  @599🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45hu5Au"
     },
     {
      "type": "plain",
      "text": "\n\n @599\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81dfZ4P4-nL._SX466_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs \nPryce599 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34722,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "591",
    "dicos": "55",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Redgear Blaze Semi-Mechanical wired Gaming keyboard  @591🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45gMzB9"
     },
     {
      "type": "plain",
      "text": "\n\n @591\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61M2CPqMgwL._SX425_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Gaming Keyboards \n                 Gaming Keyboards \nPryce591 \nDicos55 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34723,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "410",
    "dicos": "84",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "AVITA Polyester Laptop Bag @410🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YLhIKz"
     },
     {
      "type": "plain",
      "text": "\n\n @410\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51WYbF3qMSL._SY450_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \n                Bags & Sleeves \n                Bags & Sleeves \nPryce410 \nDicos84 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34724,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "104",
    "dicos": "79",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Portronics Konnect Core Type C Cable  @87🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3slCfte"
     },
     {
      "type": "plain",
      "text": "\n\n @104\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51xwgbot-tL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \n                Cables \n                Cables \nPryce104 \nDicos79 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34725,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "899",
    "dicos": "70",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Mivi Collar Flash Bluetooth Wireless in Ear Earphones @899🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3qww9Wq"
     },
     {
      "type": "plain",
      "text": "\n\n @899\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61MDDy1LgkL._SY450_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce899 \nDicos70 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34726,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "899",
    "dicos": "55",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Redgear Cosmo Spectre Wired Over Ear Headphones with Mic @899🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YFJFmY"
     },
     {
      "type": "plain",
      "text": "\n\n @899\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51uzAkxliyL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Headsets \n                 Headsets \nPryce899 \nDicos55 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34727,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1499",
    "dicos": "75",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Noise Pulse 2 Max  Bluetooth Calling Smart Watch \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/47DCAaC"
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
      "text": "https://m.media-amazon.com/images/I/61SSVxTSs3L._SY355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos75 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34728,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "989",
    "dicos": "34",
    "catagory": "Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Beard Trimmer @450🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YJ7omd"
     },
     {
      "type": "plain",
      "text": "\n\n @989\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51aq3l0cqEL._SY450_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care \n                Shaving, Waxing & Beard Care \n                Scissors \n                Scissors \nPryce989 \nDicos34 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34729,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "599",
    "dicos": "89",
    "catagory": "Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Wahl 09649-024 Cord/Cordless Color Pro Hair Clipper for Men @599🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OJuqEX"
     },
     {
      "type": "plain",
      "text": "\n\n @599\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61yLmYxUz6S._SY450_.jpg"
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
      "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \n                Hair Clippers & Accessories \n                Hair Clippers & Accessories \nPryce599 \nDicos89 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34730,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "294",
    "dicos": "73",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Shoulder Tshirt @294🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3snaqAQ"
     },
     {
      "type": "plain",
      "text": "\n\n @294\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61pD8Fq89IL._UY606_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 T-Shirts \n                 T-Shirts \nPryce294 \nDicos73 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34731,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "77",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "VEHOP Reason Beatbox Wireless 5W Bluetooth Speaker  @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YJhKCO"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/619+InqgkcL._SY550_.jpg"
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
      "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Multimedia Speaker Systems \n                 Multimedia Speaker Systems \nPryce699 \nDicos77 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34732,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "299",
    "dicos": "43",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Vega Led Emergency Rechargeable Lamp with 900 mAH @299🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KPfmES"
     },
     {
      "type": "plain",
      "text": "\n\n @299\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41S1jGjeEcL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                 Emergency Lights \nPryce299 \nDicos43 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34733,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2598",
    "dicos": "41",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Crompton Instabliss 3-L Instant Water Heater \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E4q46D"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@2598"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41J4W4lznFL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Water Heaters & Geysers \n                 Instant Water Heaters \n                 Instant Water Heaters \nPryce2598 \nDicos41 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34734,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2599",
    "dicos": "64",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Cabin Carry Expandable Suitcase \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E34AqF"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/81p1jj5gehS._SY606_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Deals on shoes, watches, luggage & jewellery \n                Deals on watches, jewellery & luggage \n                 Luggage \n                 Luggage \nPryce2599 \nDicos64 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34735,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "459",
    "dicos": "65",
    "catagory": "Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ego Analog Black Dial Men's Watch @459🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E1sx1C"
     },
     {
      "type": "plain",
      "text": "\n\n @459\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81m4hy2qieL._UY445_.jpg"
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
      "text": "\n\n                Fashion \n                Watches \n                Watches: Crazy deals \n                 For Men \n                 For Men \nPryce459 \nDicos65 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34736,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "60",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "SYSKA Qube 5W, Ultra-Portable Mini Wireless Bluetooth Speaker @799🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OGpot1"
     },
     {
      "type": "plain",
      "text": "\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51ETuUPhXmL._SY355_.jpg"
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
      "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Bluetooth Speakers \n                 Bluetooth Speakers \nPryce799 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34737,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "68",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "pTron Tangent Sports, 60Hrs Playtime, ENC BT5.2 Headphone @799🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KOctnT"
     },
     {
      "type": "plain",
      "text": "\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51e3D9y5XRL._SX425_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce799 \nDicos68 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34738,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "310",
    "dicos": "69",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Cloth Theory Men's Regular T-Shirt @310🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E0lYMS"
     },
     {
      "type": "plain",
      "text": "\n\n @310\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/713XPwoWI6L._UX466_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Made for Amazon brands \n                All SPB apparel \n                Sub categories \n                Sub categories \nPryce310 \nDicos69 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34739,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1799",
    "dicos": "40",
    "catagory": "Shoes",
    "text_entities": [
     {
      "type": "plain",
      "text": "U.S. POLO ASSN. Mens Panal Sneakers \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KRZ5yT"
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
      "text": "https://m.media-amazon.com/images/I/41ojjAehWRL._UY625_.jpg"
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
      "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Men's Shoes \n                Casual Shoes \n                Casual Shoes \nPryce1799 \nDicos40 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34740,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "809",
    "dicos": "68",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "SanDisk Ultra 128 GB USB 3.0 Pen Drive @ ₹809🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KN1HhC"
     },
     {
      "type": "plain",
      "text": "\n\n @809\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41EjaRq8G6L._SX450_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 Pen Drives \nPryce809 \nDicos68 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34741,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "259",
    "dicos": "81",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "MAXIMA Elite Analog Watch - For Women @ ₹259🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320605"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/d/7/e/-original-imagrgwxmtdyzgre.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nWatches \nWrist Watches \nMAXIMA Wrist Watches \n \n \npryce259 \ndicos81\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34742,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "369",
    "dicos": "40",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "48% Off : Himalaya Neem Facewash (150 ml x 3) @319.🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320607"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kkmwr680/face-wash/m/q/v/purifying-neem-himalaya-original-imafzxz4kbdyunyn.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nBody & Face Skin Care \nBody and Face Care \n \n \npryce369 \ndicos40\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34743,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "498",
    "dicos": "50",
    "catagory": "Beauty",
    "text_entities": [
     {
      "type": "plain",
      "text": "50% Off : The Man Company Perfume Gift Set (20 ml x 4) at 498. 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/44hKSCl"
     },
     {
      "type": "plain",
      "text": "\n\n @498\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61n0OKeCF+L._SX425_.jpg"
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
      "text": "\n\n                Beauty \n                Fragrance \n                 Perfume \nPryce498 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34744,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "795",
    "dicos": "60",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Portronics Harmonics X1 in Ear Wireless Bluetooth 5.0 Sports Headset  @795🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3P4YD31"
     },
     {
      "type": "plain",
      "text": "\n\n @795\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51qTJ-+XeaL._SX450_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce795 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34745,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "80",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "ZEBRONICS DC Joker Edition Sound Bomb  @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3P3ibVa"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61ULpz8gBUL._SY450_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear \nPryce999 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34746,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "149",
    "dicos": "57",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ambrane Unbreakable 60W / 3A Fast Charging 1.5m Braided Type C Cable @149🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OGMY98"
     },
     {
      "type": "plain",
      "text": "\n\n @149\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61UzQMCRaeL._SX342_.jpg"
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
      "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Cables & Accessories \n                Cables \n                Cables \nPryce149 \nDicos57 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34747,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2286",
    "dicos": "34",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320672"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/fan/6/i/j/-original-imagqzwqxgsr3xhg.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nHome Appliances \nFans \n \n \npryce2286 \ndicos34\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34748,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "176",
    "dicos": "42",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "10x Shakti Chakki Fresh Atta, 5Kg @176🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320692"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l1zc6fk0/flour/t/a/4/100-shakti-chakki-fresh-atta-10kg-1-whole-wheat-flour-10x-original-imagdf4yuwterykk.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \n \n \n \n \n \npryce176 \ndicos42\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34749,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "358",
    "dicos": "84",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "wipro 10W B22D LED Cool Day White Bulb, Pack of 4  @350🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45AXSUB"
     },
     {
      "type": "plain",
      "text": "\n\n @358\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81BXPL7FeQL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs \nPryce358 \nDicos84 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34750,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "65",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ambrane Dual Fan Laptop Cooling Pad/ @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sfQHml"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71KgibAy4WL._SY355_.jpg"
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
      "text": "\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \n                 Cooling Pads \n                 Cooling Pads \nPryce699 \nDicos65 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34751,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "619",
    "dicos": "79",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Christy World Men's Regular fit Jacket @619🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/47BIYzh"
     },
     {
      "type": "plain",
      "text": "\n\n @619\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Pf0lBCGZL._UX466_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                Winter Wear \n                Coats, Jackets & Vests \n                Coats, Jackets & Vests \nPryce619 \nDicos79 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34752,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "5497",
    "dicos": "50",
    "catagory": "Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "Casio G-Shock Analog-Digital Black Dial Men's Watch \n with icici cc🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/44gDg2L"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@5497"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/713fTMPcAjL._UX342_.jpg"
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
      "text": "\n\n                Watches \n                Trends \n                Men \n                 Pop coloured watches \n                 Pop coloured watches \nPryce5497 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34753,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2545",
    "dicos": "54",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "BLOWHOT Ruby 3 Burners Gas Stove  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45zuEFB"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@2545"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51s9I4d0GtL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                 Gas Stoves \nPryce2545 \nDicos54 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34754,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "4390",
    "dicos": "56",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "ONLINE Allia 60 Cms Chimney  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3qAEyYR"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@4390"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41rb-1itY2L._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                 Range Hoods & Chimneys \nPryce4390 \nDicos56 \nitemtipeAmazon\n✅ Apply ₹100 coupon"
     }
    ]
   },
   
   {
    "id": 34756,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1350",
    "dicos": "84",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "Medium Check-in Suitcase (61 cm) @ ₹1,250🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32320824"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/832/832/xif0q/suitcase/7/a/g/66-polyester-soft-side-medium-trolley-bag-1-bl-m-003-check-in-original-imagqargau2rdqsy.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBags, Wallets & Belts \nLuggage & Travel \nSuitcases \n \n \npryce1350 \ndicos84\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34757,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "189",
    "dicos": "81",
    "catagory": "Toys",
    "text_entities": [
     {
      "type": "plain",
      "text": "Jack Royal Blaze Storm Foam Blaster Toy Gun @189🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QMjWaS"
     },
     {
      "type": "plain",
      "text": "\n\n @189\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71VgVd2OQWL._SY355_.jpg"
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
      "text": " & Games\n\n                Toys & Games \n                Sport & Outdoor \n                Blasters & Toy Guns \n                 Foam Blasters \n                 Foam Blasters \nPryce189 \nDicos81 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34758,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1499",
    "dicos": "88",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Fire-Boltt Phoenix Pro 1.39\" Bluetooth Calling Smartwatch, \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sb5Wgk"
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
      "text": "https://m.media-amazon.com/images/I/61ArSKA048L._SY355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1499 \nDicos88 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34759,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "399",
    "dicos": "84",
    "catagory": "Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "beatXP Actifit Flare Digital Weighing Scale @399🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45x3eQL"
     },
     {
      "type": "plain",
      "text": "\n\n @399\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/31EbVmzuNsL._SY450_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Home Medical Supplies & Equipment \n                Health Monitors \n                Weighing Scales \n                Weighing Scales \nPryce399 \nDicos84 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34760,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "754",
    "dicos": "62",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Aristocrat Unisex Black Oxford Fabric 28.82L Laptop Bags @754🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QKjyJE"
     },
     {
      "type": "plain",
      "text": "\n\n @754\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71qcVUTdvhL._UX569_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                Laptop Accessories \n                Bags & Sleeves \n                Bags & Sleeves \nPryce754 \nDicos62 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34761,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "179",
    "dicos": "76",
    "catagory": "Video",
    "text_entities": [
     {
      "type": "plain",
      "text": "Ant Esports GM40 Wired Optical Gaming Mouse @179🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KPfGDA"
     },
     {
      "type": "plain",
      "text": "\n\n @179\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51eG5GY2IXL._SY355_.jpg"
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
      "text": " Games\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Gaming Mice \n                 Gaming Mice \nPryce179 \nDicos76 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34762,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1599",
    "dicos": "67",
    "catagory": "Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "PTron Newly Launched Reflect Ace Smartwatch \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45yBPxH"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/619ju71MDQL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1599 \nDicos67 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34763,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "759",
    "dicos": "42",
    "catagory": "Tools",
    "text_entities": [
     {
      "type": "plain",
      "text": "Esquire Elegant GREY 360° Spin Mop Set  @759🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QHTr6j"
     },
     {
      "type": "plain",
      "text": "\n\n @759\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71xCVVDyMyL._SX355_.jpg"
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
      "text": " & Home Improvement\n\n                Home Improvement \n                Cleaning Supplies \n                Mopping Supplies \n                 Bucket Mops \n                 Bucket Mops \nPryce759 \nDicos42 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34764,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "22990",
    "dicos": "15",
    "catagory": "All",
    "text_entities": [
     {
      "type": "plain",
      "text": "IFB 6 Kg 5 Star Fully Automatic Front Load Washing Machine \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45mlvRi"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@22990"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61p40Tv8joL._SX466_.jpg"
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
      "text": "\n\n                Home & Kitchen \n                Large Appliances \n                Washing Machines & Dryers \n                 All-in-One Washers & Dryers \n                 All-in-One Washers & Dryers \nPryce22990 \nDicos15 \nitemtipeAmazon\n✅ Apply ₹1000 coupon"
     }
    ]
   },
   {
    "id": 34765,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "16690",
    "dicos": "21",
    "catagory": "All",
    "text_entities": [
     {
      "type": "plain",
      "text": "LG 185 L 4 Star Inverter Direct-Cool Single Door Refrigerator \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/44gzw1i"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@16690"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61g7eNjP0DL._SX466_.jpg"
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
      "text": "\n\n                Home & Kitchen \n                Large Appliances \n                 Refrigerators \nPryce16690 \nDicos21 \nitemtipeAmazon\n✅ Apply ₹500 coupon"
     }
    ]
   },
   {
    "id": 34766,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "72",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "AmazonBasics 15W Qi-Certified Fast Wireless Charging Circular Pad @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/44lWtAe"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61z8stNHzEL._SX425_.jpg"
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
      "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Mobile Accessories \n                Chargers \n                Chargers \nPryce699 \nDicos72 \nitemtipeAmazon"
     }
    ]
   },
   
   {
    "id": 34768,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "749",
    "dicos": "50",
    "catagory": "Shoes",
    "text_entities": [
     {
      "type": "plain",
      "text": "US Polo Association Men's Sliders 10uk @ ₹824🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OLFDVE"
     },
     {
      "type": "plain",
      "text": "\n\n @749\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/614yfvzaUpL._UX395_.jpg"
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
      "text": " & Handbags\n\n                Shoes & Handbags \n                Shoes \n                Men's Shoes \n                 Sandals & Floaters \n                 Sandals & Floaters \nPryce749 \nDicos50 \nitemtipeAmazon\n❌ Regular price @ ₹1,299"
     }
    ]
   },
   {
    "id": 34769,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "99",
    "dicos": "83",
    "catagory": "Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "Rosemary Dried Leaf (100g +100gm | 200gm)@ 99 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3YEVWIw"
     },
     {
      "type": "plain",
      "text": "\n\n @99\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Swpjpa4DL._SY550_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Dried Fruits \n                 Apricots \n                 Apricots \nPryce99 \nDicos83 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34770,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "239",
    "dicos": "76",
    "catagory": "Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Casual 10 Ltrs Blue Casual Backpack @239🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3En3t5z"
     },
     {
      "type": "plain",
      "text": "\n\n @239\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/7156h2qfQ7L._SY450_.jpg"
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
      "text": " & Accessories\n\n                Bags, Wallets and Luggage \n                Bags & Backpacks \n                Backpacks \n                 Casual Backpacks \n                 Casual Backpacks \nPryce239 \nDicos76 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34771,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "989",
    "dicos": "45",
    "catagory": "Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "Sonata Digital Grey Dial Men's Watch @ ₹899🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3E5EC5O"
     },
     {
      "type": "plain",
      "text": "\n\n @989\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91UnfluJ6hL._UY445_.jpg"
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
      "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands \nPryce989 \nDicos45 \nitemtipeAmazon\n❌ Regular price @ ₹1,699"
     }
    ]
   },
   {
    "id": 34772,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "53",
    "catagory": "Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Havells 1200 Watts Powerful Hair Dryer @ ₹699🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KOVgdX"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51EvVgRr4kL._SY450_.jpg"
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
      "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \n                Hair Dryers & Accessories \n                Hair Dryers & Accessories \nPryce699 \nDicos53 \nitemtipeAmazon\n❌ Regular price @ ₹1,299"
     }
    ]
   },
   {
    "id": 34773,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1599",
    "dicos": "56",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "🚀 🚀 Sansui Pedestal Fan @ ₹1,599🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32321254"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/fan/7/g/i/-original-imagqft5yvxmjmyf.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nHome Appliances \nFans \n \n \npryce1599 \ndicos56\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34774,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "4199",
    "dicos": "52",
    "catagory": "Sports",
    "text_entities": [
     {
      "type": "plain",
      "text": "Leader Speedy Bike 20T Kids Cycle for 6 to 10 Years 12\" @ ₹3,799🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/44mY6gV"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@4199"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71rW7pjs7CL._SX425_.jpg"
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
      "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Cycling \n                Kids' Cycles & Accessories \n                 Kids' Cycles \n                 Kids' Cycles \nPryce4199 \nDicos52 \nitemtipeAmazon\n\n💡  Apply ₹400 coupon"
     }
    ]
   },
   {
    "id": 34775,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2699",
    "dicos": "68",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32321275"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/5/5/y/-original-imagqhktya6q8sf3.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nHome Appliances \nWater purifiers \n \n \npryce2699 \ndicos68\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34776,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "81",
    "catagory": "Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "hair removing from face and body Black @799🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3slSIxt"
     },
     {
      "type": "plain",
      "text": "\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51uULCso-+L._SY450_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Personal Care & Health Appliances \n                Personal Care Appliances \n                 Power Shaving & Hair Removal Devices \n                 Power Shaving & Hair Removal Devices \nPryce799 \nDicos81 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34777,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "11999",
    "dicos": "43",
    "catagory": "Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Acer 32 inches HD Ready Smart LED Google TV @ ₹11,999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3KN28Zi"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/511DmhAgHAL._SX450_.jpg"
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
      "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \n                 Smart Televisions \n                 Smart Televisions \nPryce11999 \nDicos43 \nitemtipeAmazon\n ❌ Regular price @ ₹13,999\n💡 Apply ₹1,000 coupon"
     }
    ]
   },
   {
    "id": 34778,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "408",
    "dicos": "50",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "MILTON Insulated Inner Stainless Steel Casserole with Glass Lid, 780 ml @ ₹408🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3somVfa"
     },
     {
      "type": "plain",
      "text": "\n\n @408\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71I5iu5PstL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \n                Dinnerware & Serving Pieces \n                Dinnerware & Serving Pieces \nPryce408 \nDicos50 \nitemtipeAmazon\n❌ Regular price @ ₹699"
     }
    ]
   },
   {
    "id": 34779,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "403",
    "dicos": "43",
    "catagory": "Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Cello Fusion Plastic Pedal Dustbin, Big @ ₹397🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3OA4ZFO"
     },
     {
      "type": "plain",
      "text": "\n\n @403\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61xiwl-9CeL._SX425_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Storage & Organisation \n                Waste & Recycling \n                 Dustbins \n                 Dustbins \nPryce403 \nDicos43 \nitemtipeAmazon\n❌ Regular price @ ₹599"
     }
    ]
   },
   {
    "id": 34780,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "360",
    "dicos": "8",
    "catagory": "Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "49% Off : Wood Pressed Mustard Oil, 1 Ltr @199.🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3P34SUR"
     },
     {
      "type": "plain",
      "text": "\n\n @360\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71gQnxfOVTL._SY550_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Cooking & Baking Supplies \n                Oils & Ghee \n                Oils \n                Oils \nPryce360 \nDicos8 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34781,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "396",
    "dicos": "47",
    "catagory": "",
    "text_entities": [
     {
      "type": "plain",
      "text": "49% Off : The Man Company EDP - Sky, 50 ml @375.🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://ekaro.in/enkr20230820s32321406"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/g/v/6/50-sky-long-lasting-perfume-for-men-eau-de-toilette-the-man-original-imaghe46q3akaegs.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nFragrances \nPerfume \n \n \npryce396 \ndicos47\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 34782,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "35",
    "catagory": "Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "offee Powder (60g X 4) @399🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QMw6jH"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81Twa5qzyrL._SY550_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Hampers & Gourmet Gifts \n                 Coffee Gifts \nPryce499 \nDicos35 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 34783,
    "type": "message",
    "date": "2023-08-20",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1099",
    "dicos": "89",
    "catagory": "All",
    "text_entities": [
     {
      "type": "plain",
      "text": "Fire-Boltt Ninja 3 1.83\" Display Smartwatch \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3shiaEr"
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
      "text": "https://m.media-amazon.com/images/I/61SbNsTVBeL._SY355_.jpg"
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
      "text": "\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce1099 \nDicos89 \nitemtipeAmazon"
     }
    ]
   }
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
    pricenum = 0;
  let id = 1489;
  let len = 0;
  // let idlen =  "https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json";
    let idlen = "https://avi1deals-default-rtdb.firebaseio.com/amazon.json";
  let access_token =
    "EAAKw6ZAutPZBoBAMi8kHibuNJ0LedkfqkBQfjEsDHn4ISofSEHHx9FCbCptO7bRziRwdFhVnewrAttIZCSOicbZBQQmPbpCds5RTzm1W42UuekgcnJ4uoBFPtXTKJHAYEvjnAN4goYeDr6NovB93LcExo6BLlQJLwBJR5j9LFMGrIwAs0piXYAVmBapyLZAO3mUmDC22xn2vhJLn6Jo7l";
  let mention = "";
  let otherUrls = "";
  // Links = Input[0].text_entities[1].text;
  // Links = Input.messages[0].text_entities[1].text;
  len = await firebaseget();
  id = len
  console.log("Await length is ",len)
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
              
              else if ((Input[i].text_entities[j].type.includes("link")) && (!(Input[i].text_entities[j].text.includes("amzn")))) {
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
              // itemText = itemText +" "+ earnlink;
              if(itemText.includes("&amp;")){
                itemText = itemText.replaceAll("&amp;","&")
              }
              if(itemcategory.includes("&amp;")){
                itemcategory = itemcategory.replaceAll("&amp;","&")
              }
              // photo="https://m.media-amazon.com/images/I/91pIt7I-aVL._SY450_.jpg"
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
                }

                telegram(photo,"@all1appweb",itemText);

                try {
                  id+=1
                  // var app = JSON.stringify({
                  // var app = JSON.parse({
                    var app = {
                      // "name":"firebase check",
                      // "id":"11"
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
                      "avinashbmv": String(avinashbmv)
                    },
                  }
                 
                  console.log("calling firebase");
                  
                  if(photo != "" && photo.length <300 && pricenum>0 && disco>0){
                    telegram(photo,"@all1appdaily",text + "\n"+ earnlink +"\n" + itemcategory +"\n"+"itemTipe" + itemType);
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
                // continue;//new change 14th Nov
                break;
              // }

              // if(Input[i].from.includes("All1App")){
              //   console.log("Only All1app")
              //   itemText = itemText +" \n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
              //   telegram(photo,"@all1app",itemText);//to be reverted
              //   if(disco >= 75){
              //     telegram(photo,"@all1appdeals",itemText);//to be reverted

              //   }
              // }


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

                  // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
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
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
                } else if (price == "") {
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



                          
                        // t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`
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
            else if(photo != "" && photo.length <300){
              console.log("Price or discount not found")
              pricelinks += urlvalue1 + "\n"
            }
            else if(pricenum>0 ){
              console.log("Photo not found")
              photolinks += urlvalue1 + "\n"
            }
            try {
              // var app = JSON.stringify({
              // var app = JSON.parse({
                var app = {
                  // "name":"firebase check",
                  // "id":"11"
                "id": id++,
                "idlen": 10,
                "idlength": 10,
                "date": String(Input[i].date.split("T")[0]),
                // "//" date: new date(),
                "photo": String(photo),
                // "//" text: text,
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
              }
              // )
              // ;
              console.log("calling firebase");
              console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              // app = JSON.parse(app)
              console.log("Parsed Json is ",app)
              if(photo != "" && pricenum > 0 && disco > 0){
                firebasepost(app);
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
