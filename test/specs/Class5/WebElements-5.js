/**
 * WebElements:
 * 
 * 1.) textBox
 * 2.) buttons
 * 3.) images
 * 4.) text/
 * 5.) hyperLinks
 * 6.) dropDown
 * 7.) radioButtons - can select only one radio buttons
 * 8.) checkBox - however you can select multiple check boxes
 * 9.) alert - 'allow to track location' small pop up in which you enter whether or not you accept/allow or not
 * 
 * Interactions usually done with WebElements:
 * 1.) click
 * 2.) type
 * 3.) drag and drop
 * 4.) if it is selected
 * 5.) if it is enabled
 * 6.) if it is displayed
 */

/**
 * Document Object Model (DOM):
 * 
 * Code -> generates an HTML/XML DOM -> makes the webPage
 * 
 * Two components every DOM has:
 * 1.) <head>
 * 2.) <body>
 * 
 * <html>
 *      <head>
 *      <body>
 * </html>
 * 
 * 
 * <tag1> // start of the tag
 * 
 * </tag1> // end of the tag
 * 
 * eg: html, body, head, link, script, div, input, form
 * 
 * NOTE : tagNames CANNOT have spaces
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value five" attr6= value six>My Text Value</tag1>
 * tag -> tag1
 * attributes of tag1 -> attr1, attr2, attr3
 *      NOTE : attributeNames CANNOT have spaces
 * 
 * value of attr1 = "value1"
 * value of attr2 = "value2"
 * value of attr3 = no value/undefined/empty/emptyString?
 * value of attr4 = "value4"
 * value of attr5 = "value five"
 * value of attr6 = "value 6"
 */


/**
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value five" attr6= value six>My Text Value</tag1>
 * 
 * tag -> tag1
 * attributes of tag1 -> attr1, attr2, attr3
 *      NOTE : attributeNames CANNOT have spaces
 * 
 * tag1 has text = My text value
 * 
 * <button value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_5_ju">Log in</button>
 * 
 * text of button tag -> "Log in"
 * 
 * attributes of button-tag -> value, class, name, data-testid, type, id
 * 
 * 
     * <tag1 attr11="val1" attr12="val2" attr13>
     *     <tag2 attr21="val21" attr22="val22">
     *         text value
     *     </tag2>
     *     <tag3>
     *         text value again
     *     </tag3>
     *
     * </tag1>
     * 
 * 
 * number of attributes in tag1 -> 3 attributes 
 * text value tag1 -> no text with tag1
 * number of attributes in tag2 -> 2 attributes
 * text value tag2 -> "text value"
 * number of attributes in tag3 -> no attributes 
 * text value tag3 -> "text value again"
 * 
 * Locators : a way to reach/find a webElement
 * 
 * 1.) Using the id-attribute
 *      -> the best way because it is always going to be unique
 *      -> if id is provided one can conclude and verify webElement
 *      -> chroPath can be used to find the specific id-attribute
 *      -> To check if id-value is unique:
 *          -> In chropath -> //*[@id='id-Value']
 *          -> await $('#id-Value')
 * 2.) Using another attribute's value instead of id-attribute
 *      -> To check if any attribute has unique value or not: 
 *          -> in chroPath -> //tagName[@attrName='attrValue'];
 *      -> To find this webElement with non'id' attr:
 *          -> await $('tagName[attrName=attrValue]')
 *          -> this strat DOES NOT ALLOW SPACES IN ATTRVALUE
 * 3.) Using linkText (can be used only for links);
 *      -> To check if linkText is unique or not in chroPath:
 *          -> //a[text()='Link Text'] 
 *      -> if planning to use this strat:
 *          -> await $('=Link Text')
 * 4.) Using partial linkText (when links are too long)
 *      -> To check if partialLinkText is unique or not in chroPath:
 *          -> //a[contains(text(), 'partial link text')]
 *          -> const webElement = await $('*=partial link text')
 *      -> if planning to use this strat:
 *          -> await $('*=partial Link Text')
 * 5.) Using partial value of attribute
 *      -> To check if partial value is unique or not
 *          -> in chroPath : //tagName[contains(@attrName, 'partial attr value')]
 *          -> await $('tagName[attrName*=partialAttrValue]')
 * 6.) Using text value
 *      -> To check if textValue for element is unique or not in chroPath:
 *          -> //tagName[text()='text value']
 *      -> await $('tagName=textValue')
 * 7.) Using the partial text value
 *      -> To check if  partial textValue for element is unique or not in chroPath:
 *          -> //tagName[contains(text(), 'partialTextValue')]
 *          -> await $('tagName*=partialTextValue')
 * 8.) Using the tagName
 *      -> To check if a tagName is unique on an HTML DOM in chroPath
 *          -> //tagName
 *      -> await $('<tagName>');
 * 9.) Using className (cannot have spaces)
 *      -> To find if class's attribute value is unique:
 *          -> //*[@class='classAttrValue]
 *      -> await $('.classAttrValue');
 * 10.) xPath Types:
 *      -> 1.) Absolute xPath
 *          -> ALWAYS STARTS WITH SINGLE SLASH (/)
 *          -> TELLS THE ROUTE/NAVIGATION TO REACH A PARTICULAR WEBELEMENT FROM HTML-TAG
 *          -> NOT RELIABLE USED FOR THEORY ONLY.
 *          -> Tells you exactly which route to take when finding webElement (not that reliable);
 *          -> forgotten passWord absXpath
 *          -> /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/a[1]
 *          -> Websites are always changing to enhance user experience, so the abs xPath may not always work.
 *          -> Abs xPaths are only for theories
 *          -> if something changes on the website, it may disrupt your navigation flow.
 * 
 *      -> 2.) * Relative xPath *
 *          -> VERY IMPORTANT
 *          -> always starts with double slash (//) this is how you can distinguish between relative and absolute xPaths
 *          -> relaible because we can use tagName, attribute or test-value in any combination to create route to reach to a particular webElement
 *     
 *  -> DIRECT XPATH
 *      -> using an attributes value:
 *          -> //tagName[@attrName="attrValue"];
 *              -> find the tag (tagName) in dom which has attribute (attr) with the value as "attrValue"
 *      -> using textValue
 *          -> //tagName[text()="textValue"];
 *      -> using partial value of attribute 
 *          -> //tagName[contains(@attrName, "partal attrValue")]; 
 *      -> using partial text of attribute 
 *          -> //tagName[contains(text(), "partialTextValue")];
 *      -> using starts-with attribute
 *          -> //tagName[starts-with(@attr,"attrValue")];
 *      -> using starts-with text
 *          -> //tagName[starts-with(text(),"textValue")];
 *      -> using not-operator
 *          -> //tagName[not(@attrName="attrValue")];
 *                  -> find tag(tagName) in dom where attrName does not have value "attrValue"
 *          -> //tagName[not(@attrName)];
 *                  -> find tag(tagName) in dom where "attrName" does not exist.
 *          -> //tagName[not(text())] 
 *                  -> find tagName in dom where "text" does not exist
 *      -> using and/or operator
 *          -> //tagName[@attrName="attr value" and text()="text value"]  
 *              -> find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value" AND text-value equals to "text value"
 *                  
 *   
 */ 

