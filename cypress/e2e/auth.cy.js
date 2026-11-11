describe('Авторизація', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('не пускає неавторизованого користувача на головну', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });

  it('показує помилку для неуніверситетської пошти', () => {
    cy.login('student@gmail.com', 'password123');
    cy.get('[data-cy=error]').should('contain', 'університетську пошту');
  });

  it('входить з університетською поштою і виходить', () => {
    cy.fixture('user').then(({ email, password }) => {
      cy.login(email, password);
    });
    cy.url().should('include', '/dashboard');
    cy.get('[data-cy=greeting]').should('contain', 'anhelina.motria');
    cy.get('[data-cy=logout]').click();
    cy.url().should('include', '/login');
  });
});
