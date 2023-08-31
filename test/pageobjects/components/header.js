const { BasePage } = require('../basePage');

class Header extends BasePage {

    constructor() {
        super();
        this.deliveryButton = '(//*[@class="top-panel__hnav__li top-panel__hnav__li_r"])[2]';
        this.payButton = '(//*[@class="top-panel__hnav__li top-panel__hnav__li_r"])[1]';
        this.helpButton = '(//*[@class="top-panel__hnav__li top-panel__hnav__li_r"])[3]'; 
        this.bonusProgramButton = '(//*[@class="top-panel__hnav__li top-panel__hnav__li_r"])[4]';
    }

    async deliveryInfoOpen() {
        await this.click(this.deliveryButton);
    }

    async payInfoOpen() {
        await this.click(this.payButton);
    }

    async helpInfoOpen() {
        await this.click(this.helpButton);
    }

    async bonusProgramInfoOpen() {
        await this.click(this.bonusProgramButton);
    }

}

module.exports = { Header };