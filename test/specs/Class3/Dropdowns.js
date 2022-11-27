const { it } = require("mocha");
const { expect } = require("chai");

/**
 * Types
 * 1.) with <select> tag dropdowns:
 *      -> option-tags have value-attribute
 *      -> option-tags have text-value (displayed on DOM)
 *      -> option-tags are present indexWise (0++)
 * 
 *  -> Steps to Interact
 *  1.) Find dropdown webElement (or select-tag)
 *  2.) Select specific value
 *      -> selectByVisibleText('textValue');
 *      -> selectByAttribute('attrName', 'attrValue');
 *      -> selectByIndex(index);
 * 
 * 
 * 2.) with any other tag dropdowns:
 *      ->
 */

describe('Dropdown Test', () => {

    it('', async () => {

        await browser.url('/');
        const newAccLink = await $('=Create new account');
        await newAccLink.click()

        await browser.pause(2000);

        const monthDrop = await $('#day');
        await monthDrop.selectByIndex(23);

        const dateDrop = await $('#year');
        await dateDrop.selectByAttribute('value', '1998');

        const yearDrop = await $('#month');
        await yearDrop.selectByVisibleText('Aug');

        await browser.pause(10000);










    })




})