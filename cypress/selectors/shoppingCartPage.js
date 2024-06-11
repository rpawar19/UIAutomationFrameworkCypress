export class shoppingCartPO{
    getShoppingPageTitle(){
        return cy.get('.page-title>span')
    }
    getProductNamefromShoppingCart(){
        return cy.get('tbody.cart.item>tr.item-info>td.col.item  strong>a')

    }
    // getProductPricefromShoppingCart(){

    // }
    // getProductquantityfromShoppingCart(){

    // }
    // getProductSubtotal(){

    // }
    // getOrderTotal(){

    // }
    getProceedTocheckoutbutton(){
        return cy.get('button.action.primary.checkout:last-of-type')
    }
}