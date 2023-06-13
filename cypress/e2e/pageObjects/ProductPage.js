class ProductPage {
    
    getSelectedProduct(){
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    }

    getCheckoutButton(){
        cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
        cy.get('#country').type('United States of America')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(element =>{
            const actualText = element.text()
            expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
        })
    }

    getTotalcheck(){
        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($element, index, $list) =>{
            //All this will be ASync that is why we are using then to only resolve the promise after all the loop is complete
            const actualValue = $element.text()
            var total = actualValue.split(" ")
            total = total[1].trim()

            sum=Number(sum)+Number(total)

            
        }).then(() => {
            cy.log(sum)
        })

        cy.get('.text-right > h3').then((element) => {
            const ammount = element.text()
            var total = ammount.split(".")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
    }

}

export default ProductPage;