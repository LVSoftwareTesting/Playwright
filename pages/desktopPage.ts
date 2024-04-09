import { Page } from "@playwright/test"

export default class DesktopPage {

    constructor(public page: Page) {}

    async hoverOnFirstProduct() {
        return await this.page.hover("(//div[@class='image'])[1]")
    }

    async addFirstProductIntoCart() {
        this.hoverOnFirstProduct()
        await this.page.locator("(//button[contains(@class,'btn btn-cart')])[1]").click()
    }

    async isToastVisible() {
        const toast = this.page.locator("//a[.='View Cart ']")
        await toast.waitFor({state:"visible"})
        return toast
    }
    
}