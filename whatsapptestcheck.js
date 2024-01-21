const { Builder, By, Key, until } = require("selenium-webdriver");

async function openAmazonWebsite() {
  // Set up the Selenium WebDriver

  //@chrome
  require("chromedriver");
  const xlsx = require("xlsx");
  const { Options } = require("selenium-webdriver/chrome");

  // const Headers = require("headers");

  // const { Options } = require('../chrome')
  var chrome = require("selenium-webdriver/chrome");
  const { get } = require("selenium-webdriver/http");
  const { WebElement } = require("selenium-webdriver");
  const { telegram } = require("./telegram");
  const { whatsapp } = require("./whatsapp");
  const { facebook } = require("./facebook");
  const {
    driverLocation,
  } = require("selenium-webdriver/common/seleniumManager");
  const { firebase } = require("./firebase");
  const { firebaseget } = require("./firebaseget");
  const { type } = require("os");
  const { firebasepost } = require("./postapi");
  // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  // global.XMLHttpRequest = require("xhr2");
  // var XMLHttpRequest = require('xhr2');

  // import axios from 'axios';

  let pricelinks = "",
    photolinks = "",
    urlvalue1 = "";
  let chat_id = "@all1app";
  let watscode = "FfH1v13f7dVA5ZHVvzEW3E"; //alldeals
  //   const driver = new Builder().forBrowser('chrome').build(); // Use 'chrome' or 'firefox' based on your setup.

  let options = await new chrome.Options();
  options.debuggerAddress("localhost:9222");

  const excelFilePath = "C:/Users/Dell/Tasks/All/phn_num.xlsx";

  const workbook = xlsx.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];
  let skippednum="";
  try {
    // worksheet.load('items');
    // console.log("work Sheet Count",worksheet.length)
    console.log("Sheet Count", sheetName.length);
    rowDataCount = xlsx.utils.sheet_to_json(worksheet, { header: 1 }).length;
    console.log("final row count", rowDataCount);
  } catch (e) {
    console.log("Sheet Count Error", e);
  }
  
  //CHROME
  driver = await chrome.Driver.createSession(options);

  // "🌟✨Our exclusive Sankranti and Republic Day deals are now live on dealshubglobal.com! 🎉🛍️ \n \nDon't miss out on the incredible discounts and amazing offers we have in store.\nHurry and explore the deals before they expire! \n \n🚀 Make this Sankranti even more special by grabbing the best bargains at dealshubglobal.com\n \nAlso, to stay in the loop about our latest updates, exclusive offers, and more, make sure to subscribe to our Telegram and WhatsApp group. 📲✨ \nTrust me, you wouldn't want to miss out on these fantastic deals!\n \nWebsite:dealshubglobal.com\nTelegram:https://telegram.me/dealshubglobal\nWhatsapp:https://chat.whatsapp.com/FfH1v13f7dVA5ZHVvzEW3E\n \nWishing you a festive season filled with joy and fantastic savings! Happy Sankranti! 🪁🌾";
  let whatsapptext ="🌟 Greetings! We hope your Sankranti was filled with joy! 🪁✨\n\nGreat news! Our exclusive Sankranti and Republic Day deals are still LIVE on dealshubglobal.com! 🎉🛍️ Don't miss out on incredible discounts and amazing offers we have in store just for you!\n\n🚀 Make this festive season even more special by grabbing the best bargains at dealshubglobal.com.\n\n🌟 Explore the deals before they expire and make the most of the savings! Visit dealshubglobal.com now! 🌾\n\nTo stay in the loop about our latest updates, exclusive offers, and more, subscribe to our Telegram and WhatsApp group:\n📲 Telegram: https://telegram.me/dealshubglobal\n📲 WhatsApp: https://chat.whatsapp.com/FfH1v13f7dVA5ZHVvzEW3E\n\nWishing you a festive season filled with joy and fantastic savings! Happy Sankranti! 🪁🌾\n\nIf links are not in blue colour, send 'links' to get it enabled "
  try {
      for (i = 356; i < rowDataCount; i++) {
      await driver.sleep(1000);
      rowData = xlsx.utils.sheet_to_json(worksheet, { header: 1 })[i];
      phnnum = rowData[0];
      console.log("i from 0 is ",i)
      console.log("phn num is ",phnnum)

      //testing
    //   phnnum="9866017750"

      try {
        // Navigate to the Amazon website
        // await driver.get(`https://web.whatsapp.com/send?phone=9866017750&text=${whatsapptext}`);
        await driver.get(`https://web.whatsapp.com/send?phone=${phnnum}`);

        try {
          await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),85000).click();
        } catch (e) {
          console.log("Whatsapp did not load", e);
          skippednum+="\n"+phnnum
          continue;
        }
        try{
            await driver
            .actions()

            await driver.actions()
              .keyDown(Key.CONTROL)
              .sendKeys('v')
              .keyUp(Key.CONTROL)
            //   .sendKeys(Key.RETURN)
              // .perform()

            // .sendKeys(Key.CONTROL)
            // .sendKeys()

            // .keyDown(Key.CONTROL)
            // .keyDown(Key.V)
            // .keyUp(Key.V)
            // .keyUp(Key.CONTROL)
            .perform();
        }
        catch(e){
            console.log("Image Paste error")
        }
        console.log("after image paste")
        await driver.sleep(1500);
        
        // try {
            //     await driver.wait(until.elementLocated(By.xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]')),30000).click();
            //   } catch (e) {
                //     console.log("Text box 2nd click error", e);
                //   }
                
        let s = whatsapptext.split("\n");
        await driver.sleep(1500);
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
        console.log("Hi Content ended")
        await driver.sleep(400);
        await driver.actions().sendKeys(Key.RETURN).perform();
        await driver.sleep(500);

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
        console.error("An error occurred:", error);
      } finally {
      
        // Close the browser
        // await driver.quit();
      }
    }
  } catch (e) {
    console.log("Out Of Loop");
  }
  finally {
    console.log("Skipped Num are ",skippednum);
  }
}

openAmazonWebsite();
