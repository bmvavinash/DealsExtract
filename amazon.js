//  chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\ChromeProfile"

    const {By,Key,Builder, Button, until} = require("selenium-webdriver");
    require('url').URLSearchParams

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
    
    async function example() {
   
let options = await new chrome.Options();
options.debuggerAddress("localhost:9222"); 
//CHROME
driver = await chrome.Driver.createSession(options); 

//@Firefox
// let driver = await new Builder().forBrowser("firefox").build();


    const Input = 
[ 


   {
    "id": 46544,
    "type": "message",
    "date": "2023-01-07T12:18:49",
    "date_unixtime": "1673074129",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 626,
    "text": [
     "Aristo Houseware Diamond Plastic Storage Container 4 Pcs Set @116\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMu0oi"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Aristo Houseware Diamond Plastic Storage Container 4 Pcs Set @116\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMu0oi"
     }
    ]
   },
   {
    "id": 46545,
    "type": "message",
    "date": "2023-01-07T12:20:10",
    "date_unixtime": "1673074210",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 554,
    "text": [
     "boAt Newly Launched Wave Edge with 1.85\" HD Display ",
     {
      "type": "mention",
      "text": "@1999"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jZTs7h"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "boAt Newly Launched Wave Edge with 1.85\" HD Display "
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
      "text": "https://amzn.to/3jZTs7h"
     }
    ]
   },
   {
    "id": 46546,
    "type": "message",
    "date": "2023-01-07T12:21:07",
    "date_unixtime": "1673074267",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 641,
    "text": [
     "Celebrino Heavy Guage 4mm Thickness Aluminum Cookware Set @600\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VRnebp"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Celebrino Heavy Guage 4mm Thickness Aluminum Cookware Set @600\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VRnebp"
     }
    ]
   },
   {
    "id": 46547,
    "type": "message",
    "date": "2023-01-07T12:22:01",
    "date_unixtime": "1673074321",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 627,
    "text": [
     "Parx Women Sweatshirt @428\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WRbG9r"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Parx Women Sweatshirt @428\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WRbG9r"
     }
    ]
   },
   {
    "id": 46548,
    "type": "message",
    "date": "2023-01-07T12:23:52",
    "date_unixtime": "1673074432",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 601,
    "text": [
     "Cotton colors Sweatshirt with Zipper and Hoodie Royal Blue @349\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GOQ4VW"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cotton colors Sweatshirt with Zipper and Hoodie Royal Blue @349\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GOQ4VW"
     }
    ]
   },
   {
    "id": 46549,
    "type": "message",
    "date": "2023-01-07T12:29:10",
    "date_unixtime": "1673074750",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 626,
    "text": [
     "boAt Airdopes 172 True Wireless Earbuds ",
     {
      "type": "mention",
      "text": "@1299"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vM7xrA"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "boAt Airdopes 172 True Wireless Earbuds "
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
      "text": "https://amzn.to/3vM7xrA"
     }
    ]
   },
   {
    "id": 46550,
    "type": "message",
    "date": "2023-01-07T12:30:52",
    "date_unixtime": "1673074852",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 606,
    "text": [
     "Fila Men T-Shirt @366\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X45BX4"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Fila Men T-Shirt @366\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X45BX4"
     }
    ]
   },
   {
    "id": 46551,
    "type": "message",
    "date": "2023-01-07T12:34:26",
    "date_unixtime": "1673075066",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 618,
    "text": [
     "Vaamsi Women's Crepe Regular Kurta @189\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IvEikv"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Vaamsi Women's Crepe Regular Kurta @189\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IvEikv"
     }
    ]
   },
   {
    "id": 46552,
    "type": "message",
    "date": "2023-01-07T12:35:26",
    "date_unixtime": "1673075126",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 533,
    "text": [
     "Lifelong LLEK15 Electric Kettle 1.5L with Stainless Steel Body @521\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vNIOmS"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Lifelong LLEK15 Electric Kettle 1.5L with Stainless Steel Body @521\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vNIOmS"
     }
    ]
   },
   {
    "id": 46553,
    "type": "message",
    "date": "2023-01-07T12:39:01",
    "date_unixtime": "1673075341",
    "edited": "2023-01-07T14:46:17",
    "edited_unixtime": "1673082977",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 818,
    "height": 413,
    "text": [
     {
      "type": "hashtag",
      "text": "#Myntra"
     },
     " Caprese Sling Bags / Wallets At Huge Discounts From @ ₹559\n\n🔗",
     {
      "type": "link",
      "text": "https://extp.in/VUbnrU"
     },
     "\n\n❌Regular price @ ₹1,599"
    ],
    "text_entities": [
     {
      "type": "hashtag",
      "text": "#Myntra"
     },
     {
      "type": "plain",
      "text": " Caprese Sling Bags / Wallets At Huge Discounts From @ ₹559\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://extp.in/VUbnrU"
     },
     {
      "type": "plain",
      "text": "\n\n❌Regular price @ ₹1,599"
     }
    ]
   },
   {
    "id": 46554,
    "type": "message",
    "date": "2023-01-07T12:39:27",
    "date_unixtime": "1673075367",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 601,
    "text": [
     "Saraswati Special Assam Black Loose CTC Dust Tea ",
     {
      "type": "mention",
      "text": "@1449"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZjClgP"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Saraswati Special Assam Black Loose CTC Dust Tea "
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
      "text": "https://amzn.to/3ZjClgP"
     }
    ]
   },
   {
    "id": 46555,
    "type": "message",
    "date": "2023-01-07T12:39:42",
    "date_unixtime": "1673075382",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 412,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/MFWPKf"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/MFWPKf"
     }
    ]
   },
   {
    "id": 46556,
    "type": "message",
    "date": "2023-01-07T12:40:44",
    "date_unixtime": "1673075444",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 256,
    "text": [
     "🎉",
     {
      "type": "bold",
      "text": " Pongal & Sanranti Shopping Store "
     },
     "⚡️",
     {
      "type": "bold",
      "text": " Up to 80% Off\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Giu0kS"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "🎉"
     },
     {
      "type": "bold",
      "text": " Pongal & Sanranti Shopping Store "
     },
     {
      "type": "plain",
      "text": "⚡️"
     },
     {
      "type": "bold",
      "text": " Up to 80% Off\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Giu0kS"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46558,
    "type": "message",
    "date": "2023-01-07T12:44:07",
    "date_unixtime": "1673075647",
    "edited": "2023-01-07T18:18:39",
    "edited_unixtime": "1673095719",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1147,
    "height": 547,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/QPY9PB"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/QPY9PB"
     }
    ]
   },
   {
    "id": 46559,
    "type": "message",
    "date": "2023-01-07T12:49:02",
    "date_unixtime": "1673075942",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1153,
    "height": 597,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/tLjtZL"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/tLjtZL"
     }
    ]
   },
   {
    "id": 46560,
    "type": "message",
    "date": "2023-01-07T12:50:24",
    "date_unixtime": "1673076024",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 538,
    "text": [
     "Bajaj Splendora 3 Litre 3KW IWH Instant Water Heater ",
     {
      "type": "mention",
      "text": "@2573"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Qk76y9"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj Splendora 3 Litre 3KW IWH Instant Water Heater "
     },
     {
      "type": "mention",
      "text": "@2573"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Qk76y9"
     }
    ]
   },
   {
    "id": 46561,
    "type": "message",
    "date": "2023-01-07T12:51:23",
    "date_unixtime": "1673076083",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 597,
    "text": [
     "Joggers And Trackpants Men Track Pants @362\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMi6uQ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Joggers And Trackpants Men Track Pants @362\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMi6uQ"
     }
    ]
   },
   {
    "id": 46562,
    "type": "message",
    "date": "2023-01-07T12:52:31",
    "date_unixtime": "1673076151",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 549,
    "text": [
     "Lifelong Trimmer @449\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3if7aCV"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Lifelong Trimmer @449\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3if7aCV"
     }
    ]
   },
   {
    "id": 46563,
    "type": "message",
    "date": "2023-01-07T12:53:35",
    "date_unixtime": "1673076215",
    "edited": "2023-01-07T13:19:42",
    "edited_unixtime": "1673077782",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 550,
    "text": [
     "Havells GS6451 - Fast Charge 4-in-1 Grooming Kit  ",
     {
      "type": "mention",
      "text": "@1437"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IEzhpw"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Havells GS6451 - Fast Charge 4-in-1 Grooming Kit  "
     },
     {
      "type": "mention",
      "text": "@1437"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IEzhpw"
     }
    ]
   },
   {
    "id": 46564,
    "type": "message",
    "date": "2023-01-07T12:55:13",
    "date_unixtime": "1673076313",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 646,
    "text": [
     "Briota Square Multi Color Kids Led Watch for Boys @299\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VTGs07"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Briota Square Multi Color Kids Led Watch for Boys @299\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VTGs07"
     }
    ]
   },
   {
    "id": 46565,
    "type": "message",
    "date": "2023-01-07T12:56:24",
    "date_unixtime": "1673076384",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 637,
    "text": [
     "AYMH® Metal Hanging Tea Light Lantern Candle Holder @249\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vRdOlD"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AYMH® Metal Hanging Tea Light Lantern Candle Holder @249\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vRdOlD"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46566,
    "type": "message",
    "date": "2023-01-07T12:58:54",
    "date_unixtime": "1673076534",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 632,
    "text": [
     "CHKOKKO Women's Polyester Hooded Neck, Zipper and Round Neck Jacket @399\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WQSFEn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "CHKOKKO Women's Polyester Hooded Neck, Zipper and Round Neck Jacket @399\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WQSFEn"
     }
    ]
   },
   {
    "id": 46567,
    "type": "message",
    "date": "2023-01-07T13:00:48",
    "date_unixtime": "1673076648",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 610,
    "text": [
     "GM Strato - 20 Watt LED Batten Tube Light @538\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Gqv9Xt"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "GM Strato - 20 Watt LED Batten Tube Light @538\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gqv9Xt"
     }
    ]
   },
   {
    "id": 46568,
    "type": "message",
    "date": "2023-01-07T13:01:53",
    "date_unixtime": "1673076713",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 615,
    "text": [
     "Amazon Brand - Tavasya Women Salwar Suit Set @414\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GnP1e2"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Tavasya Women Salwar Suit Set @414\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GnP1e2"
     }
    ]
   },
   {
    "id": 46569,
    "type": "message",
    "date": "2023-01-07T13:02:50",
    "date_unixtime": "1673076770",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 607,
    "text": [
     "Amazon Brand - Myx Women Palazzos @176\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CshqP2"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Myx Women Palazzos @176\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CshqP2"
     }
    ]
   },
   {
    "id": 46570,
    "type": "message",
    "date": "2023-01-07T13:12:55",
    "date_unixtime": "1673077375",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 585,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/X69HuB"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/X69HuB"
     }
    ]
   },
   {
    "id": 46571,
    "type": "message",
    "date": "2023-01-07T14:08:37",
    "date_unixtime": "1673080717",
    "edited": "2023-01-07T14:19:36",
    "edited_unixtime": "1673081376",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 642,
    "text": [
     "Floral Polyresin Grommet Eyelet Curtain For Window @89\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GiyeZM"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Floral Polyresin Grommet Eyelet Curtain For Window @89\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GiyeZM"
     }
    ]
   },
   {
    "id": 46572,
    "type": "message",
    "date": "2023-01-07T14:10:02",
    "date_unixtime": "1673080802",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 620,
    "text": [
     "Neelam Stainless Steel Neo Pressure Cooker -6.5 Litre ",
     {
      "type": "mention",
      "text": "@2443"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IvOLMw"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Neelam Stainless Steel Neo Pressure Cooker -6.5 Litre "
     },
     {
      "type": "mention",
      "text": "@2443"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IvOLMw"
     }
    ]
   },
   {
    "id": 46573,
    "type": "message",
    "date": "2023-01-07T14:11:52",
    "date_unixtime": "1673080912",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 601,
    "text": [
     "Christy World Men's Regular fit Jacket @579\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CT2WIf"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Christy World Men's Regular fit Jacket @579\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CT2WIf"
     }
    ]
   },
   {
    "id": 46574,
    "type": "message",
    "date": "2023-01-07T14:13:57",
    "date_unixtime": "1673081037",
    "edited": "2023-01-07T18:31:09",
    "edited_unixtime": "1673096469",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1053,
    "height": 377,
    "text": [
     "Women's Jackets @536 \n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GM6tdD"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Women's Jackets @536 \n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GM6tdD"
     }
    ]
   },
   {
    "id": 46575,
    "type": "message",
    "date": "2023-01-07T14:16:24",
    "date_unixtime": "1673081184",
    "edited": "2023-01-07T14:19:25",
    "edited_unixtime": "1673081365",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 470,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/FnD0Zu"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/FnD0Zu"
     }
    ]
   },
   {
    "id": 46576,
    "type": "message",
    "date": "2023-01-07T14:17:56",
    "date_unixtime": "1673081276",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 622,
    "text": [
     "Selvia Women Party Top @229\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZgvjJQ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Selvia Women Party Top @229\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZgvjJQ"
     }
    ]
   },
   {
    "id": 46577,
    "type": "message",
    "date": "2023-01-07T14:18:56",
    "date_unixtime": "1673081336",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 623,
    "text": [
     "OOBANI Men's Regular Fit Vest (Pack of 2) @499\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GKpmO4"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "OOBANI Men's Regular Fit Vest (Pack of 2) @499\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GKpmO4"
     }
    ]
   },
   {
    "id": 46578,
    "type": "message",
    "date": "2023-01-07T14:20:19",
    "date_unixtime": "1673081419",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 477,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/s0WtGI"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/s0WtGI"
     }
    ]
   },
   {
    "id": 46579,
    "type": "message",
    "date": "2023-01-07T14:21:56",
    "date_unixtime": "1673081516",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 469,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/GaATTp"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/GaATTp"
     }
    ]
   },
   {
    "id": 46580,
    "type": "message",
    "date": "2023-01-07T14:23:36",
    "date_unixtime": "1673081616",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1041,
    "height": 337,
    "text": [
     "NIVEA Soft Light Moisturiser @304\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GvvhW2"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "NIVEA Soft Light Moisturiser @304\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GvvhW2"
     }
    ]
   },
   {
    "id": 46581,
    "type": "message",
    "date": "2023-01-07T14:27:14",
    "date_unixtime": "1673081834",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 552,
    "text": [
     "Microsoft Surface Pro8-13/13cm Touch Screen - i5/8GB RAM ",
     {
      "type": "bot_command",
      "text": "/256"
     },
     " GB SSD SC English Window 11 Graphite ",
     {
      "type": "mention",
      "text": "@108999"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CuQqyn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Microsoft Surface Pro8-13/13cm Touch Screen - i5/8GB RAM "
     },
     {
      "type": "bot_command",
      "text": "/256"
     },
     {
      "type": "plain",
      "text": " GB SSD SC English Window 11 Graphite "
     },
     {
      "type": "mention",
      "text": "@108999"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CuQqyn"
     }
    ]
   },
   {
    "id": 46582,
    "type": "message",
    "date": "2023-01-07T14:28:42",
    "date_unixtime": "1673081922",
    "edited": "2023-01-07T16:45:13",
    "edited_unixtime": "1673090113",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 621,
    "text": [
     "MVMT Dot Analog Blue Dial Women's Watch ",
     {
      "type": "mention",
      "text": "@3017"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3iezxkE"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "MVMT Dot Analog Blue Dial Women's Watch "
     },
     {
      "type": "mention",
      "text": "@3017"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3iezxkE"
     }
    ]
   },
   {
    "id": 46583,
    "type": "message",
    "date": "2023-01-07T14:31:21",
    "date_unixtime": "1673082081",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 501,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/TY5MpC"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/TY5MpC"
     }
    ]
   },
   {
    "id": 46584,
    "type": "message",
    "date": "2023-01-07T14:33:45",
    "date_unixtime": "1673082225",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 611,
    "text": [
     "Electric Nail File Drill for Baby No Sharp Claws Hurt, 6 in 1 Safety Cutter Trimmer @348\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZujHTI"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Electric Nail File Drill for Baby No Sharp Claws Hurt, 6 in 1 Safety Cutter Trimmer @348\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZujHTI"
     }
    ]
   },
   {
    "id": 46585,
    "type": "message",
    "date": "2023-01-07T14:35:27",
    "date_unixtime": "1673082327",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1110,
    "height": 486,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/ONP1ZF"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/ONP1ZF"
     }
    ]
   },
   {
    "id": 46586,
    "type": "message",
    "date": "2023-01-07T14:37:14",
    "date_unixtime": "1673082434",
    "edited": "2023-01-07T15:01:49",
    "edited_unixtime": "1673083909",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 621,
    "text": [
     "Kuber Industries Rexine Shopping Bags @284\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZlUivp"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Kuber Industries Rexine Shopping Bags @284\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZlUivp"
     }
    ]
   },
   {
    "id": 46587,
    "type": "message",
    "date": "2023-01-07T14:38:19",
    "date_unixtime": "1673082499",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 541,
    "text": [
     "Prestige PRWO 2.8-2 2.80 Liters Rice Cooker ",
     {
      "type": "mention",
      "text": "@3560"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZjXOWP"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Prestige PRWO 2.8-2 2.80 Liters Rice Cooker "
     },
     {
      "type": "mention",
      "text": "@3560"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZjXOWP"
     }
    ]
   },
   {
    "id": 46588,
    "type": "message",
    "date": "2023-01-07T14:39:37",
    "date_unixtime": "1673082577",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 608,
    "text": [
     "NOVA Lint Remover for Clothes @458\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GM47v7"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "NOVA Lint Remover for Clothes @458\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GM47v7"
     }
    ]
   },
   {
    "id": 46589,
    "type": "message",
    "date": "2023-01-07T14:41:10",
    "date_unixtime": "1673082670",
    "edited": "2023-01-07T15:01:13",
    "edited_unixtime": "1673083873",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 550,
    "text": [
     "ABYS Genuine Leather Wallet @379\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GMk6cA"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ABYS Genuine Leather Wallet @379\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GMk6cA"
     }
    ]
   },
   {
    "id": 46590,
    "type": "message",
    "date": "2023-01-07T14:42:19",
    "date_unixtime": "1673082739",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 636,
    "text": [
     "Divine Casa Microfiber Wearable Comforter ",
     {
      "type": "mention",
      "text": "@1549"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QC0OKB"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Divine Casa Microfiber Wearable Comforter "
     },
     {
      "type": "mention",
      "text": "@1549"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QC0OKB"
     }
    ]
   },
   {
    "id": 46591,
    "type": "message",
    "date": "2023-01-07T14:43:15",
    "date_unixtime": "1673082795",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 596,
    "text": [
     "Attro Tribot Plastic Water Bottle @349\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vImkU6"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Attro Tribot Plastic Water Bottle @349\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vImkU6"
     }
    ]
   },
   {
    "id": 46592,
    "type": "message",
    "date": "2023-01-07T14:44:12",
    "date_unixtime": "1673082852",
    "edited": "2023-01-07T14:47:05",
    "edited_unixtime": "1673083025",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 621,
    "text": [
     "Q&Q Quartz Analog Black Dial Men's Watch @507\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WYtCz5"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Q&Q Quartz Analog Black Dial Men's Watch @507\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WYtCz5"
     }
    ]
   },
   {
    "id": 46593,
    "type": "message",
    "date": "2023-01-07T14:45:00",
    "date_unixtime": "1673082900",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 552,
    "text": [
     "Ugaoo Good Luck Jade Plant with Self Watering Pot @279\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WUmNOS"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ugaoo Good Luck Jade Plant with Self Watering Pot @279\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WUmNOS"
     }
    ]
   },
   {
    "id": 46594,
    "type": "message",
    "date": "2023-01-07T14:46:10",
    "date_unixtime": "1673082970",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 565,
    "text": [
     "Ugaoo Aglaonema Red Natural @399\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WStZeF"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ugaoo Aglaonema Red Natural @399\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WStZeF"
     }
    ]
   },
   {
    "id": 46595,
    "type": "message",
    "date": "2023-01-07T14:47:39",
    "date_unixtime": "1673083059",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 384,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/EJvwne"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/EJvwne"
     }
    ]
   },
   {
    "id": 46596,
    "type": "message",
    "date": "2023-01-07T14:48:37",
    "date_unixtime": "1673083117",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 542,
    "text": [
     "Parasnath Orange Diamond Folding Alloy Steel Ladder ",
     {
      "type": "mention",
      "text": "@3249"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CwdkFu"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Parasnath Orange Diamond Folding Alloy Steel Ladder "
     },
     {
      "type": "mention",
      "text": "@3249"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CwdkFu"
     }
    ]
   },
   {
    "id": 46597,
    "type": "message",
    "date": "2023-01-07T14:49:44",
    "date_unixtime": "1673083184",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 575,
    "text": [
     "Aks Australia Running Shoe Olive @405\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3iiUzP1"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Aks Australia Running Shoe Olive @405\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3iiUzP1"
     }
    ]
   },
   {
    "id": 46598,
    "type": "message",
    "date": "2023-01-07T14:51:13",
    "date_unixtime": "1673083273",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 445,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/xswoNC"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/xswoNC"
     }
    ]
   },
   {
    "id": 46599,
    "type": "message",
    "date": "2023-01-07T14:52:27",
    "date_unixtime": "1673083347",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 634,
    "text": [
     "Cherokee Men's Slim Casual Trousers @769\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VNpgtn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cherokee Men's Slim Casual Trousers @769\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VNpgtn"
     }
    ]
   },
   {
    "id": 46600,
    "type": "message",
    "date": "2023-01-07T14:54:07",
    "date_unixtime": "1673083447",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 631,
    "text": [
     "XYXX Men's Premium Cotton Printed Boxer Shorts @216\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Ql5Bj6"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "XYXX Men's Premium Cotton Printed Boxer Shorts @216\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Ql5Bj6"
     }
    ]
   },
   {
    "id": 46601,
    "type": "message",
    "date": "2023-01-07T14:55:00",
    "date_unixtime": "1673083500",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 622,
    "text": [
     "DHRUVI TRENDZ Women's Regular fit Top @299\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WUDU35"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "DHRUVI TRENDZ Women's Regular fit Top @299\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WUDU35"
     }
    ]
   },
   {
    "id": 46602,
    "type": "message",
    "date": "2023-01-07T14:56:07",
    "date_unixtime": "1673083567",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 499,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/7EaJN1"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/7EaJN1"
     }
    ]
   },
   {
    "id": 46603,
    "type": "message",
    "date": "2023-01-07T14:57:04",
    "date_unixtime": "1673083624",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 643,
    "text": [
     "Amazon Brand - Symbol Girls T-Shirt @282\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZaTvx4"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Symbol Girls T-Shirt @282\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZaTvx4"
     }
    ]
   },
   {
    "id": 46604,
    "type": "message",
    "date": "2023-01-07T14:58:30",
    "date_unixtime": "1673083710",
    "edited": "2023-01-07T22:54:35",
    "edited_unixtime": "1673112275",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 607,
    "text": [
     "Schneider electric Opale-RJ 11 Telephone outlet with shutter @119\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZjIIAF"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Schneider electric Opale-RJ 11 Telephone outlet with shutter @119\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZjIIAF"
     }
    ]
   },
   {
    "id": 46605,
    "type": "message",
    "date": "2023-01-07T15:00:36",
    "date_unixtime": "1673083836",
    "edited": "2023-01-07T15:05:02",
    "edited_unixtime": "1673084102",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 618,
    "text": [
     "ARNV Car Cover Compatible @504\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WL8ts5"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ARNV Car Cover Compatible @504\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WL8ts5"
     }
    ]
   },
   {
    "id": 46606,
    "type": "message",
    "date": "2023-01-07T15:01:26",
    "date_unixtime": "1673083886",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1270,
    "height": 616,
    "text": [
     "Fun Homes Plastic Leakproof Drop Oil Bottle @123\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Zg4xkK"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Fun Homes Plastic Leakproof Drop Oil Bottle @123\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Zg4xkK"
     }
    ]
   },
   {
    "id": 46607,
    "type": "message",
    "date": "2023-01-07T15:02:19",
    "date_unixtime": "1673083939",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 494,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/fe52nN"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/fe52nN"
     }
    ]
   },
   {
    "id": 46608,
    "type": "message",
    "date": "2023-01-07T15:04:20",
    "date_unixtime": "1673084060",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 530,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/pUrdyC"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/pUrdyC"
     }
    ]
   },
   {
    "id": 46609,
    "type": "message",
    "date": "2023-01-07T15:05:40",
    "date_unixtime": "1673084140",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 608,
    "text": [
     "Spanco Cross Training Duffel for Gym @312\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XbC65x"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Spanco Cross Training Duffel for Gym @312\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XbC65x"
     }
    ]
   },
   {
    "id": 46610,
    "type": "message",
    "date": "2023-01-07T15:06:41",
    "date_unixtime": "1673084201",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 529,
    "text": [
     "Wonderchef Easy Lock Stainless Steel Pressure Cooker ",
     {
      "type": "mention",
      "text": "@3299"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Cv9VXE"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Wonderchef Easy Lock Stainless Steel Pressure Cooker "
     },
     {
      "type": "mention",
      "text": "@3299"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Cv9VXE"
     }
    ]
   },
   {
    "id": 46611,
    "type": "message",
    "date": "2023-01-07T15:07:33",
    "date_unixtime": "1673084253",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 628,
    "text": [
     "Signoraware Captain Corn Cutter, Set @127\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMCoUO"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Signoraware Captain Corn Cutter, Set @127\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMCoUO"
     }
    ]
   },
   {
    "id": 46612,
    "type": "message",
    "date": "2023-01-07T15:09:13",
    "date_unixtime": "1673084353",
    "edited": "2023-01-07T19:43:20",
    "edited_unixtime": "1673100800",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 616,
    "text": [
     "Schneider electric Opale-RJ 11 Telephone outlet with shutter @119\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ilVle1"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Schneider electric Opale-RJ 11 Telephone outlet with shutter @119\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ilVle1"
     }
    ]
   },
   {
    "id": 46613,
    "type": "message",
    "date": "2023-01-07T15:10:18",
    "date_unixtime": "1673084418",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1273,
    "height": 646,
    "text": [
     "RJ ROJENO Plastic Cloth Drying Stand Hanger @280\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X9NtuQ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "RJ ROJENO Plastic Cloth Drying Stand Hanger @280\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X9NtuQ"
     }
    ]
   },
   {
    "id": 46614,
    "type": "message",
    "date": "2023-01-07T15:11:18",
    "date_unixtime": "1673084478",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 540,
    "text": [
     "Signoraware Modular Round Container Set @124\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QmjBsV"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Signoraware Modular Round Container Set @124\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QmjBsV"
     }
    ]
   },
   {
    "id": 46615,
    "type": "message",
    "date": "2023-01-07T15:12:23",
    "date_unixtime": "1673084543",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1127,
    "height": 542,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/FOHQW2"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/FOHQW2"
     }
    ]
   },
   {
    "id": 46616,
    "type": "message",
    "date": "2023-01-07T15:15:41",
    "date_unixtime": "1673084741",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 636,
    "text": [
     "DIY Crafts Rotary Tool Kit Flex Shaft Variable Speed Electric ",
     {
      "type": "mention",
      "text": "@1079"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WSuPbj"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "DIY Crafts Rotary Tool Kit Flex Shaft Variable Speed Electric "
     },
     {
      "type": "mention",
      "text": "@1079"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WSuPbj"
     }
    ]
   },
   {
    "id": 46617,
    "type": "message",
    "date": "2023-01-07T15:17:04",
    "date_unixtime": "1673084824",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 471,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/UfyS-p"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/UfyS-p"
     }
    ]
   },
   {
    "id": 46618,
    "type": "message",
    "date": "2023-01-07T15:19:34",
    "date_unixtime": "1673084974",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 614,
    "text": [
     {
      "type": "link",
      "text": "https://amzn.to/3WPeGTQ"
     },
     " @364\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WQZsOn"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://amzn.to/3WPeGTQ"
     },
     {
      "type": "plain",
      "text": " @364\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WQZsOn"
     }
    ]
   },
   {
    "id": 46619,
    "type": "message",
    "date": "2023-01-07T15:21:02",
    "date_unixtime": "1673085062",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 635,
    "text": [
     "Sukkhi Classic Butterfly Hair Clip @36\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Gocufc"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Sukkhi Classic Butterfly Hair Clip @36\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gocufc"
     }
    ]
   },
   {
    "id": 46620,
    "type": "message",
    "date": "2023-01-07T15:22:07",
    "date_unixtime": "1673085127",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 500,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/VeV1gv"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/VeV1gv"
     }
    ]
   },
   {
    "id": 46621,
    "type": "message",
    "date": "2023-01-07T15:23:54",
    "date_unixtime": "1673085234",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1130,
    "height": 527,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/Ywl3Vf"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/Ywl3Vf"
     }
    ]
   },
   {
    "id": 46622,
    "type": "message",
    "date": "2023-01-07T15:25:11",
    "date_unixtime": "1673085311",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 627,
    "text": [
     "Lee Stripes Cotton Slim Fit Mens Casual Shirt @645\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GlOskN"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Lee Stripes Cotton Slim Fit Mens Casual Shirt @645\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GlOskN"
     }
    ]
   },
   {
    "id": 46623,
    "type": "message",
    "date": "2023-01-07T15:26:21",
    "date_unixtime": "1673085381",
    "edited": "2023-01-07T15:27:03",
    "edited_unixtime": "1673085423",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 577,
    "text": [
     "Neelam Stainless Steel Neo Pressure Cooker -6.5 Litre ",
     {
      "type": "mention",
      "text": "@2443"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XaO5jZ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Neelam Stainless Steel Neo Pressure Cooker -6.5 Litre "
     },
     {
      "type": "mention",
      "text": "@2443"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XaO5jZ"
     }
    ]
   },
   {
    "id": 46624,
    "type": "message",
    "date": "2023-01-07T15:29:17",
    "date_unixtime": "1673085557",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 464,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/7wYs3s"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/7wYs3s"
     }
    ]
   },
   {
    "id": 46625,
    "type": "message",
    "date": "2023-01-07T15:35:10",
    "date_unixtime": "1673085910",
    "edited": "2023-01-07T15:38:31",
    "edited_unixtime": "1673086111",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 648,
    "text": [
     "Wolpin Table Coasters Set of 2 Sunflower Heat Insulation Pad for Big Hot Pots & Pans Casserole  @219\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VRUC22"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Wolpin Table Coasters Set of 2 Sunflower Heat Insulation Pad for Big Hot Pots & Pans Casserole  @219\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VRUC22"
     }
    ]
   },
   {
    "id": 46626,
    "type": "message",
    "date": "2023-01-07T15:37:42",
    "date_unixtime": "1673086062",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 560,
    "text": [
     "Butterfly Smart Mixer Grinder, 750W, 4 Jars ",
     {
      "type": "mention",
      "text": "@3199"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vKEHb3"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Butterfly Smart Mixer Grinder, 750W, 4 Jars "
     },
     {
      "type": "mention",
      "text": "@3199"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vKEHb3"
     }
    ]
   },
   {
    "id": 46627,
    "type": "message",
    "date": "2023-01-07T15:39:04",
    "date_unixtime": "1673086144",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 512,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/5ofntd"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/5ofntd"
     }
    ]
   },
   {
    "id": 46628,
    "type": "message",
    "date": "2023-01-07T15:40:54",
    "date_unixtime": "1673086254",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 478,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/A719mL"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/A719mL"
     }
    ]
   },
   {
    "id": 46629,
    "type": "message",
    "date": "2023-01-07T15:42:49",
    "date_unixtime": "1673086369",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 479,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/CqSBeC"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/CqSBeC"
     }
    ]
   },
   {
    "id": 46630,
    "type": "message",
    "date": "2023-01-07T15:57:37",
    "date_unixtime": "1673087257",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 614,
    "text": [
     "Amazon Brand - Solimo Leatherette Steering Cover @229\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jXijsu"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Solimo Leatherette Steering Cover @229\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jXijsu"
     }
    ]
   },
   {
    "id": 46631,
    "type": "message",
    "date": "2023-01-07T15:59:56",
    "date_unixtime": "1673087396",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 628,
    "text": [
     "Cello Classic Plastic Pedal Bin @312\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3INOZz5"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cello Classic Plastic Pedal Bin @312\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3INOZz5"
     }
    ]
   },
   {
    "id": 46632,
    "type": "message",
    "date": "2023-01-07T16:01:09",
    "date_unixtime": "1673087469",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 562,
    "text": [
     "Centuary Mattresses Sleepables 6 Inch Bonnell Spring King Size Mattress with Antimicrobial Foam ",
     {
      "type": "mention",
      "text": "@7109"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VR4VU0"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Centuary Mattresses Sleepables 6 Inch Bonnell Spring King Size Mattress with Antimicrobial Foam "
     },
     {
      "type": "mention",
      "text": "@7109"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VR4VU0"
     }
    ]
   },
   {
    "id": 46633,
    "type": "message",
    "date": "2023-01-07T16:01:59",
    "date_unixtime": "1673087519",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 544,
    "text": [
     "Tresemme Keratin Smooth Shampoo, @423\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Qouk65"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Tresemme Keratin Smooth Shampoo, @423\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Qouk65"
     }
    ]
   },
   {
    "id": 46634,
    "type": "message",
    "date": "2023-01-07T16:03:29",
    "date_unixtime": "1673087609",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 450,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/aCBF7E"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/aCBF7E"
     }
    ]
   },
   {
    "id": 46635,
    "type": "message",
    "date": "2023-01-07T16:05:29",
    "date_unixtime": "1673087729",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 782,
    "height": 526,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/PXJkgO"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/PXJkgO"
     }
    ]
   },
   {
    "id": 46636,
    "type": "message",
    "date": "2023-01-07T16:07:21",
    "date_unixtime": "1673087841",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 587,
    "text": [
     "Longies Women Joggers @277\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3k0RK5L"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Longies Women Joggers @277\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3k0RK5L"
     }
    ]
   },
   {
    "id": 46637,
    "type": "message",
    "date": "2023-01-07T16:08:58",
    "date_unixtime": "1673087938",
    "edited": "2023-01-07T23:55:13",
    "edited_unixtime": "1673115913",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 605,
    "text": [
     "Nubeno Men's @347\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ig5EjT"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Nubeno Men's @347\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ig5EjT"
     }
    ]
   },
   {
    "id": 46638,
    "type": "message",
    "date": "2023-01-07T16:09:46",
    "date_unixtime": "1673087986",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 620,
    "text": [
     "Amazon Brand - Jam & Honey Baby-Girls Casual Pants @193\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X9PU0s"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Jam & Honey Baby-Girls Casual Pants @193\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X9PU0s"
     }
    ]
   },
   {
    "id": 46639,
    "type": "message",
    "date": "2023-01-07T16:11:30",
    "date_unixtime": "1673088090",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 611,
    "text": [
     "Ambrane 12W Fast Car Charger, Dual USB Output, Multi-Layer Protection, Fast Charging, Compatible with All Cars @199\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Iw7urh"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ambrane 12W Fast Car Charger, Dual USB Output, Multi-Layer Protection, Fast Charging, Compatible with All Cars @199\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Iw7urh"
     }
    ]
   },
   {
    "id": 46640,
    "type": "message",
    "date": "2023-01-07T16:14:41",
    "date_unixtime": "1673088281",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 643,
    "text": [
     "EYEBOGLER Men T-Shirt @273\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMs1k4"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "EYEBOGLER Men T-Shirt @273\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMs1k4"
     }
    ]
   },
   {
    "id": 46641,
    "type": "message",
    "date": "2023-01-07T16:15:26",
    "date_unixtime": "1673088326",
    "edited": "2023-01-07T16:57:01",
    "edited_unixtime": "1673090821",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 617,
    "text": [
     "Happilo Premium International Omani Dates @239\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IwXVJ0"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Happilo Premium International Omani Dates @239\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IwXVJ0"
     }
    ]
   },
   {
    "id": 46642,
    "type": "message",
    "date": "2023-01-07T16:19:06",
    "date_unixtime": "1673088546",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 622,
    "text": [
     "FabAlley Women's Regular Fit Tops @177\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3isEdTM"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "FabAlley Women's Regular Fit Tops @177\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3isEdTM"
     }
    ]
   },
   {
    "id": 46643,
    "type": "message",
    "date": "2023-01-07T16:38:37",
    "date_unixtime": "1673089717",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 602,
    "text": [
     "Nivia 5256 Paws School Bag @362\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GM6qhO"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Nivia 5256 Paws School Bag @362\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GM6qhO"
     }
    ]
   },
   {
    "id": 46644,
    "type": "message",
    "date": "2023-01-07T16:39:45",
    "date_unixtime": "1673089785",
    "edited": "2023-01-07T16:42:06",
    "edited_unixtime": "1673089926",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 613,
    "text": [
     "JINPINGHP Wall Light @420\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GM5CcF"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "JINPINGHP Wall Light @420\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GM5CcF"
     }
    ]
   },
   {
    "id": 46645,
    "type": "message",
    "date": "2023-01-07T16:40:43",
    "date_unixtime": "1673089843",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 615,
    "text": [
     "ANTS Women's Wool Sweatshirt @249\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Ixjol0"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ANTS Women's Wool Sweatshirt @249\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Ixjol0"
     }
    ]
   },
   {
    "id": 46646,
    "type": "message",
    "date": "2023-01-07T16:42:26",
    "date_unixtime": "1673089946",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 584,
    "text": [
     "Centrino mens 3651 Sandals @208\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IA49Yn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Centrino mens 3651 Sandals @208\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IA49Yn"
     }
    ]
   },
   {
    "id": 46647,
    "type": "message",
    "date": "2023-01-07T16:43:21",
    "date_unixtime": "1673090001",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 604,
    "text": [
     "Visko Tools 209 Circlip Plier @129\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3iht88j"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Visko Tools 209 Circlip Plier @129\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3iht88j"
     }
    ]
   },
   {
    "id": 46648,
    "type": "message",
    "date": "2023-01-07T16:44:19",
    "date_unixtime": "1673090059",
    "edited": "2023-01-07T18:29:20",
    "edited_unixtime": "1673096360",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 596,
    "text": [
     "Harpa Women's Tights @421\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CxfCnH"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Harpa Women's Tights @421\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CxfCnH"
     }
    ]
   },
   {
    "id": 46649,
    "type": "message",
    "date": "2023-01-07T16:45:14",
    "date_unixtime": "1673090114",
    "edited": "2023-01-07T18:29:23",
    "edited_unixtime": "1673096363",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 588,
    "text": [
     "Cloth Theory Men's Regular Track Pants @239\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X96cY5"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cloth Theory Men's Regular Track Pants @239\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X96cY5"
     }
    ]
   },
   {
    "id": 46650,
    "type": "message",
    "date": "2023-01-07T16:46:17",
    "date_unixtime": "1673090177",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 560,
    "text": [
     "BLACK+DECKER WDBD10 10-Litre, 1200 Watt , 16 KPa High Suction Wet and Dry Vacuum Cleaner ",
     {
      "type": "mention",
      "text": "@4373"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WV8ZUk"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "BLACK+DECKER WDBD10 10-Litre, 1200 Watt , 16 KPa High Suction Wet and Dry Vacuum Cleaner "
     },
     {
      "type": "mention",
      "text": "@4373"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WV8ZUk"
     }
    ]
   },
   {
    "id": 46651,
    "type": "message",
    "date": "2023-01-07T16:48:41",
    "date_unixtime": "1673090321",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 837,
    "height": 467,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/rmdvNV"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/rmdvNV"
     }
    ]
   },
   {
    "id": 46652,
    "type": "message",
    "date": "2023-01-07T16:50:41",
    "date_unixtime": "1673090441",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1132,
    "height": 506,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/GYUDAj"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/GYUDAj"
     }
    ]
   },
   {
    "id": 46653,
    "type": "message",
    "date": "2023-01-07T16:51:55",
    "date_unixtime": "1673090515",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 622,
    "text": [
     "Da URBAN® Smiley Height Adjustable & Revolving Bar Stool ",
     {
      "type": "mention",
      "text": "@2529"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMHRei"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Da URBAN® Smiley Height Adjustable & Revolving Bar Stool "
     },
     {
      "type": "mention",
      "text": "@2529"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMHRei"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46654,
    "type": "message",
    "date": "2023-01-07T17:37:05",
    "date_unixtime": "1673093225",
    "edited": "2023-01-07T17:37:45",
    "edited_unixtime": "1673093265",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "text": [
     {
      "type": "bold",
      "text": "Amazon Home & Kitchen Offer : Flat ₹150 Cashback On Min Order ₹1500 | ₹350 cashback on ₹3000 min order"
     },
     "🚀🚀🚀\n\nCollect ₹150 cb Offer :",
     {
      "type": "link",
      "text": "https://amzn.to/3IA7iYb"
     },
     " \nCollect ₹350 cb Offer (Specific Accounts) :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3QleusY"
     },
     "\n\n",
     {
      "type": "bold",
      "text": "Buy from here :"
     },
     "  ",
     {
      "type": "link",
      "text": "https://amzn.to/3VShiPB"
     },
     "\n \n",
     {
      "type": "bold",
      "text": "Buying Suggestions ⬇️⬇️\n\n"
     },
     "For 150 cb :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3Ggwxfq"
     },
     "\nFor 350 cb :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3is6M3L"
     },
     "\nBest for both  ",
     {
      "type": "link",
      "text": "https://amzn.to/3CuDY1v"
     },
     "\n\n50% off : ",
     {
      "type": "link",
      "text": "https://amzn.to/3GoHN9J"
     },
     "\n60% off :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3CvNEZr"
     },
     "\n70% off :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3GMduuN"
     },
     "\n\nGeyser :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3VTDFE8"
     },
     "\nRoom heater :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3VSrHe6"
     },
     "\nMore :  ",
     {
      "type": "link",
      "text": "https://amzn.to/3GMR2Sj"
     },
     "\n\n",
     {
      "type": "bold",
      "text": "Offer Expires Tomorrow. Hurry"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "bold",
      "text": "Amazon Home & Kitchen Offer : Flat ₹150 Cashback On Min Order ₹1500 | ₹350 cashback on ₹3000 min order"
     },
     {
      "type": "plain",
      "text": "🚀🚀🚀\n\nCollect ₹150 cb Offer :"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IA7iYb"
     },
     {
      "type": "plain",
      "text": " \nCollect ₹350 cb Offer (Specific Accounts) :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QleusY"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "bold",
      "text": "Buy from here :"
     },
     {
      "type": "plain",
      "text": "  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VShiPB"
     },
     {
      "type": "plain",
      "text": "\n \n"
     },
     {
      "type": "bold",
      "text": "Buying Suggestions ⬇️⬇️\n\n"
     },
     {
      "type": "plain",
      "text": "For 150 cb :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Ggwxfq"
     },
     {
      "type": "plain",
      "text": "\nFor 350 cb :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3is6M3L"
     },
     {
      "type": "plain",
      "text": "\nBest for both  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CuDY1v"
     },
     {
      "type": "plain",
      "text": "\n\n50% off : "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GoHN9J"
     },
     {
      "type": "plain",
      "text": "\n60% off :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CvNEZr"
     },
     {
      "type": "plain",
      "text": "\n70% off :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GMduuN"
     },
     {
      "type": "plain",
      "text": "\n\nGeyser :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VTDFE8"
     },
     {
      "type": "plain",
      "text": "\nRoom heater :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VSrHe6"
     },
     {
      "type": "plain",
      "text": "\nMore :  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GMR2Sj"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "bold",
      "text": "Offer Expires Tomorrow. Hurry"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46655,
    "type": "message",
    "date": "2023-01-07T17:38:19",
    "date_unixtime": "1673093299",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 604,
    "text": [
     "ZEBRONICS Iconic LITE AMOLED Smartwatch  ",
     {
      "type": "mention",
      "text": "@2999"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3im7wrb"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ZEBRONICS Iconic LITE AMOLED Smartwatch  "
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
      "text": "https://amzn.to/3im7wrb"
     }
    ]
   },
   {
    "id": 46656,
    "type": "message",
    "date": "2023-01-07T17:38:47",
    "date_unixtime": "1673093327",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 509,
    "text": [
     "Milton Micro Plastic Casserole Set of 3, Maroon  @149\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ip6IBV"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Milton Micro Plastic Casserole Set of 3, Maroon  @149\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ip6IBV"
     }
    ]
   },
   {
    "id": 46657,
    "type": "message",
    "date": "2023-01-07T17:39:25",
    "date_unixtime": "1673093365",
    "edited": "2023-01-07T17:41:58",
    "edited_unixtime": "1673093518",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 530,
    "text": [
     "HP ProBook 450 G8, 11th Gen Intel Core i5 \n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jZmqEk"
     },
     "\n\n✅Apply 40% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "HP ProBook 450 G8, 11th Gen Intel Core i5 \n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jZmqEk"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply 40% coupon"
     }
    ]
   },
   {
    "id": 46658,
    "type": "message",
    "date": "2023-01-07T17:39:56",
    "date_unixtime": "1673093396",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 562,
    "text": [
     "Savlon Multipurpose Disinfectant Cleaner Liquid, 500ml ( Pack of 2)   @169\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Cv23Fx"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Savlon Multipurpose Disinfectant Cleaner Liquid, 500ml ( Pack of 2)   @169\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Cv23Fx"
     }
    ]
   },
   {
    "id": 46659,
    "type": "message",
    "date": "2023-01-07T18:59:55",
    "date_unixtime": "1673098195",
    "edited": "2023-01-08T07:17:41",
    "edited_unixtime": "1673142461",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 608,
    "text": [
     "Amazon Brand - House & Shields Men's Skinny Jeans  @561\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IsGKrS"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - House & Shields Men's Skinny Jeans  @561\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IsGKrS"
     }
    ]
   },
   {
    "id": 46660,
    "type": "message",
    "date": "2023-01-07T19:00:22",
    "date_unixtime": "1673098222",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 561,
    "text": [
     "Ben Martin Men's Quilted Bomber Jacket @501\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VUvMhY"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ben Martin Men's Quilted Bomber Jacket @501\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VUvMhY"
     }
    ]
   },
   {
    "id": 46661,
    "type": "message",
    "date": "2023-01-07T19:00:51",
    "date_unixtime": "1673098251",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 560,
    "text": [
     "Amazon Brand - House & Shields Men Sweatshirt  @389\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GrPonV"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - House & Shields Men Sweatshirt  @389\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GrPonV"
     }
    ]
   },
   {
    "id": 46662,
    "type": "message",
    "date": "2023-01-07T19:01:22",
    "date_unixtime": "1673098282",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1248,
    "height": 457,
    "text": [
     "58% Off : Bumtum Baby Pull-Up Diaper Pants (216 Pieces, M) @ 1379\n\n",
     {
      "type": "link",
      "text": "https://extp.in/Y2TJYB"
     },
     "\n\nMore Min 50% Off : ",
     {
      "type": "link",
      "text": "https://extp.in/ibsacr"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "58% Off : Bumtum Baby Pull-Up Diaper Pants (216 Pieces, M) @ 1379\n\n"
     },
     {
      "type": "link",
      "text": "https://extp.in/Y2TJYB"
     },
     {
      "type": "plain",
      "text": "\n\nMore Min 50% Off : "
     },
     {
      "type": "link",
      "text": "https://extp.in/ibsacr"
     }
    ]
   },
   {
    "id": 46663,
    "type": "message",
    "date": "2023-01-07T19:01:56",
    "date_unixtime": "1673098316",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 599,
    "text": [
     "Fire-Boltt Ninja Call Pro Smart Watch  ",
     {
      "type": "mention",
      "text": "@1799"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GrCar6"
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
      "text": "https://amzn.to/3GrCar6"
     }
    ]
   },
   {
    "id": 46664,
    "type": "message",
    "date": "2023-01-07T19:02:19",
    "date_unixtime": "1673098339",
    "edited": "2023-01-07T23:18:16",
    "edited_unixtime": "1673113696",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 485,
    "text": [
     "💥Simmtronics 4GB DDR3 Laptop RAM 1600 MHz (PC 12800)\n\n💰Deal @ 889🔥.   ❌Reg @ 1500+\n\n🔗 ",
     {
      "type": "link",
      "text": "https://amzn.to/3imjelG"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "💥Simmtronics 4GB DDR3 Laptop RAM 1600 MHz (PC 12800)\n\n💰Deal @ 889🔥.   ❌Reg @ 1500+\n\n🔗 "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3imjelG"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46665,
    "type": "message",
    "date": "2023-01-07T19:02:42",
    "date_unixtime": "1673098362",
    "edited": "2023-01-07T19:18:45",
    "edited_unixtime": "1673099325",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 506,
    "text": [
     "💥Nuts About You CHIA Seeds, 200 g\n\n💰Deal @ 149🔥.     ❌Mrp @ 300\n\n🔗 ",
     {
      "type": "link",
      "text": "https://amzn.to/3ZlZJdy"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "💥Nuts About You CHIA Seeds, 200 g\n\n💰Deal @ 149🔥.     ❌Mrp @ 300\n\n🔗 "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZlZJdy"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46666,
    "type": "message",
    "date": "2023-01-07T19:22:22",
    "date_unixtime": "1673099542",
    "edited": "2023-01-08T08:30:55",
    "edited_unixtime": "1673146855",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 497,
    "text": [
     "Lowest 😱😱😱\n\n💥Apple iphone 14  @ 69990🔥\n\n🔗",
     {
      "type": "link",
      "text": "https://amzn.to/3Iw2vHp"
     },
     " \n\n💥iPhone 14 Plus @ 78999🔥\n\n🔗 ",
     {
      "type": "link",
      "text": "https://extp.in/YOgPLN"
     },
     "\n\n✅4000 off with hdfc cards"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Lowest 😱😱😱\n\n💥Apple iphone 14  @ 69990🔥\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Iw2vHp"
     },
     {
      "type": "plain",
      "text": " \n\n💥iPhone 14 Plus @ 78999🔥\n\n🔗 "
     },
     {
      "type": "link",
      "text": "https://extp.in/YOgPLN"
     },
     {
      "type": "plain",
      "text": "\n\n✅4000 off with hdfc cards"
     }
    ]
   },
   {
    "id": 46667,
    "type": "message",
    "date": "2023-01-07T19:22:50",
    "date_unixtime": "1673099570",
    "edited": "2023-01-07T22:20:58",
    "edited_unixtime": "1673110258",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1192,
    "height": 462,
    "text": [
     "💥CANDY 170 L Direct Cool Single Door 2 Star Refrigerator \n\n💰Deal @ 8541🔥with hdfc cards\n\n❌ Regular price @ 10k+\n\n🔗",
     {
      "type": "link",
      "text": "https://extp.in/OPidtm"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "💥CANDY 170 L Direct Cool Single Door 2 Star Refrigerator \n\n💰Deal @ 8541🔥with hdfc cards\n\n❌ Regular price @ 10k+\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://extp.in/OPidtm"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46668,
    "type": "message",
    "date": "2023-01-07T19:23:15",
    "date_unixtime": "1673099595",
    "edited": "2023-01-08T07:45:58",
    "edited_unixtime": "1673144158",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 544,
    "text": [
     "💥HP w100 480P 30 FPS Digital Webcam with Built-in Mic \n\n💰Deal @ 500🔥.    ❌Reg @ 800\n\n🔗 ",
     {
      "type": "link",
      "text": "https://amzn.to/3CuL4mF"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "💥HP w100 480P 30 FPS Digital Webcam with Built-in Mic \n\n💰Deal @ 500🔥.    ❌Reg @ 800\n\n🔗 "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CuL4mF"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46669,
    "type": "message",
    "date": "2023-01-07T19:23:34",
    "date_unixtime": "1673099614",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "text": [
     "Chana JOR Garam / Low Fat Black Chana JOR Garam (Namkeen Snacks) - 400 Gm  @189\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XaOdQr"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Chana JOR Garam / Low Fat Black Chana JOR Garam (Namkeen Snacks) - 400 Gm  @189\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XaOdQr"
     }
    ]
   },
   {
    "id": 46670,
    "type": "message",
    "date": "2023-01-07T19:24:07",
    "date_unixtime": "1673099647",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1229,
    "height": 459,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/xdLulm"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/xdLulm"
     }
    ]
   },
   {
    "id": 46671,
    "type": "message",
    "date": "2023-01-07T19:24:37",
    "date_unixtime": "1673099677",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 376,
    "text": [
     "Relon 6X 36A Laserjet Toner Cartridge\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WUeR0g"
     },
     "\n\n✅Apply 65% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Relon 6X 36A Laserjet Toner Cartridge\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WUeR0g"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply 65% coupon"
     }
    ]
   },
   {
    "id": 46672,
    "type": "message",
    "date": "2023-01-07T19:25:54",
    "date_unixtime": "1673099754",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 575,
    "text": [
     "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone  @599\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GniEMs"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "ZEBRONICS Zeb-Thunder Wireless Over Ear BT Headphone  @599\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GniEMs"
     }
    ]
   },
   {
    "id": 46673,
    "type": "message",
    "date": "2023-01-07T19:26:21",
    "date_unixtime": "1673099781",
    "edited": "2023-01-07T19:26:31",
    "edited_unixtime": "1673099791",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 409,
    "text": [
     "Cisco Business 141ACM Wi-Fi Mesh Extender\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QlkIJs"
     },
     "\n\n✅Apply 65% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cisco Business 141ACM Wi-Fi Mesh Extender\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QlkIJs"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply 65% coupon"
     }
    ]
   },
   {
    "id": 46674,
    "type": "message",
    "date": "2023-01-07T19:26:55",
    "date_unixtime": "1673099815",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 596,
    "text": [
     "Aroma® NB119 Belief Bluetooth Wireless  @419\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Gn01sc"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Aroma® NB119 Belief Bluetooth Wireless  @419\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gn01sc"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46675,
    "type": "message",
    "date": "2023-01-07T19:27:48",
    "date_unixtime": "1673099868",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1270,
    "height": 526,
    "text": [
     "Golden Lord Ganesha with Diya on Leaf Handcrafted Metal Showpiece  @190\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IrCskx"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Golden Lord Ganesha with Diya on Leaf Handcrafted Metal Showpiece  @190\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IrCskx"
     }
    ]
   },
   {
    "id": 46676,
    "type": "message",
    "date": "2023-01-07T19:28:34",
    "date_unixtime": "1673099914",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1070,
    "height": 416,
    "text": [
     "JINPINGHP Wall Light/Wall Lamp to Décor Home/Living  @420\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ijWse7"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "JINPINGHP Wall Light/Wall Lamp to Décor Home/Living  @420\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ijWse7"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46677,
    "type": "message",
    "date": "2023-01-07T19:28:57",
    "date_unixtime": "1673099937",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 408,
    "text": [
     "Havells Antilia 1200mm Ceiling Fan  ",
     {
      "type": "mention",
      "text": "@2499"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3XevDa5"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Havells Antilia 1200mm Ceiling Fan  "
     },
     {
      "type": "mention",
      "text": "@2499"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3XevDa5"
     }
    ]
   },
   {
    "id": 46678,
    "type": "message",
    "date": "2023-01-07T19:29:33",
    "date_unixtime": "1673099973",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 619,
    "text": [
     "AmazonBasics Gaming Chat Headset for PlayStation 4 with Microphone - 1,21 m Cable, Black  @638\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZikdE9"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AmazonBasics Gaming Chat Headset for PlayStation 4 with Microphone - 1,21 m Cable, Black  @638\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZikdE9"
     }
    ]
   },
   {
    "id": 46679,
    "type": "message",
    "date": "2023-01-07T19:30:02",
    "date_unixtime": "1673100002",
    "edited": "2023-01-07T23:18:21",
    "edited_unixtime": "1673113701",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 504,
    "text": [
     "French Connection Spring-Summer 2021 Analog Dial Women's Watch  ",
     {
      "type": "mention",
      "text": "@1529"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ihEBET"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "French Connection Spring-Summer 2021 Analog Dial Women's Watch  "
     },
     {
      "type": "mention",
      "text": "@1529"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ihEBET"
     }
    ]
   },
   {
    "id": 46680,
    "type": "message",
    "date": "2023-01-07T19:30:31",
    "date_unixtime": "1673100031",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 600,
    "text": [
     "Ajanta Quartz Watch Mens Watch, Minimalist Fashion  @557\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GpghZz"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ajanta Quartz Watch Mens Watch, Minimalist Fashion  @557\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GpghZz"
     }
    ]
   },
   {
    "id": 46681,
    "type": "message",
    "date": "2023-01-07T19:30:53",
    "date_unixtime": "1673100053",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 588,
    "text": [
     "Bewakoof Men Coca cola Tape Printed Cotton Joggers  @368\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZkdPMr"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Bewakoof Men Coca cola Tape Printed Cotton Joggers  @368\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZkdPMr"
     }
    ]
   },
   {
    "id": 46682,
    "type": "message",
    "date": "2023-01-07T19:31:28",
    "date_unixtime": "1673100088",
    "edited": "2023-01-07T20:00:01",
    "edited_unixtime": "1673101801",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 557,
    "text": [
     "Kraasa Latest Comfort Flip Flops, Colors Men's Hawaii Slippers, Slides White  @179\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Crcxpl"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Kraasa Latest Comfort Flip Flops, Colors Men's Hawaii Slippers, Slides White  @179\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Crcxpl"
     }
    ]
   },
   {
    "id": 46683,
    "type": "message",
    "date": "2023-01-07T19:32:01",
    "date_unixtime": "1673100121",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 547,
    "text": [
     "Crompton Cito Highspeed Personal 225 MM Table Fan ",
     {
      "type": "mention",
      "text": "@1499"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QqYEgv"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Crompton Cito Highspeed Personal 225 MM Table Fan "
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
      "text": "https://amzn.to/3QqYEgv"
     }
    ]
   },
   {
    "id": 46684,
    "type": "message",
    "date": "2023-01-07T19:34:39",
    "date_unixtime": "1673100279",
    "edited": "2023-01-07T19:34:52",
    "edited_unixtime": "1673100292",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 519,
    "text": [
     "80% Off: ZEBRONICS Yoga N2 RGB Neckband @791 \n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IO4gQr"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "80% Off: ZEBRONICS Yoga N2 RGB Neckband @791 \n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IO4gQr"
     }
    ]
   },
   {
    "id": 46685,
    "type": "message",
    "date": "2023-01-07T19:35:02",
    "date_unixtime": "1673100302",
    "edited": "2023-01-07T20:40:57",
    "edited_unixtime": "1673104257",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1253,
    "height": 414,
    "text": [
     "AmazonBasics - Non-Stick Cookware Set without Induction Base (Black) 8 Piece   @ 2649  \n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3vJpGWP"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AmazonBasics - Non-Stick Cookware Set without Induction Base (Black) 8 Piece   @ 2649  \n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vJpGWP"
     }
    ]
   },
   {
    "id": 46686,
    "type": "message",
    "date": "2023-01-07T20:24:17",
    "date_unixtime": "1673103257",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1238,
    "height": 468,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/kZNWks"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/kZNWks"
     }
    ]
   },
   {
    "id": 46688,
    "type": "message",
    "date": "2023-01-07T20:44:42",
    "date_unixtime": "1673104482",
    "edited": "2023-01-07T22:26:03",
    "edited_unixtime": "1673110563",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 729,
    "text": [
     "🔗",
     {
      "type": "link",
      "text": "https://youtube.com/@vtrfacts"
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
      "text": "https://youtube.com/@vtrfacts"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46689,
    "type": "message",
    "date": "2023-01-07T20:55:37",
    "date_unixtime": "1673105137",
    "edited": "2023-01-08T07:47:05",
    "edited_unixtime": "1673144225",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 472,
    "text": [
     "LILA DRY FRUITS 4 in1 Superseed Mix 250gms @429\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IwCyqZ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "LILA DRY FRUITS 4 in1 Superseed Mix 250gms @429\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IwCyqZ"
     }
    ]
   },
   {
    "id": 46690,
    "type": "message",
    "date": "2023-01-07T20:56:04",
    "date_unixtime": "1673105164",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 410,
    "text": [
     "Bajaj Flashy 1000 Watts Radiant Room Heater  @799\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3X9pXPf"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj Flashy 1000 Watts Radiant Room Heater  @799\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3X9pXPf"
     }
    ]
   },
   {
    "id": 46691,
    "type": "message",
    "date": "2023-01-07T20:56:32",
    "date_unixtime": "1673105192",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1277,
    "height": 528,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/V6KLwm"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/V6KLwm"
     }
    ]
   },
   {
    "id": 46692,
    "type": "message",
    "date": "2023-01-07T20:57:15",
    "date_unixtime": "1673105235",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 612,
    "text": [
     "AGARO Supreme Cordless Stick Vacuum Cleaner,2in1\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QlXXF8"
     },
     "\n\n✅Apply ₹500 coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AGARO Supreme Cordless Stick Vacuum Cleaner,2in1\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QlXXF8"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply ₹500 coupon"
     }
    ]
   },
   {
    "id": 46693,
    "type": "message",
    "date": "2023-01-07T20:57:55",
    "date_unixtime": "1673105275",
    "edited": "2023-01-07T23:04:37",
    "edited_unixtime": "1673112877",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 600,
    "text": [
     "Havells Aquas 7 Litre RO+UF with 5 Stages Purification Water Purifier  ",
     {
      "type": "mention",
      "text": "@7599"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3k0dIW9"
     },
     "\n\n✅Apply ₹400 coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Havells Aquas 7 Litre RO+UF with 5 Stages Purification Water Purifier  "
     },
     {
      "type": "mention",
      "text": "@7599"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3k0dIW9"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply ₹400 coupon"
     }
    ]
   },
   {
    "id": 46694,
    "type": "message",
    "date": "2023-01-07T20:58:20",
    "date_unixtime": "1673105300",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 437,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/oAnB2I"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/oAnB2I"
     }
    ]
   },
   {
    "id": 46695,
    "type": "message",
    "date": "2023-01-07T20:58:59",
    "date_unixtime": "1673105339",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 521,
    "text": [
     "MICROFIT Smart Watch with Built in Oximeter \n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GNVwrW"
     },
     "\n\n✅Apply 65% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "MICROFIT Smart Watch with Built in Oximeter \n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GNVwrW"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply 65% coupon"
     }
    ]
   },
   {
    "id": 46696,
    "type": "message",
    "date": "2023-01-07T20:59:36",
    "date_unixtime": "1673105376",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 541,
    "text": [
     "truke BTG Alpha True Gaming Earbuds   @899\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CvfN2S"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "truke BTG Alpha True Gaming Earbuds   @899\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CvfN2S"
     }
    ]
   },
   {
    "id": 46697,
    "type": "message",
    "date": "2023-01-07T21:00:18",
    "date_unixtime": "1673105418",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 575,
    "text": [
     "AMOLDO Women's Soft Knitted Winter Warm Woolen Cap with Woolen Lovely Muffler @399\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IwbOqP"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AMOLDO Women's Soft Knitted Winter Warm Woolen Cap with Woolen Lovely Muffler @399\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IwbOqP"
     }
    ]
   },
   {
    "id": 46698,
    "type": "message",
    "date": "2023-01-07T21:00:44",
    "date_unixtime": "1673105444",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 606,
    "text": [
     "DeFyned Personal Travel Blender for Fresh Juice, @899\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QpjcWJ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "DeFyned Personal Travel Blender for Fresh Juice, @899\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QpjcWJ"
     }
    ]
   },
   {
    "id": 46699,
    "type": "message",
    "date": "2023-01-07T21:01:10",
    "date_unixtime": "1673105470",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 574,
    "text": [
     "SVS ONLINE Aluminium Alloy Cracker Tool For Walnuts Nut Cutter Steel Walnut Clamp Crackers @379\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Gs4DwS"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "SVS ONLINE Aluminium Alloy Cracker Tool For Walnuts Nut Cutter Steel Walnut Clamp Crackers @379\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gs4DwS"
     }
    ]
   },
   {
    "id": 46700,
    "type": "message",
    "date": "2023-01-07T21:01:42",
    "date_unixtime": "1673105502",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1251,
    "height": 502,
    "text": [
     "R-NXT RX-346 Smart True Wireless Stereo Earbuds\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Gpo6hT"
     },
     "\n\n✅ Apply 65% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "R-NXT RX-346 Smart True Wireless Stereo Earbuds\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gpo6hT"
     },
     {
      "type": "plain",
      "text": "\n\n✅ Apply 65% coupon"
     }
    ]
   },
   {
    "id": 46701,
    "type": "message",
    "date": "2023-01-07T22:23:45",
    "date_unixtime": "1673110425",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 995,
    "height": 492,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/kCjPRY"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/kCjPRY"
     }
    ]
   },
   {
    "id": 46702,
    "type": "message",
    "date": "2023-01-07T22:24:13",
    "date_unixtime": "1673110453",
    "edited": "2023-01-08T01:15:12",
    "edited_unixtime": "1673120712",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1258,
    "height": 438,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/BWoSVn"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/BWoSVn"
     }
    ]
   },
   {
    "id": 46703,
    "type": "message",
    "date": "2023-01-07T22:24:41",
    "date_unixtime": "1673110481",
    "edited": "2023-01-07T22:26:09",
    "edited_unixtime": "1673110569",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1236,
    "height": 455,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/eqqmhe"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/eqqmhe"
     }
    ]
   },
   {
    "id": 46704,
    "type": "message",
    "date": "2023-01-07T22:25:09",
    "date_unixtime": "1673110509",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 604,
    "text": [
     "Ant Value FKAPU05 1600 DPI Wireless Mouse - Light Purple  @349\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WTyIN7"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Ant Value FKAPU05 1600 DPI Wireless Mouse - Light Purple  @349\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WTyIN7"
     }
    ]
   },
   {
    "id": 46705,
    "type": "message",
    "date": "2023-01-07T22:34:05",
    "date_unixtime": "1673111045",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1230,
    "height": 459,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/TIlIbq"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/TIlIbq"
     }
    ]
   },
   {
    "id": 46706,
    "type": "message",
    "date": "2023-01-07T22:34:29",
    "date_unixtime": "1673111069",
    "edited": "2023-01-07T23:04:18",
    "edited_unixtime": "1673112858",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 607,
    "text": [
     "Dry Anjir (Dried Figs) (1kg)@ 660\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Cu0nMc"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Dry Anjir (Dried Figs) (1kg)@ 660\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Cu0nMc"
     }
    ]
   },
   {
    "id": 46707,
    "type": "message",
    "date": "2023-01-07T22:35:13",
    "date_unixtime": "1673111113",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 645,
    "text": [
     "Loot : Oshotto 500ml Fire Stop Spray Safety for Car, Home, Kitchen,\n\n💰Deal @ 70🔥.   ❌Reg @ 200+\n\n🔗",
     {
      "type": "link",
      "text": "https://amzn.to/3ikSYrM"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Loot : Oshotto 500ml Fire Stop Spray Safety for Car, Home, Kitchen,\n\n💰Deal @ 70🔥.   ❌Reg @ 200+\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ikSYrM"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46708,
    "type": "message",
    "date": "2023-01-07T22:35:42",
    "date_unixtime": "1673111142",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 516,
    "text": [
     "Eureka Forbes Quick Clean DX Vacuum Cleaner with 1200 Watts Powerful Suction Control,  ",
     {
      "type": "mention",
      "text": "@3799"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GKWuFs"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Eureka Forbes Quick Clean DX Vacuum Cleaner with 1200 Watts Powerful Suction Control,  "
     },
     {
      "type": "mention",
      "text": "@3799"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GKWuFs"
     }
    ]
   },
   {
    "id": 46709,
    "type": "message",
    "date": "2023-01-07T22:36:08",
    "date_unixtime": "1673111168",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "text": [
     "Colorbar On the Go Nail Lacquer Remover Wipes, Rainbow Bouquet, 30 Pieces @67\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CxLmJn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Colorbar On the Go Nail Lacquer Remover Wipes, Rainbow Bouquet, 30 Pieces @67\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CxLmJn"
     }
    ]
   },
   {
    "id": 46710,
    "type": "message",
    "date": "2023-01-07T22:36:32",
    "date_unixtime": "1673111192",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 599,
    "text": [
     "FACESCANADA Nail Enamel Winter Collection, Brown, 9 ml @79\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IAxP7J"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "FACESCANADA Nail Enamel Winter Collection, Brown, 9 ml @79\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IAxP7J"
     }
    ]
   },
   {
    "id": 46711,
    "type": "message",
    "date": "2023-01-07T22:37:05",
    "date_unixtime": "1673111225",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 584,
    "text": [
     "Women's Rayon Maxi Dress at Rs.499\n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3ipixYY"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Women's Rayon Maxi Dress at Rs.499\n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ipixYY"
     }
    ]
   },
   {
    "id": 46712,
    "type": "message",
    "date": "2023-01-07T22:37:40",
    "date_unixtime": "1673111260",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 620,
    "text": [
     "Amazon Brand - Symbol Analog Unisex Watch @685\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3QoMGEf"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amazon Brand - Symbol Analog Unisex Watch @685\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3QoMGEf"
     }
    ]
   },
   {
    "id": 46713,
    "type": "message",
    "date": "2023-01-07T22:38:11",
    "date_unixtime": "1673111291",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1267,
    "height": 532,
    "text": [
     "Syska HBS300 Salon Finish Hair Straightening  @ 1749\n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3Gs8RVx"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Syska HBS300 Salon Finish Hair Straightening  @ 1749\n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Gs8RVx"
     }
    ]
   },
   {
    "id": 46714,
    "type": "message",
    "date": "2023-01-07T22:40:14",
    "date_unixtime": "1673111414",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1178,
    "height": 459,
    "text": [
     "Scorist Popular California Almonds (250 g) @ 196\n\n ",
     {
      "type": "link",
      "text": "https://extp.in/RkMiu6"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Scorist Popular California Almonds (250 g) @ 196\n\n "
     },
     {
      "type": "link",
      "text": "https://extp.in/RkMiu6"
     }
    ]
   },
   {
    "id": 46715,
    "type": "message",
    "date": "2023-01-07T22:41:12",
    "date_unixtime": "1673111472",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 852,
    "height": 325,
    "text": [
     {
      "type": "link",
      "text": "https://amzn.to/3QlE3Ks"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://amzn.to/3QlE3Ks"
     }
    ]
   },
   {
    "id": 46716,
    "type": "message",
    "date": "2023-01-07T22:41:40",
    "date_unixtime": "1673111500",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 876,
    "height": 346,
    "text": [
     {
      "type": "link",
      "text": "https://amzn.to/3QknG0V"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://amzn.to/3QknG0V"
     }
    ]
   },
   {
    "id": 46717,
    "type": "message",
    "date": "2023-01-07T22:41:59",
    "date_unixtime": "1673111519",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 432,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/DbN42i"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/DbN42i"
     }
    ]
   },
   {
    "id": 46718,
    "type": "message",
    "date": "2023-01-07T22:42:36",
    "date_unixtime": "1673111556",
    "edited": "2023-01-07T23:07:41",
    "edited_unixtime": "1673113061",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 543,
    "text": [
     "Cosmic Byte H11 Gaming wired over ear Headset with Microphone @692\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3igFYDL"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Cosmic Byte H11 Gaming wired over ear Headset with Microphone @692\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3igFYDL"
     }
    ]
   },
   {
    "id": 46719,
    "type": "message",
    "date": "2023-01-07T22:43:11",
    "date_unixtime": "1673111591",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1075,
    "height": 294,
    "text": [
     "Konica Minolta DR215K Drum Unit Yield= 80K ",
     {
      "type": "mention",
      "text": "@6784"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GqbWoR"
     },
     "\n\n✅Apply 65% coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Konica Minolta DR215K Drum Unit Yield= 80K "
     },
     {
      "type": "mention",
      "text": "@6784"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GqbWoR"
     },
     {
      "type": "plain",
      "text": "\n\n✅Apply 65% coupon"
     }
    ]
   },
   {
    "id": 46720,
    "type": "message",
    "date": "2023-01-07T22:43:37",
    "date_unixtime": "1673111617",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 583,
    "height": 300,
    "text": [
     "Spark Amazon Offer : Buy Amazon GV worth 750 & Get 150 Cashback. \n\nActivate Slice Spark Of Binge Marathon from Slice Mini. \n\nNow Buy Aamzon GV worth 750 -  ",
     {
      "type": "link",
      "text": "https://amzn.to/3GniWDe"
     },
     "\n\nInstantly You Will Get 150 Cashback In Slice Mini."
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Spark Amazon Offer : Buy Amazon GV worth 750 & Get 150 Cashback. \n\nActivate Slice Spark Of Binge Marathon from Slice Mini. \n\nNow Buy Aamzon GV worth 750 -  "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GniWDe"
     },
     {
      "type": "plain",
      "text": "\n\nInstantly You Will Get 150 Cashback In Slice Mini."
     }
    ]
   },
   {
    "id": 46721,
    "type": "message",
    "date": "2023-01-07T22:44:26",
    "date_unixtime": "1673111666",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 443,
    "text": [
     "Amkette Hush Pro Acura 2.4 Ghz Silent Switch Wireless Mouse  @331\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3CswOL6"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Amkette Hush Pro Acura 2.4 Ghz Silent Switch Wireless Mouse  @331\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CswOL6"
     }
    ]
   },
   {
    "id": 46722,
    "type": "message",
    "date": "2023-01-07T22:44:45",
    "date_unixtime": "1673111685",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 530,
    "text": [
     "Bombay Shaving Company Deep Cleansing & Exfoliating Coffee Face Scrub 100g @ 146\n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3ikUo5A"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Bombay Shaving Company Deep Cleansing & Exfoliating Coffee Face Scrub 100g @ 146\n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ikUo5A"
     }
    ]
   },
   {
    "id": 46723,
    "type": "message",
    "date": "2023-01-07T22:45:10",
    "date_unixtime": "1673111710",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 613,
    "text": [
     "Urbane Analog Multi-Colour Dial Men's Watch @667\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3IwmF3O"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Urbane Analog Multi-Colour Dial Men's Watch @667\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3IwmF3O"
     }
    ]
   },
   {
    "id": 46724,
    "type": "message",
    "date": "2023-01-07T22:45:39",
    "date_unixtime": "1673111739",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 452,
    "text": [
     "Jack Royal Beautiful Dancing Princess Angel Doll – Toy @434\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3vMQ02u"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Jack Royal Beautiful Dancing Princess Angel Doll – Toy @434\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vMQ02u"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46725,
    "type": "message",
    "date": "2023-01-07T22:46:29",
    "date_unixtime": "1673111789",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 442,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/Kj31uu"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/Kj31uu"
     }
    ]
   },
   {
    "id": 46726,
    "type": "message",
    "date": "2023-01-07T22:46:56",
    "date_unixtime": "1673111816",
    "edited": "2023-01-08T07:15:44",
    "edited_unixtime": "1673142344",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 589,
    "text": [
     "Dabur Vatika Health Shampoo -1L @349\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ipj9he"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Dabur Vatika Health Shampoo -1L @349\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ipj9he"
     }
    ]
   },
   {
    "id": 46727,
    "type": "message",
    "date": "2023-01-07T22:47:30",
    "date_unixtime": "1673111850",
    "edited": "2023-01-08T01:22:00",
    "edited_unixtime": "1673121120",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1248,
    "height": 432,
    "text": [
     "Fusefit Men's Hybrid Shorts @275\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GNGCBZ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Fusefit Men's Hybrid Shorts @275\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GNGCBZ"
     }
    ]
   },
   {
    "id": 46728,
    "type": "message",
    "date": "2023-01-07T22:47:52",
    "date_unixtime": "1673111872",
    "edited": "2023-01-07T23:22:00",
    "edited_unixtime": "1673113920",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1274,
    "height": 456,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/8mEkTS"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/8mEkTS"
     }
    ]
   },
   {
    "id": 46729,
    "type": "message",
    "date": "2023-01-07T22:48:17",
    "date_unixtime": "1673111897",
    "edited": "2023-01-07T23:15:48",
    "edited_unixtime": "1673113548",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 588,
    "text": [
     "Diverse Men Jeans @458\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GO5Cck"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Diverse Men Jeans @458\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GO5Cck"
     }
    ]
   },
   {
    "id": 46730,
    "type": "message",
    "date": "2023-01-07T22:48:36",
    "date_unixtime": "1673111916",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1268,
    "height": 458,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/999pyL"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/999pyL"
     }
    ]
   },
   {
    "id": 46731,
    "type": "message",
    "date": "2023-01-07T22:49:01",
    "date_unixtime": "1673111941",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 475,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/KaLWws"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/KaLWws"
     }
    ]
   },
   {
    "id": 46732,
    "type": "message",
    "date": "2023-01-07T22:49:24",
    "date_unixtime": "1673111964",
    "edited": "2023-01-07T22:49:38",
    "edited_unixtime": "1673111978",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 542,
    "text": [
     "Wonderchef Regalia Espresso Coffee Maker 5 Bar ",
     {
      "type": "mention",
      "text": "@4999"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3VNZFk1"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Wonderchef Regalia Espresso Coffee Maker 5 Bar "
     },
     {
      "type": "mention",
      "text": "@4999"
     },
     {
      "type": "plain",
      "text": "\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VNZFk1"
     }
    ]
   },
   {
    "id": 46733,
    "type": "message",
    "date": "2023-01-07T22:49:47",
    "date_unixtime": "1673111987",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 576,
    "text": [
     "Bajaj 100% Pure Coconut Oil 600 ml @124\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZlcKnS"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Bajaj 100% Pure Coconut Oil 600 ml @124\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZlcKnS"
     }
    ]
   },
   {
    "id": 46734,
    "type": "message",
    "date": "2023-01-07T22:50:52",
    "date_unixtime": "1673112052",
    "edited": "2023-01-07T23:07:16",
    "edited_unixtime": "1673113036",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 566,
    "text": [
     "AJIO : Netplay Clothing Starts @ 99\n\nMasterlink : ",
     {
      "type": "link",
      "text": "https://extp.in/oOaUbU"
     },
     "\n\nShirts from 270 : ",
     {
      "type": "link",
      "text": "https://extp.in/m6UyYP"
     },
     "\n\nJackets from 510 : ",
     {
      "type": "link",
      "text": "https://extp.in/PRcKpT"
     },
     "\n\nSweaters & Sweatshirts from 300 : ",
     {
      "type": "link",
      "text": "https://extp.in/BRbJlr"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "AJIO : Netplay Clothing Starts @ 99\n\nMasterlink : "
     },
     {
      "type": "link",
      "text": "https://extp.in/oOaUbU"
     },
     {
      "type": "plain",
      "text": "\n\nShirts from 270 : "
     },
     {
      "type": "link",
      "text": "https://extp.in/m6UyYP"
     },
     {
      "type": "plain",
      "text": "\n\nJackets from 510 : "
     },
     {
      "type": "link",
      "text": "https://extp.in/PRcKpT"
     },
     {
      "type": "plain",
      "text": "\n\nSweaters & Sweatshirts from 300 : "
     },
     {
      "type": "link",
      "text": "https://extp.in/BRbJlr"
     }
    ]
   },
   {
    "id": 46735,
    "type": "message",
    "date": "2023-01-07T23:13:05",
    "date_unixtime": "1673113385",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 563,
    "text": [
     "Yardley London Refreshing Deo Body Spray Tripack ( 150ml Each (Pack of 3)@294\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Qv2tRV"
     },
     "\n\nApply Rs.20 Off Coupon"
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Yardley London Refreshing Deo Body Spray Tripack ( 150ml Each (Pack of 3)@294\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Qv2tRV"
     },
     {
      "type": "plain",
      "text": "\n\nApply Rs.20 Off Coupon"
     }
    ]
   },
   {
    "id": 46736,
    "type": "message",
    "date": "2023-01-07T23:15:26",
    "date_unixtime": "1673113526",
    "edited": "2023-01-07T23:16:02",
    "edited_unixtime": "1673113562",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 606,
    "text": [
     "KILLER Men's Slim Fit Shirt @564\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3Cv7mVn"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "KILLER Men's Slim Fit Shirt @564\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Cv7mVn"
     }
    ]
   },
   {
    "id": 46737,
    "type": "message",
    "date": "2023-01-07T23:15:55",
    "date_unixtime": "1673113555",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 592,
    "text": [
     "Fusefit Men T-Shirt @183\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3jOEuRm"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Fusefit Men T-Shirt @183\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3jOEuRm"
     }
    ]
   },
   {
    "id": 46738,
    "type": "message",
    "date": "2023-01-07T23:16:18",
    "date_unixtime": "1673113578",
    "edited": "2023-01-08T08:22:20",
    "edited_unixtime": "1673146340",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 611,
    "text": [
     "Blink Street Girl's Slim Jeans @167\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GsqZOW"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Blink Street Girl's Slim Jeans @167\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GsqZOW"
     }
    ]
   },
   {
    "id": 46739,
    "type": "message",
    "date": "2023-01-08T08:17:01",
    "date_unixtime": "1673146021",
    "edited": "2023-01-08T08:18:16",
    "edited_unixtime": "1673146096",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1055,
    "height": 509,
    "text": [
     "Loot \nFlipkart: Combo Pack Of 2 pairs of Shoes UNDER Rs 699\n\nGrab: ",
     {
      "type": "link",
      "text": "https://extp.in/38V9Cl"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Loot \nFlipkart: Combo Pack Of 2 pairs of Shoes UNDER Rs 699\n\nGrab: "
     },
     {
      "type": "link",
      "text": "https://extp.in/38V9Cl"
     }
    ]
   },
   {
    "id": 46740,
    "type": "message",
    "date": "2023-01-08T08:33:21",
    "date_unixtime": "1673147001",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1032,
    "height": 522,
    "text": [
     {
      "type": "link",
      "text": "https://extp.in/WAkYrG"
     }
    ],
    "text_entities": [
     {
      "type": "link",
      "text": "https://extp.in/WAkYrG"
     }
    ]
   },
   {
    "id": 46741,
    "type": "message",
    "date": "2023-01-08T08:34:48",
    "date_unixtime": "1673147088",
    "edited": "2023-01-08T08:37:03",
    "edited_unixtime": "1673147223",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 564,
    "text": [
     "✅iQOO 7 5G (Monster Orange, 8GB RAM, 128GB Storage) ",
     {
      "type": "mention",
      "text": "@23490"
     },
     " with yes bank cc\n\n🔗",
     {
      "type": "link",
      "text": "https://amzn.to/3GJZOzx"
     },
     "\n\n🔗 ",
     {
      "type": "link",
      "text": "https://amzn.to/3GrEkao"
     },
     ""
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "✅iQOO 7 5G (Monster Orange, 8GB RAM, 128GB Storage) "
     },
     {
      "type": "mention",
      "text": "@23490"
     },
     {
      "type": "plain",
      "text": " with yes bank cc\n\n🔗"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GJZOzx"
     },
     {
      "type": "plain",
      "text": "\n\n🔗 "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3GrEkao"
     },
     {
      "type": "plain",
      "text": ""
     }
    ]
   },
   {
    "id": 46742,
    "type": "message",
    "date": "2023-01-08T08:35:22",
    "date_unixtime": "1673147122",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 552,
    "text": [
     "Wings Sling100, Bluetooth 5.1 Wireless Neckband Earphones @ 699\n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3CyQYTL"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Wings Sling100, Bluetooth 5.1 Wireless Neckband Earphones @ 699\n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3CyQYTL"
     }
    ]
   },
   {
    "id": 46743,
    "type": "message",
    "date": "2023-01-08T08:35:44",
    "date_unixtime": "1673147144",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 596,
    "text": [
     "Prima Baby Plastic Chair  @538\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3WSMwYg"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Prima Baby Plastic Chair  @538\n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3WSMwYg"
     }
    ]
   },
   {
    "id": 46744,
    "type": "message",
    "date": "2023-01-08T08:36:13",
    "date_unixtime": "1673147173",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 560,
    "text": [
     "Wahl 09649-024 Cord/Cordless Color Pro Hair Clipper for Men ",
     {
      "type": "mention",
      "text": "@1099"
     },
     "\n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3GPzFR4"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Wahl 09649-024 Cord/Cordless Color Pro Hair Clipper for Men "
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
      "text": "https://amzn.to/3GPzFR4"
     }
    ]
   },
   {
    "id": 46745,
    "type": "message",
    "date": "2023-01-08T08:36:48",
    "date_unixtime": "1673147208",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "text": [
     "Euro Mens Cotton Brief (Pack of 5) (Colors May Vary)   @ 349  \n\n",
     {
      "type": "link",
      "text": "https://amzn.to/3ZjjbaZ"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Euro Mens Cotton Brief (Pack of 5) (Colors May Vary)   @ 349  \n\n"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3ZjjbaZ"
     }
    ]
   },
   {
    "id": 46746,
    "type": "message",
    "date": "2023-01-08T08:37:27",
    "date_unixtime": "1673147247",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 870,
    "height": 297,
    "text": [
     "Flat 55% off On Unibic Cookies. \n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3VSOGpd"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "Flat 55% off On Unibic Cookies. \n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3VSOGpd"
     }
    ]
   },
   {
    "id": 46747,
    "type": "message",
    "date": "2023-01-08T08:38:05",
    "date_unixtime": "1673147285",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 1280,
    "height": 531,
    "text": [
     {
      "type": "bold",
      "text": "Buy Max Qty : "
     },
     "65% Off On Set Wet Deodorants.\n\n ",
     {
      "type": "link",
      "text": "https://amzn.to/3vRh1Sc"
     }
    ],
    "text_entities": [
     {
      "type": "bold",
      "text": "Buy Max Qty : "
     },
     {
      "type": "plain",
      "text": "65% Off On Set Wet Deodorants.\n\n "
     },
     {
      "type": "link",
      "text": "https://amzn.to/3vRh1Sc"
     }
    ]
   },
   {
    "id": 46748,
    "type": "message",
    "date": "2023-01-08T08:38:33",
    "date_unixtime": "1673147313",
    "from": "TR Facts Deals🔥🔥🔥",
    "from_id": "channel1487851422",
    "author": ".",
    "photo": "(File not included. Change data exporting settings to download.)",
    "width": 886,
    "height": 272,
    "text": [
     "50% Off On Waffy Rolls :",
     {
      "type": "link",
      "text": "https://amzn.to/3Qnyo6F"
     }
    ],
    "text_entities": [
     {
      "type": "plain",
      "text": "50% Off On Waffy Rolls :"
     },
     {
      "type": "link",
      "text": "https://amzn.to/3Qnyo6F"
     }
    ]
   }
]

    let linkvalue;
    let i=0,j=0;
    let Links;
    let apiToken = "5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ";
