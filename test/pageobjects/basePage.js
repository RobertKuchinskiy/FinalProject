class BasePage {
    async navigate(url) {
        await browser.url(url);
    }

    async getTitle() {
        return browser.getTitle(); 
    }

    async getUrl() {
        return browser.getUrl(); 
    }
}

module.exports = { BasePage };