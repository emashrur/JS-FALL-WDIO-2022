const { expect } = require('chai');
const { it } = require('mocha');
const Commands = require('../POM/Commands');

describe('Multiple WebElements Tests', () => {
    /**
     * To find multiple webElements:
     * function : $$
     * return : an array of webElements
     */

    it('Verify there are 46 links on facebook login page', async () => {
        
        await browser.url('https://www.facebook.com/');

        const allLinks = await $$('<a>');

        expect(allLinks.length, 'Number of tag links do not match expected').to.equal(46);

    })

    it('Get all temp-values from DarkSky timeline', async () => {
        
        await browser.url('https://www.darksky.net/');
        const allTempElements = await $$('//span[starts-with(@class, "hour")]//span');
        const allTempValues = [];

        for (const tempElement of allTempElements) {
            allTempValues.push(await tempElement.getText());
        }

        console.log(`\nallTempValues -> ${allTempValues}\n`);

    })

    it.only('Pick value from auto-suggestion', async () => {

        await browser.url('https://www.hotels.com/');

        await $('//button[@aria-label="Going to"]').click();
        await $('#destination_form_field').setValue('new');

        await browser.pause(2000);

        const allSuggestions = await $$('//div[@class="truncate"]//strong');

        await browser.pause(2000);

        for (const suggestion of allSuggestions) {
            const sugText = await suggestion.getText();
            if (sugText.toLowerCase().localeCompare('Manhattan'.toLowerCase()) === 0) {
                await suggestion.click();
                break;
            }
        }

        await browser.pause(2000);

        const goingToText = await $('//input[@placeholder="Placeholder"]/following-sibling::button[@aria-label]').getText();
        const isManhattan = goingToText.toLowerCase().includes('manhattan');

        expect(isManhattan, '"Going-to" field does not not have expected value').to.be.true;

    })

})

