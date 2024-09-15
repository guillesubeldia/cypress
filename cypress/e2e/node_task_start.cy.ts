it('resets a database', () =>{
    cy.task('seedDatabase', {
        boards: [{
            name: "Hello world",
            id: 1,
            starred: true,
            user: 0,
            created :  '2024-09-13'
        }],
        cards: [],
        lists: [],
        users: []
    })
    cy.visit('/')
});
