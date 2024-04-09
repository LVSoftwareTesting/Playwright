import { expect, test } from "@playwright/test";

// test("Handling alerts", async({page}) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

//     const textPass = "Lubomir"

//     page.on("dialog", async (alert) => {
//         const text = await alert.defaultValue()
//         console.log(text)
//         // await alert.accept()
//         await alert.accept(textPass)
//         // await alert.dismiss()
//     })

//     // const clickMe1 = page.locator("(//button[@type='button'])[1]")
//     // const clickMe1 = page.locator("button:has-text('Click Me')").nth(0)
//     // await clickMe1.click()

//     // const clickMe2 = page.locator("button:has-text('Click Me')").nth(1)
//     // await clickMe2.click()
//     // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")

//     const clickMe3 = page.locator("button:has-text('Click Me')").nth(2)
//     await clickMe3.click()
//     expect(page.locator("id=prompt-demo")).toContainText(textPass)

// }) 

test("Handling bootstrap alerts", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")

    await page.locator("(//button[text()='Launch Modal'])[1]").click()
    await page.click("(//button[text()='Save Changes'])[1]")
    
}) 
