import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"
import DesktopPage from "../pages/desktopPage"

const email: string = "john.doe1234@gmail.com"
const password: string = "Test@123"

test("Register test_01", async ({ page, baseURL }) => {
    const register: RegisterPage = new RegisterPage(page)
    
    await page.goto(`${baseURL}route=account/register`)
    await register.enterFirstName("John")
    await register.enterLastName("Doe")
    await register.enterEmail(email)
    await register.enterTelephone("+421952334589")
    await register.enterPassword(password)
    await register.enterConfirmPassword(password)
    expect(register.isSubscribeChecked()).toBeChecked()
    await register.clickTermAndCondition()
    await register.clickContinueToRegisterBtn()
})

test("Login test_02", async ({ page, baseURL }) => {
    const login = new LoginPage(page)

    await page.goto(`${baseURL}route=account/login`)
    await login.login(email, password)
    expect(await page.title()).toBe("My Account")
})

test("Add to cart test_03", async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const specialPage = new SpecialHotPage(page)
    const desktopPage = new DesktopPage(page)

    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(email, password)
    await homePage.clickOnSpecialMenuBtn()
    await specialPage.clickOnDesktopBtn()
    await desktopPage.addFirstProductIntoCart()
    const isCartVisible = await  desktopPage.isToastVisible()
    expect(isCartVisible).toBeVisible()
})