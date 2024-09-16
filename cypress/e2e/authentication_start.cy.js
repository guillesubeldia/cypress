Cypress.Commands.add('login', () =>{  
    //using sessions wills speed up the testings tremendously
    cy.session('user1', () => {
        cy.visit('/login')

        cy.get('[data-cy="login-email"]')
            .type('email@gmail.com')

        cy.get('[data-cy="login-password"]')
            .type('Pass.123!')
        
        cy.get('[data-cy="login-submit"]')
            .click()

        cy.location('pathname')
            .should('eq','/')  
    }, {
        cacheAcrossSpecs: true,
        validate(){
            cy.getCookie('auth_token')
            .its('value')
            .then( token => {
                cy.request({
                    url: '/api/users/1',
                    headers: {
                        Authorization : 'Bearer $(token)' 
                    }
                })
            })
        }
    })  
})

it('Logged in usr sees private board', () =>{
    cy.login()
    cy.visit('/')
    cy.get('[data-cy=board-item]').should('be.visible')
})

it.only('Open the private Board', () => {
    cy.login()

    cy.visit('/')

    cy.get('[data-cy=board-item]')
        .first()
        .click()
})

it('Log out user', () => {
    cy.login()

    cy.visit('/')

    cy.get('[data-cy="logged-user"]')
        .first()
        .click()

    cy.contains('Get Started!')
        .should('be.visible')
})