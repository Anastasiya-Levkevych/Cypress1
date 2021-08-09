/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('http://localhost:1667/#/login')
    });

    const email = 'user32@hotmail.com';
    const password = 'Userpass1';
    const username = 'user32'

    it('', () => {
        cy.get(':nth-child(2) > .nav-link').click();

        cy.get(':nth-child(1) > .form-control').type(email);
        cy.get(':nth-child(2) > .form-control').type(password);

        cy.get('.btn').click();

        cy.get('.navbar').contains(username).should('exist');

    });
});