const { AuthPage } = require('./authPage');
const { BasePage } = require('./basePage');
const { Footer } = require('./components/footer');
const { Header } = require('./components/header');

class PageFactory {
    constructor() {
        this.authPage = new AuthPage();
        this.basePage = new BasePage();
        this.footer = new Footer();
        this.header = new Header();
    }
}

module.exports = new PageFactory();