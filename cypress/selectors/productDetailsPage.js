export class productDetailPageObject{
    getProductName(){
        return cy.get(".page-title-wrapper span")
    }
    getProductPrice(){
        return cy.get(".product-info-main span.price")
    }
    getProductQuantity(){
        return cy.get("#qty")
    }
    getXSSize(){
        return cy.get(".product-info-main div.swatch-option.text#option-label-size-143-item-166")
    }
    getBlackColour(){
        return cy.get(".product-info-main div.swatch-option.color#option-label-color-93-item-49")
    } 
    getMessageAfterAddingCart(){
        return cy.get('.page.messages div[data-bind="html: $parent.prepareMessageForHtml(message.text)')
    }
    getAddToCartButton(){
        return cy.get("#product-addtocart-button")
    }
}