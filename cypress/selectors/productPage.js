export class productPageObjects{
    getCartButtonFromHomePage()
    {
        return cy.get(".action.showcart")
    }
    getCartDivFromHome(){
        return cy.get(".minicart-wrapper")
    }
    getEmptyCartMessage(){
        return cy.get(".subtitle.empty")
    }
    getCloseEmptyDialogButton(){
        return cy.get(".action.close")
    }
    getCountOFProducts(){
        return cy.get(".toolbar-amount>span")
    }
    getCountOfVisibleProduct(){
        return cy.get("ol.products.list.items.product-items>li")
    }
    getFirstProductFromResult(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type")  
    }
    getFirstProductName(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div a.product-item-link")
    }
    getFirstProductPrice(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div div span.price")
    }
    // getAddToCartButton(){
    //     return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div div.actions-primary button")
    // }


    //Cart Details
    getproductNameFromCartDialog(){
        return cy.get("#minicart-content-wrapper  .minicart-items-wrapper  strong.product-item-name a")
    }
    getproductPriceFromCartDialog(){
        return cy.get("#minicart-content-wrapper  .minicart-items-wrapper  span.price")
    }
    getproductQuantityFromCartDialog(){
        return cy.get("#minicart-content-wrapper  .minicart-items-wrapper  input")
    }
    getviewCartButtonFromCartDialog(){
        return cy.get(".action.viewcart")
    }
    
}