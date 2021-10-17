const { WebDriver } = require("selenium-webdriver");
const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

async function amazonTest() {
    //**Open browser */
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        //**Go to Amazon page */
        await driver.get('https://www.amazon.com.mx');
        //**Find  the word "pantallas" */
        await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('pantallas', Key.RETURN);
        let title = await driver.getTitle();
        console.log('Title is:',title);
        await driver.wait(until.titleIs("Amazon.com.mx : pantallas"));
        //**Extract the number of result on the first screen */
        let number = driver.findElements(By.xpath('//*[@data-component-type="s-product-image"]'));
        console.log('Number of result on the first screen: ', number);
    } finally {
        await driver.quit();
    }
};

amazonTest();