let chatId = "@all1app";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E";
let text = "";
let btext = "";
let disable_web_page_preview= 1
let photo = ""
let getcount = 0;
let skipped = 0;
let overallskipped = 0;
let usedget = 0;
let discount = "";
let otherurl = "";
let newurl = "";
let disc=false;
let itemcategory="";
let price,pricenum;
        for (i=0;i<Input.length;i++){
        
            discount="";
            photo="";
            watscode="";
            caption="";
            disc=false;
            itemcategory = ""
            for (j=0;j<Input[i].text_entities.length;j++){
   
    try {
        

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

        if(Input[i].from.includes("Telugu Tech World"))
        {
            
        }
        

        if(Input[i].text_entities[j].text.includes("\n")){
          Input[i].text_entities[j].text = Input[i].text_entities[j].text.replaceAll("\n","");
        }
        if(Input[i].text_entities[j].text.includes("Loot")){
          Input[i].text_entities[j].text = Input[i].text_entities[j].text.replaceAll("Loot","Offer");
        }
        if(Input[i].text_entities[j].text.includes("Looot")){
          Input[i].text_entities[j].text = Input[i].text_entities[j].text.replaceAll("Looot","Offer");
        }
        text = text + Input[i].text_entities[j].text+"\n";
        btext = btext + Input[i].text_entities[j].text+"\n";
        if(Input[i].text_entities[j].type=="mention"){
          text = text +"\n";
          btext = btext +"\n";

          if(Input[i]!=undefined)
          if(Input[i].text_entities.length>j)
            j++;//changes on 1-12-2022
        }
        continue;
    }

    //Other than Amazon Code
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
          
       
        }
        else{
          console.log('Other than Amazon');
          break;
        }
        await driver.findElement(By.id("Btn_Make_Profit_Button")).click();
        
        text = "";
        btext = "";
        photo = "";
        // continue;//new change 14th Nov
        break;
    }
    Links = Input[i].text_entities[j].text;

    //Telugu Tech World Code
    if(Input[i].from.includes("Telugu Tech World"))
    {
        Links = Input[i].text_entities[j].href;

    }
        await driver.get(Links);
      getAmazonDetails();
      console.log('Calling Get Amazon Details')
      //Amazon Details Function
      async function getAmazonDetails(){
          console.log('Called Get Amazon Details')
          try{
          let asin = await driver.findElement(By.xpath('//*[@id="productDetails_detailBullets_sections1"]/tbody/tr[1]/td')).getAttribute("innerHTML");
          console.log('asin in '+asin);
          }
          catch(e){
            console.log('Image error');
          }
          await driver.findElement(By.id("landingImage")).getAttribute("src").then(function(webElement) {
            console.log('Image exists');
            photo = webElement;
            itemcategory = itemcategory + " \n " + photo +" \n\n";
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Image not found so cleared all details');

                //without image 
                text = "";
                btext = "";
                photo = "";
              } 
            
        });
        console.log('image: '+photo)

        //discount

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

        try{
          if(discount != ""){
            if(discount.charAt(0)=='-'){
              discount = discount.substring(1,discount.length);
              
            }
            if(discount.charAt(discount.length-1)=='%'){
              discount = discount.substring(0,discount.length-1);
              console.log('new discount is '+discount);
            }
            let discount = Number(discount);
            disc = Number(discount)>=75;
            
          }
        }
        catch(e){
          console.log(e);
        }


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

          //Price Default Commented
          // await driver.findElement(By.xpath('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]')).getAttribute("innerHTML").then(function(webElement) {
          //     console.log('Element exists');
          //     price = webElement;
          //     console.log('price is '+price);
          // }, function(err) {
          //     if (err.state && err.state === 'no such element') {
          //         console.log('Element not found for price');
          //     } 
          // });
          // price = Number(price);
        
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
              console.log(price)
              pricenum=Number(price)
              console.log(pricenum)
            }
            if(pricenum!=0){
            itemcategory = itemcategory + "\n";
            itemcategory += "Pryce"+price + " ";
            }
          }
          else{
            console.log('Price Nan')
    
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

        
    }//get Amazon Details end(price,discount,asin,description)
       

    async function getAmazonLinkDetails(){
//avinash08 data take
// await driver.get(Links);
await driver.findElement(By.id("amzn-ss-text-link")).click();
await driver.findElement(By.id("amzn-ss-text-link")).click();


// await driver.findElement(By.id("amzn-ss-text-link")).click();
// await driver.wait(until.elementLocated(By.id("a-popover-content-2")),5000);//,Key.RETURN
await driver.sleep(2500);
try{
  await driver.findElement(By.id("a-autoid-1-announce")).click();
  await driver.sleep(1500);
}
catch(e){
  await driver.findElement(By.id("amzn-ss-text-link")).click();
  await driver.sleep(1500);
  await driver.findElement(By.id("a-autoid-1-announce")).click();

}
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

await driver.findElement(By.id("amzn-ss-text-shortlink-textarea")).click();
    

//@Before Blocking Code
// await driver.get("https://www.duckduckgo.com");
// await driver.actions()
// .keyDown(Key.CONTROL)
// .sendKeys('v')
// .keyUp(Key.CONTROL)
// .sendKeys(Key.RETURN)
// .perform()
// urlvalue = await driver.findElement(By.name("q")).getAttribute("value");
// console.log(urlvalue);
}
//Amazon Link Details end


