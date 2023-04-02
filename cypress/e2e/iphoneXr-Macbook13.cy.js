describe('Testar o menu burguer no iphone XR e no Macboock 13', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Menu burguer deve ser visivel no Iphone XR', () => {
        cy.viewport('iphone-xr') //414 x 896

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('daniperino@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').should('be.visible')
    });

    it('Menu burguer não deve ser visivel no Macbook 13', () => {
        cy.viewport('macbook-13') // 1280 x 800

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('daniperino@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').should('not.be.visible') 
    });
});