import DeadlineItem from './DeadlineItem.jsx';

describe('<DeadlineItem />', () => {
  it('показує «завтра» червоною міткою', () => {
    cy.mount(
      <DeadlineItem title="Лаб. 3" dueDate="2026-11-12" today={new Date('2026-11-11T10:00:00')} />,
    );
    cy.contains('Лаб. 3');
    cy.get('[data-variant]').should('have.text', 'завтра').and('have.attr', 'data-variant', 'r');
  });
});
