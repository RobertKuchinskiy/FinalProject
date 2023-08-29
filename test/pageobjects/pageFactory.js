const { AuthPage } = require('./authPage');
const { BasePage } = require('./basePage');
const { Footer } = require('./components/footer');

class PageFactory {
    constructor() {
        this.authPage = new AuthPage();
        this.basePage = new BasePage();
        this.footer = new Footer();
    }
}

module.exports = new PageFactory();