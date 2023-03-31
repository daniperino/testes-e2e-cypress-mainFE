describe('formulário Cadastro',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('O usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Daniella Perino')
        cy.getByData('email-input').type('dani@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').end('have.text', 'Usuário cadastrado com successo')
        

    });
})