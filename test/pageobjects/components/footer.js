const { BasePage } = require('../basePage');

class Footer extends BasePage {
    constructor() {
        super();
        this.socialLinkYoutube = ".footer-full__social-list a:nth-child(6)";
        this.licenseLink = ".footer-full__info-line-link";
        this.footerExist = ".footer-full__inner"; 
    }

    async goToSocialLink() {
        await baseElement.clickElement(this.socialLinkYoutube);
    }

    async goToLicenseLink() {
        await baseElement.clickElement(this.licenseLink);
    }
}

module.exports = { Footer };