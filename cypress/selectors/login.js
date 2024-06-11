export class loginPageObjects{
     
    getSignInLink(){
        return cy.get(".authorization-link>a:first-of-type")
    }
    getCustomerLoginPageHeader(){
        return cy.get(".page-title span")
    }
    getEmailInputBox(){
        return cy.get("#email")
    }
    getPasswordInputField(){
        return cy.get("#pass")
    }
    getSignInButton(){
        return cy.get("#send2")
    }
    getWelcomeText(){
        return cy.xpath("//li/child::span[@class='logged-in'][1]")
    }
    getErrorMessage(){
        return cy.get('div.message div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
    }
}