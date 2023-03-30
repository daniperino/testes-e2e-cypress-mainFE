describe('Página incial', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
  })
  it('verificar o h1 com o texto correto', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
  });
  it('verificar o texto de vantagens do banco', () => {
    cy.verificaTexto('h2').contains('Vantagens do nosso banco:');
    });  
 
  
});