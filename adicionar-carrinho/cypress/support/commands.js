// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'adicionarProduto',
  (ordemProduto, tamanho, cor, quantidade) => {
    cy.get(
      `.grid.product:nth-of-type(${ordemProduto}) > .product-block`
    ).click();
    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text').clear().type(`${quantidade}`);
    cy.get('.single_add_to_cart_button').click();
  }
);

Cypress.Commands.add('adicionarCupon', (cupon) => {
  cy.get('#coupon_code').type(cupon);
  cy.get('.coupon > .btn').click();
});