try{
if(!Input[i].from.includes("All1App")){
  console.log('Non All1App')
    if(urlvalue == "")
        break;
        if(pricenum>0){
          // text = text + "\n @" + pricenum + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";
          text = text + "\n @" + pricenum + "\n" +urlvalue+"\n" + itemcategory + "\n";
      }
      // else if(mention>0){
      else if(pricenum>0){
          text = text + "\n";
    // text = text +"@"+mention + "\n" +urlvalue+"\n" + urlvalue1+"\n" + itemcategory + "\n";
    text = text +"@"+mention + "\n" +urlvalue+"\n" + itemcategory + "\n";
    
  }
  else{
    console.log('No Price');
    console.log(price)
    console.log(pricenum)

  break;
}

    // text = text + "\n@" + pricenum + "\n" +urlvalue+"\n" + itemcategory + "\n";
    // if(text.length>99)
    // text = text.substring(0,99);
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

    }
    catch(error){
        overallskipped++;
        console.log(error);
        continue;
    }
        
    } //j loop ends

                 
    urlString = `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app&photo?=${photo}/sendMessage?chat_id=@all1app&text=${text}`
    
    //Not Required (Check)
    xhr.open("GET", `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=@all1app/sendMessage?chat_id=@all1app?photo=?`+photo+"?chat_id="+chatId+"?caption="+text, true);
    var res = encodeURIComponent(urlString);
    var resres = decodeURIComponent(res);
    
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
        TelegramCall(photo,chatId,text);
        console.log('Telegram Call Called')
    }
  }
  catch(e){
    console.log(e);
  }
  async function TelegramCall(photo,chatId,text){
    console.log("Telegram Function Call Received")
    var raw = JSON.stringify({
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
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));
    

      if(output){
        await fetch(
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
    console.log('re api 1st')
      output = JSON.stringify(result).includes("false");
        })
      .catch((error) => console.log("error", error));
      
      }

      else{
            console.log('without photo');
            await fetch(
                  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
                  requestOptions
                )
                .then((response) => response.text())
                  .then((result) => console.log("success",result))
                  .catch((error) => console.log("error", error));
          }
    }
      //@whatsapp 
       async function whatsapp(watscode,text){
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
      }
    }
    
      
        }
       
        try{
        if(disc && Input[i].from.includes("All1App")){
            if(photo!=""){
            chatId = "@all1app";
            watscode = "FfH1v13f7dVA5ZHVvzEW3E";
            console.log('with photo');
            await fetch(
        `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
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
      }
      
        }
        else{
            console.log('without photo');
            await fetch(
                  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
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
                    }
        }
      }
    }
    catch(e){
      console.log(e);
    }
        
        try{
        if(!Input[i].from.includes("All1App")){
          console.log('entered into all1app web')
        var raw = JSON.stringify({
         
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
        `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatid}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chatid}`,
    
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
      `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log("success",result)
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




    try{
    xhr.send();
    }
    catch(error){
        usedget++;
        await driver.get(resres);
    }
    finally{
      try{
      await driver.get("https://api.whatsapp.com/send?phone=9866017750"); 
      await driver.get(`https://wa.me/919866017750?text=completed${Input[0].from}`); 
      }
      catch(e){
        console.log('error in Finally try');
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
async function Telegram(name){
  console.log("Name is "+name);
  var raw = JSON.stringify({
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
  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
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
  `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/sendPhoto?chat_id=${chatId}&photo?=https://m.media-amazon.com/images/I/71Ohf7QA+9L._SL1500_.jpg/sendMessage?chat_id=${chat_id}`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {console.log("success",result)
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
  }

  
    }
    else{
        console.log('without photo');
        await fetch(
              `https://api.telegram.org/bot5759815900:AAH-Xd2wQhU4JBhNOF26bfu-plI8oGaU9qQ/chat_id=@all1app/sendMessage?chat_id=${chatId}`,
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
                }
              }
              catch(e){
                console.log(e);
              }
    }
}
example();

// Telegram('hai');