/**
 * NOTE:
 *      -> //tagName[attrName]
 *      -> //tagName[text()]
 */

/**
 * Steps to interact with WebElement:
 * 1.) Find the unique locator strategy to find webElement
 * 2.) Based on the strategy, use respective code to find webElement
 * 3.) Once webElement is found, interact with webElement
 * 
 * await $('#idValue');
 * 
 * To find webElement:
 * function -> $
 */

/**
 * Interactions:
 * 1.) click
 *  -> function : click();
 * 
 * 2.) type
 *  -> function : setValue();
 *  -> input : string input which we want to type into webElement
 * 
 * 3.) enable
 *  -> To find if particular webElement is enabled or not:
 *  -> function : isEnabled();
 *      -> if enabled, returns true, otherwise false
 * 
 * 4.) display
 *  -> To find if webElement is displayed:
 *  -> function : isDisplayed()
 *      -> if displayed, returns true, otherwise false
 * 
 * 5.) selected
 *  -> To find if webElement is displayed:
 *  -> function : isSelected()
 *      -> if selected, returns true, otherwise false
 * 
 * 6.) value
 *  -> To find the value of an attribute:
 *  -> function : getAttribute()
 *      -> input : attribute
 *      -> returnType : string
 * 
 * 7.) textValue
 *  -> To get a text value of a webElement:
 *  -> function : getText()
 *      -> returnType : string
 * 
 */

/**
 * Links:
 *  -> something that always has an 'a-tag'
 *  -> text of a-tag (link) is known as linkText
 *  -> href : important attr -> value of href defines where the user will land after clicking the link
 * 
 * <a href="https://www.oculus.com/" title="Learn more about Oculus" target="_blank">Oculus</a>
 * 
 * attributes of a-tag -> href, target, title
 * text of a-tag -> Oculus
 * value of href-attribute -> https://www.oculus.com/
 */

/**
 * Indirect xPath (advanced xpath)
 * 
 * 1.) Using parent/grandparent tag to isolate webElement.
 *      -> //parentTag[@attrName='attrValue']//tagName[@attrName='attrValue'];
 *      -> double slash (//) tag to seek any tag within parent tag
 *      -> single slash (/) tag to seek only direct childrenTags.
 * 
 * 2.) Using xPath-axes
 *      (1) sometimes you can use siblingTags to create xPath.
 *      (2) following-sibling
 *          -> //tagName[condition(s)]/following-sibling::sibTag[condition(s)];
 *          -> sibling appears in the dom after the elementTag
 *      (3) preceding-sibling
 *          -> sibling appears in the dom before the elementTag
 *          -> //tagName[condition(s)]/preceding-sibling::sibTag[condition(s)];
 *      (4) following
 *          -> any tag appearing in the DOM after a particular tag.
 *          -> //formerTagName[@formerTagAttr="attrValue"]/following::targetTagName[conditions(s)];
 * 
 * eg.  Verify Log in link appears after Create a Page Link:
 *      //a[text()="Create a Page"]/following::a[@title="Log into Facebook"];
 * 
 *      (5) parent
 *          -> to refer to a target tag that is the parent of another tag
 *          -> //tagName[condition(s)]/parent::tagName[condition(s)];
 *          -> //tagName[condition(s)]/..;
 */