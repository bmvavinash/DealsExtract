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
  // driver = await chrome.Driver.createSession(options);

  //@Firefox
  // version change error change the lib dir of chromedriver(not bin) with new chromedriver exe
  driver = await new Builder().forBrowser("firefox").build();
  const Input =
    [














      {
        "id": 95587,
        "type": "message",
        "date": "2023-07-13T10:24:38",
        "date_unixtime": "1689224078",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1255,
        "height": 410,
        "text": [
         {
          "type": "bold",
          "text": "BEST :"
         },
         " Voltas 1.5 Ton 3 Star Split AC (2023 Model)@ 28,249 ",
         {
          "type": "bold",
          "text": "(Effectively)\n\n"
         },
         " 🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3NSPOaE"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "₹1750 Discount with SBI Credit Card"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "BEST :"
         },
         {
          "type": "plain",
          "text": " Voltas 1.5 Ton 3 Star Split AC (2023 Model)@ 28,249 "
         },
         {
          "type": "bold",
          "text": "(Effectively)\n\n"
         },
         {
          "type": "plain",
          "text": " 🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NSPOaE"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "₹1750 Discount with SBI Credit Card"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95588,
        "type": "message",
        "date": "2023-07-13T10:25:07",
        "date_unixtime": "1689224107",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 586,
        "text": [
         "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch @899\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ljxzZ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch @899\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ljxzZ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95589,
        "type": "message",
        "date": "2023-07-13T10:25:29",
        "date_unixtime": "1689224129",
        "edited": "2023-07-13T20:08:33",
        "edited_unixtime": "1689259113",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "Redmi 12C (4/64GB) at ₹7,799\n\n🔥",
         {
          "type": "bold",
          "text": "Apply ₹700 Off Coupon\n\n"
         },
         "Link : ",
         {
          "type": "link",
          "text": "https://amzn.to/44o8WEj"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redmi 12C (4/64GB) at ₹7,799\n\n🔥"
         },
         {
          "type": "bold",
          "text": "Apply ₹700 Off Coupon\n\n"
         },
         {
          "type": "plain",
          "text": "Link : "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44o8WEj"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95590,
        "type": "message",
        "date": "2023-07-13T10:26:25",
        "date_unixtime": "1689224185",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal :"
         },
         " PTron Neckband @399.\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3Ob930f"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal :"
         },
         {
          "type": "plain",
          "text": " PTron Neckband @399.\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Ob930f"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95591,
        "type": "message",
        "date": "2023-07-13T10:28:17",
        "date_unixtime": "1689224297",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 596,
        "text": [
         {
          "type": "bold",
          "text": "▶️ Redmi A2 2GB RAM, 32GB Storage @ ₹5,699\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3rsvqWp"
         },
         "\n_______________________________\n\n",
         {
          "type": "bold",
          "text": "▶️ Redmi 12C 4GB RAM, 64GB Storage @ ₹7,799\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43qUY3j"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "💡  Apply ₹700 coupon"
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
          "text": "https://amzn.to/3rsvqWp"
         },
         {
          "type": "plain",
          "text": "\n_______________________________\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ Redmi 12C 4GB RAM, 64GB Storage @ ₹7,799\n\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43qUY3j"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "💡  Apply ₹700 coupon"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95592,
        "type": "message",
        "date": "2023-07-13T10:29:44",
        "date_unixtime": "1689224384",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 557,
        "text": [
         "PTron Fusion Evo v3 12W Bluetooth Speaker 5.0 Mini Soundbar @ ₹899\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3rjn9nk"
         },
         "\n\n❌ Regular price @ ₹3k++\n\n",
         {
          "type": "bold",
          "text": "🚨 This Deal Is Exclusive For Prime Members"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "PTron Fusion Evo v3 12W Bluetooth Speaker 5.0 Mini Soundbar @ ₹899\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rjn9nk"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3k++\n\n"
         },
         {
          "type": "bold",
          "text": "🚨 This Deal Is Exclusive For Prime Members"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95593,
        "type": "message",
        "date": "2023-07-13T10:30:05",
        "date_unixtime": "1689224405",
        "edited": "2023-07-13T15:05:41",
        "edited_unixtime": "1689240941",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 528,
        "text": [
         "Maha Loot 🚀 🚀 Fire TV Stick Lite with all-new Alexa Voice Remote Lite (no TV controls) @ ₹1,799\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3DbeiXz"
         },
         "\n\n❌ Regular price @ ₹2,999\n\n",
         {
          "type": "bold",
          "text": "🚨 This Deal Is Exclusive For Prime Members"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Maha Loot 🚀 🚀 Fire TV Stick Lite with all-new Alexa Voice Remote Lite (no TV controls) @ ₹1,799\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3DbeiXz"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,999\n\n"
         },
         {
          "type": "bold",
          "text": "🚨 This Deal Is Exclusive For Prime Members"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95594,
        "type": "message",
        "date": "2023-07-13T10:30:48",
        "date_unixtime": "1689224448",
        "edited": "2023-07-13T16:13:36",
        "edited_unixtime": "1689245016",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 580,
        "text": [
         "▶️ Fire TV Stick with Alexa Jion TTV Deals Voice Remote @ ₹2,199\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44JJrgq"
         },
         "\n\n❌Regular price @ ₹3,999\n\n_________________________________\n\n▶️ Fire TV Stick 4K with all-new Jion TTV Deals Alexa Voice Remote @ ₹3,199\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44EFz0j"
         },
         "\n__________________________________\n\n▶️ Fire TV Stick 4K Max streaming device Wi-Fi 6, Alexa Voice Remote @ ₹3,499\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3DcRA1k"
         },
         "\n\n❌Regular price @ ₹6,499"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "▶️ Fire TV Stick with Alexa Jion TTV Deals Voice Remote @ ₹2,199\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44JJrgq"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹3,999\n\n_________________________________\n\n▶️ Fire TV Stick 4K with all-new Jion TTV Deals Alexa Voice Remote @ ₹3,199\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44EFz0j"
         },
         {
          "type": "plain",
          "text": "\n__________________________________\n\n▶️ Fire TV Stick 4K Max streaming device Wi-Fi 6, Alexa Voice Remote @ ₹3,499\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3DcRA1k"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹6,499"
         }
        ]
       },
       {
        "id": 95595,
        "type": "message",
        "date": "2023-07-13T10:31:09",
        "date_unixtime": "1689224469",
        "edited": "2023-07-13T12:05:48",
        "edited_unixtime": "1689230148",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 601,
        "text": [
         "Fire-Boltt Ring Plus 1.91\" Bluetooth Calling Smartwatch @ ₹1,599\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3DcDJrS"
         },
         "\n\n❌ Regular price @ ₹3,499\n\n",
         {
          "type": "bold",
          "text": "🚨 This deal is exclusively for Prime members"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fire-Boltt Ring Plus 1.91\" Bluetooth Calling Smartwatch @ ₹1,599\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3DcDJrS"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3,499\n\n"
         },
         {
          "type": "bold",
          "text": "🚨 This deal is exclusively for Prime members"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95596,
        "type": "message",
        "date": "2023-07-13T10:31:35",
        "date_unixtime": "1689224495",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 598,
        "text": [
         "Acer Nitro VG240YB 23.8 Inch 1920 X 1080 Pixels Full Hd IPS LCD Monitor with LED Backlight @ ₹7,199\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3JXCzUK"
         },
         "\n\n❌ Regular price @ ₹9,999\n\n",
         {
          "type": "bold",
          "text": "💡 With SBI Cc\n\n🚨 This deal is exclusively for Prime members"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Acer Nitro VG240YB 23.8 Inch 1920 X 1080 Pixels Full Hd IPS LCD Monitor with LED Backlight @ ₹7,199\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JXCzUK"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹9,999\n\n"
         },
         {
          "type": "bold",
          "text": "💡 With SBI Cc\n\n🚨 This deal is exclusively for Prime members"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95597,
        "type": "message",
        "date": "2023-07-13T10:31:55",
        "date_unixtime": "1689224515",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 576,
        "text": [
         "Maha Loot 🚀 🚀  Redmi (32 Inches) HD Ready Smart LED Fire TV @ ₹9,899",
         {
          "type": "bold",
          "text": " (Effectively)\n\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3OeoNjn"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "💡 With SBI Cc"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Maha Loot 🚀 🚀  Redmi (32 Inches) HD Ready Smart LED Fire TV @ ₹9,899"
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
          "text": "https://amzn.to/3OeoNjn"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "💡 With SBI Cc"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95598,
        "type": "message",
        "date": "2023-07-13T10:32:14",
        "date_unixtime": "1689224534",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1272,
        "height": 542,
        "text": [
         "Echo Dot (Black) Combo with Wipro 9W Smart Color Bulb @ ₹2,099\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3Oa0fbc"
         },
         "\n\n❌ Regular price @ ₹3,199"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Echo Dot (Black) Combo with Wipro 9W Smart Color Bulb @ ₹2,099\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Oa0fbc"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹3,199"
         }
        ]
       },
       {
        "id": 95599,
        "type": "message",
        "date": "2023-07-13T10:32:43",
        "date_unixtime": "1689224563",
        "edited": "2023-07-13T11:02:39",
        "edited_unixtime": "1689226359",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 547,
        "text": [
         "OnePlus Y Series 4K Ultra HD Smart Android LED TV\n\n",
         {
          "type": "bold",
          "text": "▶️ 50 inches @ ₹29,249\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3JThMla"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "▶️ 55 inches @ ₹35,240\n"
         },
         "🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3Q2pxsS"
         },
         "\n\n💡 ",
         {
          "type": "bold",
          "text": "With SBI Cc Bank Discount"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Y Series 4K Ultra HD Smart Android LED TV\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ 50 inches @ ₹29,249\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JThMla"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "▶️ 55 inches @ ₹35,240\n"
         },
         {
          "type": "plain",
          "text": "🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Q2pxsS"
         },
         {
          "type": "plain",
          "text": "\n\n💡 "
         },
         {
          "type": "bold",
          "text": "With SBI Cc Bank Discount"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95600,
        "type": "message",
        "date": "2023-07-13T10:33:03",
        "date_unixtime": "1689224583",
        "edited": "2023-07-13T10:33:04",
        "edited_unixtime": "1689224584",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "PTron Tangent Lite Bluetooth Neckband @ ₹399\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3ObWeCU"
         },
         "\n\n❌ Regular price @ ₹699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "PTron Tangent Lite Bluetooth Neckband @ ₹399\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3ObWeCU"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹699"
         }
        ]
       },
       {
        "id": 95601,
        "type": "message",
        "date": "2023-07-13T10:35:00",
        "date_unixtime": "1689224700",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1066,
        "height": 383,
        "text": [
         "HP v236w USB 2.0 64GB Pen Drive @ ₹349\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3PTTETi"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP v236w USB 2.0 64GB Pen Drive @ ₹349\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PTTETi"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95602,
        "type": "message",
        "date": "2023-07-13T10:36:57",
        "date_unixtime": "1689224817",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1035,
        "height": 408,
        "text": [
         "Aristocrat Luggage & Duffel Bags Starts @799.\n\n",
         {
          "type": "bold",
          "text": "Masterlink"
         },
         " :  ",
         {
          "type": "link",
          "text": "https://amzn.to/43u8HWV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Aristocrat Luggage & Duffel Bags Starts @799.\n\n"
         },
         {
          "type": "bold",
          "text": "Masterlink"
         },
         {
          "type": "plain",
          "text": " :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43u8HWV"
         }
        ]
       },
       {
        "id": 95603,
        "type": "message",
        "date": "2023-07-13T12:04:42",
        "date_unixtime": "1689230082",
        "edited": "2023-07-13T14:11:28",
        "edited_unixtime": "1689237688",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         {
          "type": "bold",
          "text": "Prime Day Early Access Deals Live🤩\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46PhqWE"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Day Early Access Deals Live🤩\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46PhqWE"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95604,
        "type": "message",
        "date": "2023-07-13T12:06:39",
        "date_unixtime": "1689230199",
        "edited": "2023-07-13T12:20:23",
        "edited_unixtime": "1689231023",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         {
          "type": "bold",
          "text": "Lower than Market Price :"
         },
         " Malabar Gold & Diamonds 24k (999) 2Gm Gold Coin cum Pendant@ 11,589 ",
         {
          "type": "bold",
          "text": "(Effectively)\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rsz1Up"
         },
         "\n\n",
         {
          "type": "underline",
          "text": "Rs.1250 Discount with ICICI/SBI Credit card\n\n"
         },
         {
          "type": "text_link",
          "text": "Today’s Price of Gold (24k) 1Gm@ 6000",
          "href": "https://www.goodreturns.in/gold-rates/"
         },
         {
          "type": "bold",
          "text": " + Extra GST Taxes etc. \n\nBenefits ↓↓↓↓\n\n"
         },
         "✓ Zero Making Charges\n✓ 3% GST In Market, Here All Included\n✓ Full Value Of Your Money\n✓ BIS Hallmarked So Complete Authenticity\n\n",
         {
          "type": "bold",
          "text": "GRAB Before Sold Out \n\nMore Suggestions\n\n"
         },
         " 🔗",
         {
          "type": "link",
          "text": "https://amzn.to/44kpRaQ"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3PQPBr5"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3PSJ3rS"
         },
         "\n\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3rsxBJt"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Lower than Market Price :"
         },
         {
          "type": "plain",
          "text": " Malabar Gold & Diamonds 24k (999) 2Gm Gold Coin cum Pendant@ 11,589 "
         },
         {
          "type": "bold",
          "text": "(Effectively)\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rsz1Up"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "underline",
          "text": "Rs.1250 Discount with ICICI/SBI Credit card\n\n"
         },
         {
          "type": "text_link",
          "text": "Today’s Price of Gold (24k) 1Gm@ 6000",
          "href": "https://www.goodreturns.in/gold-rates/"
         },
         {
          "type": "bold",
          "text": " + Extra GST Taxes etc. \n\nBenefits ↓↓↓↓\n\n"
         },
         {
          "type": "plain",
          "text": "✓ Zero Making Charges\n✓ 3% GST In Market, Here All Included\n✓ Full Value Of Your Money\n✓ BIS Hallmarked So Complete Authenticity\n\n"
         },
         {
          "type": "bold",
          "text": "GRAB Before Sold Out \n\nMore Suggestions\n\n"
         },
         {
          "type": "plain",
          "text": " 🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44kpRaQ"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PQPBr5"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PSJ3rS"
         },
         {
          "type": "plain",
          "text": "\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rsxBJt"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95605,
        "type": "message",
        "date": "2023-07-13T14:09:06",
        "date_unixtime": "1689237546",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1229,
        "height": 488,
        "text": [
         "boAt Bassheads 102 Wired in Ear Earphones with Mic @299\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ohrPJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Bassheads 102 Wired in Ear Earphones with Mic @299\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ohrPJ"
         }
        ]
       },
       {
        "id": 95606,
        "type": "message",
        "date": "2023-07-13T14:09:30",
        "date_unixtime": "1689237570",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1198,
        "height": 464,
        "text": [
         "Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin & Light (16GB/512GB SSD ",
         {
          "type": "mention",
          "text": "@46999"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XR4OKt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin & Light (16GB/512GB SSD "
         },
         {
          "type": "mention",
          "text": "@46999"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XR4OKt"
         }
        ]
       },
       {
        "id": 95607,
        "type": "message",
        "date": "2023-07-13T14:09:58",
        "date_unixtime": "1689237598",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 596,
        "text": [
         "A Himanshu 2gm Euphoria Jewellery pure 24KT gold coin pendant in 999 finese ",
         {
          "type": "mention",
          "text": "@12790"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43nL56o"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "A Himanshu 2gm Euphoria Jewellery pure 24KT gold coin pendant in 999 finese "
         },
         {
          "type": "mention",
          "text": "@12790"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nL56o"
         }
        ]
       },
       {
        "id": 95608,
        "type": "message",
        "date": "2023-07-13T14:10:21",
        "date_unixtime": "1689237621",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 606,
        "text": [
         "boAt Immortal IM1000D Dual Channel Gaming Wired Over Ear Headphones ",
         {
          "type": "mention",
          "text": "@1199"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NOHzwb"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Immortal IM1000D Dual Channel Gaming Wired Over Ear Headphones "
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
          "text": "https://amzn.to/3NOHzwb"
         }
        ]
       },
       {
        "id": 95609,
        "type": "message",
        "date": "2023-07-13T14:10:39",
        "date_unixtime": "1689237639",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1264,
        "height": 394,
        "text": [
         "Redgear Blaze Semi-Mechanical wired Gaming keyboard @479\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pKkToL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redgear Blaze Semi-Mechanical wired Gaming keyboard @479\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pKkToL"
         }
        ]
       },
       {
        "id": 95610,
        "type": "message",
        "date": "2023-07-13T14:10:54",
        "date_unixtime": "1689237654",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 779,
        "height": 532,
        "text": [
         "Ajio: Under 499 Store 💥\n\n➡️ Women: ",
         {
          "type": "link",
          "text": "https://extp.in/2pSr8g"
         },
         "\n➡️ Men: ",
         {
          "type": "link",
          "text": "https://extp.in/rtwfBC"
         },
         "\n\n➡️ Boys: ",
         {
          "type": "link",
          "text": "https://extp.in/0h0lOr"
         },
         "\n➡️ Girls: ",
         {
          "type": "link",
          "text": "https://extp.in/290sZm"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio: Under 499 Store 💥\n\n➡️ Women: "
         },
         {
          "type": "link",
          "text": "https://extp.in/2pSr8g"
         },
         {
          "type": "plain",
          "text": "\n➡️ Men: "
         },
         {
          "type": "link",
          "text": "https://extp.in/rtwfBC"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Boys: "
         },
         {
          "type": "link",
          "text": "https://extp.in/0h0lOr"
         },
         {
          "type": "plain",
          "text": "\n➡️ Girls: "
         },
         {
          "type": "link",
          "text": "https://extp.in/290sZm"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95611,
        "type": "message",
        "date": "2023-07-13T14:11:09",
        "date_unixtime": "1689237669",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 977,
        "height": 346,
        "text": [
         "Ajio Loot | Up to 90% Off 🔥\n\nShop: ",
         {
          "type": "link",
          "text": "https://extp.in/7rKn8T"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ajio Loot | Up to 90% Off 🔥\n\nShop: "
         },
         {
          "type": "link",
          "text": "https://extp.in/7rKn8T"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95612,
        "type": "message",
        "date": "2023-07-13T14:11:32",
        "date_unixtime": "1689237692",
        "edited": "2023-07-13T14:37:29",
        "edited_unixtime": "1689239249",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1168,
        "height": 455,
        "text": [
         "Flipkart: Acer Core i3 - (8 GB/256 GB SSD/Windows 11 Home) @ Rs 30990\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/cenbU9"
         },
         "\n\n📌 Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Acer Core i3 - (8 GB/256 GB SSD/Windows 11 Home) @ Rs 30990\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/cenbU9"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns"
         }
        ]
       },
       {
        "id": 95613,
        "type": "message",
        "date": "2023-07-13T14:12:10",
        "date_unixtime": "1689237730",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "Amazon ₹300 Back on ₹649 Product  300 Back on 1599  245 Back on 495 || 220 Back on 440 & MANY MORE ….\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pKkYsz"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Amazon ₹300 Back on ₹649 Product  300 Back on 1599  245 Back on 495 || 220 Back on 440 & MANY MORE ….\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pKkYsz"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95614,
        "type": "message",
        "date": "2023-07-13T14:13:15",
        "date_unixtime": "1689237795",
        "edited": "2023-07-13T15:00:05",
        "edited_unixtime": "1689240605",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1271,
        "height": 581,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal | Lowest :"
         },
         " Blaupunkt Wireless Bluetooth Earbuds@ 949\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rtTRTd"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal | Lowest :"
         },
         {
          "type": "plain",
          "text": " Blaupunkt Wireless Bluetooth Earbuds@ 949\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rtTRTd"
         }
        ]
       },
       {
        "id": 95615,
        "type": "message",
        "date": "2023-07-13T14:13:36",
        "date_unixtime": "1689237816",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 820,
        "height": 354,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/2FhDEs"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/2FhDEs"
         }
        ]
       },
       {
        "id": 95616,
        "type": "message",
        "date": "2023-07-13T19:50:29",
        "date_unixtime": "1689258029",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 798,
        "height": 380,
        "text": [
         "Prettykrafts Organisers Upto 89% Off starting @131\n\n",
         {
          "type": "link",
          "text": "https://extp.in/UxwBlB"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Prettykrafts Organisers Upto 89% Off starting @131\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/UxwBlB"
         }
        ]
       },
       {
        "id": 95617,
        "type": "message",
        "date": "2023-07-13T19:51:18",
        "date_unixtime": "1689258078",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "beatXP Unbound Neo Amoled Display Calling Smartwatch ",
         {
          "type": "mention",
          "text": "@1399"
         },
         ".\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44mkYOI"
         },
         " \n\n*Extra ₹100 Cashback :  ",
         {
          "type": "link",
          "text": "https://amzn.to/3JSBaPm"
         },
         "   (Pay Using UPI)."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "beatXP Unbound Neo Amoled Display Calling Smartwatch "
         },
         {
          "type": "mention",
          "text": "@1399"
         },
         {
          "type": "plain",
          "text": ".\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44mkYOI"
         },
         {
          "type": "plain",
          "text": " \n\n*Extra ₹100 Cashback :  "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JSBaPm"
         },
         {
          "type": "plain",
          "text": "   (Pay Using UPI)."
         }
        ]
       },
       {
        "id": 95618,
        "type": "message",
        "date": "2023-07-13T19:51:41",
        "date_unixtime": "1689258101",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 563,
        "text": [
         "Samsung Galaxy Tab A8@ 10749 \n\n😍",
         {
          "type": "bold",
          "text": "Double Discount With ICICI & SBI Credit Card \n\n"
         },
         " 🔗",
         {
          "type": "link",
          "text": "https://amzn.to/44Ks8f9"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung Galaxy Tab A8@ 10749 \n\n😍"
         },
         {
          "type": "bold",
          "text": "Double Discount With ICICI & SBI Credit Card \n\n"
         },
         {
          "type": "plain",
          "text": " 🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44Ks8f9"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95619,
        "type": "message",
        "date": "2023-07-13T19:52:03",
        "date_unixtime": "1689258123",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 538,
        "text": [
         "65% Off | L'Oreal Paris Conditioner , 440 ml@ 352\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44uxfRi"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "65% Off | L'Oreal Paris Conditioner , 440 ml@ 352\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44uxfRi"
         }
        ]
       },
       {
        "id": 95620,
        "type": "message",
        "date": "2023-07-13T19:53:27",
        "date_unixtime": "1689258207",
        "edited": "2023-07-13T22:44:52",
        "edited_unixtime": "1689268492",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 334,
        "text": [
         {
          "type": "bold",
          "text": "Flipkart Plus Member Be Active Tonight, Sale Will Be Live at 12 AM.\n\n"
         },
         "*Big Saving Days (15th - 19th July). \n\n ",
         {
          "type": "link",
          "text": "https://extp.in/Ia9nrH"
         },
         "\n\n*Sale Starts 1 Day Early For Plus Members On 14th July, 12 AM.\n\n10% Discount With Axis Bank Cards.\n\n",
         {
          "type": "bold",
          "text": "Important :"
         },
         " Many Big Loots Expected, ",
         {
          "type": "bold",
          "text": "Stay"
         },
         " ",
         {
          "type": "bold",
          "text": "Active & Pin Our Channel On Top"
         },
         ", So That You Won't Miss Any Loot.\n\n Invite Your Friends Here : ",
         {
          "type": "link",
          "text": "https://t.me/tr_facts_dealss"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Flipkart Plus Member Be Active Tonight, Sale Will Be Live at 12 AM.\n\n"
         },
         {
          "type": "plain",
          "text": "*Big Saving Days (15th - 19th July). \n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/Ia9nrH"
         },
         {
          "type": "plain",
          "text": "\n\n*Sale Starts 1 Day Early For Plus Members On 14th July, 12 AM.\n\n10% Discount With Axis Bank Cards.\n\n"
         },
         {
          "type": "bold",
          "text": "Important :"
         },
         {
          "type": "plain",
          "text": " Many Big Loots Expected, "
         },
         {
          "type": "bold",
          "text": "Stay"
         },
         {
          "type": "plain",
          "text": " "
         },
         {
          "type": "bold",
          "text": "Active & Pin Our Channel On Top"
         },
         {
          "type": "plain",
          "text": ", So That You Won't Miss Any Loot.\n\n Invite Your Friends Here : "
         },
         {
          "type": "link",
          "text": "https://t.me/tr_facts_dealss"
         }
        ]
       },
       {
        "id": 95621,
        "type": "message",
        "date": "2023-07-13T19:54:14",
        "date_unixtime": "1689258254",
        "edited": "2023-07-13T22:32:14",
        "edited_unixtime": "1689267734",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 792,
        "height": 390,
        "text": [
         "Myntra : Flat 70% Off On The Indian Garage Co Men Shirts from Rs.434\n\n",
         {
          "type": "link",
          "text": "https://extp.in/vMYbwL"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra : Flat 70% Off On The Indian Garage Co Men Shirts from Rs.434\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/vMYbwL"
         }
        ]
       },
       {
        "id": 95622,
        "type": "message",
        "date": "2023-07-13T19:54:27",
        "date_unixtime": "1689258267",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Apply ₹15 Off Coupon | Mix Tutti Frutti Cherries - 400Gram@ 154\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JTTbg4"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Apply ₹15 Off Coupon | Mix Tutti Frutti Cherries - 400Gram@ 154\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JTTbg4"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95623,
        "type": "message",
        "date": "2023-07-13T19:55:05",
        "date_unixtime": "1689258305",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1157,
        "height": 712,
        "text": [
         "Lenovo V15 Ryzen 5 Hexa Core 5500U Laptop@ 27,990 (Effectively)\n\nClaim 1000₹ Off Using 150 Supercoins : ",
         {
          "type": "link",
          "text": "https://extp.in/MYWW_U"
         },
         "\n\nNow Buy Using ICICI, SBI Credit Card For Extra 5000₹ Off : ",
         {
          "type": "link",
          "text": "https://extp.in/0so3Mo"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lenovo V15 Ryzen 5 Hexa Core 5500U Laptop@ 27,990 (Effectively)\n\nClaim 1000₹ Off Using 150 Supercoins : "
         },
         {
          "type": "link",
          "text": "https://extp.in/MYWW_U"
         },
         {
          "type": "plain",
          "text": "\n\nNow Buy Using ICICI, SBI Credit Card For Extra 5000₹ Off : "
         },
         {
          "type": "link",
          "text": "https://extp.in/0so3Mo"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95624,
        "type": "message",
        "date": "2023-07-13T19:55:46",
        "date_unixtime": "1689258346",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1014,
        "height": 440,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/k5RP5w"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/k5RP5w"
         }
        ]
       },
       {
        "id": 95625,
        "type": "message",
        "date": "2023-07-13T19:56:43",
        "date_unixtime": "1689258403",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "50% Off : "
         },
         "WOW Vitamin C Foaming Face Wash 150ml @199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3OefkbR"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "50% Off : "
         },
         {
          "type": "plain",
          "text": "WOW Vitamin C Foaming Face Wash 150ml @199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OefkbR"
         }
        ]
       },
       {
        "id": 95626,
        "type": "message",
        "date": "2023-07-13T19:57:17",
        "date_unixtime": "1689258437",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 782,
        "height": 399,
        "text": [
         "Myntra: Up to 90% Off on Women's Flats\n\nLink: ",
         {
          "type": "link",
          "text": "https://extp.in/sugJDe"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Up to 90% Off on Women's Flats\n\nLink: "
         },
         {
          "type": "link",
          "text": "https://extp.in/sugJDe"
         }
        ]
       },
       {
        "id": 95627,
        "type": "message",
        "date": "2023-07-13T19:57:42",
        "date_unixtime": "1689258462",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 963,
        "height": 555,
        "text": [
         "Myntra: Upto 55% Off on Biotique Products\n\nGrab: ",
         {
          "type": "link",
          "text": "https://extp.in/M7pyLZ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra: Upto 55% Off on Biotique Products\n\nGrab: "
         },
         {
          "type": "link",
          "text": "https://extp.in/M7pyLZ"
         }
        ]
       },
       {
        "id": 95628,
        "type": "message",
        "date": "2023-07-13T19:58:16",
        "date_unixtime": "1689258496",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1020,
        "height": 543,
        "text": [
         "Flipkart: Upto 85% Off on Watches\n\n➡️ Lee Cooper: ",
         {
          "type": "link",
          "text": "https://extp.in/nsKTKL"
         },
         "\n\n➡️ Provogue: ",
         {
          "type": "link",
          "text": "https://extp.in/E1j3vw"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart: Upto 85% Off on Watches\n\n➡️ Lee Cooper: "
         },
         {
          "type": "link",
          "text": "https://extp.in/nsKTKL"
         },
         {
          "type": "plain",
          "text": "\n\n➡️ Provogue: "
         },
         {
          "type": "link",
          "text": "https://extp.in/E1j3vw"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95629,
        "type": "message",
        "date": "2023-07-13T19:58:33",
        "date_unixtime": "1689258513",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 511,
        "text": [
         "Flipkart Big Saving Days (15th - 19th July) \n\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/gt5ThQ"
         },
         "\n\n✅ 10% Discount With Axis Bank Cards.\n\n➡️ Sale Starts 1 Day Early For Plus Members i.e., on 14th July, 12 AM."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart Big Saving Days (15th - 19th July) \n\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/gt5ThQ"
         },
         {
          "type": "plain",
          "text": "\n\n✅ 10% Discount With Axis Bank Cards.\n\n➡️ Sale Starts 1 Day Early For Plus Members i.e., on 14th July, 12 AM."
         }
        ]
       },
       {
        "id": 95630,
        "type": "message",
        "date": "2023-07-13T19:58:55",
        "date_unixtime": "1689258535",
        "edited": "2023-07-13T21:32:31",
        "edited_unixtime": "1689264151",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1163,
        "height": 446,
        "text": [
         "Flipkart Price Drop Deals 💥\n\nFastrack Calling Smartwatch @ Rs 1299\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/3LfPYh"
         },
         "\n\nNoise Calling Smartwatch @ Rs 1399\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/fS9oXv"
         },
         "\n\nPebble Calling Smartwatch @ Rs 1799\n👉 ",
         {
          "type": "link",
          "text": "https://extp.in/Ij2VVo"
         },
         "\n\n📌 Pay Via Paytm to get ₹100 cashback."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart Price Drop Deals 💥\n\nFastrack Calling Smartwatch @ Rs 1299\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/3LfPYh"
         },
         {
          "type": "plain",
          "text": "\n\nNoise Calling Smartwatch @ Rs 1399\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/fS9oXv"
         },
         {
          "type": "plain",
          "text": "\n\nPebble Calling Smartwatch @ Rs 1799\n👉 "
         },
         {
          "type": "link",
          "text": "https://extp.in/Ij2VVo"
         },
         {
          "type": "plain",
          "text": "\n\n📌 Pay Via Paytm to get ₹100 cashback."
         }
        ]
       },
       {
        "id": 95631,
        "type": "message",
        "date": "2023-07-13T19:59:11",
        "date_unixtime": "1689258551",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1088,
        "height": 369,
        "text": [
         "💥 Croma Accessories Central\n\n✅ Starts @ Rs 129\n\n🎁 Instant 10% ICICI CC Discount\n\n👉 Shop: ",
         {
          "type": "link",
          "text": "https://extp.in/kDhA72"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "💥 Croma Accessories Central\n\n✅ Starts @ Rs 129\n\n🎁 Instant 10% ICICI CC Discount\n\n👉 Shop: "
         },
         {
          "type": "link",
          "text": "https://extp.in/kDhA72"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95632,
        "type": "message",
        "date": "2023-07-13T20:00:40",
        "date_unixtime": "1689258640",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1199,
        "height": 458,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/YVsYQ3"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/YVsYQ3"
         }
        ]
       },
       {
        "id": 95633,
        "type": "message",
        "date": "2023-07-13T20:01:06",
        "date_unixtime": "1689258666",
        "edited": "2023-07-13T20:26:09",
        "edited_unixtime": "1689260169",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1027,
        "height": 384,
        "text": [
         "Upto 81% Off On Kid’s Clothing Combo.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3rt7Usl"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 81% Off On Kid’s Clothing Combo.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3rt7Usl"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95634,
        "type": "message",
        "date": "2023-07-13T20:01:23",
        "date_unixtime": "1689258683",
        "edited": "2023-07-13T23:19:49",
        "edited_unixtime": "1689270589",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "63% Off : Disano Pasta 1Kg @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3OaurTy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "63% Off : Disano Pasta 1Kg @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3OaurTy"
         }
        ]
       },
       {
        "id": 95635,
        "type": "message",
        "date": "2023-07-13T20:01:37",
        "date_unixtime": "1689258697",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " : Kindle Paperwhite 4G LTE (10th gen)@ 7999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44Fuj3R"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " : Kindle Paperwhite 4G LTE (10th gen)@ 7999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44Fuj3R"
         }
        ]
       },
       {
        "id": 95636,
        "type": "message",
        "date": "2023-07-13T20:02:06",
        "date_unixtime": "1689258726",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "81% Off : Solimo Night Nourishing Cream, 50g @92\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46JuTiJ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "81% Off : Solimo Night Nourishing Cream, 50g @92\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46JuTiJ"
         }
        ]
       },
       {
        "id": 95637,
        "type": "message",
        "date": "2023-07-13T20:02:34",
        "date_unixtime": "1689258754",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 599,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " : boAt Gaming Wired Over Ear Headphones@ 1199\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NQym6v"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " : boAt Gaming Wired Over Ear Headphones@ 1199\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NQym6v"
         }
        ]
       },
       {
        "id": 95638,
        "type": "message",
        "date": "2023-07-13T20:02:55",
        "date_unixtime": "1689258775",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1152,
        "height": 375,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " : Redgear Semi-Mechanical Wired Gaming keyboard@ 479\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NT533a"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " : Redgear Semi-Mechanical Wired Gaming keyboard@ 479\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NT533a"
         }
        ]
       },
       {
        "id": 95639,
        "type": "message",
        "date": "2023-07-13T20:04:04",
        "date_unixtime": "1689258844",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 540,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " | ",
         {
          "type": "bold",
          "text": "Lowest"
         },
         " : Blaupunkt Wireless Bluetooth Earbuds@ 949\n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3XSbl83"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " | "
         },
         {
          "type": "bold",
          "text": "Lowest"
         },
         {
          "type": "plain",
          "text": " : Blaupunkt Wireless Bluetooth Earbuds@ 949\n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XSbl83"
         }
        ]
       },
       {
        "id": 95640,
        "type": "message",
        "date": "2023-07-13T20:04:28",
        "date_unixtime": "1689258868",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " : boAt Aavante Bar Orion Soundbar@ 4999\n\n 🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3NIRmE0"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "PC : Flipkart Selling@ 7999"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " : boAt Aavante Bar Orion Soundbar@ 4999\n\n 🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NIRmE0"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "PC : Flipkart Selling@ 7999"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95641,
        "type": "message",
        "date": "2023-07-13T20:04:42",
        "date_unixtime": "1689258882",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         " : Solimo Car Shampoo, 500 ml @139\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JS5Osf"
         }
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Prime Deal"
         },
         {
          "type": "plain",
          "text": " : Solimo Car Shampoo, 500 ml @139\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JS5Osf"
         }
        ]
       },
       {
        "id": 95642,
        "type": "message",
        "date": "2023-07-13T20:05:00",
        "date_unixtime": "1689258900",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 718,
        "height": 364,
        "text": [
         "Dabur Shampoo 60% Off\n\n",
         {
          "type": "link",
          "text": "https://extp.in/r06JVx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dabur Shampoo 60% Off\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/r06JVx"
         }
        ]
       },
       {
        "id": 95643,
        "type": "message",
        "date": "2023-07-13T20:07:06",
        "date_unixtime": "1689259026",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 565,
        "text": [
         "Aristocrat Striker 55Cms Small Soft Sided 4 Spinner Wheels  ",
         {
          "type": "mention",
          "text": "@1749"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44iZaDs"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Aristocrat Striker 55Cms Small Soft Sided 4 Spinner Wheels  "
         },
         {
          "type": "mention",
          "text": "@1749"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44iZaDs"
         }
        ]
       },
       {
        "id": 95644,
        "type": "message",
        "date": "2023-07-13T20:07:40",
        "date_unixtime": "1689259060",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 496,
        "text": [
         "anchor by panasonic Sprint Neo DLX Star Anti Dust High Speed Ceiling Fan ",
         {
          "type": "mention",
          "text": "@1322"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44nZGjE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "anchor by panasonic Sprint Neo DLX Star Anti Dust High Speed Ceiling Fan "
         },
         {
          "type": "mention",
          "text": "@1322"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44nZGjE"
         }
        ]
       },
       {
        "id": 95645,
        "type": "message",
        "date": "2023-07-13T20:08:04",
        "date_unixtime": "1689259084",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 620,
        "text": [
         "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone @569\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XRyfvX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone @569\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XRyfvX"
         }
        ]
       },
       {
        "id": 95646,
        "type": "message",
        "date": "2023-07-13T20:08:32",
        "date_unixtime": "1689259112",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 446,
        "text": [
         "Dyazo Multi 4 USB Ports Fast Car Charger @369\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46Ngx0H"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dyazo Multi 4 USB Ports Fast Car Charger @369\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46Ngx0H"
         }
        ]
       },
       {
        "id": 95647,
        "type": "message",
        "date": "2023-07-13T20:08:58",
        "date_unixtime": "1689259138",
        "edited": "2023-07-14T00:24:00",
        "edited_unixtime": "1689274440",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 506,
        "text": [
         "ASIAN Men's Achiever-15 Latest Stylish Casual Sneaker @449\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pJCHAx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ASIAN Men's Achiever-15 Latest Stylish Casual Sneaker @449\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pJCHAx"
         }
        ]
       },
       {
        "id": 95648,
        "type": "message",
        "date": "2023-07-13T20:09:16",
        "date_unixtime": "1689259156",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 577,
        "text": [
         "Wesley Aura Laptop Sleeve Computer Carrying Case Compatible for 15.6 Inch laptops  @240\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XN4s7P"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wesley Aura Laptop Sleeve Computer Carrying Case Compatible for 15.6 Inch laptops  @240\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XN4s7P"
         }
        ]
       },
       {
        "id": 95649,
        "type": "message",
        "date": "2023-07-14T00:30:08",
        "date_unixtime": "1689274808",
        "edited": "2023-07-14T03:24:59",
        "edited_unixtime": "1689285299",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 605,
        "text": [
         "TP-Link 360° 2MP 1080p Full HD  Wi-Fi Smart Camera| Alexa Enabled| 2-Way Audio @ ₹2099\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44pS9kr"
         },
         "\n\n❌reg Price 2500"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "TP-Link 360° 2MP 1080p Full HD  Wi-Fi Smart Camera| Alexa Enabled| 2-Way Audio @ ₹2099\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44pS9kr"
         },
         {
          "type": "plain",
          "text": "\n\n❌reg Price 2500"
         }
        ]
       },
       {
        "id": 95650,
        "type": "message",
        "date": "2023-07-14T00:30:46",
        "date_unixtime": "1689274846",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 553,
        "text": [
         "Loot 🚀 🚀 Samsung Galaxy Buds Live @ ₹3,999 🔥\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3pDFJGA"
         },
         "\n\n❌Regular price @ ₹7,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Samsung Galaxy Buds Live @ ₹3,999 🔥\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pDFJGA"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular price @ ₹7,999"
         }
        ]
       },
       {
        "id": 95651,
        "type": "message",
        "date": "2023-07-14T00:31:08",
        "date_unixtime": "1689274868",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 532,
        "text": [
         {
          "type": "bold",
          "text": "Best"
         },
         "👌Portronics Wireless Bluetooth Keyboard @ ₹",
         {
          "type": "bold",
          "text": "849"
         },
         "🔥\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44DLEL3"
         },
         "\n\n❌Regular Price ₹1500+\n\n✅Connect 3 Devices | 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience | Compact Size | Shortcut Keys Function"
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Best"
         },
         {
          "type": "plain",
          "text": "👌Portronics Wireless Bluetooth Keyboard @ ₹"
         },
         {
          "type": "bold",
          "text": "849"
         },
         {
          "type": "plain",
          "text": "🔥\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44DLEL3"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular Price ₹1500+\n\n✅Connect 3 Devices | 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience | Compact Size | Shortcut Keys Function"
         }
        ]
       },
       {
        "id": 95652,
        "type": "message",
        "date": "2023-07-14T00:31:27",
        "date_unixtime": "1689274887",
        "edited": "2023-07-14T00:32:02",
        "edited_unixtime": "1689274922",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 441,
        "text": [
         "Mahaaa Loooot🚀🚀boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio Wired Subwoofer @ ₹8999🔥\n\n💡 ",
         {
          "type": "link",
          "text": "https://amzn.to/3DeONoc"
         },
         "\n\n❌Regular Price ₹15000\n\n💡10% Off with SBI & ICICI Card"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mahaaa Loooot🚀🚀boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio Wired Subwoofer @ ₹8999🔥\n\n💡 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3DeONoc"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular Price ₹15000\n\n💡10% Off with SBI & ICICI Card"
         }
        ]
       },
       {
        "id": 95653,
        "type": "message",
        "date": "2023-07-14T00:31:55",
        "date_unixtime": "1689274915",
        "edited": "2023-07-14T00:34:44",
        "edited_unixtime": "1689275084",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 604,
        "text": [
         "Looot🚀🚀boAt Wave Smartwatch @ ₹999🔥\n🔗",
         {
          "type": "link",
          "text": "https://amzn.to/3pLxM1Q"
         },
         "  \n\n✅Boat Bluetooth calling Watch @ ₹1298\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/3Djf4Sh"
         },
         "\n\n❌Reg price ₹1400"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Looot🚀🚀boAt Wave Smartwatch @ ₹999🔥\n🔗"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pLxM1Q"
         },
         {
          "type": "plain",
          "text": "  \n\n✅Boat Bluetooth calling Watch @ ₹1298\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Djf4Sh"
         },
         {
          "type": "plain",
          "text": "\n\n❌Reg price ₹1400"
         }
        ]
       },
       {
        "id": 95654,
        "type": "message",
        "date": "2023-07-14T00:32:16",
        "date_unixtime": "1689274936",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1216,
        "height": 391,
        "text": [
         "Lowest ⚡️⚡️boAt Aavante Bar 1160 60 Watt 2.0 Channel Wireless Bluetooth Soundbar @ ₹2999\n \n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44DcrX6"
         },
         "\n\n❌Regular Price ₹4500"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lowest ⚡️⚡️boAt Aavante Bar 1160 60 Watt 2.0 Channel Wireless Bluetooth Soundbar @ ₹2999\n \n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44DcrX6"
         },
         {
          "type": "plain",
          "text": "\n\n❌Regular Price ₹4500"
         }
        ]
       },
       {
        "id": 95655,
        "type": "message",
        "date": "2023-07-14T00:32:34",
        "date_unixtime": "1689274954",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 622,
        "text": [
         "Lowest⚡️Echo Dot (4th Gen, Blue) combo with Wipro smart color bulb @ ₹2,399🔥\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/44pDvtj"
         },
         "\n\n🔗Reg price ₹4099"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lowest⚡️Echo Dot (4th Gen, Blue) combo with Wipro smart color bulb @ ₹2,399🔥\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/44pDvtj"
         },
         {
          "type": "plain",
          "text": "\n\n🔗Reg price ₹4099"
         }
        ]
       },
       {
        "id": 95656,
        "type": "message",
        "date": "2023-07-14T00:32:53",
        "date_unixtime": "1689274973",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 844,
        "height": 140,
        "text": [
         "Flipkart Sale Live\n\n",
         {
          "type": "link",
          "text": "https://extp.in/ZcdcgQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Flipkart Sale Live\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/ZcdcgQ"
         }
        ]
       },
       {
        "id": 95657,
        "type": "message",
        "date": "2023-07-14T00:33:04",
        "date_unixtime": "1689274984",
        "edited": "2023-07-14T00:33:13",
        "edited_unixtime": "1689274993",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 873,
        "height": 570,
        "text": [
         "Min. 80% Off On Branded Luggage.\n\nMaster Link : ",
         {
          "type": "link",
          "text": "https://extp.in/YjkXcy"
         },
         "\n\nSmall : ",
         {
          "type": "link",
          "text": "https://extp.in/ru9RQC"
         },
         "\nMedium : ",
         {
          "type": "link",
          "text": "https://extp.in/KexftR"
         },
         "\nLarge : ",
         {
          "type": "link",
          "text": "https://extp.in/dkljA5"
         },
         "\n\nPack Of 2 : ",
         {
          "type": "link",
          "text": "https://extp.in/AWqlPs"
         },
         "\nPack Of 3 : ",
         {
          "type": "link",
          "text": "https://extp.in/KexftR"
         },
         "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link : ",
         {
          "type": "link",
          "text": "https://extp.in/hBy8OY"
         },
         "\n\nSmall : ",
         {
          "type": "link",
          "text": "https://extp.in/wL3vcm"
         },
         "\nMedium : ",
         {
          "type": "link",
          "text": "https://extp.in/s8JMHD"
         },
         "\nLarge : ",
         {
          "type": "link",
          "text": "https://extp.in/5veenE"
         },
         "\n\nPack Of 2 : ",
         {
          "type": "link",
          "text": "https://extp.in/OmHBFn"
         },
         "\nPack Of 3 : ",
         {
          "type": "link",
          "text": "https://extp.in/0g5qh2"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Min. 80% Off On Branded Luggage.\n\nMaster Link : "
         },
         {
          "type": "link",
          "text": "https://extp.in/YjkXcy"
         },
         {
          "type": "plain",
          "text": "\n\nSmall : "
         },
         {
          "type": "link",
          "text": "https://extp.in/ru9RQC"
         },
         {
          "type": "plain",
          "text": "\nMedium : "
         },
         {
          "type": "link",
          "text": "https://extp.in/KexftR"
         },
         {
          "type": "plain",
          "text": "\nLarge : "
         },
         {
          "type": "link",
          "text": "https://extp.in/dkljA5"
         },
         {
          "type": "plain",
          "text": "\n\nPack Of 2 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/AWqlPs"
         },
         {
          "type": "plain",
          "text": "\nPack Of 3 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/KexftR"
         },
         {
          "type": "plain",
          "text": "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link : "
         },
         {
          "type": "link",
          "text": "https://extp.in/hBy8OY"
         },
         {
          "type": "plain",
          "text": "\n\nSmall : "
         },
         {
          "type": "link",
          "text": "https://extp.in/wL3vcm"
         },
         {
          "type": "plain",
          "text": "\nMedium : "
         },
         {
          "type": "link",
          "text": "https://extp.in/s8JMHD"
         },
         {
          "type": "plain",
          "text": "\nLarge : "
         },
         {
          "type": "link",
          "text": "https://extp.in/5veenE"
         },
         {
          "type": "plain",
          "text": "\n\nPack Of 2 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/OmHBFn"
         },
         {
          "type": "plain",
          "text": "\nPack Of 3 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/0g5qh2"
         }
        ]
       },
       {
        "id": 95658,
        "type": "message",
        "date": "2023-07-14T00:33:21",
        "date_unixtime": "1689275001",
        "edited": "2023-07-14T00:53:52",
        "edited_unixtime": "1689276232",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 887,
        "height": 415,
        "text": [
         "Pigeon Non- stick cookware 7Pc Non-Stick Coated Cookware Set @ ₹1234\n\n",
         {
          "type": "link",
          "text": "https://extp.in/hKYiy1"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Pigeon Non- stick cookware 7Pc Non-Stick Coated Cookware Set @ ₹1234\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/hKYiy1"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95659,
        "type": "message",
        "date": "2023-07-14T00:33:36",
        "date_unixtime": "1689275016",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1054,
        "height": 538,
        "text": [
         "Safari Duffel Bags From ₹389\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/vxsev7"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Safari Duffel Bags From ₹389\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/vxsev7"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95660,
        "type": "message",
        "date": "2023-07-14T00:33:53",
        "date_unixtime": "1689275033",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1202,
        "height": 462,
        "text": [
         "Iphone 13 @ 55,999\n\n1000 Off Via Axis Cc\n\n",
         {
          "type": "link",
          "text": "https://extp.in/Ox7dDV"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Iphone 13 @ 55,999\n\n1000 Off Via Axis Cc\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/Ox7dDV"
         }
        ]
       },
       {
        "id": 95661,
        "type": "message",
        "date": "2023-07-14T00:34:20",
        "date_unixtime": "1689275060",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1153,
        "height": 460,
        "text": [
         "JBL Cinema SB240 with Dolby Digital Sound with Remote,HDMI ARC 110 W Bluetooth Soundbar @ ₹6299\n\n",
         {
          "type": "link",
          "text": "https://extp.in/X2BzE0"
         },
         "\n\nwith Bank Offer"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "JBL Cinema SB240 with Dolby Digital Sound with Remote,HDMI ARC 110 W Bluetooth Soundbar @ ₹6299\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/X2BzE0"
         },
         {
          "type": "plain",
          "text": "\n\nwith Bank Offer"
         }
        ]
       },
       {
        "id": 95662,
        "type": "message",
        "date": "2023-07-14T00:34:36",
        "date_unixtime": "1689275076",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1029,
        "height": 470,
        "text": [
         "boAt Airdopes 131 @ ₹799\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/iOvGYQ"
         },
         "\n\n❌ Regular price @ ₹1,299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Airdopes 131 @ ₹799\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/iOvGYQ"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,299"
         }
        ]
       },
       {
        "id": 95663,
        "type": "message",
        "date": "2023-07-14T00:34:51",
        "date_unixtime": "1689275091",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1204,
        "height": 462,
        "text": [
         "OnePlus Bullets Wireless Z2 Bluetooth @ 1599\n\n",
         {
          "type": "link",
          "text": "https://extp.in/s0LbKp"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Bullets Wireless Z2 Bluetooth @ 1599\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/s0LbKp"
         }
        ]
       },
       {
        "id": 95664,
        "type": "message",
        "date": "2023-07-14T00:35:04",
        "date_unixtime": "1689275104",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 504,
        "text": [
         "Poco M5 @ 7650\n\nLink : ",
         {
          "type": "link",
          "text": "https://extp.in/TYJkp3"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Poco M5 @ 7650\n\nLink : "
         },
         {
          "type": "link",
          "text": "https://extp.in/TYJkp3"
         }
        ]
       },
       {
        "id": 95665,
        "type": "message",
        "date": "2023-07-14T00:35:31",
        "date_unixtime": "1689275131",
        "edited": "2023-07-14T00:35:47",
        "edited_unixtime": "1689275147",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 530,
        "text": [
         "Lifelong Glass Weighing Scale @ ₹299\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/UwQehD"
         },
         "\n\n❌ Regular price @ ₹699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Glass Weighing Scale @ ₹299\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/UwQehD"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹699"
         }
        ]
       },
       {
        "id": 95666,
        "type": "message",
        "date": "2023-07-14T00:35:46",
        "date_unixtime": "1689275146",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 520,
        "text": [
         "Noise Icon Buzz 1.69\" Display with Bluetooth Calling Smartwatch @ ₹999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/SRzTGm"
         },
         "\n\n❌ Regular price @ ₹1,699"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Noise Icon Buzz 1.69\" Display with Bluetooth Calling Smartwatch @ ₹999\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/SRzTGm"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,699"
         }
        ]
       },
       {
        "id": 95667,
        "type": "message",
        "date": "2023-07-14T00:36:01",
        "date_unixtime": "1689275161",
        "edited": "2023-07-14T00:36:07",
        "edited_unixtime": "1689275167",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 534,
        "text": [
         "1️⃣ MAHARAJA 500 W Mixer Grinder With 3 Jars @ ₹1,599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/vE9z0o"
         },
         "\n\n❌ Regular price @ ₹1,999\n\n———————————————-\n\n2️⃣ Sansui 750 W Mixer Grinder With 4 Jars @ ₹1,689\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/4kLEY7"
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
          "text": "https://extp.in/vE9z0o"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,999\n\n———————————————-\n\n2️⃣ Sansui 750 W Mixer Grinder With 4 Jars @ ₹1,689\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/4kLEY7"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,999"
         }
        ]
       },
       {
        "id": 95668,
        "type": "message",
        "date": "2023-07-14T00:36:17",
        "date_unixtime": "1689275177",
        "edited": "2023-07-14T00:52:59",
        "edited_unixtime": "1689276179",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 551,
        "text": [
         "Acer Extensa 15 Ryzen 3 7320U 8GB ram 256GB ssd @ 28,740\n\n",
         {
          "type": "link",
          "text": "https://extp.in/rMV2Tq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Acer Extensa 15 Ryzen 3 7320U 8GB ram 256GB ssd @ 28,740\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/rMV2Tq"
         }
        ]
       },
       {
        "id": 95669,
        "type": "message",
        "date": "2023-07-14T00:36:42",
        "date_unixtime": "1689275202",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1017,
        "height": 535,
        "text": [
         "Men's Trousers From ₹279\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/MODaLb"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men's Trousers From ₹279\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/MODaLb"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95670,
        "type": "message",
        "date": "2023-07-14T00:37:07",
        "date_unixtime": "1689275227",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 524,
        "text": [
         "Loot 🚀 🚀 DIZO Trimmer Kit Pro Trimmer 280 min Runtime 40 Length Settings @ ₹999\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/1NV6UZ"
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
          "text": "https://extp.in/1NV6UZ"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹1,799"
         }
        ]
       },
       {
        "id": 95671,
        "type": "message",
        "date": "2023-07-14T00:37:23",
        "date_unixtime": "1689275243",
        "edited": "2023-07-14T00:37:58",
        "edited_unixtime": "1689275278",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 520,
        "text": [
         "Lenovo Ryzen 5 5500U 8GB 512GB @ 34,790\n\n",
         {
          "type": "link",
          "text": "https://extp.in/IBsu2D"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lenovo Ryzen 5 5500U 8GB 512GB @ 34,790\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/IBsu2D"
         }
        ]
       },
       {
        "id": 95672,
        "type": "message",
        "date": "2023-07-14T00:37:44",
        "date_unixtime": "1689275264",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 535,
        "text": [
         "All Time Lowest Prices On Airpods 🥳 🥳 \n\n✅ Apple Airpods (2nd gen) @ ₹8199 🔥\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ORVDRb"
         },
         "\n\n✅APPLE Airpods Pro with MagSafe Charging Case @ 14,491 🔥 \n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/0lUmi7"
         },
         "\n\n💡 With bank offer\n\nAPPLE AirPods Pro (2nd generation) @ ₹20490\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/482Rrg"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "All Time Lowest Prices On Airpods 🥳 🥳 \n\n✅ Apple Airpods (2nd gen) @ ₹8199 🔥\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ORVDRb"
         },
         {
          "type": "plain",
          "text": "\n\n✅APPLE Airpods Pro with MagSafe Charging Case @ 14,491 🔥 \n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/0lUmi7"
         },
         {
          "type": "plain",
          "text": "\n\n💡 With bank offer\n\nAPPLE AirPods Pro (2nd generation) @ ₹20490\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/482Rrg"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95673,
        "type": "message",
        "date": "2023-07-14T00:37:59",
        "date_unixtime": "1689275279",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 524,
        "text": [
         "Loot 🚀 🚀 Realme 23.8 inch Full HD LED Backlit VA Panel  @ ₹7,599\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/njkAKl"
         },
         "\n\n👉 23.8\" FHD+ display\n👉 75hz Refresh rate\n👉 TeluguTechTvDeals\n👉 8ms response time\n👉 USB Type C port\n👉 Metal Display Stand\n👉 Bezel-Less Panel\n\n❌Regular price @ ₹10,999\n\n💡 With Bank Discount"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Realme 23.8 inch Full HD LED Backlit VA Panel  @ ₹7,599\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/njkAKl"
         },
         {
          "type": "plain",
          "text": "\n\n👉 23.8\" FHD+ display\n👉 75hz Refresh rate\n👉 TeluguTechTvDeals\n👉 8ms response time\n👉 USB Type C port\n👉 Metal Display Stand\n👉 Bezel-Less Panel\n\n❌Regular price @ ₹10,999\n\n💡 With Bank Discount"
         }
        ]
       },
       {
        "id": 95674,
        "type": "message",
        "date": "2023-07-14T00:38:14",
        "date_unixtime": "1689275294",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 535,
        "text": [
         "Mahaaa Looot🚀🚀POCO F4 5G (Night Black, 256 GB)  (12 GB RAM) @ ₹21K\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/FbQKiK"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mahaaa Looot🚀🚀POCO F4 5G (Night Black, 256 GB)  (12 GB RAM) @ ₹21K\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/FbQKiK"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95675,
        "type": "message",
        "date": "2023-07-14T00:38:29",
        "date_unixtime": "1689275309",
        "edited": "2023-07-14T00:38:50",
        "edited_unixtime": "1689275330",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1251,
        "height": 534,
        "text": [
         "Samsung Z Flip 3 @ 43,749/-\n\n",
         {
          "type": "link",
          "text": "https://extp.in/y33NAG"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung Z Flip 3 @ 43,749/-\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/y33NAG"
         }
        ]
       },
       {
        "id": 95676,
        "type": "message",
        "date": "2023-07-14T00:38:43",
        "date_unixtime": "1689275323",
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
        "id": 95677,
        "type": "message",
        "date": "2023-07-14T00:39:02",
        "date_unixtime": "1689275342",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 521,
        "text": [
         "Samsung Galaxy S21FE @ ₹29,999/-\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/WSfJ-s"
         },
         "\n\n💡With bank offer"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Samsung Galaxy S21FE @ ₹29,999/-\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/WSfJ-s"
         },
         {
          "type": "plain",
          "text": "\n\n💡With bank offer"
         }
        ]
       },
       {
        "id": 95678,
        "type": "message",
        "date": "2023-07-14T00:39:17",
        "date_unixtime": "1689275357",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1021,
        "height": 566,
        "text": [
         "Wrogn Backpacks from ₹345\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/TSqPqK"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Wrogn Backpacks from ₹345\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/TSqPqK"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95679,
        "type": "message",
        "date": "2023-07-14T00:39:33",
        "date_unixtime": "1689275373",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 869,
        "height": 663,
        "text": [
         "Huge Discounts On Top Branded Shoes From ₹543\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/NjbNk6"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Huge Discounts On Top Branded Shoes From ₹543\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/NjbNk6"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95680,
        "type": "message",
        "date": "2023-07-14T00:39:51",
        "date_unixtime": "1689275391",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1278,
        "height": 535,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/5jDEHY"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/5jDEHY"
         }
        ]
       },
       {
        "id": 95681,
        "type": "message",
        "date": "2023-07-14T00:40:11",
        "date_unixtime": "1689275411",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 851,
        "height": 412,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/CqU6iU"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/CqU6iU"
         }
        ]
       },
       {
        "id": 95682,
        "type": "message",
        "date": "2023-07-14T00:40:32",
        "date_unixtime": "1689275432",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 542,
        "text": [
         "Deal Only For Samsung Fans\nSamsung Galaxy S22 Plus 5G 8GB 128GB @ 48,750 including bank discount \n\n",
         {
          "type": "link",
          "text": "https://extp.in/jzMoSq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Deal Only For Samsung Fans\nSamsung Galaxy S22 Plus 5G 8GB 128GB @ 48,750 including bank discount \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/jzMoSq"
         }
        ]
       },
       {
        "id": 95683,
        "type": "message",
        "date": "2023-07-14T00:40:52",
        "date_unixtime": "1689275452",
        "edited": "2023-07-14T00:43:49",
        "edited_unixtime": "1689275629",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1021,
        "height": 524,
        "text": [
         "Metronaut shirts from ₹259\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/MnKxM9"
         },
         "\n\nJeans from ₹374\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/r-DlZo"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut shirts from ₹259\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/MnKxM9"
         },
         {
          "type": "plain",
          "text": "\n\nJeans from ₹374\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/r-DlZo"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95684,
        "type": "message",
        "date": "2023-07-14T00:41:08",
        "date_unixtime": "1689275468",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1224,
        "height": 555,
        "text": [
         "POCO C51 @ 6499.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/m3Cm4z"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "POCO C51 @ 6499.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/m3Cm4z"
         }
        ]
       },
       {
        "id": 95685,
        "type": "message",
        "date": "2023-07-14T00:41:28",
        "date_unixtime": "1689275488",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 572,
        "text": [
         "Voltas Beko 7.0kg 5 Star Front Load Washing Machine @ ₹21,740\n\n🔗 ",
         {
          "type": "link",
          "text": "https://amzn.to/43nJfT5"
         },
         "\n\n❌ Regular price @ ₹32,999\n\n",
         {
          "type": "bold",
          "text": "💡 With Bank Discount"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Voltas Beko 7.0kg 5 Star Front Load Washing Machine @ ₹21,740\n\n🔗 "
         },
         {
          "type": "link",
          "text": "https://amzn.to/43nJfT5"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹32,999\n\n"
         },
         {
          "type": "bold",
          "text": "💡 With Bank Discount"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95686,
        "type": "message",
        "date": "2023-07-14T00:41:44",
        "date_unixtime": "1689275504",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1035,
        "height": 480,
        "text": [
         "Upto 47% Off On AtomBerg Fans\n\n",
         {
          "type": "link",
          "text": "https://extp.in/hwIYcg"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 47% Off On AtomBerg Fans\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/hwIYcg"
         }
        ]
       },
       {
        "id": 95687,
        "type": "message",
        "date": "2023-07-14T00:41:58",
        "date_unixtime": "1689275518",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 517,
        "text": [
         "Acer Extensa (2023) Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD) @ 35,740\n\n",
         {
          "type": "link",
          "text": "https://extp.in/7VPBQP"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Acer Extensa (2023) Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD) @ 35,740\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/7VPBQP"
         }
        ]
       },
       {
        "id": 95688,
        "type": "message",
        "date": "2023-07-14T00:42:13",
        "date_unixtime": "1689275533",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1037,
        "height": 553,
        "text": [
         "Fastrack watches Looot🤩🤩\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/uN9KUX"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fastrack watches Looot🤩🤩\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/uN9KUX"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95689,
        "type": "message",
        "date": "2023-07-14T00:42:29",
        "date_unixtime": "1689275549",
        "edited": "2023-07-14T00:43:41",
        "edited_unixtime": "1689275621",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 550,
        "text": [
         "Loot 🚀 🚀  Google Pixel 6a 6 GB RAM 128 GB ₹24,999\n\n▶️ Chalk\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/z3AFYB"
         },
         " \n\n▶️ Charcoal\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/83eKYe"
         },
         "\n\n💡 With Bank Discount"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀  Google Pixel 6a 6 GB RAM 128 GB ₹24,999\n\n▶️ Chalk\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/z3AFYB"
         },
         {
          "type": "plain",
          "text": " \n\n▶️ Charcoal\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/83eKYe"
         },
         {
          "type": "plain",
          "text": "\n\n💡 With Bank Discount"
         }
        ]
       },
       {
        "id": 95690,
        "type": "message",
        "date": "2023-07-14T00:42:43",
        "date_unixtime": "1689275563",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 524,
        "text": [
         "Motorola 10.5 kg 5 Star Smart Wi-Fi Enabled Inverter Technology Fully Automatic Front Load with In-built Heater @ ₹25K\n\n",
         {
          "type": "link",
          "text": "https://extp.in/cP1iK2"
         },
         "\n\nWith Bank offer"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Motorola 10.5 kg 5 Star Smart Wi-Fi Enabled Inverter Technology Fully Automatic Front Load with In-built Heater @ ₹25K\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/cP1iK2"
         },
         {
          "type": "plain",
          "text": "\n\nWith Bank offer"
         }
        ]
       },
       {
        "id": 95691,
        "type": "message",
        "date": "2023-07-14T00:42:58",
        "date_unixtime": "1689275578",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 555,
        "text": [
         "Acer One14 Core i5 11th Gen - (8 GB/512 GB SSD) @ 37,740\n\n",
         {
          "type": "link",
          "text": "https://extp.in/yzxUgX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Acer One14 Core i5 11th Gen - (8 GB/512 GB SSD) @ 37,740\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/yzxUgX"
         }
        ]
       },
       {
        "id": 95692,
        "type": "message",
        "date": "2023-07-14T00:44:09",
        "date_unixtime": "1689275649",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 520,
        "text": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         " OnePlus Nord Buds 2 True Wireless ANC Earbuds @ ₹2,439\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/VVyy6O"
         },
         "\n\n❌ Regular price @ ₹2,999\n\n💡 Apply Code WEARABLEEXTRA10"
        ],
        "text_entities": [
         {
          "type": "hashtag",
          "text": "#Myntra"
         },
         {
          "type": "plain",
          "text": " OnePlus Nord Buds 2 True Wireless ANC Earbuds @ ₹2,439\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/VVyy6O"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹2,999\n\n💡 Apply Code WEARABLEEXTRA10"
         }
        ]
       },
       {
        "id": 95693,
        "type": "message",
        "date": "2023-07-14T00:44:23",
        "date_unixtime": "1689275663",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 522,
        "text": [
         "Loot 🚀 🚀 Syska Smart Plug @ ₹499\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/7h35sd"
         },
         "\n\n❌ Regular price @ ₹799"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot 🚀 🚀 Syska Smart Plug @ ₹499\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/7h35sd"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹799"
         }
        ]
       },
       {
        "id": 95694,
        "type": "message",
        "date": "2023-07-14T00:44:40",
        "date_unixtime": "1689275680",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 535,
        "text": [
         "Looot🚀🚀Syska Smartbulb @ ₹349\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/jYCDiy"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Looot🚀🚀Syska Smartbulb @ ₹349\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/jYCDiy"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95695,
        "type": "message",
        "date": "2023-07-14T00:44:55",
        "date_unixtime": "1689275695",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1263,
        "height": 535,
        "text": [
         "Hindware RO + UV + UF Water Purifier, 7L @ ₹5999.\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/SrBxS7"
         },
         "\n\n❌ Regular price @ ₹7,999"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hindware RO + UV + UF Water Purifier, 7L @ ₹5999.\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/SrBxS7"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹7,999"
         }
        ]
       },
       {
        "id": 95696,
        "type": "message",
        "date": "2023-07-14T00:45:11",
        "date_unixtime": "1689275711",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 533,
        "text": [
         "Looot🚀🚀Lenovo Ryzen 7 Octa Core 7730U - (8 GB/512 GB SSD) @ 43,990\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/ZPRVLl"
         },
         "\n\n💡Flat 4000 off on HDFC/SBI/ICICI cards"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Looot🚀🚀Lenovo Ryzen 7 Octa Core 7730U - (8 GB/512 GB SSD) @ 43,990\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/ZPRVLl"
         },
         {
          "type": "plain",
          "text": "\n\n💡Flat 4000 off on HDFC/SBI/ICICI cards"
         }
        ]
       },
       {
        "id": 95697,
        "type": "message",
        "date": "2023-07-14T00:45:28",
        "date_unixtime": "1689275728",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1036,
        "height": 537,
        "text": [
         "Metronaut Mens Jackets From ₹499\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/iJ2zI5"
         },
         "\n\n❌ Regular price @ ₹899"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut Mens Jackets From ₹499\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/iJ2zI5"
         },
         {
          "type": "plain",
          "text": "\n\n❌ Regular price @ ₹899"
         }
        ]
       },
       {
        "id": 95698,
        "type": "message",
        "date": "2023-07-14T00:45:54",
        "date_unixtime": "1689275754",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Min. 80% Off On Branded Luggage.\n\nMaster Link :  ",
         {
          "type": "link",
          "text": "https://extp.in/PT9NFO"
         },
         "\n\nSmall :  ",
         {
          "type": "link",
          "text": "https://extp.in/L3LYbD"
         },
         "\nMedium :  ",
         {
          "type": "link",
          "text": "https://extp.in/aZv5sf"
         },
         "\nLarge :  ",
         {
          "type": "link",
          "text": "https://extp.in/Z485u3"
         },
         "\n\nPack Of 2 :  ",
         {
          "type": "link",
          "text": "https://extp.in/gPYMdR"
         },
         "\nPack Of 3 :  ",
         {
          "type": "link",
          "text": "https://extp.in/hyf2ec"
         },
         "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link :  ",
         {
          "type": "link",
          "text": "https://extp.in/RO5QpI"
         },
         "\n\nSmall :  ",
         {
          "type": "link",
          "text": "https://extp.in/3MBIP1"
         },
         "\nMedium :  ",
         {
          "type": "link",
          "text": "https://extp.in/sv61SM"
         },
         "\nLarge :  ",
         {
          "type": "link",
          "text": "https://extp.in/p48NC2"
         },
         "\n\nPack Of 2 :  ",
         {
          "type": "link",
          "text": "https://extp.in/C90TY1"
         },
         "\nPack Of 3 :  ",
         {
          "type": "link",
          "text": "https://extp.in/op6R7I"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Min. 80% Off On Branded Luggage.\n\nMaster Link :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/PT9NFO"
         },
         {
          "type": "plain",
          "text": "\n\nSmall :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/L3LYbD"
         },
         {
          "type": "plain",
          "text": "\nMedium :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/aZv5sf"
         },
         {
          "type": "plain",
          "text": "\nLarge :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/Z485u3"
         },
         {
          "type": "plain",
          "text": "\n\nPack Of 2 :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/gPYMdR"
         },
         {
          "type": "plain",
          "text": "\nPack Of 3 :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/hyf2ec"
         },
         {
          "type": "plain",
          "text": "\n\nMin. 70% Off On Branded Luggage.\n\nMaster Link :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/RO5QpI"
         },
         {
          "type": "plain",
          "text": "\n\nSmall :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/3MBIP1"
         },
         {
          "type": "plain",
          "text": "\nMedium :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/sv61SM"
         },
         {
          "type": "plain",
          "text": "\nLarge :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/p48NC2"
         },
         {
          "type": "plain",
          "text": "\n\nPack Of 2 :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/C90TY1"
         },
         {
          "type": "plain",
          "text": "\nPack Of 3 :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/op6R7I"
         }
        ]
       },
       {
        "id": 95699,
        "type": "message",
        "date": "2023-07-14T00:46:03",
        "date_unixtime": "1689275763",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "[Live Now] Flipkart Big Saving Days for Plus Members\n\nUpto 80% Off On Fashion : ",
         {
          "type": "link",
          "text": "https://extp.in/hSB11b"
         },
         "\n\nUpto 75% Off On TV & Appliances : ",
         {
          "type": "link",
          "text": "https://extp.in/hAKctc"
         },
         "\n\nUpto 80% Off On Beauty ,Sports & Nutrition : ",
         {
          "type": "link",
          "text": "https://extp.in/LaD92o"
         },
         "\n\nUpto 70% Off On Home & Kitchen Essentials : ",
         {
          "type": "link",
          "text": "https://extp.in/FE075X"
         },
         "\n\nUpto 80% Off On Furniture & Mattress : ",
         {
          "type": "link",
          "text": "https://extp.in/rw8WmD"
         },
         "\n\nUpto 75% Off On Grocery Best Deals : ",
         {
          "type": "link",
          "text": "https://extp.in/Bc0dul"
         },
         "\n\n*10% Discount On AXIS Cards | ₹100 Cashback Using Paytm Wallet.\n\n*You May See Difference In Price, If You Are Not A Flipkart Plus Member.\n\nNote : For Non-Plus Sale Starts Tomorrow Midnight"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "[Live Now] Flipkart Big Saving Days for Plus Members\n\nUpto 80% Off On Fashion : "
         },
         {
          "type": "link",
          "text": "https://extp.in/hSB11b"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 75% Off On TV & Appliances : "
         },
         {
          "type": "link",
          "text": "https://extp.in/hAKctc"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 80% Off On Beauty ,Sports & Nutrition : "
         },
         {
          "type": "link",
          "text": "https://extp.in/LaD92o"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 70% Off On Home & Kitchen Essentials : "
         },
         {
          "type": "link",
          "text": "https://extp.in/FE075X"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 80% Off On Furniture & Mattress : "
         },
         {
          "type": "link",
          "text": "https://extp.in/rw8WmD"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 75% Off On Grocery Best Deals : "
         },
         {
          "type": "link",
          "text": "https://extp.in/Bc0dul"
         },
         {
          "type": "plain",
          "text": "\n\n*10% Discount On AXIS Cards | ₹100 Cashback Using Paytm Wallet.\n\n*You May See Difference In Price, If You Are Not A Flipkart Plus Member.\n\nNote : For Non-Plus Sale Starts Tomorrow Midnight"
         }
        ]
       },
       {
        "id": 95700,
        "type": "message",
        "date": "2023-07-14T00:46:36",
        "date_unixtime": "1689275796",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1266,
        "height": 533,
        "text": [
         "Loot \n\n798 ",
         {
          "type": "link",
          "text": "https://extp.in/QbnIdc"
         },
         "\n\n389 ",
         {
          "type": "link",
          "text": "https://extp.in/lMT2Ie"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot \n\n798 "
         },
         {
          "type": "link",
          "text": "https://extp.in/QbnIdc"
         },
         {
          "type": "plain",
          "text": "\n\n389 "
         },
         {
          "type": "link",
          "text": "https://extp.in/lMT2Ie"
         }
        ]
       },
       {
        "id": 95701,
        "type": "message",
        "date": "2023-07-14T00:46:53",
        "date_unixtime": "1689275813",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "99 ",
         {
          "type": "link",
          "text": "https://extp.in/r9o3R2"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/LpjvDm"
         },
         " 299\n\n299 ",
         {
          "type": "link",
          "text": "https://extp.in/6GZXnM"
         },
         "\n\nLoot 1899 ",
         {
          "type": "link",
          "text": "https://extp.in/OdVfHO"
         },
         "\n\n203 ",
         {
          "type": "link",
          "text": "https://extp.in/7LksH5"
         },
         "\n\n1699 ",
         {
          "type": "link",
          "text": "https://extp.in/0Rnc4e"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/jWEcIE"
         },
         "\n\nOnePlus Bullets Wireless Z2 Bluetooth@1599\n\n",
         {
          "type": "link",
          "text": "https://extp.in/7TlD8L"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "99 "
         },
         {
          "type": "link",
          "text": "https://extp.in/r9o3R2"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/LpjvDm"
         },
         {
          "type": "plain",
          "text": " 299\n\n299 "
         },
         {
          "type": "link",
          "text": "https://extp.in/6GZXnM"
         },
         {
          "type": "plain",
          "text": "\n\nLoot 1899 "
         },
         {
          "type": "link",
          "text": "https://extp.in/OdVfHO"
         },
         {
          "type": "plain",
          "text": "\n\n203 "
         },
         {
          "type": "link",
          "text": "https://extp.in/7LksH5"
         },
         {
          "type": "plain",
          "text": "\n\n1699 "
         },
         {
          "type": "link",
          "text": "https://extp.in/0Rnc4e"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/jWEcIE"
         },
         {
          "type": "plain",
          "text": "\n\nOnePlus Bullets Wireless Z2 Bluetooth@1599\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/7TlD8L"
         }
        ]
       },
       {
        "id": 95702,
        "type": "message",
        "date": "2023-07-14T00:47:13",
        "date_unixtime": "1689275833",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Realme Hair Dryer (1400W) at 699.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/KUYV60"
         },
         "\n\nLavie Sport Duffel Bag From Rs.679\n\n",
         {
          "type": "link",
          "text": "https://extp.in/FnJu3W"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Realme Hair Dryer (1400W) at 699.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/KUYV60"
         },
         {
          "type": "plain",
          "text": "\n\nLavie Sport Duffel Bag From Rs.679\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/FnJu3W"
         }
        ]
       },
       {
        "id": 95703,
        "type": "message",
        "date": "2023-07-14T00:47:25",
        "date_unixtime": "1689275845",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Quantum Wired USB Keyboard at 189.\n\n ",
         {
          "type": "link",
          "text": "https://extp.in/EljTvw"
         },
         "\n\n70% Off On Fossil Watches \n\n",
         {
          "type": "link",
          "text": "https://extp.in/D8LmVs"
         },
         "\n\nOPPO Enco Buds 2 Earbuds ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/ARZXZD"
         },
         "\n",
         {
          "type": "link",
          "text": "https://extp.in/pQwwHU"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Quantum Wired USB Keyboard at 189.\n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/EljTvw"
         },
         {
          "type": "plain",
          "text": "\n\n70% Off On Fossil Watches \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/D8LmVs"
         },
         {
          "type": "plain",
          "text": "\n\nOPPO Enco Buds 2 Earbuds "
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
          "text": "https://extp.in/ARZXZD"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/pQwwHU"
         }
        ]
       },
       {
        "id": 95704,
        "type": "message",
        "date": "2023-07-14T00:47:47",
        "date_unixtime": "1689275867",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1057,
        "height": 450,
        "text": [
         "Branded Smartwatch Starts at Rs.999.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/CCNpnV"
         },
         "\n\nboAt : ",
         {
          "type": "link",
          "text": "https://extp.in/28ScK0"
         },
         "\nNoise : ",
         {
          "type": "link",
          "text": "https://extp.in/GWKQBl"
         },
         "\nBoult : ",
         {
          "type": "link",
          "text": "https://extp.in/QRTd42"
         },
         "\nFire-Boltt : ",
         {
          "type": "link",
          "text": "https://extp.in/SAd17j"
         },
         "\n\nPay Using Paytm For 100â¹ Cashback"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Branded Smartwatch Starts at Rs.999.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/CCNpnV"
         },
         {
          "type": "plain",
          "text": "\n\nboAt : "
         },
         {
          "type": "link",
          "text": "https://extp.in/28ScK0"
         },
         {
          "type": "plain",
          "text": "\nNoise : "
         },
         {
          "type": "link",
          "text": "https://extp.in/GWKQBl"
         },
         {
          "type": "plain",
          "text": "\nBoult : "
         },
         {
          "type": "link",
          "text": "https://extp.in/QRTd42"
         },
         {
          "type": "plain",
          "text": "\nFire-Boltt : "
         },
         {
          "type": "link",
          "text": "https://extp.in/SAd17j"
         },
         {
          "type": "plain",
          "text": "\n\nPay Using Paytm For 100â¹ Cashback"
         }
        ]
       },
       {
        "id": 95705,
        "type": "message",
        "date": "2023-07-14T00:48:02",
        "date_unixtime": "1689275882",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 630,
        "text": [
         "Google Pixel 7a (Charcoal, 128 GB) for ₹39,999 (Effectively)  \n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/WOsoa1"
         },
         "\n\n💡 With Bank Discount"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Google Pixel 7a (Charcoal, 128 GB) for ₹39,999 (Effectively)  \n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/WOsoa1"
         },
         {
          "type": "plain",
          "text": "\n\n💡 With Bank Discount"
         }
        ]
       },
       {
        "id": 95706,
        "type": "message",
        "date": "2023-07-14T00:48:21",
        "date_unixtime": "1689275901",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 517,
        "text": [
         "Acer Aspire 7 (2023) Core i5 12th Gen - (8 GB/512 GB SSD) GTX 1650 4GB Graphics card @ 50,990\n\n",
         {
          "type": "link",
          "text": "https://extp.in/iImt3A"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Acer Aspire 7 (2023) Core i5 12th Gen - (8 GB/512 GB SSD) GTX 1650 4GB Graphics card @ 50,990\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/iImt3A"
         }
        ]
       },
       {
        "id": 95707,
        "type": "message",
        "date": "2023-07-14T00:48:44",
        "date_unixtime": "1689275924",
        "edited": "2023-07-14T00:49:05",
        "edited_unixtime": "1689275945",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1042,
        "height": 534,
        "text": [
         "Red Tape @ 80% OFF\nSPORTS ",
         {
          "type": "link",
          "text": "https://extp.in/xzUZ49"
         },
         "\nCASUAL ",
         {
          "type": "link",
          "text": "https://extp.in/wt5nZx"
         },
         "\nBOOTS ",
         {
          "type": "link",
          "text": "https://extp.in/nK3koK"
         },
         "\n\nWomen's \n",
         {
          "type": "link",
          "text": "https://extp.in/8j0swk"
         },
         " \n",
         {
          "type": "link",
          "text": "https://extp.in/z2UIQx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Red Tape @ 80% OFF\nSPORTS "
         },
         {
          "type": "link",
          "text": "https://extp.in/xzUZ49"
         },
         {
          "type": "plain",
          "text": "\nCASUAL "
         },
         {
          "type": "link",
          "text": "https://extp.in/wt5nZx"
         },
         {
          "type": "plain",
          "text": "\nBOOTS "
         },
         {
          "type": "link",
          "text": "https://extp.in/nK3koK"
         },
         {
          "type": "plain",
          "text": "\n\nWomen's \n"
         },
         {
          "type": "link",
          "text": "https://extp.in/8j0swk"
         },
         {
          "type": "plain",
          "text": " \n"
         },
         {
          "type": "link",
          "text": "https://extp.in/z2UIQx"
         }
        ]
       },
       {
        "id": 95708,
        "type": "message",
        "date": "2023-07-14T00:48:57",
        "date_unixtime": "1689275937",
        "edited": "2023-07-14T00:49:23",
        "edited_unixtime": "1689275963",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "JBL Speakers at 50% Off \n\n",
         {
          "type": "link",
          "text": "https://extp.in/bvJS8G"
         },
         "\n\nLifelong LLCMB03 500 W Mixer Grinder (White, 3 Jars) & Non stick Tawa Super Combo\n\n",
         {
          "type": "link",
          "text": "https://extp.in/xw9Ike"
         },
         " 1299"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "JBL Speakers at 50% Off \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/bvJS8G"
         },
         {
          "type": "plain",
          "text": "\n\nLifelong LLCMB03 500 W Mixer Grinder (White, 3 Jars) & Non stick Tawa Super Combo\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/xw9Ike"
         },
         {
          "type": "plain",
          "text": " 1299"
         }
        ]
       },
       {
        "id": 95709,
        "type": "message",
        "date": "2023-07-14T00:49:13",
        "date_unixtime": "1689275953",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1261,
        "height": 538,
        "text": [
         "Loot : Noise Bluetooth Calling Smartwatch @999\n\n",
         {
          "type": "link",
          "text": "https://extp.in/q1TqYL"
         },
         "\n\n63% Off : Boroplus Aloe Vera Gel With Green Tea ‎ at ‎133\n\n",
         {
          "type": "link",
          "text": "https://extp.in/ZSV8Vc"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Loot : Noise Bluetooth Calling Smartwatch @999\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/q1TqYL"
         },
         {
          "type": "plain",
          "text": "\n\n63% Off : Boroplus Aloe Vera Gel With Green Tea ‎ at ‎133\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/ZSV8Vc"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95710,
        "type": "message",
        "date": "2023-07-14T00:49:32",
        "date_unixtime": "1689275972",
        "edited": "2023-07-14T04:08:12",
        "edited_unixtime": "1689287892",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Atomberg Fans Min 44% Off From Rs.2399\n\n",
         {
          "type": "link",
          "text": "https://extp.in/goOmLG"
         },
         "\n\nUpto 62% Off On Top Brand Shampoos.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/BNvSYq"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Atomberg Fans Min 44% Off From Rs.2399\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/goOmLG"
         },
         {
          "type": "plain",
          "text": "\n\nUpto 62% Off On Top Brand Shampoos.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/BNvSYq"
         }
        ]
       },
       {
        "id": 95711,
        "type": "message",
        "date": "2023-07-14T00:49:47",
        "date_unixtime": "1689275987",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 522,
        "text": [
         "Microtek EM4160  Digital Display For AC upto 1.5Ton (160V-285V) Voltage Stabilizer ",
         {
          "type": "mention",
          "text": "@1899"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/SdfJJx"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Microtek EM4160  Digital Display For AC upto 1.5Ton (160V-285V) Voltage Stabilizer "
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
          "text": "https://extp.in/SdfJJx"
         }
        ]
       },
       {
        "id": 95712,
        "type": "message",
        "date": "2023-07-14T00:49:55",
        "date_unixtime": "1689275995",
        "edited": "2023-07-14T00:50:03",
        "edited_unixtime": "1689276003",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Upto 80% Off On Branded Shoes. \n\nRed Tape : ",
         {
          "type": "link",
          "text": "https://extp.in/kMgTMT"
         },
         "\n\nPuma : ",
         {
          "type": "link",
          "text": "https://extp.in/s6m3h2"
         },
         "\n\nNike : ",
         {
          "type": "link",
          "text": "https://extp.in/RMRPIv"
         },
         "\n\nAdidas : ",
         {
          "type": "link",
          "text": "https://extp.in/WWnfeD"
         },
         "\n\nReebok : ",
         {
          "type": "link",
          "text": "https://extp.in/UKREce"
         },
         "\n\nSkechers : ",
         {
          "type": "link",
          "text": "https://extp.in/1djGgg"
         },
         "\n\nReebok : ",
         {
          "type": "link",
          "text": "https://extp.in/nnhKHh"
         },
         "\n\nYonex : ",
         {
          "type": "link",
          "text": "https://extp.in/23rfez"
         },
         "\n\nMast Harbour : ",
         {
          "type": "link",
          "text": "https://extp.in/0lu7sN"
         },
         "\n\nKiller : ",
         {
          "type": "link",
          "text": "https://extp.in/kkbWR2"
         },
         "\n\nRoadster : ",
         {
          "type": "link",
          "text": "https://extp.in/3rweaG"
         },
         "\n\nWrogn : ",
         {
          "type": "link",
          "text": "https://extp.in/FHqicp"
         },
         "\n\nHrx : ",
         {
          "type": "link",
          "text": "https://extp.in/Yx5Ci3"
         },
         "\n\nSlazenger : ",
         {
          "type": "link",
          "text": "https://extp.in/d43MkI"
         },
         "\n\nMetronaut : ",
         {
          "type": "link",
          "text": "https://extp.in/Kw8ib2"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 80% Off On Branded Shoes. \n\nRed Tape : "
         },
         {
          "type": "link",
          "text": "https://extp.in/kMgTMT"
         },
         {
          "type": "plain",
          "text": "\n\nPuma : "
         },
         {
          "type": "link",
          "text": "https://extp.in/s6m3h2"
         },
         {
          "type": "plain",
          "text": "\n\nNike : "
         },
         {
          "type": "link",
          "text": "https://extp.in/RMRPIv"
         },
         {
          "type": "plain",
          "text": "\n\nAdidas : "
         },
         {
          "type": "link",
          "text": "https://extp.in/WWnfeD"
         },
         {
          "type": "plain",
          "text": "\n\nReebok : "
         },
         {
          "type": "link",
          "text": "https://extp.in/UKREce"
         },
         {
          "type": "plain",
          "text": "\n\nSkechers : "
         },
         {
          "type": "link",
          "text": "https://extp.in/1djGgg"
         },
         {
          "type": "plain",
          "text": "\n\nReebok : "
         },
         {
          "type": "link",
          "text": "https://extp.in/nnhKHh"
         },
         {
          "type": "plain",
          "text": "\n\nYonex : "
         },
         {
          "type": "link",
          "text": "https://extp.in/23rfez"
         },
         {
          "type": "plain",
          "text": "\n\nMast Harbour : "
         },
         {
          "type": "link",
          "text": "https://extp.in/0lu7sN"
         },
         {
          "type": "plain",
          "text": "\n\nKiller : "
         },
         {
          "type": "link",
          "text": "https://extp.in/kkbWR2"
         },
         {
          "type": "plain",
          "text": "\n\nRoadster : "
         },
         {
          "type": "link",
          "text": "https://extp.in/3rweaG"
         },
         {
          "type": "plain",
          "text": "\n\nWrogn : "
         },
         {
          "type": "link",
          "text": "https://extp.in/FHqicp"
         },
         {
          "type": "plain",
          "text": "\n\nHrx : "
         },
         {
          "type": "link",
          "text": "https://extp.in/Yx5Ci3"
         },
         {
          "type": "plain",
          "text": "\n\nSlazenger : "
         },
         {
          "type": "link",
          "text": "https://extp.in/d43MkI"
         },
         {
          "type": "plain",
          "text": "\n\nMetronaut : "
         },
         {
          "type": "link",
          "text": "https://extp.in/Kw8ib2"
         }
        ]
       },
       {
        "id": 95713,
        "type": "message",
        "date": "2023-07-14T00:50:13",
        "date_unixtime": "1689276013",
        "edited": "2023-07-14T00:50:31",
        "edited_unixtime": "1689276031",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1021,
        "height": 467,
        "text": [
         "Branded Bluetooth Neckbands From Rs.242\n\n",
         {
          "type": "link",
          "text": "https://extp.in/UFcG2i"
         },
         "\n\nSports Shoes Starts From Rs.199\n\n",
         {
          "type": "link",
          "text": "https://extp.in/QL5pif"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Branded Bluetooth Neckbands From Rs.242\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/UFcG2i"
         },
         {
          "type": "plain",
          "text": "\n\nSports Shoes Starts From Rs.199\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/QL5pif"
         }
        ]
       },
       {
        "id": 95714,
        "type": "message",
        "date": "2023-07-14T00:50:26",
        "date_unixtime": "1689276026",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Books upto 93% off starting From Rs.14\n\n",
         {
          "type": "link",
          "text": "https://extp.in/KtKsaX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Books upto 93% off starting From Rs.14\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/KtKsaX"
         }
        ]
       },
       {
        "id": 95715,
        "type": "message",
        "date": "2023-07-14T00:50:44",
        "date_unixtime": "1689276044",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 988,
        "height": 459,
        "text": [
         "Upto 55% Off On Colgate \n\n",
         {
          "type": "link",
          "text": "https://extp.in/raOvgl"
         },
         "\n\nGoogle Pixel 6a ",
         {
          "type": "mention",
          "text": "@25999"
         },
         " + ₹1000 Off using HDFC Card.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/6NgMqy"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 55% Off On Colgate \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/raOvgl"
         },
         {
          "type": "plain",
          "text": "\n\nGoogle Pixel 6a "
         },
         {
          "type": "mention",
          "text": "@25999"
         },
         {
          "type": "plain",
          "text": " + ₹1000 Off using HDFC Card.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/6NgMqy"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95716,
        "type": "message",
        "date": "2023-07-14T00:50:58",
        "date_unixtime": "1689276058",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 533,
        "text": [
         "D-Link R 04 300 Mbps Wireless Router @799\n\n",
         {
          "type": "link",
          "text": "https://extp.in/kX0lGW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "D-Link R 04 300 Mbps Wireless Router @799\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/kX0lGW"
         }
        ]
       },
       {
        "id": 95717,
        "type": "message",
        "date": "2023-07-14T00:51:14",
        "date_unixtime": "1689276074",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 556,
        "text": [
         "ACTIVA Dry Iron @398\n\n",
         {
          "type": "link",
          "text": "https://extp.in/U7zMhn"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ACTIVA Dry Iron @398\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/U7zMhn"
         }
        ]
       },
       {
        "id": 95718,
        "type": "message",
        "date": "2023-07-14T00:51:31",
        "date_unixtime": "1689276091",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 523,
        "text": [
         "Dr. Trust Oximeter @699\n\n",
         {
          "type": "link",
          "text": "https://extp.in/hv8c5w"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Dr. Trust Oximeter @699\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/hv8c5w"
         }
        ]
       },
       {
        "id": 95719,
        "type": "message",
        "date": "2023-07-14T00:51:51",
        "date_unixtime": "1689276111",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 555,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/20PGf2"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/20PGf2"
         }
        ]
       },
       {
        "id": 95720,
        "type": "message",
        "date": "2023-07-14T00:52:08",
        "date_unixtime": "1689276128",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1262,
        "height": 536,
        "text": [
         "IFB 23 L Convection Microwave Oven  (23SC3, Silver)",
         {
          "type": "hashtag",
          "text": "#JustHere"
         },
         "\nRegular Price : ₹ 12000 \nOffer Price : ₹ 10490 \nWith Credit Card : 950 off with axis bank \nDeal Price : ₹ 9049 \nBuy Here : ",
         {
          "type": "link",
          "text": "https://extp.in/9z8QJt"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "IFB 23 L Convection Microwave Oven  (23SC3, Silver)"
         },
         {
          "type": "hashtag",
          "text": "#JustHere"
         },
         {
          "type": "plain",
          "text": "\nRegular Price : ₹ 12000 \nOffer Price : ₹ 10490 \nWith Credit Card : 950 off with axis bank \nDeal Price : ₹ 9049 \nBuy Here : "
         },
         {
          "type": "link",
          "text": "https://extp.in/9z8QJt"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95721,
        "type": "message",
        "date": "2023-07-14T00:52:38",
        "date_unixtime": "1689276158",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 512,
        "text": [
         "179 : ",
         {
          "type": "link",
          "text": "https://extp.in/3NW2Wo"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "179 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/3NW2Wo"
         }
        ]
       },
       {
        "id": 95722,
        "type": "message",
        "date": "2023-07-14T00:53:35",
        "date_unixtime": "1689276215",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 778,
        "height": 409,
        "text": [
         "Myntra : Min 80% Off On Highlander Men Shirt Starts@ 328\n\n",
         {
          "type": "link",
          "text": "https://extp.in/ME6mmF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Myntra : Min 80% Off On Highlander Men Shirt Starts@ 328\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/ME6mmF"
         }
        ]
       },
       {
        "id": 95723,
        "type": "message",
        "date": "2023-07-14T00:53:47",
        "date_unixtime": "1689276227",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Men's Walking Shoe (All Size) @399.\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3pGqdd1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Men's Walking Shoe (All Size) @399.\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3pGqdd1"
         }
        ]
       },
       {
        "id": 95724,
        "type": "message",
        "date": "2023-07-14T00:54:04",
        "date_unixtime": "1689276244",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1077,
        "height": 534,
        "text": [
         "Metronaut Men's Tshirts (Pack Of 3) @ 399\n\n🔗",
         {
          "type": "link",
          "text": "https://extp.in/LoWzws"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Metronaut Men's Tshirts (Pack Of 3) @ 399\n\n🔗"
         },
         {
          "type": "link",
          "text": "https://extp.in/LoWzws"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95725,
        "type": "message",
        "date": "2023-07-14T00:54:25",
        "date_unixtime": "1689276265",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "WOW Loot Deal : Serums at Flat Rs.129\n\nApply Code : EKHBD\n\n• Caffeine Face Serum : ",
         {
          "type": "link",
          "text": "https://extp.in/wE0JYb"
         },
         "\n\n• Himalayan Rose Face Serum : ",
         {
          "type": "link",
          "text": "https://extp.in/hOQBXp"
         },
         "\n\n• Green Tea Face Serum : ",
         {
          "type": "link",
          "text": "https://extp.in/ngvnly"
         },
         "\n\n• Ubtan Face Serum : ",
         {
          "type": "link",
          "text": "https://extp.in/2YHzvK"
         },
         "\n\nValid Only On Prepaid Orders."
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "WOW Loot Deal : Serums at Flat Rs.129\n\nApply Code : EKHBD\n\n• Caffeine Face Serum : "
         },
         {
          "type": "link",
          "text": "https://extp.in/wE0JYb"
         },
         {
          "type": "plain",
          "text": "\n\n• Himalayan Rose Face Serum : "
         },
         {
          "type": "link",
          "text": "https://extp.in/hOQBXp"
         },
         {
          "type": "plain",
          "text": "\n\n• Green Tea Face Serum : "
         },
         {
          "type": "link",
          "text": "https://extp.in/ngvnly"
         },
         {
          "type": "plain",
          "text": "\n\n• Ubtan Face Serum : "
         },
         {
          "type": "link",
          "text": "https://extp.in/2YHzvK"
         },
         {
          "type": "plain",
          "text": "\n\nValid Only On Prepaid Orders."
         }
        ]
       },
       {
        "id": 95726,
        "type": "message",
        "date": "2023-07-14T00:54:38",
        "date_unixtime": "1689276278",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Rosemary Dried Leaf (100 gm) @99\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XSHCMf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Rosemary Dried Leaf (100 gm) @99\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XSHCMf"
         }
        ]
       },
       {
        "id": 95727,
        "type": "message",
        "date": "2023-07-14T00:54:54",
        "date_unixtime": "1689276294",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1254,
        "height": 552,
        "text": [
         "Hair Growth Kit (4 Items) @149.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/KHBsvQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Hair Growth Kit (4 Items) @149.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/KHBsvQ"
         }
        ]
       },
       {
        "id": 95728,
        "type": "message",
        "date": "2023-07-14T00:55:09",
        "date_unixtime": "1689276309",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 525,
        "text": [
         "Lowest : Mix Dry Fruits, 500g @299.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/GBAam5"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lowest : Mix Dry Fruits, 500g @299.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/GBAam5"
         }
        ]
       },
       {
        "id": 95729,
        "type": "message",
        "date": "2023-07-14T00:55:33",
        "date_unixtime": "1689276333",
        "edited": "2023-07-14T00:56:05",
        "edited_unixtime": "1689276365",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Be Super Active at 12AM Tonight\n\nFlipkart Sale will be live for Plus Members \n\n",
         {
          "type": "link",
          "text": "https://extp.in/HUIk3l"
         },
         "\n\nTurn On Notification & Pin 📌TR Facts deals On Top, So That You Won't Miss any Loots 🔥.\n\nNon Plus Members Claim Early Access Pass Using 40 Supercoins : \n\n",
         {
          "type": "link",
          "text": "https://extp.in/uoItsZ"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Be Super Active at 12AM Tonight\n\nFlipkart Sale will be live for Plus Members \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/HUIk3l"
         },
         {
          "type": "plain",
          "text": "\n\nTurn On Notification & Pin 📌TR Facts deals On Top, So That You Won't Miss any Loots 🔥.\n\nNon Plus Members Claim Early Access Pass Using 40 Supercoins : \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/uoItsZ"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95730,
        "type": "message",
        "date": "2023-07-14T00:56:38",
        "date_unixtime": "1689276398",
        "edited": "2023-07-14T06:03:39",
        "edited_unixtime": "1689294819",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1253,
        "height": 470,
        "text": [
         "HP 128GB Class 10 MicroSD Memory Card @749\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3XSMOPS"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "HP 128GB Class 10 MicroSD Memory Card @749\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3XSMOPS"
         }
        ]
       },
       {
        "id": 95731,
        "type": "message",
        "date": "2023-07-14T00:57:03",
        "date_unixtime": "1689276423",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1110,
        "height": 371,
        "text": [
         "Prime Deal : Logitech Mechanical Wireless Keyboard ",
         {
          "type": "mention",
          "text": "@3998"
         },
         " \n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44ozeXa"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Prime Deal : Logitech Mechanical Wireless Keyboard "
         },
         {
          "type": "mention",
          "text": "@3998"
         },
         {
          "type": "plain",
          "text": " \n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44ozeXa"
         }
        ]
       },
       {
        "id": 95732,
        "type": "message",
        "date": "2023-07-14T00:57:28",
        "date_unixtime": "1689276448",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 545,
        "text": [
         "Laptop at Rs.40,990 + Bank Offer\n\n ",
         {
          "type": "link",
          "text": "https://extp.in/9OuF15"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Laptop at Rs.40,990 + Bank Offer\n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/9OuF15"
         }
        ]
       },
       {
        "id": 95733,
        "type": "message",
        "date": "2023-07-14T00:58:15",
        "date_unixtime": "1689276495",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1276,
        "height": 538,
        "text": [
         "LG 320 W Bluetooth Soundbar@ 19999\n\n",
         {
          "type": "link",
          "text": "https://extp.in/PpKasz"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG 320 W Bluetooth Soundbar@ 19999\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/PpKasz"
         }
        ]
       },
       {
        "id": 95734,
        "type": "message",
        "date": "2023-07-14T00:58:48",
        "date_unixtime": "1689276528",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1240,
        "height": 538,
        "text": [
         "OnePlus Bullets Wireless Z2 Bluetooth ",
         {
          "type": "mention",
          "text": "@1599"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/OHmJrE"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Bullets Wireless Z2 Bluetooth "
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
          "text": "https://extp.in/OHmJrE"
         }
        ]
       },
       {
        "id": 95735,
        "type": "message",
        "date": "2023-07-14T00:59:16",
        "date_unixtime": "1689276556",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1033,
        "height": 534,
        "text": [
         "KILLER Suitcase Up to 89% off From Rs.1149\n\n ",
         {
          "type": "link",
          "text": "https://extp.in/h6ZVbW"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "KILLER Suitcase Up to 89% off From Rs.1149\n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/h6ZVbW"
         }
        ]
       },
       {
        "id": 95736,
        "type": "message",
        "date": "2023-07-14T00:59:36",
        "date_unixtime": "1689276576",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1214,
        "height": 548,
        "text": [
         "499\n\n",
         {
          "type": "link",
          "text": "https://extp.in/t9W198"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "499\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/t9W198"
         }
        ]
       },
       {
        "id": 95737,
        "type": "message",
        "date": "2023-07-14T01:00:17",
        "date_unixtime": "1689276617",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 543,
        "text": [
         "1699 : ",
         {
          "type": "link",
          "text": "https://extp.in/s9NC1F"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "1699 : "
         },
         {
          "type": "link",
          "text": "https://extp.in/s9NC1F"
         }
        ]
       },
       {
        "id": 95738,
        "type": "message",
        "date": "2023-07-14T01:00:32",
        "date_unixtime": "1689276632",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 516,
        "text": [
         "OPPO Enco Buds 2 Earbuds ",
         {
          "type": "mention",
          "text": "@1499"
         },
         ".\n\n ",
         {
          "type": "link",
          "text": "https://extp.in/oRqGMC"
         },
         "\n ",
         {
          "type": "link",
          "text": "https://extp.in/mYt6I1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OPPO Enco Buds 2 Earbuds "
         },
         {
          "type": "mention",
          "text": "@1499"
         },
         {
          "type": "plain",
          "text": ".\n\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/oRqGMC"
         },
         {
          "type": "plain",
          "text": "\n "
         },
         {
          "type": "link",
          "text": "https://extp.in/mYt6I1"
         }
        ]
       },
       {
        "id": 95739,
        "type": "message",
        "date": "2023-07-14T01:00:41",
        "date_unixtime": "1689276641",
        "edited": "2023-07-14T05:22:51",
        "edited_unixtime": "1689292371",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "Note : Flipkart  Sale Live for Flipkart Plus members only\n\nSo if you are not a plus member then  you may see  price difference or won't be able to buy, then please buy through Flipkart plus account only."
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Note : Flipkart  Sale Live for Flipkart Plus members only\n\nSo if you are not a plus member then  you may see  price difference or won't be able to buy, then please buy through Flipkart plus account only."
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95740,
        "type": "message",
        "date": "2023-07-14T01:00:56",
        "date_unixtime": "1689276656",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "63% Off : Boroplus Aloe Vera Gel With Green Tea @133\n\n",
         {
          "type": "link",
          "text": "https://extp.in/aEOZ7k"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "63% Off : Boroplus Aloe Vera Gel With Green Tea @133\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/aEOZ7k"
         }
        ]
       },
       {
        "id": 95741,
        "type": "message",
        "date": "2023-07-14T01:01:26",
        "date_unixtime": "1689276686",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1274,
        "height": 545,
        "text": [
         "Kenstar Electric Kettle (1.6L) at 499.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/XQoyc8"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Kenstar Electric Kettle (1.6L) at 499.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/XQoyc8"
         }
        ]
       },
       {
        "id": 95742,
        "type": "message",
        "date": "2023-07-14T01:01:45",
        "date_unixtime": "1689276705",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1026,
        "height": 484,
        "text": [
         "Upto 62% Off On Top Brand Shampoos.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/oFDUin"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 62% Off On Top Brand Shampoos.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/oFDUin"
         }
        ]
       },
       {
        "id": 95743,
        "type": "message",
        "date": "2023-07-14T01:02:05",
        "date_unixtime": "1689276725",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1250,
        "height": 533,
        "text": [
         "Lifelong Leg, Foot & Calf Massager at 6999.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/qVs37G"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Lifelong Leg, Foot & Calf Massager at 6999.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/qVs37G"
         }
        ]
       },
       {
        "id": 95744,
        "type": "message",
        "date": "2023-07-14T01:02:21",
        "date_unixtime": "1689276741",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Upto 85% Off On Top Branded Shoes.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/SOzidc"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://extp.in/Fg0C8d"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 85% Off On Top Branded Shoes.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/SOzidc"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/Fg0C8d"
         }
        ]
       },
       {
        "id": 95745,
        "type": "message",
        "date": "2023-07-14T01:02:44",
        "date_unixtime": "1689276764",
        "edited": "2023-07-14T01:04:15",
        "edited_unixtime": "1689276855",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1035,
        "height": 544,
        "text": [
         "Sports Shoes Starts at Rs.199\n\n",
         {
          "type": "link",
          "text": "https://extp.in/UzBzvR"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Sports Shoes Starts at Rs.199\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/UzBzvR"
         }
        ]
       },
       {
        "id": 95746,
        "type": "message",
        "date": "2023-07-14T01:03:16",
        "date_unixtime": "1689276796",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Syska Smart Plug at 499.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/y3AlpM"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Syska Smart Plug at 499.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/y3AlpM"
         }
        ]
       },
       {
        "id": 95747,
        "type": "message",
        "date": "2023-07-14T01:03:42",
        "date_unixtime": "1689276822",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1253,
        "height": 486,
        "text": [
         "LG (32 Inches) HD Ready Smart LED TV @11,241 ",
         {
          "type": "bold",
          "text": "(Effectively)"
         },
         ". \n\n ",
         {
          "type": "link",
          "text": "https://amzn.to/3JZ1h7f"
         },
         "\n\n",
         {
          "type": "bold",
          "text": "*₹1249 Off With SBI/ICICI Credit Card"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "LG (32 Inches) HD Ready Smart LED TV @11,241 "
         },
         {
          "type": "bold",
          "text": "(Effectively)"
         },
         {
          "type": "plain",
          "text": ". \n\n "
         },
         {
          "type": "link",
          "text": "https://amzn.to/3JZ1h7f"
         },
         {
          "type": "plain",
          "text": "\n\n"
         },
         {
          "type": "bold",
          "text": "*₹1249 Off With SBI/ICICI Credit Card"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95748,
        "type": "message",
        "date": "2023-07-14T01:04:10",
        "date_unixtime": "1689276850",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1266,
        "height": 552,
        "text": [
         "SAMSUNG (32 inch) HD Ready LED Smart Tizen TV @10,791 with Axis Bank Credit Card No Cost EMI\n\n",
         {
          "type": "link",
          "text": "https://extp.in/e2dmOl"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "SAMSUNG (32 inch) HD Ready LED Smart Tizen TV @10,791 with Axis Bank Credit Card No Cost EMI\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/e2dmOl"
         }
        ]
       },
       {
        "id": 95749,
        "type": "message",
        "date": "2023-07-14T01:04:36",
        "date_unixtime": "1689276876",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Upto 30000 Extra Discount Using HDFC Card On Samsung Laptops\n\n",
         {
          "type": "link",
          "text": "https://extp.in/tKKXRY"
         },
         "\n\nChoose EMI Offer Using HDFC Card and  final discount on last page\n\nNote different discount on different laptop as per offer"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 30000 Extra Discount Using HDFC Card On Samsung Laptops\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/tKKXRY"
         },
         {
          "type": "plain",
          "text": "\n\nChoose EMI Offer Using HDFC Card and  final discount on last page\n\nNote different discount on different laptop as per offer"
         }
        ]
       },
       {
        "id": 95750,
        "type": "message",
        "date": "2023-07-14T01:05:08",
        "date_unixtime": "1689276908",
        "edited": "2023-07-14T01:05:25",
        "edited_unixtime": "1689276925",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 558,
        "text": [
         "Crompton Galaxy Copper String Light - WW @179\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43m2bl7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Crompton Galaxy Copper String Light - WW @179\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43m2bl7"
         }
        ]
       },
       {
        "id": 95751,
        "type": "message",
        "date": "2023-07-14T01:05:17",
        "date_unixtime": "1689276917",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         {
          "type": "bold",
          "text": "Today Flipkart Sales Started \n\nTomorrow Mid Night Dinosaur 🦕 arrival... Amazon Prime Sales Begins"
         },
         " 💥"
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Today Flipkart Sales Started \n\nTomorrow Mid Night Dinosaur 🦕 arrival... Amazon Prime Sales Begins"
         },
         {
          "type": "plain",
          "text": " 💥"
         }
        ]
       },
       {
        "id": 95752,
        "type": "message",
        "date": "2023-07-14T01:05:39",
        "date_unixtime": "1689276939",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 537,
        "text": [
         "OnePlus Y1S 101 cm (40 inch) Full HD LED Smart Android TV at ₹18749\n\n",
         {
          "type": "link",
          "text": "https://extp.in/4dJp6W"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "OnePlus Y1S 101 cm (40 inch) Full HD LED Smart Android TV at ₹18749\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/4dJp6W"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95753,
        "type": "message",
        "date": "2023-07-14T01:06:03",
        "date_unixtime": "1689276963",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1026,
        "height": 500,
        "text": [
         "Women's T-Shirt Starts at Rs.120\n\n",
         {
          "type": "link",
          "text": "https://extp.in/AislaF"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Women's T-Shirt Starts at Rs.120\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/AislaF"
         }
        ]
       },
       {
        "id": 95754,
        "type": "message",
        "date": "2023-07-14T01:06:24",
        "date_unixtime": "1689276984",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 545,
        "text": [
         "APPLE Watch Series 8 at 32,999 + Bank Offer.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/CZNiwt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "APPLE Watch Series 8 at 32,999 + Bank Offer.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/CZNiwt"
         }
        ]
       },
       {
        "id": 95755,
        "type": "message",
        "date": "2023-07-14T01:12:58",
        "date_unixtime": "1689277378",
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
        "id": 95756,
        "type": "message",
        "date": "2023-07-14T01:13:18",
        "date_unixtime": "1689277398",
        "edited": "2023-07-14T01:16:52",
        "edited_unixtime": "1689277612",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "Upto 77% Off On Women's Footwear.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/vzLtG7"
         },
         "\n",
         {
          "type": "link",
          "text": "https://extp.in/mkYxuf"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Upto 77% Off On Women's Footwear.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/vzLtG7"
         },
         {
          "type": "plain",
          "text": "\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/mkYxuf"
         }
        ]
       },
       {
        "id": 95757,
        "type": "message",
        "date": "2023-07-14T01:14:26",
        "date_unixtime": "1689277466",
        "edited": "2023-07-14T05:32:28",
        "edited_unixtime": "1689292948",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1080,
        "height": 1141,
        "text": [
         "Getting Double Bank Discount\n\n",
         {
          "type": "link",
          "text": "https://extp.in/JKn5d1"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Getting Double Bank Discount\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/JKn5d1"
         }
        ]
       },
       {
        "id": 95758,
        "type": "message",
        "date": "2023-07-14T01:17:25",
        "date_unixtime": "1689277645",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1272,
        "height": 543,
        "text": [
         "Fast \n\n",
         {
          "type": "link",
          "text": "https://extp.in/bOjkR6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Fast \n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/bOjkR6"
         }
        ]
       },
       {
        "id": 95759,
        "type": "message",
        "date": "2023-07-14T01:18:27",
        "date_unixtime": "1689277707",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1264,
        "height": 488,
        "text": [
         "pTron Volta 12W Single Port USB Fast Charger @269\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44HY4Rt"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "pTron Volta 12W Single Port USB Fast Charger @269\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44HY4Rt"
         }
        ]
       },
       {
        "id": 95760,
        "type": "message",
        "date": "2023-07-14T01:18:46",
        "date_unixtime": "1689277726",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 600,
        "text": [
         "Ego by Maxima Analog Black Dial Men's Watch @619\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3O94B29"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ego by Maxima Analog Black Dial Men's Watch @619\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3O94B29"
         }
        ]
       },
       {
        "id": 95761,
        "type": "message",
        "date": "2023-07-14T01:20:37",
        "date_unixtime": "1689277837",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "boAt Aavante Bar 200W Bluetooth Soundbar at 6999.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/CswhEh"
         },
         "\n\nJBL Cinema 110W Bluetooth Soundbar at 6999.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/zAAPqj"
         },
         "\n\nboAt Aavante Bar 160W Bluetooth Soundbar at 6499.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/bPTYL8"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Aavante Bar 200W Bluetooth Soundbar at 6999.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/CswhEh"
         },
         {
          "type": "plain",
          "text": "\n\nJBL Cinema 110W Bluetooth Soundbar at 6999.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/zAAPqj"
         },
         {
          "type": "plain",
          "text": "\n\nboAt Aavante Bar 160W Bluetooth Soundbar at 6499.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/bPTYL8"
         }
        ]
       },
       {
        "id": 95762,
        "type": "message",
        "date": "2023-07-14T01:21:28",
        "date_unixtime": "1689277888",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "reply_to_message_id": 95757,
        "text": [
         {
          "type": "bold",
          "text": "Over Now❌ Hope You Looted😉\n\nBe Super Active for Such Loots"
         },
         ""
        ],
        "text_entities": [
         {
          "type": "bold",
          "text": "Over Now❌ Hope You Looted😉\n\nBe Super Active for Such Loots"
         },
         {
          "type": "plain",
          "text": ""
         }
        ]
       },
       {
        "id": 95763,
        "type": "message",
        "date": "2023-07-14T01:24:27",
        "date_unixtime": "1689278067",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 557,
        "text": [
         "Boult Bluetooth Calling Smartwatch@ 999\n\n",
         {
          "type": "link",
          "text": "https://extp.in/7kX4mQ"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Boult Bluetooth Calling Smartwatch@ 999\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/7kX4mQ"
         }
        ]
       },
       {
        "id": 95764,
        "type": "message",
        "date": "2023-07-14T01:24:57",
        "date_unixtime": "1689278097",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 624,
        "text": [
         "boAt Newly Launched Wave ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44FsEv6"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "boAt Newly Launched Wave "
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
          "text": "https://amzn.to/44FsEv6"
         }
        ]
       },
       {
        "id": 95765,
        "type": "message",
        "date": "2023-07-14T01:25:10",
        "date_unixtime": "1689278110",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "text": [
         "46% Off On Fortune Oil.\n\n",
         {
          "type": "link",
          "text": "https://extp.in/glHNEX"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "46% Off On Fortune Oil.\n\n"
         },
         {
          "type": "link",
          "text": "https://extp.in/glHNEX"
         }
        ]
       },
       {
        "id": 95766,
        "type": "message",
        "date": "2023-07-14T01:25:30",
        "date_unixtime": "1689278130",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 494,
        "text": [
         "Red Tape Sneaker Casual Shoes for Men ",
         {
          "type": "mention",
          "text": "@1499"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3JV6EV7"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Red Tape Sneaker Casual Shoes for Men "
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
          "text": "https://amzn.to/3JV6EV7"
         }
        ]
       },
       {
        "id": 95767,
        "type": "message",
        "date": "2023-07-14T01:37:28",
        "date_unixtime": "1689278848",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1279,
        "height": 567,
        "text": [
         "Mixer Grinder @999  ",
         {
          "type": "link",
          "text": "https://extp.in/bCzZFA"
         },
         "\n\nMore :  ",
         {
          "type": "link",
          "text": "https://extp.in/S8j5IB"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Mixer Grinder @999  "
         },
         {
          "type": "link",
          "text": "https://extp.in/bCzZFA"
         },
         {
          "type": "plain",
          "text": "\n\nMore :  "
         },
         {
          "type": "link",
          "text": "https://extp.in/S8j5IB"
         }
        ]
       },
       {
        "id": 95768,
        "type": "message",
        "date": "2023-07-14T01:37:49",
        "date_unixtime": "1689278869",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 491,
        "text": [
         "GRAB : Sony WF-C500 TWS Earbuds at 2990 (Effectively)\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/46MLB0I"
         },
         "\n\n*Pay Using any Debit/Credit Card for Rs.1000 Discount"
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "GRAB : Sony WF-C500 TWS Earbuds at 2990 (Effectively)\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/46MLB0I"
         },
         {
          "type": "plain",
          "text": "\n\n*Pay Using any Debit/Credit Card for Rs.1000 Discount"
         }
        ]
       },
       {
        "id": 95769,
        "type": "message",
        "date": "2023-07-14T01:38:14",
        "date_unixtime": "1689278894",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 524,
        "text": [
         {
          "type": "link",
          "text": "https://extp.in/dAiZWv"
         }
        ],
        "text_entities": [
         {
          "type": "link",
          "text": "https://extp.in/dAiZWv"
         }
        ]
       },
       {
        "id": 95770,
        "type": "message",
        "date": "2023-07-14T01:38:33",
        "date_unixtime": "1689278913",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 571,
        "text": [
         "WildHorn Leather Wallet for Men @285\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44v95pO"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "WildHorn Leather Wallet for Men @285\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44v95pO"
         }
        ]
       },
       {
        "id": 95771,
        "type": "message",
        "date": "2023-07-14T01:38:50",
        "date_unixtime": "1689278930",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 634,
        "text": [
         "Protoner Home Gym 8 kgs, 2 kg x 4 Plates, @999\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3Og3nm0"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Protoner Home Gym 8 kgs, 2 kg x 4 Plates, @999\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3Og3nm0"
         }
        ]
       },
       {
        "id": 95772,
        "type": "message",
        "date": "2023-07-14T01:39:12",
        "date_unixtime": "1689278952",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1211,
        "height": 404,
        "text": [
         "Ant Esports KM500W Gaming Backlit Keyboard and Mouse @949\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/44mviWT"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Ant Esports KM500W Gaming Backlit Keyboard and Mouse @949\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/44mviWT"
         }
        ]
       },
       {
        "id": 95773,
        "type": "message",
        "date": "2023-07-14T01:39:34",
        "date_unixtime": "1689278974",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 626,
        "text": [
         "URBN 20000 mAh 12W Fast Charging Metal Power Bank ",
         {
          "type": "mention",
          "text": "@1099"
         },
         "\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PRQP5r"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "URBN 20000 mAh 12W Fast Charging Metal Power Bank "
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
          "text": "https://amzn.to/3PRQP5r"
         }
        ]
       },
       {
        "id": 95774,
        "type": "message",
        "date": "2023-07-14T01:39:50",
        "date_unixtime": "1689278990",
        "edited": "2023-07-14T01:40:11",
        "edited_unixtime": "1689279011",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1210,
        "height": 432,
        "text": [
         "ZEBRONICS Zeb-Groza - Premium USB Gaming Mouse @379\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/43oowyy"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "ZEBRONICS Zeb-Groza - Premium USB Gaming Mouse @379\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/43oowyy"
         }
        ]
       },
       {
        "id": 95775,
        "type": "message",
        "date": "2023-07-14T01:40:07",
        "date_unixtime": "1689279007",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 593,
        "text": [
         "FUR JADEN Anti Theft Number Lock Backpack Bag @599\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3NYuwZk"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "FUR JADEN Anti Theft Number Lock Backpack Bag @599\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3NYuwZk"
         }
        ]
       },
       {
        "id": 95776,
        "type": "message",
        "date": "2023-07-14T01:40:29",
        "date_unixtime": "1689279029",
        "from": "TR Facts Deals🔥🔥🔥",
        "from_id": "channel1487851422",
        "author": ".",
        "photo": "(File not included. Change data exporting settings to download.)",
        "width": 1280,
        "height": 592,
        "text": [
         "Redgear A-17 Gaming Mouse with Upto 6400 DPI, @249\n\n",
         {
          "type": "link",
          "text": "https://amzn.to/3PVZrI5"
         }
        ],
        "text_entities": [
         {
          "type": "plain",
          "text": "Redgear A-17 Gaming Mouse with Upto 6400 DPI, @249\n\n"
         },
         {
          "type": "link",
          "text": "https://amzn.to/3PVZrI5"
         }
        ]
       }
    ];


  //Amazon Login
  await driver.get("https://amazon.in");
  await driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
  await driver.findElement(By.id("ap_email")).sendKeys("Avinash1Affiliate@gmail.com");
  await driver.findElement(By.id("continue")).click();
  await driver.findElement(By.id("ap_password")).sendKeys("AviAff@123");
  await driver.findElement(By.id("signInSubmit")).click();
  await driver.sleep(1000);
  
  //earnkaro login

