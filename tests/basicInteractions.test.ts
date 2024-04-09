import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const messageInput = page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    if((await messageInput.inputValue()).length === 0)
        console.log('Before entering data: EMPTY')
    else
        console.log('Before entering data: '+await messageInput.inputValue())
    await messageInput.type("Hi Lubomir")
    console.log('After entering data: '+await messageInput.inputValue()) //get value we input
})

test("Interaction with Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const sum1Input = page.locator("#sum1")
    const sum2Input = page.locator("#sum2")
    const result = page.locator("#addmessage")
    const getValuesBtn = page.locator("//button[text()='Get Sum']")

    await sum1Input.scrollIntoViewIfNeeded()

    let num1 = 1
    let num2 = 2

    await sum1Input.type("" + num1)
    await sum2Input.type("" + num2)
    await getValuesBtn.click()
    console.log("RESULT: " + await result.textContent())
    let expectedResult = num1 + num2
    expect(result).toHaveText("" + expectedResult)

    await page.waitForTimeout(3000)
    
})

test("Interaction with checkbox", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    const singleCheckbox = page.locator("#isAgeSelected")
    expect(singleCheckbox).not.toBeChecked()
    await singleCheckbox.check()
    expect(singleCheckbox).toBeChecked()
})