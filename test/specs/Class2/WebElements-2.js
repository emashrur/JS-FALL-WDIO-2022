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
 *          -> const webElement = $('*=partial link text')
 *      -> if planning to use this strat:
 *          -> await $('=partial Link Text')
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
 *  -> function : isDisplayed
 *      -> if displayed, returns true, otherwise false
 * 
 * 5.) selected
 *  -> To find if webElement is displayed:
 *  -> function : isSelected
 *      -> if selected, returns true, otherwise false
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