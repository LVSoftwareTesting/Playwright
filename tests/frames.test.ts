import { expect, test } from "@playwright/test";

test("Interact with frames", async({page}) => {
    await page.goto("https://letcode.in/frame")

    // const allFrames = page.frames()  
    // console.log("Number of frames: " + allFrames.length)

    // const myFrame = page.frame("firstFr")
    // // if(myFrame != null)
    // //     await myFrame.fill("input[name='fname']", "Lubomir")
    // await myFrame?.fill("input[name='fname']", "Lubomir")
    // await myFrame?.fill("input[name='lname']", "Volcko")

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Lubomir")
    await frame.locator("input[name='lname']").fill("Volcko")

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("test@test.com")

    await frame.locator("input[name='fname']").fill("letcode")
}) 


