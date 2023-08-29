const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on auth page', () => {

    it('Should navigate to the login tab', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        expect(await pageFactory.basePage.getUrl()).to.include('/my/auth/');
    });

    it('Should successfully login', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await pageFactory.authPage.setEmail('robertkuchynski@gmail.com');
        await pageFactory.authPage.setPassword('8h7T4A');
        await pageFactory.authPage.clickLoginButton();
        expect(await pageFactory.authPage.findUserAvatar()).to.be.true;
    });

    it('Should fill in email and password fields', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await pageFactory.authPage.setEmail('test@gmail.com');
        await pageFactory.authPage.setPassword('12345678');
        expect(await pageFactory.authPage.emailInput.getValue()).to.equal('test@gmail.com');
        expect(await pageFactory.authPage.passwordInput.getValue()).to.equal('12345678');
    });

    it('Should fail to login with incorrect credentials', async () => {
        await pageFactory.authPage.navigate();
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await pageFactory.authPage.setEmail('invalid@gmail.com');
        await pageFactory.authPage.setPassword('incorrect');
        await pageFactory.authPage.clickLoginButton();
        expect(await pageFactory.authPage.popOver.isExisting()).to.be.true;
    });
});