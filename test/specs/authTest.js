const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on auth page : ', () => {

    it('Should navigate to the login tab', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await browser.pause(5000);
        console.log(await pageFactory.authPage.loginButtonIsExisting())
        expect(await pageFactory.authPage.loginButtonIsExisting()).to.be.true;
    });

    it('Should successfully login', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await browser.pause(1000);
        await pageFactory.authPage.setEmail('robertkuchynski@gmail.com');
        await pageFactory.authPage.setPassword('8h7T4A');
        await browser.pause(1000);
        await pageFactory.authPage.clickLoginButton();
        await browser.pause(1000);
        const userIdText = await pageFactory.authPage.userId.getText();
        expect(userIdText).to.equal('oz32188873'); 
    });

});