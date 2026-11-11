// Власна команда: вхід через форму
Cypress.Commands.add('login', (email = 'anhelina.motria@student.uzhnu.edu.ua', password = 'password123') => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=submit]').click();
});
