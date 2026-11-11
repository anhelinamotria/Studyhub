import Tag from './Tag.jsx';

describe('<Tag />', () => {
  it('рендерить текст мітки', () => {
    cy.mount(<Tag>завтра</Tag>);
    cy.contains('завтра').should('be.visible').and('have.attr', 'data-variant', 'default');
  });

  it('застосовує варіант кольору', () => {
    cy.mount(<Tag variant="r">завтра</Tag>);
    cy.contains('завтра').should('have.attr', 'data-variant', 'r');
  });
});
