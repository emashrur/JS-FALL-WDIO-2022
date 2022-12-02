const { expect , assert } = require("chai");

describe('WebElements Test Cases', () => {

    it('TestCase using id-locator', async () => {

        /**
         * 1.) Launch facebook.com
         * 2.) type 'deepak@gmail.com' as username
         * 3.) type 'abcd@1234' as password
         */

        await browser.url('/');
        await browser.pause(2000);

        const userNameElement = await $('#email');
        await userNameElement.setValue('emashrur@gmail.com');
        const passWordElement = await $('#pass');
        await passWordElement.setValue('abcd@1234');
        
        await browser.pause(2000);

        const showPassWord = await $('div[class=_9lsa]');
        await showPassWord.click()

        await browser.pause(2000);

        const logInButton = await $('button[name=login]');
        await logInButton.click();

        await browser.pause(10000);
        
        // guessed answer : 
        // await browser.url('/');
        // await browser.pause(2000);
        // await browser.click(userNameElement);
        // await browser.setvalue('deepak@gmail.com');
        // await browser.click(passWordElement);
        // await browser.setvalue('abcd@1234');
        // await browser.pause(2000);
        // WRONG


    })

    it('Click create new account button using linkText', async () => {

        await browser.url('/');

        await browser.pause(3000);

        const newAcc = await $('=Create new account');
        await newAcc.click();

        await browser.pause(3000);





    })

    it('Click create new account button using partialLinkText', async () => {

        await browser.url('/');

        await browser.pause(3000);

        const newAcc = await $('*=te new');
        await newAcc.click();

        await browser.pause(3000);


    })

    it('Verify login input fields and button are enabled by default', async () => {

        await browser.url('/');
        await browser.pause(2000);

        /**
         * 1.) Launch facebook.com
         * 2.) Verify email input field is enabled
         * 3.) Verify password input field is enabled
         * 4.) Verify login button is enabled
         * 
         */

        const loginEmailInput = await $('input[data-testid=royal_email]');
        const isLoginEmailInput = await loginEmailInput.isEnabled();
        expect(isLoginEmailInput, 'Login email input box is not enabled').to.be.true;

        await browser.pause(2000);

        const pwdInput = await $('input[placeholder=Password]');
        const isPwdInput = await pwdInput.isEnabled();
        expect(isPwdInput, 'Login Password input box is not enabled').to.be.true;

        await browser.pause(2000);



    })

    it('Verify user gets error for invalid login credentials', async () => {

        await browser.url('/');

        const userNameInput = await $('#email');
        await userNameInput.setValue('4389#&$^');

        await browser.pause(2000);

        const passWordInput = await $('#pass');
        await passWordInput.setValue('wrongpassword');

        await browser.pause(2000);

        const logInButton = await $('button[name=login]');
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

    it('Verify default no gender button is not selected on sign up page', async () => {

        await browser.url('/');

        const createNewAcc = await $('*=Create');
        createNewAcc.click();

        await browser.pause(2000);

        const femaleRadio = await $('input[value="1"]');
        const maleRadio = await $('input[value="2"]');
        const customRadio = await $('input[value="-1"]');
        const femaleRadioIsSelected = await femaleRadio.isSelected();
        const maleRadioIsSelected = await maleRadio.isSelected();
        const customRadioIsSelected = await customRadio.isSelected();

        expect(femaleRadioIsSelected, 'Female gender button is selected').to.be.false;
        expect(maleRadioIsSelected, 'Male gender button is selected').to.be.false;
        expect(customRadioIsSelected, 'Custom gender button is selected').to.be.false;

        await browser.pause(2000);




    })



})