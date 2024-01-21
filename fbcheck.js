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



// const { Options } = require('../chrome')
var chrome = require("selenium-webdriver/chrome");


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
let access_token = "EAAKw6ZAutPZBoBAH6kyftYg9r3DQfxb0bqKyJdMn6JFQe2Xpcfkimcawck68O3mYly18QjoD64cHz28BjgXDTIhse9fBQJeZCZCWUNGZAsBTyAFPnUeL79SDgNE6EalmbqqtvN1A3Yz32kGi2dPRFBfli0LcBER7ybjuB2GM4AilzDUfVZCD8LNR2vlpRCOBt2KYZAZCPnk5no8dENmEWPqk";
let photo = "https://m.media-amazon.com/images/I/713g7tCij5L._SX522_.jpg"
options.debuggerAddress("localhost:9222"); 
//CHROME
driver = await chrome.Driver.createSession(); 
// driver = await chrome.Driver.createSession(options); 

fbdata = `https://graph.facebook.com/me/feeds/photos?url=${photo}&caption=AmazonDeals&${access_token}`
        console.log(fbdata);
        await driver.get('https://developers.facebook.com/tools/explorer');
        // await driver.findElement(By.xpath('//*[@id="u_0_4_LN"]/div/div[2]/div/div/div[3]/a')).click();
        //*[@id="u_0_4_LN"]/div/div[2]/div/div/div[3]/a
        await driver.actions()
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.RETURN)
        .perform()
        await driver.findElement(By.id('email')).sendKeys("bmvavinash@yahoo.in");
        await driver.findElement(By.id('pass')).sendKeys("hsaniva98");
        await driver.findElement(By.id('loginbutton')).click();
        await driver.sleep(2000);
        await driver.actions()
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.RETURN)
        .sendKeys(Key.DOWN)
        .sendKeys(Key.RETURN)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.BACK_SPACE)
        .sendKeys(fbdata)
        .perform()
        // await driver.findElement(By.xpath('//*[@id="js_8d1"]/div/div/div/div')).sendKeys("POST");
        // await driver.findElement(By.xpath('//*[@id="js_5j"]/div/div/div/div')).click();
        await driver.sleep(2000);
        await driver.actions()
        .sendKeys(Key.TAB)
        .sendKeys(Key.TAB)
        .sendKeys(Key.RETURN)
        .perform()
        //*[@id="js_5j"]/div/div/div/div
        // await driver.actions()
        // .sendKeys(Key.DOWN)
        // .sendKeys(Key.RETURN)
        // .perform()
        //*[@id="js_8d1"]/div/div/div/div
        
        // await driver.findElement(By.xpath('//*[@id="js_q"]/input')).click();
        // await driver.actions()
        // .sendKeys(Key.DOWN)
        // .sendKeys(Key.RETURN)
        // .perform()

        // await driver.findElement(By.xpath('//*[@id="js_q"]/input')).sendKeys(fbdata);
        // await driver.findElement(By.xpath('//*[@id="facebook"]/body/div[1]/div[5]/div[2]/div/div[2]/span/div/div[1]/span/button/div/div')).click();
        await driver.sleep(2000);


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
}


example();