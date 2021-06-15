describe('Your Cart page', () => {
    before(()=> {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#login-button').click()

        cy.addCart('#add-to-cart-sauce-labs-backpack')
        cy.addCart('#add-to-cart-sauce-labs-bolt-t-shirt')

        cy.get('.shopping_cart_link').click()
    })

    it('display two cart correctly', () => {
        cy.get('.inventory_item_name').should(($list)=>{
            expect($list).to.have.length(2);
            expect($list[0]).to.have.text('Sauce Labs Backpack')
            expect($list[1]).to.have.text('Sauce Labs Bolt T-Shirt')
        })                      
    })
})