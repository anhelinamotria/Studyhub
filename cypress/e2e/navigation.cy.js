describe('Навігація', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.login();
  });

  it('відкриває всі сторінки з бокового меню', () => {
    cy.contains('a', 'Розклад').click();
    cy.contains('h1', 'Розклад групи').should('be.visible');
    cy.contains('a', 'Дедлайни').click();
    cy.contains('h1', 'Дедлайни').should('be.visible');
    cy.get('[data-cy=deadline-card]').should('have.length.at.least', 1);
    cy.contains('a', 'Матеріали').click();
    cy.contains('h1', 'Матеріали групи').should('be.visible');
  });

  it('показує сторінку 404 для неіснуючої адреси', () => {
    cy.visit('/abc');
    cy.contains('404');
  });
});
