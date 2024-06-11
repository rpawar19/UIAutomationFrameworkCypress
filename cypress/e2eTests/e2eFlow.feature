Feature: End to End Flow

Scenario: Register new User 
    Given user navigate to registration page
    When user submit the form
    Then user should create successfully

Scenario Outline: Buy Product
    Given user open the website
    When user enter the "<username>" and "<password>"
    Then user login successfully
    Then Ensure cart is empty
    Then Navigate to any Women Jacket page
    Then open first product
    When add the product to cart
    Then verify product added to cart
    Then navigate to Shopping cart and verify all details 
    # And Ensure 
    # Then verify product added to Cart

Examples: 
      | username                   | password   |
      | testuser9@testdomain.com    | asdf#123  |