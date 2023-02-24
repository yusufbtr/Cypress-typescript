import { JsxEmit } from "typescript"

export class CheckoutPage{
    btn_add_to_cart = '#add-to-cart-sauce-labs-backpack'
    btn_cart = '#shopping_cart_container > a'
    btn_checkout = '#checkout'
    txt_firstname = '#first-name'
    txt_lastname = '#last-name'
    txt_postalcode = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    btn_back_to_home = '#back-to-products'

    clickAddToCart(){
        cy.get(this.btn_add_to_cart).click()
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }
    inputFirstname(firstname: string){
        cy.get(this.txt_firstname).type(firstname)
    }
    inputLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }
    inputPostalCode(postalcode: string){
        cy.get(this.txt_postalcode).type(postalcode)
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }
    clickBackToHome(){
        cy.get(this.btn_back_to_home).click()
    }
    assertCart(){
        cy.get('.title').should('be.visible')
        cy.get('.inventory_item_name').should('be.visible')
        cy.contains('Your Cart').should('contain','Your Cart')
        cy.contains('Sauce Labs Backpack').should('contain','Sauce Labs Backpack')
    }  
    checkoutYourInformation(firstname : string, lastname : string, postalcode : string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputPostalCode(postalcode)
        this.clickContinue()
    }
    checkoutYourInformationFail(firstname : string, lastname : string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.clickContinue()
    }
    assertCheckoutOverview(){
        cy.get('.title').should('be.visible')
        cy.contains('Checkout: Overview').should('contain','Checkout: Overview')
    }
    assertCheckoutComplete(){
        cy.get('.title').should('be.visible')
        cy.get('.complete-header').should('be.visible')
        cy.contains('Checkout: Complete!').should('contain','Checkout: Complete!')
        cy.contains('THANK YOU FOR YOUR ORDER').should('contain','THANK YOU FOR YOUR ORDER')
    }
    assertYourInformationFail(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: Postal Code is required').should('contain','Error: Postal Code is required')
    }
}