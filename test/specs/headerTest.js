const pageFactory = require('../pageobjects/pageFactory');
const { expect } = require('chai');

describe('OZ.by tests on header : ', () => {

    it('Should navigate to delivery info page', async () => {
        await pageFactory.authPage.navigate();
        await browser.pause(1000);
        await pageFactory.header.deliveryInfoOpen();
        await browser.pause(1000);
        await browser.url('https://oz.by/help/assistant.phtml?l=i.order.supply');
        const pageTitleElement = await $('big.h');
        const pageTitleText = await pageTitleElement.getText();
        expect(pageTitleText).to.equal('Виды доставки');
    });

    it('Should navigate to payment info page', async () => {
        await pageFactory.authPage.navigate();
        await browser.pause(1000);
        await pageFactory.header.payInfoOpen();
        await browser.pause(1000);
        await browser.url('https://oz.by/help/assistant.phtml?l=i.order.payment');
        const pageTitleElement = await $('big.h');
        const pageTitleText = await pageTitleElement.getText();
        expect(pageTitleText).to.equal('Формы и способы оплаты');
    });

    it('Should navigate to help info page', async () => {
        await pageFactory.authPage.navigate();
        await browser.pause(1000);
        await pageFactory.header.helpInfoOpen();
        await browser.pause(1000);
        await browser.url('https://oz.by/help/');
        const pageTitleElement = await $('.main-title');
        const pageTitleText = await pageTitleElement.getText();
        expect(pageTitleText).to.equal('Справка');
    });

    it('Should navigate to bonus info page', async () => {
        await pageFactory.authPage.navigate();
        await browser.pause(1000);
        await pageFactory.header.bonusProgramInfoOpen();
        await browser.pause(1000);
        await browser.url('https://oz.by/bonus/');
        const pageTitleElement = await $('.guide__title');
        const pageTitleText = await pageTitleElement.getText();
        expect(pageTitleText).to.equal('Как накопить бонусные баллы?');
    });
});