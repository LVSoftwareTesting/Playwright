import { Page } from "@playwright/test"

export default class RegisterPage {

    constructor(public page: Page) {}

    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname").type(firstName)
    }

    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname").type(lastName)
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").type(email)
    }

    async enterTelephone(telephone: string) {
        await this.page.locator("#input-telephone").type(telephone)
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").type(password)
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page.locator("#input-confirm").type(confirmPassword)
    }

    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no")
    }

    async clickTermAndCondition() {
        await this.page.click("label[for='input-agree']")
    }

    async clickContinueToRegisterBtn() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click("//input[@value='Continue']")
        ])
    }
    
}