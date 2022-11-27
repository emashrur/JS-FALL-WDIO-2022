const { expect , assert } = require("chai");
const { it } = require("mocha");
/**
 * Automate below testcase:
 * 
 * Due date: Nov 18 (EOD)
 * 
 * TC-1:
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account
 * 3. Verify female-gender button is not selected
 * 4. Verify male-gender button is not selected
 * 5. Verify custom-gender button is not selected
 * 6. If female gender is NOT selected, then click on female gender radio button
 * 7. Verify female-gender button is selected
 *
 * 
 * 
 * 
 * 
 */

describe('HomeWork1 TestCases', () => {
    it('Verify gender radio buttons are working properly', async () => {
        await browser.url('/');
        const newAccountButton = await $('*=Create');
        newAccountButton.click()

        await browser.pause(2000);

        const femaleRadio = await $('input[value="1"]');
        const maleRadio = await $('input[value="2"]');
        const customRadio = await $('input[value="0"]');

        const femaleRadioIsSelected = await femaleRadio.isSelected();
        const maleRadioIsSelected = await maleRadio.isSelected();
        const customRadioIsSelected = await customRadio.isSelected();

        expect(femaleRadioIsSelected, 'Female radio is already selected').to.be.false;
        expect(maleRadioIsSelected, 'Male radio is already selected').to.be.false;
        expect(customRadioIsSelected, 'Custom radio is already selected').to.be.false;

        await browser.pause(2000);

        if(!femaleRadioIsSelecte) {
            await femaleRadio.click();
            await browser.pause(2000);
            const femaleRadioIsSelected2 = await femaleRadio.isSelected();
            expect(femaleRadioIsSelected2, 'Female radio is not selected').to.be.true;
        }

        await browser.pause(2000);


    })
})