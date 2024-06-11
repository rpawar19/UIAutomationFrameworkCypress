import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {signupPageObject} from "../../selectors/signup"

const signUpPO = new signupPageObject()

Given("user navigate to registration page",()=>{
    cy.visit(Cypress.env("baseURL"))
    signUpPO.getSignUpLink().eq(0).click()
    signUpPO.getsignupPageHeader().should('be.visible').should('have.text','Create New Customer Account')
})
When("user submit the form",()=>{
    cy.fixture('signupTestData').then( (testData)=>{
        signUpPO.getFirstNameInputField().type(testData.FirstName)
        signUpPO.getLastNameInputField().type(testData.LastName)
        signUpPO.getEmailIdInputField().type(testData.Email)
        signUpPO.getPasswordInputField().type(testData.Password)
        signUpPO.getConfirmPasswordInputField().type(testData.Password)
        signUpPO.getCreateAccountButton().should('be.visible').click()
    })
})
Then("user should create successfully",()=>{
    signUpPO.getRegistrationMessage().should('be.visible').should('have.text','Thank you for registering with Main Website Store.')
})
