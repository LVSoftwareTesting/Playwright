import { expect, test } from "@playwright/test";

// test("Download file", async({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
//     await page.type("#textbox", "Document testing @ .com")
//     await page.click("#create")
//     // await page.click("#link-to-download")
//     const download = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("#link-to-download")
//     ])
//     // const path = await download.path()
//     // console.log("Path to downloaded file: " + path)
//     const fileName = download[0].suggestedFilename()
//     await download[0].saveAs(fileName)

//     await page.waitForTimeout(2000)
// }) 

test("Upload file", async({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    
    // await page.setInputFiles("input[type='file']", ["uploadFiles/1.jpg", "uploadFiles/2.jpg"])

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple()
    console.log("Is file chooser multiple?: " + isMultiple)
    uploadFiles.setFiles(["uploadFiles/1.jpg", "uploadFiles/2.jpg"])

    await page.waitForTimeout(2000)
}) 