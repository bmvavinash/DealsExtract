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
  urlvalue = "",
  urlvalue1 = "";
let chat_id = "@dealshubglobal";
let watscode = "FfH1v13f7dVA5ZHVvzEW3E"; //alldeals

async function copyImage() {
  // Create a new instance of the webdriver
//   const driver = await new Builder().forBrowser('chrome').build();


  //chrome
  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  driver = await chrome.Driver.createSession(options);
  // driver = await chrome.Driver.createSession();


  try {
    // Navigate to a webpage with an image
    await driver.get('https://www.amazon.in/dp/B099RMFVZ7?th=1&linkCode=sl1&tag=dealshubglo09-21&linkId=1d81ff51724cfe3ee6db94593fc82348&language=en_IN&ref_=as_li_ss_tl&psc=1');

    // Locate the image element
    // const imageElement = await driver.findElement(By.tagName('img'));

    const imageElement = await driver.wait(
        until.elementLocated(By.id("landingImage")),
        // until.elementLocated(By.css('img')),
        5000 // Adjust the timeout as needed
      );

    // Right-click on the image
    await driver.actions({ bridge: true }).contextClick(imageElement).perform();

    // Simulate navigation to the "Copy" option in the context menu
    // This is a hypothetical example, the actual steps may vary based on the website
    // You might need to use the arrow keys and Enter to navigate the context menu
    await driver.actions().sendKeys(Key.ARROW_DOWN,Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER).perform();
    // await driver.actions({ bridge: true }).sendKeys(Key.ARROW_DOWN,Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER).perform();

    // Optional: Wait for a while to see the result
    await driver.sleep(2000);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Call the function to execute the actions
copyImage();
