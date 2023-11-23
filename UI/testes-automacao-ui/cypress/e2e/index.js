describe('Adicionar itens no carrinho', () => {
    before(() => {
      cy.visit('produtos/');
      cy.get('#primary-menu > .menu-item-629 > a').click();
    });
  
    it('Deve adicionar 3 produtos diferentes no carrinho', () => {
      cy.visit('produtos/page/4/');
      cy.adicionarProduto(3, 32, 'Black');
      

    })
})