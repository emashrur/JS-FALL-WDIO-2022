const { expect } = require("chai");
const { it } = require("mocha");
const LoginPage = require('../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../POM/FaceBook/LoginErrorPage');
const MessengerLoginPage = require('../POM/Messenger/MessengerLoginPage');
const Dates = require('../POM/Dates');
const CreateNewAccPage = require('../POM/FaceBook/CreateNewAccPage');
const MessengerLoginErrorPage = require("../POM/Messenger/MessengerLoginErrorPage");
const DarkSkyHome = require('../POM/DarkSky/DarkSkyHome');



describe("TestCases Using POM", () => {

    it('Facebook: Verify current date is displayed on Sign-Up form', async () => {
    
        const loginPage = new LoginPage();
        const createPage = new CreateNewAccPage();

        await browser.url('https://www.facebook.com/');

        await loginPage.clickCreateNewAcc();

        await browser.pause(2000);

        const currentDay = Dates.getCurrentDate('day');
        const currentMonth = Dates.getCurrentDate('month');
        const currentYear = Dates.getCurrentDate('year');
        console.log('\n-----------');
        console.log(currentDay);
        console.log(currentMonth);
        console.log(currentYear);
        console.log('-----------\n');

        // expect(await createPage.getDaySelected() === currentDay, 'Default day does not match expected day').to.be.true;
        expect(await createPage.getMonthSelected() === currentMonth, 'Default day does not match expected month').to.be.true;
        expect(await createPage.getYearSelected() === currentYear, 'Default day does not match expected year').to.be.true;

    })

    it('Facebook: Verify user gets error when submits empty login form', async () => {

        const loginPage = new LoginPage();
        const loginErrorPage = new LoginErrorPage();

        const expectedError = 'The email or mobile number you entered isn’t connected to an account. Find your account and log in.';

        await browser.url('https://www.facebook.com');

        await loginPage.clickLoginButton();

        await browser.pause(2000);

        expect(await loginErrorPage.getError(), 'Error message does not match expected error message').to.equal(expectedError);

    })

    it('Facebook: Verify user gets error when submits empty login form', async () => {

        const loginPage = new LoginPage();   
        const messenger = new MessengerLoginPage(); 
        const messengerError = new MessengerLoginErrorPage();  

        await browser.url('https://www.facebook.com/');

        await loginPage.openMessenger();

        await browser.pause(1000);

        expect(await messenger.isChecked(), '"Keep me signed in" checkbox is selected').to.be.false;

        await messenger.clickLogIn();

        expect(await messengerError.findAccLinkDisplayed(), '"Find your account" link is not displayed').to.be.true;

        expect(await messengerError.isChecked(), '"Keep me signed in" checkbox is selected').to.be.false;

        await messengerError.checkBox();

        await browser.pause(2000);

        expect(await messengerError.isChecked(), '"Keep me signed in" checkbox is not selected').to.be.true;

    })

    it('Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
        const darkSky = new DarkSkyHome();

        await browser.url('https://www.darksky.net/');

        await browser.pause(5000);

        let feelsLikeTemp = await darkSky.getFeelsLikeTemp();
        let highTemp = await darkSky.getHighTemp();
        let lowTemp = await darkSky.getLowTemp();

        feelsLikeTemp = Number(feelsLikeTemp.split('˚')[0]);
        highTemp = Number(highTemp.split('˚')[0]);
        lowTemp = Number(lowTemp.split('˚')[0]); 

        expect(feelsLikeTemp >= lowTemp && feelsLikeTemp <= highTemp, 'Feels-like-temp is not between the value of lowTemp and highTemp').to.be.true;

    })

})