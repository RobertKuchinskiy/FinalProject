class AuthPage {

    get authLink() { return $('.top-panel__userbar__li .top-panel__userbar__auth'); }
    get loginTab() { return $('.i-nav-tabs__link'); }
    get emailInput() { return $('[tabindex="1"].i-input'); }
    get passwordInput() { return $('[tabindex="2"].i-input'); }
    get loginButton() { return $('.i-button.i-button_full-width.i-button_large.i-button_primary.i-popup__form-button.i-button_disabled'); }
    get userAvatar() { return $('.top-panel__userbar__user__ava'); }
    get popOver() { return $('.i-popover.i-popover_rude.i-popover_visible.i-popover_warning'); }
    get emptySearchResult () { return $('.breadcrumbs__list__item')}
    get logoLink() { return $('.top-panel__logo__item'); }

    clickAuthLink() {
        this.authLink.click();
    }

    async clickElement(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
    }

    clickLoginTab() {
        this.loginTab.click();
    }

    setEmail(email) {
        this.emailInput.setValue(email);
    }

    setPassword(password) {
        this.passwordInput.setValue(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    findUserAvatar() {
        this.userAvatar.isExisting();
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

}

module.exports = { AuthPage };