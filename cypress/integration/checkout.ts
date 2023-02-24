import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CheckoutPage } from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Success Checkout Products', () => {

    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    cy.viewport(1537, 976)
    dashboardPage.sauceLabsBackpack()
    checkoutPage.clickAddToCart()
    checkoutPage.clickCart()
    checkoutPage.assertCart()
    cy.wait(2000)
    checkoutPage.clickCheckout()
    checkoutPage.checkoutYourInformation('Yusuf', 'Bachtiar', '140467')
    cy.wait(2000)
    checkoutPage.assertCheckoutOverview()
    cy.wait(2000)
    checkoutPage.clickFinish()
    checkoutPage.assertCheckoutComplete()
    cy.wait(2000)
    checkoutPage.clickBackToHome()
})

it('Failed Checkout Products', () => {

    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    cy.viewport(1537, 976)
    dashboardPage.sauceLabsBackpack()
    checkoutPage.clickAddToCart()
    checkoutPage.clickCart()
    checkoutPage.assertCart()
    cy.wait(2000)
    checkoutPage.clickCheckout()
    checkoutPage.checkoutYourInformationFail('Yusuf', 'Bachtiar')
    cy.wait(2000)
    checkoutPage.assertYourInformationFail()
    cy.wait(2000)
})
