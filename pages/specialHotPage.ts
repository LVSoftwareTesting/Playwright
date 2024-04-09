import { Page } from "@playwright/test"

export default class SpecialHotPage {

    constructor(public page: Page) {}

    async clickOnDesktopBtn() {
        await this.page.click("(//a[@class='nav-link'])[1]")
    }
    
}