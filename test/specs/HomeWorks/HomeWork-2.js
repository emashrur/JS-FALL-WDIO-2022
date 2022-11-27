/**
 * Verify current date is displayed by default on facebook sign up form 
 */

const { expect } = require("chai");
const { it } = require("mocha");

describe('HomeWork-2', () => {
    it('Verify current date is displayed by default on facebook sign up form', async () => {

        await browser.url('/');
        const newAccLink = await $('=Create new account');
        await newAccLink.click();

        const expectedMonth = 'Nov';
        const expectedDay = '27';
        const expectedYear = '2022';

        const monthDrop = await $('#month');
        const dayDrop = await $('#day');
        const yearDrop = await $('#year');







    })
})