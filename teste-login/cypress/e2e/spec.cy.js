describe('Autenticação na plataforma de login', () => {
  before(() => {
    cy.visit('/minha-conta/');
  });

  // afterEach(() => {
  //   cy.get(
  //     '.woocommerce-MyAccount-navigation-link--customer-logout > a'
  //   ).click();
  // });

  it('Deve exibir mensagem de erro, caso usuário erre login e senha', () => {
    cy.fixture('perfil2').then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
    cy.get('.woocommerce-error > li').should('contain', 'Erro');
  });

  it('Deve fazer login apenas usuários ativos', () => {
    cy.visit('/minha-conta/');
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get(
      '.woocommerce-MyAccount-navigation-link--customer-logout > a'
    ).click();
  });

  it('Deve permitir login com email de usuário', () => {
    cy.visit('/minha-conta/');
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.email, dados.senha);
    });
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get(
      '.woocommerce-MyAccount-navigation-link--customer-logout > a'
    ).click();
  });

  it('Deve permitir login com o nome do usuário', () => {
    cy.visit('/minha-conta/');
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get(
      '.woocommerce-MyAccount-navigation-link--customer-logout > a'
    ).click();
  });

  it('Deve permitir login com CPF do usuário', () => {
    cy.visit('/minha-conta/');
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.cpf, dados.senha);
    });
    cy.get('.woocommerce-error > li').should('contain', 'Minha conta');
  });

  it.only('Login deve travar por 15 minutos após 3 tentativas', () => {
    cy.fixture('perfil2').then((dados) => {
      for (let i = 0; i < 4; i++) {
        cy.login(dados.usuario, dados.senha);
      }
      cy.get('.woocommerce-error > li').should('contain', '15 minutos ');
    });
  });
});
