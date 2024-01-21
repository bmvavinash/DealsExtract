const { Builder, By, Key, until } = require('selenium-webdriver');

async function openAmazonWebsite() {
  // Set up the Selenium WebDriver

  
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
//   const driver = new Builder().forBrowser('chrome').build(); // Use 'chrome' or 'firefox' based on your setup.

let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");
  //CHROME
  driver = await chrome.Driver.createSession(options);

  try {
    // Navigate to the Amazon website
    await driver.get('https://www.amazon.in/dp/B09B277CR5?=&ascsubtag=dealhind-21&src=indd-iaa-freeee-stuufff&app=iiffss&dealsby=indyafreeesfff&deals-from=1fs&linkCode=sl1&tag=dealshubgloba-21&linkId=2ec80d49544eeb7b0d55abfa63887c29&language=en_IN&ref_=as_li_ss_tl');

    // Perform additional actions here if needed

    // Wait for a few seconds (you can adjust the time as needed)
    await driver.sleep(500);

    let asinurl = await driver.getCurrentUrl();
                console.log("Asin url is ",asinurl)
                let start = asinurl.indexOf("/dp/")+4
                console.log("new asin is ",asinurl.substr(start,10));
                asin = asinurl.substr(start,10)

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

openAmazonWebsite();
