const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on auth page : ', () => {

it('Should fill in email and password fields', async () => {
    await pageFactory.authPage.navigate();
    await pageFactory.authPage.clickAuthLink();
    await pageFactory.authPage.clickLoginTab();
    await browser.pause(2000);
    await pageFactory.authPage.setEmail('test@gmail.com');
    await pageFactory.authPage.setPassword('12345678');
    await browser.pause(2000);
    expect(await pageFactory.authPage.emailInput.getValue()).to.equal('test@gmail.com');
    expect(await pageFactory.authPage.passwordInput.getValue()).to.equal('12345678');
});

it('Should fail to login with incorrect credentials', async () => {
    await pageFactory.authPage.navigate();
    await pageFactory.authPage.clickAuthLink();
    await pageFactory.authPage.clickLoginTab();
    await browser.pause(2000);
    await pageFactory.authPage.setEmail('invalid@gmail.com');
    await pageFactory.authPage.setPassword('incorrect');
    await browser.pause(2000);
    await pageFactory.authPage.clickLoginButton();
    await browser.pause(2000);
    expect(await pageFactory.authPage.popOver.isExisting()).to.be.true;
});
});