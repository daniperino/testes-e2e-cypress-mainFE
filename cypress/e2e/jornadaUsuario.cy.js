describe('Jornadas de usuário', () => {
    it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('daniperino@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq','/home');

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        //pega o elemento <li> .last é o ultimo elemento <li> que contem o valor 80
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq','/');
        cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')

    });
    it('Deve realizar cadastro na aplicação, logo depois fazer login com esse novo cadastro', () => {
        cy.visit('/')

        
    });
});