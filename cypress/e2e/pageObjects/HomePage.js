class Homepage {
    //All elements from homepage will be added here.

    //Locators.
    nameTextBox=":nth-child(1) > .form-control";
    dataBindingTextBox=":nth-child(4) > .ng-pristine";
    genderDropDown="select";
    entrepenuerRadioButton="#inlineRadio3";
    shopLink=":nth-child(2) > .nav-link";

    getNameTextBox(Name){
        return cy.get(this.nameTextBox).type(Name);
    }

    getNameTextBoxMinChar(Number){
        return cy.get(this.nameTextBox).should('have.attr', 'minlength', Number);
   }

    getDataBindingTextBox(Name) {
        return cy.get(this.dataBindingTextBox).should('have.value', Name);
    }

    getGenderDropdown(Gender) {
        return cy.get(this.genderDropDown).select(Gender);
    }

    getEntrepenuerRadioButton() {
        return cy.get(this.entrepenuerRadioButton).should('be.disabled');
    }

    getShopLink() {
        return cy.get(this.shopLink).click();
    }

}

export default Homepage;