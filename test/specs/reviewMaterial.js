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
 *      -> Using the tagName
 *  
 *          -> //tagName
 *          -> await $('<tagName>');
 * 
 *      -> Using className (cannot have spaces)
 * 
 *          -> //*[@class="classAttr"]
 *          -> await $('.classAttrValue');
 * 
 * Direct xPath:
 * 
 * 1.) Using an attributes value :
 *      -> //tagName[@attrName="attrValue"];
 * 
 * 2.) Using a text value : 
 *      -> //tagName[text(), "textValue"];
 * 
 * 3.) Using partial attribute value : 
 *      -> //tagName[contains(@attrName, "partialAttrValue")];
 * 
 * 4.) Using partial text value : 
 *      -> //tagName[contains(text(), "partialTextValue")];
 * 
 * 5.) Using starts-with() for attribute : 
 *      -> //tagName[starts-with(@attrName, "startAttrValue")];
 * 
 * 6.) Using starts-with() for text : 
 *      -> //tagName[starts-with(text(), "starTextValue")];
 * 
 * 7.) Using not-operator : 
 *      -> //tagName[not(condition(s))];
 * 
 * 8.) Using and/or-operator : 
 *      -> //tagName[condition1 and/or condition2];
 * 
 * 
 * Interactions:
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
 * value -> await webElement.getAttribute(attrName) //attrValue
 * 
 * textValue -> await webElement.getText() //textValue
 * 
 */

/**
 * Indirect xPaths (ADVANCED XPATHS):
 * 
 * NOTE : sibTag is target elementTag you are trying to Isolate.
 * 
 * 1.) Using parent/grandParent tags to isolate webElement:
 *      -> //pTagName[@pAttr="pAttrValue"]//childTag[@cAttr="cAttrValue"];
 *      -> //pTagName[@pAttr="pAttrValue"]/directChildTag[@dChildAttr="dChildAttrValue"];
 * 
 * 2.) Using xPath-axes:
 *      -> Former sibling //fSibTag[fSibAttr="fSibAttrValue"]/former-sibling::sibTag[sibAttr="sibAttrValue"];
 *      -> Preceding sibling //pSibTag[pSibAttr="pSibAttrValue"]/preceding-sibling::sibTag[sibAttr="sibAttrValue"]
 * 
 */

