const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on search page', async () => {

    it('Should be able to search for a product', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await pageFactory.authPage.searchInput.setValue('book'); 
        await pageFactory.authPage.searchButton.click(); 
        expect(await pageFactory.basePage.getUrl()).to.equal('https://oz.by/search/?q=book');
    });

    it('Should handle search with incorrect input', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await pageFactory.authPage.searchInput.setValue('11111111111'); 
        await pageFactory.authPage.searchButton.click(); 
        expect(await pageFactory.basePage.getUrl()).to.contain('https://oz.by/search/?q=11111111111');
        expect(await pageFactory.authPage.emptySearchResult.isDisplayed()).to.be.true; 
    });

    it('Should initiate search with correct input and verify search results', async () => {
        await pageFactory.basePage.navigate('https://oz.by/'); 
        await pageFactory.authPage.searchInput.setValue('book'); 
        await pageFactory.authPage.searchButton.click(); 
        expect(await pageFactory.basePage.getUrl()).to.contain('/search/?q=book');
    });
});