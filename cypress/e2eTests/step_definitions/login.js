import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPageObjects} from "../../selectors/login"

const loginPO = new loginPageObjects()

Given("user open the website", () =>{   
    cy.visit(Cypress.env("baseURL"))
    loginPO.getSignInLink().eq(0).click()
    loginPO.getCustomerLoginPageHeader()
        .should('be.visible')
        .should('have.text','Customer Login')
})
 
When("user enter the {string} and {string}",(username, password) =>{
    loginPO.getEmailInputBox().type(username)
    loginPO.getPasswordInputField().type(password)
    loginPO.getSignInButton().click()
})

Then("user login successfully",() =>{
    cy.log("user login successfully started")
    cy.wait(10000)
    // loginPO.getWelcomeText()
        //    .should('be.visible')
})