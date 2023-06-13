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

When('I add items to Cart', () => {
    //This is been held be the custom command create to select multiple products.
    userdata.productName.forEach(function (element) {
        cy.selectProduct(element)
       });
});

Then('Validate the total prices', () => {
    productPage.getSelectedProduct()
    productPage.getTotalcheck()    
})

Then('Select the country submit and verify Thankyou', () => {
    productPage.getCheckoutButton()
})

Then('I navigate to the shop page', () =>  {
    homePage.getShopLink()
})