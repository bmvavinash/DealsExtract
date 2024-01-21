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
  let whatsapptext="🌟 Wishing you a joyful Sankranti filled with happiness and prosperity! 🪁✨ \nOur exclusive Sankranti and Republic Day deals are now live on dealshubglobal.com! 🎉🛍️ \nDon't miss out on the incredible discounts and amazing offers we have in store.\nHurry and explore the deals before they expire! \n🚀 Make this Sankranti even more special by grabbing the best bargains at dealshubglobal.com\nAlso, to stay in the loop about our latest updates, exclusive offers, and more, make sure to subscribe to our Telegram and WhatsApp group. 📲✨ \nTrust me, you wouldn't want to miss out on these fantastic deals!\nWebsite:dealshubglobal.com\nTelegram:https://t.me/dealshubglobal\nWhatsapp:https://chat.whatsapp.com/FfH1v13f7dVA5ZHVvzEW3E\nWishing you a festive season filled with joy and fantastic savings! Happy Sankranti! 🪁🌾"

  try {
    // Navigate to the Amazon website
    await driver.get(`https://web.whatsapp.com/send?phone=9866017750&text=${whatsapptext}`);

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
        }
        catch(e){
            console.log("Whatsapp did not load",e)
        }

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

    // Perform additional actions here if needed

    // Wait for a few seconds (you can adjust the time as needed)

    await driver.sleep(4000);
              await driver.actions().sendKeys(Key.RETURN).perform();

    //           await driver.sleep(4000);
    //           await driver
    //             .wait(
    //               until.elementLocated(
    //                 By.xpath(
    //                   '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]'
    //                 )
    //               ),
    //               // 30000
    //           3000
    //             )
    //             .click();
    //           await driver.sleep(5000);
    //           await driver.actions().keyDown(Key.TAB).keyUp(Key.TAB);
    //           sendKeys(Key.RETURN).perform();

    // let asinurl = await driver.getCurrentUrl();
    //             console.log("Asin url is ",asinurl)
    //             let start = asinurl.indexOf("/dp/")+4
    //             console.log("new asin is ",asinurl.substr(start,10));
    //             asin = asinurl.substr(start,10)

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    // await driver.quit();
  }
}

openAmazonWebsite();
