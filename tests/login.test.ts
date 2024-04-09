import { chromium, test } from "@playwright/test"

test("Login demo test", async () => {
    const browser = await chromium.launch({
        headless: false
    }); //browser engine
    const context = await browser.newContext(); //new window (no share cookies with another context)
    const page = await context.newPage(); //new tab

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
    //await page.click("text=Login")
    await page.click("'Login'")

    await page.fill("input[name='email']", "volckin@gmail.com ")
    await page.fill("input[name='password']", "Test123")
    await page.click("input[value='Login']")

    await page.waitForTimeout(5000)

    const newContext = await browser.newContext()

    const newPage = await newContext.newPage()
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    await page.waitForTimeout(5000)
})