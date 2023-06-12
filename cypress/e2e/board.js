import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../e2e/pageObjects/HomePage"
import ProductPage from "../e2e/pageObjects/ProductPage"

const homePage = new Homepage()
const productPage = new ProductPage()

let userdata;
Before(function () {
    // This hook will be executed before all scenarios.
    cy.fixture("example").then((data)=> {
        userdata = data;
      })
  });

Given('I open Ecommerce page', () => {
  cy.visit("/"+'/angularpractice/');
});

When('I fill the form details', () => {
    homePage.getNameTextBox(userdata.name)
    homePage.getGenderDropdown(userdata.gender)
});

Then('Validate the form behavior', () => {
    homePage.getNameTextBoxMinChar(userdata.number)
    homePage.getDataBindingTextBox(userdata.name)
    homePage.getEntrepenuerRadioButton()
});

Then('Select the shop page', () => {
    homePage.getShopLink()
})