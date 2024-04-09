import { Page } from "@playwright/test"

export default class LoginPage {

    constructor(public page: Page) {}

    async login(email: string, password: string) {
        await this.enterLoginEmail(email)
        await this.enterLoginPassword(password)
        await this.clickLoginBtn()
    }

    async enterLoginEmail(email: string) {
        await this.page.locator("#input-email").type(email)
    }

    async enterLoginPassword(loginPassword: string) {
        await this.page.locator("#input-password").type(loginPassword)
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//input[@value='Login']")
        ])
    }
    
}