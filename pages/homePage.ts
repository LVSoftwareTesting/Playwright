import { Page } from "@playwright/test"

export default class HomePage {

    constructor(public page: Page) {}

    async clickOnSpecialMenuBtn() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle"}),
            await this.page.click("(//span[contains(text(), 'Special')]/../..)[2]")
        ])
    }

}