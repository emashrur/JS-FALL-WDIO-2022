/**
 * mocha framework will help you in two ways
 * 1.) write down your testcases
 * 
 * 
 * codeBlock: 
 *  describe-block
 *      block which represents a test-suite for a feature 
 *  it-block
 *      block which represents a testcase
 * 
 * WebDriver Global Variable:
 *  ->browser
 * 
 * Async-await functions:
 * allows testcase to run line by line
 * 
 * it.only -> to only run one testcase;
 * 
 * 
 */

const { expect } = require("chai");

describe('SampleTestCases', () => {

    it('TestCase-1', () =>{

        const res = 2 + 2;

        // verify value of res = 4
        expect(res, '').to.equal(4);

    });

    it('Launch facebook.com', async () => {

        /**
         * To launch a webpage
         * function : url()
         * input : url link that you wish to open
         */
        await browser.url('/');

        /**
         * To pause the execution of a testcase/code
         * function : pause()
         * input : milliSeconds you want to pause
         */

        await browser.pause(3000);

    });

    it('Verify facebook url', async () => {
        /**
         * Steps to verify Facebook URL :
         * 1.) Launch chrome browser
         * 2.) Launch 'https://www.facebook.com/'
         * 3.) Verify the url is ''https://www.facebook.com/'
         *      -> To get the current-url on the webpage(web-browser)
         *      -> function : getUrl()
         *      -> returnType : string 
         */

        // 2.)

        await browser.url('/');

        // 3.)

        const currentUrl = await browser.getUrl();
        const expectedUrl = 'https://www.facebook.com/';

        expect(currentUrl, 'facebook.com does not go to expected url').to.equal(expectedUrl);


    });

    it('Verify page title is "Facebook - log in or sign up"', async () =>{
        await browser.url('/');
        /**
         * To verify a page title on a webpage(web-browser)
         * function : getTitle()
         * returnType : string
         */
        const currentTitle = await browser.getTitle();
        const expectedTitle = 'Facebook - log in or sign up';

        expect(currentTitle, 'Current title is not expected title').to.equal(expectedTitle);
    });

    it('Misc functions from browser', async () => {
        await browser.url('/');
        /**
         * To get the window handle on a webpage(web-browser)
         * function : getWindowHandle()
         * returnType : string
         */

        const currentWindowHandle = await browser.getWindowHandle()

        console.log('\n windowHandle \n');
        console.log(currentWindowHandle);
        console.log('\n windowHandle \n');

       await browser.pause(3000); 

        /**
        * To go back in browser
        * function : back();
        */

        await browser.back();

        await browser.pause(3000);

        /**
         * To go forward in browser 
         * function : forward()
         */

        await browser.forward();

        await browser.pause(3000);

        /**
         * To refresh a webpage
         * function : refresh()
         */

        await browser.refresh();

        await browser.pause(3000)

        /**
         * Other ways to refresh a webpage:
         * 1.) go back() then go forward() await in between
         * 2.) re-launch the current url
         *      -> get current url using getUrl();
         *      -> browser.url(getUrl())
         */

        await browser.back();
        await browser.pause(2000);
        await browser.forward();

        const currentUrl = await browser.getUrl();
        await browser.url(currentUrl);

        await browser.pause(3000);



    });

    it('Verify page title is starts with "faCeBoOk" while ignoring cases', async () => {
        await browser.url('/');
        /**
         * To verify a page title starts with a specific string on a webpage(web-browser).
         * function : getTitle()
         * returnType : string
         * expect currentTitle.startsWith('Facebook');
         */

        const expectedStartsWith = 'faCeBoOk';
        const currentTitle = await browser.getTitle();
        const startsWithRes = currentTitle.toLowerCase().startsWith(expectedStartsWith.toLowerCase());


        expect(startsWithRes, 'Current title does not start with expected title "faCeBoOk"').to.equal(true);
    });

});