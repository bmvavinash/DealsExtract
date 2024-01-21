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
    "id": 120705,
    "type": "message",
    "date": "2023-10-26T12:54:48",
    "date_unixtime": "1698305088",
    "from": "TR9 Deals",
    "from_id": "channel1487851422",
    "author": "Thriveni Theerdhala",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 502,
    "text": [
     "ACTIVA Easy Mix Nutri Mixer Grinder 500 Watt  ",
     {
      "type": "mention",
      "text": "@1098"
     },
     "\n\n🔗",
     {
      "type": "link",
      "text": "https://amzn.to/476XpdM"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ACTIVA Easy Mix Nutri Mixer Grinder 500 Watt  "
     },
     {
      "type": "mention",
      "text": "@1098"
     },
     {
      "type": "plain",
      "text": "\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://amzn.to/476XpdM"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 39940,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "A1ll1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "996",
    "dicos": "66",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/havells-bt9010-trimmer-120-mins-runtime-20-length-settings/p/itmf718815203522?pid=TMRFKFHX6KRUWZCR&lid=LSTTMRFKFHX6KRUWZCR6KS4UY&marketplace=FLIPKART&q=havells&store=search.flipkart.com&srno=s_4_80&otracker=search&otracker1=search&fm=Search&iid=9b1b2c81-0482-452e-b18f-4b71a51d6510.TMRFKFHX6KRUWZCR.SEARCH&ppt=sp&ppn=sp&qH=72a49080e3632729&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=MJ7LPy"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/k0mqtu80/trimmer/z/c/r/bt9010-havells-original-imafkdwyekanmzhj.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHealth & Personal Care Appliances \nPersonal Care Appliances \nTrimmers \n \n \npryce996 \ndicos66\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39941,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "A1ll1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "81",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "pTron Bassbuds Duo In-Ear Wireless Earbuds @549🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46PDH6i"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/517Ae6uMChL._SX679_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B0CDS4F8PH \n\nPryce499 \nDicos81 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39942,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "A1ll1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "4798",
    "dicos": "60",
    "catagory":"Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "Fossil Carlie Analog Blue Dial Women's Watch-ES5190 \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46NUl6u"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@4798"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51oTGIpqB7L._SX569_.jpg"
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
      "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands B09VK5CYD8 \n\nPryce4798 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39943,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "A1ll1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1248",
    "dicos": "83",
    "catagory":"Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "French Connection Analog Black Dial Women's Watch-FC007BRGM \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/478ZjdO"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@1248"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61taT5iZu2S._SY606_.jpg"
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
      "text": "\n\n                Fashion \n                Onam 2021 \n                Watches and fashion jewellery \n                 Watches top brands \n                 Watches top brands B098B1JGMD \n\nPryce1248 \nDicos83 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39944,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "A1ll1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "89",
    "dicos": "82",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Riviera K-10 Wired in Ear Earphones  @89🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46MmP0t"
     },
     {
      "type": "plain",
      "text": "\n\n @89\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51CeLJ1HzSL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B0BWS5JRKW \n\nPryce89 \nDicos82 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39945,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "689",
    "dicos": "75",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lavie Sport Lino M Duffle Wheeler Bag for Travel @689🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QybFXs"
     },
     {
      "type": "plain",
      "text": "\n\n @689\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Z9JLLSyhL._SX679_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Deals on shoes, watches, luggage & jewellery \n                Deals on watches, jewellery & luggage \n                 Luggage \n                 Luggage B0992HDGDK \n\nPryce689 \nDicos75 \nitemtipeAmazon\n✅apply copn 50"
     }
    ]
   },
   {
    "id": 39946,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "90",
    "dicos": "63",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "wipro Garnet N90001 B22D LED Bulb @90🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46PDNea"
     },
     {
      "type": "plain",
      "text": "\n\n @90\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71jaKmwWq+L._SX425_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs B00LO6WCFA \n\nPryce90 \nDicos63 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39947,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "50",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Solimo Aluminium 4 Piece Non-Stick Cookware Set  @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46P5qnB"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71gQs31jDnL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \n                Pots & Pans \n                Pots & Pans B0BZY9PTHF \n\nPryce999 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39948,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1899",
    "dicos": "24",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Sony Extra Bass MDR-XB450AP On-Ear Wired Headphones  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QvLiRP"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/61js6Kja89L._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 On-Ear \n                 On-Ear B00SISQAX2 \n\nPryce1899 \nDicos24 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39949,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1699",
    "dicos": "73",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Longway Creta 1200mm/48 inch with remote High Speed \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/472VnuQ"
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
      "text": "https://m.media-amazon.com/images/I/61fj4dYXR6L._SX355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \n                 Ceiling Fans \n                 Ceiling Fans B07NYZ2ND9 \n\nPryce1699 \nDicos73 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39950,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1099",
    "dicos": "54",
    "catagory":"Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Kubra KB-309 Professional Cordless Rechargeable LED Display Hair Clipper \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3s73tE9"
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
      "text": "https://m.media-amazon.com/images/I/71c-t9FxpKL._SX425_.jpg"
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
      "text": " & Personal Care\n\n                Beauty \n                Hair Care \n                Hair Cutting Tools \n                Hair Clippers & Accessories \n                Hair Clippers & Accessories B08963M5Q8 \n\nPryce1099 \nDicos54 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39951,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "50",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "Drytra Afghani Anjeer-1Kg Premium Qulaity  @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sgddf9"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81+lPRc+TzL._SX679_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Dried Fruits \n                 Anjeer (Figs) \n                 Anjeer (Figs) B0CLVPFWTS \n\nPryce499 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39952,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "697",
    "dicos": "67",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "MILTON Vitro Plastic Pet Storage Jar and Container, Set of 24  @697🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sdxTVd"
     },
     {
      "type": "plain",
      "text": "\n\n @697\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81VDCrriQvS._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Kitchen Storage & Containers \n                 Jars & Containers \n                 Jars & Containers B07N6J9WV3 \n\nPryce697 \nDicos67 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39953,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "75",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lifelong Kick Scooter with Adjustable Height @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3MlRkC1"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71ykcYtkNsL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Sports, Fitness & Outdoors \n                Skates, Skateboards & Scooters \n                Scooters & Equipment \n                Scooters \n                Scooters B0BVF6JQ99 \n\nPryce999 \nDicos75 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39954,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "899",
    "dicos": "57",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj Ultima Neo PT-01 200 mm Table Fan - Blue @899🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46ZmuqS"
     },
     {
      "type": "plain",
      "text": "\n\n @899\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61yu0zlVjaL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \n                 Table Fans \n                 Table Fans B09TFGKY3B \n\nPryce899 \nDicos57 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39955,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "9999",
    "dicos": "71",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=TRDFX4J5N72UNWNK&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=MwbnSa"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kh0vonk0/treadmill/w/n/k/lltm207-fit-pro-2-hp-with-12-preset-workouts-and-heart-rate-original-imafx4zmy7fnz7eh.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nExercise & Fitness \nFitness Equipment \nTreadmills \n \n \npryce9999 \ndicos71\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39956,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "809",
    "dicos": "59",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "IBELL Castor Ek017L Premium Electric Kettle @809🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/499Modk"
     },
     {
      "type": "plain",
      "text": "\n\n @809\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61afsMC0ASL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                Kettles & Hot Water Dispensers \n                Kettles & Hot Water Dispensers B0BGCM9DBZ \n\nPryce809 \nDicos59 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39957,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "399",
    "dicos": "81",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - INKAST Men Casual Shirt @399🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45QIYJI"
     },
     {
      "type": "plain",
      "text": "\n\n @399\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71wDwvFKrxL._SX522_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Apparel Steal Deals \n                Apparel_1 \n                Men \n                Men B07GSCYS7Q \n\nPryce399 \nDicos81 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39958,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "299",
    "dicos": "93",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lymio Casual Shirt for Men @299🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QztUM3"
     },
     {
      "type": "plain",
      "text": "\n\n @299\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/717kxMoZiAL._SY679_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                Shirts \n                 Casual Shirts \n                 Casual Shirts B0C23XS878 \n\nPryce299 \nDicos93 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39959,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1199",
    "dicos": "73",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lifelong Kids Tricycle with EVA Wheels, Bell & Storage Basket \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/49ejjNI"
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
      "text": "https://m.media-amazon.com/images/I/61RtTS+PefL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Toys & Games \n                Bikes, Trikes & Ride-Ons \n                 Trikes \nPryce1199 \nDicos73 \nitemtipeAmazon\n✅apply coupon 100"
     }
    ]
   },
   {
    "id": 39960,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "23999",
    "dicos": "44",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/india-desire-deals/p/indiadesire_deals?pid=RTRFUKF8H4VUHM9H&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=hcCU1a"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kdukgi80/router/m/9/h/d-link-dir-x6060-original-imafunn7dyqjwzqw.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nNetwork Components \nRouters \n \n \npryce23999 \ndicos44\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39961,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "978",
    "dicos": "30",
    "catagory":"Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "OZiva Plant Based Biotin for Hair Growth @978🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QvLsIV"
     },
     {
      "type": "plain",
      "text": "\n\n @978\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61ZDSQwpY-L._SX425_PIbundle-2,TopRight,0,0_AA425SH20_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Diet & Nutrition \n                Vitamins, Minerals & Supplements \n                Vitamins \n                Vitamins B096KKFNV6 \n\nPryce978 \nDicos30 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39962,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "139",
    "dicos": "34",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "Nutrela SOYA Chunks 1 kg @139🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FAhNYP"
     },
     {
      "type": "plain",
      "text": "\n\n @139\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/41s5Oe7vU3L._SX425_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Rice, Flour & Pulses \n                Dals & Pulses \n                 Soy Beans \n                 Soy Beans B013SAX81G \n\nPryce139 \nDicos34 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39963,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "85",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Fzcgld"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61TXR+7EpUL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce999 \nDicos85 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39964,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "185",
    "dicos": "63",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=LPBFTZFSTGXUHJEW&lid=LSTLPBFTZFSTGXUHJEWL7X1HP&marketplace=FLIPKART&store=g9b&srno=b_1_5&otracker=product_breadCrumbs_Beauty+and+Grooming&fm=organic&iid=c812201b-add6-4258-99c6-f2df1573c39b.LPBFTZFSTGXUHJEW.SEARCH&ppt=browse&ppn=browse&ssid=1pxfkipe4g0000001698394778055&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=0SfZJN"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/lip-balm/o/q/n/-original-imagjp6ybewujjkt.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nMakeup \nLips \n \n \npryce185 \ndicos63\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39965,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "200",
    "dicos": "60",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=FCWFY8KFGZFWWGYJ&lid=LSTFCWFY8KFGZFWWGYJ9EVLUI&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=1tdA8p"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l1whaq80/face-wash/c/q/b/-original-imagdd3e5snx86ru.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nBody & Face Skin Care \nBody and Face Care \n \n \npryce200 \ndicos60\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39966,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "86",
    "catagory":"Shoes",
    "text_entities": [
     {
      "type": "plain",
      "text": "Koel by Lavie Kiti Satchel Bag @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3s2vgpl"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71sj6ve4FXL._SY395_.jpg"
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
      "text": " & Handbags\n\n                Shoes & Handbags \n                Handbags, Purses & Clutches \n                Handbags \n                 Satchels \n                 Satchels B0B3XFTRJF \n\nPryce499 \nDicos86 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39967,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "269",
    "dicos": "73",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=ACCGBKGFFK756MZW&lid=LSTACCGBKGFFK756MZW3RI7CW&marketplace=FLIPKART&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=tbyOoT"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l0igvww0/mouse/i/e/8/-original-imagca2aeqdaqucy.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nLaptop Accessories \nMouse \n \n \npryce269 \ndicos73\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39968,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "400",
    "dicos": "80",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Portronics Harmonics X1 in Ear Wireless Bluetooth  @400🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Mfu1cX"
     },
     {
      "type": "plain",
      "text": "\n\n @400\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51qTJ-+XeaL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B09R4RYKXV \n\nPryce400 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39969,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "33",
    "catagory":"Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Philips One Electric Toothbrush by Sonicare @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/49eH888"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61yuLB9gduL._SX425_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Oral Care \n                Toothbrushes & Accessories \n                Electric Toothbrushes & Accessories \n                Electric Toothbrushes & Accessories B0BC18BHHM \n\nPryce999 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39970,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "249",
    "dicos": "83",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=CBKGUFBWZJQCPAZH&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=D5ih1n"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/combo-kit/m/b/u/red-onion-hair-combo-kit-and-ubtan-facewash-4-ph-bs-h60-s200-h-original-imagu2yqvvadnube.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nHair Care and Accessory \nHair Care \n \n \npryce249 \ndicos83\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39971,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "252",
    "dicos": "44",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=VSLG6YKT7F7ZQJRM&lid=LSTVSLG6YKT7F7ZQJRMIIGLA0&marketplace=FLIPKART&sattr%5B%5D=quantity&sattr%5B%5D=pack_of&st=pack_of&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=MgOXlf"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/vitamin-supplement/g/f/g/60-calcium-1000mg-with-vitamin-d3-magnesium-zinc-vitamin-b12-for-original-imagmgfzuuqs3fut.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHealth Care \nHealth Supplements \nVitamin Supplement \n \n \npryce252 \ndicos44\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39972,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "49990",
    "dicos": "33",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/product/p/itme?pid=TVSGTTDGPAGAGFHV&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=29BnYG"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/n/b/f/65ca-vu-original-imaguf4xxzmtfegg.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome Entertainment \nTelevisions \nVu Televisions \n \n \npryce49990 \ndicos33\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39973,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "199",
    "dicos": "10",
    "catagory":"Beauty",
    "text_entities": [
     {
      "type": "plain",
      "text": "POND'S Super Light Gel Oil Free Face Moisturizer 100g @99🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/49bdMaK"
     },
     {
      "type": "plain",
      "text": "\n\n @199\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51UpwNx0JSL._SX425_.jpg"
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
      "text": "\n\n                Beauty \n                Skin Care \n                Face \n                Creams & Moisturisers \n                Creams & Moisturisers B09Z6T8H41 \n\nPryce199 \nDicos10 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39974,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1399",
    "dicos": "56",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Pigeon by Stovekraft Cruise 1800 watt Induction Cooktop \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46P5Ha7"
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
      "text": "https://m.media-amazon.com/images/I/61DAkNxj9uL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Induction Cooktop \n                 Induction Cooktop B01GFTEV5Y \n\nPryce1399 \nDicos56 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39975,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "259",
    "dicos": "78",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "YASHIKA Women Art Silk Sarees @259🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tQKHkO"
     },
     {
      "type": "plain",
      "text": "\n\n @259\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71E5bMtJs5L._SY679_.jpg"
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
      "text": " & Accessories\n\n                Fashion \n                Apparel Steal Deals \n                Apparel_1 \n                Women \n                Women B0857483GW \n\nPryce259 \nDicos78 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39976,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "398",
    "dicos": "60",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "AM SAFE-X delivering the best Yoga Mat @398🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tSlQ07"
     },
     {
      "type": "plain",
      "text": "\n\n @398\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/414vHLvdTpL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Yoga \n                 Mats \n                 Mats B0C8D5N4CJ \n\nPryce398 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39977,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "325",
    "dicos": "19",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Primelife 7 Inches Super Strong Folding Step Stool @325🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QxOCMo"
     },
     {
      "type": "plain",
      "text": "\n\n @325\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/6120zRQCYIL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Furniture \n                Kids' Furniture \n                 Step Stools \n                 Step Stools B08P9N85TL \n\nPryce325 \nDicos19 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39978,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "42",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Athom Living Light Weight Cotton Premium Bath Towel @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/495WZpL"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71r4A+-YBcL._SX425_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Bathroom Linen \n                Towels \n                Towels B07W12MHZ4 \n\nPryce699 \nDicos42 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39979,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2199",
    "dicos": "55",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Havells Grinder (3 Jars) \n🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=MIXG8HYG6GGXF4GS&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=lyqRkD"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kzx1a4w0/mixer-grinder-juicer/h/8/m/-original-imagbtubrdnpnxwd.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nKitchen Appliances \nMixer Juicer Grinder \n \n \npryce2199 \ndicos55\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39980,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1949",
    "dicos": "63",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Pigeon by Stovekraft 2 Burner Glass Cook Top Gas Stove  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/47rlX1h"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@1949"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/715UX36W22L._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \n                 Pots & Pans \n                 Pots & Pans B08ZY1XBQL \n\nPryce1949 \nDicos63 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39981,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "77",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "BSB HOME 3 x 5 Feet 3D Jet Multi Printed 3D Jet Vintage Persian Carpet @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Si5DLL"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71OeXkZl0HL._SX425_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Carpets & Rugs \n                 Carpets \n                 Carpets B0CLCKP3P9 \n\nPryce699 \nDicos77 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39982,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "199",
    "dicos": "67",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Many Colours | Anti-Slip Floor Mat @199. 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Si5FmR"
     },
     {
      "type": "plain",
      "text": "\n\n @199\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81L3uNM5s0L._SX425_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Bathroom Linen \n                 Bath Mats \n                 Bath Mats B0CH3HVW34 \n\nPryce199 \nDicos67 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39983,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "299",
    "dicos": "70",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "BSB HOME All Season Multipurpose Polar Fleece Single Bed Printed Assorted Multicolor Light Weight Blanket @299🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45PRdWp"
     },
     {
      "type": "plain",
      "text": "\n\n @299\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/617YFrFD0BL._SX355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Bedding & Linen \n                Blankets, Throws & Quilts \n                Blankets, Throws & Quilts B08Q79M1YL \n\nPryce299 \nDicos70 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39984,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "176",
    "dicos": "50",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "LIFEBUOY 15098 : LB HYGIENE KIT @176🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=CBKFY8K9VKDKG5KE&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=4gXucW"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/combo-kit/6/p/c/germ-protection-kit-contains-soap-handwash-hand-sanitizer-germ-original-imafy8kbssfpwhz4.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nBath & Shower \nBath Essentials \n \n \npryce176 \ndicos50\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39985,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2299",
    "dicos": "43",
    "catagory":"Tools",
    "text_entities": [
     {
      "type": "plain",
      "text": "Bonkaso Premium Steel Multipurpose Climb Easy Anti-Slip 4-Step Foldable Ladder \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tO89PQ"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@2299"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61hW0FNjFFL._SY355_.jpg"
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
      "text": " & Home Improvement\n\n                Home Improvement \n                Hardware \n                Ladders \n                 Stepladders \n                 Stepladders B0C285QL5B \n\nPryce2299 \nDicos43 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39986,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "149",
    "dicos": "50",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "GO DESi Indian Sweets Diwali Gift Pack @149🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tS4TTz"
     },
     {
      "type": "plain",
      "text": "\n\n @149\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91jbtgCDwAL._SX569_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Hampers & Gourmet Gifts \n                 Sweets Gifts \nPryce149 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39987,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "159",
    "dicos": "58",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "offee @159🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tQ12q1"
     },
     {
      "type": "plain",
      "text": "\n\n @159\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/611RmsmMBrL._SX425_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Coffee, Tea & Beverages \n                Coffee \n                 Instant Coffee \n                 Instant Coffee B0B94RT7YZ \n\nPryce159 \nDicos58 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39988,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1699",
    "dicos": "54",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Butterfly 500 W Mixer Grinder With 3 Jars @ ₹1,599🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/butterfly-arrow-500-w-juicer-mixer-grinder-3-jars-grey/p/itmf03e9b5891093?pid=MIXFC7C7G8UFXWN6&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=jU66oc"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/jqv8ia80/mixer-grinder-juicer/w/n/6/butterfly-arrow-original-imafcz43zxwekpzc.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nKitchen Appliances \nMixer Juicer Grinder \n \n \npryce1699 \ndicos54\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39989,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "599",
    "dicos": "88",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Wings Phantom Wireless Earbuds with 50ms Low Latency Game mode @ ₹599 🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/wings-phantom-wireless-earbuds-50ms-low-latency-game-mode-5-3-bluetooth-headset/p/itm35312d3099ce5?affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=byKZ1e"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/c/s/s/-original-imagn7e8nwjkqjgu.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nAudio & Video \nHeadset \nEarphones \n \n \npryce599 \ndicos88\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39990,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "380",
    "dicos": "90",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Symbol womens Quilted Jacket @ ₹380🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FFhhZq"
     },
     {
      "type": "plain",
      "text": "\n\n @380\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81wLGgjj19L._SX522_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Women \n                Western Wear \n                Winter Wear \n                Winter Wear B08CNR87BY \n\nPryce380 \nDicos90 \nitemtipeAmazon\n❌ Regular price @ ₹899"
     }
    ]
   },
   {
    "id": 39991,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "625",
    "dicos": "52",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "CELLO Induction Base Aluminium Non Stick Sauce/Milk Pan 1.5Ltrs @ ₹475🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40hvjKE"
     },
     {
      "type": "plain",
      "text": "\n\n @625\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61NKBazrLRL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Cookware \n                Pots & Pans \n                Pots & Pans B07VD725LJ \n\nPryce625 \nDicos52 \nitemtipeAmazon\n❌ Regular price @ ₹750"
     }
    ]
   },
   {
    "id": 39992,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "84",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "QUANTUM Laptop PD Charger 65 W Adapter  (Power Cord Included) @ ₹799🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/quantum-6533-laptop-pd-charger-65-w-adapter/p/itm4590d3163a15c?pid=ACCGDBXMF5ZZTS2W&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=jeVBPl"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/laptop-adapter/n/y/j/6533-laptop-pd-charger-quantum-original-imagg45scsuuqexs.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nLaptop Accessories \nLaptop Adapters \n \n \npryce799 \ndicos84\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39993,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2999",
    "dicos": "62",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/bosch-mgm8842min-truemixx-pro-1000-w-mixer-grinder-4-jars-black-steel/p/itmc7152d12b913e?pid=AFRGHDKDDU7BKRCM&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=y4W4H7"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/air-fryer/2/d/p/-original-imagqsfhyrjwdjwa.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nKitchen Appliances \nAir Fryers \n \n \npryce2999 \ndicos62\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39994,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "8499",
    "dicos": "56",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj Compagno 2000 W 25 Litre Vertical Storage Water Heater \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FzMZaB"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@8499"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/510NvbF3tJL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Water Heaters & Geysers \n                 Storage Water Heaters \n                 Storage Water Heaters B0B4SZKW6J \n\nPryce8499 \nDicos56 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39995,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "19999",
    "dicos": "60",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "LG 68.58 Cm (27 Inch) (68.58 Cm) 4K-UHD (3840 x 2160) Pixels HDR 10 Monitor @19,999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40gm8tB"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@19999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/817-GdpmepL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                 Monitors \nPryce19999 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39996,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "9389",
    "dicos": "70",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Solimo Madray Queen Size Engineered Wood Bed with Box Storage \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45UnmvU"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@9389"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71notcS2tML._SY355_.jpg"
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
      "text": "\n\n                Home & Kitchen \n                Furniture \n                Bedroom Furniture \n                Beds, Frames & Bases \n                Beds, Frames & Bases B0B8P5GWFR \n\nPryce9389 \nDicos70 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39997,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "36988",
    "dicos": "33",
    "catagory":"All",
    "text_entities": [
     {
      "type": "plain",
      "text": "GoPro HERO11 Waterproof Action Camera  @36,988🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40lAA3O"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@36988"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/618uI0L17wL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Cameras & Photography \n                 Action Cameras \nPryce36988 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 39998,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "6799",
    "dicos": "43",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Flipkart | POCO C55 (4/64G😎 @ 6799.👉\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=MOBGMXSW55C7ZJE7&lid=LSTMOBGMXSW55C7ZJE79KIZDX&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=362595c3-be4f-4912-8bf9-10eee44d7dc3.MOBGMXSW55C7ZJE7.SEARCH&ppt=sp&ppn=sp&qH=eb4af0bf07c16429&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=ugvpUV"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nMobiles & Accessories \nMobiles \nPOCO Mobiles \n \n \npryce6799 \ndicos43\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 39999,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "14499",
    "dicos": "50",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/redmi-pad-4-gb-ram-128-rom-10-61-inch-wi-fi-only-tablet-graphite-gray/p/itme895076edd975?pid=TABGG9WFZZYKAZXF&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=ptXVWS"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nMobiles & Accessories \nTablets \nTablets without Call Facility \n \n \npryce14499 \ndicos50\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40000,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "75",
    "dicos": "80",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "💥Kloze 5 In 1 Razor @75. Buy: \n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=SHRGEJ7Y9M3ZJHHX&otracker=wishlist&lid=LSTSHRGEJ7Y9M3ZJHHXUUBNKJ&fm=organic&iid=77859e0b-5c20-458f-891a-47d155e2689a.SHRGEJ7Y9M3ZJHHX.PRODUCTSUMMARY&ppt=browse&ppn=browse&ssid=ybfsg9bdvk0000001698416069294&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=xehyNB"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l3j2cnk0/shaving-razor/p/w/2/klozeadv-5-1-razo-1-kloze-original-imagem8kma5cnydw.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nShaving & Beard Care \nShaving Razors \n \n \npryce75 \ndicos80\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40001,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "249",
    "dicos": "87",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "💥Red Onion Hair Combo Kit (5 Items in the kit) @249. Buy: \n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=CBKGUFCYFWSFTZZ2&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=wihLvJ"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/combo-kit/h/v/h/red-onion-blackseed-hair-combo-kit-with-neem-facewash-combo-kit-original-imagufbzkbwywqqa.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nHair Care and Accessory \nHair Care \n \n \npryce249 \ndicos87\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40002,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "11990",
    "dicos": "33",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Samsung Galaxy M14 5G \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ScpjRe"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@11990"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81pmO0iVNhL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Smartphones & Basic Mobiles \n                 Smartphones \n                 Smartphones B0BZCWLJHK \n\nPryce11990 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40003,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "449",
    "dicos": "55",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker  @449🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45S4fm2"
     },
     {
      "type": "plain",
      "text": "\n\n @449\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81U3kN9bf1L._SY355_.jpg"
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
      "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Bluetooth Speakers \n                 Bluetooth Speakers B07YNTJ8ZM \n\nPryce449 \nDicos55 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40004,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "400",
    "dicos": "80",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Portronics Harmonics X1 in Ear Wireless Bluetooth 5.0 Sports Headset  @400🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FyDusn"
     },
     {
      "type": "plain",
      "text": "\n\n @400\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51qTJ-+XeaL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B09R4RYKXV \n\nPryce400 \nDicos80 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40005,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "78",
    "catagory":"All",
    "text_entities": [
     {
      "type": "plain",
      "text": "boAt Airdopes Atom 81 TWS Earbuds @999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Sb9iuS"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61yyQD1KLOL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B0BKG5PQ6T \n\nPryce999 \nDicos78 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40006,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "349",
    "dicos": "50",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Puma Unisex's Cap @349🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tM38XL"
     },
     {
      "type": "plain",
      "text": "\n\n @349\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/510HpoT6TOL._SX522_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                Accessories \n                 Caps & Hats \n                 Caps & Hats B0BTZ2GNCX \n\nPryce349 \nDicos50 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40007,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "59999",
    "dicos": "25",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Samsung Galaxy S23 FE 5G (Mint, 8GB, 128GB Storage) @59,999🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/475Gd8g"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@59999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71qGismu6NL._SX679_.jpg"
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
      "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Smartphones & Basic Mobiles \n                 Smartphones \n                 Smartphones B0CJ4S724M \n\nPryce59999 \nDicos25 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40008,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1149",
    "dicos": "62",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "KENT Electric Chopper-B for Kitchen 250 Watt \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3MkbbBF"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@1149"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61GJMOjL1AL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                 Mini Food Processors & Choppers \n                 Mini Food Processors & Choppers B0B935YNR7 \n\nPryce1149 \nDicos62 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40009,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "895",
    "dicos": "44",
    "catagory":"Watches",
    "text_entities": [
     {
      "type": "plain",
      "text": "TIMEX Analog Men's Watch @895🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3MjtCpX"
     },
     {
      "type": "plain",
      "text": "\n\n @895\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71Kx6rgmlRS._SX385_.jpg"
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
      "text": "\n\n                Watches \n                Trends \n                Men \n                 Leather straps \n                 Leather straps B07H3K85H5 \n\nPryce895 \nDicos44 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40010,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "84999",
    "dicos": "36",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Samsung Galaxy S22 Ultra 5G (Green, 12GB, 256GB Storage) \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46PEmoi"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@84999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71PzXKXjz6L._SX679_.jpg"
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
      "text": "\n\n                Electronics \n                Mobiles & Accessories \n                Smartphones & Basic Mobiles \n                 Smartphones \n                 Smartphones B09XDR98J4 \n\nPryce84999 \nDicos36 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40011,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "53",
    "catagory":"Beauty",
    "text_entities": [
     {
      "type": "plain",
      "text": "Morphy Richards Idazzle Hd121Dc 1200W Hair Dryer @699🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tIIqYQ"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51lDBCSOmbL._SX425_.jpg"
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
      "text": "\n\n                Beauty \n                Hair Care \n                Hair Styling Tools \n                Hair Dryers & Accessories \n                Hair Dryers & Accessories ps://www.a \n\nPryce699 \nDicos53 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40012,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "6299",
    "dicos": "46",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Crompton Arno Neo 25-L 5 Star Rated Storage Water Heater  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46IFOZE"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/515nNlnjmSL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Water Heaters & Geysers \n                 Storage Water Heaters \n                 Storage Water Heaters B08GSQNR61 \n\nPryce6299 \nDicos46 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40013,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "33",
    "catagory":"Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Philips One Electric Toothbrush by Sonicare @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/46Mnr6h"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61yuLB9gduL._SX425_.jpg"
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
      "text": " & Personal Care\n\n                Health & Personal Care \n                Oral Care \n                Toothbrushes & Accessories \n                Electric Toothbrushes & Accessories \n                Electric Toothbrushes & Accessories B0BC18BHHM \n\nPryce999 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40014,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "149",
    "dicos": "85",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Inkast Denim Co. Men's Regular T-Shirt @149🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QgcDGl"
     },
     {
      "type": "plain",
      "text": "\n\n @149\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/719GIAlPo2L._SX522_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                T-Shirts & Polos \n                 T-Shirts \n                 T-Shirts B09796P5QJ \n\nPryce149 \nDicos85 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40015,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1499",
    "dicos": "69",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "pTron Fusion Party v2 40W Karaoke Bluetooth Party Speaker  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3s952S2"
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
      "text": "https://m.media-amazon.com/images/I/71xMIZrArlL._SX425_.jpg"
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
      "text": "\n\n                Electronics \n                Home Audio \n                Speakers \n                 Bluetooth Speakers \n                 Bluetooth Speakers B0CHMVD1NW \n\nPryce1499 \nDicos69 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40016,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "649",
    "dicos": "60",
    "catagory":"All",
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj Dx-7 1000W Dry Iron @649🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Qd3Ogp"
     },
     {
      "type": "plain",
      "text": "\n\n @649\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61Y7QqqpsPL._SX355_.jpg"
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
      "text": "\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Vacuum, Cleaning & Ironing \n                Irons, Steamers & Accessories \n                Irons, Steamers & Accessories B008YW8M0G \n\nPryce649 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40017,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "749",
    "dicos": "42",
    "catagory":"Tools",
    "text_entities": [
     {
      "type": "plain",
      "text": "Gala Aqua Spin Mop @749🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tNT5Bz"
     },
     {
      "type": "plain",
      "text": "\n\n @749\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71GeEDlmPqL._SY355_.jpg"
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
      "text": " & Home Improvement\n\n                Home & Kitchen \n                Home & kitchen | Prime shopping days \n                Prime Units \n                 HI \n                 HI B01EWZSW6M \n\nPryce749 \nDicos42 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40018,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "354",
    "dicos": "70",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=PSLG4XSHNBXBHZY3&lid=LSTPSLG4XSHNBXBHZY3UBRN2V&marketplace=FLIPKART&sattr%5B%5D=quantity&sattr%5B%5D=flavor&st=flavor&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=NPQbaf"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/protein-supplement/n/x/h/weight-gainers-mass-gainers-the-bull-mass-gainer-the-bull-mass-original-imagjh35dzmwpwrz.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHealth Care \nHealth Supplements \nProtein Supplement \n \n \npryce354 \ndicos70\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40019,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1599",
    "dicos": "42",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/agaro-9-litre-33266-oven-toaster-grill-otg/p/itm63669ecc035a3?pid=OTNFEZ7GHA6ZBQZE&lid=LSTOTNFEZ7GHA6ZBQZE2M7OWF&marketplace=FLIPKART&store=j9e&spotlightTagId=BestsellerId_j9e&srno=b_1_3&otracker=clp_creative_card_4_4.creativeCard.CREATIVE_CARD_tvs-appliances-the-big-diwali-sale-store_UGFV4CZ1RZDE&fm=neo%2Fmerchandising&iid=20d73ef2-eed4-4c1e-bf30-40c157e9bba9.OTNFEZ7GHA6ZBQZE.SEARCH&ppt=browse&ppn=browse&ssid=vothtdw7g00000001698408108975&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=leOm6l"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/otg-new/8/j/6/800-marvel-series-agaro-9-original-imagqjpgygyjh7a8.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHome & Kitchen \nKitchen Appliances \nOven Toaster Grills \n \n \npryce1599 \ndicos42\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40020,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "399",
    "dicos": "60",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "ENDEAVOUR WEAR Men Fleece Crew Neck Sweatshirt @399🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3MlKDQm"
     },
     {
      "type": "plain",
      "text": "\n\n @399\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/6185LCNxqUL._SY679_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                Winter Wear \n                Sweatshirts & Hoodies \n                Sweatshirts & Hoodies B0BL3ZC5L5 \n\nPryce399 \nDicos60 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40021,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "449",
    "dicos": "10",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=HRMGTBFEZ5K4EGMY&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=EVNZWo"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/hair-removal/q/z/e/200-hair-removal-cream-foam-spray-for-men-200ml-painless-body-original-imagtq4gk79fyjjf.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nBeauty and Grooming \nBody & Face Skin Care \nBody and Face Care \n \n \npryce449 \ndicos10\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40022,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2499",
    "dicos": "72",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Razer Viper 8KHz Ambidextrous Esports Wired Gaming Mouse  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sbK5Wy"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@2499"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/818IrfC2DpL._SX466_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Gaming Mice \n                 Gaming Mice B08P1PWN2Q \n\nPryce2499 \nDicos72 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40023,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "199",
    "dicos": "55",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "55% Off : Zingavita Multivitamin Tablets for Men (60 Tablets) @199🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?pid=VSLGTBZDZFP8HQAJ&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=pMEd5R"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/vitamin-supplement/3/j/j/60-multivitamin-tablets-for-men-with-vitamins-omega-3-herbs-to-original-imagu2pbxesfgnzg.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nHealth Care \nHealth Supplements \nVitamin Supplement \n \n \npryce199 \ndicos55\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40024,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "6599",
    "dicos": "34",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Lowest\n : Philips 1400 Watt Air Fryer, 4.1 Liter \n +\n Bank . \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40gNujB"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@6599"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71ZJSl4lN2L._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                Deep Fat Fryers \n                Deep Fat Fryers B09CTWFV5W \n\nPryce6599 \nDicos34 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40025,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "499",
    "dicos": "69",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "Dry Fruits Combo 800g Jar @499🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/49fs1LZ"
     },
     {
      "type": "plain",
      "text": "\n\n @499\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/5127qrQlYkL.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Dried Fruits \n                 Mixed Dried Fruits \n                 Mixed Dried Fruits B0CLS8T4CL \n\nPryce499 \nDicos69 \nitemtipeAmazon\n\n✅Almond, Cashew, Raisin, Apricot (200g Each)"
     }
    ]
   },
   {
    "id": 40026,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "84990",
    "dicos": "27",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "ASUS i9 13th Gen Laptop (16GB/512GB SSD) \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40d1dYC"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@84990"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71VrU+m9CDL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Laptops \n                 Traditional Laptops \nPryce84990 \nDicos27 \nitemtipeAmazon\n✅Apply 1k Off Coupon + 8500 Off with HDFC CC"
     }
    ]
   },
   {
    "id": 40027,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "399",
    "dicos": "33",
    "catagory":"Sports",
    "text_entities": [
     {
      "type": "plain",
      "text": "Yoga Mat(EVA) @ 399🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QbfLmZ"
     },
     {
      "type": "plain",
      "text": "\n\n @399\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/817qyBM8vvL._SY355_.jpg"
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
      "text": ", Fitness & Outdoors\n\n                Sports, Fitness & Outdoors \n                Exercise & Fitness \n                Yoga \n                 Mats \n                 Mats B0C73Q51N5 \n\nPryce399 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40028,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "84",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/quantum-6533-laptop-pd-charger-65-w-adapter/p/itm4590d3163a15c?pid=ACCGDBXMF5ZZTS2W&amp=&campaign=cps&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=IC1mbY"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/laptop-adapter/n/y/j/6533-laptop-pd-charger-quantum-original-imagg45scsuuqexs.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nLaptop Accessories \nLaptop Adapters \n \n \npryce799 \ndicos84\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40029,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1699",
    "dicos": "76",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/aquire-extra-large-pvc-vinyl-sticker/p/itme4vr5zgpgyfud?pid=RTRFKVZ7HMZDHBWB&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=Ld36hf"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kmwcuq80/router/j/u/0/dir-1360-d-link-original-imagfp9qwhxgg8fk.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nNetwork Components \nRouters \n \n \npryce1699 \ndicos76\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40030,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "2499",
    "dicos": "71",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/india-desire-deals/p/indiadesire_deals?pid=RTRFT3F5H4CSSYV6&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=5onU5b"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/kcnp8y80/router/y/v/6/d-link-dir-x1560-original-imaftqs36g9wpz6g.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nNetwork Components \nRouters \n \n \npryce2499 \ndicos71\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40031,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "72",
    "catagory":"Industrial",
    "text_entities": [
     {
      "type": "plain",
      "text": "Polycab 18W LED Panel Light  @282🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QhH1A4"
     },
     {
      "type": "plain",
      "text": "\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/6140vMpf3vL._SX522_.jpg"
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
      "text": " & Scientific\n\n                Home & Kitchen \n                Indoor Lighting \n                Light Bulbs \n                 LED Bulbs \n                 LED Bulbs ps://www.a \n\nPryce799 \nDicos72 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40032,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "389",
    "dicos": "70",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "HP H150 Wired in Ear Gaming Earphones with mic @389🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tWAt2g"
     },
     {
      "type": "plain",
      "text": "\n\n @389\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61FPrwXmNOL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Accessories & Peripherals \n                PC Gaming Peripherals \n                 Headsets \n                 Headsets B08498BYVG \n\nPryce389 \nDicos70 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40033,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "1299",
    "dicos": "57",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "OPPO Enco M32 Bluetooth Wireless in Ear Earbuds with Mic \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3sdyG8D"
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
      "text": "https://m.media-amazon.com/images/I/518ti3ya2YL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Headphones, Earbuds & Accessories \n                Headphones \n                 In-Ear \n                 In-Ear B09NMPRX6Y \n\nPryce1299 \nDicos57 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40034,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "76",
    "catagory":"Grocery",
    "text_entities": [
     {
      "type": "plain",
      "text": "off Combo Of 4 Almond, Cashew, Pista & Raisin 250g Each @699. 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45UnzPI"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61MXsGBMs5L._SX679_.jpg"
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
      "text": " & Gourmet Foods\n\n                Grocery & Gourmet Foods \n                Dried Fruits, Nuts & Seeds \n                Nuts & Seeds \n                 Pistachios \n                 Pistachios B0CLV58TVW \n\nPryce699 \nDicos76 \nitemtipeAmazon\n✅Best For Diwali Gift."
     }
    ]
   },
   {
    "id": 40035,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "6499",
    "dicos": "40",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Flipkart | MOTOROLA e13 (4 GB RAM ,64 GB Storage) \n👉 \n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/motorola-e13-aurora-green-64-gb/p/itmb52d8f826cd9a?pid=MOBGKHNBA55HDSZR&lid=LSTMOBGKHNBA55HDSZRHOAFME&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=d4ecc306-2dd6-4b60-a735-11c39b265823.MOBGKHNBA55HDSZR.SEARCH&ppt=sp&ppn=sp&qH=eb4af0bf07c16429&affid=skumarkit&affExtParam1=EPTG1913972&affExtParam2=Ar92En"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nMobiles & Accessories \nMobiles \nMOTOROLA Mobiles \n \n \npryce6499 \ndicos40\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40036,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "32999",
    "dicos": "34",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Samsung Galaxy Tab S7  \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QdUglw"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@32999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/91LanBKnVmL._SX355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Laptops & Tablets \n                 Tablets \nPryce32999 \nDicos34 \nitemtipeAmazon\n✅6500 OFF WITH HDFC CREDIT CARD EMI"
     }
    ]
   },
   {
    "id": 40037,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "5399",
    "dicos": "33",
    "catagory":"Health",
    "text_entities": [
     {
      "type": "plain",
      "text": "Fitbit Inspire 2 Health & Fitness Tracker \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QgcVwV"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@5399"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71wPLzgLNYL._SX466_.jpg"
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
      "text": " & Personal Care\n\n                Sports, Fitness & Outdoors \n                Sports Gadgets \n                 Activity Trackers \nPryce5399 \nDicos33 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40038,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "799",
    "dicos": "56",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "D-Link DIR-615 Wi-fi Ethernet @799🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/45NbX12"
     },
     {
      "type": "plain",
      "text": "\n\n @799\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51B-8XSoCOL._SX425_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                Networking Devices \n                 Routers \nPryce799 \nDicos56 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40039,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "999",
    "dicos": "85",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch \n🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QhHbra"
     },
     {
      "type": "plain",
      "text": "\n\n @999\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61TXR+7EpUL._SY355_.jpg"
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
      "text": " & Accessories\n\n                Electronics \n                Wearable Technology \n                 Smart Watches \nPryce999 \nDicos85 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40040,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "74999",
    "dicos": "63",
    "catagory":"Electronics",
    "text_entities": [
     {
      "type": "plain",
      "text": "Xiaomi 138.8 cm (55 inches) 4K Ultra HD Smart Android OLED Vision TV  \n69,499/-\n                                                             \n🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QzWHA8"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@74999"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81onGhenkUL._SX466_.jpg"
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
      "text": "\n\n                Electronics \n                Home Theater, TV & Video \n                Televisions \n                 Smart Televisions \n                 Smart Televisions B09XBFSB4Q \n\nPryce74999 \nDicos63 \nitemtipeAmazon\n✅₹5,500 Off with HDFC Credit Card Emi"
     }
    ]
   },
   {
    "id": 40041,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "197",
    "dicos": "78",
    "catagory":"Industrial",
    "text_entities": [
     {
      "type": "plain",
      "text": "Weight Machine for Kichen at 197. 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FCoWaY"
     },
     {
      "type": "plain",
      "text": "\n\n @197\n"
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
      "text": " & Scientific\n\n                Home & Kitchen \n                Kitchen & Home Appliances \n                Small Kitchen Appliances \n                Digital Kitchen Scales \n                Digital Kitchen Scales B09185QH3C \n\nPryce197 \nDicos78 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40042,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "599",
    "dicos": "85",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Mivi DuoPods D3 TWS,13mm Driver,Rich Bass,50H Playtime @ ₹599🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/mivi-duopods-d3-tws-13mm-driver-rich-bass-50h-playtime-ai-enc-low-latency-type-c-5-3-bluetooth-headset/p/itm0ee0e4ebd3d01?pid=ACCGRK7PYNBRGYAH&lid=LSTACCGRK7PYNBRGYAHJPEC6P&marketplace=FLIPKART&q=Mivi+DuoPods+D3+TWS%2C13mm+Driver%2CRich+Bass%2C50H+Playtime%2CAI+ENC%2CLow+Latency%2CType+C%2C5.3+Bluetooth+Headset++%28Cobalt+Black%2C+True+Wireless%29&store=0pm%2Ffcn&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=edff1619-499d-4fed-bd46-381fb6e1df57.ACCGRK7PYNBRGYAH.SEARCH&ppt=sp&ppn=sp&ssid=hrhioeb9340000001697390596188&qH=0e49510be9163419&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=BW8Y6X"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/w/p/m/-original-imagrvmgmhdk6msy.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nAudio & Video \nHeadset \nEarphones \n \n \npryce599 \ndicos85\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40043,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "17490",
    "dicos": "33",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "189 L Frost Free Single Door 5 Star Refrigerator @ ₹15,740🔗 \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tOfJd8"
     },
     {
      "type": "plain",
      "text": "\n\n "
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
      "text": "https://m.media-amazon.com/images/I/71Ci0UePknL._SY550_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Large Appliances \n                 Refrigerators \nPryce17490 \nDicos33 \nitemtipeAmazon\n❌Regular price @ ₹19,999"
     }
    ]
   },
   {
    "id": 40044,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "949",
    "dicos": "52",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "1200mm Ceiling Fan@ 899🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/472YO5v"
     },
     {
      "type": "plain",
      "text": "\n\n @949\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/511cDMl96OL._SY355_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Heating, Cooling & Air Quality \n                Fans \n                 Ceiling Fans \n                 Ceiling Fans B082RWVPSP \n\nPryce949 \nDicos52 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40045,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Flipkart",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "29990",
    "dicos": "50",
    "catagory":"",
    "text_entities": [
     {
      "type": "plain",
      "text": "Flipkart | Infinix Core i5 10th Gen 1035G1 - (8 GB/512 GB SSD/Windows 11 Home) @ 28240 using SBI🔗\n\n"
     },
     {
      "type": "link",
      "text": "https://inrdeals.com/bmvavinash/https://www.flipkart.com/flipkart/p/item?ebzg=1698410727806&pwymuq=13bc0e10497e&pid=COMGTDKFVHEHH26S&nibah=dea1app&affid=adminpais&affExtParam1=EPTG1913972&affExtParam2=pmEnNp"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/p/c/4/-original-imagmxurypdzh2zb.jpeg?q=70"
     },
     {
      "type": "plain",
      "text": " \nComputers \nLaptops \nInfinix Laptops \n \n \npryce29990 \ndicos50\nitemTipeFlipkart"
     }
    ]
   },
   {
    "id": 40046,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "199",
    "dicos": "75",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Double Bedsheet @199. 🔗\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3FzNcKV"
     },
     {
      "type": "plain",
      "text": "\n\n @199\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81uPJlcZhxL._SY450_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Home Furnishing \n                Bedding & Linen \n                Bedsheets \n                Bedsheets B095MV8TFN \n\nPryce199 \nDicos75 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40047,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "699",
    "dicos": "65",
    "catagory":"Tools",
    "text_entities": [
     {
      "type": "plain",
      "text": "Deal of the day: QUBO 10A Wifi + BT Smart Plug from Hero Group, Energy Monitoring, Suitable for small devices like TVs, Air Purifiers, Mobile & Laptop Chargers (Voice Control with Amazon Alexa and Google Assistant) \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/49dVjKY"
     },
     {
      "type": "plain",
      "text": "\n\n @699\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/51BEMngxVeL._SY355_.jpg"
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
      "text": " & Home Improvement\n\n                Home & Kitchen \n                Home & kitchen | Prime shopping days \n                Prime Units \n                 HI \n                 HI B0BRQBHTTF \n\nPryce699 \nDicos65 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40048,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "6399",
    "dicos": "20",
    "catagory":"Computers",
    "text_entities": [
     {
      "type": "plain",
      "text": "Deal of the day: Seagate One Touch 2TB External HDD with Password Protection Light Blue, for Windows and Mac, with 3 yr Data Recovery Services, USB and 4 Months Adobe CC Photography (STKY2000402) \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QbmbCB"
     },
     {
      "type": "plain",
      "text": "\n\n "
     },
     {
      "type": "mention",
      "text": "@6399"
     },
     {
      "type": "plain",
      "text": "\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/61jAloNJraL._SY606_.jpg"
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
      "text": " & Accessories\n\n                Computers & Accessories \n                External Devices & Data Storage \n                 External Hard Disks \nPryce6399 \nDicos20 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40049,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "199",
    "dicos": "81",
    "catagory":"Clothing",
    "text_entities": [
     {
      "type": "plain",
      "text": "Fivali 4 Pack Neck Gaiter Breathable Bandana Mask for Outdoor Protection \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3tQRU4m"
     },
     {
      "type": "plain",
      "text": "\n\n @199\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/81lhXIOdwwL._SX679_.jpg"
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
      "text": " & Accessories\n\n                Clothing & Accessories \n                Men \n                Winter Wear \n                 Mufflers & Scarves \n                 Mufflers & Scarves B08ZNJXGB8 \n\nPryce199 \nDicos81 \nitemtipeAmazon"
     }
    ]
   },
   {
    "id": 40050,
    "type": "message",
    "date": "2023-10-28",
    "tipe": "Amazon",
    "from": "All1App daily",
    "from_id": "channel1858370886",
    "photo": "(File not included. Change data exporting settings to download.)",
    "pryce": "151",
    "dicos": "36",
    "catagory":"Home",
    "text_entities": [
     {
      "type": "plain",
      "text": "Deal of the day: SignoraWare Stainless Steel Tumbler with Lid | Air Tight Leak Proof Glass Tumblers for Office Gym Yoga Hiking Trekking Travel Home Kitchen (370ml), Set of 1, Blue \n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/40eFCyO"
     },
     {
      "type": "plain",
      "text": "\n\n @151\n"
     },
     {
      "type": "link",
      "text": "https://m.media-amazon.com/images/I/71rzh2LdISL._SY606_.jpg"
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
      "text": " & Kitchen\n\n                Home & Kitchen \n                Kitchen & Dining \n                Tableware \n                Glassware & Drinkware \n                Glassware & Drinkware B07GC89QXS \n\nPryce151 \nDicos36 \nitemtipeAmazon"
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
let itemType = ""
let itemText = ""
let itemTextDeals = ""
  
let Links;
  // let todaysDate;
  
let today = new Date();
today.setDate(today.getDate());
// yesterday.setDate(yesterday.getDate() - 1);
let todayDate = today.toISOString().split("T")[0];
console.log("today date is ",todayDate); 
  let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
  let chatId = "@all1app";
  let watscode = "FfH1v13f7dVA5ZHVvzEW3E";
  let text = "";
  let texturl = ""; //product tagid url to be appended
  let urltext = ""; //product page item text data
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
  let id = 1489;
  let len = 0;
  // let idlen =  "https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json";
    // let idlen = "https://avi1deals-default-rtdb.firebaseio.com/amazon.json";
  let access_token = await getAccessToken();

  console.log("access token in avideals is ",access_token)
  let mention = "";
  let otherUrls = "";
  // Links = Input[0].text_entities[1].text;
  // Links = Input.messages[0].text_entities[1].text;
  len = await firebaseget();
  if(len==0){
    id = len+1;
  }
  else{
    id = len;
  }
  console.log("Await length is ",len)
  for (i = 0; i < Input.length; i++) {
    // for (i=1;i<Input.messages.length;i++){
    discount = "";
    photo = "";
    watscode = "";
    urltext = "";
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
    asin = "";
    itemType = "";
    itemText = "";
    itemTextDeals = "";
    c1 = "";
    c2 = "";
    c3 = "";
    c4 = "";
    c5 = "";




    texturl = "";;
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
                // if (Input[i].from.includes("All1App")) {
                if (!Input[i].from.includes("All1App")) {
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

                earnlink = "https://inrdeals.com/bmvavinash/"+strUrl
                
                //earnlink not working
                // await driver.get("https://earnkaro.com/");
                // // await driver.get("https://earnkaro.com/create-earn-link");
                // try {
                //   await driver.findElement(By.xpath('//*[@id="link_makeprofit"]/span')).click();
                // } catch (e) {
                //   console.log("Earnkaro Earn Link Error");
                // }
                // await driver.sleep(500);
                // try {
                //   await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                // } catch (e) {
                //   console.log("Deallink New Error");
                // }
                // // await driver.findElement(By.id("deallink")).sendKeys(strUrl);
                
                // await driver
                // .findElement(By.id("Btn_Make_Profit_Button"))
                // .click();
                // // await driver.findElement(By.id("deallink")).click();
                // await driver.findElement(By.id("deallinkshorturl")).getAttribute("value").then(function(webElement) {
                //   console.log('deal exists');
                //   earnlink = webElement;
                //   console.log('earnlink is '+earnlink);
                // }, function(err) {
                //   if (err.state && err.state === 'no such element') {
                //     console.log('Deal not found');
                //   }
                // });
                // console.log('earn link is '+earnlink);
                // await driver.findElement(By.id("Copy_Link_make")).click();
                // // text = discount + "% off on " + text + "price is " + price
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
              itemText = itemText +" "+ earnlink;
              if(itemText.includes("&amp;")){
                itemText = itemText.replaceAll("&amp;","&")
              }
              if(itemcategory.includes("&amp;")){
                itemcategory = itemcategory.replaceAll("&amp;","&")
              }
              // photo="https://m.media-amazon.com/images/I/91pIt7I-aVL._SY450_.jpg"

            //   if((Input[i].from.includes("All1App")) && telegramVisit){
              if( telegramVisit){
                  telegramVisit = false
                  console.log("Only All1app")
                  itemTextDeals = "#" + Input[i].tipe +" : \n" + itemText +" \n"+ `https://dealshubglobal.com/product/${Input[i].id}`;
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
                  telegram(photo,"@all1app",itemTextDeals);//to be reverted
                  let link = `https://dealshubglobal.com/product/${Input[i].id}`
                  if(disco >= 75){
                    isDeal = true;
                    telegram(photo,"@all1appdeals",itemTextDeals);//to be reverted
                    if(itemTextDeals.includes("&nbsp;")){
                      itemTextDeals = itemTextDeals.replaceAll("&nbsp;","")
                    }
                    if(itemTextDeals.includes("#")){
                      itemTextDeals = itemTextDeals.replaceAll("#","")
                    }
                    fbdata = facebook(photo, link, itemTextDeals);
                    console.log("FbData other than Amazon" + fbdata)
                  }
                  break;//check not to repeat to amazon telegram
                }
                if(!Input[i].from.includes("All1App")){
                telegram(photo,"@all1appweb",itemText);

                try {
                  id+=1
                  // var app = JSON.stringify({
                  // var app = JSON.parse({
                    var app = {
                      // "name":"firebase check",
                      // "id":"11"
                    "id": id,
                    "date": String(todayDate),
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
                      "avinashbmv": String(strUrl)
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
                  
                  if(photo != "" && photo.length <300 && pricenum>0 && disco>0){
                    telegram(photo,"@all1appdaily",text + "\n"+ earnlink +"\n" + itemcategory +"\n"+"itemTipe" + itemType);
                    path = "amazon.json"
                    // firebasepost(app,path);
                    path = "deals.json"
                    // firebasepost(product,path);
                    firebasepost(app,access_token);
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
                texturl = "";
                btext = "";
                photo = "";
                itemText = "";
                itemTextDeals = "";
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
                      texturl = "";
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
                      texturl = "";
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
                else if (price == "") {
                  try{
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]')).getAttribute("innerHTML");
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
                //   if (!Input[i].from.includes("All1App")) {  TO COMBINE DEPLOYMENT
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
                    texturl = text
                    texturl = texturl + urlvalue1 + "\n";
                    urlvalue1 = "";
                    // console.log("Link Appended");
                    // btext = btext + urlvalue1+"\n" + "\n" + itemcategory + "\n";

                    // if(btext.length>99)
                    //   btext = text.substring(0,99);
                //   } else {  TO COMBINE DEPLOYMENT
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
                          `https://dealshubglobal.com/product/${Input[i].id}`;
                          if(t1.includes("&nbsp;")){
                            t1 = t1.replaceAll("&nbsp;","")
                          }



                          
                        // t1 = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://dealshubglobal.com/product/${Input[i].id}`
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


                        let link = `https://dealshubglobal.com/product/${Input[i].id}`;
                        if (disco >= 75) {
                          isDeal = true;
                          telegram(photo, "@all1appdeals", t1);
                          if (t1.includes("dealshubglobal")) {
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
                          `https://dealshubglobal.com/deals/product/${Input[i].id}`;
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
                          `https://dealshubglobal.com/offers/product/${Input[i].id}`;
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
                          `https://dealshubglobal.com/avideals/product/${Input[i].id}`;
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
                          `https://dealshubglobal.com/avideals${l}/product/${Input[i].id}`;
                          console.log("Avideals telegram")
                        telegram(photo, `@avideals${l}`, t1);
                        t1 = "";
                    }
                //   } TO COMBINE DEPLOYMENT
                  // text = ta;
                } catch (e) {
                  console.log(e);
                }
              } //for loop of Link
            //   if (!Input[i].from.includes("All1App")) { TO COMBINE DEPLOYMENT
                // text = text + "\n @" + pricenum + "\n" + itemcategory + "\n";
                texturl = texturl + "\n @" + pricenum + "\n" + itemcategory + "\n";
                // console.log("text telegram")
                // telegram(photo,"@all1appdaily",text);
            //   } else {  TO COMBINE DEPLOYMENT
                if (text.includes("Deal Price")) {
                  text.indexOf("Deal Price");
                  text = text.substring(0, text.indexOf("Deal Price"));
                }
                //calling inside loop
                // text = text +"\n\nDeal Price: "+ pricenum + "\nDiscount is: "+ disco +"%\n"+ `https://dealshubglobal.com/product/${Input[i].id}`
                // break;   TO COMBINE DEPLOYMENT
                // text = text + `+"\n";
            //   }  TO COMBINE DEPLOYMENT
              console.log("checking whatsapp all1app in from ",Input[i].from)
              //   if (Input[i].from.includes("All1App")) {
            try{
              if (!Input[i].from.includes("All1App")) {
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

            }
            catch(e){
                console.log("To Start DB")
            }
           
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
        //   if (Input[i].from.includes("All1App")) {
          if (!Input[i].from.includes("All1App")) {
            // if(Input[i].text_entities!=undefined)
            // if (!text.includes("dealshubglobal")) {
            //   console.log("non Affiliate product");
            //   text = "";
            //   texturl = "";
            //   btext = "";
            //   photo = "";
            //   continue;
            // }  TO COMBINE DEPLOYMENT
          }
    } catch (e) {
      console.log(e);
    }
    try {
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            // if (!texturl.includes("amzn")) {
            //   console.log("non Amazon product");
            //   text = "";
            //   texturl = "";
            //   btext = "";
            //   photo = "";
            //   continue;
            // }  TO COMBINE DEPLOYMENT
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
              telegram(photo, chatId, texturl);
            }
            else if(Input[i].from == "All Deals")
            {
              telegram(photo, chatId, texturl);

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
                "isDeal":isDeal,
                "isOffer":isOffer,
              }
              // )
              // ;
              console.log("calling firebase");
              console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              // app = JSON.parse(app)
              console.log("Parsed Json is ",app)
              if(photo != "" && pricenum > 0 && disco > 0){
                firebasepost(app,access_token);
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
    //   if (Input[i].from.includes("All1App")) {
      if (!Input[i].from.includes("All1App")) {
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
            // if (Input[i].from.includes("All1App")) {
            if (!Input[i].from.includes("All1App")) {
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
    //   if (disc && Input[i].from.includes("All1App")) {
      if (disc && !(Input[i].from.includes("All1App"))) {
        if (photo != "") {
          chatId = "@all1app";
          watscode = "FfH1v13f7dVA5ZHVvzEW3E";
          console.log("with photo");
          //Need to check
          // telegram(photo,chatId,text);
          
          
          //@Whatsapp
        //   if (Input[i].from.includes("All1App")) {
          if (!Input[i].from.includes("All1App")) {
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
        //   if (Input[i].from.includes("All1App")) {
          if (!Input[i].from.includes("All1App")) {
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
            telegram(photo, "@all1appweb", texturl);
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
