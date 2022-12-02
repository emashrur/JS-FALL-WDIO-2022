const { expect } = require('chai');

/**
 * function : getWindowHandle()
 * returnType : string
 * 
 * To get all the windoehandles for windows opened due to automation
 * function : getWindowHandles()
 * returnType : array
 * 
 * To determine which windowHandle is which, a loop must be run:
 * for-of(array) / for-in(object)
 * 
 ***** for (const handle of allHandles) {
 *****      if (handle !== originalHandle) {
 *****          browser.switchToHandle(handle);
 *****          break;
 *****      }
 *****  }
 * 
 * To change/switch the handle value in browser-object
 * function : switchToWindow()
 * 
 * 
 */


describe('Multiple Windows Tests', () => {

    it('Multiple Windows Test-1', async () => {


        await browser.url('/');

        await browser.pause(2000);

        const fbPage = await browser.getWindowHandle();
        
        await $('=Oculus').click();

        const allHandles = await browser.getWindowHandles();

        for (handle of allHandles) {
            if(handle !== fbPage) {
                browser.switchToWindow(handle)
                break;
            }
        }

        await browser.pause(2000);

        expect(await $('//span[text()="Support"]').isDisplayed(), '"Support" tag is not displayed').to.be.true;

        const oculusHandle = await browser.getWindowHandle();

        const res = oculusHandle !== fbPage

        expect(res, 'Oculus was not launched in new window').to.be.true;

        await browser.pause(2000);

    })

    it('Close all windows except FaceBook pay', async () => {

        await browser.url('/');

        await browser.pause(2000);

        const allHandles = await browser.getWindowHandles()







    })

})