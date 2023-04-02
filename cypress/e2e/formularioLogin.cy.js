describe('Formulário de Login',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('Não deve permitir um email invalido', () => {
        cy.getByData("botao-login").click()
        cy.getByData('email-input').type('daniperino@gmail')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it('Não deve permitir email vazio', () => {
        cy.getByData("botao-login").click()
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    });
})