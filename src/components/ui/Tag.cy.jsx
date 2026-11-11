import Tag from './Tag.jsx';

describe('<Tag />', () => {
  it('рендерить текст мітки', () => {
    cy.mount(<Tag>завтра</Tag>);
    cy.contains('завтра').should('have.class', 'tag');
  });

  it('додає клас кольору', () => {
    cy.mount(<Tag variant="r">завтра</Tag>);
    cy.get('.tag').should('have.class', 'r');
  });
});
