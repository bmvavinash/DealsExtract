// DB Backup

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
options.debuggerAddress("localhost:9222"); 
//CHROME
driver = await chrome.Driver.createSession(options); 


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//Admin Login
// await driver.get("http://stage-bo.royalgaming.online/login");
// await driver.findElement(By.id("username")).sendKeys("meta1");
// await driver.findElement(By.id("password")).sendKeys("1234");
// await driver.findElement(By.xpath("/html/body/app-root/app-log-in/div/div[1]/mat-card/div[2]/form/button")).click();

    // await driver.findElement(By.id("continue")).click();
    // await driver.findElement(By.id("signInSubmit")).click();

// await driver.get("http://stage-bo.royalgaming.online/add-market");

var raw = JSON.stringify({
 
    // "token": "873e9a90-144e-47f0-9931-2b45235d579d",
    // "operatorId": "gapcgp",
    // "partnerId": "GAPINR",
    // "providerId": "RGONLINE",
    // "gameId": "VGCAM101",
    // "tableId": "VTGCAM101"

    "token": "82664fc4-f834-4c85-ae6a-36372c47d25d",
    "operatorId": "gapcgp",
    "partnerId": "GAPINR",
    "providerId": "RGONLINE",
    "gameId": "AGTRI101",
    "tableId": "ATGTRI101"

})

var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  await fetch(
    `https://dev-api.royalgaming.online/api/v1/core/getmarkets`,
requestOptions
)
.then((response) => response.text())
.then(async (result) => {console.log("success",result)
//   console.log('hai'+JSON.stringify(result).includes("false"));
console.log('re api 2nd');
try{
output = JSON.stringify(result).includes("false");

result = JSON.parse(result);

// console.log("table market id is ",result.table["markets[0]"])
console.log("Result  is ",result)
console.log("Table  is ",result.table)
console.log("Table length is ",result.table.length)
console.log("Markets is ",result.table["markets"])
console.log("Markets length is ",result.table["markets"].length)
console.log("Market Id is ",result.table["markets"][0].marketId)
console.log("Runner Id is ",result.table["markets"][0]["runners"][0].runnerId)
console.log("Runner is ",result.table["markets"][0]["runners"][0])

let marlen = result.table["markets"].length
let runlen = result.table["markets"][0]["runners"].length
let mlen = marlen
let rlen = runlen

console.log("Mar len ",marlen)
console.log("Run len ",runlen)





// Provider Name
try{
// await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/mat-card-content[1]/div[1]/select")).click();
await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/mat-card-content[1]/div[1]/select")).sendKeys(result.table.providerName);
}catch(e){
    console.log("hai",e);
}
await driver.sleep(500);

//Game Name
try{
await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/mat-card-content[1]/div[2]/select")).sendKeys(result.table.gameName);
}catch(e){
    console.log("hai",e);
}
await driver.sleep(500);

// Table Name
try{
await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/mat-card-content[1]/div[3]/select")).sendKeys(result.table.tableName);
}catch(e){
    console.log("hai",e);
}
await driver.sleep(500);

//Create Market
// try{
// // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/button")).click();
// }catch(e){
//     console.log("hai",e);
// }
// await driver.sleep(500);


// Market Level
// ================
i=0;
// mlen--;

//Market Id
if(i==0){
    try{
    await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/mat-card-content[1]/div[1]/input")).sendKeys(result.table["markets"][0].marketId);
}catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}else{
    try{
        await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i}]/mat-card-content[1]/div[1]/input`)).sendKeys(result.table["markets"][0].marketId);
    }catch(e){
        console.log("hai using else back ticks",e);
    }
    await driver.sleep(500);
}

//Market Name

if(i==0){
    try{
        await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/mat-card-content[1]/div[2]/input")).sendKeys(result.table["markets"][i].marketName);
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}else{
    try{
        await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i}]/mat-card-content[1]/div[2]/input`)).sendKeys(result.table["markets"][i].marketName);    
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}

//Market Type
if(i==0){
    try{
        await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/mat-card-content[2]/div[1]/input")).sendKeys(result.table["markets"][i].marketType);
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}else{
    try{
        await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/mat-card-content[2]/div[1]/input`)).sendKeys(result.table["markets"][i].marketType);    
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}

//Status
if(i==0){
    try{
        await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/mat-card-content[2]/div[2]/select")).sendKeys(result.table["markets"][i].status);
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
}else{
    try{
    await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i}]/mat-card-content[2]/div[2]/select`)).sendKeys(result.table["markets"][i].status);    
}catch(e){
    console.log("hai",e);
}
await driver.sleep(500);
}

