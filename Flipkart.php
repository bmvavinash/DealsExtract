Flipkart
price = await driver
                    .wait(
                      until.elementLocated(
                        By.xpath(
                          '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[1]/span[2]/span[2]'
                        )
                      ),
                      5000
                    )
                    .getAttribute("innerHTML");
Price
=======
price = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1]')),5000).getAttribute("innerHTML");
price = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[3]/div/div[2]/div[1]/div/div[1]')),5000).getAttribute("innerHTML");
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1] - price
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1]


price = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[1]')),5000).getAttribute("innerHTML");
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[1]
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[1]




Discount
============
discount = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[3]/span')),5000).getAttribute("innerHTML");
span - //*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[3]/span

Special Price
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[3]/span



Category Handler
===================
Length Upto 6
c1 = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[2]/a')),5000).getAttribute("innerHTML");
c2 = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[3]/a')),5000).getAttribute("innerHTML");
c3 = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[4]/a')),5000).getAttribute("innerHTML");
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[2]/a
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[3]/a
//*[@id="container"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[4]/a


Photo
=============
photo = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[2]/img')),5000).getAttribute("innerHTML");
//*[@id="container"]/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[2]/img
