/// <reference types='cypress' />
it('making assertions', () => {
    cy.visit('/board/1')
    cy.get('[data-cy="card-checkbox"]')
        .check()
    cy.get('[data-cy="card-checkbox"]')
        .should('be.checked')

    cy.get('[data-cy="due-date"]')
        .should('have.class', 'completed')
}) 