import {When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
import {menuPageObjects} from "../../selectors/menubar"
import {productPageObjects} from "../../selectors/productPage"
import {productDetailPageObject} from "../../selectors/productDetailsPage"
import { shoppingCartPO } from "../../selectors/shoppingCartPage";

const menuPO = new menuPageObjects()
const productPO = new productPageObjects()
const productDetailPO = new productDetailPageObject()
const shoppCartPO = new shoppingCartPO()


let productName = null
let productPrice = null
let productQuantity = null




Then("Ensure cart is empty",()=>{
    cy.log("Ensure cart is empty - Started")
    productPO.getCartButtonFromHomePage().click()
    productPO.getEmptyCartMessage().should('be.visible').should('have.text','You have no items in your shopping cart.')
    productPO.getCloseEmptyDialogButton().should('be.visible').click()
})
Then("Navigate to any Women Jacket page",()=>{
    cy.log("Navigate to any Women Jacket page - Started")

    menuPO.getWomenMenuOption().should('be.visible').trigger('mouseover')
    menuPO.getTopSubMenu().should('be.visible').trigger('mouseover')
    menuPO.getJacketsMenu().should('be.visible').trigger('mouseover').click()
    menuPO.getJacketPageHeader().should('be.visible')
                                .should('have.text','Jackets')

})
Then("open first product",()=>{
    cy.log("open first product - Started")
    productPO.getFirstProductFromResult().click()
    productDetailPO.getProductName().then((pname)=>{
        productName = pname.text()
        cy.log(productName)

    })
    productDetailPO.getProductPrice().then((pprize)=>{
        productPrice = pprize.text()
        cy.log(productPrice)

    })
    productDetailPO.getProductQuantity().then((pquantity)=>{
        productQuantity = pquantity.attr('value')
        cy.log(productQuantity)

    })

})
When("add the product to cart",()=>{
cy.wait(5000)
productDetailPO.getBlackColour().click({force:true})
productDetailPO.getXSSize().click({force:true})
productDetailPO.getAddToCartButton().should('be.visible').click()

})

Then("verify product added to cart",()=>{
productDetailPO.getMessageAfterAddingCart().contains(productName)
// cy.reload()
productPO.getCartButtonFromHomePage().click()
productPO.getproductNameFromCartDialog().then((prodName)=>{
    expect(prodName.text()).equal(productName)
})
productPO.getproductPriceFromCartDialog().then((cartPrice)=>{
    expect(cartPrice.text()).equal(productPrice)

})
productPO.getproductQuantityFromCartDialog().invoke('attr','data-item-qty').should("eq",productQuantity)
})
Then("navigate to Shopping cart and verify all details",()=>{
    productPO.getviewCartButtonFromCartDialog().click()
    shoppCartPO.getShoppingPageTitle().then((pageTitle)=>{
        expect(pageTitle.text()).equal('Shopping Cart')
    })
    shoppCartPO.getProceedTocheckoutbutton().should('be.visible').click({force:true})
    
})