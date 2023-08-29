const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on search page', async () => {

    it('Should be able to search for a product', async () => {
        await pageFactory.basePage.navigate('https://oz.by/');
        await browser.pause(1000);
        await pageFactory.authPage.setSearch('book');
        await browser.pause(1000);
        await pageFactory.authPage.searchButtonClick();
        expect(await pageFactory.basePage.getUrl()).to.equal('https://oz.by/search/?q=book');
    });

    it('Should handle search with incorrect input', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await browser.pause(1000);
        await pageFactory.authPage.setSearch('11111111111'); 
        await browser.pause(1000);
        await pageFactory.authPage.searchButtonClick(); 
        await browser.pause(1000);
        expect(await pageFactory.basePage.getUrl()).to.contain('https://oz.by/search/?q=11111111111');
        expect(await pageFactory.authPage.emptySearchResult.isDisplayed()).to.be.true; 
    });

    it('Should initiate search with correct input and verify search results', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await browser.pause(1000);
        await pageFactory.authPage.setSearch('book'); 
        await browser.pause(1000);
        await pageFactory.authPage.searchButtonClick(); 
        await browser.pause(1000);
        expect(await pageFactory.basePage.getUrl()).to.contain('/search/?q=book');
        expect(await pageFactory.authPage.firstProduct.isDisplayed()).to.be.true;
        await pageFactory.authPage.addToBusket.click();
        await browser.pause(3000);
        const cartCountElement = await $('.top-panel__userbar__cart__count');
        const cartCount = await cartCountElement.getText();
        await browser.pause(1000);
        expect(cartCount).to.equal('1');

    });

    it('Should initiate search with correct input and verify search results', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await pageFactory.authPage.clickAuthLink();
        await pageFactory.authPage.clickLoginTab();
        await browser.pause(1000);
        await pageFactory.authPage.setEmail('robertkuchynski@gmail.com');
        await pageFactory.authPage.setPassword('8h7T4A');
        await browser.pause(1000);
        await pageFactory.authPage.clickLoginButton();
        await browser.pause(1000);
        await pageFactory.authPage.setSearch('book'); 
        await browser.pause(1000);
        await pageFactory.authPage.searchButtonClick(); 
        await browser.pause(1000);
        expect(await pageFactory.basePage.getUrl()).to.contain('/search/?q=book');
        expect(await pageFactory.authPage.firstProduct.isDisplayed()).to.be.true;
        await browser.pause(5000);
        const lovelyProduct = await $('.product-card__favorite');
        const lovely2Product = await $('.product-card__favorite.like.like_active');
        const lovProd = await lovelyProduct.click();
        await browser.pause(1000);
        await lovely2Product.click();
        await browser.pause(1000);
        expect(await lovelyProduct.isDisplayed());
    })
});