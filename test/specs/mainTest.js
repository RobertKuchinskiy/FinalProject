const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on main page', async () => {

    it('Should successfully open the main page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        const title = await pageFactory.basePage.getTitle(); 
        expect(title).to.contain('OZ.by ');
    });

    it('Click on the Logo and verify the title', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        await pageFactory.authPage.clickAuthLink();
        const title = await pageFactory.basePage.getTitle(); 
        expect(title).to.equal('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    it('Should display the logo link on the main page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        expect(await pageFactory.authPage.logoLink.isDisplayed()).to.be.true; 
    });

    it('Check license page', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        await pageFactory.footer.goToLicenseLink();
        await browser.pause(1000);
        const pageTopText = $$('[class*="h"]');
        expect(pageTopText.isExcisting());
    });

    it('Should navigate to different pages from the footer links', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        await pageFactory.footer.goToSocialLink();
        await browser.pause(1000);
        const windowHandles = await browser.getWindowHandles();
        await browser.pause(1000);
        await browser.switchToWindow(windowHandles[1]);
        await browser.pause(1000);
        const newUrl = await browser.getUrl();
        expect(newUrl).to.contain('youtube.com');
    });

    it('Should verify the page title on different pages', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        expect(await pageFactory.basePage.getTitle()).to.contain('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
        const callBack = await $('.dark');
        await callBack.click();
        await browser.pause(1000);
        const modalboxContent = $('#modalbox-content');
        expect(await modalboxContent.isExisting()).to.be.true;
    });

    it('Should navigate to the homepage from the logo', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        const leftButton = $('.main-nav__list__item.menu-link-action.main-nav__list__item_spec');
        await leftButton.click();
        await browser.pause(1000);
        await pageFactory.authPage.logoLink.click();
        expect(await pageFactory.basePage.getTitle()).equal('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    it('Should display an error message when logging in with incorrect credentials', async () => {
        await pageFactory.authPage.navigate('https://oz.by/');
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await browser.pause(1000);
        await pageFactory.authPage.setEmail('invalid@gmail.com');
        await pageFactory.authPage.setPassword('incorrect');
        await browser.pause(1000);
        await pageFactory.authPage.clickLoginButton();
        await browser.pause(1000);
        await pageFactory.authPage.popOver;
        expect(await pageFactory.authPage.popOver.isExisting());
    });
    
});