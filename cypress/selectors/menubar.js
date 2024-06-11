export class menuPageObjects{
    getWomenMenuOption(){
        return cy.xpath("//span[contains(text(),'Women')]/parent::a")
    }
    getTopSubMenu(){
        return cy.get("#ui-id-9")
    }
    getJacketsMenu(){
        return cy.get("#ui-id-11")
    }
    getJacketPageHeader(){
        return cy.get("#page-title-heading>span")
    }
}