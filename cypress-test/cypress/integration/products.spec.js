describe('Products page', () => {
    before(()=> {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#login-button').click()
    })

    it('can add two item to cart', () => {
        cy.addCart('#add-to-cart-sauce-labs-backpack');
        cy.addCart('#add-to-cart-sauce-labs-bolt-t-shirt');
        cy.get('.shopping_cart_badge').should('contain', 2);
    })
})