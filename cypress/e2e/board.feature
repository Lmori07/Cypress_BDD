Feature: Ecommerce functionality

  Scenario: Ecommerce fill form Fixture file
    Given I open Ecommerce page
    When I fill the form details
    Then Validate the form behavior
    Then Select the shop page

  
  Scenario: Review total amount of product selected and checkout process
    Given I open Ecommerce page
    Then I navigate to the shop page
    When I add items to Cart
    Then Validate the total prices
    Then Select the country submit and verify Thankyou
