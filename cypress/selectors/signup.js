export class signupPageObject{
    getSignUpLink(){
        return cy.get('.header.links li a[href="https://magento.softwaretestingboard.com/customer/account/create/"]:nth-child(1)')
    }
    getsignupPageHeader(){
        return cy.get(".page-title span")
    }
    getFirstNameInputField(){
        return cy.get("#firstname")
    }
    getLastNameInputField(){
        return cy.get("#lastname")
    }
    getEmailIdInputField(){
        return cy.get("#email_address")
    }
    getPasswordInputField(){
        return cy.get("#password")
    }
    getConfirmPasswordInputField(){
        return cy.get("#password-confirmation")
    }
    getCreateAccountButton(){
        return cy.get(".action.submit.primary")
    }
    getRegistrationMessage(){
        return cy.get('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
    }
}