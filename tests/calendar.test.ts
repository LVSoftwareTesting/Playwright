import { expect, test } from "@playwright/test";
import moment from "moment";

// test("Calendar demo using fill function", async({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

//     let date = "1994-09-02"
//     await page.fill("id=birthday", date)
//     await page.waitForTimeout(2000)
// }) 

test("Calendar demo using moment", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    await selectDate(13, "March 2020")
    await page.reload()
    await selectDate(14, "June 2025")
    await page.reload()
    await selectDate(17, "July 2023")

    async function selectDate(day:number, monthYear:string) {
        await page.click("//input[@placeholder='Start date']")
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prevBtn = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const nextBtn = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        const thisMonth = moment(monthYear, "MMMM YYYY").isBefore();
        console.log("this month?: " + thisMonth);

        while (await mmYY.textContent() != monthYear) {
            if (thisMonth){
                await prevBtn.click()
            } else {
                await nextBtn.click()
            }
        }

        await page.click("//td[@class='day'][text()='" + day + "']")
        await page.waitForTimeout(2000)
    }
}) 

