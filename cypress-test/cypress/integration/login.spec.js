/// <reference types="cypress" />  
// vs code will support intellisense, identify cypress method

describe('Login page', () => {

    beforeEach(()=> {
      cy.login('standard_user', 'secret_sauce')
    })

    it('displays username validation', () => {
        cy.get('#user-name').clear();
        cy.get('#login-button').click();
        cy.get('[data-test=error]').should('contain', 'Epic sadface: Username is required');
    })

    it('can submit a valid form', () => {
        cy.get('#login-button').click()
    })
})