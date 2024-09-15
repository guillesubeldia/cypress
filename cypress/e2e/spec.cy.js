//cy.visit('/board/1')
    //cy.contains('.board','new board')//puede tener dos argumentos, el primero funciona como un get
    //cy.get('.board')//usando la clase
    //cy.get('#board-1') //usando id
    //cy.get('[data-cy="board-item"]') //usando atributos html
    //    .first() //seleccionar el elemento que queremos first, eq0 eq1 , y last.. ademas tiene mas comandos para moverse por el DOM
it('create new list and a new card', () => {
    cy.visit('/board/1')
   
    cy.get('[data-cy="add-list-input"]')
        .type("new list{enter}")
    cy.contains('Add another card')
        .click()
    cy.get('[data-cy="new-card-input"]')
        .type('new card{enter}')    
})
//al usar .only, directamente va a correr este y evitar los otros
it.only('new test' , () => {
    cy.visit('/')
    //cypress no puede emular el hover, se puede forzar el checkeo
    cy.get('[data-cy="star"]')
        .first()
        .click({force: true})
});