0  
  
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



  // await driver.get("https://earnkaro.com/login");
  // await driver.findElement(By.id("uname")).click();
  // await driver.findElement(By.id("uname")).sendKeys("bmv1avi@gmail.com");
  // await driver.findElement(By.id("btnLayoutContinue")).click();

  // await driver.actions()
  // .sendKeys("AviAff@123")
  // // .sendKeys(Key.TAB)
  // .sendKeys(Key.RETURN)
  // .perform()

  // await driver.findElement(By.id("pwd")).click();
  // await driver.findElement(By.id("pwd")).sendKeys("AviAff@123");
  // await driver.findElement(By.id("btnLayoutSignInPass")).click();
  await driver.sleep(1000);

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
  let id = 7;
  let len = 0;
  // let idlen =  "https://apibackenddatabase-default-rtdb.firebaseio.com/amazon.json";
    let idlen = "https://avi1deals-default-rtdb.firebaseio.com/amazon.json";
  let access_token =
    "EAAKw6ZAutPZBoBAMi8kHibuNJ0LedkfqkBQfjEsDHn4ISofSEHHx9FCbCptO7bRziRwdFhVnewrAttIZCSOicbZBQQmPbpCds5RTzm1W42UuekgcnJ4uoBFPtXTKJHAYEvjnAN4goYeDr6NovB93LcExo6BLlQJLwBJR5j9LFMGrIwAs0piXYAVmBapyLZAO3mUmDC22xn2vhJLn6Jo7l";
  let mention = "";
  let otherUrls = "";
  // Links = Input[0].text_entities[1].text;
  // Links = Input.messages[0].text_entities[1].text;
  idlen = firebaseget();
  console.log("Idlen is ",idlen)
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
          console.log("\n\n")
          for (j = 0; j < Input[i].text_entities.length; j++) {
            console.log("\n\n")
            console.log("\n\n")
            try {
              console.log(" j is ",j)
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
                  Input[i].text_entities[j].text = Input[i].text_entities[
                    j
                  ].text.replaceAll("Looot", "");
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
                  itemText = "#" + Input[i].tipe +"\n" + itemText +" \n"+ `https://affiliiate-app.firebaseapp.com/product/${Input[i].id}`;
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
                if(photo != "" && photo.length <300 && pricenum>0 && disco>0){
                  telegram(photo,"@all1appdaily",text + "\n"+ earnlink +"\n" + itemcategory +"\n"+"itemTipe" + itemType);

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
                      console.log("Image else loop");
                      
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
                discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("innerHTML");
                // discount = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]')).getAttribute("src");
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]
                // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                if (discount == "" || discount == undefined) {
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
                if (price.length > 10) {
                  let pricecheck = "";
                  pricecheck = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]')).getAttribute("innerHTML");
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
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'))
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]'))
                    .getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]'))
                    .getAttribute("innerHTML");
                }
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]
                //*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[1]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                else if (price == "") {
                  price = await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[5]/div[4]/div[4]/div[10]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[2]/span[1]/span[1]")).getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                  // *[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]
                  //*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[1]
                } else if (price == "") {
                  price = await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML");
                } else if (price == "") {
                  price = await driver.findElement(By.className("a-price-whole"))                    .getAttribute("innerHTML");
                  // price=await driver.findElement(('a-price-whole')).getAttribute("innerHTML");
                } else if (price == "") {
                  await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML")
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
                        t1 = "#" + Input[i].tipe +"\n" +
                          disco +
                          "% off on " +
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
                            if(t1.includes("&nbsp;")){
                              t1 = t1.replaceAll("&nbsp;","")
                            }
                            if(t1.includes("#")){
                              t1 = t1.replaceAll("#","")
                            }
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
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      console.log("Len of Firebase is", len);
      console.log("Idlen is outside",idlen)
      if(idlen.includes("Promise"))
      {
        idlen.replaceAll("Promise","")
        console.log("After trim idlen",idlen)
      }
      if (Input[i] != undefined)
        if (Input[i].from != undefined)
          if (!Input[i].from.includes("All1App")) {
            chatId = "@all1appdaily";
            console.log("calling all1appdaily");
            if(disco>0)
            telegram(photo, chatId, text);
            try {
              // var app = JSON.stringify({
              // var app = JSON.parse({
                var app = {
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
              }
              // )
              ;
              console.log("calling firebase");
              console.log("Length of Firebase is", idlen.length);
              console.log("Len of Firebase is", len);
              firebase(app);
              //Need to be changed
            } catch (e) {
              console.log("firebase error", e);
            }
          }
      //changed for All1App
    } catch (e) {
      console.log("Telegram Error");
    }
    console.log("Len of Firebase outside is", idlen);

    

    
    let output = false;
    if (photo != "") {
      console.log("with photo",photo);
      await fetch(
       
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log("success", result);
         
          output = JSON.stringify(result).includes("false");
        })
        .catch((error) => console.log("error", error));

      if (output) {
        await fetch(
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
      console.log("without photo",photo);
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
          //Need to check
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

    // text = "";
    // btext = "";
    // photo = "";
    // caption = "";
    // discount = "";
    // price = "";
    // pricenum = 0;
    // disco = 0;
    // disc = false;
    // itemcategory = "";
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
