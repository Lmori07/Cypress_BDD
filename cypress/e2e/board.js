import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";

let userdata;
Before(function () {
    // This hook will be executed before all scenarios.
    cy.fixture("example").then((data)=> {
        userdata = data;
      })
  });

Given("I am on empty home page", () => {
  cy.visit("/"+'/angularpractice/');
});

When("I type and submit in the board name", () => {
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', userdata.number);
});

Then("I should be redirected to the board detail", () => {
    cy.title().should('have.value','ProtoCommerce');
});
