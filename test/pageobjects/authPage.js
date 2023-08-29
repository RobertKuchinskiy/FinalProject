class AuthPage {
    get authLink() { return '//a[@class="top-panel__userbar__auth"]'; }
    get loginTab() { return '[id="loginFormLoginEmailLink"]'; }
    get loginButton() { return '.i-popup__form-button[form="loginForm"]'; }
    get emailInput() { return $('.i-input-group__cell .i-input[type="email"]'); }
    get passwordInput() { return $('.i-input[type="password"]'); }
    get userId() { return $('.top-panel__userbar__user__name'); }
    get popOver() { return $('.i-popover.i-popover_rude.i-popover_visible.i-popover_warning'); }
    get emptySearchResult () { return $('.breadcrumbs__list__item'); }
    get logoLink() { return $('.top-panel__logo__item'); }
    get personalOrder() { return $('a.top-panel__userbar__orders'); }
    get orderNumber() { return $('.order-card__line.order-card__line_number'); }
    get firstProduct() { return $('.product-card__link'); }
    get addToBusket() { return $('.product-card__button')}

    async navigate() {
        await browser.url('https://oz.by/');
    }

    async clickAuthLink() {
        console.log(this.authLink)
        await $(this.authLink).click();
        await browser.pause(1000);
    }

    async clickLoginTab() {
        await $(this.loginTab).click();
        await browser.pause(1000);
    }

    async clickElement(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
    }

    async loginButtonIsExisting() {
       return await $(this.loginButton).isExisting();
    }

    async setEmail(email) {
        this.emailInput.setValue(email);
    }

    async setPassword(password) {
        this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        console.log(this.loginButton)
        await $(this.loginButton).click();
        await browser.pause(1000);
    }

    findPopOver() {
        this.popOver.isExisting();
    }

    async initiateEmptySearch() {
        await this.searchButton.click();
    }

    async searchWithInput(input) {
        await this.searchInput.setValue(input);
        await this.searchButton.click();
    }

    clickLogoButton() {
        this.logoLink.click();
    }

    async personalOrderOpen() {
        console.log(this.personalOrderOpen)
        await $(this.personalOrder).click();
        await browser.pause(1000);
    }

    async setSearch(query) {
        const searchInnerDiv = $('.top-panel__search__inner');
        const searchInput = await searchInnerDiv.$('.top-panel__search__input.ui-autocomplete-input');
        await searchInput.click();
        await searchInput.setValue(query);
    }

    async searchButtonClick() {
        const searchInnerDiv = $('.top-panel__search__inner');
        const searchButton = await searchInnerDiv.$('.top-panel__search__btn');
        await searchButton.click();
    }

}

module.exports = { AuthPage };