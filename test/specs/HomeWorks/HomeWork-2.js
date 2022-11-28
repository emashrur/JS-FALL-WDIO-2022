// Due date: Nov 21 (Mon)
const { expect } = require("chai");
const { it } = require("mocha");



describe('HomeWork-2', () => {
    it('Facebook: Verify current date is displayed on Sign-Up form', async () => {



        /**
         * TC-1: https://www.facebook.com/
         * Facebook: Verify current date is displayed on Sign-Up form
         * 
         * Steps:
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         * 3. Verify current date is displayed in Date of birth dropdowns
         *
         */


        await browser.url('/');
        await $('=Create new account').click();

        await browser.pause(5000);

        //  expectedMonth = 'Nov';
        //  expectedDay = '27';
        //  expectedYear = '2022';

        const monthField = await $('//option[text()="Nov"]').isSelected();
        const dayField = await $('//option[text()="27"]').isSelected();
        const yearField = await $('//option[text()="2022"]').isSelected();

        console.log('\n-------------');
        console.log(monthField);
        console.log(dayField);
        console.log(yearField);
        console.log('-------------\n');

        expect(monthField, 'Expected month is not selected by default').to.be.true;
        expect(dayField, 'Expected day is not selected by default').to.be.true;
        expect(yearField, 'Expected year is not selected by default').to.be.true;

        await browser.pause(5000);



    })


    it('Facebook: Verify user gets error when submits empty login form', async () => {


        /**
         * TC-2: https://www.facebook.com/
         * Facebook: Verify user gets error when submits empty login form
         * 
         * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
         */
        
        await browser.url('/');

        await $('//button[@name="login"]').click();

        const expectedMessage = 'The email or mobile number you entered isn’t connected to an account. Find your account and log in.';

        const errorMssg = await $('//div[contains(text(), "email or mobile")]').getText();

        expect(errorMssg, 'Error message does not match expected message').to.equal(expectedMessage);
        
        
    })

    it('Facebook: Verify user gets error when submits empty login form', async () => {


        /**
         * TC-3: https://www.facebook.com/
         * Facebook: Verify user gets error when submit empty login on messenger screen
         * 
         * 1. Click Messenger
         * 2. Verify "Keep me signed in" is NOT selected
         * 3. Click "Log in" button
         * 4. Verify link (Find your account and log in.) is displayed
         * 5. Verify "Continue" button is enabled
         * 6. Verify "Keep me signed in" is NOT selected
         * 7. Click "Keep me signed in" checkbox
         * 8. Verify "Keep me signed in" is selected
         * 
         */

        await browser.url('https://www.messenger.com/');

        await browser.pause(2000);

        await $('//button[@id="loginbutton"]').click();
        

        const findAccLink = await $('//a[text()="Find your account and log in."]').isDisplayed();

        expect(findAccLink, 'The link "Find your account and log in." is not displayed').to.be.true;

        const continueButton = await $('//button[text()="Continue"]').isEnabled();

        expect(continueButton, '"Continue" button is not enabled').to.be.true;

        const keepMeSignedIn = await $('//input[@type="checkbox"]');
        const isKeepMeSignedIn = await keepMeSignedIn.isSelected();

        expect(isKeepMeSignedIn, '"Keep me signed in" checkbox is selected').to.be.false;

        await $('//span[@class=""]').click();

        const isKeepMeSignedIn2 = await keepMeSignedIn.isSelected();

        expect(isKeepMeSignedIn2, '"Keep me signed in" checkbox is not selected').to.be.true;

        await browser.pause(5000);

    })


    it.only('Facebook: Verify user gets error when submits empty login form', async () => {


        /**
         * TC-4: https://www.darksky.net/
         * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
         * 
         * 31˚(string) -> 31(string) -> 31(number)
         * 25˚(string) -> 25(string) -> 25(number)
         * 39˚(string) -> 39(string) -> 39(number)
         * 
         * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
         * 
         */

        await browser.url('https://www.darksky.net/');

        await browser.pause(2000);

        let feelsLikeTemp = await $('//span[@class="feels-like-text"]').getText();
        let lowTemp = await $('//span[@class="low-temp-text"]').getText();
        let highTemp = await $('//span[@class="high-temp-text"]').getText();

        feelsLikeTemp = feelsLikeTemp.substring(0,feelsLikeTemp.length-1);
        lowTemp = lowTemp.substring(0,feelsLikeTemp.length-1);
        highTemp = highTemp.substring(0,feelsLikeTemp.length-1);

        const res = feelsLikeTemp >= lowTemp && feelsLikeTemp <= highTemp;

        expect(res, 'Feels-like-temp is not between the value of lowTemp and highTemp').to.be.true;
        
        

     
        
        
    })
    








})