// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

describe('Adicionar itens no carrinho', () => {
  before(() => {
    cy.visit('produtos/');
    cy.get('#primary-menu > .menu-item-629 > a').click();
  });

  it('Deve permitir apenas 10 produtos no carrinho', () => {
    cy.visit('produtos/page/13/');
    cy.adicionarProduto(3, 36, 'Blue', 11);
    //cy.get('.woocommerce-message > .button').click();
    // cy.get('.checkout-button').click();

    cy.get('.woocommerce-message').should('contain', 'não foram');
  });

  it('Deve permitir no carrinho valores até R$990,00', () => {
    cy.visit('produtos/page/7/');
    cy.adicionarProduto(4, 'M', 'Blue', 11);

    cy.get('.sub-title > .woocommerce-Price-amount > bdi').then(($value) => {
      const valueStr = $value[0].innerText.replace('R$', '').replace('.', '');
      const value = parseFloat(valueStr);
      expect(value <= 990).to.equal(true);
    });
  });

  it('Deve aplicar cupom desconto de 10% em produtos de R$200 e R$600', () => {
    cy.visit('produtos/page/11/');
    cy.adicionarProduto(5, 'M', 'Blue', 4);
    cy.get('.woocommerce-message > .button').click();
    cy.adicionarCupon('Ganhe10');

    cy.get('.woocommerce-message').should('contain', 'aplicado com sucesso');
  });

  it('Deve aplicar cupom de desconto de 15% em valores > que R$600', () => {
    cy.visit('produtos/page/11/');
    cy.adicionarProduto(5, 'M', 'Blue', 9);
    cy.get('.woocommerce-message > .button').click();
    cy.adicionarCupon('Ganhe15');

    cy.get('.woocommerce-message').should('contain', 'aplicado com sucesso');
  });
});
