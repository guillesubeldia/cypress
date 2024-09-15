it.only('loads a list of boards form fixture', () =>{
    cy.intercept({
        method: 'GET',
        url: '/api/boards'
    },{
        body: [{
            name: "TAU",
            starred: true,
            id: 11,
            user: 0,
            created: '2024-09-09'
        }]
    }).as('boardList')

    cy.visit('/')
})

it('shows an error message when creating a board', () => {

})