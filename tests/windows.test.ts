import { Page, test } from "@playwright/test";

test("Interact with frames", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    
    // console.log("MAIN URL: " + page.url())

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ])

    // console.log(newWindow.url())

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])

    await multiPage.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log("Number of tabs: " + pages.length)

    pages.forEach(tab => {
        console.log(tab.url())
    })

    let facebookPage: Page
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url()
        if (url == "https://www.facebook.com/lambdatest/"){
            facebookPage = pages[index]
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log("H1 text on facebook is: " + text)

    // await pages[1].fill("", "test")


}) 


