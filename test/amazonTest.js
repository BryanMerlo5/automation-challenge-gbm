const { WebDriver } = require("selenium-webdriver");
const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

async function amazonTest() {
    const titleName = "Amazon.com.mx : pantallas";
    const page = 'https://www.amazon.com.mx';
    const idSearchTextBox = 'twotabsearchtextbox';
    const locatorResults = '//*[@data-component-type="s-product-image"]';

    //**Open browser */
    let driver = await new Builder().forBrowser("chrome").build();
    let title, number;
    try {

        //**Go to Amazon page */
        await driver.get(page);
        //**Find  the word "pantallas" */
        await driver.findElement(By.id(idSearchTextBox)).sendKeys('pantallas', Key.RETURN);
        title = await driver.getTitle();
        console.log('Title is:',title);
        await driver.wait(until.titleIs(titleName));
        //**Extract the number of result on the first screen */
        number = driver.findElements(By.xpath(locatorResults)).size();
        console.log('Number of result on the first screen: ', number);
    } finally {
        await driver.quit();
    }
};

amazonTest();