const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
const { Options } = require("selenium-webdriver/chrome");
// Function to perform operations with the driver

//chrome
// let options = await new chrome.Options();
// options.debuggerAddress("localhost:9222");
//CHROME
async function performOperations(driver) {
    
    // await performOperations(driver);
    try {
        await driver.get('https://www.google.com');
        const searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
        await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
        console.log('Search performed successfully.');
    } catch (error) {
        console.error('Error performing operations:', error);
    }
}

// Function to get data using the driver
async function getData(driver) {
    try {
        const searchResults = await driver.findElements(By.css('.g'));
        console.log('Search results:');
        for (let i = 0; i < searchResults.length; i++) {
            const title = await searchResults[i].findElement(By.css('h3')).getText();
            const link = await searchResults[i].findElement(By.css('a')).getAttribute('href');
            console.log(`Result ${i + 1}: ${title}\nLink: ${link}\n`);
        }
    } catch (error) {
        console.error('Error getting data:', error);
    } finally {
        await driver.quit(); // Close the WebDriver when done
    }
}

// await performOperations();

// Create a WebDriver instance and execute the functions
(async () => {
    // driver = await chrome.Driver.createSession(options);
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await performOperations(driver); // Perform operations
        await getData(driver); // Get data
    } catch (error) {
        console.error('Script execution error:', error);
    }
})();
