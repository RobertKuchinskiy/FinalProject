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

    async click(selector) {
        await $(selector).click();
    }
}

module.exports = { BasePage };