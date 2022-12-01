const { expect } = require("chai");
const { it } = require("mocha");

/**
 * To scroll into view of an element:
 * scrollIntoView();
 */

describe("Scroll Test Cases", () => {


    it('Scroll example-1', async () => {


        await browser.url('https://www.darksky.net/');

        await browser.pause(2000);

        await $('//div[@id="timeMachine"]//a').scrollIntoView();

        await browser.pause(2000);

        await $('//div[@id="timeMachine"]//a').click();

        await browser.pause(2000);

        const is28Selected = await $('//td[@data-day="28"]').getAttribute('class');

        const expectedAttrValue = 'is-today';

        await browser.pause(2000);

        expect(is28Selected, 'Not expected').to.equal(expectedAttrValue);

        await browser.pause(2000);




    })








})