describe('Testar menu burguer', () => {
    it('Acessar o menu burguer e clicar em Investimentos', () => {
        cy.visit('/')
        cy.viewport(375, 667) //configura o tamanho da janela
        //cy.viewport('iphone-xr') //configura o tamanho da janela
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('daniperino@gmail.com')
        cy.getByData('senha-input').type('Teste@123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')
        
    });
});