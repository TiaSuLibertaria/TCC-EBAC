describe('Adicionar itens no carrinho', () => {
 

  it('Deve adicionar 3 produtos diferentes no carrinho', () => {
    cy.visit('/produtos/page/4');
    cy.adicionarProduto(3, 32, 'Black');
    
    cy.visit('/produtos/page/3');
    cy.adicionarProduto(1, 32, 'Blue');

    cy.visit('/produtos/page/2');
    cy.adicionarProduto(7, 32, 'Black');

    cy.get('.dropdown-toggle >.mini-cart-items').should('contain', '3')

  })
})