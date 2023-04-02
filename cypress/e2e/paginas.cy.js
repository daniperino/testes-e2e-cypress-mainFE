describe('Testando multiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('daniperino@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()

        
        cy.location('pathname').should('eq', '/home')

        /*.find('a') encontra o elemento a da pagina, para pegar "cartões" é um array
        .eq(1) é o comando igual a posição do array 1*/
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').end('have.text', 'Meus cartões')

        cy.location('pathname').should('eq', '/home/cartoes')
    })
})