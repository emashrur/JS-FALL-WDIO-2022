/**
 * Review Class
 * 
 * Locator Stretegies
 *  -> use chroPath to confirm unique locators
 *  -> use function : $() to find webElement
 *      -> Using unique id-Value
 * 
 *          -> //*[@id='id-Value']
 *          -> const webElement = await $('#id-Value');
 * 
 *      -> Using unique attribute locator (no spaces allowed) 
 * 
 *          -> //tagName[@attrName='attrValue']
 *          -> const webElement = await $('tagName[attrName=attrValue]');
 * 
 *      -> Using linkText
 * 
 *          ->//a[text()='Link Text']
 *          -> const webElement = await $('=Link Text');
 * 
 *      -> Using partial linkText
 * 
 *          -> //a[contains(text(), 'partialLinkText')]
 *          -> const webElement = await $('*=partialLinkText');
 * 
 *      -> Using partial attrValue
 * 
 *          -> //tagName[contains(@attrName='partialAttrValue')];
 *          -> const webElement = await $('tagName[attrName*=partialAttrValue]');
 * 
 *      -> Using text value
 * 
 *          -> //tagName[text()='textValue']
 *          -> const webElement = await $('tagName=textValue');
 * 
 *      -> Using partial textValue
 * 
 *          -> //tagName[contains(text(), 'partialTextValue')]
 *          -> const webElement = await $('tagName*=partialTextValue');
 * 
 *  Interactions:
 * 
 * click -> await webElement.click(); //function
 * 
 * type -> await webElement.setValue(); //function
 * 
 * enable -> await webElement.isEnabled(); //boolean
 * 
 * display -> await webElement.isDisplayed(); //boolean
 * 
 * selected -> await webElement.isSelected(); //boolean
 * 
 */

