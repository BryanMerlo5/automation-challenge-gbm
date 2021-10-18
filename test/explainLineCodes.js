/**3. Explains the next lines of code:a) Driver.findElements(By.id(“btn-1”)).get(3).click();*/

//a) Driver.findElements(By.id(“btn-1”)).get(3).click();
/**[Driver] is an instance of selenium WebDriver.
[findElements] is used to find all elements in the current webpage matching to the specific locator.
[By.id(“btn-1”)] is used as locator using id "btn-1"
[.get(3)] given the elements found by the locator By id, it selects the element with index 3
[.click] is to perform a click over the element addressed by the locator*/


//b) WebDriverWait wait = new WebDriverWait(driver 30); 
/**Is an instantiation for WebdriverWait class with a maximum time as 30*/

//wait.until(ExpectedConditions.visibilityOfElementLocated(By.name(“other-button”)));
/**It represents an implicit wait that contains a condition that returns true or false*/

//driver.findElement(By.id(“last_name”)).sendKeys(“Hi”);
/**It represents a sentence to find element by id locator the value of this ID is "last name" once the element
is located will be written over it "Hi"*/

//c) Assert.assertTrue(false);
/**it represents an assert sentence check whether the given condition is false */
