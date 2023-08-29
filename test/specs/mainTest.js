const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on main page', async () => {

    it('Should successfully open the main page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        const title = await pageFactory.basePage.getTitle(); 
        expect(title).to.contain('OZ.by ');
    });

    it('Click on the Logo and verify the title', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await pageFactory.authPage.clickLoginButton();
        const title = await pageFactory.basePage.getTitle(); 
        expect(title).to.equal('Интернет-магазин OZ.by');
    });

    it('Should display the logo link on the main page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        expect(await pageFactory.authPage.logoLink.isDisplayed()).to.be.true; 
    });

    it('Check Youtube footer link navigation', async () => {
        await pageFactory.footer.goToSocialLink();
        const url = await pageFactory.basePage.getUrl(); 
        expect(url).to.contain('youtube.com');
    });

    it('Check license page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await pageFactory.footer.footerExist.isDisplayed(); 
        await pageFactory.footer.goToLicenseLink();
        const currentUrl = await pageFactory.basePage.getUrl(); 
        expect(currentUrl).to.equal('https://oz.by/help/assistant.phtml?l=i.license');
    });

    it('Should navigate to different pages from the footer links', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await pageFactory.footer.goToSocialLink();
        expect(await pageFactory.basePage.getUrl()).toContain('youtube.com');
        await pageFactory.basePage.navigate('https://oz.by/');
        await pageFactory.footer.goToLicenseLink();
        expect(await pageFactory.basePage.getUrl()).toBe('https://oz.by/help/assistant.phtml?l=i.license');
    });

    it('Should verify the page title on different pages', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        expect(await pageFactory.basePage.getTitle()).toContain('OZ.by ');
        await pageFactory.authPage.navigate();
        expect(await pageFactory.basePage.getTitle()).toContain('Вход');
        // добавьте аналогичные проверки для других страниц
    });

    it('Should navigate to the homepage from the logo', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await pageFactory.authPage.logoLink();
        expect(await pageFactory.basePage.getTitle()).toBe('Интернет-магазин OZ.by');
    });

    it('Should display an error message when logging in with incorrect credentials', async () => {
        await pageFactory.authPage.navigate('https://oz.by/');
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await pageFactory.authPage.setEmail('invalid@gmail.com');
        await pageFactory.authPage.setPassword('incorrect');
        await pageFactory.authPage.clickLoginButton();
        expect(await pageFactory.authPage.popOver.isExisting()).toBe(true);
    });
    
});