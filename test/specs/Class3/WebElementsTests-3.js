const { expect } = require("chai");
const { it } = require("mocha");

describe('WebElements Test Cases', () => {

    it('Verify user gets error for invalid login credentials', async () => {

        await browser.url('/');

        const userNameInput = await $('#email');
        await userNameInput.setValue('4389#&$^');

        await browser.pause(2000);

        const passWordInput = await $('#pass');
        await passWordInput.setValue('wrongpassword');

        await browser.pause(2000);

        const logInButton = await $('<button>');
        await logInButton.click();

        await browser.pause(2000);

        const errorMessage = await $('*=Find');
        const isErrorDisplayed = await errorMessage.isDisplayed();
        expect(isErrorDisplayed, 'Error message link is not displayed').to.be.true;

        const isErrorMessageEnabled = await errorMessage.isEnabled();
        expect(isErrorMessageEnabled, 'Error message link is not enabled').to.be.true;

        await browser.pause(2000);

        const textErrorMssg = await $('div*=email or mobile');
        const textErrorMssgDisplayed = await textErrorMssg.isDisplayed();
        expect(textErrorMssgDisplayed, 'Text error message is not displayed').to.be.true;

        await browser.pause(2000);





    })
    
    
    
    
    it('Verify default state of login fields', async () => {

        await browser.url('/');

        // Verify loginEmail has default text as "Email address or phone number"

        const expectedLogInText = 'Email or phone number';
        const emailField = await $('#email');
        const emailFieldText = await emailField.getAttribute('placeholder');

        expect(emailFieldText, 'Login email field has different text from expected').to.equal(expectedLogInText);

        const expectedPassText = 'Password';
        const passField = await $('#pass');
        const passFieldText = await passField.getAttribute('placeholder');

        expect(passFieldText, 'Login password field has different text from expected').to.equal(expectedPassText);

        const expectedLogInButtonText = 'Log In';
        const loginButton = await $('<button>');
        const loginButtonText = await loginButton.getText();

        expect(loginButtonText, 'Login button text is different from expected').to.equal(expectedLogInButtonText);


    })

    // it('', async () => {})













})