//Button for Market Runner
// try{
    //     await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/button")).click();
    // }catch(e){
        //     console.log("hai",e);
        // }
        // await driver.sleep(500);
        
        //Market Button
        // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/button")).click();
        
        try{
            // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][0]["runners"][0]).runnerId
            // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][i]["runners"][j]).runnerId
            //    /html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input
        }catch(e){
            console.log("hai",e);
        }
        await driver.sleep(500);

        for(i=0;i<marlen && mlen-->0;i++){

            if(i==0);
            else{
                await driver.actions()
                .sendKeys(result.table["markets"][i].marketId)
                .perform()

                await driver.actions()
                .keyDown(Key.TAB)
                .keyUp(Key.TAB)
                .perform()

                await driver.actions()
                .sendKeys(result.table["markets"][i].marketName)
                .perform()

                await driver.actions()
                .keyDown(Key.TAB)
                .keyUp(Key.TAB)
                .perform()

                await driver.actions()
                .sendKeys(result.table["markets"][i].marketType)
                .perform()

                await driver.actions()
                .keyDown(Key.TAB)
                .keyUp(Key.TAB)
                .perform()

                await driver.actions()
                .sendKeys(result.table["markets"][i].status)
                .perform()
                
            }
            rlen = result.table["markets"][0]["runners"].length
        
        for(j=0;j<runlen && rlen-->0;j++){
    if(j==0){
        console.log('j is 0')
    }
    // continue;
    else{
        // await driver.actions()
        // .keyDown(Key.TAB)
        // .keyUp(Key.TAB)
        // .perform()
        await driver.sleep(500);
        await driver.actions()
        .keyDown(Key.TAB)
        .keyUp(Key.TAB)
        .perform()

        if(i==1 && j==0){
            console.log("anamsthe")
        }
        // await driver.actions()
        // .keyDown(Key.TAB)
        // .keyUp(Key.TAB)
        // .perform()
        await driver.sleep(500);
        await driver.sleep(500);
        
    }
    runnerId = result.table["markets"][i]["runners"][j].runnerId
    runnerName = result.table["markets"][i]["runners"][j].runnerName
    runnerType = result.table["markets"][i]["runners"][j].runnerType

    //to Skip Back Price
    await driver.actions()
    // .keyDown(Key.SHIFT)
    .keyDown(Key.TAB)
    .keyUp(Key.TAB)
    .perform()
    // .keyDown(Key.TAB)
    // .keyUp(Key.TAB)
    // .keyDown(Key.TAB)
    // .keyUp(Key.TAB)
    // .sendKeys(Key.TAB)
    // .sendKeys(Key.TAB)
    await driver.sleep(500);
    await driver.actions()
    .sendKeys(runnerId)
    .perform()
    await driver.sleep(500);
    await driver.actions()
    .keyDown(Key.TAB)
    .keyUp(Key.TAB)
    .perform()
    await driver.sleep(500);
    await driver.actions()
    // .sendKeys(54)
    .sendKeys(runnerName)
    .perform()
    await driver.sleep(500);
    await driver.actions()
    .keyDown(Key.TAB)
    .keyUp(Key.TAB)
    .perform()
    await driver.sleep(500);
    await driver.actions()
    .sendKeys(runnerType)
    .perform()
    await driver.sleep(500);
    // await driver.actions()
// .keyUp(Key.SHIFT)
// .perform()
await driver.sleep(500);
await driver.sleep(500);
// if(rlen>0){
//     await driver.actions()
//     .keyDown(Key.TAB)
//     .keyUp(Key.TAB)
//     .perform()
// await driver.sleep(500);
//     await driver.actions()
//     .keyDown(Key.TAB)
//     .keyUp(Key.TAB)
//     .perform()
// await driver.sleep(500);
//     await driver.sleep(500);
// }
}//j end

// else
if(mlen>0){
await driver.actions()
.keyDown(Key.TAB)
.keyUp(Key.TAB)
.perform()
await driver.sleep(500);
await driver.actions()
.keyDown(Key.TAB)
.keyUp(Key.TAB)
.perform()
await driver.sleep(500);
await driver.actions()
.keyDown(Key.TAB)
.keyUp(Key.TAB)
.perform()
await driver.sleep(500);
await driver.sleep(500);
}
mlen = result.table["markets"].length
}
// }
// await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[1]/div[2]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][0]["runners"][0]).runnerId
// await driver.sleep(500);
// await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][0]["runners"][0]).runnerId;

// await driver.findElement(xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input")).getAttribute("innerHTML").then(function(webElement) {
//     console.log('Link Success '+webElement);
//     urlvalue = webElement;
//   }, function(err) {
//     console.log('Link Err'+err);
//   });


    if(i==0){
        // await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[j+2]/mat-card-content/div[1]/input`)).sendKeys(result.table["markets"][i]["runners"][j])
    }
    // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[i]/div[j]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][i]["runners"][j])

    // await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i+1}]/div[${j+2}]/mat-card-content/div[1]/input`)).sendKeys(result.table["markets"][i]["runners"][j]).runnerId
    try{
    // await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div/div[2]/mat-card-content/div[1]/input")).sendKeys(result.table["markets"][i]["runners"][j]).runnerId
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);

    //runnerName
    try{
    // await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i+1}]/div[${j+2}]/mat-card-content/div[2]/input`)).sendKeys(result.table["markets"][i]["runners"][j]).runnerName
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);

    //runnerType
    try{
    // await driver.findElement(By.xpath(`/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[${i+1}]/div[${j+2}]/mat-card-content/div[3]/input`)).sendKeys(result.table["markets"][i]["runners"][j]).runnerType
    // /html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/div[1]/div[2]/mat-card-content/div[3]/input
    }catch(e){
        console.log("hai",e);
    }
    await driver.sleep(500);
//Add Market
if(mlen>0){
    try{
// await driver.findElement(By.xpath("/html/body/app-root/app-home/div/app-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/app-add-market/div/div[2]/mat-card/form/fieldset/button")).click();
}catch(e){
    console.log("hai",e);
}
await driver.sleep(500);
}
// let res = JSON.parse(result.table)
// console.log("Markets is ",res)
}catch(e){
    console.log('catch ',e)
}
})
.catch((error) => console.log("error", error));



}
example();

