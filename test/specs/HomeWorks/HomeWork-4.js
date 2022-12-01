const { expect } = require('chai');
const { it } = require('mocha');
const LoginPage = require('../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../POM/FaceBook/LoginErrorPage');
const MessengerLoginPage = require('../POM/Messenger/MessengerLoginPage');
const Dates = require('../POM/Dates');
const CreateNewAccPage = require('../POM/FaceBook/CreateNewAccPage');
const MessengerLoginErrorPage = require("../POM/Messenger/MessengerLoginErrorPage");
const DarkSkyHome = require('../POM/DarkSky/DarkSkyHome');
const Commands = require('../POM/Commands');

describe('HomeWork-4 TestCases', () => {

    it('', async () => {

        const commands = new Commands();
        const loginPage = new LoginPage();

        await browser.url('https://www.facebook.com/');

        const faceBookHandle = await commands.getHandle();

        await loginPage.openOculus()

        await browser.pause(2000);

        const allHandles = commands.getHandles();

        for (let handle of allHandles) {
            if(handle !== faceBookHandle) {
                await commands.switchWindow(handle)
                break;
            }
        }

        expect(await $('//span[text()="Support"]').isDisplayed(), '"Support" tag is not displayed').to.be.true;

        const oculusHandle = await commands.getHandle();

        const res = oculusHandle !== faceBookHandle;

        expect(res, 'Oculus was not launched in new window').to.be.true;

        await browser.pause(2000);

    })

    it.only('', async () => {

        const commands = new Commands();
        const loginPage = new LoginPage();

        await browser.url('https://www.facebook.com');

        await browser.pause(2000);

        await loginPage.openInstagram();
        await loginPage.openPortal();
        await loginPage.openMetaPay();
        await loginPage.openMessenger();
        


        const allHandles = await commands.getHandles();
        for (handle of allHandles) {
            await commands.switchWindow(handle);
            const expectedTitle = await browser.getTitle();
            if (!expectedTitle.startsWith('Meta Pay')) {
                await commands.closeTab();
            } 
        }
        await browser.pause(2000);

    })

})